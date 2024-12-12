<script>
  import { inview } from "svelte-inview";
  import Button from "./Button.svelte";
  export let labels;
  let isInView = false;
</script>

<footer
  use:inview={{ rootMargin: "-100px" }}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
  class={`mx-auto px-4 py-8 border border-solid border-hex-blue-300 container max-w-xs sm:max-w-lg lg:max-w-3xl mb-20 transition  duration-1000	
  ${isInView ? "" : " translate-y-20 opacity-0"} `}
>
  <section class="rounded-lg shadow-md p-6">
    <h1 class="text-2xl font-bold text-center mb-6 text-hex-gold-400">
      {labels.heading}
    </h1>
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
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("Contact form button is not functional.");
          }}>{labels.button}</Button
        >
      </section>
    </form>
  </section>
</footer>
