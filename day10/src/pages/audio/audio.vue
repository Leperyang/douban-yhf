<template>
	<div>
		<heads text="书影音">
			<img src="../../assets/images/ic_group_search.png" slot="one" />
			<img src="../../assets/images/ic_chat_green.png" slot="twe"/>
		</heads>
		<navs>
		</navs>
	</div>
</template>

<script>
	import heads from '../header/index'
	import navs from './audio_nav'
	export default{
		components:{
			heads,
			navs
		}
	}
</script>

<style>
</style>