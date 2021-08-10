<template>
  <div id="app">
    <div class="main-wrapper">
      <!-- navbar -->
      <partials-navbar />
      <!-- sidebar -->
      <partials-sidebar />
      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          

          <div class="section-body">
            <!-- isi konten -->
            <Nuxt />
          </div>
        </section>
      </div>
      <!-- FOOTER -->
      <partials-footer />
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
};
</script>