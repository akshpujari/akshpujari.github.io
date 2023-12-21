// Get the clickable divs and radio buttons
const clickableDivs = document.querySelectorAll('.clickable-div');
const radioButtons = document.querySelectorAll('input[name="showData"]');

// Add click event listeners to the clickable divs
clickableDivs.forEach(function (div, index) {
    div.addEventListener('click', function () {
        // Check the associated radio button
        radioButtons[index].checked = true;

        // Hide all sets of hidden data
        document.querySelectorAll('.hidden-content').forEach(function (hiddenContent) {
            hiddenContent.style.display = 'none';
        });

        // Show the selected set of hidden data based on the radio button's data-target attribute
        const targetId = div.dataset.target;
        if (targetId) {
            const targetHiddenData = document.getElementById('hiddenData' + targetId.charAt(0).toUpperCase() + targetId.slice(1));
            if (targetHiddenData) {
                targetHiddenData.style.display = 'block';
            }
        }
    });
});