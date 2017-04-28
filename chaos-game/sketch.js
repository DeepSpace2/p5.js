var numOfPoints = 3;
var numOfIterations = 5000;
var iterCounter = 0;
var lastPoint = undefined;
var vertices = [];
var iterationsP;


// "triangle" or "square" for now. later let the user choose
var shape = "triangle";

function createVertices(){
    fill(0,0, 255);
    if (shape == "triangle"){
        vertices[0] = new Vertex(createVector(width / 2, 100));
        vertices[0].show();
        vertices[1] = new Vertex(createVector(width - 100, height - 100));
        vertices[1].show();
        vertices[2] = new Vertex(createVector(100, height - 100));
        vertices[2].show();
    }

    else if (shape == "square"){
        vertices[0] = new Vertex(createVector(100, 100));
        vertices[0].show();
        vertices[1] = new Vertex(createVector(width - 100, height - 100));
        vertices[1].show();
        vertices[2] = new Vertex(createVector(100, height - 100));
        vertices[2].show();
        vertices[3] = new Vertex(createVector(width - 100, 100));
        vertices[3].show();
    }
    fill(255);
    
}

var randVertIdx
var prevRandVertIdx

function setup() {
    createCanvas(800, 800);
    background(51);
    createVertices();
    iterationsP = createP();
}

function draw() {
    if (iterCounter < numOfIterations){
        //if no "first point" yet, create it
        if (!lastPoint){
            fill(0, 255, 0);
            lastPoint = new Vertex(createVector(random(width), random(height)));
            lastPoint.show();
            fill(255);
        }


        // if shape is square, making sure not to choose same vertex twice in a row
        randVertIdx = floor(random(0, vertices.length))
        if (prevRandVertIdx == undefined){
            prevRandVertIdx = randVertIdx;
        }
        else{
            if (shape == "square"){
                while (randVertIdx == prevRandVertIdx){
                   randVertIdx = floor(random(0, vertices.length));
                }
            }
            prevRandVertIdx = randVertIdx;
        }


        var randVertex = vertices[randVertIdx];

        // finding correct location for new point between lastPoint and correct vertex
        var midPointPos =  createVector((randVertex.pos.x + lastPoint.pos.x) * 0.5 , 
                                        (randVertex.pos.y + lastPoint.pos.y) * 0.5);
        
        // drawing new point
        lastPoint = new Vertex(midPointPos);
        lastPoint.show();

    }

    else{
        noLoop();
    }

    iterationsP.html("Iteration " + iterCounter.toString() + " out of " + numOfIterations.toString());
    iterCounter += 1;
}