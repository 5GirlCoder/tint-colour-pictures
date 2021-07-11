function setup()
{
    canvas = createCanvas(300, 250);
    canvas.position(50, 260);

    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";
}

function draw()
{
    image(video, 0, 0, 300, 250);
    tint(tint_colour);
}

function apply()
{
    tint_colour = document.getElementById("Colour_Input").value;
}

function take_snapshot()
{
    save('tint_picture.png');
}