<template>

</template>


<script>
  import china from '@/notification/notification.js'

  export default class Index extends wepy.page {
    data = {

    }

    methods = {
      
    },

    onShow() {
      notification.on("aaa", this, function (data) {    console.log(data)    })  //建立监听事件
    },
    onHide() {
      notification.remove("aaa", this);  //页面离开后监听删除
    }
  }
</script>


// 触发监听事件
notification.emit("aaa", {aaa: 'aaa', bbb: 'bbb'});












