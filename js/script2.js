var x= prompt("enter numbers to add to stop enter 0: ");
var sum=0;

while(x!=0){
   sum+=Number(x);
   x= prompt("enter numbers to add to stop enter 0: ");
}

document.getElementById("sum").innerHTML=sum;