import { useGetFormQuery } from '@/app/services/formApi'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CalendarDays, Send } from 'lucide-react'
import Layout from '@/layout/Layout'
import { NotFound } from '..'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '@/app/features/uiSlice'

function SingleForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, data: form, isError } = useGetFormQuery(id);
    useEffect(()=>{
        dispatch(setActiveTab("View Form"))
    },[])

    if (isLoading) {
        return (
            <section className='p-3'>
                <Skeleton className="h-15 w-[250px] mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-full mb-2" />
            </section>
        )
    }
    if (isError) {
        return (<NotFound />)
    }

    return (
        <Layout>
            <section className='p-3'>
                <Card className=" shadow-md border bg-accent">
                    <CardHeader>
                        <CardTitle className="text-2xl">{form?.title}</CardTitle>
                        <CardDescription>{form?.description}</CardDescription>
                        <div className="mt-3 text-sm flex gap-4 text-gray-600">
                            <div className='flex items-center gap-2'>
                                <CalendarDays size={16} /> {new Date(form?.createdAt).toLocaleDateString()}
                            </div>
                            <div className='flex items-center gap-2'>
                                <Send size={16} /> Submissions: {form?.submissionCount || 0}
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="mt-4 space-y-5">
                        {form?.fields?.map((field, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <label className="font-medium">
                                    {field.label}
                                    {field.required && <span className="text-red-500 ml-1">*</span>}
                                </label>

                                {/* Text / Email / Number / Date */}
                                {['text', 'email', 'number', 'date'].includes(field.type) && (
                                    <Input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="border px-3 py-2 rounded w-full bg-background"
                                        readOnly
                                    />
                                )}

                                {/* Textarea */}
                                {field.type === 'textarea' && (
                                    <Textarea
                                        placeholder={field.placeholder}
                                        className="border px-3 py-2 rounded w-full bg-background"
                                        readOnly
                                    />
                                )}

                                {/* Select */}
                                {field.type === 'select' && (
                                    <select
                                        className="border px-3 py-2 rounded w-full "
                                        disabled
                                    >
                                        <option value="">Select an option</option>
                                        {field.options?.map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                )}

                                {/* Checkbox */}
                                {field.type === 'checkbox' && (
                                    <div className="flex flex-col gap-1">
                                        {field.options?.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-2">
                                                <input type="checkbox" disabled /> {opt}
                                            </label>
                                        ))}
                                    </div>
                                )}

                                {/* Radio */}
                                {field.type === 'radio' && (
                                    <div className="flex flex-col gap-1">
                                        {field.options?.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-2">
                                                <input type="radio" name={field.name} disabled /> {opt}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </section>
        </Layout>
    )
}

export default SingleForm
