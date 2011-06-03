// oauthWrapper - oauth wrapper for android and ios
// SOURCE: https://github.com/appcelerator/jab11/blob/b669acc31e4ceab8f78b20b3af3869f269cfe0b8/Resources/utility.js
// LICENSE: http://www.apache.org/licenses/LICENSE-2.0

var oauthWrapper;
/**
 * Note that we are going to use two different OAuth adapters. One is working on iOS, and the other
 * is working on Android.
 */
if (Ti.Android) {
    oauthWrapper = {
        settings : {},
        store: {},
        setup: function(settings) {
            this.settings = settings;
            this.store.adapter = new TitaniumOAuth(settings.key, settings.secret);
        },
        isAuthorized: function() {
            return this.store.adapter.loggedIn();
        },
        deAuthorize: function() {
            this.store.adapter.logout();
        },
        authorize: function(callback) {
            this.store.adapter.requestToken(callback);
        },

        sendToTwitter: function(options) {
            this.store.adapter.request({
                method: 'POST',
                action: 'https://api.twitter.com/1/statuses/update.json',
                parameters: [
                    ['status', options.message]
                ]
            }, options.success, options.error);
        }
    };
}
else {
    oauthWrapper = {
        settings : {},
        store: {},
        setup: function(settings) {
            this.settings = settings;
            this.store.adapter = new OAuthAdapter(
                    settings.secret,
                    settings.key,
                    'HMAC-SHA1');
            this.store.adapter.loadAccessToken('twitter');
        },
        isAuthorized: function() {
            return this.store.adapter.isAuthorized();
        },
        deAuthorize: function() {
            this.store.adapter.clearAccessToken('twitter');
        },
        authorize: function(callback) {
            var adapter = this.store.adapter;
            if (!adapter.isAuthorized()) {
                var receivePin = function() {
                    adapter.getAccessToken('https://api.twitter.com/oauth/access_token');
                    adapter.saveAccessToken('twitter');
                    callback && callback({ delay: 2000 });
                };
                var token = adapter.getRequestToken('https://api.twitter.com/oauth/request_token');
                adapter.showAuthorizeUI('https://api.twitter.com/oauth/authorize?' + token, receivePin);
            }
            else {
                callback && callback({ delay: 0 });
            }
        },
        /**
         * Sends an oauth request to Twitter to post an update.
         * @param options Should include a message parameter, and two function callback parameters, success and error.
         */
        sendToTwitter: function(options) {
            var adapter = this.store.adapter;
            this.authorize(function(evt) {
                setTimeout(function() {
                    adapter.send({
                        url: 'https://api.twitter.com/1/statuses/update.json',
                        parameters: [
                            ['status', options.message]
                        ],
                        title: 'Twitter',
                        onSuccess: options.success,
                        onError: options.error
                    });
                }, evt.delay);
            });
        }
    };
}