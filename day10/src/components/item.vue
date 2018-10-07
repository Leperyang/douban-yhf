<template>
	<div @click="clicldiv" :class='{active:!isshow}' class="footer-ico">
		<span v-show="isshow"><slot name="oldimg"></slot></span>
		<span v-show="!isshow"><slot name="newimg"></slot></span>
		<p>{{text}}</p>
	</div>
</template>

<script>
	export default{
		props:['text','mark','sel','rooter'],
		methods:{
			clicldiv(){
				this.$emit('hello',this.mark);
				
			}
		},
		computed:{
			isshow(){
				if(this.mark==this.sel){
					this.$router.push(this.rooter);
					return false;
				}else{
					return true;
				}
			}
		}
	}
</script>

<style>
	.active {
		color: green;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.footer-ico img{
		width: 0.82rem;
		height: 0.6933333333rem;
	} 
</style>