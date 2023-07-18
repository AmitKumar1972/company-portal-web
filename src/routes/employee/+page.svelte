<script>
    import { Card, MenuButton, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
	import SideBar from "../../components/SideBar.svelte";
</script>

<div class="flex flex-row w-screen h-screen">
    <SideBar />
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
        <div class="w-full h-full flex flex-col">
            <div class="w-full h-full flex flex-row">
                <div class="font-semibold text-4xl ml-5 mt-5">
                    32 Employee
                </div>
                <button>+New Candidate</button>
            </div>
            <div>
              <Card padding='sm'>
                <div class="flex justify-end">
                  <MenuButton />
                  <Dropdown class="w-36">
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Export data</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </Dropdown>
                </div>
                <div class="flex flex-col items-center pb-4">
                  <Avatar size="lg" src="https://media.istockphoto.com/id/1009749608/photo/young-woman-portrait-in-the-city.jpg?s=612x612&w=0&k=20&c=nBmdXrCkI6Zz-J1EkCGQAamaYlZeIOQAtKunC4WMT-U=" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div class="flex mt-4 space-x-3 lg:mt-6">
                      <Button>Add friend</Button>
                      <Button color="light" class="dark:text-white">Message</Button>
                    </div>
                </div>
              </Card>
            </div>
        </div>
    </div>
</div>
