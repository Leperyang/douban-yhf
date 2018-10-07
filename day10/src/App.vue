<template>
  <div id="app">
    <router-view/>
    <barbor></barbor>
  </div>
</template>

<script>
	import barbor from './components/barbor'
export default {
  name: 'App',
  components:{
  	barbor
  },
  beforeCreate(){
  	this.$router.push('/')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
		margin: 0;
		padding: 0;
	},
	html,body{
		width: 100%;
		height: 100%;
	}
	.footer {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  border-top: 1px solid #CCCCCC;
  border-button: 1px solid #ccc;
  padding: 3%;
  box-sizing: border-box;
}
</style>
