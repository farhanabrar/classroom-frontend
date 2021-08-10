<template>
  <div>
    <PartialsTitle title="All User" />
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in listUser" :key="i" align="center">
        <class-item :name="item.name" :email="item.email" :address="item.address" :phone="item.phone" :institution="item.institution" :sosmed="item.sosmed">
        </class-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  asyncData({store}) {
    return {
      listUser: store.state.alluser.listUser,
    }
  },
  async fetch() {
    const req = await this.$axios.$get("users/alluser");
    this.setUser(req.data)
    

  },
  methods: {
    ...mapMutations({
      setUser:'alluser/setUser',
    })
  },
};
</script>