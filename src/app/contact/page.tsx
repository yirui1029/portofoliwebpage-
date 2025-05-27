"use client";
import Header from "../../components/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  // variable pour le formulaire
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset(); // Réinitialiser le formulaire
        setIsSended(true); // Afficher le message de succès
      }
    }
  };

 
  return (
    <main className="flex flex-col justify-center min-h-screen p-4 bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] scroll-auto">
     <Header />

      <div className="mt-75 w-full max-w-2xl bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl center mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contactez-moi</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Une idée, un projet ou juste envie d’échanger ? Envoyez-moi un message
          !
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <small className="text-shadow-amber-500">
                Un petit nom pour mieux vous connaître ?
              </small>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <small className="text-shadow-amber-500">
                Une petite adresse mail et on est bons !
              </small>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message..."
              {...register("message", {
                required: true,
              })}
            ></textarea>
            {errors.message && (
              <small className="text-shadow-amber-500">
                Un mot de votre part est nécessaire pour que je puisse vous
                répondre{" "}
              </small>
            )}
          </div>
          <div className="text-center">
            {!isLoading && (
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-300 transition duration-300"
              >
                Envoyer
              </button>
            )}
          </div>
          {isSended && (
            <p>
              Votre message a bien été envoyé avec succès je vous répondrai
              rapidement.
            </p>
          )}
          <p className="text-center">Les emails de ce site sont envoyés via <span className="font-medium text-blue-700">SendGrid</span>.</p>
        </form>
      </div>
      <Footer></Footer>
    </main>
  );
}
