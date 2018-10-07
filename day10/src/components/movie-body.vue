<template>

	<div class="movie-body">
		<p class="m-nav"><span>{{name}}</span><span>更多></span></p>
		<div class="m-list">
			<div class="box">
				<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535096871.jpg" />
				<p class="m-name">无双</p>
				<div class="rating">
					<span class="star-full"></span>
					<span class="star-full"></span>
					<span class="star-full"></span>
					<span class="star-full"></span>
					<span class="star-half"></span>
					<span class="average">8.1</span>
				</div>
			</div>
			<div class="box">
				<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533384240.jpg" />
				<p class="m-name">李茶的姑妈</p>
				<div class="rating">
					<span  class="star-full"></span>
					<span  class="star-full"></span> 
					<span  class="star-half"></span> 
					<span  class="star-gray"></span>
					<span  class="star-gray"></span> 
					<span class="average">5.1</span> 
				</div>
			</div>
			<div class="box">
				<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.jpg" />
				<p class="m-name">影</p>
				<div data-v-64ceb16f="" data-v-76ac51e8="" class="rating"><span data-v-64ceb16f="" class="star-full"></span><span data-v-64ceb16f="" class="star-full"></span><span data-v-64ceb16f="" class="star-full"></span> <span data-v-64ceb16f="" class="star-half"></span> <span data-v-64ceb16f="" class="star-gray"></span> <span data-v-64ceb16f="" class="average">7.5</span> </div>
			</div>
			<div class="box">
				<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg" />
				<p class="m-name">加勒比海盗5 :..........................................</p>
				<div data-v-64ceb16f="" data-v-76ac51e8="" class="rating"><span data-v-64ceb16f="" class="star-full"></span><span data-v-64ceb16f="" class="star-full"></span><span data-v-64ceb16f="" class="star-full"></span><span data-v-64ceb16f="" class="star-full"></span> <span data-v-64ceb16f="" class="star-half"></span>  <span data-v-64ceb16f="" class="average">9.6</span> </div>
			</div>
		</div>
	

	</div>
</template>

<script>
	export default {
		props: ['name']
	}
</script>

<style lang="less">
	.movie-body {
		background-color: #fff;
		margin-top: 20/75rem;
		padding: 20/75rem 0;
		overflow: hidden;
		.m-nav {
			padding: 10/75rem 20/75rem;
			span:first-child {
				font-size: 35/75rem;
				font-weight: bold;
			}
			span:last-child {
				font-size: 28/75rem;
				float: right;
				color: green;
			}
		}
		.m-list {
			width: 120%;
			margin-top: 30/75rem;
			padding: 0 18/75rem;
			display: flex;
			flex-flow: row nowrap;
			overflow: hidden;
			.box {
				width: 26%;
				margin-right: 20/75rem;
				.m-name {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-size: 27/75rem;
					font-weight: bold;
					margin: 10/75rem 0;
				}
				img {
					width: 100%;
					height: 300/75rem
				}
				.rating {
					margin-top: 10/7mrem;
					font-size: 20/75rem;
					color: #aaa;
					.star-full {
						display: inline-block;
						width: 20/75rem;
						height: 20/75rem;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
						-webkit-background-size: 100% 100%;
						background-size: 100% 100%;
					}
					.star-half {
						display: inline-block;
						width: 20/75rem;
						height: 20/75rem;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=);
						-webkit-background-size: 100% 100%;
						background-size: 100% 100%;
					}
					.star-gray {
						display: inline-block;
						width: 20/75rem;
						height: 20/75rem;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
						-webkit-background-size: 100% 100%;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
</style>