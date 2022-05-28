<template>
  <header id="header" class="fixed-top" :class="{ 'header-scrolled': scrollY > 100 }">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><RouterLink to="/">Hochste</RouterLink></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><RouterLink class="nav-link" to="#top">Top</RouterLink></li>
          <li><RouterLink class="nav-link" to="#about">About</RouterLink></li>
          <li><RouterLink class="nav-link" to="#services">Services</RouterLink></li>
          <li><RouterLink class="nav-link" to="#admin">Admin</RouterLink></li>
          <li><RouterLink class="nav-link" to="#faq">FAQ</RouterLink></li>
          <li><RouterLink class="nav-link" to="#contact">Contact</RouterLink></li>
          <li><RouterLink class="login" to="#">Login</RouterLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>
