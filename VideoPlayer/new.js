function main(){
	/*---------------------global variables---------------------*/
	video = document.getElementById('video');
	playButton = document.getElementById('playButton');
	stopButton = document.getElementById('stopButton');
	upButton = document.getElementById('upButton');
	downButton = document.getElementById('downButton');
	muteButton = document.getElementById('muteButton');
	volumMsg = document.getElementById('volumMsg');
	timeBarFrame = document.getElementById('timeBarFrame');
	timeBar = document.getElementById('timeBar');
	timeMsg = document.getElementById('timeMsg');
	barSize = 563;//記得要檢查Css中timeBarFrame的width是否相同
	
	/*---------------------EventListener---------------------*/
	
	playButton.addEventListener('click',playOrPause,false);//按下play叫playOrPause函數
	stopButton.addEventListener('click',stop,false);//按下stopButton叫stop函數
	video.addEventListener('click',playOrPause,false);//按下video叫playOrPause函數
	timeBarFrame.addEventListener('click',clickBar,false);//按下timeBarFrame叫clickBar函數
	upButton.addEventListener('click',vulomeUp,false);
	downButton.addEventListener('click',vulomeDown,false);
	muteButton.addEventListener('click',vulomeMute,false);
	
	/*---------------------設定顯示播放時間的初值---------------------*/
	var currentSec = parseInt(video.currentTime)%60;
	var currentMin = parseInt(video.currentTime/60);
	var currentHour = parseInt(video.currentTime/360);	
	sec = parseInt(video.duration)%60;
	min = parseInt(video.duration/60);
	hour = parseInt(video.duration/360);
	timeMsg.value =currentHour+':'+currentMin+':'+currentSec+' / '+hour+':'+min+':'+sec;
	
	/*---------------------設定音量初值---------------------*/
	video.volume=0.5;
	volumMsg.value ='音量 : '+(video.volume*10);
	
	
}//end of main

function playOrPause(){
	if(!video.paused && !video.ended){
		video.pause();
		playButton.innerHTML = 'Play';
		playButton.style.backgroundColor = '#C0C0C0';		
	}else{
		video.play();
		playButton.innerHTML = 'Pause';
		playButton.style.backgroundColor = '#f0f0f0';
		updateBar = setInterval(updatebar,100);
		updateTime = setInterval(updateTime,100);
	}//end of if
}//end of playOrPause() play按鍵的動作

function updatebar(){
	if(video.ended){
		timeBar.style.width='0px';
		video.load();
		playButton.innerHTML = 'Play';
		playButton.style.backgroundColor = '#f0f0f0';
	}else{
		var barUnit = video.currentTime*(barSize/video.duration);
		timeBar.style.width= barUnit+'px';
	}//end of if
}//end of updateBar

function updateTime(){
	if(video.ended){		
	}else{		
		var currentSec = parseInt(video.currentTime)%60;
		var currentMin = parseInt(video.currentTime/60);
		var currentHour = parseInt(video.currentTime/360);
		timeMsg.value =currentHour+':'+currentMin+':'+currentSec+' / '+hour+':'+min+':'+sec;
	}//end of if
}//end of updateTime()



function stop(){
	video.load();
	playButton.innerHTML = 'Play';
	playButton.style.backgroundColor = '#f0f0f0';
}//end of stop()

function clickBar(click){
	if(!video.paused && !video.ended){
		var barClickPosition = click.clientX-timeBar.offsetLeft;
		var movieTime = barClickPosition*video.duration/barSize;
		video.currentTime = movieTime;
		timeBar.style.width= barClickPosition+'px';
	}//end of else
}//end of clickBar()

function vulomeUp(){
	try{
		if(video.volume<=1.01){
			video.volume += 0.1001;
			volumMsg.value ='音量 : '+parseInt(video.volume*10);
		}else{
			throw 'volOverException';
		}//end of if
	}catch(volOverException){
		volumMsg.value ='Max volume';
	}//end of try catch	
}//end of vulomnUp()

function vulomeDown(){
	try{
		if(video.volume>=0.0){
			video.volume -= 0.0999998888888888;
			volumMsg.value ='音量 : '+parseInt(video.volume*10);
		}else{
			throw 'volLessException';
		}//end of if
	}catch(volLessException){
		volumMsg.value ='Min volume';
	}//end of try catch
}//end of vulomeDown()

function vulomeMute(){	
	if(video.muted==false){		
		currentVol = video.volume;
		video.muted=true;
		volumMsg.value ='Mute';
		//volumMsg.value ='音量 : '+parseInt(currentVol*10);
	}else{
		video.muted=false;
		video.volume=currentVol;
		volumMsg.value ='音量 : '+parseInt(video.volume*10);		
	}//end of mute set	
}//end of vulomeMute()

window.addEventListener('load',main,false);