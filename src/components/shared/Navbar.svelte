<script>
  let display = false;
  function toggle() {
    display =! display
  }
</script>


<div class="bloc nav l-bloc" id="bloc-0">
  <div class="container bloc-sm">
    <div class="row">
      <div class="col">
        <nav class="navbar row navbar-light">
          <a class="navbar-brand" href="/">
            <img
              src="https://www.satellit.be/img/satellit-logo-rvb_1_orig.png"
              alt="logo-satellit"
            />
          </a>
          <button
            id="nav-toggle"
            type="button"
            class="ml-auto ui-navbar-toggler navbar-toggler border-0 p-0 menu-icon-rounded-bars toggle-btn"
            on:click={toggle}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          {#if display}
            <div class="navbar-collapse animate__animated animate__slideInRight animate__faster fullscreen-nav">
              <button on:click={toggle} type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <ul class="site-navigation nav navbar-nav">
                <li class="nav-item">
                  <a href="/" class="nav-link a-btn">Home</a>
                </li>
                <li class="nav-item nav-link">
                  <a href="/about-us" class="nav-link a-btn">About us</a>
                </li>
                <li class="nav-item nav-link">
                  <a href="/jobs" class="nav-link a-btn">Jobs</a>
                </li>
                <li class="nav-item nav-link">
                  <a href="/community" class="nav-link a-btn">Community</a>
                </li>
                <li class="nav-item">
                  <a href="/training-center" class="nav-link a-btn"
                    >Training center</a
                  >
                </li>
                <li class="nav-item nav-link">
                  <a href="/contact" class="nav-link a-btn">Contact us</a>
                </li>
                <li class="nav-item nav-link">
                  <a href="/portal" class="nav-link a-btn">Login</a>
                </li>
              </ul>
            </div>
          {/if}
        </nav>
      </div>
    </div>
  </div>
</div>

<style>
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .fullscreen-nav {
    background: linear-gradient(146deg, #2DCE94 0%, #AEC97D 100%);
    width: 90vw;
    position: fixed;
    top: 25px;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 5%;
    z-index: 9;
  }
  .nav-item {
    text-align: center;
    font-size: 28px;
  }
  .navbar-light .navbar-nav .nav-link {
      color: white;
  }
  .nav-link:hover {
    color: rgba(0,0,0,.7)!important;
  }
</style>

