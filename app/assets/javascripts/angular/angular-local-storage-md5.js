(function() {
/* Start angularLocalStorageMD5 */
'use strict';
//'localStorageService','md5'
var angularLocalStorageMD5 = angular.module('LocalStorageMD5Module', ['angular-md5','LocalStorageModule']);

angularLocalStorageMD5.provider('localStorageMD5Service', function() {
	this.md5_key_suffix = '_md5';
		
	this.help = function(){
		console.debug('How to configure this provider:');
		console.log('1. Add the next two lines:');
		console.log(".config(['localStorageMD5ServiceProvider','localStorageServiceProvider', function(localStorageMD5ServiceProvider,localStorageServiceProvider){");
		console.log("}])");
		console.log('2. Between them, add the following (whatever is required):');
		console.log("  localStorageServiceProvider.setStorageType('localStorage' or 'sessionStorage');  //to set the storage");
		console.log("  localStorageServiceProvider.setPrefix('my_app_name');  //to set the namespace to my_app_name");
		console.log("  localStorageServiceProvider.setStorageCookie(10, '/');  //to set the cookie expiration to 10 days and the path to /");
		console.log("  localStorageServiceProvider.setStorageCookieDomain('my_app_name.com');  //to set the cookie domain to my_app_name.com");
		console.log("  localStorageServiceProvider.setNotify(itemSet, itemRemove);  //to set the notifications for set and remove on or off (using true/false)");
	}
	
	this.$get = ['md5','localStorageService','$log','$rootScope',function(md5,localStorageService,$log,$rootScope) {
		var md5_key_suffix = this.md5_key_suffix;
		
		var setKeyValue = function(key,value){			
			if (key==='undefined' || key==null) return;
			localStorageService.set(key,value);
			var json = angular.toJson(value);
			var md5hash=md5.createHash(json || '');
			localStorageService.set(key + md5_key_suffix,md5hash);
		};
		
		var getKeyValue = function(key){
			if (key==='undefined' || key==null) return;
			var value = localStorageService.get(key);
			var md5hash=localStorageService.get(key + md5_key_suffix);
			var md5hashActual;
			if (value!=null){
				var json = angular.toJson(value);
				md5hashActual=md5.createHash(json || '');
			}
			else{
				md5hashActual=null;
			}
			if (md5hash!=md5hashActual){
				value =null;
				$log.error('StorageService.notification.error: md5 mismatch for key '+key);
				$rootScope.$broadcast('StorageService.notification.error', 'MD5_MISMATCH');
			}
			return value;
		};
		
		var removeKey = function(key){
			localStorageService.remove(key + md5_key_suffix);
			return localStorageService.remove(key);
		}
		
		var removeAll = function(){			
			return localStorageService.clearAll();
		}
		
		var getMd5hash = function(text){
			return md5.createHash(text || '');
		}

		return {
			  isSupported: localStorageService.isSupported,
			  getStorageType: localStorageService.getStorageType,
			  set: setKeyValue,
			  add: setKeyValue, //DEPRECATED
			  get: getKeyValue,
			  keys: localStorageService.keys,
			  remove: removeKey,
			  clearAll: removeAll,
			  bind: localStorageService.bind,
			  deriveKey: localStorageService.deriveKey,
			  cookie: {
				set: localStorageService.cookie.set,
				add: localStorageService.cookie.add, //DEPRECATED
				get: localStorageService.cookie.get,
				remove: localStorageService.cookie.remove,
				clearAll: localStorageService.cookie.clearAll
			  },
			  md5hash: getMd5hash
		};
	}];
	
});

}).call(this);
