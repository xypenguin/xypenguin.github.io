// グローバルに展開
phina.globalize();
/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function () {
    // 親クラス初期化
    this.superInit();
    // 背景色
    this.backgroundColor = 'black';
    // 以下にコードを書いていく
    var shape = Shape();
    shape.addChildTo(this);
    
    var obj = this;
    var label = Label({
      text:"test",
      fontSize:64,
      x:obj.gridX.center(),
      y:obj.gridY.center(),
      fill:'white'
    }).addChildTo(this);
  },
  // 毎フレーム更新処理
  update: function () {
    // 以下にコードを書いていく
    
  },
});
/*
 * メイン処理
 */
phina.main(function () {
  // アプリケーションを生成
  var app = GameApp({
    // MainScene から開始
    startLabel: 'main',
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});
