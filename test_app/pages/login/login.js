// pages/login/login.js

Page({
  data: {
    username: "",
    password: "",
    loginTypes: [
      { key: 0, type: "Home", checked: true },
      { key: 1, type: "Office" }
    ],
    msg: "",
    showResult: false
  },

  onLoad: () => {
  },
  getData: () => {
    return this.data;
  },
  radioChange: function (e) {
    console.log('Radio triggers a change event', e.detail.value);
    const tmp = [];
    console.log(this.data.loginTypes);
    this.data.loginTypes.forEach(item => {

      if (item.key === parseInt(e.detail.value))
        item.checked = true;
      else
        item.checked = false;

      tmp.push(item);
    });
    this.setData({
      loginTypes: tmp
    })
  },

  tapOnAdd: function () {
    this.setData({
      msg: "A login has been added successfully!",
      showResult: true
    });
    console.log(this.data);
  },
  tapOnClear: function () {
    this.setData({
      username: "",
      password: "",
      loginTypes: [
        { key: 0, type: "Home", checked: true },
        { key: 1, type: "Office" }
      ],
      msg: "",
      showResult: false
    });
    console.log(this.data)
  },

  onUpdateUsername: function (e) {
    this.setData({ username: e.detail.value });
  },

  onUpdatePassword: function (e) {
    this.setData({ password: e.detail.value });
  }

});