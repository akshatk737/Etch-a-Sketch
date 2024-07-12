document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    const button=document.querySelector("button");

    button.addEventListener("click",function(e){
        let x=prompt("Enter grid size between 1 to 100");
        if(x>100){
            alert("Please enter a valid value");
            return;
        }
        newgrid(x);
    })

    function newgrid(num){
        container.innerHTML=" ";
        for (let i = 0; i < num * num; i++) {
            const div = document.createElement('div');
            div.classList.add('newgrid-item');
            div.style.width=`calc(100% / ${num})`;
            div.style.height=`calc(100% / ${num})`;
            div.style.boxSizing = 'border-box';
            div.addEventListener("mouseenter", function(e) {
                e.target.style.background = get_rand_color();
            });
            container.appendChild(div);
        }

    }

    function get_rand_color(){
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
    }

    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener("mouseenter", function(e) {
            e.target.style.background = get_rand_color();
        });
        container.appendChild(div);
    }
});
