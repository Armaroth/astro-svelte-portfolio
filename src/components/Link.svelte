<script>
  import { preventDefault } from "svelte/legacy";

  //   export let content;
  export let type;
  export let to;
</script>

<a
  on:click={(e) => {
    if (type === "nav") e.preventDefault();
  }}
  target={`${type === "lang" ? "_self" : "_blank"}`}
  rel={`${type === "lang" ? "" : "noopener noreferrer"}`}
  class={`cursor-pointer text-sm text-white px-4 py-2 rounded-md font-medium ${type === "button" && "bg-hex-blue-300 hover:bg-hex-blue-200 hover:-translate-y-1 "} ${type === "nav" && "hover:text-hex-gold-400"}`}
  href={to}><slot></slot></a
>
