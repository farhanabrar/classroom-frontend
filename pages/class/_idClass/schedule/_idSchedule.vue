<template>
  <div>
    <div class="jumbotron jumbotron-fluid rounded bg-white">
      <div class="container">
        <h1 class="display-4">{{currentSchedule.name}}</h1>
        <p class="lead">{{currentSchedule.code}}</p>
      </div>
    </div>
    <div v-for="item in listMaterials" :key="item.id">
    <class-materi :name="item.name"></class-materi>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
      currentSchedule() {
          return this.$store.state.schedule.current;
      },
      listMaterials() {
          return this.$store.state.materials.listMaterials;
      },
  },
  async fetch() {
    if (this.$store.state.schedule.list.length) {
      this.$store.state.schedule.list.forEach((dataSchedule) => {
        if (dataSchedule.id == this.$route.params.idSchedule)
          this.set_current_schedule(dataSchedule);
      });
    }
    if (
      !this.currentSchedule.id ||
      this.$route.params.idSchedule != this.currentSchedule.id
    ) {
      const { data } = await this.$axios({
        method: "GET",
        url: "Schedule",
        params: {class_id: this.$route.params.idSchedule},
      });
      this.set_current_schedule(data.data[0]);
    }
    this.getMaterials();
  },
  methods: {
    ...mapMutations({
      set_current_schedule: "schedule/setCurrent",
    }),
    async getMaterials() {
      const req = await this.$axios.$get("/materials", {
        params: { schedule_id: this.$route.params.idSchedule },
      });
      if (req.success) {
        this.$store.dispatch("materials/setList", req.data);
        console.log(req.data);
      }
    },
  },
};
</script>