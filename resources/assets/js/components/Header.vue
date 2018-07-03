<template>
    <div>
        <header>
            <div id="web-header">
                <div class="container">
                    <div class="header-left">
                        <img src="http://www.chijiun.orgates.net/images/logo.png" alt="chijiun-logo">
                    </div>
                    <div class="header-right">
                        <div class="menu">
                            <nav>
                                <ul>
                                    <li class="dropdown">
                                        <a href="/">產品介紹</a>
                                        <div class="dropdown-content">
                                            <a href="#ll">鋰離子電池組</a>
                                            <a href="#lg">鋰聚合物電池組</a>
                                            <a href="#ls">磷酸鋰鐵電池組</a>
                                            <a href="#nc">鈕扣型電池</a>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">關於我們</a>
                                    </li>
                                    <li>
                                        <a href="#">服務介紹</a>
                                    </li>
                                    <li>
                                        <a href="#">聯絡我們</a>
                                    </li>
                                    <li class="language">
                                        <a href="#">English</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div id="phone-header">
                <div class="header-left">
                    <a href="#">
                        <img src="http://www.chijiun.orgates.net/images/gif_us.gif" alt=""> English
                    </a>
                </div>
                <div class="header-right">
                    <div class="bar">
                        <label for="nav-toggle">
                            <i class="fas fa-bars"></i>
                        </label>
                    </div>
                </div>
                <div class="clear"></div>

                <input type="checkbox" id="nav-toggle" class="nav-toggle">
                <nav>
                    <ul>
                        <li>
                            <a href="/">產品介紹</a>
                        </li>
                        <li>
                            <a href="#">關於我們</a>
                        </li>
                        <li>
                            <a href="#">服務介紹</a>
                        </li>
                        <li>
                            <a href="#">聯絡我們</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>
<style>
body {
  margin: 0px;
}

#web-header {
  display: inline-block;
  height: 100px;
  line-height: 100px;
  vertical-align: bottom;
}

#web-header .header-left {
  width: 50%;
  height: 100%;
  float: left;
}

#web-header .header-right {
  width: 50%;
  height: 100%;
  float: right;
}

#web-header .header-left img {
  vertical-align: middle;
  width: 100%;
}

#web-header .menu ul {
  margin: 0;
  list-style-type: none;
}

#web-header .menu li {
  margin-right: 4%;
  color: #507ec5;
  font-size: 16px;
  font-family: Arial;
  float: left;
}

#web-header .menu a {
  cursor: pointer;
  color: #507ec5;
  text-decoration: none;
}

#web-header .menu a:hover {
  color: #20b2aa;
}

#web-header .dropdown {
  display: inline-block;
}

#web-header .dropdown-content {
  position: fixed;
  top: 70px;
  left: 50%;
  background-color: #507ec5;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;
  display: none;
}

#web-header .dropdown-content a {
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 10px 20px;
  color: #fff;
}

#web-header.dropdown-content a:hover {
  background-color: #f1f1f1;
}

#web-header .dropdown:hover .dropdown-content {
  display: block;
}

#web-header .language a {
  margin-left: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  background-color: #507ec5;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  padding: 5px 15px 5px 15px;
}

#phone-header {
  display: none;
  line-height: 52px;
  width: 100%;
  background-color: #333;
  vertical-align: bottom;
}

#phone-header .header-left {
  float: left;
  width: 40%;
  height: 100%;
}

#phone-header .header-right {
  right: 5%;
  width: 10%;
  float: right;
}

#phone-header .bar {
  color: #fff;
}

#phone-header .header-left a {
  vertical-align: middle;
  margin-left: 10%;
  color: #fff;
  text-decoration: none;
}

#phone-header .header-left img {
  vertical-align: middle;
  width: 30%;
}

#phone-header nav {
  display: none;
}

#nav-toggle {
  display: none;
}

#nav-toggle:checked ~ nav {
  display: block;
}

#phone-header ul {
  text-align: center;
  margin: 0;
  padding: 0;
}

#phone-header li a {
  text-decoration: none;
  color: #fff;
}

.clear {
  clear: both;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>
