<template>
  <div class="card border-light mb-3" style="max-width: 18rem">
    <div class="card-header">
      <h1>{{name}}</h1>
      </div>
    <div class="card-body">
      <h5 class="card-title">{{ email }}</h5>
      <ul class="list-group">
        <li class="list-group-item">contact: {{phone}}</li>
        <li class="list-group-item">address: {{address}}</li>
        <li class="list-group-item">institution: {{institution}}</li>
        <li class="list-group-item">sosmed: {{sosmed}}</li>
      </ul>
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
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    institution: {
      type: String,
      default: "",
    },
    sosmed: {
      type: String,
      default: "",
    },
  },
};
</script>