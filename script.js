document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Get modal elements
    const donationModal = document.getElementById('donation-modal');
    const learnMoreModal = document.getElementById('learn-more-modal');
    
    // Get buttons
    const donateBtn = document.getElementById('donate-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    
    // Get close buttons
    const closeDonation = donationModal.querySelector('.close');
    const closeLearnMore = learnMoreModal.querySelector('.close');

    // Open modals
    donateBtn.onclick = function() {
        donationModal.style.display = "block";
    }

    learnMoreBtn.onclick = function() {
        learnMoreModal.style.display = "block";
    }

    // Close modals
    closeDonation.onclick = function() {
        donationModal.style.display = "none";
    }
    closeLearnMore.onclick = function() {
        learnMoreModal.style.display = "none";
    } 

    // Close modals when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == donationModal) {
            donationModal.style.display = "none";
        }
        if (event.target == learnMoreModal) {
            learnMoreModal.style.display = "none";
        }
    }

    // Handle donation form submission
    const donationForm = document.getElementById('donation-form');
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your donation! Your support is greatly appreciated.');
        donationForm.reset();
        donationModal.style.display = "none";
    });
});