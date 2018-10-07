<template>
	<div>
		
		<heads text="广播 未完成">
			<img src="../../assets/images/ic_status_search_user.png" slot="one" />
			<img src="../../assets/images/ic_chat_green.png" slot="twe"/>
		</heads>
		<div class="g-body">
			<img src="../../assets/img/guang.png" />
		</div>
	</div>
</template>
<script>
	
	import heads from '../header/index'
	export default{
		components:{
			heads
		}
	}
</script>

<style>
	.g-body{
		width: 100%;
		height: 100%;
	}
	.g-body img{
		width: 100%;
	}
</style>