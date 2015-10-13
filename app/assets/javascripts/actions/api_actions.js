ApiActions = {
  receiveAll: function (benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  addBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_ADDED,
      bench: bench
    });
  }
};
