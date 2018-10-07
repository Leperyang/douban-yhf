<template>
<div>
    <div class="mine-header">
    	<p class="mine-shezhi">
    		<img src="../../assets/img/ic_tab_group_normal.png" alt=""/>
    	</p>
    	<div class="mine-info">
    		<div class="mine-login">
    			<p>
    				<span class="mine-name">豆友185371391</span>
    				<span class="mine-zhu">个人主页</span>
    			</p>
    			<p>
    				<span class="mine-guan">关注 3</span>
    				<span class="mine-noguan">被关注 0</span>
    			</p>
    		</div>
    		<div class="mine-user">
    			<img src="../../assets/img/ic_share_default_user.png" alt=""> </div>
    		
    	</div>
    </div>
    <!--我的书影音-->
    <div class="shuyingyin">
    	<p class="shuyingyin-tit">我的书影音</p>
    	<div class="style">
    		<div>
		    	<img src="../../assets/img/ic_my_music.png" alt="">
		    	<p>音乐</p>
		    </div>
		     <div>
		    <img src="../../assets/img/ic_my_books.png" alt="">
    		<p>读书</p>
    	   </div>
            <div>
    		<img src="../../assets/img/ic_my_movies_tvs.png" alt="">
    		   <p>影视.综艺</p>
    	    </div>

    	</div>
    </div>

 <!--列表-->

<ul class="mine-list">
	<p class="one"></p>
	<li >
		<div>
			<img class="mine-list-img" src="../../assets/img/abc_list_focused_holo.9.png"> 
			 <span class="mine-list-item">看电影</span>
		 </div>
		<div>
		 <span class="mine-list-fu">></span>
		</div>
	</li>
	<p class="one"></p>
	<li>
		<div>
			<img class="mine-list-img" src="../../assets/img/topic_guangbo_edit.png"> 
		<span class="mine-list-item">我的发布</span>
       
		</div>
		<div>
			<span class="mine-list-fu">></span>
		</div>
	</li>
	<li>
		<div>
			<img class="mine-list-img" src="../../assets/img/ic_groups_more.png">
		<span class="mine-list-item">我的日记</span>
       
		</div>
		<div>
			<span class="mine-list-fu">></span>
		</div>
	</li>
	<li>
		<div>
			<img class="mine-list-img" src="../../assets/img/ic_seti_create.png">
			<span class="mine-list-item">我的关注</span>
		</div>
		<div>
			<span class="mine-list-fu">></span>
		</div>
    </li>
	<li>
     <div>
     	<img class="mine-list-img" src="../../assets/img/ic_tab_subject_active.png">
     		<span class="mine-list-item">相册</span>
     </div>
     <div>
     	<span class="mine-list-fu">></span>
     </div>
	 </li>
	
	<li>
		<div>
			<img class="mine-list-img" src="../../assets/img/ic_my_doulist.png">
			<span class="mine-list-item">豆列 / 收藏</span>
		</div>
		<div>
			<span class="mine-list-fu">></span>
		</div>

	 </li>
	 	<p class="one"></p>
	<li>
		<div>
			<img class="mine-list-img" src="../../assets/img/topic_diary_edit.png"> 
				<span class="mine-list-item">钱包</span>
		</div>
		<div>
			<span class="mine-list-fu">></span>
		</div>
	</li>
		<p class="one"></p>
</ul>


</div>
</template>
<style  lang="less">

.mine-header{
	position: absolute;
	top:20/75rem;
	left: 0;
	width: 100%;
	height: 300/75rem;
	background: #52C061;
}	
.mine-shezhi{
	position: relative;
	top:40/75rem;
	height: 60/75rem;
	line-height: 60/75rem;
	text-align: right;
	padding-right: 40/75rem;

}
.mine-shezhi img{
	width: 50/75rem;
	height: 50/75rem;
}
.mine-info{
	position: absolute;
	top:120/75rem;
	left: 0;
	color: #FFF5F7;
	width: 100%;
	height: 280/75rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;
}
.mine-info div{
	display: inline-block;
}
.mine-user{
	width: 20%;
	height: 140/75rem;
	text-align: right;
}
.mine-login{
	width: 75%;
	height: 120/75rem;
	line-height:46/75rem;
}
.mine-user img{
	height: 120/75rem;
	width: 120/75rem;
}
.mine-name{
	font-size: 32/75rem;
}
.mine-zhu,.mine-guan,.mine-noguan{
	font-size: 24/75rem;
}
.mine-zhu{
	margin-left: 260/75rem;
}
.shuyingyin{
	position: absolute;
	left: 0px;
	top:400/75rem;
	width: 100%;
	height: 240/75rem;
	
}
.shuyingyin-tit{
	font-size: 30/75rem;
	padding-left: 40/75rem;
	line-height: 80/75rem;
}
.style{
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;	
}
.shuyingyin .style div{
width: 30%;
height: 200/75rem;
text-align: center;
}
.mine-list{
	position: absolute;
	left: 0px;
	top:680/75rem;
	width: 100%;
	height:800/75rem;
	
}
.mine-list img{
	width: 40/75rem;
	height: 40/75rem;
	padding-left: 60/75rem;

}
.mine-list li{
	width: 100%;
	height:80/75rem;
	line-height: 80/75rem;
	border-bottom: solid 1/75rem #F2F1EF;
	
}
.mine-list li div{
	display: inline-block;
}
.mine-list-fu{
	position: absolute;
	right: 30/75rem;
	line-height: 80/75rem;
	margin-top: -50/75rem;
	color: gray;
}
.mine-list-item{
	font-size: 26/75rem;
	line-height: 80/75rem;
	margin-left: 20/75rem;
}
.one{
	width: 100%;
	height: 5/75*2rem;
	background: #F2F1EF;
}
</style>