img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}



function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detedt(img, gotResult);
}

function gotResult(errror, results) {
     if (errror) {
        console.log(error);
     }
      console.log(results);
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(img, video, 0, 0, 380, 380);

    if(status !="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++) {
        
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[1].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
    

    fill("#2293C7");
    text("Bedroom", 45, 75);
    noFill();
    stroke("#2293C7");
    rect(30, 60, 450, 350);

    fill("#2293C7");
    text("TV and AC", 320, 120);
    noFill();
    stroke("#2293C7");
    rect(300, 90, 270, 320);

    
    fill("#2293C7");
    text("Desk", 45, 75);
    noFill();
    stroke("#2293C7");
    rect(30, 60, 450, 350);

    fill("#2293C7");
    text("Bottles", 320, 120);
    noFill();
    stroke("#2293C7");
    rect(300, 90, 270, 320);

    
    fill("#2293C7");
    text("Fruit Basket", 45, 75);
    noFill();
    stroke("#2293C7");
    rect(30, 60, 450, 350);
}