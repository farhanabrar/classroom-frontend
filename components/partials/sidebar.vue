<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand" >
        <nuxt-link class="nav-link" to="">CLASSROOM</nuxt-link>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Dashboard</li>
        <li :class="$route.path=='/'?'active':''">
          <nuxt-link class="nav-link" to="/">home</nuxt-link>
        </li>
 
        <!-- <li :class="$route.path=='/profile'?'active':''">
          <nuxt-link class="nav-link" to="/profile">profile</nuxt-link>
        </li>
        <li :class="$route.path=='/modeling'?'active':''">
          <nuxt-link class="nav-link" to="/modeling">modeling</nuxt-link>
        </li> -->
        <li :class="$route.path=='/class'?'active':''">
          <nuxt-link class="nav-link" to="/class">All Classes</nuxt-link>
        </li>
        <li :class="$route.path=='/alluser'?'active':''">
          <nuxt-link class="nav-link" to="/alluser">student</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  asyncData() {},
  data() {
    return {
      nav: ["home", "profile", "login"],
    }
  }
};
</script>