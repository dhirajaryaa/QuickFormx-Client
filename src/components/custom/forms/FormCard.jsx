import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MessageSquareText, Calendar, Send, Trash2, Edit } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function FormCard({ form }) {
    const navigate = useNavigate()
    // format data 
    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    }
    // handle form click 
    function handleFormClick() {
        navigate(`/forms/${form._id}`);
    }
    return (
        <Card onClick={handleFormClick}
            className="cursor-pointer hover:shadow-md transition"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleFormClick()
            }}>
            <CardHeader>
                <CardTitle className={"text-lg truncate"}>{form.title}</CardTitle>
                <CardDescription className={"text-sm line-clamp-2"}>{form.description}</CardDescription>
            </CardHeader>
            <CardContent >
                {/* Detail Row */}
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2 text-sm">
                        <Send className='size-4' />Submissions : {form.submissionCount || "12"}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <Calendar className='size-4' /> Created : {formatDate(form.createdAt)}
                    </p>

                </div>
                <div className="flex justify-between gap-2 items-center mt-3">
                    {/* view submission  */}
                    <Button asChild size="sm" >
                        <Link to={`/dashboard/forms/${form.id}/submissions`}>
                            <MessageSquareText /> Submission
                        </Link>
                    </Button>
                    <div className='flex gap-2'>
                        {/* edit task  */}
                        <Button asChild size={'icon'} variant={'outline'}>
                            <Link to={`/dashboard/forms/${form._id}/edit`}>
                                <Edit />
                            </Link>
                        </Button>
                        {/* delete task  */}
                        <Button variant="destructive" size="icon" onClick={() => handleDelete(form._id)}>
                            <Trash2 />
                        </Button>



                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default FormCard
