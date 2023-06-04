import { BookOpenIcon } from '@heroicons/react/20/solid'


export default function Footer() {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 border-t-gray-300 border-2">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 mb-5">
            <BookOpenIcon className="h-6 w-5 flex-none text-black" aria-hidden="true"  />

          Kept    
      </a>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">© 2021-2022 <a href="#" class="hover:underline">Kept™</a>. All Rights Reserved.</span>
  </div>
</footer>
    )
}