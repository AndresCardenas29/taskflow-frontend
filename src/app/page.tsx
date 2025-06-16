"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function Home() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	// Aquí podrías manejar el envío del formulario, por ejemplo, enviando los datos a una API
	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Aquí podrías hacer una llamada a una API para autenticar al usuario
		fetch("http://127.0.0.1:4000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, pass: password }),
		})
			.then(async (response) => {
				let data = await response.json();
				if (!response.ok) {
					throw new Error(data.message);
				}
				return data; // Devuelve los datos de la respuesta JSON
			})
			.then((data: { access_token: string }) => {
				// guarda el token en el navegador con js-cookie
				Cookies.set("token", data.access_token, { expires: 1 });
				// redirige al usuario a la página de dashboard
				router.push("/dashboard");
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Usuario o contraseña incorrectos!",
				});
			});
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 h-screen">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					{/* <img
						alt="TaskFlow Logo"
						src=""
						className="mx-auto h-10 w-auto"
					/> */}
					<h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-50">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form action="#" method="POST" className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm/6 font-medium text-gray-50"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									onChange={(e) => setEmail(e.target.value)}
									name="email"
									type="email"
									required
									autoComplete="email"
									placeholder="name@example.com"
									className="block w-full rounded-md text-white px-3 py-1.5 text-base bg-gray-900 outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-800 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm/6 font-medium text-gray-50"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									onChange={(e) => setPassword(e.target.value)}
									name="password"
									type="password"
									required
									placeholder="••••••••"
									autoComplete="current-password"
									className="block w-full rounded-md text-white px-3 py-1.5 text-base bg-gray-900 outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								onClick={handleSubmit}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

