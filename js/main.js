document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.bttn');
let showBox = document.querySelector('.showBox');
let contain = document.querySelector('.contain');
let iconX = document.querySelector('.iconX');
let showImage = document.getElementById('showImage'); 


buttons.forEach(button => {
    button.addEventListener('click',() => {
        let imgsrc = button.getAttribute('data-image'); 
        showImage.src= imgsrc;
        showBox.classList.remove('hidden');
    }
    );
});

function hideB() {
    showBox.classList.add('hidden');
}
iconX.addEventListener('click', hideB);

if (showBox) {
    showBox.addEventListener('click', (event) => {
        if(!contain.contains(event.target)){
                hideB()
        }
    });
}
})
;





// btn.addEventListener('click', showB);


// function showB() {
//     showBox.classList.remove('hidden');
// }

