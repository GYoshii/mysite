Vue.component('feature-fpost', {
  props: ['fpost'],
  template: '<div class="item item-image"><img :src="fpost.image" alt="イメージ"><h3>{{ fpost.name }}</h3><p class="item__title" style="white-space:pre-line;">{{ fpost.content }}</p></div>'
})

Vue.component('spot-post', {
  props: ['post'],
  template: '<div class="item item-image"><img :src="post.image" alt="イメージ"><h3>{{ post.name }}</h3><p class="item__title" style="white-space:pre-line;">{{ post.content }}</p></div>'
})

new Vue({
  el: '#app',
  data: {
    fposts: [
      { id: 1, name: 'リーズナブルな価格設定' , image: './photos/reasonable.jpg' , content: "リーズナブルな価格でサービスを提供いたします。\n１泊２日の旅行で20,000円〜 \n(東京・京都間の新幹線代 + 宿泊費) 。" },
      { id: 2, name: '厳選された宿' , image: './photos/inn.jpg' , content: "当社が自信を持ってお勧めできる宿からご予算、\n条件に合わせてお選びいただけます。" },
      { id: 3, name: '大人数のご旅行にも対応' , image: './photos/group.jpg' , content: "数100人規模のご旅行も対応可能です。\n安心してお任せください。" }
    ],
    posts: [
      { id: 1, name: '金閣寺' , image: './photos/kinkakuji.jpg' , content: "京都の観光地の代表格です。\n世界文化遺産にも登録され、海外からもその美しさを見るために多くの観光客が訪れます。\n金色の外観が一番注目されますが、そのほかにも見どころはたくさんあります。\n今も湧き出している銀河泉は、金閣のさらに奥にあり、足利義満がお茶の水に使ったと伝えられる泉です。\n竜門滝は、2.3メートルの高さがあり、龍門の滝を鯉が登りきると龍に化するといわれる中国の故事登竜門に因んだ鯉魚石が置かれています。\nその他にも、総門や方丈、大書院などがあります。" },
      { id: 2, name: '貴船神社' , image: './photos/kihunejinja.jpg' , content: "他の観光スポットからは少し離れた場所にありますが、１年を通して多くの観光客が訪れます。\n少なくとも1300年以上の歴史がある古い由緒ある神社です。\n縁結びの神・磐長姫命を祀っており、恋人の縁のほか、仕事や人生における人との出会いも結ぶといわれています。\n水占みくじは、御神水に何も書かれていないみくじを浸すと内容が浮かび上がってくるという貴船神社ならではの占いです。" },
      { id: 3, name: '伏見稲荷' , image: './photos/husimiinari.jpg' , content: "お稲荷さんの愛称で親しまれる伏見稲荷は、全国に約３万ある伏見稲荷の総本山で、711年の創建と伝わります。\n最大の見所は朱塗りの鳥居が並ぶ千本鳥居です。\n参拝者の思いのこもった鳥居は、現在では境内全域に約１万基がならぶとされますから圧巻です。\n境内には”狛狐”が多くおり、狐の絵馬に願い事を書くことができます。実は境内は１周約４kmととても広く、随所にご利益のあるお社や見所があります。" }
    ]
  }
})

//topへもどるボタン
// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();


//内部リンクへとぶボタン
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //隠れる分を補正
    var topHeight = $("#top ul").height();
    //リンク先までの距離を取得
    var position = target.offset().top - topHeight;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//スライドショー
jQuery(function($) {
  $('#header').bgSwitcher({
   images: ["./photos/rojiura.jpg","./photos/shimogamojinja.jpg","./photos/bamboo.jpg","./photos/kiyomizudera.jpg"], 
　 interval: 4000,
　 loop: true,
　 shuffle: true,
　 effect: "fade", // fade,blind,clip,slide,drop,hide
　 duration: 1000,
　 easing: "swing" // linear,swing
   });
  });