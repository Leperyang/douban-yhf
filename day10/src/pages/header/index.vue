<template>
	<div class="header"> 
		<div><p> <strong>{{text}}</strong>
	    <span><slot name="twe"></slot></span>
		<span><slot name="one"></slot></span>
		
		</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:['text']
	}
</script>

<style>
	html,body{
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	}
	#app .header{
	position: relative;
	text-align: center;
    font-size: 0.453333333333333rem;
    color: #494949;
    height: 1.4rem;
    line-height:  1rem;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
	}
	.header div{
		padding: 0.2rem  ;
	}
	.header strong{
		position: absolute;
		left: 50%;
		transform: translate(-50%);
	}
	.header div span img{
		width: 0.9rem;
		height: 0.9rem;
	}
	.header div span{
		float: right;
		margin-right: 0.3rem;
	}
	.header div span:nth-of-type(2){
		margin-right: 0.8rem;
	}
	
</style>