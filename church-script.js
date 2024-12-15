const readMoreBtns = document.querySelectorAll('.read-more-btn');
const popupModal = document.querySelector('.popup-modal');
const popupClose = document.querySelector('.popup-close');
const modalText = document.getElementById('modal-text');
const popupImage = document.querySelector('.popup-image');

// Event listener for each "Read More" button
readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        // Get the full text and image data from the button
        const fullText = btn.getAttribute('data-full-text');
        const imageUrl = btn.getAttribute('data-popup-image');

        // Set modal content
        modalText.textContent = fullText;
        popupImage.src = imageUrl;

        // Show the modal
        popupModal.style.display = 'flex';
    });
});

// Close the popup when clicking the close button
popupClose.addEventListener('click', function() {
    popupModal.style.display = 'none';
});

// Close the popup when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
});
