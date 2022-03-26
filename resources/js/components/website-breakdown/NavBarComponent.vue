<template>
  <!-- nav-start -->
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
    id="navbar"
  >
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo" href="#">
        <img
          src="images/logo-light.png"
          class="logo-light"
          alt=""
          height="16"
        />
        <img src="images/logo-dark.png" class="logo-dark" alt="" height="16" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mdi mdi-menu"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto navbar-center" id="mySidenav">
          <li class="nav-item">
            <a href="#home" class="nav-link active">Home</a>
          </li>
          <li class="nav-item">
            <a href="#features" class="nav-link">features</a>
          </li>
          <li class="nav-item">
            <a href="#screen" class="nav-link">screen</a>
          </li>
          <li class="nav-item">
            <a href="#client" class="nav-link">client</a>
          </li>
          <li class="nav-item">
            <a href="#team" class="nav-link">team</a>
          </li>
          <li class="nav-item">
            <a href="#pricing" class="nav-link">pricing</a>
          </li>
          <li class="nav-item">
            <a href="#blog" class="nav-link">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>