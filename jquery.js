setTimeout(function(){
  const swiper = new Swiper(".top_fv_ph.slide",  {
    effect: "fade",
    roop: "true",
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
},3000);
  
$(function() {
  var h = document.documentElement.clientHeight;
  $('.top_fv_ph').height(h);
});
  
// ページナビカレント
class PagePositionNav {
constructor() {
  this.controller = new ScrollMagic.Controller();//ScrollMagicのコントローラー
  this.sections = "[data-page-section]";//セクションのdata属性
  this.settings = {
    addClassName: "current"//ナビに付与するclass
  };
}

init(options) {
  this.setup(options);
  this.attachEvent(this.controller);
}

//外部から入力された設定をマージ
setup(options) {
  this.settings = Object.assign(
    {
      addClassName: this.settings.addClassName
    },
    options || {}
  );
}

//ScrollMagicを実行
attachEvent(controller) {
  let sections = document.querySelectorAll(this.sections);

  for (let section of sections) {
    let scene_pagePositionNav = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: "onCenter",
      duration: section.clientHeight,//実行範囲を拡張（セクションの高さいっぱいまで）
      offset: 200
    })
      // .addIndicators()
      .addTo(controller);

    //[data-page-section]エリアに入った場合
    scene_pagePositionNav.on("enter", () => {
      let targetElement = scene_pagePositionNav.triggerElement();//現在地のセクションのエレメントを取得
      this.removeNavActiveClass();//classをリセット これはなくてもいいかも
      document.querySelector(`[ data-page-nav = ${targetElement.getAttribute("data-page-section")}]`).classList.add(this.settings.addClassName);//セクションのデータ属性と同じ値を持つナビゲーションにclassを付与
    });

    //[data-page-section]エリアを抜けたとき
    scene_pagePositionNav.on("leave", () => {
      this.removeNavActiveClass();//classをリセット
    });

    //リサイズやスクロールでアップデート
    scene_pagePositionNav.on("update", function(event) {
      this.duration(section.clientHeight);//durationをアップデート
    });
  }
}

removeNavActiveClass() {
  let navElements = document.querySelectorAll("[data-page-nav]");
  for (let navElement of navElements) {
    navElement.classList.remove(this.settings.addClassName);
  }
}

}
const pagePositionNav = new PagePositionNav();
pagePositionNav.init()
