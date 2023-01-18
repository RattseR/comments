let request = new XMLHttpRequest();
   request.open("GET", "data.json", false);
   request.send(null)
   let comments = JSON.parse(request.responseText);
   console.log(comments);
   console.log(comments.comments[0].id);
   





for (let i=0; i<comments.comments.length; i++) {

   if(comments.comments[i].content && comments.comments[i].user.username!=comments.currentUser.username){
   let contents = '<div class="comment-reply" commentid="'+comments.comments[i].id+'">'+
'<div class="comment-box">'+
'<div class="feedback">'+
  '<div id="like"><img src="./images/icon-plus.svg"></div>'+
  '<div id="result">'+comments.comments[i].score+'</div>'+
  '<div id="dislike"><img src="./images/icon-minus.svg"></div>'+
'</div>'+
'<div class="user-area">'+
  '<div class="user-top">'+
    '<div class="user-info">'+
      '<div class="user-image"><img src="'+comments.comments[i].user.image.png+'"></div>'+
      '<h4 class="username">'+comments.comments[i].user.username+'</h4>'+
      '<p  class="comment-date">'+comments.comments[i].createdAt+'</p>'+
    '</div>'+
    '<div class="reply">'+
      '<div class="reply-icon"><img src="./images/icon-reply.svg"></div>'+
      '<div><div class="reply-text">Reply</div></div>'+
    '</div>'+
  '</div>'+
  '<p class="comment">'+comments.comments[i].content+
  '</p>'+
'</div>'+
'<div>'+
'</div>';
   
document.getElementById("main-container").innerHTML+= contents;

   if(comments.comments[i].replies.length>0){
      for(let j=0; j<comments.comments[i].replies.length; j++){

      if(comments.comments[i].replies[j].user.username!=comments.currentUser.username){
         let content = '<div class="reply-box">'+
         '<div class="line"></div>'+
         '<div class="comment-reply" commentid="'+comments.comments[i].id+'">'+
         '<div class="comment-box">'+
'<div class="feedback">'+
  '<div id="like"><img src="./images/icon-plus.svg"></div>'+
  '<div id="result">'+comments.comments[i].replies[j].score+'</div>'+
  '<div id="dislike"><img src="./images/icon-minus.svg"></div>'+
'</div>'+
'<div class="user-area">'+
  '<div class="user-top">'+
    '<div class="user-info">'+
      '<div class="user-image"><img src="'+comments.comments[i].replies[j].user.image.png+'"></div>'+
      '<h4 class="username">'+comments.comments[i].replies[j].user.username+'</h4>'+
      '<p  class="comment-date">'+comments.comments[i].replies[j].createdAt+'</p>'+
    '</div>'+
    '<div class="reply">'+
      '<div class="reply-icon"><img src="./images/icon-reply.svg"></div>'+
      '<div><div class="reply-text">Reply</div></div>'+
    '</div>'+
  '</div>'+
  '<p class="comment">'+comments.comments[i].replies[j].content+
  '</p>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';

document.getElementById("main-container").innerHTML+= content;
      } else {
        let content = '<div class="reply-box">'+
        '<div class="line"></div>'+
        '<div class="comment-reply" commentid="'+comments.comments[i].id+'">'+
'<div class="comment-box">'+
'<div class="feedback">'+
  '<div id="like"><img src="./images/icon-plus.svg"></div>'+
  '<div id="result">'+comments.comments[i].replies[j].score+'</div>'+
  '<div id="dislike"><img src="./images/icon-minus.svg"></div>'+
'</div>'+
'<div class="user-area">'+
  '<div class="user-top">'+
    '<div class="user-info">'+
      '<div class="user-image"><img src="'+comments.comments[i].replies[j].user.image.png+'"></div>'+
      '<h4 class="username">'+comments.comments[i].replies[j].user.username+'</h4>'+
      '<p class="you" id="you">you</p>'+
      '<p  class="comment-date">'+comments.comments[i].replies[j].createdAt+'</p>'+
    '</div>'+
    '<div class="delete-edit">'+
                '<div class="reply" id="delete">'+
                  '<div class="reply-icon"><img src="./images/icon-delete.svg"></div>'+
                  '<div><div class="reply-text" id="delete-text">Delete</div></div>'+
                '</div>'+
                '<div class="reply" id="edit">'+
                  '<div class="reply-icon"><img src="./images/icon-edit.svg"></div>'+
                  '<div><div class="reply-text">Edit</div></div>'+
                '</div>'+
              '</div>'+
  '</div>'+
  '<p class="comment">'+comments.comments[i].replies[j].content+
  '</p>'+
'</div>'+
'<div>'+
'</div>'+
'</div>';
    
    document.getElementById("main-container").innerHTML+= content;
      }
      
      }
      }
   }  else if(comments.comments[i].content && comments.comments[i].user.username==comments.currentUser.username){
    
    let usercontent = '<div class="comment-reply" commentid="'+comments.comments[i].id+'">'+
'<div class="comment-box">'+
'<div class="feedback">'+
  '<div id="like"><img src="./images/icon-plus.svg"></div>'+
  '<div id="result">'+comments.comments[i].score+'</div>'+
  '<div id="dislike"><img src="./images/icon-minus.svg"></div>'+
'</div>'+
'<div class="user-area">'+
  '<div class="user-top">'+
    '<div class="user-info">'+
      '<div class="user-image"><img src="'+comments.comments[i].user.image.png+'"></div>'+
      '<h4 class="username">'+comments.comments[i].user.username+'</h4>'+
      '<p class="you" id="you">you</p>'+
      '<p  class="comment-date">'+comments.comments[i].createdAt+'</p>'+
    '</div>'+
    '<div class="delete-edit">'+
                '<div class="reply" id="delete">'+
                  '<div class="reply-icon"><img src="./images/icon-delete.svg"></div>'+
                  '<div class="reply-text" id="delete-text">Delete</div>'+
                '</div>'+
                '<div class="reply" id="edit">'+
                  '<div class="reply-icon"><img src="./images/icon-edit.svg"></div>'+
                  '<div class="reply-text">Edit</div>'+
                '</div>'+
              '</div>'+
  '</div>'+
  '<p class="comment">'+comments.comments[i].content+
  '</p>'+
'</div>'+
'<div>'+
'</div>';
    
    document.getElementById("main-container").innerHTML+= usercontent;
   }
}


const sendButton  = document.getElementById('sendbutton');

/*
sendButton.addEventListener('click', function(){
   let newComment = document.getElementById('userComment').value;
   console.log(newComment);
   document.getElementById('userComment').value='';
   
}); */

const addComment = async () =>{
  let newComment = document.getElementById('userComment').value;
  let currentUserImage = document.getElementById('current-user-image').src;
  let currentUserUsername  = comments.currentUser.username;
   
  const  doc = {
     content : newComment,
     createdAt: "just now",
     score: 0,
     user: {
       image :{
         png: currentUserImage,
         webp: currentUserImage
       },
     username:  currentUserUsername,
     },
     replies: []
  }
  if (newComment!=""){
   await fetch('http://localhost:3000/comments',{
   method: 'POST',
   body: JSON.stringify(doc),
   headers: {'Content-Type': 'application/json'} 
  })

  document.getElementById('userComment').value='';
}
}
sendButton.addEventListener('click',addComment);


const replyBox = document.getElementsByClassName('reply');
const openReplyBox = async (event) => {
  let parent1 = event.target.parentNode;
  let parent2 = parent1.parentNode;
  let parent3 = parent2.parentNode;
  let parent4 = parent3.parentNode;
  let parent5 = parent4.parentNode;
  let parent6 = parent5.parentNode;

  let replyComment = '<div class="comment-box" id="current-reply-area">'+
      '<div class="current-user-image"><img id="current-user-image" src="'+comments.currentUser.image.png+'"></div>'+
      '<div class="input-message"><textarea id="userReply"></textarea></div>'+
      '<div class="send"><button type="submit" id="replybutton">REPLY</button></div>'+
      '</div>';
  let newdiv = document.createElement('div');
  newdiv.setAttribute('id','temporaryreply');
  newdiv.innerHTML += replyComment;    
  
  parent6.appendChild(newdiv);

const submitReply = document.getElementById('replybutton');
submitReply.addEventListener('click', async (e)=>{
    let replytext = document.getElementById('userReply').value;
    let currentUserImage = comments.currentUser.image.png;
    let currentUserUsername  = comments.currentUser.username;
    let commentAuthor = parent3.getElementsByTagName('h4')[0].innerHTML;
    let currentCommentId = parent6.getAttribute('commentid');
    let path = '';
    
    
    console.log(replytext);
    console.log(currentUserImage);
    console.log(currentUserUsername);
    console.log(currentCommentId);
    console.log(commentAuthor);
   

    let replyinfo = {
        content: replytext,
        createdAt: '1 day ago',
        replyingTo: commentAuthor,
        score: 0,
        user: {
            image:{
              png:currentUserImage,
              webp:currentUserImage
            },
            username:currentUserUsername
        }
    }
    
    if (replytext!=""){
      await fetch('http://localhost:3000/comments?id=1',{
      method: 'POST',
      body: JSON.stringify(replyinfo),
      headers: {'Content-Type': 'application/json'} 
     })
   }

})
  
}

for  (let i=0; i<replyBox.length; i++) {
  if (replyBox[i].id!="edit"&&replyBox[i].id!="delete"){
      replyBox[i].addEventListener('click',openReplyBox);

}
}
/*if (document.getElementById('temporaryreply')){
window.addEventListener('click', function(e){   
  if (!document.getElementById('temporaryreply').contains(e.target)){
    this.document.getElementById('temporaryreply').remove();
  } 
})
}*/