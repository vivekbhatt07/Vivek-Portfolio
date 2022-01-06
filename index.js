const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const close_btn = document.querySelector('.close-btn')
const openModel = document.querySelectorAll('.current-btn');

for (let i = 0; i < openModel.length; i++) {
    openModel[i].addEventListener('click', function () {
        model.classList.remove('display');
        overlay.classList.remove('display');
    })
}

close_btn.addEventListener('click', function () {
    model.classList.add('display');
    overlay.classList.add('display');
})

overlay.addEventListener('click', function () {
    model.classList.add('display');
    overlay.classList.add('display');
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!model.classList.contains('display')) {
            model.classList.add('display');
            overlay.classList.add('display');
            console.log('welcome');
        }
    }
});