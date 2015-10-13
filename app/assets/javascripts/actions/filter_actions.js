FilterActions = {
  receiveBounds: function (bounds){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_RECEIVED,
      bounds: bounds
    });
  },

  receiveSeats: function (seats){
    AppDispatcher.dispatch({
      actionType: BenchConstants.SEATS_RECEIVED,
      seats: seats
    });
  }
};
