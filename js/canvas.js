window.onload=function(){
var myCanvas = document.getElementById("canvas0")
var ctx = myCanvas.getContext("2d")
// 画布填充颜色
ctx.fillStyle="#ADCBF0"
// 绘制一个填充的长方形  x y 宽 高
ctx.fillRect(0,0,1000,2000);

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
	ctx3 = canvas3.getContext('2d')
	// 大
	ctx3.moveTo(100,100);
	ctx3.lineTo(300,100);
	ctx3.lineTo(300,300);
	ctx3.lineTo(100,300);
	ctx3.closePath();
// 小  
	ctx3.moveTo(150,150);
	ctx3.lineTo(150,250);
	ctx3.lineTo(250,250);
	ctx3.lineTo(250,150);
	ctx3.closePath();
	// 非零环绕规则：看某区域是否被填充  从该区域拉一条直线  看直线与线相交的轨迹  若为顺时针 +1 反则-1  相加得到总和  0不填充  非零填充
	ctx3.fill()
	ctx3.stroke()

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
	var linearGradient = ctx6.createLinearGradient(100,100,500,100)
	linearGradient.addColorStop(0,'pink');
	linearGradient.addColorStop(0.5,'red');
	linearGradient.addColorStop(1,'blue');

	ctx6.fillStyle = linearGradient;

	ctx6.fillRect(10,10,500,100)
	// pink ---->blue
	
	/*canvas7*/
	var tangram = [
		{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:'#caff67'},
		{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:'#67becf'},
		{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:'#ef3d61'},
		{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:'#f9f51a'},
		{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:'#a594c0'},
		{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:'#fa8ecc'},
		{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:'#f6ca29'},
	]
	var ctx7 = document.getElementById('canvas7').getContext('2d');
	for (var i = 0; i < tangram.length; i++) {
		draw2(tangram[i],ctx7)
	}
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

	/*canvas8*/
	var ctx8 = document.getElementById('canvas8').getContext('2d');
	ctx8.lineWidth = 5
	ctx8.strokeStyle = '#005588'
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(50+i*100,60,40,0,2*Math.PI*(i+1)/10)
		ctx8.closePath()
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(50+i*100,180,40,0,2*Math.PI*(i+1)/10)
		
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(50+i*100,300,40,0,2*Math.PI*(i+1)/10,true)
		ctx8.closePath()
		ctx8.stroke()
	}
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(50+i*100,420,40,0,2*Math.PI*(i+1)/10,true)
		ctx8.stroke()
	}
	ctx8.fillStyle='#005588'
	for (var i = 0; i < 10; i++) {
		ctx8.beginPath()
		ctx8.arc(50+i*100,540,40,0,2*Math.PI*(i+1)/10,true)
		ctx8.closePath()
		ctx8.fill()
	}	
	
}