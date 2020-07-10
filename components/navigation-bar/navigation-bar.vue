<!--
	自定义导航栏
	1.兼容 nvue
	2.支持背景图片和插槽
	3.如果不是复杂导航栏建议使用 app 导航栏
	@author linxian
-->
<template>
	<view class="navigationBar" :style="[navigationBarHeight, backgroundColor, borderBottom]">
		<image
			class="img"
			v-if="bgImg"
			:src="bgImg"
			:style="[navigationBarHeight]"
			mode="aspectFill" />
		<view class="nav">
			<view class="nav-status" :style="[navStatusHeight]"></view>
			<view class="nav-content">
				<text class="nav-content-back" v-if="back" @click="backClick">&lt;</text>
				<text class="nav-content-title" v-if="title" :style="[titleColor]">{{ title }}</text>
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MyNavigationBar',
		props: {
			/* 背景图片 */
			bgImg: {
				type: String,
				default: ''
			},
			/* 背景颜色 */
			bgColor: {
				type: String,
				default: ''
			},
			/* 边框 */
			border: {
				type: Boolean,
				default: true
			},
			/* 返回 */
			back: {
				type: Boolean,
				default: false
			},
			/* 标题 */
			title: {
				type: String,
				default: ''
			},
			/* 标题颜色 */
			color: {
				type: String,
				default: ''
			}
		},
		computed: {
			navigationBarHeight() {
				return { 'height': uni.getSystemInfoSync().statusBarHeight + 44 + 'px' }
			},
			backgroundColor() {
				return { 'background-color': this.bgColor || '#FFFFFF' }
			},
			borderBottom() {
				const borderBottom = this.border
					? { 
						'border-bottom-width': '.5px',
						'border-bottom-color': '#C8C7CC'
					}
					: { 'border-bottom-width': 0 }
				return borderBottom
			},
			navStatusHeight() {
				return { 'height': uni.getSystemInfoSync().statusBarHeight + 'px' }
			},
			titleColor() {
				return { 'color': this.color || '#000000' }
			}
		},
		methods: {
			backClick() {
				uni.navigateBack({ delta: 1 })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navigationBar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 750rpx;
	}
	.img {
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
	}
	.nav {
		position: absolute;
		top: 0;
		left: 0;
		flex-direction: column;
		width: 750rpx;
	}
	.nav-status {
		width: 750rpx;
	}
	.nav-content {
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 44px;
	}
	.nav-content-back {
		position: absolute;
		left: 12px;
	}
	.nav-content-title {
		font-size: 16px;
	}
</style>
