<template>
  <div class="card" style="width: 20rem">
    <nuxt-link :to="'/class/' + id" class="text-decoration-none">
        <img :src="img" class="card-img-top" alt="kelas" />
      </nuxt-link>
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">
        {{desc}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default:"https://shiftacademy.id/wp-content/uploads/2020/12/Logo-fullstack-SA.png",
    },
    name: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    // end: {
    //   type: String,
    //   default: "",
    // },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>