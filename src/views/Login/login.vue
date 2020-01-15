<template>
  <div class="loginPage">
    <div class="loginbox">
    <h4>芒果用户登录</h4>
    <ul>
      <li>
        <input type="text" v-model="user.userName" placeholder="请输入用户名" @input="log1" />

      </li>
      <li>
        <input type="password" v-model="user.password" placeholder="请输入密码" @input="log2" />
 
      </li>
      <li>
        <button @click="loginHandle">登录</button>
      </li>
    </ul>
    <img src="../../assets/mygeren/fengm.png" alt="">
    </div>
  </div>
</template>
<style scoped>
.loginPage h4{
  font-size: 24px;


}
.loginPage{
  background: #fff;
}
.loginPage img{
  float: left;
  margin-left: 400px;
  margin-top: -120px
}
.loginbox{
  width: 1200px;
  margin: 0 auto;
  margin-left:30%;
  margin-top: 10%;
  float: left;
 

}
.loginbox ul li:nth-child(1) input{
  width: 280px;
  height: 30px;
  margin-left: 40px;
  margin-top:20px;
  border-color: #333;
  padding-left: 10px;
}
.loginbox ul li:nth-child(2) input{
  width: 280px;
  height: 30px;
  margin-top: 20px;
  margin-left: 40px;
  border-color: #333;
  padding-left: 10px;



}
.loginbox ul li button{
  width: 282px;
  height: 34px;
  margin-top: 20px;
  border: none;
  background: #333;
  color: #fff;
  margin-left: 43px

}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      flag1: false,
      flag2: false
    };
  },
  methods: {
    log1() {
      if (this.user.userName == "") {
        this.flag1 = false;
      } else {
        this.flag1 = true;
      }
    },
    disa1() {
      (this.user.userName = ""), (this.flag1 = false);
    },
    log2() {
      if (this.user.password == "") {
        this.flag2 = false;
      } else {
        this.flag2 = true;
      }
    },
    disa2() {
      (this.user.password = ""), (this.flag2 = false);
    },
    loginHandle() {
      const data = {
        name: this.user.userName,
        password: this.user.password
      };
      axios
        .post("http://192.168.11.132:1314/api/customer/login", data)
        .then(res => {
          console.log(data);
          console.log(res);
          if (res.data.code == "1") {
            alert("登录成功");
            console.log(res.data)
            console.log(res.data._id)
            localStorage.setItem("token",res.data._id);
            this.$router.push({ name: "indexIndex" });
          } else {
            this.count = "请检查用户名或密码";
          }
        });
    }
  }
};
</script>
<style scoped>
/*引入css 样式文件*/
@import "../../style/sty/login.css";
</style>