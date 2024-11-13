document.getElementById("quote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const location = document.getElementById("pickup-location").value;
    const duration = document.getElementById("rental-duration").value;

    alert(`Quote for rental at ${location} for ${duration} requested.`);
});
// JavaScript for auto-scrolling effect (Optional)
document.querySelectorAll('.category-images').forEach(function(category) {
    setInterval(function() {
        category.scrollBy({ left: 250, behavior: 'smooth' }); // Scroll 250px at a time
    }, 3000); // Every 3 seconds
});
// JavaScript for Arrow Button Scrolling
document.querySelectorAll('.category-images').forEach(function(category) {
    const leftArrow = category.querySelector('.left-arrow');
    const rightArrow = category.querySelector('.right-arrow');
    const imagesContainer = category.querySelector('.images-container');

    let scrollAmount = 0;
    const scrollStep = 250; // Adjust how far it scrolls with each click

    leftArrow.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            imagesContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    rightArrow.addEventListener('click', () => {
        if (scrollAmount < imagesContainer.scrollWidth - imagesContainer.clientWidth) {
            scrollAmount += scrollStep;
            imagesContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});
document.querySelectorAll('.scroll-left').forEach((button) => {
    button.addEventListener('click', () => {
        const row = button.parentElement.querySelector('.product-row');
        row.scrollLeft -= 300; // Adjust scroll speed as needed
    });
});

document.querySelectorAll('.scroll-right').forEach((button) => {
    button.addEventListener('click', () => {
        const row = button.parentElement.querySelector('.product-row');
        row.scrollLeft += 300; // Adjust scroll speed as needed
    });
});
// Get the scrollable container
const productSection = document.querySelector('.product-section');

// Get the left and right buttons
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Set scroll amount
const scrollAmount = 250; // Adjust as per your preference

// Scroll to the left
leftBtn.addEventListener('click', () => {
    productSection.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Scroll to the right
rightBtn.addEventListener('click', () => {
    productSection.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
<script>
// Function to create a new product box
function createProductBox(imageSrc, title, price, advance, description) {
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");

    productBox.innerHTML = `
        <img src="${imageSrc}" alt="${title}" class="product-image">
        <div class="product-details">
            <h3>${title}</h3>
            <p class="price">$${price}/day</p>
            <p class="advance">Advance: $${advance}</p>
            <p class="description">${description}</p>
        </div>
    `;

    return productBox;
}

// Fetch product data from products.json
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productSection = document.getElementById("product-section");

        // Loop through the products and create boxes dynamically
        products.forEach(product => {
            const newProductBox = createProductBox(
                product.image,
                product.title,
                product.price,
                product.advance,
                product.description
            );
            productSection.appendChild(newProductBox);
        });
    })
    .catch(error => {
        console.error('Error loading product data:', error);
    });
</script>
