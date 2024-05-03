'use client'

import { useState } from "react";

export default function FormSec() {


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")


  const saveHandler = async (e) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        firstName,
        lastName,
        email,
        company,
        phoneNumber,
        message
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

     const response = await fetch("http://localhost:3000/api/sendMail", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

        console.log('response', response)
        if (!response.ok) {
          alert("some went wrong in response")
          return
        }

        alert("data saved")
    } catch (error) {

    }
  }

  return (
    <div class="bg-gray-100 px-10 lg:px-16 rounded-md">
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        ></div>
      </div>
      <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="company"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => { setCompany(e.target.value) }}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <svg
                  class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="tel"
                name="phone-number"
                value={phoneNumber}
                onChange={(e) => { setPhoneNumber(e.target.value) }}
                class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div class="mt-2.5">
              <textarea
                name="message"
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <button
                type="button"
                class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                role="switch"
                aria-checked="false"
                aria-labelledby="switch-1-label"
                
              >
                <span class="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
            <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" class="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            onClick={saveHandler}
            class="block w-full rounded-md my-5 py-3 bg-red-600 lg:px-3.5 lg:py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}




