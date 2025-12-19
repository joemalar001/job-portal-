import { Link } from "react-router-dom";

export default function MobileNav() {
    return (
        <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-700 md:hidden">
            <div className="flex justify-around py-3 text-sm">
                <Link to="/dashboard">🏠</Link>
                <Link to="/jobs">💼</Link>
                <Link to="/add-job">➕</Link>
                <Link to="/login">👤</Link>
            </div>
        </nav>
    );
}
