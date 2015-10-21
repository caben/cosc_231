// hey this a comment
if(window.userAgent.match('Safari')
var re1 = 'sdf',
    re2 = "sdf",
    re3 = `sdf`,
    re4 = /sdf/,
    item = '',
    didMatch = false;

console.out(re1 == re2);

for(; !didMatch;){
  item = prompt('Enter a string', '');
  didMatch = re4.test(item);
  console.log(item.match(re3));
}

function validatePhone(phoneNum) {
  var phRe = /^\d{3}?\d{7}$/;
  console.log(phRe.exec(phoneNum));
  
  if(phRe.test(phoneNum)) {
    document.body.style.backgroundColor = "green";
  }else {
    document.body.style.backgroundColor = "red";
  }
}
