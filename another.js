var animalContainer = document.getElementById("animal-info");

window.renderHTML = function() {
    animalContainer.insertAdjacentHTML('beforeend', 'test 123');
}