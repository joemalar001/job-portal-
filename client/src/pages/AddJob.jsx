export default function AddJob() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
            <h1 className="text-2xl font-bold mb-6">Post a Job</h1>

            <div className="max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <input
                    placeholder="Job Title"
                    className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                />

                <input
                    placeholder="Company"
                    className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                />

                <input
                    placeholder="Location"
                    className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">
                    Submit Job
                </button>
            </div>
        </div>
    );
}
