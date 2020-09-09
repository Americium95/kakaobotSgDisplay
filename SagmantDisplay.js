const scriptName = "SgDis";

var A= 1207959553;
var B= 100663297;
var C= 536870913;
var D= 1228931073;
var E= 1564475393;
var F= 1895825409;
var G= -1056964607;
//임계값

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

str=msg.split(":");

/*디스플레이 수동생성 코드*/
if(str.length>3&&msg[0]=="​"){
str[0]=str[0].split("​")[1];
let input=parseInt(str[0]);
let num_0=input%10;
let num_1=Math.floor(input%100/10);
let num_2=Math.floor(input%1000/100);
let num_3=Math.floor(input%10000/1000);
let x=parseInt(str[1]);
let y=parseInt(str[2]);
let w=parseInt(str[3]);
let n=parseInt(str[4]);

Display1=BildSagmant(num_3,0,x,y,w,n,replier);
Display2=BildSagmant(num_2,0,x,y,w,n,replier);
Display3=BildSagmant(num_1,0,x,y,w,n,replier);
Display4=BildSagmant(num_0,0,x,y,w,n,replier);
ViewDisplay(DisplayAdd(DisplayAdd(DisplayAdd(Display1,Display2),Display3),Display4),x,y,replier);
}

/*디지털 시계 생성*/

if(msg=="#시간#")
{
num_3= Math.floor(new Date().getHours()/10);
num_2= Math.floor(new Date().getHours()%10);
num_1= Math.floor(new Date().getMinutes()/10);
num_0= Math.floor(new Date().getMinutes()%10);
x=5;
y=7;
w=1;

Display1=BildSagmant(num_3,0,x,y,w,1,replier);
Display2=BildSagmant(num_2,0,x,y,w,1,replier);
Display3=BildSagmant(num_1,0,x,y,w,1,replier);
Display4=BildSagmant(num_0,0,x,y,w,1,replier);
ViewDisplay(DisplayAdd(DisplayAdd(DisplayAdd(Display1,Display2),Display3),Display4),x,y,replier);

}
}

/*한자리 세그먼트 빌더
*BildSagmant(숫자,간격,너비,높이,두께,세그먼트 간격 제거용[0~너비],세션);
*/
BildSagmant=(num,o,x,y,w,n,replier)=>{
let Display;

/*모든값 왼쪽시프트*/
let la=(A<<num);
let lb=(B<<num);
let lc=(C<<num);
let ld=(D<<num);
let le=(E<<num);
let lf=(F<<num);
let lg=(G<<num);

/*세그먼트 디스플레이를 나타낼 배열생성*/
Display=new Array(y);
for(var h=0;h<y;h++)
{
Display[h]=new Array(x);
for(var l=0;l<x;l++)
{
Display[h][l]="□";
//replier.replay(h);
}
}

/*아래서부터 드로우콜*/

for(var l=w-n+o;l<x-w+n-o;l++)
{
/*a*/
if(la>0)
for(var h=o;h<w;h++)
{
Display[h][l]="■";
}
/*d*/
if(ld>0)
for(var h=y-o-w;h<y-o;h++)
{
Display[h][l]="■";

}
/*g*/
if(lg>0)
for(var h=Math.floor(y/2);h<Math.floor(y/2)+w;h++)
{
Display[h][l]="■";

}
}


for(var l=x-o-w;l<x-o;l++)
{
/*b*/
if(lb>0)
for(var h=w-n+o;h<Math.ceil(y/2)-w;h++)
{
Display[h][l]="■";

}

/*c*/
if(lc>0)
for(var h=Math.floor(y/2)+w-n;h<y-o-w+n;h++)
{
Display[h][l]="■";

}
}

for(var l=o;l<o+w;l++)
{
/*e*/
if(lf>0)
for(var h=w-n+o;h<Math.ceil(y/2)-w;h++)
{
Display[h][l]="■"; 
}

/f*/
if(le>0)
for(var h=Math.floor(y/2)+w-n;h<y-o-w;h++)
{
Display[h][l]="■"; 
}
}
return Display;
}


/*디스플레이 병합*/
DisplayAdd=(dis_0,dis_1)=>{
let y=Math.max(dis_0.length,dis_1.length);
let x=dis_0[0].length+dis_1[0].length;

let Display=new Array(y);

for(var h=0;h<y;h++)
{
Display[h]=new Array(x);
for(var l=0;l<x;l++)
{ 
if(l+1>dis_0[0].length)
Display[h][l]=dis_1[h][l-dis_0[h].length];
else
Display[h][l]=dis_0[h][l];
}
}

return Display;
}


/*디스플레이를 문자열로 변환하여 출력함*/
ViewDisplay=(Display,num,num_1,replier)=>{
let View="​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​";

for(var h=0;h<Display.length;h++)
{
for(var l=0;l<Display[h].length;l++)
{
if((l%num)==0)
View+=" ";
View+=Display[h][l];
}
View+="\n";
}
if(num>3||num_1>5)
View="​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​"+View;
replier.reply(View);
}

