"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatusMessage("Success");
      } else {
        setStatusMessage("Error");
      }
    } catch (err) {
      console.log(err);
      setStatusMessage("Error while send data");
    }
  };

  return (
    <div className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-lg">
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Name
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:focus:border-neutral-200 dark:focus:ring-neutral-50/10"
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Email
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:focus:border-neutral-200 dark:focus:ring-neutral-50/10"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="pt-2">
              <input
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                value="Send"
              />
            </div>
          </div>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-300">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}
