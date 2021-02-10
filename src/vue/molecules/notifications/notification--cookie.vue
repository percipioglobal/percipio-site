<template>
  <div
    v-if="showCookie"
    :class="[
      'fixed z-10 right-0 bottom-0 m-3 p-5 w-11/12 md:w-9/12 lg:w-4/12 text-white-100',
      'bg-' + options.colour,
    ]"
  >
    <span class="text-2xl font-extrabold block text-white-100 pb-3">{{
      options.title
    }}</span>

    <div class="text-white-100" v-html="options.article"></div>


    <div class="w-full flex items-center justify-end mt-5">
      <a
        :href="options.url"
        class="text-white-100 underline mr-5"
        :title="options.privacy"
      >
        {{ options.privacy }}
      </a>
      <button
        @click.prevent="acceptCookie"
        :class="[
          'inline-flex relative border-2 px-4 py-2 font-extrabold text-lg border-white-100 group overflow-hidden',
          'hover:text-' + options.colour,
        ]"
        :title="options.accept"
      >
        <span class="relative z-10 transition-colors duration-200 delay-75 ease-in-out">
            {{ options.accept }}
        </span>
        <div :class="[
            'absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:-translate-x-0 transition duration-300 ease-blog',
            'bg-white-100'
        ]"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    }
  },
  data: function () {
    return {
      showCookie: false,
      objContent: {}
    };
  },
  methods: {
    acceptCookie() {
        const expiry = 5 * 24 * 60 * 60 * 1000;
        localStorage.setItem('cookie:show', expiry);
        this.setCookie();
    },
    setCookie() {
        this.showCookie = localStorage.getItem('cookie:show') ? false : true;
    }
  },
  mounted(){
      this.setCookie();
  }
};
</script>
