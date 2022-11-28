<script>
  import Footer from "../components/shares/Footer.svelte";
  import Navbar from "../components/shares/Navbar.svelte";
  import ScrollTop from "../components/shares/ScrollTop.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
  <ScrollTop />
</div>
