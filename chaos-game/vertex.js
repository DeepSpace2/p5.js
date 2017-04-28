function Vertex(pos){
    if (pos == undefined){
        this.x = random(width - 10);
        this.y = random(height - 10);
        this.pos = createVector(this.x, this.y);
    }

    else{
        this.pos = pos;
    }

    this.show = function(){
        noStroke();
        ellipse(this.pos.x, this.pos.y, 4)
    }

}