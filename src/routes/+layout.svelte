<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
</script>

<!-- <DarkMode btnClass={darkmodebtn} /> -->

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <img
		src="/images/dht32b.svg"

		class="mr-3 h-6 sm:h-9"
		alt="Downhole Testing Logo"
	  />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
		Downhole Testing
	  </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
	  <NavLi href="/" active={true}>Home</NavLi>
	  <NavLi href="/tech">Our Technology</NavLi>
	  <!-- <NavLi href="/services">Services</NavLi>
	  <NavLi href="/pricing">Pricing</NavLi>
	  <NavLi href="/contact">Contact</NavLi> -->
	</NavUl>
  </Navbar>

<slot />



<footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="flex flex-row justify-around" >
	 <p></p>
	 <p class="text-center">
		© 2023 : Downhole Testing Ltd - All rights reserved
	</p>
	<div class="flex flex-row">
		<!-- <a href="https://www.linkedin.com/"><svg class="w-8 h-8" viewBox="0 0 24 24"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" /></svg></a> -->
		<!-- <a href="https://www.google.com/"><svg class="w-8 h-8" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16.06 6.03,17.54L14.9,9.9C13.55,8.92 12,7.5 12,6C12,4.5 13.5,4 15,4A3,3 0 0,1 18,7C18,7.35 17.94,7.7 17.83,8.06L20.24,10.45C20.33,10 20.33,9.7 20.24,9.39L18.83,7.97C19.3,7.19 19.3,6.2 18.83,5.41L20.82,3.42C20.93,3.15 21,2.89 21,2.62A4,4 0 0,0 17,2A4,4 0 0,0 13,6C13,6.31 12.94,6.65 12.83,7L14.9,9C15.06,8.7 15.12,8.37 15.12,8A4,4 0 0,0 11,4C11,4 10.87,4 10.74,4L12,4M7,9C7.55,9 8,9.45 8,10C8,10.55 7.55,11 7,11C6.45,11 6,10.55 6,10C6,9.45 6.45,9 7,9M17,9C17.55,9 18,9.45 18,10C18,10.55 17.55,11 17,11C16.45,11 16,10.55 16,10C16,9.45 16.45,9 17,9M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg></a> -->
	
	</div>
	
	</div>
  </footer>