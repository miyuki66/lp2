// カルーセル
$('.voices-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
  arrows:false
});
$('#smarttab').smartTab({
  enableUrlHash: false
});