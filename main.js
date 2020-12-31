const congratulations  = ['Новогодняя сказка окутала дом<br>Ёлка, снег и подарки, поздравленья кругом!<br>Все невзгоды ушли, позабыты печали,<br>Чтобы рядом с родными новый год вы встречали!', 
'Ты - самый румяный пирожочек :) Продолжай расстраивать Деда Мороза плохим поведением! С новым счастьем!', 
'Желаю, чтобы этот новый год вновь подарил тебе то ощущение волшебства, которое было у тебя в детстве!', 
'А пока, под бой курантов мы шампанское нальем,<br>и пока метут метели песню весело споем!<br>Очень много мы трудились, чтобы в новый год опять<br>Вместе и под звон бокалов этот новый год встречать', 
'Пускай в новом году будет много сил и вдохновения для новых свершений!<br>Happy new Year!',
'Нет ничего лучше, чем встречать праздники в кругу любимых и близких! Пускай этот новый год принесет веселый смех, поддержку и много радостных воспоминаний, которые мы сможем разделить друг с другом!'];

const frontImg = ['url(img/cat.png)', 'url(img/kitty.png)', 'url(img/jk.jpg)', 'url(img/Cats_Christmas_Kittens_507541.jpg)', 'url(img/tmb_153301_3822.jpg)', 'url(img/tmb_152263_6220.jpg)', 'url(img/depositphotos_210830500-stock-photo-black-british-shorthair-cat-christmas.jpg)'];
const backImg = ['img/image_3094.jpg', 'img/IMG_4192.вебjpg.jpg', 'img/original.jpg', 'img/001.jpg', 'img/unnamed.jpg', 'img/1328c239207233c23a03351e44ea9e03.jpg'];

const text = document.querySelector('.inside-page__text');
const front = document.querySelector('.card-front');
const back = document.querySelector('.img__media');
// const card = document.querySelector('.card-section');
const btn = document.querySelector('.btn');

let count = 0;
let all = 6;

function addText() {
    if (count < all) {
        let itemText = congratulations[count];
        text.innerHTML = itemText;
    
        let itemBack = backImg[count];
        back.src = itemBack;
    
        let itemFront = frontImg[count];
        front.style.backgroundImage = itemFront;
        count++;
    } else {
        count = 0;
        addText();
    }
}

btn.addEventListener( "click" , () => {
    $('.card-section').fadeIn(2000); 
    addText();
    btn.innerText = "Получить еще одно!";
});

