import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquareText, Calendar, Send, Trash2, Edit } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function FormCard({ form }) {
    const navigate = useNavigate()

    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    }

    function handleFormClick() {
        navigate(`/forms/${form._id}`)
    }

    function stopBubble(e) {
        e.stopPropagation()
    }

    return (
        <Card
            onClick={handleFormClick}
            className="cursor-pointer hover:shadow-md transition"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleFormClick()
            }}
        >
            <CardHeader>
                <CardTitle
                    onClick={handleFormClick}
                    className="text-lg truncate hover:underline"
                >
                    {form.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                    {form.description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2 text-sm">
                        <Send className="size-4" /> Submissions: {form.submissionCount || "12"}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                        <Calendar className="size-4" /> Created: {formatDate(form.createdAt)}
                    </p>
                </div>

                <div className="flex justify-between gap-2 items-center mt-3">
                    {/* View submissions */}
                    <Button asChild size="sm" onClick={stopBubble}>
                        <Link to={`/dashboard/forms/${form._id}/submissions`}>
                            <MessageSquareText className="mr-1" /> Submission
                        </Link>
                    </Button>

                    <div className="flex gap-2">
                        {/* Edit */}
                        <Button asChild size="icon" variant="outline" onClick={stopBubble}>
                            <Link to={`/dashboard/forms/${form._id}/edit`}>
                                <Edit />
                            </Link>
                        </Button>

                        {/* Delete */}
                        <Button
                            variant="destructive"
                            size="icon"
                            onClick={(e) => {
                                stopBubble(e)
                                handleDelete(form._id)
                            }}
                        >
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FormCard
