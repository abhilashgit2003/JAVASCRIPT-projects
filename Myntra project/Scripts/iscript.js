const items = 
      {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        }
      }
let itemsContainerElement = document.querySelector('.items-container');
itemsContainerElement.innerHTML=`
<div class="item-container">
      <img class="item-image" src="${items.image}" alt="item image">
      <div class="rating">
          ${items.rating.stars} ⭐ | ${items.rating.count}
      </div>
      <div class="company-name">${items.company}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${items.current_price}</span>
          <span class="original-price">Rs ${items.original_price}</span>
          <span class="discount">(${items.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" >Add to Bag</button>
    </div>`;