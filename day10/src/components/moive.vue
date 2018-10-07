<template>
  <div class="has-header" style="overflow: hidden;">
  <movie-body name="影院热映"></movie-body>
  	<div class="has-mid" style="margin-top: 0.3rem;">
			<img src="../assets/img/cai.png" width="100%" />
		</div>
	<movie-body name="影院即将上映"></movie-body>
  </div>
</template>

<script>
	import movieBody from './movie-body'
export default{
	 components:{
	 	movieBody
	 }
}
</script>

<style lang="less">
html{
	overflow: hidden;
}

</style>
