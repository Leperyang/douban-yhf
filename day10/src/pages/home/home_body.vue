<template>
   
  <div class="m-cell-media-wrap">
    <a href="#">
      <div class="m-cell-media-top">
        <div class="m-cell-media">
          <div class="m-cell-title m-ellipsis-2">
            <slot name="title"></slot>
          </div>
          <div class="m-cell-detail m-ellipsis-2">
            <slot name='describe'></slot>
          </div>
        </div>
        <div class="m-pull-right right-img" :style="{'background-image':'url('+img+')'}">
        </div>
      </div>
      <div class="m-cell-media-bottom">
        <p v-if="author">作者：{{author}}</p>
         <p v-if="column">{{column}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['author','column', 'img']
  }

</script>
