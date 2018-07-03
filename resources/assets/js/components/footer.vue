<template>
    <div>
        <div id="footer">
            <div class="container">
                <div class="flex-container">

                    <div class="left-half">
                        <h5 class="attention-title">關注我們</h5>
                        <div class="attention-icon">
                            <div class="facebook">f</div>
                            <div class="youtube"></div>
                        </div>
                    </div>

                    <div class="left-half">
                        <h5 class="attention-title">相關事項</h5>
                        <div class="something">
                            <ul>
                                <li>
                                    <a href="/#ll">鋰離子電池組</a>
                                </li>
                                <li>
                                    <a href="/#lg">鋰聚合物電池組</a>
                                </li>
                                <li>
                                    <a href="/#ls">磷酸鋰鐵電池組</a>
                                </li>
                                <li>
                                    <a href="/#nc">鈕扣型電池</a>
                                </li>
                                <li>
                                    <a href="">ISO證書</a>
                                </li>
                                <li>
                                    <a href="">產品責任險</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="right">
                        <h5 class="attention-title">聯絡資訊</h5>
                        <div>
                            騏駿電池服務 (02) 8993-3299 | 營業時間 09:00 - 18:00 <br> 新北市新莊區中港路 - 132 巷 8 號 1 樓 <br>
                            <a href="mailto:chijiun.telstar@msa.hinet.net">業務諮詢 chijiun.telstar@msa.hinet.net</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="copyright">
                <div class="container">
                    Copyright 2018 © 騏駿科技有限公司 All Rights Reserved.
                </div>
            </div>
        </div>

    </div>
</template>
<style>
#footer {
  background-color: #f1f1f1;
}

.flex-container {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
}

#footer .left-half {
  color: white;
  width: 25%;
  min-height: 250px;
  line-height: 75px;
  padding-top: 20px;
}

#footer .right {
  width: 50%;
  min-height: 300px;
  padding-top: 20px;
  line-height: 30px;
  color: #334862;
}

#footer .right a {
  color: #3a589d;
}

#footer .attention-title {
  color: #0099ff;
  line-height: 1.05;
  letter-spacing: 0.1em;
  font-size: 1em;
}

#footer .attention-icon {
  display: flex;
  flex-wrap: wrap;
}

#footer .facebook {
  background-color: #3a589d;
  border-radius: 50%;
  text-align: center;
  width: 80px;
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
}

#footer .youtube {
  cursor: pointer;
  margin-right: 20px;
  text-align: center;
  width: 80px;
  font-size: 10px;
  background: url("/image/youtube-sociocon.png");
  background-size: 100%;
}

#footer .something ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #334862;
}

#footer .something li {
  line-height: 40px;
}

#footer a {
  text-decoration: none;
  cursor: pointer;
  color: dimgrey;
}

#footer .copyright {
  width: 100%;
  height: 40px;
  background-color: #5b5b5b;
  color: #fff;
  line-height: 40px;
}

#footer .something li a:hover {
  color: #20b2aa;
}

@media only screen and (max-width: 1070px) {
  #web-header {
    display: none;
  }

  #phone-header {
    display: inline-block;
  }

  .banner {
    position: relative;
    background-size: 100% 100%;
    width: 100%;
    height: 200px;
  }

  .banner .b1 {
    font-size: 40px;
  }

  .banner .b2 {
    font-size: 26px;
  }
}

@media only screen and (max-width: 660px) {
  #web-header {
    display: none;
  }

  #phone-header {
    display: inline-block;
  }

  .banner {
    position: relative;
    background-size: 100% 100%;
    width: 100%;
    height: 200px;
  }

  .banner .b1 {
    font-size: 30px;
  }

  .banner .b2 {
    font-size: 18px;
  }

  .sub-production {
    width: 45%;
  }

  .production-line span {
    text-align: center;
    min-width: 50%;
    color: rgb(85, 85, 85);
    font-weight: bold;
    font-size: 1.3em;
  }

  .container {
    margin: 0 auto;
    width: 90%;
  }

  #footer .left-half {
    width: 100%;
    min-height: 150px;
  }

  #footer .right {
    width: 100%;
    min-height: 200px;
  }

  #footer .copyright {
    font-size: 10px;
  }
}

@media only screen and (max-width: 500px) {
  .banner .b1 {
    font-size: 24px;
  }

  .banner .b2 {
    font-size: 16px;
  }

  .banner-note {
    position: absolute;
    top: 60%;
    right: 0;
    width: 50%;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>
