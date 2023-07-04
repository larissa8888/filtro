function preload(){

}

function setup(){
    canvas= createCanvas (640, 480);
    canvas.position(150, 150);
    video= createCapture (VIDEO);
    video.hide();

    tint_color="";
    
}

function draw(){
    image(video, 230,150, 220, 200);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(255,0 ,0);
    circle(150, 100 ,80);
    circle(150, 400 ,80);
    circle(500, 100 ,80);
    circle(500, 400 ,80);

    fill(0, 128, 0);
    stroke(0,128 ,0);
    rect(190, 80 ,270, 50 );
    rect(190, 370 ,270, 50 );
    rect(110, 110 ,50, 240 );
    rect(450, 110 ,50, 240 );

}

function take_snapshot(){
    save("fotos con filtros.png");
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
    
}