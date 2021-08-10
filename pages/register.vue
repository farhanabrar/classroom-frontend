<template>
  <div class="vh-100 d-flex justify-content-center">
    <div class="d-flex align-items-center">
      <div class="card" style="width: 30vw">
        <div class="card-body text-center pb-5">
          <h3>Create your Account</h3>
          <hr />
          <form @submit.prevent="sendData">
            <FormInput
              name="Name"
              type=""
              :val="register.name"
              @value="(val) => (register.name = val)"
            />
            <FormInput
              name="Email"
              type="email"
              :val="register.email"
              @value="(val) => (register.email = val)"
            />
            <FormInput
              name="Password"
              type="password"
              :val="register.password"
              @value="(val) => (register.password = val)"
            />
            <FormInput
              name="Password Confirmation"
              type="password"
              :val="register.passwordConfirmation"
              @value="(val) => (register.passwordConfirmation = val)"
            />
            <button class="btn btn-primary btn-lg w-100" type="submit">
              register
            </button>
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
      register: {
        name: "",
        password: "",
        email: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    async sendData() {
      try {
        const register = await this.$axios.$post("http://localhost:4000/users", {
          name: this.register.name,
          email: this.register.email,
          password: this.register.password,
          passwordConfirmation: this.register.passwordConfirmation,
        });
        console.log(register);
      } catch (error) {
        console.log(response);
      }
    },
  },
};
</script>