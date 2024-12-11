<script>
  import Language from "@components/Language.svelte";
  export let lang;
  export let header;
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="text-white border-b border-solid border-hex-gold-400 flex sticky top-0 bg-hex-blue-400 z-10 rounded-t-xl"
>
  <section
    class="container relative mx-auto flex items-center justify-between p-4"
  >
    <section class="flex gap-x-3">
      <h1 class=" text-hex-gold-100 text-2xl font-bold">SP</h1>
      <Language {lang} />
    </section>

    <nav class="hidden md:flex space-x-6">
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">{header.home}</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">{header.about}</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">{header.projects}</a
      >
      <a
        href="#"
        on:click={(e) => e.preventDefault()}
        class="hover:text-hex-gold-400">{header.contact}</a
      >
    </nav>
    <button
      on:click={() => toggleMenu()}
      class="block md:hidden focus:outline-none flex self-end"
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
    {#if isMenuOpen}
      <nav class="md:hidden absolute top-full right-0 z-10 bg-hex-blue-400">
        <ul class="flex flex-col space-y-4 p-4">
          <li class=" ">
            <a
              href="#"
              on:click={(e) => e.preventDefault()}
              class="hover:text-hex-gold-400 border-b border-b-solid hover:border-b-hex-gold-400"
              >{header.home}</a
            >
          </li>
          <li>
            <a
              href="#"
              on:click={(e) => e.preventDefault()}
              class="hover:text-hex-gold-400 border-b border-b-solid hover:border-b-hex-gold-400"
              >{header.about}</a
            >
          </li>
          <li>
            <a
              href="#"
              on:click={(e) => e.preventDefault()}
              class="hover:text-hex-gold-400 border-b border-b-solid hover:border-b-hex-gold-400"
              >{header.projects}</a
            >
          </li>
          <li>
            <a
              href="#"
              on:click={(e) => e.preventDefault()}
              class="hover:text-hex-gold-400 border-b border-b-solid hover:border-b-hex-gold-400"
              >{header.contact}</a
            >
          </li>
        </ul>
      </nav>
    {/if}
  </section>
</header>
