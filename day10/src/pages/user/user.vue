<template>
	<div>
		<heads text="用户">
			<img src="../../assets/images/ic_group_search.png" slot="one" />
			<img src="../../assets/images/ic_chat_green.png" slot="twe"/>
		</heads>
		<user-body></user-body>
	</div>
</template>

<script>
	import heads from '../header/index'
	import userBody from './user_body.vue'
	export default{
		components:{
			heads,
			userBody
		}
	}
</script>

<style>
</style>