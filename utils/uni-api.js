/**
 * 常用接口封装
 * 
 * @author linxian
 */

/**
 * 保留当前页面，跳转到应用内的某个页面
 * 
 * @param {String} url 
 */
function navigateTo(url) {
	uni.navigateTo({ url })
}

/**
 * 关闭当前页面，返回上一页面或多级页面
 * 
 * @param {Number} delta 
 */
function navigateBack(delta) {
	uni.navigateBack({ delta })
}

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * 
 * @param {String} url 
 */
function redirectTo(url) {
	uni.redirectTo({ url })
}

/**
 * 关闭所有页面，打开到应用内的某个页面
 * 
 * @param {String} url 
 */
function reLaunch(url) {
	uni.reLaunch({ url })
}

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * 
 * @param {String} url 
 */
function switchTab(url) {
	uni.switchTab({ url })
}

/**
 * 显示消息提示框
 * 
 * @param {String} title
 * @param {Number} duration
 * @param {Boolean} mask
 * @param {String} icon
 */
function showToast(title, icon = 'none', mask = true, duration = 1500) {
	uni.showToast({ title, icon, mask, duration })
}

/**
 * 隐藏消息提示框
 */
function hideToast() {
	uni.hideToast()
}

/**
 * 显示 loading 提示框
 * 
 * @param {String} title
 * @param {Boolean} mask
 */
function showLoading(title = '', mask = true) {
	uni.showLoading({ title, mask })
}

/**
 * 隐藏 loading 提示框
 */
function hideLoading() {
	uni.hideLoading()
}

export default {
	navigateTo,
	navigateBack,
	redirectTo,
	reLaunch,
	switchTab,
	showToast,
	hideToast,
	showLoading,
	hideLoading
}
