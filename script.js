const testimonials = [
    {
        name:"Shaik Ahmed",
        position:"Associate Software Engineer",
        image:"profile.png",
        testimonial:`Dedicated and motivated final year Computer Science Student. Seeking opportunities to apply and enhance my technical skills, academic knowledge and gain hands-on experience while contributing and gaining skills under mentorship of experienced professionals.`,
    },
    {
        name:"MD Haseeb",
        position:"Associate Software Engineer",
        image:"profile.png",
        testimonial:`Dedicated and motivated final year Computer Science Student. Seeking opportunities to apply and enhance my technical skills, academic knowledge and gain hands-on experience while contributing and gaining skills under mentorship of experienced professionals.`,
    },
    {
        name:"Mohammed Noaman",
        position:"Associate Software Engineer",
        image:"profile.png",
        testimonial:`Dedicated and motivated final year Computer Science Student. Seeking opportunities to apply and enhance my technical skills, academic knowledge and gain hands-on experience while contributing and gaining skills under mentorship of experienced professionals.`,
    },
];
const testimonialContainer = document.getElementById("_testimonial_container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function showTestimonial() {
    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
    <img src="${testimonial.image}" />
    <h3>${testimonial.name}</h3>
    <h6>${testimonial.position}</h6>
    <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction) {
    currentIndex +=direction;
    if(currentIndex<0){
        currentIndex = testimonials.length -1;
    } else if(currentIndex > testimonials.length){
        currentIndex = 0;
    }
    showTestimonial();
}

prevBtn.addEventListener("click",()=> changeTestimonial(-1));
nextBtn.addEventListener("click",()=> changeTestimonial(1));

showTestimonial();