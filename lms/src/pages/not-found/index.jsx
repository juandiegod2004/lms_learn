import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Oops! Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-6">
                It seems the page you're looking for doesn't exist.
            </p>
            <Link to="/">
                <Button variant="outline" className="px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}

export default NotFoundPage;
