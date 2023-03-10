import {
  posts
} from "./posts.js";

let containerEl

function init() {
  containerEl = document.querySelector(".container")
  renderPostList()
}

function renderPostList() {
  posts.forEach((post) => {
    const postEl = document.createElement("div")
    postEl.classList.add("post")
    postEl.innerHTML = `
    <div class="post-header">
      <img class="avatar post-avatar" src="${post.avatar}" alt="${post.name}">
      <div class="post-info">
        <strong class="post-username">${post.name}</strong>
        <small class="post-location">${post.location}</small>
      </div>
    </div>
    <img src="${post.image}" alt="" class="post-img">
    <ul class="icon-list">
      <li class="icon-item">
        <img src="./images/icon-heart.png" alt="">
      </li>
      <li class="icon-item">
        <img src="./images/icon-comment.png" alt="">
      </li>
      <li class="icon-item">
        <img src="./images/icon-dm.png" alt="">
      </li>
    </ul>
    <strong class="like-numbers">${post.likes} likes</strong>
    <p class="post-comment"><strong>${post.username}</strong> ${post.comment}</p>
    `
    containerEl.append(postEl)
  })
}

document.addEventListener("DOMContentLoaded", init)