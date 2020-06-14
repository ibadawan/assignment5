var prcofitme1=650;
var prcofitem2=100;
var qtyofitem1=3;
var qtyofitem2=7;
var shipping=100;

var totalofitem1=prcofitme1*qtyofitem1;
var totalofitem2=prcofitem2*qtyofitem2;

var total=totalofitem1+totalofitem2+shipping;

document.write("price of item 1 is " + prcofitme1 + "<br>");
document.write("quantity of item 1 is " + qtyofitem1  + "<br>");
document.write("price of item 2 is " + prcofitem2  + "<br>");
document.write("quantity of item 2 is " + qtyofitem2  + "<br>");
document.write("shipping charges " + shipping  + "<br>" + "<br>" );
document.write("total cost of your order is " + total  + "<br>");
