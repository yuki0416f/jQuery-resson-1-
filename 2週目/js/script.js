$(function () {

// カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

//   リンクをホバー半透明にする
$('a, .item img').hover(function () {
  $(this).stop().animate({opacity: 0.5,}, 300);
},
function(){
$(this).stop().animate({opacity: 1.0,}, 300);
});

// スクロールしたときにTOPに戻るボタンを表示させる
$(window).scroll(function() {
  if($(this).scrollTop() > 100){
  $('#top-btn').fadeIn();
  }else {
  $('#top-btn').fadeOut();
  }
})

// 4. ページ内リンクのスクロールをなめらかにする(aタグをクリックした時)
$('a[href*="#"]').click(function(){
  var speed = 500; // スクロールの速度 (ミリ秒)
  var href= $(this).attr('href');
  var target = $(href);
  var position = target.offset().top;
  $('html, body').animate({scrollTop:position}, speed, 'swing');
  return false;
});
  // ボタンをクリックすると、上部に戻る
  $('#top-btn').click(function(){
    $('html, body').animate({scrollTop: 0}, '400');
    return false;
  });
  // スクロールしたときにセクションをフェードインさせる
  $(window).on('scroll', function(){
    $('section').each(function(){
      var sectionTop = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      if(scrollPos > sectionTop - windowHeight + 100){
        $(this).addClass('in-view');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
    // モーダル要素を取得
    var modal = $('#modal');
    var modalImg = $('#modal-content');
  
    // 画像をクリックしたときにモーダルを表示
    var modalImg = $('.modal-content');

$('.modal-trigger').on('click', function () {
    var imgSrc = $(this).attr('src'); // クリックした画像のパスを取得
    modalImg.attr('src', imgSrc);      // モーダルの画像にパスを設定
    modal.show();                      // モーダルを表示
});

    
    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close').on('click', function () {
      modal.hide();
    });
  
    // モーダルの外側をクリックしたときにモーダルを閉じる
    $(window).on('click', function (e) {
      if ($(e.target).is(modal)) {
        modal.hide();
      }
    });
  });
