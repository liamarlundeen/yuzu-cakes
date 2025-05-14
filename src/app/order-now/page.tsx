"use client";
// https://docs.google.com/spreadsheets/d/11yn-0T0mmvavpUXiCZggPHyKwdF4MJRRuKwnsCTUBZg/edit?gid=0#gid=0

import React, { useState, FormEvent } from "react";
import "../styles/menu.css"

export default function OrderNow() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzW9fBnGerfyFzHp6XiU8B-LEk18Gay5NZ9Kp4L117dfbuawJZrIjw1ZdLicLzzdLz8/exec", {
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

  return (
    <div className="menu-container">
    <div className="min-h-screen bg-[#FAF7F2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 uppercase">
          ORDER NOW
        </h1>
        <p className="mt-2 text-center text-sm text-gray-700">
          If you would like to order a custom cake, please fill out this form.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="mt-10 space-y-10"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
              />
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="(123) 456-7890"
                className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
              />
            </div>
          </div>

          {/* Venmo or Zelle */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Venmo or Zelle <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500">
              To request deposit once order is confirmed.
            </p>
            <input
              name="payment"
              type="text"
              required
              placeholder="@yourhandle"
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />
          </div>

          {/* Pick-Up Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Pick-Up Date <span className="text-red-500">*</span>
            </label>
            <input
              name="pickupDate"
              type="date"
              required
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />
          </div>

          {/* Flavor */}
          <fieldset>
          <legend className="block text-sm font-semibold text-gray-900">
            Flavor <span className="text-red-500">*</span>
          </legend>
          {}
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {["Strawberry", "Biscoff", "Oreo"].map((flav) => (
              <label key={flav} className="inline-flex items-center">
                <input
                  type="radio"
                  name="flavor"
                  value={flav.toLowerCase()}
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-gray-300"
                />
                <span className="ml-2 text-gray-900">{flav}</span>
              </label>
            ))}
          </div>
        </fieldset>


          {/* Occasion */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Occasion
            </label>
            <input
              name="occasion"
              type="text"
              placeholder="Please explain the occasion for this cake."
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />
          </div>

          {/* Writing on the Cake */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Writing on the Cake
            </label>
            <input
              name="writing"
              type="text"
              placeholder="Exact text for the cake."
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />

            <input
              name="writingColor"
              type="text"
              placeholder="What color should it be?"
              className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Special Instructions
            </label>
            <textarea
              name="instructions"
              rows={4}
              placeholder="Any extra details for your cake?"
              className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
            />
          </div>

          {/* Inspiration Upload */}
          <div>
            <p className="text-sm text-gray-900 font-semibold">
              Inspiration Pictures
            </p>
            <input
              id="upload"
              name="upload"
              type="file"
              className="mt-3 block w-full text-gray-700"
            />
          </div>

          {/* Disclaimer */}
          <div className="flex items-start">
            <input
              id="disclaimer"
              name="disclaimer"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-gray-300"
            />
            <label htmlFor="disclaimer" className="ml-3 text-sm text-gray-900">
              I have read the disclaimer. All deposits are non-refundable.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
