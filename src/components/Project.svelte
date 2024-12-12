<script>
  import Link from "@components/Link.svelte";
  import { inview } from "svelte-inview";
  export let project;
  let isInView = false;
</script>

<section
  use:inview={{ unobserveOnEnter: true, rootMargin: "-200px" }}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
  class={`bg-hex-blue-400 text-white p-6 rounded-lg shadow-md 
   shadow-hex-blue-300 max-w-xs sm:max-w-lg hover:shadow-xl hover:shadow-hex-blue-200 hover:-translate-y-2 transition duration-500	
sm:-max-w-sm md:max-w-xl lg:max-w-3xl ${isInView ? "" : " opacity-0 -translate-x-24 "}`}
>
  <h1 class="text-2xl font-semibold mb-2 text-hex-gold-400">
    {project.title}
  </h1>
  <p class="text-sm sm:text-base mb-4">
    {project.description}
  </p>
  <h2 class="mb-3 text-hex-gold-100">{project.techStackHeading}:</h2>
  <section class="flex flex-wrap gap-2 mb-4">
    {#each project.techStack as tech}
      <h3
        class=" text-hex-gold-400 px-2 py-1 rounded-full border border-solid border-hex-gold-400 text-xs sm:text-sm font-medium"
      >
        {tech}
      </h3>
    {/each}
  </section>
  <Link to={project.link} type="button">{project.button}</Link>
</section>
