<script>
    // Add any script logic here if necessary
    </script>

<main class="text-hex-gold-100 mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-x-40 items-center px-4">
    <section class="container flex flex-col gap-y-4 lg:gap-y-5 items-start text-center lg:text-left">
        <h2 class="text-2xl lg:text-3xl xl:text-4xl text-hex-gold-400">Stefanos Palaiochoritis,</h2>
        <h3 class="text-lg lg:text-xl xl:text-2xl">Web developer, code enthusiast!</h3>
          <h3 class="text-m lg:text-l xl:text-2=xl">Based in Athens</h3>
        <button class="bg-hex-blue-300 hover:bg-hex-blue-200 text-white font-bold py-2 px-4 rounded text-sm lg:text-base">
           Download My CV!
        </button>
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
            class="h-40 sm:h-60 lg:h-80 xl:h-96 rounded-full border border-solid border-4 border-hex-gold-400"
            alt="Stefanos"
        />
    </section>
</main>
