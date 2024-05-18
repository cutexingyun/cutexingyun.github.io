// 显示提示消息
alert('你被骗了');
// 当用户被骗时，自动跳转到其他网站
function redirectToOtherSite() {
    window.location.href = 'video/secret.html'; // 将URL替换为你想要跳转的网站
  }
 
  // 调用函数以触发跳转
  redirectToOtherSite();
  