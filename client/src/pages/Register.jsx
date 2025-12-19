import { useState } from "react";
import axios from "../api";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("/auth/register", form);
        alert("Registered successfully");
    };

    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={submit} className="bg-white p-6 shadow w-96">
                <h2 className="text-xl font-bold mb-4">Register</h2>

                <input
                    placeholder="Name"
                    className="input"
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                    placeholder="Email"
                    className="input mt-2"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input mt-2"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />

                <button className="btn mt-4">Register</button>
            </form>
        </div>
    );
}
