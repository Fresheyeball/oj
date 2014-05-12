// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var ajax, config, optsFromUrl;
    config = {};
    config.onSuccess = function(opts, data, url) {
      var response;
      response = {};
      OJ.extend(response, data, true);
      opts.onSuccess(response);
      OJ.console.table([
        {
          Webservice: opts.ajaxOpts.url,
          StartTime: opts.startTime,
          EndTime: new Date()
        }
      ]);
    };
    config.onError = function(xmlHttpRequest, textStatus, param1, opts) {
      if (opts == null) {
        opts = OJ.object();
      }
      if (textStatus !== 'abort') {
        OJ.console.table([
          {
            Webservice: opts.ajaxOpts.url,
            data: opts.ajaxOpts.data,
            Failed: textStatus,
            state: xmlHttpRequest.state(),
            status: xmlHttpRequest.status,
            statusText: xmlHttpRequest.statusText,
            readyState: xmlHttpRequest.readyState,
            responseText: xmlHttpRequest.responseText
          }
        ]);
        opts.onError(textStatus);
      }
    };
    optsFromUrl = function(opts) {
      var url;
      if (OJ.is.string(opts)) {
        url = opts;
        opts = OJ.object();
        opts.add('ajaxOpts', OJ.object());
        opts.ajaxOpts.add('url', url);
      }
      return opts;
    };
    config.execRequest = function(verb, opts) {
      var defaults, getPromiseFromAjax, promise;
      if (verb == null) {
        verb = 'GET';
      }
      defaults = {
        ajaxOpts: {
          url: '',
          data: {},
          type: verb,
          url: defaults.url,
          xhrFields: {
            withCredentials: true
          },
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          data: defaults.data,
          watchGlobal: false !== watchGlobal
        },
        onSuccess: _.noop,
        onError: _.noop,
        onComplete: _.noop,
        overrideError: false,
        watchGlobal: true,
        useCache: false
      };
      opts = optsFromUrl(opts);
      OJ.extend(defaults, opts);
      defaults.startTime = new Date();
      if (false === OJ.is.nullOrEmpty(defaults.ajaxOpts.data)) {
        if (verb === 'GET') {
          defaults.ajaxOpts.data = OJ.params(defaults.ajaxOpts.data);
        } else {
          defaults.ajaxOpts.data = OJ.serialize(defaults.ajaxOpts.data);
        }
      }
      getPromiseFromAjax = function(watchGlobal) {
        var ret;
        ret = $.ajax(defaults.ajaxOpts);
        ret.done(function(data, textStatus, jqXHR) {
          return config.onSuccess(defaults, data);
        });
        ret.fail(function(jqXHR, textStatus, errorText) {
          return config.onError(jqXHR, textStatus, errorText, defaults);
        });
        ret.always(function(xmlHttpRequest, textStatus) {
          return defaults.onComplete(xmlHttpRequest, textStatus);
        });
        return OJ.async.ajaxPromise(ret);
      };
      promise = void 0;
      if (true === defaults.useCache) {

      } else {
        promise = getPromiseFromAjax(defaults.watchGlobal);
      }
      return promise;
    };
    ajax = {};
    ajax.post = function(opts) {
      return config.execRequest('POST', opts);
    };
    ajax.get = function(opts) {
      return config.execRequest('GET', opts);
    };
    ajax["delete"] = function(opts) {
      return config.execRequest('DELETE', opts);
    };
    ajax.put = function(opts) {
      return config.execRequest('PUT', opts);
    };
    OJ.async.register('ajax', ajax);
    return;
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=ajax.map
