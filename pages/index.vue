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
      <div
        class="col-md-4"
        v-for="(item, i) in listClass"
        :key="i"
        align="center"
      >
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
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      listClass: this.$store.state.joinclass.myclasses,
    };
  },
  async fetch() {
    const req = await this.$axios.$get("http://localhost:4000/JoinClass");
    this.$store.dispatch("joinclass/setmyclass", req.data);
    // console.log(req.data);
  },
  // computed akan tertrigger jika ada perubahan data
  computed: {
    ...mapMutations({
      setMyClass: "joinclass/setmyclass",
    }),
    ...mapActions({
      setMyClass: "joinclass/setmyclass",
    }),
  },
  // method akan tertrigger oleh event/function tertentu seperti saat mengklik tombol
  methods: {},
};
</script>