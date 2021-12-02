const Sheep = function() {
    function start() {
        let sheep = document.querySelector('.sheep');
        sheep.setAttribute('id', 'sheep-1');
        let food = document.querySelector('.food');
        food.setAttribute('id', 'food-1');
        sheep.classList.add('start');
    };
    function walk() {
        let sheep = document.querySelector('.sheep');
        function addClassWalk() {
            sheep.classList.remove('start');
            sheep.classList.add('walk');
        }
        setTimeout(addClassWalk, 3000);
    };
    function eat() {
        let sheep = document.querySelector('.sheep');
        let food = document.querySelector('.food');
        function addFood() {
            food.style.display='block';
        }
        setTimeout(addFood, 12000);
        function addClassFood() {
            food.classList.add('food');
        }
        setTimeout(addClassFood, 30000);
        function addClassGrow() {
            sheep.classList.remove('walk');
            sheep.classList.add('grow');
        }
        setTimeout(addClassGrow, 19000);
    }
    return { start: start, walk: walk, eat: eat };
};
let sheep = new Sheep();
sheep.start();
sheep.walk();
sheep.eat();
var style = document.createElement('style');
var x1,
    x2,
    x3,
    x4,
    x5,
    x6;
style.innerHTML = '\
    @keyframes start-anim {\
        0% { transform: translate(1300px, -200px); }\
        80% { transform: translate(1300px, 630px); }\
        100% { transform: translate(1300px, 630px); }\
    }\
    @keyframes walk {\
        0% { transform: translate(1300px, 630px) rotateY(0deg); background: url(img/sheep/sheep_shot.gif) no-repeat; background-size: 100%; }\
        21% { transform: translate(300px, 630px) rotateY(0deg); }\
        25% { transform: translate(300px, 630px) rotateY(180deg); }\
        46% { transform: translate(1100px, 630px) rotateY(180deg); }\
        50% { transform: translate(1100px, 630px) rotateY(0deg); }\
        71% { transform: translate(200px, 630px) rotateY(0deg); }\
        75% { transform: translate(200px, 630px) rotateY(180deg); }\
        96% { transform: translate(600px, 630px) rotateY(180deg); background: url(img/sheep/sheep_shot.gif) no-repeat; background-size: 100%; }\
        100% { transform: translate(600px, 630px) rotateY(180deg); background: url(img/sheep/sheep-1.png) no-repeat; background-size: 100%; }\
    }\
    @keyframes food {\
        0% { transform: translate(750px, 700px); width: 90px; height: 90px; }\
        25% { transform: translate(760px, 705px); width: 70px; height: 70px; }\
        50% { transform: translate(780px, 710px); width: 40px; height: 40px; }\
        75% { transform: translate(805px, 720px); width: 20px; height: 20px; }\
        100% { transform: translate(800px, 720px); width: 10px; height: 10px; }\
    }\
    @keyframes grow {\
        0% { transform: translate(600px, 630px) rotateY(180deg); width: 200px; height: 200px; }\
        25% { transform: translate(590px, 615px) rotateY(180deg); width: 220px; height: 220px; }\
        50% { transform: translate(580px, 600px) rotateY(180deg); width: 240px; height: 240px; }\
        75% { transform: translate(570px, 600px) rotateY(180deg); width: 260px; height: 260px; }\
        100% { transform: translate(560px, 580px) rotateY(180deg); width: 280px; height: 280px; }\
    }';
document.head.appendChild(style);
let area = document.querySelector('.area');
let sheepOld = document.querySelector('.sheep');
let foodOld = document.querySelector('.food');
var i = 1;
sheepOld.addEventListener('click', function() {
    i++;
    let nameSheep = 'sheep-'+i;
    let nameFood = 'food-'+i;
    let sheepCreate = document.createElement('div');
    let foodCreate = document.createElement('div');
    function start() {
        sheepCreate.classList.add('sheep');
        sheepCreate.setAttribute('id', nameSheep);
        area.appendChild(sheepCreate);
        area.appendChild(foodCreate);
        foodCreate.classList.add('food');
        foodCreate.setAttribute('id', nameFood);
        sheepCreate.classList.add('start');
    };
    function walk() {
        function addClassWalk() {
            sheepCreate.classList.remove('start');
            sheepCreate.classList.add('walk');
        }
        setTimeout(addClassWalk, 3000);
    };
    function eat() {
        function addFood() {
            foodCreate.style.display='block';
        }
        setTimeout(addFood, 12000);
        function addClassFood() {
            foodCreate.classList.add('food');
        }
        setTimeout(addClassFood, 30000);
        function addClassGrow() {
            sheepCreate.classList.remove('walk');
            sheepCreate.classList.add('grow');
        }
        setTimeout(addClassGrow, 19000);
    }
    start();
    walk();
    eat();
}); 
