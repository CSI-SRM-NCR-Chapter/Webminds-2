document.getElementById("cancel-button").addEventListener("click", function() {
    // Create a notification element
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = "Your transaction is cancelled";
    
    // Append the notification to the body
    document.body.appendChild(notification);

    // Remove the notification after 5 seconds
    setTimeout(function() {
        notification.remove();
    }, 1000); // Change the duration to 5000 milliseconds (5 seconds)
});
document.addEventListener('DOMContentLoaded', function() {
    const profileOption = document.querySelector('.profile-option');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle dropdown menu when clicking profile option
    profileOption.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !profileOption.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
