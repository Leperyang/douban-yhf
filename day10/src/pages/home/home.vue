<template>
	<div>
		<home-header></home-header>
		<!--<h1>home</h1>-->
		<home-lunbo></home-lunbo>
		<p class="nav-line">
   		<i class="nav-shu"></i>
   		<span>热点</span>
   		</p>
		<div style="border-bottom:0.02666666666rem solid #ccc;" v-for="item in arr">
		<home-body :author=item.author :img=item.imgsrc  :colimn=item.climn>
			<span slot="title">{{item.title}}</span>
			<span slot="describe">{{item.describe}}</span>
		</home-body>
		</div>
		<!--<home-body author="作者:豆瓣"  column="来自栏目：一周热门影视" :img=images[1].img>
			<span slot="title">一周豆瓣热门影视|二十年后这帮苏格兰老炮儿还是这么嗨</span>
			<span slot="describe">三个榜单的冠军与上周一样冠军们大概独孤求败......</span>
		</home-body>-->
	</div>
</template>
<script>
	import homeBody from './home_body.vue'
	import homeHeader from './home_header'
	import homeLunbo from './Home_lunbo'
	export default {
		components: {
			homeHeader,
			homeLunbo,
			homeBody
		},
		mounted(){
			this.axios.get("http://localhost:8080/Douban/Server").then(
				res=>{console.log(res.data);this.arr=res.data},
				error=>console.log(error)
			)
		}
		,
		data(){
			return {
				arr:[]
			}
		}
	}
</script>