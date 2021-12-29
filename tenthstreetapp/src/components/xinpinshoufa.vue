<template>
  <div>
      <img src="https://image.10street.cn/image/9e/fb/9efbf1571452abcacd10451874edd75b.gif" style="width:100%;" alt="">
                <div style="position: relative;">
                    <img :src="xinpinshoufa_img[0].imageUrl" alt="" style="width: 100%; margin-top:-5px; margin-left:-2px;" >
                    <a href="" style="display: inline-block; position: absolute; width: 50%; height: 100%; left: 0%; top: 0%;"></a>
                    <a href="" style="display: inline-block; position: absolute; width: 50%; height: 100%; left: 50%; top: 0%;"></a>
                </div>
                <div style="position: relative;">
                    <img :src="xinpinshoufa_img[1][0].imageUrl" alt="" style="width: 100%; margin-top:-5px; margin-left:-2px;">
                    <a href="" style="display: inline-block; position: absolute; width: 50%; height: 100%; left: 0%; top: 0%;"></a>
                    <a href="" style="display: inline-block; position: absolute; width: 50%; height: 100%; left: 50%; top: 0%;"></a>
                </div>
  </div>
</template>

<script>
export default {

      props:["xinpinshoufa_img"]

}
</script>

<style>

</style>