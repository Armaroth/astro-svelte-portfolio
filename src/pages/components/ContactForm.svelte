<script>
  // No functionality needed for the form
  export let labels;
</script>

<section
  class="mx-auto px-4 py-8 border border-solid border-hex-blue-300 container max-w-xs sm:max-w-xl lg:max-w-3xl"
>
  <section class="rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-center mb-6 text-hex-gold-400">
      {labels.heading}
    </h2>

    <form action="#" method="POST" class="space-y-4">
      <section>
        <label for="name" class="block text-sm font-medium text-hex-gold-400"
          >{labels.labels.name}</label
        >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          class="mt-1 block w-full px-4 py-2 border border-hex-blue-300 rounded-md text-white focus:outline-none focus:ring-2 focus:border-hex-blue-300 focus:border-hex-blue-300 bg-hex-blue-400"
          required
        />
      </section>
      <section>
        <label for="email" class="block text-sm font-medium text-hex-gold-400"
          >{labels.labels.email}</label
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Η διεύθυνση email σας"
          class="mt-1 block w-full px-4 py-2 border bg-hex-blue-400 border-hex-blue-300 rounded-md focus:outline-none focus:ring-2 focus:border-hex-blue-300 focus:border-hex-blue-300 text-white"
          required
        />
      </section>

      <section>
        <label for="message" class="block text-sm font-medium text-hex-gold-400"
          >{labels.labels.message}</label
        >
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Γράψτε το μήνυμά σας"
          class="mt-1 block w-full px-4 py-2 border border-hex-blue-300 rounded-md focus:outline-none focus:ring-2 focus:border-hex-blue-300 focus:border-hex-blue-300 resize-none bg-hex-blue-400 text-white"
          required
        ></textarea>
      </section>

      <section>
        <button
          type="submit"
          class="bg-hex-blue-300 block mx-auto text-white py-2 px-4 rounded-md hover:bg-hex-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >{labels.button}
        </button>
      </section>
    </form>
  </section>
</section>
