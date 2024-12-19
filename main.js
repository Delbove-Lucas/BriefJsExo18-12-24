const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg', 'https://hips.hearstapps.com/hmg-prod/images/maxresdefault-1605111824.jpg', 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_', 'https://www.rollingstone.com/wp-content/uploads/2024/12/best-memes-raygun.jpg?w=1024', 'https://artrkl.com/cdn/shop/articles/tom_lea_-_2000_yard_stare.webp?v=1712751262', 'https://www.rollingstone.com/wp-content/uploads/2023/12/kevin-james-meme.jpg?w=800', 'https://i.imgflip.com/7cfky0.jpg?a481512'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);