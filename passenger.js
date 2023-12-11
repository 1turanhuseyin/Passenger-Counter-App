let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function clean() {
    count = 0;
    document.getElementById("count-el").innerHTML = count;
    save();
}

function save() {
    const para = document.createElement('p');
    const node = document.createTextNode(`${count} - `);
    para.appendChild(node);
    const element = document.getElementById('div1');
    element.appendChild(para);
}