<script>
	import config from './utils/config.js'  // 配置文件
	import uniApi from './utils/uni-api.js' // 常用封装
	import util from './utils/util.js'      // 工具函数
	export default {
		globalData: {
			$config: config,
			$uni: uniApi,
			$util: util
		},
		onLaunch: function() {
			this.lockOrientation()
			this.importIconfont()
		},
		methods: {
			lockOrientation() {
				plus.screen.lockOrientation('portrait-primary')
			},
			importIconfont() {
				weex.requireModule('dom').addRule('fontFace', {
					'fontFamily': 'iconfont',
					'src': "url('file:/" + plus.io.convertLocalFileSystemURL('/styles/iconfont.ttf') + "')"
				})
			}
		}
	}
</script>

<style lang="scss">
	/* 每个页面公共css */
	@import url("~@/styles/util.css");
	
	/* 字体图标 */
	.iconfont { font-family: iconfont; }
	
	/* 边框 */
	.border { border-width: 1px; border-color: $border }
	.border-top { border-top-width: 1px; border-top-color: $border; }
	.border-right { border-right-width: 1px; border-right-color: $border; }
	.border-bottom { border-bottom-width: 1px; border-bottom-color: $border; }
	.border-left { border-left-width: 1px; border-left-color: $border; }
	
	/* 背景 */
	.bg-theme { background-color: $theme; }
	.bg-white { background-color: $white; }
	.bg-black { background-color: $black; }
	.bg-red { background-color: $red; }
	.bg-green { background-color: $green; }
	.bg-blue { background-color: $blue; }
	
	/* 颜色 */
	.theme { color: $theme; }
	.white { color: $white; }
	.black { color: $black; }
	.red { color: $red; }
	.green { color: $green; }
	.blue { color: $blue; }
	
	/* 文字 */
	.primary { color: $primary; }
	.general { color: $general; }
	.secondary { color: $secondary; }
	.placeholder { color: $placeholder; }
</style>
