'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/utils/validation";
import { z } from "zod";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Link from "next/link";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const { register: signup } = useAuth(); 
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await signup(data);
            toast.success('Account created successfully');
            router.push('/');
        } catch (error: any) {
            toast.error(error.response?.data?.message || "An error happened!");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
                <h2 className="text-center text-3xl font-bold text-gray-900">Create new account</h2>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4 text-gray-800">
                        <div>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Full name"
                                className={`w-full rounded-md border px-3 py-2 focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

     
                        <div>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="name@example.com"
                                className={`w-full rounded-md border px-3 py-2 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                       
                        <div>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="password**"
                                className={`w-full rounded-md border px-3 py-2 focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300 focus:border-blue-500"}`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                    >
                        {isSubmitting ? "Creating account..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        login here
                    </Link>
                </p>
            </div>
        </div>
    )
}
