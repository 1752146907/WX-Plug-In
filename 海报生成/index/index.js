const app = getApp()

Page({
  data: {

  },

  /**
   * 显示商品海报图
   */

  showPoster: function () {
    let _this = this;
    wx.showLoading({
      title: '努力生成中',
    })

    // 使用Promise.race语法糖，为生成海报超时做处理
    var PromiseOne = new Promise(function (resolve) {
      let nickName = "Mr.Li";
      var rpx
      wx.getSystemInfo({
        success: function (res) {
          rpx = res.windowWidth / res.windowWidth;
          _this.setData({
            rpx: rpx
          });

          // 画布
          const ctx = wx.createCanvasContext('myCanvas'); //创建画布
          var width = "";

          wx.createSelectorQuery().select('#canvas-container').boundingClientRect(function (rect) {
            var rpx = _this.data.rpx
            width = rect.width * 0.8;

            // 填充白色背景
            ctx.setFillStyle('#ffffff')
            ctx.fillRect(0 * rpx, 0 * rpx, 556, 988 * rpx)

            //商品图片
            wx.downloadFile({
              url: 'http://tpl.amazeui.org/template/3/fm.png',
              success: function (res) {
                // 描绘商品图片
                ctx.drawImage(res.tempFilePath, 24 * rpx, 136 * rpx, 230 * rpx, 230 * rpx); // 推进去图片
                ctx.save();

                // 描绘底部背景图
                ctx.drawImage('http://s.amazeui.org/media/i/demos/bing-2.jpg', 14 * rpx, 424 * rpx, 250 * rpx, 86 * rpx); // 推进去图片
                ctx.restore();
                ctx.save();

                //utd数量
                ctx.setFillStyle('#f7f7f7');
                ctx.setFontSize(28 * rpx);
                ctx.fillText('88.88', 24 * rpx, 478 * rpx);
                ctx.save();

                //utd文字
                let utdWidthX = ctx.measureText('88.88').width;
                ctx.setFillStyle('#f7f7f7');
                ctx.save();
                ctx.setFontSize(16 * rpx);
                ctx.save();
                ctx.fillText('UTD', utdWidthX + 30 * rpx, 478 * rpx);
                ctx.save();

                // 折合约
                ctx.setFillStyle('#f7f7f7');
                ctx.save();
                ctx.setFontSize(16 * rpx);
                ctx.save();
                ctx.fillText('8.00', 88 * rpx, 503 * rpx);
                ctx.save();

                // 商品价格
                ctx.setFillStyle('#c90e86');
                ctx.save();
                ctx.setFontSize(18 * rpx);
                ctx.save();
                ctx.fillText("￥" + '99.99', 14 * rpx, 394 * rpx);
                ctx.save();

                // 描绘商品标签（缤纷价）
                let binfenWidthX = ctx.measureText('99.99').width;
                ctx.drawImage('http://tpl.amazeui.org/template/3/fm.png', binfenWidthX + 36 * rpx, 382 * rpx, 33 * rpx, 13 * rpx); // 推进去图片
                ctx.save();

                //商品名称
                let pichName = '很多设计师喜欢用英文，因为中文排版真的不太容易搞';
                if (pichName.length > 20) { // 截取
                  pichName = pichName.slice(0, 20) + '...';
                };
                ctx.setFillStyle('#4b484b');
                ctx.save();
                ctx.setFontSize(12 * rpx);
                ctx.fillText(pichName, 14 * rpx, 414 * rpx);
                ctx.save();

                //三个标签
                ctx.save(); // 半圆画布开始
                ctx.setFillStyle("#8283f8");
                ctx.setStrokeStyle('#8283f8');
                ctx.setLineJoin('round'); //交点设置成圆角
                ctx.setLineWidth(18);
                ctx.strokeRect(10 + 16 / 2 * rpx, 100 * rpx, 80 - 16 * rpx, 28 - 16 * rpx); // 第一个
                // ctx.fillRect(10 + 16 * rpx, 100 * rpx, 80 - 16 * 2 * rpx, 28 - 16 * 2 * rpx);

                ctx.strokeRect(100 + 16 / 2 * rpx, 100 * rpx, 80 - 16 * rpx, 28 - 16 * rpx); // 第二个
                // ctx.fillRect(100 + 16 * rpx, 100 * rpx, 80 - 16 * 2 * rpx, 28 - 16 * 2 * rpx);

                ctx.strokeRect(190 + 16 / 2 * rpx, 100 * rpx, 80 - 16 * rpx, 28 - 16 * rpx); // 第三个
                // ctx.fillRect(180 + 16 * rpx, 100 * rpx, 80 - 16 * 2 * rpx, 28 - 16 * 2 * rpx);
                ctx.stroke();
                ctx.closePath(); // 半圆画布结束
                ctx.save();

                ctx.setFillStyle('white');
                ctx.save();
                ctx.setFontSize(12 * rpx);
                ctx.save();
                ctx.fillText('越买越赚钱', 10 + 18 / 2 * rpx, 110 * rpx);

                ctx.setFillStyle('white');
                ctx.save();
                ctx.setFontSize(12 * rpx);
                ctx.save();
                ctx.fillText('消费得红利', 100 + 18 / 2 * rpx, 110 * rpx);

                ctx.setFillStyle('white');
                ctx.save();
                ctx.setFontSize(12 * rpx);
                ctx.save();
                ctx.fillText('人人都受益', 190 + 18 / 2 * rpx, 110 * rpx);
                ctx.save();

                //二维码
                wx.downloadFile({
                  url: 'http://tpl.amazeui.org/template/3/fm.png',
                  success: function (res) {
                    ctx.drawImage(res.tempFilePath, 196 * rpx, 430 * rpx, 60 * rpx, 60 * rpx);
                    ctx.restore();
                    ctx.save();

                    // 头像圆形
                    wx.downloadFile({
                      url: 'http://tpl.amazeui.org/template/3/fm.png',
                      success: (res) => {
                        //头部背景
                        ctx.drawImage('http://s.amazeui.org/media/i/demos/bing-3.jpg', 0 * rpx, 0 * rpx, 278 * rpx, 83 * rpx); // 推进去图片
                        ctx.restore();
                        ctx.save();

                        ctx.beginPath(); //开始绘制头像
                        ctx.arc(53 * rpx / 2 + 23 * rpx, 53 * rpx / 2 + 18 * rpx, 53 * rpx / 2, 0, Math.PI * 2, false);
                        ctx.clip();
                        ctx.drawImage(res.tempFilePath, 23 * rpx, 18 * rpx, 53 * rpx, 53 * rpx); // 推进去图片
                        ctx.restore();
                        ctx.save();

                        // 用户名称
                        ctx.setFillStyle('#FFFFFF');
                        ctx.setFontSize(14 * rpx);
                        ctx.fillText('你好帅', 90 * rpx, 36 * rpx);
                        ctx.save();

                        //画布绘制
                        setTimeout(function () {
                          ctx.draw(false, () => {
                            setTimeout(() => {
                              wx.canvasToTempFilePath({
                                canvasId: 'myCanvas',
                                success: function (res) {
                                  _this.setData({
                                    canimagePath: res.tempFilePath,
                                    canvasHidden: true
                                  })

                                  setTimeout(() => {
                                    wx.hideLoading();
                                    resolve('success')
                                  }, 10)
                                }
                              })
                            }, 100)
                          });
                        }, 600)
                      }
                    })
                  }
                })
              }
            })
          }).exec()
        },
      })
    });
    var PromiseTwo = new Promise(function (resolve) {
      let interval = setInterval(() => {
        resolve('error');
        clearInterval(interval)
      }, 15000);
    })
    // PromiseOne和PromiseTwo，谁先跑完就执行谁的回调
    Promise.race([PromiseOne, PromiseTwo]).then(function (value) {
      // 加载海报失败处理
      if (value == "error") {
        wx.showToast({
          title: '生成失败，请稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    });
  },
  onLoad: function () {
    this.showPoster();
  },
})
