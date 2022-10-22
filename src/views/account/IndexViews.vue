<template>
  <div
    id="page-container"
    class="relative flex-grow h-full px-8 overflow-y-scroll"
  >
    <div class="h-full max-w-[82rem] pt-8">
      <div class="flex items-center">
        <h1 class="title">Account</h1>
        <div class="flex-grow"></div>
      </div>
      <h2 class="mt-6 font-medium text-gray-800">Personal information</h2>
      <p class="mt-2 text-sm text-gray-500">
        Provide your name and email so we can get in touch with you.
      </p>
      <div class="mt-4">
        <!-- <form class="flex flex-col max-w-xl gap-4 mt-6">
          <div class="flex gap-4">
            <div class="w-full">
              <label for="fname" class="block text-sm font-medium"
                ><div class="flex items-center gap-2">
                  First name
                  <div></div>
                </div>
              </label>
              <div
                class="flex w-full mt-2 text-sm duration-200 rounded-md shadow-sm"
              >
                <input
                  id=""
                  name="fname"
                  type="text"
                  spellcheck="false"
                  placeholder=""
                  class="block flex-grow rounded-r-md border py-2.5 px-2 text-sm disabled:opacity-60 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="w-full">
              <label for="lname" class="block text-sm font-medium"
                ><div class="flex items-center gap-2">
                  Last name
                  <div></div>
                </div>
              </label>
              <div
                class="flex w-full mt-2 text-sm duration-200 rounded-md shadow-sm"
              >
                <input
                  id=""
                  name="lname"
                  type="text"
                  spellcheck="false"
                  placeholder=""
                  class="block flex-grow rounded-r-md border py-2.5 px-2 text-sm disabled:opacity-60 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="avatar" class="block text-sm font-medium"
              ><div class="flex items-center gap-2">
                Your avatar
                <div></div>
              </div>
            </label>
            <div class="flex items-center gap-2">
              <label tabindex="0"
                ><span class="sr-only" aria-label="required">not-required</span>
                <div class="flex items-center gap-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/senja-io.appspot.com/o/public%2F6TSZlPEzg4F5UDwuIdL01-tablet_wallpaper_green_gg.jpg?alt=media&amp;token=b71faaa1-3178-453e-a5c0-f6a06aa7378b"
                    alt=""
                    class="object-cover w-10 h-10 rounded-full"
                  />
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-semibold bg-white border border-gray-300 rounded-md shadow-sm"
                  >
                    Pick an image
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                  autocomplete="off"
                  style="display: none"
              /></label>
              <div class="ml-2 text-gray-600">
                <button type="button" class="p-1 rounded-md hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide-icon lucide lucide-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="max-w-sm">
            <div class="w-full">
              <label for="email" class="block text-sm font-medium"
                ><div class="flex items-center gap-2">
                  Email
                  <div></div>
                </div>
              </label>
              <div
                class="flex w-full mt-2 text-sm duration-200 rounded-md shadow-sm"
              >
                <input
                  id=""
                  name="email"
                  type="text"
                  disabled
                  spellcheck="false"
                  placeholder=""
                  class="block flex-grow rounded-r-md border py-2.5 px-2 text-sm disabled:opacity-60 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="bg-primary focus:bg-primary-400 hover:bg-primary-400 block appearance-none rounded-md text-sm font-medium text-white duration-100 focus:outline-none disabled:opacity-75 px-4 py-2.5"
            >
              <div class="relative flex items-center justify-center">
                <div class="duration-100 undefined false">Save changes</div>
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0"
                >
                  <div class="">
                    <svg
                      id="dots"
                      width="32px"
                      viewBox="0 0 132 58"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="svelte-10juqow"
                    >
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g id="dots" fill="currentColor" class="svelte-10juqow">
                          <circle
                            id="dot1"
                            cx="25"
                            cy="30"
                            r="13"
                            class="svelte-10juqow"
                          ></circle>
                          <circle
                            id="dot2"
                            cx="65"
                            cy="30"
                            r="13"
                            class="svelte-10juqow"
                          ></circle>
                          <circle
                            id="dot3"
                            cx="105"
                            cy="30"
                            r="13"
                            class="svelte-10juqow"
                          ></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </form> -->
      </div>
    </div>
  </div>
</template>
