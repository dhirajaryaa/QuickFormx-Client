import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MessageSquareText, Calendar, Send, Trash2, Edit } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteFormMutation } from '@/app/services/formApi';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { setForms } from '@/app/features/formSlice';
import { setActiveTab } from '@/app/features/uiSlice';

function FormCard({ form, refetch }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isDelete, { isLoading }] = useDeleteFormMutation();

    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    }

    function handleFormClick() {
        dispatch(setActiveTab("View Form"))
        navigate(`/forms/${form._id}`)
    }

    function stopBubble(e) {
        e.stopPropagation()
    }

    function handleDelete(e) {

        isDelete(form._id).unwrap()
            .then((data) => {
                refetch().unwrap().then((forms) => {
                    dispatch(setForms(forms));
                })
            }).catch((error) => {
                toast.error(error?.data?.message);
            })
        stopBubble(e)
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
                            <Link to={`/forms/${form._id}/edit`}>
                                <Edit />
                            </Link>
                        </Button>

                        {/* Delete */}

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={(e) => {
                                        stopBubble(e);
                                    }}
                                >
                                    <Trash2 />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete this form?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. It will permanently delete the form and all its submission data.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={handleDelete}
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FormCard
