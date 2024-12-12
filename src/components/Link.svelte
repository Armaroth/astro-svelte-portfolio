<script>
//   export let content;
  export let type;
  export let to;
</script>

<a
  target={`${type === "lang" ? "_self" : "_blank"}`}
  rel={`${type === "lang" ? "" : "noopener noreferrer"}`}
  class={`cursor-pointer text-sm text-white px-4 py-2 rounded-md font-medium ${type === "button" && "bg-hex-blue-300 hover:bg-hex-blue-200 hover:-translate-y-1 "}`}
  href={to}><slot></slot></a
>
