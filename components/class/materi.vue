<template>
  <div class="card">
    <div class="card-header">
      <h5>{{ name }}</h5>
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">download file</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>