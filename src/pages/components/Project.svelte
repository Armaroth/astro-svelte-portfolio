<script>
  export let project;
</script>

<section
  class="bg-hex-blue-400 text-white p-6 rounded-lg shadow-lg shadow-hex-blue-300 max-w-sm hover:shadow-2xl hover:shadow-hex-gold-400 transition-shadow
sm:-max-w-md md:max-w-xl lg:max-w-3xl"
>
  <h2 class="text-2xl font-semibold mb-2">
    {project.title}
  </h2>

  <p class="text-sm sm:text-base mb-4">
    {project.description}
  </p>

  <h3 class="mb-3">Tech Stack:</h3>
  <div class="flex flex-wrap gap-2 mb-4">
    {#each project.techStack as tech}
      <span
        class="bg-white text-hex-blue-400 px-2 py-1 rounded-full text-xs sm:text-sm font-medium"
      >
        {tech}
      </span>
    {/each}
  </div>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block bg-white text-hex-blue-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
  >
    View Project
  </a>
</section>
