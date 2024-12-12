<script>
  import Button from "./Button.svelte";
  export let intro;
  let isInView = false;
  setTimeout(() => (isInView = true), 0);
</script>

<article
  class={"text-hex-gold-100 mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-x-40 items-center px-4 pb-20"}
>
  <section
    class={`container flex flex-col gap-y-4 lg:gap-y-5 items-start text-center lg:text-left transition duration-500 ${isInView ? "" : " opacity-0 -translate-x-20 "}`}
  >
    <h1 class="text-2xl lg:text-3xl xl:text-3xl text-hex-gold-400">
      {intro.name}
    </h1>
    <h2 class="text-lg lg:text-xl">
      {intro.tag}
    </h2>
    <h2 class="text-m lg:text-l xl:text-2xl">{intro.based}</h2>
    <Button onClick={() => console.log("download button not functional")}>
      {intro.downloadCv}
    </Button>
  </section>
  <section class="container flex justify-center lg:justify-start">
    <img
      loading="lazy"
      srcset="
        /assets/images/stefos-default.webp 160w,
        /assets/images/stefos-small.webp 240w,
        /assets/images/stefos-large.webp 320w,
        /assets/images/stefos-xl.webp 384w
      "
      sizes="
        (max-width: 640px) 160px,
        (max-width: 1024px) 240px,
        (max-width: 1280px) 320px,
        384px
      "
      class={`h-40 sm:h-60 lg:h-80 xl:h-96 rounded-full border border-solid border-4 border-hex-gold-400 transition delay-500 duration-2000 ${isInView ? "" : " opacity-0 "}`}
      alt="Stefanos"
    />
  </section>
</article>
