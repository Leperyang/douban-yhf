<template>
	<div class="seach">
	 	   	 <div class="serch-input">
	 	   	 	<i class="seach-icon"></i>
	 	   	 	<input type="text" placeholder="请输入搜索的内容"/>
	 	   	 	<i class="seach-ma"></i>
	 	   	 </div>
	 	   	  <i class="xinxi"></i>
	 	   </div>
</template>

<script>
</script>

<style>
 .seach {
  box-sizing: border-box;
  height: 1.33333333rem;
  padding: 0.2rem;
  background-color: #8FEE8F;
}
 .seach .serch-input {
  float: left;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.2rem;
  padding: 0.06666667rem;
  background-color: white;
}
 .seach .serch-input .seach-icon {
  float: left;
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background-image: url(../../assets/img/ic_search_gray.png);
  background-size: 100% 100%;
}
.seach .serch-input .seach-ma {
  float: right;
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background-image: url(../../assets/img/ic_scan_gray.png);
  background-size: 100% 100%;
}
 .seach .serch-input input {
  margin-left: 0.06666667rem;
  height: 0.8rem;
  width: 80%;
  font-size: 0.37333333rem;
  border: 0;
}
 .seach .xinxi {
  float: right;
  margin-top: 0.2rem;
  display: block;
  width: 8%;
  height: 0.8rem;
  background-image: url(../../assets/img/ic_chat_white.png);
  background-size: 100% 100%;
}
</style>