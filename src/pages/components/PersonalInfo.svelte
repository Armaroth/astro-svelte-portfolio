<script>
  export let text;
</script>

<section
  class=" bg-hex-blue-400 px-4 sm:px-8 lg:px-16 py-8 bg-gray-50 text-hex-gold-100"
>
  <div class="max-w-4xl mx-auto space-y-8">
    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold text-hex-gold-400">
        {text.info.heading}
      </h2>
      <p class="mt-4 text-base sm:text-lg leading-relaxed">
        {text.info.content}
      </p>
    </div>

    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold text-hex-gold-400">
        {text.futureGoals.heading}
      </h2>
      <p class="mt-4 text-base sm:text-lg leading-relaxed">
        {text.futureGoals.content}
      </p>
    </div>

    <div>
      <h2 class="text-2xl sm:text-3xl font-semibold text-hex-gold-400">
        {text.interviewTakeaway.heading}
      </h2>
      <p class="mt-4 text-base sm:text-lg leading-relaxed">
        {text.interviewTakeaway.content}
      </p>
    </div>
  </div>
</section>
