$(document).ready(function () {
    class shape {
        constructor(name, color) {
            this.div = document.createElement("div");
            this.div.className = name;
            $(this.div).css({
                'backgroundColor': color,
                'position': "absolute",
                'left': `${Math.random() * 400}px`,
                'top': `${Math.random() * 400 + 210}px`
            });
            $(this.div).appendTo(".box");
        }
        describe () {
            console.log(this);
            document.getElementById("shape").placeholder = this.name;
            document.getElementById("width").placeholder = this.div.style.width;
            document.getElementById("height").placeholder = this.div.style.height;
            document.getElementById("radius").placeholder = this.div.style.borderRadius;
            document.getElementById("area").placeholder = this.area;
            document.getElementById("perimeter").placeholder = this.perimeter;
        }
    }
    class circle extends shape {
        constructor(name, color, radius) {
            super(name, color);
            $(this.div).css({
                "width": 2 * radius,
                "height": 2 * radius,
                "border-radius": "50%"
            });
        }
        describe () {
            console.log(this);
            document.getElementById("shape").placeholder = this.name;
            document.getElementById("width").placeholder = this.div.style.width;
            document.getElementById("height").placeholder = this.div.style.height;
            document.getElementById("radius").placeholder = this.div.style.borderRadius;
            document.getElementById("area").placeholder = this.area;
            document.getElementById("perimeter").placeholder = this.perimeter;
        }
    }
    class square extends shape {
        constructor(name, color, side) {
            super(name, color);
            $(this.div).css({
                "width": `${side}px`,
                "height": `${side}px`
            });
        }
    }
    class rectangle extends shape {
        constructor(name, color, height, width) {
            super(name, color);
            $(this.div).css({
                "width": `${width}px`,
                "height": `${height}px`
            });
        }
        describe () {
            console.log(this);
            document.getElementById("shape").placeholder = this.name;
            document.getElementById("width").placeholder = this.div.style.width;
            document.getElementById("height").placeholder = this.div.style.height;
            document.getElementById("radius").placeholder = this.div.style.borderRadius;
            document.getElementById("area").placeholder = this.area;
            document.getElementById("perimeter").placeholder = this.perimeter;
        }
    }
    class triangle extends shape {
        constructor(name, color, side) {
            super(name, "transparent");
            $(this.div).css({
                'width': '10px',
                'height': '10px',
                'border-style': 'solid',
                'border-width': '100px',
                'border-color': `transparent ${color} ${color} transparent`,
                "color": "initial"
            });
        }
        describe () {
            document.getElementById("shape").placeholder = this.name;
            document.getElementById("width").placeholder = this.div.style.width;
            document.getElementById("height").placeholder = this.div.style.height;
            document.getElementById("radius").placeholder = this.div.style.borderRadius;
            document.getElementById("area").placeholder = this.area;
            document.getElementById("perimeter").placeholder = this.perimeter;
        }
    }

    let arrOfShapes=[]
    $(`#addrec`).click(function () {
        arrOfShapes.push(new rectangle("shape rectangle", "green", $('#l').val(), $('#b').val()));
        $(".shape").last().click(describe(),arrOfShapes.pop())
    })
    $(`#addc`).click(function () {
        arrOfShapes.push(new circle("shape circle", "red", $('#r').val()));
        $(".shape").last().click(describe())
    })
    $(`#addtri`).click(function () {
        arrOfShapes.push(new triangle("shape triangle", "blue", $('#s').val()));
        $(".shape").last().click(describe())
    })
    $(`#addsq`).click(function () {
        arrOfShapes.push(new square("shape square", "black", $('#a').val()));
        $(".shape").last().click(describe())
    })
    console.log(arrOfShapes)

});
