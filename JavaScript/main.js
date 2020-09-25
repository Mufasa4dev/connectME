// START: The Benefit of ConnectME
let tbucBack = document.querySelector('#tbucPrevious');
let tbucNext = document.querySelector('#tbucNext');
const tbucBox1 = document.querySelector('#tbucDisplay1');
const tbucBox2 = document.querySelector('#tbucDisplay2');
const tbucBox3 = document.querySelector('#tbucDisplay3');

tbucNext.addEventListener("click", tbucScrollNext);
tbucBack.addEventListener("click", tbucScrollBack);



function tbucScrollNext() {
    if (tbucBox1.style.display = 'block') {
        tbucBox1.style.display = 'none';
        tbucBox2.style.display = 'block';
        tbucBox3.style.display = 'none';
    } else if (tbucBox2.style.display = 'block') {
        tbucBox2.style.display = 'none';
        tbucBox3.style.display = 'block';
        tbucBox1.style.display = 'none';
    } else {
        tbucBox2.style.display = 'none';
        tbucBox1.style.display = 'block';
        tbucBox3.style.display = 'none';
    }
        
}

function tbucScrollBack() {
    if (tbucBox1.style.display = 'block') {
        tbucBox1.style.display = 'none';
        tbucBox3.style.display = 'block';
        tbucBox2.style.display = 'none';
    } else if (tbucBox3.style.display = 'block') {
        tbucBox3.style.display = 'none';
        tbucBox2.style.display = 'block';
        tbucBox1.style.display = 'none';
    } else if (tbucBox2.style.display = 'block') {
        tbucBox2.style.display = 'none';
        tbucBox1.style.display = 'block';
        tbucBox3.style.display = 'none';
    }
    
    
    
}

