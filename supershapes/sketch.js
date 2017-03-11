function setup() {
    createCanvas(480, 480);
    createP('A') ; a_slider = createSlider(1, 200, 100, 1);
    createP('B') ; b_slider = createSlider(1, 200, 100, 1);
    createP('M') ; m_slider = createSlider(0, 20, 10, 1);
    createP('N1') ; n1_slider = createSlider(0, 20, 10, 1);
    createP('N2') ; n2_slider = createSlider(0, 20, 10, 1);
    createP('N3') ; n3_slider = createSlider(0, 20, 10, 1);
    
}

function draw() {
    background(51);

    a = a_slider.value()
    b = b_slider.value()
    m = m_slider.value()
    n1 = n1_slider.value()
    n2 = n2_slider.value()
    n3 = n3_slider.value()

    text('a: ' + a, 30, 30, 40, 40)
    text('b: ' + b, 30, 40, 40, 50)
    text('m: ' + m, 30, 50, 40, 60)
    text('n1: ' + n1, 30, 60, 40, 70)
    text('n2: ' + n2, 30, 70, 40, 80)
    text('n3: ' + n3, 30, 80, 40, 90)

    for (var theta = 0 ; theta < TWO_PI ; theta += 0.01){
        r = get_r(theta, a, b, m, n1, n2, n3)
        var x = r * cos(theta);
        var y = r * sin(theta);
        fill(255);
        noStroke();
        push();
        translate(width / 2, height / 2);
        ellipse(x, y, 2); 
        pop();
    }
}

function get_r(theta, a, b, m, n1, n2, n3){
    return pow(pow(abs(cos(m * theta / 4) / a), n2) +
    pow(abs(sin(m * theta / 4) / b), n3), -1/n1)
}