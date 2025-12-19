import { useEffect, useState } from "react";
import API from "../api";
import JobCard from "../components/JobCard";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        API.get("/jobs").then((res) => setJobs(res.data));
    }, []);

    return (
        <div className="p-4 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
}
