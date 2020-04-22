//index.js
const app = getApp();

Page({
  data: {
    pageTitle: "E2E Demo Application"
  },
  onLoad: () => {

  },
  navigateToContactPage: () => {
    wx.navigateTo({
      url: '../login/login',
    });
  },
  navigateToCalc: () => {
    wx.navigateTo({
      url: '../register/register',
    })
  }

});