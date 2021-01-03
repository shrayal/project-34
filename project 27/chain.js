class Chain{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.2,
          length: 350
      }
      this.pointB=pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }

  display(){
      if(this.sling.bodyA){
      var posA = this.sling.bodyA.position;
      var posB = this.pointB;
      strokeWeight(7);
      stroke("#fff")
      line(posA.x, posA.y, posB.x, posB.y);
  }
}
}
