<template>
  <header>
    <nav class="nav-container">
      <div class="logo-container"><img src="../assets/logo.png" /></div>
      <div class="profile-icon">
        <router-link to="/profile"
          ><img
            src="https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/User_Account_Avatar_Person_Profile_Login_Human-512.png"
        /></router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 0;
}
.nav-container {
  margin: 0 auto;
  display: table;
  text-align: center;
}
.nav-container div {
  display: inline-block;
}
.logo-container {
  width: 100px;
  height: 90px;
  margin-left: 20px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.profile-icon {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100px;
  height: 50px;
  margin-left: 90px;
}

.logo-container img,
.profile-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
