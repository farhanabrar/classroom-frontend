<template>
  <button type="button" :class="'btn btn-'+warna">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    warna: {
      type: String,
      default: "primary",
    },
  },
};
</script>