// Your JS goes here


function colorTiles() {
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            let r = Math.floor(Math.random() * 255);
            console.log(r);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            const div = document.createElement('div');
            div.style.height = '11.1%';
            div.style.width = '11.1%';
            div.style.float = 'left';
            div.style.paddingBottom = '11.1%';
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
                } else {
                    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                }
            } else {
                if (j % 2 === 0) {
                    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                } else {
                    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                }
            }
            document.body.appendChild(div);
        }
    }
    console.log('I did it!');
}

colorTiles();
