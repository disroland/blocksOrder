window.onload = function(){
    let blocks = document.querySelectorAll('.block');
    document.addEventListener('keydown', function(event){
        event.preventDefault();
        console.log(event.keyCode);
    })

    let ord;


    blocks.forEach(el => {
        el.addEventListener ('click', function(){
            el.classList.toggle('active');
        });

        document.addEventListener('keydown', function(e){
            if (el.classList.contains('active') && e.keyCode == 37){
                e.preventDefault();
                ord = getComputedStyle(el).order;
                console.log(ord)
                ord -= 1;
                el.style.order = ord;
            }
            if (el.classList.contains('active') && e.keyCode == 39){
                e.preventDefault();
                ord = getComputedStyle(el).order;
                console.log(ord)
                ord = +ord + 1;
                el.style.order = ord;
            }

        })
    })
}