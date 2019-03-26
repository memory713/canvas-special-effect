var canvas0 = document.getElementById("canvas0")
var ctx0 = canvas0.getContext("2d")

var canvas1 = document.getElementById("canvas1")
var ctx1 = canvas1.getContext("2d")

var offCanvas = document.getElementById("offCanvas")
var offContext = offCanvas.getContext("2d")

var canvas2 = document.getElementById("canvas2")
var context2 = canvas2.getContext("2d")

var slider = document.getElementById("scale-range")
var image = new Image()
var isMouseDown = false
var scale
window.onload = function(){
	canvas0.width = 1264;
	canvas0.height = 633;

	var scale0 = slider.value;

	image.src = 'images/img-lg.jpg'
	image.onload = function(){
		offCanvas.width = image.width
        offCanvas.height = image.height
        scale = offCanvas.width / canvas0.width

        ctx0.drawImage( image , 0 , 0 , canvas0.width , canvas0.height )
        offContext.drawImage( image , 0 , 0 )

		/*图片加载完毕之后 加入画布*/
		slider.onmousemove = function(){
			scale0 = slider.value
			drawImageByScale(scale0);
		}
	}
	/*水印canvas*/
	canvas1.width = 900;
	canvas1.height = 100;

	ctx1.font = 'bold 50px Arial';
	ctx1.lineWidth = '1';
	ctx1.fillStyle = 'rgba(255,255,255,0.5)';
	ctx1.textBaseLine = 'middle';
	ctx1.fillText('this is a pig',20,50);


	canvas2.width = 800
    canvas2.height = 800

    var imageData = context2.createImageData( canvas2.width , canvas2.height )
    var pixelData = imageData.data

    for( var i = 0 ; i < canvas2.height ; i ++ )
        for( var j = 0 ; j < canvas2.width ; j ++ ){

            var p = i*canvas2.width+j

            pixelData[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255)
            pixelData[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255)
            pixelData[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255)
            pixelData[4*p+3] = 255
        }

    context2.putImageData( imageData , 0 , 0 , 0 , 0 , canvas2.width , canvas2.height )



}
function drawImageByScale(scale){
	var imageWidth = 1264*scale
	var imageHeight = 633*scale

	var dx = canvas0.width/2 - imageWidth / 2
	var dy = canvas0.height/2 - imageHeight / 2
	/*清空画布*/
	ctx0.clearRect(0,0,canvas0.width,canvas0.height)

	ctx0.drawImage( image,dx,dy,imageWidth,imageHeight )
	// 水印绘制
	ctx0.drawImage( canvas1,canvas0.width-canvas1.width,canvas0.height-canvas1.height )
}
function windowToCanvas(x,y){
	var bbox = canvas0.getBoundingClientRect();
	return { x:x-bbox.left , y:y-bbox.top}
}
canvas0.onmousedown = function(e){
	e.preventDefault();
	isMouseDown = true
	var point = windowToCanvas(e.clientX,e.clientY);
	console.log(point.x,point.y)
	
	drawCanvasWithMagnifier( true , point )
}
canvas0.onmousemove = function(e){
	e.preventDefault();
	if (isMouseDown == true) {
		var point = windowToCanvas(e.clientX,e.clientY);
		console.log(point.x,point.y)
		drawCanvasWithMagnifier( true , point )
	}
	
}
canvas0.onmouseup = function(e){
	e.preventDefault();
	isMouseDown = false
	drawCanvasWithMagnifier( false )
}
canvas0.onmouseout = function(e){
	e.preventDefault();
	isMouseDown = false
	drawCanvasWithMagnifier( false )
}
function drawCanvasWithMagnifier( isShowMagnifier , point ){

    ctx0.clearRect( 0 , 0 , canvas0.width , canvas0.height )
    ctx0.drawImage( image , 0 , 0 , canvas0.width , canvas0.height )
    if( isShowMagnifier == true ){
        drawMagnifier( point )
    }
}
function drawMagnifier( point ){

    var mr = 200

    var imageLG_cx = point.x * scale
    var imageLG_cy = point.y * scale

    var sx = imageLG_cx - mr
    var sy = imageLG_cy - mr

    var dx = point.x - mr
    var dy = point.y - mr

    ctx0.save()

    ctx0.lineWidth = 10.0
    ctx0.strokeStyle = "#069"

    ctx0.beginPath()
    ctx0.arc( point.x , point.y , mr , 0 , Math.PI*2 , false )
    ctx0.stroke()
    ctx0.clip()
    ctx0.drawImage( offCanvas , sx , sy , 2*mr , 2*mr , dx , dy , 2*mr , 2*mr )
    ctx0.restore()
}


