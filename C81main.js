canvas=document.getElementById("mycanvas");
color="lime";
//Workable Code
canvas.getContext("2d").beginpath();
canvas.getContext("2d").strokestyle=color;
canvas.getContext("2d").lineWidth=2;
canvas.getContext("2d").arc(2000,2000,40,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
console.log(color);
mouse_x=e.clientX-canvas.ofsetLeft;
mouse_y=e.clientY-canvas.ofsetTop;
console.log("X="+mouse_x + ",Y= "+mouse_y);
circle(mouse_x,mouse_y);
}