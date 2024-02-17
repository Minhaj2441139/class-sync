'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignupPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const signupHandler = async (e) => {
        const body = { name, email, password, confirmPassword: confirm_password, role };
        const res = await (await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })).json();

        if (!res.error) {
            router.push('/')
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/home')
        }
    }, [])

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">

                    <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up for an account
                    </h2>


                    <form className="space-y-6" method="POST" onSubmit={e => {
                        e.preventDefault();
                        signupHandler();
                    }}>

                        <div>
                            <label for="new-password" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1">
                                <input name="name" type="name" required value={name} onChange={e => setName(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input name="email" type="email-address" autocomplete="email-address" required
                                    value={email} onChange={e => setEmail(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input name="password" type="password" autocomplete="password" required
                                    value={password} onChange={e => setPassword(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="mt-1">
                                <input name="confirm_password" type="password" autocomplete="confirm-password" required value={confirm_password} onChange={e => setConfirmPassword(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <select class="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={e => setRole(e.target.value)}>
                                <option value="admin">Teacher</option>
                                <option value="user">Student</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" onClick={signupHandler}
                                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                                Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;