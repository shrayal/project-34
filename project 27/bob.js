class Bob
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:0.2,
			density:10

	
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x,bobpos.y);
			strokeWeight(4);
			fill("black")
			ellipseMode(RADIUS);
			ellipse(0,0,this.r);
			pop()
			
	}

}