<template>
  <div class="form-group">
    <label>{{ name }}</label>
    <div class="col-md-12">
      <input :type="type" class="form-control" v-model="value" :Required="!noRequired"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "default input text" },
    val: { type: String, default: "" },
    type: { type:String, default: "text"},
    noRequired: {type: Boolean, default: false},
  },
  computed: {
    value: {
      get() {
        return this.val;
      },
      set(value) {
        this.$emit("value", value);
      },
    },
  },
};
</script>