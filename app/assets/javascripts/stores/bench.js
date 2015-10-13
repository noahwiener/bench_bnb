(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _benches = [];

  var resetBenches = function(benches){
    _benches = benches;
  };

  var addBench = function(bench){
    _benches.push(bench);
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function (){
      return _benches.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }else if (payload.actionType === BenchConstants.BENCH_ADDED){
        addBench(payload.bench);
        BenchStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
