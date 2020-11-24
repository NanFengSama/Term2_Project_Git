/**
 * 返回顶部功能函数封装
 * 2020-11-24 by 楠枫Sama
 * 必要参数：imgURL， bottom
 */
// 当页面加载完毕
$(function() {
    // 把函数 挂载在window上 暴露出去
    window.gotoTop = function (options) {
      //准备结构
      var $gotoTopHtml = $(` <div class="backToTop">
                              <img src="${options.imgUrl}" alt="">
                         </div>`);
      //写样式定位
      $gotoTopHtml.css({
        width: '30px',
        height: '50px',
        /* 定位 */
        position: 'fixed',
        bottom: '100px',
        left: '610px',
        marginLeft: '50%',
        /* 默认隐藏 */
        display: 'none',
      });
      /* 返回顶部 */
    $(document).scroll(function() {
        //获取距离顶部的位置
        var topDistance = $('html, body').scrollTop();
        //判断
        if(topDistance > 500) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }

    })
    // 返回顶部功能
    $('body').on('click','.backToTop', function() {
        $('html, body').animate({
            scrollTop:0
        }, 300)
    })
      // 追加到页面的尾部
      $('body').append($gotoTopHtml)
    }
})