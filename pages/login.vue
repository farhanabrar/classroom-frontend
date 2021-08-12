<template>
  <div class="vh-100 d-flex justify-content-center">
    <div class="d-flex align-items-center">
      <div class="card" style="width: 30vw">
        <div class="card-body text-center pb-5">
          <h3>Please Login</h3>
          <hr />
          <form @submit.prevent="userLogin">
            <FormInput
              name="Email"
              type="email"
              :val="login.email"
              @value="(val) => (login.email = val)"
              no-required
            />
            <FormInput
              name="Password"
              type="password"
              :val="login.password"
              @value="(val) => (login.password = val)"
            />
            <button class="btn btn-primary btn-lg w-100" type="submit">
              Login
            </button>
            <br />
            <div :class="$route.path == '/alluser' ? 'active' : ''" style="margin-top:10px">
              <nuxt-link to="/register" class="nav-link">
                don't have an account ?
                </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "clear",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let { data } = await this.$auth.loginWith("local", {
          data: this.login,
        
        });
        
        if (data.success) {
          this.$swal("Login Berhasil", "welcome to classroom", "success");
          this.$router.push("/");
        }
        else{
          this.$swal("login gagal", data.message, "error");
        }
      } catch {
        console.log(data.massage);
      }
    },
  },
};
</script>