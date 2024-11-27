function JupTaksan(){
    let arr = [];
    while(true){
        let num = prompt("Tek jup san engiziniz: ");
        if(num % 2 !== 0){
            break;
        }
        arr.push(Number(num));
    }
    console.log("jup" + arr);
}
JupTaksan();