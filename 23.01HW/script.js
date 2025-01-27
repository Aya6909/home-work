async function asyncSearch(){
    
    try {
        const response = await fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films");
        const data = await response.json();
    
        const izdeuBTN = document.getElementById("izdeuBTN");
        const Name = document.getElementById("name");
        const text = document.getElementById("text");
        const image = document.getElementById("image");
        const result = document.getElementById("result");
    
        izdeuBTN.addEventListener("click", (el) => {
          el.preventDefault();
          const search = document.getElementById("search").value;
          result.style.display = "block";
          data.forEach((data) => {
            if (data.filmName.includes(search)) {
              Name.textContent = `Film ati: ${data.filmName}`;
              text.textContent =`Turi: ${data.Genre}`;
              image.src = data.image;
            }
          });
        });
      }catch(error){
        console.log("Error:", error);
        Name.textContent = "Error";
      }
  }
    
    asyncSearch();