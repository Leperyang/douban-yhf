<template>
	<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide ani" ><img src="../../assets/images/banner/01.jpg" /></div>
				<div class="swiper-slide ani" ><img src="../../assets/images/banner/02.jpg" /></div>
				<div class="swiper-slide ani" ><img src="../../assets/images/banner/03.jpg" /></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
</template>
<script>
           import Swiper   from 'swiper';
           import 'swiper/dist/css/swiper.min.css';
	      export default{
	         mounted(){
	      		let a= new Swiper ('.swiper-container', {
					direction: 'horizontal', // 垂直切换选项
					loop: true, // 循环模式选项,
				})
	      	}
}
</script>

<style>
 .swiper-container {
    width: 100%;
    height: 4rem;
}  
.swiper-wrapper img{
	width: 100%;
	height: 100%;
}
</style>