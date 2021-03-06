var searchLight = {x:100,y:100,radius:80,vx:Math.random()*5+10,vy:Math.random()*5+10};
var rot = 0;
window.onload=function(){
var myCanvas = document.getElementById("canvas0")
var ctx = myCanvas.getContext("2d")
/*hsla(Hue,Saturation,Lightness,alpha)
色调、饱和度、亮度、透明度*/
// 画布填充颜色
ctx.fillStyle="#ADCBF0"
// 绘制一个填充的长方形  x y 宽 高
ctx.fillRect(0,0,1000,2000);
// 绘制一个矩形的边框  x y 宽 高
/*ctx.strokeRect(0,0,1000,2000);*/

ctx.beginPath();//划线开始
ctx.moveTo(20,30);//画线开始的坐标
ctx.lineTo(90,30);//线条画到哪里的坐标
ctx.moveTo(55,15);
ctx.lineTo(55,70);
ctx.moveTo(55,30);
ctx.lineTo(20,70);
ctx.moveTo(55,30);
ctx.lineTo(90,70);
ctx.moveTo(35,70);
ctx.lineTo(75,70);
ctx.moveTo(75,70);
ctx.lineTo(55,85);
ctx.moveTo(55,85);
ctx.lineTo(55,120);
ctx.moveTo(55,120);
ctx.lineTo(45,110);
ctx.moveTo(20,90);
ctx.lineTo(90,90);
ctx.strokeStyle="#7A668B";
ctx.stroke();//执行 描边


// 雯
ctx.beginPath();//划线开始
ctx.moveTo(200,15);
ctx.lineTo(250,15);
ctx.moveTo(190,20);
ctx.lineTo(190,50);
ctx.moveTo(190,20);
ctx.lineTo(260,20);
ctx.moveTo(260,20);
ctx.lineTo(260,50);
ctx.moveTo(225,15);
ctx.lineTo(225,50);
ctx.moveTo(195,30);
ctx.lineTo(215,30);
ctx.moveTo(195,40);
ctx.lineTo(215,40);
ctx.moveTo(235,30);
ctx.lineTo(255,30);
ctx.moveTo(235,40);
ctx.lineTo(255,40);
ctx.moveTo(215,60);
ctx.lineTo(235,60);
ctx.moveTo(190,70);
ctx.lineTo(260,70);
ctx.moveTo(245,70);
ctx.lineTo(190,120);
ctx.moveTo(205,70);
ctx.lineTo(260,120);
ctx.strokeStyle="#E27746";
ctx.lineWidth=1;//线条粗细
ctx.stroke();//执行 描边
// ctx.fill();填充
// ctx.closePath();自动闭合

// ctx.clearRect()清空画面

	var W = 1000,H = 500,ctx2,angle = -5,len = 10,count = 850;
	var canvas2 = document.getElementById('canvas2')
	ctx2 = canvas2.getContext('2d')
	ctx2.strokeStyle = "rgba(255,255,250,0.3)";

	var run = setInterval(draw, 100);

	function draw(){
		ctx2.clearRect(0,0,W,H)//先清除  再重复画线
		for (var i = 0; i <= count; i++) {
			xiayu(Math.random()*W,Math.random()*H,angle,len)//Math.random() 0~1随机数
		}
	}
	function xiayu(x,y){
		ctx2.beginPath();
		ctx2.moveTo(x,y);
		ctx2.lineTo(x+angle,y+len);
		ctx2.lineWidth=0.5;
		ctx2.stroke();
	}

	// 第三个图形
	var canvas3 = document.getElementById('canvas3')
	canvas3.width = 600;
	canvas3.height = 600;
	ctx3 = canvas3.getContext('2d');

	ctx3.beginPath();
	ctx3.rect(0,0,600,600);
	pathRect(ctx3, 50,50,500,150);
	pathTriangle(ctx3, 200,250,50,500,350,500);
	ctx3.arc(450,400,100,0,Math.PI*2,true)/*true 顺时针/逆时针*/
	ctx3.closePath();
	
	ctx3.fillStyle = '#058';
	ctx3.shadowColor = 'gray';
	ctx3.shadowOffsetX = 10;
	ctx3.shadowOffsetY = 10;
	ctx3.shadowBlur = 10;
	ctx3.fill()


	// 4
	var canvas4 = document.getElementById('canvas4')
	ctx4 = canvas4.getContext('2d')
	ctx4.lineWidth=30;
	
	for (var i = 0; i < 255; i++) {
		ctx4.beginPath()
		ctx4.moveTo(100+i-1,100);
		ctx4.lineTo(100+i,100);
		ctx4.strokeStyle='rgb('+i+','+i+','+i+')'
		ctx4.stroke()
	}
		// 5

	// 构建函数
	var LineChart = function(ctx5){
		this.ctx5 = ctx5||document.getElementById('canvas5').getContext('2d')
		// 画布的大小
		this.canvas5Height = this.ctx5.canvas.height 
		this.canvas5Width = this.ctx5.canvas.width 
		// 网格的大小
		this.gridSize = 10;
		//坐标系的间距
		this.space = 20;
		// 坐标原点
		this.x0 = this.space;
		this.y0 = this.canvas5Height-this.space;
		// 箭头的大小
		this.arrowSize = 10;
		// 绘制点
		this.dottedSize = 10;
		// 点的坐标 和数据有关系
	}
	// 行为方法
	LineChart.prototype.init = function(data){
		this.drawGrid();
		this.drawAxis();
		this.drawDotted(data);
	}
	// 绘制网格
	LineChart.prototype.drawGrid = function(){
		var xLineTotal = Math.floor(this.canvas5Height / this.gridSize)
		var yLineTotal = Math.floor(this.canvas5Width / this.gridSize)
		for (var i = 0; i < xLineTotal; i++) {
			this.ctx5.beginPath()
			this.ctx5.moveTo(0,i*this.gridSize-0.5);
			this.ctx5.lineTo(this.canvas5Width,i*this.gridSize-0.5);
			this.ctx5.strokeStyle='#eee'
			this.ctx5.stroke()
		}
		for (var i = 0; i < yLineTotal; i++) {
			this.ctx5.beginPath()
			this.ctx5.moveTo(i*this.gridSize-0.5,0);
			this.ctx5.lineTo(i*this.gridSize-0.5,this.canvas5Height);
			this.ctx5.strokeStyle='#eee'
			this.ctx5.stroke()
		}

	}
	// 绘制坐标系
	LineChart.prototype.drawAxis = function(data){
		// 绘制x轴
		
		this.ctx5.beginPath()
		this.ctx5.moveTo(this.x0-0.5,this.y0-0.5);
		this.ctx5.lineTo(this.canvas5Width-this.space-0.5,this.y0-0.5);
		this.ctx5.strokeStyle="#000";
		this.ctx5.stroke();
		// 箭头
		this.ctx5.beginPath()
		this.ctx5.moveTo(this.canvas5Width-this.space-this.arrowSize,this.y0+this.arrowSize/2);
		this.ctx5.lineTo(this.canvas5Width-this.space-this.arrowSize,this.y0-this.arrowSize/2);
		this.ctx5.lineTo(this.canvas5Width-this.space-0.5,this.y0);
		this.ctx5.fill()
		this.ctx5.strokeStyle="#000";
		this.ctx5.stroke();

		// 绘制y轴
		this.ctx5.beginPath()
		this.ctx5.moveTo(this.x0-0.5,this.y0-0.5);
		this.ctx5.lineTo(this.space-0.5,this.space-0.5);
		this.ctx5.strokeStyle="#000";
		this.ctx5.stroke();
		// 箭头
		this.ctx5.beginPath()
		this.ctx5.moveTo(this.space+this.arrowSize/2,this.space+this.arrowSize);
		this.ctx5.lineTo(this.space-this.arrowSize/2,this.space+this.arrowSize);
		this.ctx5.lineTo(this.space,this.space);
		this.ctx5.fill()
		this.ctx5.strokeStyle="#000";
		this.ctx5.stroke();
	}
	// 绘制点
	LineChart.prototype.drawDotted = function(data){
		var that = this;
		//记录当前坐标
		var prevCanvasX = 0;
		var prevCanvasY = 0;
		data.forEach(function(item,i){
			// x的坐标=原点的坐标+数据的坐标
			var canvasX = that.x0 + item.x
			var canvasY = that.y0 - item.y
			// 绘制
			that.ctx5.beginPath()
			that.ctx5.moveTo(canvasX -that.dottedSize/2,canvasY -that.dottedSize/2)
			that.ctx5.lineTo(canvasX +that.dottedSize/2,canvasY -that.dottedSize/2)
			that.ctx5.lineTo(canvasX +that.dottedSize/2,canvasY +that.dottedSize/2)
			that.ctx5.lineTo(canvasX -that.dottedSize/2,canvasY +that.dottedSize/2)
			that.ctx5.closePath()
			that.ctx5.fill()
			// 点的连线 
			if (i==0) {
				that.ctx5.beginPath();
				that.ctx5.moveTo(that.x0,that.y0)
				that.ctx5.lineTo(canvasX,canvasY)
				that.ctx5.stroke();

			}else{
				// 上一个点
				that.ctx5.beginPath();
				that.ctx5.moveTo(prevCanvasX,prevCanvasY)
				that.ctx5.lineTo(canvasX,canvasY)
				that.ctx5.stroke();

			}
			// 记录下当前坐标
			prevCanvasX = canvasX
			prevCanvasY = canvasY
			
		})
	}
	// 初始化
	var data =[{x:100,y:120},{x:200,y:160},{x:300,y:240},{x:400,y:320},{x:500,y:80},
	];
	var lineChart = new LineChart();
	lineChart.init(data)

	// canvas6
	var ctx6 = document.getElementById('canvas6').getContext('2d')
	var linearGradient = ctx6.createLinearGradient(0,0,300,300)
	linearGradient.addColorStop(0,'white');
	linearGradient.addColorStop(0.25,'yellow');
	linearGradient.addColorStop(0.5,'green');
	linearGradient.addColorStop(0.75,'blue');
	linearGradient.addColorStop(1,'black');

	ctx6.fillStyle = linearGradient;

	ctx6.fillRect(0,0,300,300)

	// white ---->black
	
	// canvas10
	var ctx10 = document.getElementById('canvas10').getContext('2d')
	var linearGradient2 = ctx10.createRadialGradient(150,150,50,150,150,250)
	linearGradient2.addColorStop(0,'white');
	linearGradient2.addColorStop(0.25,'yellow');
	linearGradient2.addColorStop(0.5,'green');
	linearGradient2.addColorStop(0.75,'blue');
	linearGradient2.addColorStop(1,'black');

	ctx10.fillStyle = linearGradient2;

	ctx10.fillRect(0,0,300,300)

	/*canvas7*/
	
	var ctx7 = document.getElementById('canvas7').getContext('2d');
	for (var i = 0; i < tangram.length; i++) {
		draw2(tangram[i],ctx7)
	}
	

	/*canvas8*/
	var ctx8 = document.getElementById('canvas8').getContext('2d');
	ctx8.lineWidth = 5
	ctx8.strokeStyle = '#005588'
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(25+i*60,60,20,0,2*Math.PI*(i+1)/10)
		ctx8.closePath()
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(25+i*60,120,20,0,2*Math.PI*(i+1)/10)
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(25+i*60,180,20,0,2*Math.PI*(i+1)/10,true)
		ctx8.closePath()
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(25+i*60,240,20,0,2*Math.PI*(i+1)/10,true)
		ctx8.stroke()
	}
	ctx8.fillStyle='#005588'
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(25+i*60,300,20,0,2*Math.PI*(i+1)/10,true)
		ctx8.closePath()
		ctx8.fill()
	}	

	/*canvas9*/
	var canvas9 = document.getElementById('canvas9');
	canvas9.width=1200;
	canvas9.height= 800;
	var ctx9 = canvas9.getContext('2d');

	// 采用渐变色背景
	var skyStyle = ctx6.createLinearGradient(0,0,0,canvas9.height );
	skyStyle.addColorStop(0,'black');
	skyStyle.addColorStop(1.0,'#035');
	ctx9.fillStyle = skyStyle;

	ctx9.fillRect(0,0,canvas9.width,canvas9.height);
	for (var i = 0; i < 200; i++) {
		var r = Math.random()*5+5;
		var x = Math.random()*canvas9.width;
		var y = Math.random()*canvas9.height*0.65;
		var a = Math.random()*360;
		drowStar(ctx9,x,y,r,a);
	}
	// 添加一个月亮
	fillMoon(ctx9,2,900,100,80,30);
	// 添加一片绿地
	drawLand(ctx9);
	// 11
	var canvas11 = document.getElementById('canvas11');
	canvas11.width=540;
	canvas11.height=540;
	var ctx11 = canvas11.getContext('2d')
	//drawRoundRect(ctx11,50,25,500,300,50)
	fillRoundRect(ctx11,20,20,500,500,10,'#bbada0');
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			fillRoundRect(ctx11,40+i*120,40+j*120,100,100,6,'#ccc0b3');
		}
	}
	// 12
	var canvas12 = document.getElementById('canvas12');
	canvas12.width=800;
	canvas12.height=800;
	var ctx12 = canvas12.getContext('2d');

	ctx12.font = 'bold 40px Arial';
	/*one*/
	ctx12.fillStyle = '#058';
	ctx12.fillText('这片村头最酷的崽！',40,100);

	/*two*/
	ctx12.lineWidth = 1;
	ctx12.strokeStyle = '#058';
	ctx12.strokeText('这片村头最酷的崽！',40,200);

	/*three*/
	ctx12.fillText('这片村头最酷的崽！',40,300,100);
	ctx12.strokeText('这片村头最酷的崽！',40,400,100);

	/*four*/
	var linearGradient = ctx12.createLinearGradient(0,0,800,0)
	linearGradient.addColorStop(0,'white');
	linearGradient.addColorStop(0.25,'yellow');
	linearGradient.addColorStop(0.5,'green');
	linearGradient.addColorStop(0.75,'blue');
	linearGradient.addColorStop(1,'black');

	ctx12.fillStyle = linearGradient;
	ctx12.fillText('这片村头最酷的崽！',40,500);

	/*five*/
	var backgroundImage = new Image();
	backgroundImage.src = 'images/3.jpg';
	backgroundImage.onload = function(){
		var pattern = ctx12.createPattern(backgroundImage,"repeat");
		ctx12.fillStyle = pattern;
		ctx12.font = 'bold 100px Arial';
		ctx12.fillText('Canvas！',40,600);
		//ctx12.strokeText('Canvas！',40,600);
	}

	/*13*/
	var canvas13 = document.getElementById('canvas13');
	canvas13.width=500;
	canvas13.height=500;
	var ctx13 = canvas13.getContext('2d');
	setInterval(function(){
		drawLight(ctx13);
		update(canvas13.width,canvas13.height);
	},40)
}
// 七巧板参数
var tangram = [
	{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:'#caff67'},
	{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:'#67becf'},
	{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:'#ef3d61'},
	{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:'#f9f51a'},
	{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:'#a594c0'},
	{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:'#fa8ecc'},
	{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:'#f6ca29'},
]
// 划线七巧板
function draw2(piece,cxt){
	cxt.beginPath();
	cxt.moveTo(piece.p[0].x,piece.p[0].y)
	for (var i = 0; i < piece.p.length; i++) {
		cxt.lineTo(piece.p[i].x,piece.p[i].y)
	}
	cxt.closePath();
	cxt.fillStyle=piece.color;
	cxt.fill()
	cxt.strokeStyle="black";
	cxt.lineWidth = 3;
	cxt.stroke()//执行
}
/*r小半径 R大半径 x y 偏移量 rot旋转角度*/
function drowStar(cxt,x,y,R,rot){
	cxt.save();

	cxt.translate(x,y);
	cxt.rotate(rot/180*Math.PI);
	cxt.scale(R,R);

	starPath(cxt);
	/*绘制出在 (x,y) 大小为R，旋转为rot的五角星*/
	cxt.fillStyle='#fb3';
	// cxt.strokeStyle='#fb5';
	// cxt.lineWidth = 3;
	// cxt.lineJoin = 'round';

	cxt.fill();//填充
	//cxt.stroke();//描边
	cxt.restore()
}
// 五角星
function starPath(cxt){
	cxt.beginPath();
	/*循环五次*/
	for (var i = 0; i < 5; i++) {
		cxt.lineTo(Math.cos((18+i*72)/180 * Math.PI), -Math.sin((18+i*72)/180 * Math.PI));
		cxt.lineTo(Math.cos((54+i*72)/180 * Math.PI)*0.5, -Math.sin((54+i*72)/180 * Math.PI)*0.5);
	} 
	cxt.closePath();
}



function fillRoundRect( cxt,x,y,width,height,radius,/*option*/fillColor ){
	if (2*radius > width || 2*radius > height) {
		return;
	}
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,width,height,radius);
	cxt.fillStyle = fillColor||"black";
	cxt.fill();
	cxt.restore();		
}
function strokeRoundRect( cxt,x,y,width,height,radius,/*option*/lineWidth,/*option*/strokeColor ){
	if (2*radius > width || 2*radius > height) {
		return;
	}
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,width,height,radius);
	cxt.lineWidth = lineWidth||1;
	cxt.strokeStyle = strokeColor||"black";
	cxt.stroke();
	cxt.restore();		
}
/*绘制矩形*/
function drawRoundRect( cxt,x,y,width,height,radius ){
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,width,height,radius);
	cxt.strokeStyle="black";
	cxt.stroke();
	cxt.restore();		
}
function pathRoundRect(cxt,width,height,radius){
	cxt.beginPath();

	cxt.arc(width-radius,height-radius,radius,0,Math.PI/2);
	cxt.lineTo(radius,height);
	cxt.arc(radius,height-radius,radius,Math.PI/2,Math.PI);
	cxt.lineTo(0,radius);
	cxt.arc(radius,radius,radius,Math.PI,Math.PI*3/2);
	cxt.lineTo(width-radius,0);
	cxt.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);

	cxt.closePath();
}
/*绘制弯月*/
function fillMoon(cxt,d,x,y,R,rot,/*optional*/fillColor){
	cxt.save();
	cxt.translate(x,y);
	cxt.rotate(rot*Math.PI/180);
	cxt.scale(R,R);
	PathMoon(cxt,d);
	cxt.fillStyle = fillColor||'#fd5';
	cxt.fill();
	cxt.restore();
}
function PathMoon(cxt,d){
	cxt.beginPath();
	cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
	cxt.moveTo(0,-1);
	cxt.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
	cxt.closePath();
}
/*坐标距离公式*/
function dis(x1,y1,x2,y2){
	return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}
/*绘制绿地*/
function drawLand(cxt){
	cxt.save();
	cxt.beginPath();
	cxt.moveTo(0,600);
	cxt.bezierCurveTo(540,400,660,800,1200,600);
	cxt.lineTo(1200,800);
	cxt.lineTo(0,800);
	cxt.closePath();

	var landStyle = cxt.createLinearGradient(0,800,0,0);
	landStyle.addColorStop(0.0,'#030');
	landStyle.addColorStop(1.0,'#580');
	cxt.fillStyle = landStyle;
	cxt.fill();
	cxt.restore();
}
function drawLight(cxt){
	var canvas = cxt.canvas;
	cxt.clearRect(0,0,canvas.width,canvas.height);
	cxt.save();

	cxt.beginPath();
	cxt.fillStyle = 'black';
	cxt.fillRect(0,0,canvas.width,canvas.height);

	cxt.save();
	cxt.translate(searchLight.x,searchLight.y);
	cxt.rotate(rot/180*Math.PI);
	cxt.scale(searchLight.radius,searchLight.radius)
	starPath(cxt);
	/*cxt.arc(searchLight.x,searchLight.y,searchLight.radius,0,Math.PI*2);*/
	cxt.fillStyle = '#fff';
	cxt.fill();
	cxt.restore();
	cxt.clip();

	cxt.font = 'bold 150px Arial';
	cxt.textAlign = 'center';
	cxt.textBaseline = 'middle';
	cxt.fillStyle = '#058';
	cxt.fillText('CANVAS!',canvas.width/2,canvas.height/4);
	cxt.fillText('CANVAS!',canvas.width/2,canvas.height/2);
	cxt.fillText('CANVAS!',canvas.width/2,canvas.height*3/4);

	cxt.restore();
}
function update(w,h){
	rot += 1;
	searchLight.x += searchLight.vx;
	searchLight.y += searchLight.vy;

	if (searchLight.x - searchLight.radius <= 0 ) {
		searchLight.vx = -searchLight.vx;
		searchLight.x = searchLight.radius;
	}

	if (searchLight.x + searchLight.radius >= w ) {
		searchLight.vx = -searchLight.vx;
		searchLight.x = w- searchLight.radius;
	}

	if (searchLight.y - searchLight.radius <= 0 ) {
		searchLight.vy = -searchLight.vy;
		searchLight.y = searchLight.radius;
	}

	if (searchLight.y + searchLight.radius >= h ) {
		searchLight.vy = -searchLight.vy;
		searchLight.y = h- searchLight.radius;
	}
	
}
/*矩形 三角形*/
function pathRect(ctx,x,y,w,h){
	ctx.moveTo(x,y);
	ctx.lineTo(x,y+h);
	ctx.lineTo(x+w,y+h);
	ctx.lineTo(x+w,y);
	ctx.lineTo(x,y);
}
function pathTriangle(ctx,x1,y1,x2,y2,x3,y3){
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.lineTo(x1,y1); 
}