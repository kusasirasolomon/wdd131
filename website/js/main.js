// script.js

// Function to update footer year dynamically
function updateFooterYear() {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} StreamFitness. All rights reserved.`;
}

// Function to validate form inputs
function validateForm(name, email, message) {
    // Basic checks with conditional branching
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (message.trim() === "") {
        alert("Please enter your message.");
        return false;
    }
    return true;
}

// Function to save form data to localStorage
function saveContactData(contactObj) {
    // Get existing data or initialize empty array
    let contacts = JSON.parse(localStorage.getItem("streamFitnessContacts")) || [];
    
    // Add new contact object
    contacts.push(contactObj);
    
    // Save updated array back to localStorage
    localStorage.setItem("streamFitnessContacts", JSON.stringify(contacts));
}

// Event listener setup after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateFooterYear();

    // Select the contact form, if it exists on the page
    const contactForm = document.querySelector("form");
    if (!contactForm) return; // No form on this page
    
    // Add submit event listener
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission
        
        // Get input values from the form
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
        
        // Validate inputs
        if (!validateForm(name, email, message)) return;
        
        // Create a contact object (uses object literal syntax)
        const contact = {
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            submittedAt: new Date().toLocaleString()
        };
        
        // Save to localStorage
        saveContactData(contact);
        
        // Show thank you message dynamically using template literals
        const mainSection = document.querySelector("main section");
        mainSection.innerHTML = `
            <h2>Thank You!</h2>
            <p>Thank you, <strong>${contact.name}</strong>, for reaching out to us. We will get back to you at <em>${contact.email}</em> soon.</p>
        `;
        
        // Log all contacts stored in localStorage to console (array + array method)
        const allContacts = JSON.parse(localStorage.getItem("streamFitnessContacts")) || [];
        console.log(`All contact submissions (${allContacts.length}):`);
        allContacts.forEach((c, i) => {
            console.log(`${i + 1}: ${c.name} (${c.email}) at ${c.submittedAt}`);
        });
    });
});
