<template>
	
	<div id="group">
		<heads text="小组">
			<img src="../../assets/images/ic_status_search_user.png" slot="one" />
			<img src="../../assets/images/ic_chat_green.png" slot="twe"/>
		</heads>
		<div class="group-xiaozu">
			<p class="group-xiaozu-group">435529个小组等你来玩</p>
			<p class="group-xiaozu-join">立即选择加入吧</p>
			<p class="group-xiaozu-insting">根据你的兴趣推荐</p>
		</div>
		<div class="group-tui">
			<img src="../../assets/img/ic_rec_group_banner_6.png" alt="">
		</div>
		<div class="group-center">
			<div class="Movie-title">
				<div class="Move-item"></div>
				<div class="Move-title">影视</div>
				<div class="Move-item"></div>
			</div>
			<ul class="group-Move">
				<li>
					<div><img src="../../assets/img/ic_group_check_anonymous.png" alt=""></div>
					<div>378765人</div>
					<div>
						<p class="group-Move-title">推荐电影 (之谜电影)</p>
						<span class="group-Move-lun">
     					加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集。和动漫。。。。
     				</span>
					</div>
					<div><img class="move-img" src="../../assets/img/g_1.png" alt=""></div>

				</li>
				<li>
					<div><img src="../../assets/img/ic_group_check_anonymous.png" alt=""></div>
					<div>6060人</div>
					<div>
						<p class="group-Move-title">The Criterion Collection</p>
						<span class="group-Move-lun">
     					Criterion Collection的出品是最传记最具有美感的DVD产品，如果你酷爱欧美亚，就是你值得拥有
     				</span>
					</div>
					<div><img class="move-img" src="../../assets/img/g_2.png" alt=""></div>

				</li>
				<li>
					<div><img src="../../assets/img/ic_group_check_anonymous.png" alt=""></div>
					<div>6060人</div>
					<div>
						<p class="group-Move-title">老友记</p>
						<span class="group-Move-lun">
     				喜欢FRIENDS申请进组时情意浓一句古老的话语，这样才会噶虐你有才华，适宜，如若不照片，局势不同韩国
     				</span>
					</div>
					<div><img class="move-img" src="../../assets/img/g_3.png" alt=""></div>

				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	import heads from '../header/index'
	export default{
		components:{
			heads
		}
	}
</script>
<style lang="less">
	html,body{
		overflow: hidden;
	}
	#group {
		position: absolute;
		left: 0;
		width: 100%;
		height: 200/75rem;
	}
	
	* {
		list-style: none;
		text-decoration: none;
	}
	
	.group-xiaozu {
		position: relative;
		top: 10/75*2rem;
		left: 0;
		width: 100%;
		height: 180/75*2rem;
		background: url(../../assets/img/ic_group_banner.png) no-repeat center;
		background-size: 100% 100%;
	}
	
	.group-xiaozu img {
		width: 100%;
		height: 100%;
	}
	
	.group-xiaozu>p {
		position: absolute;
		width: 100%;
		height: 30/75*2rem;
		text-align: center;
	}
	
	.group-xiaozu-group {
		font-size: 23/75*2rem;
		color: black;
		font-weight: 500;
		top: 70/75*2rem;
	}
	
	.group-xiaozu-join {
		font-size: 15/75*2rem;
		color: gray;
		top: 100/75*2rem;
	}
	
	.group-xiaozu-insting {
		font-size: 12/75*2rem;
		color: gray;
		top: 160/75*2rem;
		left: -34%;
	}
	
	.group-tui {
		clear: both;
		position: absolute;
		text-align: center;
		top: 245/75*2rem;
		width: 100%;
		height: 90/75*2rem;
	}
	
	.group-tui img {
		width: 90%;
		height: 90/75*2rem;
	}
	
	.group-center {
		clear: both;
		position: relative;
		width: 100%;
		height: auto;
		left: 0;
		top: 120/75*2rem;
		text-align: center;
		margin-bottom: 40/75*2rem;
	}
	
	.Movie-title {
		width: 100%;
		height: 30/75*2rem;
		line-height: 30/75*2rem;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-around;
	}
	
	.Move-item {
		width: 40%;
		height: 1/75*2rem;
		border-bottom: solid 1/75*2rem gray;
		text-align: center;
	}
	
	.Move-title {
		font-size: 18/75*2rem;
		margin-top: -15/75*2rem;
	}
	
	.group-Move {
		width: 100%;
		height: auto;
		line-height: 100/75*2rem;
		text-align: center;
	}
	
	.group-Move li {
		width: 90%;
		height: 80/75*2rem;
		line-height: 100/75*2rem;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-around;
		margin-left: 4%;
		margin-bottom: 10/75*2rem;
	}
	
	.move-img {
		width: 90%;
		height: 70/75*2rem;
	}
	
	.group-Move-title {
		font-size: 20/75*2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}
	
	.group-Move li div {
		display: inline-block;
		line-height: 20/75*2rem;
	}
	
	.group-Move li div:nth-child(1) {
		width: 100/75*2rem;
		height: 100/75*2rem;
		line-height: 100/75*2rem;
	}
	
	.group-Move li div:nth-child(2) {
		width: 120/75*2rem;
		height: 100/75*2rem;
		line-height: 60/75*2rem;
	}
	
	.group-Move li div:nth-child(3) {
		width: 150/75*2rem;
		height: 100/75*2rem;
	}
	
	.group-Move li div:nth-child(4) {
		width: 110/75*2rem;
		height: 100/75*2rem;
		line-height: 60/75*2rem;
	}
	
	.group-Move-title {
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 90%;
		height: 20/75*2rem;
		font-size: 17/75*2rem;
	}
	
	.group-Move-lun {
		display: block;
		font-size: 13/75*2rem;
		width: 95%;
		height: 60/75*2rem;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>