export default function JobCard({ job }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-2">
            <h2 className="font-bold text-lg">{job.title}</h2>

            <div className="text-sm text-gray-600 dark:text-gray-300">
                <p>{job.company}</p>
                <p>📍 {job.location}</p>
            </div>

            <button className="mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm">
                Apply Now
            </button>
        </div>
    );
}
