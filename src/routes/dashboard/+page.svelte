<script>
    import { Card } from "flowbite-svelte";
</script>

<div class="flex flex-row w-screen h-screen">
    <div
        class="w-24 h-screen bg-gray-700 flex flex-col items-center  border-r-[1px] border-gray-medium-2"
    >
        <div class="mt-8">
            <button class="hover:ring-slate-400 ring-2 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12 text-white p-2 bg-blue-800 rounded-full"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    />
                </svg>
            </button>
        </div>
        <button class=" text-white text-4xl text-center"> + </button>
    </div>
    <div class="w-1/6 h-screen bg-gray-700 flex flex-col">
        <div class="h-32 border-b-[1px] border-gray-medium-2">
            <button
                class="container flex flex-row items-center w-36 h-12 hover:bg-stone-600 text-2xl font-semibold font-sans text-slate-100 text-start ml-4 mt-3 overflow-hidden pl-2 rounded-lg align-middle"
            >
                <div>Glue Labs</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2 mt-1 text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
        </div>
        <div>
            <button
                class="flex flex-row items-center text-2xl text-slate-100 w-11/12 h-12 hover:bg-stone-600 focus:bg-stone-600 font-medium px-4 ml-2 mt-6 rounded-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3 text-red-50"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
                Dashboard
            </button>
            <button
                class="flex flex-row items-center text-2xl text-slate-100 w-11/12 h-12 hover:bg-stone-600 focus:bg-stone-600 font-medium px-4 ml-2 mt-6 rounded-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3 mt-1 text-red-50"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                Attendance
            </button>
            <button
                class="flex flex-row items-center text-2xl text-slate-100 w-11/12 h-12 hover:bg-stone-600 focus:bg-stone-600 font-medium px-4 ml-2 mt-6 rounded-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3 mt-1 text-red-50"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                Leave
            </button>
            <button
                class="flex flex-row items-center text-2xl text-slate-100 w-11/12 h-12 hover:bg-stone-600 focus:bg-stone-600 font-medium px-4 ml-2 mt-6 rounded-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3 mt-1 text-red-50"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                </svg>
                Employee
            </button>
        </div>
        <div class="h-screen flex flex-col justify-end">
            <button
                class="flex flex-row items-center text-2xl text-slate-100 w-11/12 h-12 hover:bg-stone-600 focus:bg-stone-600 font-medium px-4 ml-2 mb-3 mt-6 rounded-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-3 mt-1 text-red-50"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                Management
            </button>
        </div>
    </div>
    <div class="w-full h-full flex flex-col bg-neutral-100">
        <div
            class="flex flex-row items-center w-full h-[70px] border-b-2 overflow-hidden bg-slate-100"
        >
            <div class="w-[60%] flex justify-end items-center">
                <input
                    class="border-2 placeholder:text-lg rounded-xl ring-1 my-2 py-2 px-8 mr-2 outline-sky-500"
                    placeholder="Search Employee"
                    type="text"
                />
                <svg
                    class="w-8 h-8 fill-slate-400"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="SearchIcon"
                    ><path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    /></svg
                >
            </div>
            <div class="w-[40%] flex justify-end mr-5">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
        <div class="w-full h-full flex flex-row">
            <div class="w-[70%] h-full flex flex-col">
                <div class="font-semibold text-4xl ml-5 mt-5">
                    Welcome Admin
                </div>
                <div class="w-full h-[25%] flex flex-row items-center">
                    <div
                        class="flex flex-col justify-center items-center w-56 h-[50%] bg-gray-600 ml-5 rounded-lg overflow-hidden"
                    >
                        <p class="text-5xl text-white">40</p>
                        <p class="text-white text-xl font-sans">
                            Total Employees
                        </p>
                    </div>
                    <div
                        class="w-56 h-[50%] flex flex-col justify-center items-center bg-green-700 ml-10 rounded-lg overflow-hidden"
                    >
                        <p class="text-5xl text-white">30</p>
                        <p class="text-white text-xl font-sans">On Time</p>
                    </div>
                    <div
                        class="w-56 h-[50%] flex flex-col justify-center items-center bg-red-500 ml-10 rounded-lg overflow-hidden"
                    >
                        <p class="text-5xl text-white">7</p>
                        <p class="text-white text-xl font-sans">Late</p>
                    </div>
                    <div
                        class="w-56 h-[50%] flex flex-col justify-center items-center bg-yellow-500 ml-10 mr-5 rounded-lg overflow-hidden"
                    >
                        <p class="text-5xl text-white">04</p>
                        <p class="text-white text-xl font-sans">Absent</p>
                    </div>
                </div>
                <div class="w-full h-[70%] flex flex-row">
                    <div class="w-[33%] flex flex-col border-r-4">
                        <div
                            class="w-full overflow-hidden font-sans text-2xl text-black font-semibold ml-5"
                        >
                            Recent Attendees
                        </div>
                        <div class="w-[100%] h-28 mt-5 bg-slate-100">
                            <div class="flex flex-row justify-around">
                                <div>
                                    <img
                                        src="https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U="
                                        alt="Imag"
                                        class="w-12 h-12 rounded-full object-cover mt-2"
                                    />
                                </div>
                                <div class="mt-2">
                                <p class="text-bold text-2xl">Ravina Tandon</p>
                                <p class="mt-3 text-base text-gray-400">
                                    Time Checked In : <span class="text-bold"
                                        >9:00 am</span
                                    >
                                </p>
                                <p class="text-base text-gray-400">
                                    Time Checked Out : <span class="text-bold"
                                        >12:00 pm</span
                                    >
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] h-28 mt-5 bg-slate-100">
                            <div class="flex flex-row justify-around">
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Imag"
                                        class="w-12 h-12 rounded-full object-cover mt-2"
                                    />
                                </div>
                                <div class="mt-2">
                                <p class="text-bold text-2xl">Amit Kumar</p>
                                <p class="mt-3 text-base text-gray-400">
                                    Time Checked In : <span class="text-bold"
                                        >8:00 am</span
                                    >
                                </p>
                                <p class="text-base text-gray-400">
                                    Time Checked Out : <span class="text-bold"
                                        >04:00 pm</span
                                    >
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="h-28 flex flex-row justify-around bg-slate-100 mt-3">
                            <div>
                                <img
                                    src="https://www.shutterstock.com/image-photo/portrait-casually-dressed-young-african-260nw-666436030.jpg"
                                    alt="Imag"
                                    class="w-12 h-12 rounded-full object-cover mt-2"
                                />
                            </div>
                            <div class="mt-2">
                            <p class="text-bold text-2xl">Austrey Lio</p>
                            <p class="mt-3 text-base text-gray-400">
                                Time Checked In : <span class="text-bold"
                                    >10:00 am</span
                                >
                            </p>
                            <p class="text-base text-gray-400">
                                Time Checked Out : <span class="text-bold"
                                    >01:00 pm</span
                                >
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="w-full overflow-hidden font-sans text-2xl text-black font-semibold ml-5">
                            Announcements
                        </div>
                        <div class="mx-2 mt-4">
                            <Card size = 'md' class="bg-slate-100">
                                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Office Party Tommorrow</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                                  Here again There is a party at social sharp 8:00 pm tommorrow.
                                </p>
                            </Card>
                        </div>
                        <div class="mx-2 mt-4">
                            <Card size = 'md' class = "bg-slate-100">
                                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Payments Feature Released Today</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                                  After so many days of waiting finally payments feature on fifo is going to be released.
                                </p>
                            </Card>
                        </div>
                        <div class="mx-2 mt-4">
                            <Card size = 'md' class = "bg-slate-100">
                                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Everyone should Learn Svelete in Next 2 weeks</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                                  It is fastest growing framework Everyone should have this in their skills.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[30%] border-l-2" />
        </div>
    </div>
</div>
