<script>
  export let onClick;
  export let type;
  export let classes;
</script>

<button
  {type}
  class={`${type !== "toggle" && "bg-hex-blue-300 hover:bg-hex-blue-200 focus:outline-none"} ${type === "submit" && "focus:ring-2 mx-auto"} block text-white py-2 px-4 rounded-md  focus:ring-indigo-500 ${classes} `}
  on:click={onClick}
>
  <slot></slot>
</button>
