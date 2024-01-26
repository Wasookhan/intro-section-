const features = document.querySelector('.feature');
let featuresList = document.querySelector('#features')
const company = document.querySelector('.company');
const companyList = document.querySelector('#company-li');

features.addEventListener('mouseenter',()=>{
    featuresList.style.display = "block";
    document.querySelector('#arrow').src="icon-arrow-up.svg" ;

});
features.addEventListener("mouseleave", () => {
    featuresList.style.display = "none";
    document.querySelector('#arrow').src = "icon-arrow-down.svg"
});

company.addEventListener('mouseenter',()=>{
companyList.style.display = "block";
    document.querySelector('#arrow2').src="icon-arrow-up.svg" ;

});

company.addEventListener("mouseleave", () => {
    companyList.style.display = "none";
    document.querySelector('#arrow2').src = "icon-arrow-down.svg"
});
const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{
document.querySelector('mbl-menu').classList.add('active');
document.querySelector('mbl-menu').classList.toggle('active');
});