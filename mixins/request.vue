<script>
export default {
  methods: {
    async requestGet({ endpoint, params, notif }) {
      try {
        const req = await this.$axios.$get(endpoint, { params });
        if (req.success) {
          return req;
        } else {
          this.$swal("gagal", req.message, "error");
          return req;
        }
      } catch (error) {
        this.$swal("error", error.toString(), "error");
      }
    },
    async getAllClass() {
      
    },
    
  },
};
</script>