(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _filters = {bounds:
                  {
                    northEast: { lat: "", lng: "" } ,
                    southWest: { lat: "", lng: "" }
                  },
                  minSeats: 0,
                  maxSeats: 1000};


  var resetBounds = function(bounds){
    _filters.bounds = bounds;
  };

  var resetSeats = function(seats){
    _filters.minSeats = seats.min;
    _filters.maxSeats = seats.max;
  };


  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {

    filters: function (){
      return _filters;
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BOUNDS_RECEIVED){
        resetBounds(payload.bounds);
        FilterParamsStore.emit(CHANGE_EVENT);
      } else if (payload.actionType === BenchConstants.SEATS_RECEIVED){
        resetSeats(payload.seats);
        FilterParamsStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
