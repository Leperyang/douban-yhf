<template>
	<div>
	<div class="nav-audio">
       <div class="active" @click="clickdiv"><router-link to="/audio/movie">电影</router-link></div>
	   <div @click="clickdiv"><router-link to="/audio/readbook">读书</router-link></div>
	   <div @click="clickdiv"><router-link to="/audio/tv">电视</router-link></div>
	   <div @click="clickdiv"><router-link to="/audio/city">同城</router-link></div>
	   <div @click="clickdiv"><router-link to="/audio/music">音乐</router-link></div>
	</div>
	<router-view></router-view>
	</div>
</template>

<script>
	export default{
		methods:{
			clickdiv(event){
//				event.target.parentElement.className='active'
			console.log(event.target.parentElement)
//			event.target.classname="active";
}
		}
	}
	
</script>
<style lang="less">
.nav-audio{
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-between; 
        height: 70/75rem;
        font-size: 35/75rem;
        line-height: 70/75rem;
       background-color: #fff;
       div{
           width: 20%;
             text-align: center;
         }
         a{
         	 color: #aaa;
         }
    }
    .active{
    	a{
    		color: green;
    	}
        border-bottom: 2/75rem solid green;
  	}
	
</style>