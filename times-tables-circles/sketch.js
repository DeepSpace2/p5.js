var num_of_points = 2000;
var r = 300;
var points = [];
var times_slider;

function P(x, y){
    this.x = x;
    this.y = y;
}

function createPoints(){
    stroke(255);
    translate(width / 2, height / 2);

    var angle = TWO_PI / num_of_points;
    
    for (var i = 0 ; i < num_of_points ; i++){;
        var x = r * cos(angle * i * TWO_PI);
        var y = r * sin(angle * i * TWO_PI);

        var p = new P(x, y);
        points[i] = p;
    }
}

function createLines(){
    var times = times_slider.value();

    fill(255)
    noStroke()
    text('"Times": ' + times.toString(), 5, 20)

    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(.25);

    for (var i = 0 ; i < num_of_points ; i++){
        result = i * times;
        if (result < num_of_points){
            current_point = points[i];
            dest_point = points[result];
            line(current_point.x, current_point.y, dest_point.x, dest_point.y);
        }    
    }
}

function setup() {
    var canvas = createCanvas(1000, 800);
    canvas.parent("canvas-container");
    background(0);
    times_slider = createSlider(2, 6, 2, 1);
    times_slider.parent("slider-container");
    times_slider.id("slider");
    createPoints();
}

function draw() {
    background(0);
    createLines();
}