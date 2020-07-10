export default {
	computed: {
		navigationBar() {
			return {
				'width': '750rpx',
				'height': plus.screen.resolutionHeight + 'px',
				'padding-top': uni.getSystemInfoSync().statusBarHeight + 44 + 'px'
			}
		}
	}
}
