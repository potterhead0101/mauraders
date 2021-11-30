var canvas = new fabric.Canvas('myCanvas');
block_image_width = 350;
block_image_height = 430;

block_y = 1;
block_x = 1;

var block_image_object = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
}

if (keyPressed == '106') {
    block_x = 200;

    new_image("j.jpg");
    console.log(r);
}
if (keyPressed == '115') {
    block_x = 200;
    new_image('download(7).jfif');
    console.log(g);

    if (keyPressed == '115') {
        block_x = 350;
        new_image('lupin.jfif');
        console.log(y);
    }
    if (keyPressed == '80') {
        block_x = 600;
        new_image('pr.png');
        console.log(p);
    }
    if (keyPressed == '66') {
        block_x = 700;
        new_image('br.png');
        console.log(b);

    }
}