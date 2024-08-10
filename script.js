let data = [50,60,90,55,33,75];

function removeEl(){

    let data = [50,60,90,55,33,75];
let position = document.getElementById("position").value;

position = parseInt(position)


    for(let i=position;i<data.length-1;i++){
    data[i]=data[i+1];
}

data.length = data.length-1;
console.warn(data);
}

console.warn(data);

