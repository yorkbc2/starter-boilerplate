window.cacheStorage = {};
// Cache all of data in storage and get it from object
function cache (selector, data) {
	if (window.cacheStorage[selector]) {
		return window.cacheStorage[selector]
	}
	return cacheStorage[selector] = data;
}
// Get querySelector with cacheStorage
function _querySelector (selector) {
	return cache(selector, document.querySelector(selector))
}
// Get querySelectorAll with cacheStorage
function _querySelector (selector) {
	return cache(selector, document.querySelectorAll(selector))
}
// Native way to manipulate array
function _map (array, callback) {
	var i = 0;
	while (i < array.length) {
		callback(array[i], i);
		i++;
	}
}
// Test some element with _test
function _test (elOne, elTwo, description) {
	if (elOne === elTwo) {
		description !== null? console.log(description): null;
		return true;
	}
	console.error("Test isn't passed")
	return false;
}