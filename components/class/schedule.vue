<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-1">
          <div style="margin: 20px; padding: 1px">
            <i class="fas fa-clipboard-list fa-fw"></i>
          </div>
        </div>
        <div class="col-10">
          <h5>{{ name }}</h5>
          <p>{{ start }} - {{ end }}</p>
        </div>
        <div class="col-1 text-center">
          <div class="btn-group dropleft" style="margin: 20px; padding: 1px">
            <button
              type="button"
              class="btn btn-outline-danger rounded"
              v-if="role == 'SPV'"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" @click="showEdit">edit</a>
              <a class="dropdown-item" @click="deleteSchedule">delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :name="'modal-' + id" height="auto">
      <div class="example-modal-content">
        <div class="modal-header">
          <h5 class="modal-title">edit Schedule</h5>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editSchedule">
            <FormInput
              name="name"
              :val="scheduleName"
              @value="(val) => (scheduleName = val)"
            />
            <FormInput
              name="start"
              type="date"
              :val="scheduleStart"
              @value="(val) => (scheduleStart = val)"
            />
            <FormInput
              name="end"
              type="date"
              :val="scheduleEnd"
              @value="(val) => (scheduleEnd = val)"
            />
            <button class="btn btn-primary btn-lg w-100" type="submit">
              edit
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
    <nuxt-link
      :to="'/class/' + idClass + '/schedule/' + id"
      class="text-decoration-none"
    >
      <button type="button" class="btn btn-primary" style="width: 100%">
        materials
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scheduleName: "",
      scheduleStart: "",
      scheduleEnd: "",
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    start: {
      type: String,
      default: "",
    },
    end: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    idClass: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "",
    },
  },
  methods: {
    async editSchedule() {
      try {
        const payload = {
          id: this.id,
          name: this.scheduleName,
          start: this.scheduleStart,
          end: this.scheduleEnd,
        };
        const data = await this.$axios.$put("http://localhost:4000/schedule", 
          payload
        );
        console.log(data);
        console.log(payload);
        this.getSchedule();
        this.hide();
      } catch (error) {}
    },
    async deleteSchedule() {
      try {
        const payload = { id: this.id };
        const data = await this.$axios.$delete(
          "http://localhost:4000/schedule",
           {data: payload}
        );
        if (data.success) {
          this.$swal("deleted !", "", "success");
          this.getSchedule();
        } else {
          console.log(data);
          console.log(payload);
          this.$swal("GAGAL!", "", "error");
        }
      } catch (error) {}
    },
    async getSchedule() {
      const req = await this.$axios.$get("/schedule", {
        params: { class_id: this.$route.params.idClass },
      });
      if (req.success) {
        this.$store.dispatch("schedule/setList", req.data);
     
      }
    },
    showEdit() {
      this.$modal.show("modal-" + this.id);
    },
    hide() {
      this.$modal.hide("modal-" + this.id);
    },
  },
};
</script>