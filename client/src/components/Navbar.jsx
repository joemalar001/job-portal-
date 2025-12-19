import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [dark, setDark] = useState(
        localStorage.getItem("dark") === "true"
    );
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("dark", dark);
    }, [dark]);

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="
  text-xl 
  font-bold
  text-gray-900 
  dark:text-white
">
                    Job Portal
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/jobs">Jobs</Link>

                    <button onClick={() => setDark(!dark)}>
                        {dark ? "☀️" : "🌙"}
                    </button>

                    <button onClick={logout} className="text-red-500">
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
}
