// 显示提示消息
alert('你被骗了');
// 当用户被骗时，自动跳转到其他网站
function redirectToOtherSite() {
    window.location.href = 'https://player.bilibili.com/player.html?isOutside=true&aid=80433022&bvid=BV1GJ411x7h7&cid=137649199&p=1'; // 将URL替换为你想要跳转的网站
  }
 
  // 调用函数以触发跳转
  redirectToOtherSite();
  