// JavaScript code to show additional research interests based on user input
document.addEventListener('DOMContentLoaded', function() {
    var response = document.getElementById('response');
    var additionalInterests = document.getElementById('additional-interests');
    
    response.addEventListener('input', function() {
        if (response.value.toLowerCase() === 'y') {
            additionalInterests.style.display = 'block';
        } else {
            additionalInterests.style.display = 'none';
        }
    });
    
    // Additional JavaScript code to handle the third interest (similar to the second interest)
    var response2 = document.getElementById('response2');
    var thirdInterest = document.getElementById('third-interest');
    
    response2.addEventListener('input', function() {
        if (response2.value.toLowerCase() === 'y') {
            thirdInterest.style.display = 'block';
        } else {
            thirdInterest.style.display = 'none';
        }
    });
});
