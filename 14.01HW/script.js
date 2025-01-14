const apiURL = 'https://jsonplaceholder.typicode.com/users';

fetch(apiURL)
    .then(response => {
        if (!response.ok) {
          throw new Error('Қате орын алды!');
        }
        return response.json();
      })
      .then(data => {
        const usersContainer = document.getElementById('users'); 
        
        data.forEach(user => {
          const userBlock = document.createElement('div');
          userBlock.className = 'user-block'; 
          userBlock.innerHTML = `
            <p>Қолданушы аты: ${user.name}</p>
            <p>Email: ${user.email}</p>`
          ;
          usersContainer.appendChild(userBlock); 
        });
      })
      .catch(error => {
        console.error('Қате:', error);
        document.body.innerHTML = `
          <p>Қате орын алды!</p>`
          ;
      });