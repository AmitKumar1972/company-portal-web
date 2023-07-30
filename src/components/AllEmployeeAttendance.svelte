<script>
    let allUsersAttendance = [
			{ employeeName: 'John Doe', checkIn: '09:00 AM', checkOut: '05:00 PM', totalHours: '5' },
			{ employeeName: 'Jane Smith', checkIn: '08:30 AM', checkOut: '06:00 PM', totalHours: '3' },
			{ employeeName: 'Alex Johnson', checkIn: '09:30 AM', checkOut: '05:30 PM', totalHours: '1' }
	];
</script>
<div class="mb-6">
    <h2 class="text-xl font-semibold mb-2">Attendance</h2>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Employee Name</th
                    >
                    <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Check-In</th
                    >
                    <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Check-Out</th
                    >
                    <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >Total Hours</th
                    >
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                {#each allUsersAttendance as attendance}
                    <tr class="hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >{attendance.employeeName}</td
                        >
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >{attendance.checkIn}</td
                        >
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >{attendance.checkOut}</td
                        >
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >{attendance.totalHours}</td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>