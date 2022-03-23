class Estilingue{

constructor(bodyA, pointB){

var options ={

bodyA: bodyA,
pointB: pointB,
stiffness:0.07,
length:10,
//restitution:0.9

}
this.sling1 = loadImage("sprites/sling1.png");
this.sling2 = loadImage("sprites/sling2.png");
this.sling3 = loadImage("sprites/sling3.png");
this.pointB = pointB
this.estilingue = Constraint.create(options)
World.add(world, this.estilingue)

}
attach(body){

this.estilingue.bodyA = body

}
fly(){

this.estilingue.bodyA = null

}

display(){

image(this.sling1,200,45);
image(this.sling2,170,45);

if(this.estilingue.bodyA){
var pointA = this.estilingue.bodyA.position;
var pointB = this.pointB;

push()
strokeWeight(10);
stroke("#431F0C");
line(pointA.x-20, pointA.y,pointB.x-10,pointB.y);
line(pointA.x-30,pointA.y,pointB.x+30,pointB.y-3); 
image(this.sling3,pointA.x-30,pointA.y-10,15,30);
pop()
}

}

}