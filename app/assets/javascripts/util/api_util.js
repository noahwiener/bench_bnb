ApiUtils = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      success: function (benches){
        ApiActions.receiveAll(benches);
      }
    });
  }
};
