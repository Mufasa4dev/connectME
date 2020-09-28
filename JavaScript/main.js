// connectMe benefit
const benefitData = [
    `<h4><img src="./images/icons/see.png" alt="" class="tbucicon"> We <span>see
    jobs</span> before you
do.</h4>
<p class="tbucsmalltext">Get job match/referrals with desired employers/SMEs.
</p>
<h4><img src="./images/icons/smart-key.png" alt="" class="tbucicon"> Access
<span>exclusive research
    on employers</span></h4>
<p class="tbucsmalltext">You can be found easily by your potential employers.
</p>`,

`<h4><img src="./images/icons/Vectornewx1.png" alt="" class="tbucicon"> We
<span>guide you through</span> creating a profile that employers <span>would
    find appealing.</span></h4>
<p class="tbucsmalltext">Get professional CV review and interview preparation.
</p>
<h4><img src="./images/icons/presentationx.png" alt="" class="tbucicon"> Access
<span>exclusive trainings both in</span> tech <span>and</span> vocational
skills</h4>
<p class="tbucsmalltext">Get trained to become a trainer; that in turns make you
an employer of labour.</p>`,

`<h4><img src="./images/icons/see.png" alt="" class="tbucicon">Get noticed</h4>
<p class="tbucsmalltext">Find your desired potential employees through our
proficiency test.</p>
<h4><img src="./images/icons/certificationxx.png" alt=""
class="tbucicon"><span>Get certified</span></h4>
<p class="tbucsmalltext">Acquire skills while seeking to be employed and get
certified.</p>`
]

let benefit = document.getElementById('benefit_view')
let next = document.getElementById("tbucNext")
let back = document.getElementById("tbucPrevious")
back.style.display = "none"
benefit.innerHTML = benefitData[0] 

let count = 1
let maxCount = 2
const nextClick = () => {
    if(count <= 2){
        benefit.innerHTML = benefitData[count]
        count ++
        maxCount = 2
    } else {
        next.style.display = "none"
        back.style.display = "flex"
    }
    console.log(count)
}
const previousClick = () => {
    if(maxCount >= 0){
        benefit.innerHTML = benefitData[maxCount]
        maxCount --
        count = 1
    } else {
        next.style.display = "flex"
        back.style.display = "none"
    }
}

next.addEventListener("click", nextClick);
back.addEventListener("click", previousClick);

console.log("from top")
