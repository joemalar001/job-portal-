import { useState } from "react";
import axios from "../api";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/auth/login", form);
        localStorage.setItem("token", res.data.token);
        alert("Login success");
    };

    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={submit} className="bg-white p-6 shadow w-96">
                <h2 className="text-xl font-bold mb-4">Login</h2>

                <input
                    placeholder="Email"
                    className="input"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input mt-2"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />

                <button className="btn mt-4">Login</button>
            </form>
        </div>
    );
}
