<template>
  <div class="app">
    <b-navbar toggleable="lg" type="light" class="custom-navbar" sticky>
      <b-navbar-brand to="/" class="text-primary">
<!--        <img src="../assets/img/logo/logo_stroomnet.png" class="img-fluid img-logo mr-1" alt="Logo" />-->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Produk" class="px-3" right>
            <b-dropdown-item href="#" to="/productinternet">Paket Internet</b-dropdown-item>
            <b-dropdown-item href="#" to="/productinternettv">Paket Internet + TV</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/promo" class="px-3">Promo</b-nav-item>
          <b-nav-item to="/faq" class="px-3">Bantuan</b-nav-item>
          <b-nav-item to="/contactus" class="px-3">Hubungi Kami</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="app-body">
      <!--Main Menu-->
      <main class="main">
        <router-view/>
      </main>
    </div>
    <footer class="footer container-fluid">
      <div class="row">
        <div class="col-md-12 text-center mt-4">
          <p>&copy; 2020 Stroomnet trademark of PT Indonesia Comnets Plus</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultContainer',
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
