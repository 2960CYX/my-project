// script.js 文件内容

// 这里可以添加一些简单的脚本，比如打开模态窗口或者验证表单数据等
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('页面加载完成，JS脚本开始工作！');
    // 更多的JS代码将会放在这里
});

// 获取回到顶部按钮
var backToTopBtn = document.getElementById("back-to-top");

// 当用户滚动一定距离时显示按钮
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// 当用户点击按钮时，滚动到页面顶部
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // 对于Safari
    document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
};