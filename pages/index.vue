<template>
  <div>
    <partials-title title="HOME PAGE"> </partials-title>
    <atoms-card>
      <template v-slot:center>
        <h1>{{ $auth.user.name }}</h1>
      </template>
      <template v-slot:left>
        <h4>email: {{ $auth.user.email }}</h4>
        <h4>current Job: {{ $auth.user.current_job }}</h4>
      </template>
      <template v-slot:right>
        <h4>Institution: {{ $auth.user.institution }}</h4>
        <h4>Last Study/degree: {{ $auth.user.last_study }}</h4>
        
         </template>
    </atoms-card>
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in listClass" :key="i" align="center">
        <class-kelas
          :name="item.MyClass.name"
          :id="item.MyClass.id"
          :desc="item.MyClass.description"
        >
        </class-kelas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listClass: this.$auth.user.Join_classes,
    };
  },
  // computed akan tertrigger jika ada perubahan data
  computed: {
  },
  // method akan tertrigger oleh event/function tertentu seperti saat mengklik tombol
  methods: {
  },
};
</script>