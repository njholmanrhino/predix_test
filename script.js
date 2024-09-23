fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('tbody');
    
    data.forEach(item => {
      const row = `<tr>
                    <td>${item.Player}</td>
                    <td>${item.Points}</td>
                  </tr>`;
      tableBody.innerHTML += row;
    });
  });
