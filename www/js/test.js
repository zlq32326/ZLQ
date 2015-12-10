var show;
show = function(){
  var date, now;
  date = new Date();
  now = date.getSeconds();
  document.getElementById('nowDiv').innerHTML = now;
  /*(document.getElementById 'bg').setAttribute 'bgcolor', 'rgb(0, ' + now / 60 + ', 0)'*/
  setTimeout('show()', 1000);
};