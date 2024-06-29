document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const cardTemplate = document.getElementById('card-template');
  
    fetch('dataBedroom.json') // Replace 'your_data.json' with your JSON file URL
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const cardClone = cardTemplate.content.cloneNode(true);
          const card = cardClone.querySelector('.relative');
          
          // Populate data into the card template
          card.querySelector('img').src = item.image;
          card.querySelector('img').alt = item.name;
          if (item.newLaunch) {
            card.querySelector('.bg-red-500').classList.remove('hidden');
          }
          card.querySelector('h3').textContent = item.name;
          card.querySelector('.text-xl.font-bold.text-red-600').textContent = `₹${item.price}/mo`;
          card.querySelector('.text-gray-500.line-through').textContent = `₹${item.oldPrice}/mo`;
          card.querySelector('.text-green-600.font-medium').textContent = `-${item.discount}% OFF`;
          
          // Append the populated card to the card container
          cardContainer.appendChild(cardClone);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  