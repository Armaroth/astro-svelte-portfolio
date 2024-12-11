<script>
  import { inview } from "svelte-inview";
  export let project;
  let isInView = false;
</script>

<section
  use:inview={{ unobserveOnEnter: true, rootMargin: "-300px" }}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
  class={`bg-hex-blue-400 text-white p-6 rounded-lg shadow-md 
   shadow-hex-blue-300 max-w-xs sm:max-w-lg hover:shadow-xl hover:shadow-hex-blue-200 hover:-translate-y-2 transition duration-500	
sm:-max-w-sm md:max-w-xl lg:max-w-3xl ${isInView ? "" : " opacity-0 -translate-x-20 "}`}
>
  <h2 class="text-2xl font-semibold mb-2 text-hex-gold-400">
    {project.title}
  </h2>
  <p class="text-sm sm:text-base mb-4">
    {project.description}
  </p>
  <h3 class="mb-3 text-hex-gold-100">{project.techStackHeading}:</h3>
  <section class="flex flex-wrap gap-2 mb-4">
    {#each project.techStack as tech}
      <span
        class=" text-hex-gold-400 px-2 py-1 rounded-full border border-solid border-hex-gold-400 text-xs sm:text-sm font-medium"
      >
        {tech}
      </span>
    {/each}
  </section>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block bg-hex-blue-300 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
  >
    View Project
  </a>
</section>
