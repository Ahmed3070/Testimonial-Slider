const testimonials = [
    {
        name:"Shaik Ahmed",
        position:"Associate Software Engineer",
        image:"profile.png",
        testimonial:`Dedicated and motivated final year Computer Science Student. Seeking opportunities to apply and enhance my technical skills, academic knowledge and gain hands-on experience while contributing and gaining skills under mentorship of experienced professionals.`,
    },
    {
        name:"Shaik Ahmed",
        position:"Associate Software Engineer",
        image:"profile.png",
        testimonial:`Dedicated and motivated final year Computer Science Student. Seeking opportunities to apply and enhance my technical skills, academic knowledge and gain hands-on experience while contributing and gaining skills under mentorship of experienced professionals.`,
    },
    {
        name:"Shaik Ahmed",
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

}

function changeTestimonial() {

}

prevBtn.addEventListener("click",()=> changeTestimonial(-1));
nextBtn.addEventListener("click",()=> changeTestimonial(1));