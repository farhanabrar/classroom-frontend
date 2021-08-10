<template>
  <div>
    <div class="jumbotron jumbotron-fluid rounded bg-white">
      <div class="container">
        <h1 class="display-4">{{ currentClass.name }}</h1>
        <p class="lead">
          {{ currentClass.description }}
        </p>
        <h3>As: {{ currentClass.role }}</h3>
        <div class="row">
          <div class="col-md-2">
            
          </div>
          <div class="col-md-8"></div>
          <div class="col-md-2" align="right">
            <button
              type="button"
              class="btn btn-outline-primary"
              v-if="currentClass.role == 'SPV'"
              @click.prevent="showMod"
            >
              create new schedule
            </button>
          </div>
          <modal name="modal-create" height="auto">
            <div class="example-modal-content">
              <div class="modal-header">
                <h5 class="modal-title">create Schedule</h5>
              </div>
              <div class="modal-body">
                <form @submit.prevent="sendSchedule">
                  <FormInput
                    name="Name"
                    type=""
                    :val="createSchd.name"
                    @value="(val) => (createSchd.name = val)"
                  />
                  <FormInput
                    name="code"
                    type=""
                    :val="createSchd.code"
                    @value="(val) => (createSchd.code = val)"
                  />
                  <FormInput
                    name="start"
                    type="date"
                    :val="createSchd.start"
                    @value="(val) => (createSchd.start = val)"
                  />
                  <FormInput
                    name="end"
                    type="date"
                    :val="createSchd.end"
                    @value="(val) => (createSchd.end = val)"
                  />
                  <button class="btn btn-primary btn-lg w-100" type="submit">
                    create
                  </button>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click="hide"
                >
                  Close
                </button>
              </div>
            </div>
          </modal>
        </div>
      </div>
    </div>
    <div v-for="item in listSchedule" :key="item.id" >
      <class-schedule
        :name="item.name"
        :start="item.start"
        :end="item.end"
        :id="item.id"
        :idClass="$route.params.idClass"
        :role="currentClass.role"
      ></class-schedule>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import request from "~/mixins/request";
export default {
  mixins: [request],
  data() {
    return {
      createSchd: { name: "", code: "", start: "", end: "" },
    };
  },
  computed: {
    currentClass() {
      return this.$store.state.myClass.current;
    },
    listSchedule() {
      return this.$store.state.schedule.list;
    },
  },
  async fetch() {
    if (this.$store.state.myClass.listClass.length) {
      this.$store.state.myClass.listClass.forEach((dataClass) => {
        if (dataClass.id == this.$route.params.idClass)
          this.set_current_class(dataClass);
      });
    }
    if (
      this.currentClass.id ||
      this.$route.params.idClass == this.currentClass.id
    ) {
      const { data } = await this.requestGet({
        endpoint: "myClass",
        params: { id: this.$route.params.idClass, user_id: this.$auth.user.id },
      });
      console.log(data[0]);
      const datastate = data.map((kelas) => {
        return {
          id: kelas.id,
          name: kelas.name,
          description: kelas.description,
          role: kelas.Join_classes[0].role,
          Schedules: kelas.Schedules,
        };
      });
      this.set_current_class(datastate[0]);
      console.log(datastate[0]);
    }
    this.getSchedule();
  },

  methods: {
    ...mapMutations({
      set_current_class: "myClass/setCurrent",
    }),
    async sendSchedule() {
      try {
        const createSchd = await this.$axios.$post(
          "http://localhost:4000/schedule",
          {
            class_id: this.$route.params.idClass,
            name: this.createSchd.name,
            code: this.createSchd.code,
            start: this.createSchd.start,
            end: this.createSchd.end,
          }
        );
        console.log(createSchd);
        if (createSchd.success) {
          this.getSchedule();
          this.$swal("data schedule berhasil di tambah", "Berhasil", "success");
          this.$modal.hide("modal-create");
        } else {
          this.$swal("data schedule gagal di tambah", "Gagal", "error");
        }
      } catch (error) {
        console.log(createSchd);
      }
    },
    async getSchedule() {
      const req = await this.$axios.$get("/schedule", {
        params: { class_id: this.$route.params.idClass },
      });
      if (req.success) {
        this.$store.dispatch("schedule/setList", req.data);
        // console.log(req.data);
      }
    },
    showMod() {
      this.$modal.show("modal-create");
    },
    hide() {
      this.$modal.hide("modal-create");
    },
  },
};
</script>