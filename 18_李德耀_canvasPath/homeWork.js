function doFirst(){
	var x = document.getElementById('canvas');//與<canvas>物件產生關聯
	var canvas = x.getContext("2d");//產生2d繪圖環境，參用為canvas
	
	var x = 150 ;//八邊形邊長
	var Side = (2+Math.sqrt(2))*x/(2*Math.sqrt(2));//正三角形邊長
	//var sqrPlusX = x+sqrX;
	//var sqrPlusXX = 2*x+sqrX;
	//var XPlusSqr2 = x+2*sqrX;
	
	
	canvas.translate(200,200);
	canvas.moveTo(-x/2,-Side);
	canvas.lineTo(0,-Side+3/4*x);//
	canvas.lineTo(x/2,-Side);
	canvas.lineTo(x/3,-x/3);//正方
	canvas.lineTo(Side,-x/2);
	canvas.lineTo(Side-3/4*x,0);//
	canvas.lineTo(Side,x/2);
	canvas.lineTo(x/3,x/3);//正方
	canvas.lineTo(x/2,Side);
	canvas.lineTo(0,Side-3/4*x);//
	canvas.lineTo(-x/2,Side);
	canvas.lineTo(-x/3,x/3);//正方
	canvas.lineTo(-Side,x/2);
	canvas.lineTo(-Side+3/4*x,0);//
	canvas.lineTo(-Side,-x/2);
	canvas.lineTo(-x/3,-x/3);//正方
	canvas.lineTo(-x/2,-Side);	
	canvas.stroke();
	
	
	
	
	//beginPath();
	//canvas.moveTo(0,0);//相對座標起點
	//canvas.lineTo(50,0);//相對座標終點
	//canvas.lineTo(sqrPlusX,sqrX);
	//canvas.lineTo(sqrPlusX,sqrPlusX);
	//canvas.lineTo(x,XPlusSqr2);
	//canvas.lineTo(0,XPlusSqr2);
	//canvas.lineTo(-sqrX,sqrPlusX);
	//canvas.lineTo(-sqrX,sqrX);
	//canvas.closePath();
	//canvas.stroke();
	
	//canvas.beginPath();
	//canvas.translate((x/2),(2+Math.sqrt(2))*x/(2*Math.sqrt(2)));
	//canvas.arc(0,0,x,0,2*Math.PI,true);
	//canvas.stroke();
	
		
	
	
	
	
	
	
	//canvas.stroke();
	
	
	
}//end of doFirst



window.addEventListener('load',doFirst,false);