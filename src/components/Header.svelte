<script>
  import Link from "@components/Link.svelte";
  import Button from "./Button.svelte";
  import Dropdown from "@components/icons/Dropdown.svelte";
  import Gr from "@components/icons/Gr.svelte";
  import En from "@components/icons/En.svelte";
  export let lang;
  export let header;
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="text-white border-b border-solid border-hex-gold-400 flex items-center sticky top-0 bg-hex-blue-400 z-10 rounded-t-xl"
>
  <section class="container relative flex items-center justify-between p-4">
    <section class="flex gap-x-3 items-center">
      <h1 class=" text-hex-gold-100 text-2xl font-bold">
        {lang === "gr" ? "ΣΠ" : "SP"}
      </h1>
      <Link type="lang" to={lang === "en" ? "/gr" : "/"}>
        {#if lang === "en"}
          <En />
        {:else}
          <Gr />
        {/if}
      </Link>
    </section>
    <nav
      class={` ${!isMenuOpen && "hidden"} md:block absolute md:relative top-full md:top-0 right-0 bg-hex-blue-400`}
    >
      <ul
        class="flex flex-col justify-center items-end md:flex-row md:p-0 p-4 gap-3"
      >
        <li class="border-b md:border-0 hover:border-b-hex-gold-400">
          <Link type="nav">{header.home}</Link>
        </li>
        <li class="border-b md:border-0 hover:border-b-hex-gold-400">
          <Link type="nav">{header.about}</Link>
        </li>
        <li class="border-b md:border-0 hover:border-b-hex-gold-400">
          <Link type="nav">{header.projects}</Link>
        </li>
        <li class="border-b md:border-0 hover:border-b-hex-gold-400">
          <Link type="nav">{header.contact}</Link>
        </li>
      </ul>
    </nav>

    <Button
      onClick={() => toggleMenu()}
      type="toggle"
      classes="block md:hidden focus:outline-none flex"
    >
      <Dropdown {isMenuOpen} />
    </Button>
  </section>
</header>
