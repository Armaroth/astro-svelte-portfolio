<script>
  export let project;
</script>

<section
  class="bg-hex-blue-400 text-white p-6 rounded-lg shadow-md shadow-hex-blue-300 max-w-80 hover:shadow-lg hover:shadow-hex-blue-200 transition-shadow
sm:-max-w-sm md:max-w-xl lg:max-w-3xl"
>
  <h2 class="text-2xl font-semibold mb-2">
    {project.title}
  </h2>
  <p class="text-sm sm:text-base mb-4">
    {project.description}
  </p>
  <h3 class="mb-3">Tech Stack:</h3>
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
