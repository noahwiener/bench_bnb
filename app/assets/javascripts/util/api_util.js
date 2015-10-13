ApiUtils = {
  fetchBenches: function(filters){
    $.ajax({
      url: "api/benches",
      data: {filters: filters},
      success: function (benches){
        ApiActions.receiveAll(benches);
      }
    });
  },

  createBench: function(bench){
    $.ajax({
      url: "api/benches",
      type: "POST",
      data: bench,
      success: function (){
        ApiActions.addBench(bench);
      }
    });
  },

};
