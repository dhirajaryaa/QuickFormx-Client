import { setForms } from '@/app/features/formSlice'
import { setActiveTab } from '@/app/features/uiSlice'
import { useGetAllFormsQuery } from '@/app/services/formApi'
import { FormCard, SearchBar } from '@/components/custom'
import { Button } from '@/components/ui/button'
import Layout from '@/layout/Layout'
import { PlusCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function FormPage() {
    const { isLoading, data: forms } = useGetAllFormsQuery();
    const dispatch = useDispatch();
    // set forms data in state 
    useEffect(() => {
        dispatch(setForms(forms));
        dispatch(setActiveTab("All Forms"));
    }, [forms]);


    return (
        <Layout>
            <section className='p-3'>
                {/* top bar */}
                <div className='flex items-center justify-between px-3'>
                    {/* search form  */}
                    <SearchBar />
                    {/* add form page  */}
                    <Link to={"/pages/create"}>
                        <Button variant={'destructive'}>
                            <PlusCircle className="size-6" />
                            New Form
                        </Button>
                    </Link>

                </div>
                {/* list form  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 mt-2">
                    {forms && forms.map((form) => (
                        <FormCard form={form} key={form._id} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default FormPage
