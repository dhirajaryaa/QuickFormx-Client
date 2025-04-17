import { setForms } from '@/app/features/formSlice'
import { setActiveTab } from '@/app/features/uiSlice'
import { useGetAllFormsQuery } from '@/app/services/formApi'
import { FormCard, SearchBar } from '@/components/custom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Layout from '@/layout/Layout'
import { FilterIcon } from 'lucide-react'
import { PlusCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function FormPage() {
    const { isLoading, data: forms, refetch } = useGetAllFormsQuery();
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
                    {/* filter btn  */}
                    <Button >
                        <FilterIcon />
                        Filters
                    </Button>


                </div>
                {/* list form  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 mt-2">
                    {/* add form btn  */}
                    <Link
                        to="/forms/create"
                        className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-muted bg-accent p-6 shadow-md hover:bg-accent/70 transition-colors duration-200"
                    >
                        <PlusCircle className="size-10 text-primary" />
                        <span className="text-base font-semibold text-primary">Create New Form</span>
                        <p className="text-sm text-muted-foreground text-center max-w-[200px]">
                            Start building a custom form for data collection and submissions.
                        </p>
                    </Link>

                    {forms && forms.map((form) => (
                        <FormCard form={form} key={form._id} refetch={refetch} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default FormPage
