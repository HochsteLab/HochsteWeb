<template>
  <header id="header" class="fixed-top" :class="{ 'header-scrolled': scrollY > 100 }">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="/">Hochste</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link" href="#top">Top</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#services">Services</a></li>
          <li><a class="nav-link" href="#admin">Admin</a></li>
          <li><a class="nav-link" href="#faq">FAQ</a></li>
          <li><a class="nav-link" href="#contact">Contact</a></li>
          <li><a class="login" href="#">Login</a></li>
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
