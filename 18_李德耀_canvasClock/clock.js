

	
function doFirst(){	
	var clock = setInterval(function(){ updatClock() }, 20);	
}//end of doFirst

function updatClock(){
	/*----------時間變數----------*/
		date = new Date();
		/*分鐘*/
		var minute = date.getMinutes();		
		/*秒*/
		var second = date.getSeconds();		
		/*小時*/
		var	hour = date.getHours()*60+date.getMinutes();
		var hourShow = date.getHours()
		
	
	/*----------canvas----------*/
	/*畫時鐘用的圖*/
	var center = 400 ;//時鐘中心座標
	var begin = 230;//時間標註點(起點)
	var end = 270;//時間標註點(終點)
	
	var x = document.getElementById('canvas');//與<canvas>物件產生關聯
	var canvas = x.getContext("2d");//產生2d繪圖環境，參用為canvas	
	canvas.clearRect(0,0,800,1000);
	canvas.translate(center,center);
	
	/*電子鐘*/	
	canvas.font = '30pt Calibri';
	canvas.fillStyle = '#8998FF';
	canvas.fillText(hourShow+' : '+minute+' : '+second,-85,200);
	canvas.stroke();
	
	
	
	/*時針*/	
	canvas.save();
	canvas.lineWidth="8";
	canvas.strokeStyle="black";
	canvas.rotate(Math.PI*2*hour/720);
	canvas.moveTo(0,8);
	canvas.lineTo(0,-150);	
	canvas.closePath();
	canvas.stroke();
	canvas.restore();
	
	
	/*分針*/	
	canvas.beginPath();
	canvas.save();
	canvas.rotate(Math.PI*2*minute/60);
	canvas.lineWidth="4";
	canvas.strokeStyle="black";	
	canvas.moveTo(0,8);
	canvas.lineTo(0,-230);
	canvas.closePath();
	canvas.stroke();
	canvas.restore();
	
	/*秒針*/
	canvas.beginPath();
	canvas.save();
	
	canvas.rotate(Math.PI*2*second/60);
	canvas.lineWidth="2";
	canvas.strokeStyle="red";
	canvas.arc(0,-200,10,0,2*Math.PI,false);
	canvas.moveTo(0,30);
	canvas.lineTo(0,-260);	
	canvas.stroke();
	
	
	canvas.beginPath();		
	canvas.closePath();
	canvas.restore();
	
	
	
	/*時中外框*/	
	canvas.beginPath();
	canvas.strokeStyle='#A9B5FF';
	canvas.lineWidth="9";
	canvas.arc(0,0,300,0,2*Math.PI,false);	
	canvas.stroke();
	canvas.closePath();
	
	/*時間標註*/
	canvas.strokeStyle='#DCDCDC';
	canvas.lineWidth="9";
	/*六點*/
	canvas.beginPath();
	canvas.moveTo(0,begin);
	canvas.lineTo(0,end);
	canvas.stroke();
	/*十二點*/
	canvas.beginPath();
	canvas.moveTo(0,-begin);
	canvas.lineTo(0,-end);
	canvas.stroke();
	/*三點*/
	canvas.beginPath();
	canvas.moveTo(begin,0);
	canvas.lineTo(end,0);
	canvas.stroke();
	/*九點*/
	canvas.beginPath();
	canvas.moveTo(-begin,0);
	canvas.lineTo(-end,0);
	canvas.stroke();
	
	
	
	
	/*把座標移回(0,0)*/
	canvas.translate(-center,-center);
	
	
	
		
}//end of updatClock()







window.addEventListener('load',doFirst,false);
