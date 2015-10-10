ApiUtils = {
  fetchBenches: function(bounds){
    $.ajax({
      url: "api/benches",
      data: {bounds: bounds},
      success: function (benches){
        ApiActions.receiveAll(benches);
      }
    });
  }
};
