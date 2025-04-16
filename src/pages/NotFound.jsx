import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 dark:text-white">404</h1>
            <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
                Oops! Page not found
            </p>
            <p className="text-sm text-muted-foreground mt-2">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Button onClick={() => navigate(-1)} className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
            </Button>
        </main>
    )
}
