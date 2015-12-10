var i$, ref$, len$, i, qrcode, makeCode;
for (i$ = 0, len$ = (ref$ = [0, 1, 2, 3, 4, 5, 6, 7, 8]).length; i$ < len$; ++i$) {
  i = ref$[i$];
  qrcode = new QRCode(document.getElementById('qrcode' + i));
  makeCode = fn$;
  makeCode();
}
function fn$(){
  var elText;
  elText = document.getElementById('text' + i);
  qrcode.makeCode(elText.value);
}