// Your JS goes here
for (var i = 1; i < 64; i++) {
    const div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    const squareColor = (i % 2 === 0) ? (div.style.backgroundColor = "red") : (div.style.backgroundColor = "black"); 
    document.body.append(div);
}