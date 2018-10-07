<template>
	<div class="footer">
		<item mark=1  :sel=select text="首页" @hello="load" rooter="/" > 
			<img src="../assets/img/1.png"  slot="oldimg"/>
			<img src="../assets/img/6.png"  slot="newimg"/>
		</item>
		<item mark=2 :sel=select  text="书影音" @hello="load" rooter="/audio">
			<img src="../assets/img/7.png"  slot="oldimg"/>
			<img src="../assets/img/2.png"  slot="newimg"/>
		</item>
		<item mark=3 :sel=select text="广播" @hello="load" rooter="/book">
			<img src="../assets/img/3.png"  slot="oldimg"/>
			<img src="../assets/img/8.png"  slot="newimg"/>
		</item>
		<item mark=4 :sel=select text="小组" @hello="load" rooter="/group">
			<img src="../assets/img/4.png"  slot="oldimg"/>
			<img src="../assets/img/9.png"  slot="newimg"/>
		</item>
		<item mark=5 :sel=select text="我的" @hello="load" rooter="/user">
			<img src="../assets/img/5.png" slot="oldimg"/>
			<img src="../assets/img/10.png"  slot="newimg"/>
		</item>
	</div>
</template>

<script>
	import item  from './item'
	export default{
		data(){
			return {
				select:1
			}
		},
		methods:{
			load(val){
				this.select=val;
			}
		},
		components:{
			item
		}
	}
</script>
