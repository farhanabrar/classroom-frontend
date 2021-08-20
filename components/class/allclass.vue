<template>
  <div>
    <div class="card text-">
      <div class="card-header">
        <img :src="img" class="card-img-top" alt="kelas" />
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <slot name="body"></slot>
        <p>diikuti oleh {{ peserta }} peserta</p>
        <p>memilik {{ jml }} pertemuan</p>
      </div>
      <div class="card-footer text-muted">
        <nuxt-link :to="'/class/' + id" class="text-decoration-none">
          <button class="btn btn-secondary" v-if="isJoin">goto class</button>
        </nuxt-link>
        <button class="btn btn-primary" @click="showJoin" v-if="!isJoin">
          ikuti
        </button>
        <slot name="footer"></slot>
      </div>
    </div>
    <modal :name="'modal-' + id" height="auto" class="example-modal-content-centered">
      
        <div class="modal-header">
          <h3 class="modal-title">Pilih Role untuk kelas {{ title }}</h3>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editSchedule">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="firstchoice"
                id="SPV"
                value="SPV"
                v-model="join_class.role"
              />
              <label class="form-check-label" for="SPV"><h4>SPV</h4> </label>
              <br />
              <input
                class="form-check-input"
                type="radio"
                name="secondchoice"
                id="tutor"
                value="tutor"
                v-model="join_class.role"
              />
              <label class="form-check-label" for="tutor"
                ><h4>tutor</h4>
              </label>
              <br />
              <input
                class="form-check-input"
                type="radio"
                name="thirdchoice"
                id="student"
                value="student"
                checked
                v-model="join_class.role"
              />
              <label class="form-check-label" for="student"
                ><h4>student</h4>
              </label>
              <h3>role: {{ join_class.role }}</h3>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="hideJoin"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="joinclass">
            JOIN
          </button>
        </div>
      
    </modal>
  </div>
</template>

<script>
// import request from "~/mixins/request";
import { mapMutations, mapActions } from "vuex";
export default {
  // mixins: [request],
  data() {
    return {
      
      join_class: {
        classID: this.id,
        userID: this.$auth.user.id,
        role: "",
      },
    };
  },
  props: {
    img: {
      type: String,
      default:
        "https://shiftacademy.id/wp-content/uploads/2020/12/Logo-fullstack-SA.png ",
    },
    title: {
      type: String,
      default: "",
    },
    jml: {
      type: Number,
      default: 0,
    },
    peserta: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: "",
    },
  },

  async fetch() {
    const JC = await this.$axios.$get("http://localhost:4000/JoinClass");
    const datastate = JC.data.map((kelas) => {
      return {
        id: kelas.MyClass.id,
      };
    });
    this.$store.dispatch("isjoin/setclassID", datastate);
  },
  computed: {
    isJoin() {
      const isEqual = (first, second) => {
        return JSON.stringify(first) === JSON.stringify(second);
      };
      const verify = this.$store.state.isjoin.classID;
      const result = verify.some((e) => isEqual(e, { id: this.id }));
      // console.log(result);
      return result;
    },
  },
  methods: {
    async joinclass() {
      try {
        const join = await this.$axios.$post(
          "http://localhost:4000/JoinClass",
          {
            classId: this.join_class.classID,
            userId: this.join_class.userID,
            role: this.join_class.role,
          }
        );
        console.log(join);
        if (join.success) {
          this.$swal(
            "berhasil mengikut kelas sebagai " + this.join_class.role,
            "",
            "success"
          );
          this.$modal.hide("modal-" + this.id);
          this.isJoin();
        } else {
          this.$swal("gagal mengikut kelas sebagai ", "", "error");
        }
      } catch (error) {
        console.log(join);
      }
    },
    showJoin() {
      this.$modal.show("modal-" + this.id);
    },
    hideJoin() {
      this.$modal.hide("modal-" + this.id);
    },
  },
};
</script>