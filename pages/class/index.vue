<template>
  <div>
    <PartialsTitle title="Class" />
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in listClass" :key="i" align="center">
        <class-allclass :title="item.name" :id="item.id" :peserta="item.Join_classes.length" :jml="item.Schedules.length">
        </class-allclass>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// import request from "~/mixins/request";
export default {
  // mixins: [request],
  asyncData({store}) {
    return {
      listClass: store.state.myClass.listClass,
    }
  },
  async fetch() {
    const req = await this.$axios.$get("http://localhost:4000/myClass/allClass");
    const datastate = req.data.map(kelas => {
      return{
            id: kelas.id,
            name: kelas.name,
            description: kelas.description,
            role: kelas.Join_classes.role,
            Schedules: kelas.Schedules,
            Join_classes: kelas.Join_classes,
      }
    })
    
    this.$store.dispatch("myClass/setClass", datastate);
    console.log(datastate);
  },
  methods: {
    ...mapMutations({
      setClass:'myClass/setClass',
    }),
    ...mapActions({
      setCLass:"myClass/setClass",
    }),
    
  },
};
</script>