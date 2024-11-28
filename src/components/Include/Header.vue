<template>
    <!-- Header start -->
      <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <!-- Navbar start -->
    <nav class="site-nav">
      <div class="container">
        <div class="menu-bg-wrap">
          <div class="site-navigation">
            <a href="http://127.0.0.1:8081/" class="logo m-0 float-start">Property</a>

            <ul
              class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li class="active"><a href="http://127.0.0.1:8081/">Home</a></li>
              <li class="has-children">
                <a href="">Properties</a>
                <ul class="dropdown">
                  <li><a href="/Buyproperty">Buy Property</a></li>
                  <li><a href="/Rentproperty">Rent Property</a></li>
                </ul>
              </li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contactus">Contact Us</a></li>
              <li class="has-children">
                <a href="">User Account</a>
                <ul class="dropdown">
                  <a href="#" > 
                <!-- Display the user's full name if logged in, otherwise show 'User Account' -->
                {{ uid ? userName.full_name : 'User Account' }}
              </a>   

                 <!-- Show Logout and user-specific links if user is logged in -->                
                <a v-if="uid" href="/MyProfile" class="dropdown-item">My Profile</a>
                <button v-if="uid" class="dropdown-item" @click="logout">Logout</button>

                   <!-- Show Login/Signup if user is not logged in -->
                  <a v-if="!uid" href="/login" class="dropdown-item">Login</a>
                  <a v-if="!uid" href="/register" class="dropdown-item">Register</a>

                   

                                     
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->
    <!-- Header End -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      
      uid: sessionStorage.getItem('uid'), 
      userName: JSON.parse(sessionStorage.getItem('userName'))
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.uid = "";  // Clear uid
      this.userName = "";  // Clear userName
      sessionStorage.removeItem('uid'); // Clear the session storage
      sessionStorage.removeItem('userName'); // Clear the session storage
      window.location.reload(); // Reload the page to reflect logout
    }
  }
}
</script>
