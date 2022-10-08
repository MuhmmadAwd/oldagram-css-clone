const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
let mainEl = document.getElementById("main-el");
let postList = "";
function generatesPosts() {}
for (let i = 0; i < posts.length; i++) {
(postList += `
  <section class="post">
  <div class="post-header">
    <div class="avatar post-avatar">
      <img src="./${posts[i].avatar}" alt="${posts[i].name}" />
    </div>
    <div class="user-info">
      <p>${posts[i].name}</p>
      <small>${posts[i].location}</small>
    </div>
  </div>
  <div class="post-body">
    <div class="post-img">
      <img src="./${posts[i].post}" alt="${posts[i].name}" />
    </div>
    <div class="post-icons">
      <img src="./images/icon-heart.png" alt="" />
      <img src="./images/icon-comment.png" alt="" />
      <img src="./images/icon-dm.png" alt="" />
    </div>
  </div>
  <div class="post-footer">
    <p class="post-likes-num">${posts[i].likes} likes</p>
    <p
      >${posts[i].username} <small> ${posts[i].comment} </small></p
    >
  </div>
</section>
<span class="spacing"></span>
    `);
}
generatesPosts();
mainEl.innerHTML = postList;

function incrementLikes(){
    
}
