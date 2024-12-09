<script>
  import Language from "./Language.svelte";
  export let lang;
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class=" text-white border border-solid border-hex-gold-400 flex">
  <section class="container mx-auto flex items-center justify-between p-4">
    <h1 class=" text-hex-gold-100 text-2xl font-bold">SP</h1>
    <nav class="hidden md:flex space-x-6">
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">Home</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">About</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">Projects</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">Contact</a
      >
    </nav>
    <button
      on:click={toggleMenu}
      class="block md:hidden focus:outline-none"
      aria-label="Toggle Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
        />
      </svg>
    </button>
  </section>
  {#if isMenuOpen}
    <nav class="md:hidden bg-hex-blue-400">
      <ul class="flex flex-col space-y-4 p-4">
        <li>
          <a
            href="#"
            on:click={(e) => e.preventDefault()}
            class="hover:text-hex-gold-400">Home</a
          >
        </li>
        <li>
          <a
            href="#"
            on:click={(e) => e.preventDefault()}
            class="hover:text-hex-gold-400">About</a
          >
        </li>
        <li>
          <a
            href="#"
            on:click={(e) => e.preventDefault()}
            class="hover:text-hex-gold-400">Projects</a
          >
        </li>
        <li>
          <a
            href="#"
            on:click={(e) => e.preventDefault()}
            class="hover:text-hex-gold-400">Contact</a
          >
        </li>
      </ul>
    </nav>
  {/if}
  <Language {lang} />
</header>
