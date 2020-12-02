let home = document.getElementById('home');
let video = document.getElementById('video');
let post = document.getElementById('post');
let likes = document.getElementById('likes');
let user_profile = document.getElementById('user-profile');

const navbar = document.querySelector('.navbar');
const contentbar = document.querySelector('.contentbar');
const videopage = document.querySelector('.videopage');
const postpage = document.querySelector('.postpage');
const likepage = document.querySelector('.likepage');
const profilepage = document.querySelector('.profilepage');


window.addEventListener('load', function(){
    navbar.style.display = 'block';
    contentbar.style.display = 'block';
    videopage.style.display = 'none';
    postpage.style.display = 'none';
    likepage.style.display = 'none';
    profilepage.style.display = 'none';
});

home.addEventListener('click', function(){
    navbar.style.display = 'block';
    contentbar.style.display = 'block';
    videopage.style.display = 'none';
    postpage.style.display = 'none';
    likepage.style.display = 'none';
    profilepage.style.display = 'none';
});

video.addEventListener('click', function(){
    navbar.style.display = 'none';
    contentbar.style.display = 'none';
    videopage.style.display = 'block';
    postpage.style.display = 'none';
    likepage.style.display = 'none';
    profilepage.style.display = 'none';
});

post.addEventListener('click', function(){
    navbar.style.display = 'none';
    contentbar.style.display = 'none';
    videopage.style.display = 'none';
    postpage.style.display = 'block';
    likepage.style.display = 'none';
    profilepage.style.display = 'none';
});

likes.addEventListener('click', function(){
    navbar.style.display = 'none';
    contentbar.style.display = 'none';
    videopage.style.display = 'none';
    postpage.style.display = 'none';
    likepage.style.display = 'block';
    profilepage.style.display = 'none';
});

user_profile.addEventListener('click', function(){
    navbar.style.display = 'none';
    contentbar.style.display = 'none';
    videopage.style.display = 'none';
    postpage.style.display = 'none';
    likepage.style.display = 'none';
    profilepage.style.display = 'block';
});