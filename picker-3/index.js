<template>
  <view class="dialog" wx:if="{{isDialog}}">
    <view class="dialog-mask" bindtap="handlDialogCancel"></view>
    <view class="dialog-container">
      <view class="dialog-button">
        <view bindtap="handlDialogCancel" class="dialog-button-cancel">取消</view>
        <view bindtap="handlDialogOK" class="dialog-button-ok">确定</view>
      </view>
      <picker-view indicator-style="height: 50px;" class="dialog-picker" value="{{provinceCityArea}}" bindchange="handPickerChange">
        <picker-view-column>
          <view wx:for="{{provinceList}}" wx:key="item" style="line-height: 50px;padding-left:10px;">{{item}}</view>
        </picker-view-column>
        <picker-view-column>
          <view wx:for="{{cityList}}" wx:key="item" style="line-height: 50px;padding-left:10px;">{{item}}</view>
        </picker-view-column>
        <picker-view-column>
          <view wx:for="{{areaList}}" wx:key="item" style="line-height: 50px;padding-left:10px;">{{item}}</view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</template>


<style lang="css">
  .dialog {
    height: 293px;
  }
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
  }
  .dialog-container {
    position: fixed;
    width: 100%;
    left: 0;
    top: 16px;
    z-index: 5000;
    background: white;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }
  .dialog-mask-show .dialog-mask {
    display: block;
    animation: fadeIn ease 0.3s forwards;
  }
  .dialog-mask-show .dialog-container {
    transform: translateY(0);
  }
  .dialog-picker {
    width: 100%;
    height: 250px;
    text-align: center;
    font-size: 30rpx;
  }
  .dialog-button {
    position: relative;
    display: flex;
    padding: 9px 15px;
    font-size: 17px;
    border-bottom: 1rpx solid #d9d9d9;
  }
  .dialog-button-cancel {
    float: left;
    flex: 1;
    color: #888;
  }
  .dialog-button-ok {
    float: right;
    flex: 1;
    color: #1aad19;
    text-align: right;
  }
</style>


<script>
  import china from '@/china/china.js'

  export default class Index extends wepy.page {
    data = {
      isDialog: true,
      deliveryId: '',
      deliveryName: '',
      deliveryPhone: '',
      provinceList: [],
      deliveryProvince: "",
      cityList: [],
      deliveryCity: "",
      areaList: [],
      deliveryArea: "",
      provinceCityArea: [0, 0, 0]
    }

    methods = {
      handlDialogCancel: function () {
        this.isDialog = false;
      },
      handlDialogOK: function () {
        var provinceIndex = this.data.provinceCityArea[0];
        var cityIndex = this.data.provinceCityArea[1];
        var areaIndex = this.data.provinceCityArea[2];

        var deliveryProvince = china.children[provinceIndex].name;
        var deliveryCity = china.children[provinceIndex].children[cityIndex].name;
        var deliveryArea = china.children[provinceIndex].children[cityIndex].children[areaIndex].name;

        this.isDialog = false;

        console.log(deliveryProvince + deliveryCity + deliveryArea);  //最后要输出的地址
      },
      handPickerChange: function (event) {
        if (this.data.isDialog) {
          var provinceCityArea = event.detail.value;
          var provinceIndex = provinceCityArea[0];
          var cityIndex = provinceCityArea[1];
          var areaIndex = provinceCityArea[2];

          if (this.data.provinceCityArea[0] != provinceCityArea[0]) {
            cityIndex = 0;
            areaIndex = 0;
          } else if (this.data.provinceCityArea[1] != provinceCityArea[1]) {
            areaIndex = 0;
          }

          var cityList = [];
          var areaList = [];

          for (var i = 0; i < china.children[provinceIndex].children.length; i++) {
            cityList.push(china.children[provinceIndex].children[i].name);
          }

          for (var i = 0; i < china.children[provinceIndex].children[cityIndex].children.length; i++) {
            areaList.push(china.children[provinceIndex].children[cityIndex].children[i].name);
          }

          this.cityList = cityList,
          this.areaList = areaList,
          this.provinceCityArea = [provinceIndex, cityIndex, areaIndex]
        }
      }
    },

    onShow() {
      for (var i = 0; i < china.children.length; i++) {
        this.provinceList.push(china.children[i].name);
      }

      for (var i = 0; i < china.children[0].children.length; i++) {
        this.cityList.push(china.children[0].children[i].name);
      }

      for (var i = 0; i < china.children[0].children[0].children.length; i++) {
        this.areaList.push(china.children[0].children[0].children[i].name);
      }
    }
  }
</script>












