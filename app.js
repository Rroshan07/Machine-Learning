function getmonthValue() {
  var uimonth = document.getElementsByName("uimonth");
  for(var i in uimonth) {
    if(uimonth[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getbrcodeValue() {
  var uibrcode = document.getElementsByName("uibrcode");
  for(var i in uibrcode) {
    if(uibrcode[i].checked) {
      var value=uibrcode[i].value
        // return parseInt(i)+1;
      return value;
    }
  }
  return -1; // Invalid Value
}
function onClickedEstimateqty() {
  console.log("Estimate qty button clicked");
  var item_code = document.getElementById("uiitem_code");
  var brcode = getbrcodeValue();
  var month = getmonthValue();
  var estqty = document.getElementById("uiqty");
  
  console.log('brcode='+brcode);
  console.log('item_code='+item_code);
  console.log('month='+month);
  // var url = "http://127.0.0.1:5000/predict_qty"; 
  var url = "http://192.168.43.205:5000/predict_qty"; 
  $.post(url, {
      item_code: parseFloat(item_code.value),
      brcode: brcode,
      month: month,
  },function(data, status) {
    // alert('response recived'+JSON.stringify(data));
      console.log(data.qty);
      estqty.innerHTML = "<h2>" + data.qty.toString() ;
      console.log(status);
  });
}
window.onload = onPageLoad;