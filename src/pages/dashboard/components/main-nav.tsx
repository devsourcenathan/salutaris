
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                to="/overview"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Overview
            </Link>
            <Link
                to="/saving"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Epargnes
            </Link>
            <a
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Products
            </a>
            <a
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </a>
        </nav>
    )
}