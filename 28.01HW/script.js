if(localStorage.getItem("saqtau")){
    document.getElementById("matin").value = localStorage.getItem("saqtau");
}

function saveText(){
    const matin = document.getElementById("matin").value;
    localStorage.setItem("saqtau", matin);
    alert("Mtin saqtaldi!");
}

function clearText(){
    localStorage.removeItem("saqtau");
    document.getElementById("matin").value = "";
    alert('Matin oshirildi!');
}




// // malimetterdi saktau
      // localStorage.setItem('name', 'Ayjan');

      // // malimetterdi oku
      // const name = localStorage.getItem('name');
      // console.log(name); // Ayjan

      // //Malimaetterdi oshuru
      // localStorage.removeItem('name');

      // // barlik malimetterdi tazalau
      // localStorage.clear();