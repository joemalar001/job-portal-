import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="p-4 pb-20">
            <h1 className="text-xl font-bold mb-4">Dashboard</h1>

            <div className="grid gap-4">
                <Link
                    to="/add-job"
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between"
                >
                    <span>Post a Job</span>
                    <span>➕</span>
                </Link>

                <Link
                    to="/jobs"
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between"
                >
                    <span>Browse Jobs</span>
                    <span>💼</span>
                </Link>
            </div>
        </div>
    );
}
