// START: The Benefit of ConnectME
let tbucBack = document.querySelector('#tbucPrevious');
let tbucNext = document.querySelector('#tbucNext');
const tbucBox1 = document.querySelector('#tbucDisplay1');
const tbucBox2 = document.querySelector('#tbucDisplay2');
const tbucBox3 = document.querySelector('#tbucDisplay3');

tbucNext.addEventListener("click", tbucScrollNext);
tbucBack.addEventListener("click", tbucScrollBack);

if (tbucBox1.style.display = 'block') {
    tbucBack.style.display = 'none';
    console.log('test');

} 


// function tbucScrollBack() {

    // if (tbucBox1.style.display = 'block') {

    //    tbucBack.style.display = 'none'
        
    // } else if (tbucBox3.style.display == 'block') {

    //     tbucBox3.style.display = 'none';
    //     tbucBox2.style.display = 'block';
    //}
    
    
}

// function tbucScrollNext() {

// }
