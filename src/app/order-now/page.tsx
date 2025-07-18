"use client";
// https://docs.google.com/spreadsheets/d/11yn-0T0mmvavpUXiCZggPHyKwdF4MJRRuKwnsCTUBZg/edit?gid=0#gid=0

import React, { useState, FormEvent, useEffect } from "react";

export default function OrderNow() {
  const [submitting, setSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzWal1z0vyo2uwb3SKYodLyKJUFcdETdhDG4Hy9mfZ3Jerv2fkopjdbSbtXjUtgZsLd/exec", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.result === "success") {
        alert("Order submitted! 🎉");
        form.reset();
      } else {
        alert("Oops, something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }

    setSubmitting(false);
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#f9f7f5]">
        <div className="animate-pulse text-[#4a3728]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full m-0 py-8 px-0 text-[#4a3728] font-['Times_New_Roman',serif] bg-[#f9f7f5]">
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#4a3728] uppercase">
            ORDER NOW
          </h1>
          <p className="mt-2 text-center text-sm text-[#4a3728]">
            If you would like to order a custom cake, please fill out this form.
          </p>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="mt-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
                />
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#4a3728]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#4a3728]">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="(123) 456-7890"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Venmo or Zelle <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-[#666]">
                To request deposit once order is confirmed.
              </p>
              <input
                name="payment"
                type="text"
                required
                placeholder="@yourhandle"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Pick-Up Date <span className="text-red-500">*</span>
              </label>
              <input
                name="pickupDate"
                type="date"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-[#4a3728]">
                Flavor <span className="text-red-500">*</span>
              </legend>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                {["Strawberry", "Biscoff", "Oreo"].map((flav) => (
                  <label key={flav} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="flavor"
                      value={flav.toLowerCase()}
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-[#4a3728]"
                    />
                    <span className="ml-2 text-[#4a3728]">{flav}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Occasion
              </label>
              <input
                name="occasion"
                type="text"
                placeholder="Please explain the occasion for this cake."
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Writing on the Cake
              </label>
              <input
                name="writing"
                type="text"
                placeholder="Exact text for the cake."
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
              <input
                name="writingColor"
                type="text"
                placeholder="What color should it be?"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a3728]">
                Special Instructions
              </label>
              <textarea
                name="instructions"
                rows={4}
                placeholder="Any extra details for your cake?"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4a3728] text-[#4a3728]"
              />
            </div>

            <div>
              <p className="text-sm text-[#4a3728] font-semibold">
                Inspiration Pictures
              </p>
              <input
                id="upload"
                name="upload"
                type="file"
                className="mt-2 inline-block px-4 py-2 bg-[#f0f0f0] rounded-full border border-[#ddd] text-base text-[#333] text-center shadow-sm"
              />
            </div>

            <div className="flex items-start">
              <input
                id="disclaimer"
                name="disclaimer"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-[#4a3728]"
              />
              <label htmlFor="disclaimer" className="ml-3 text-sm text-[#4a3728]">
                I have read the disclaimer. All deposits are non-refundable.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-full bg-[#5b4037] text-white font-medium hover:bg-[#483229] transition disabled:opacity-50 uppercase"
            >
              {submitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}