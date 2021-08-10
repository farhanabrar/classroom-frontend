<template>
  <div class="section-header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title:{type: String,default: "TItle Page" },
  },
}
</script>