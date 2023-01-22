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
         let content = '<div class="reply-box myresponse">'+
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
        let content = '<div class="reply-box myresponse">'+
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
                '<div class="reply mycomdlt" id="delete">'+
                  '<div class="reply-icon"><img src="./images/icon-delete.svg"></div>'+
                  '<div><div class="reply-text" id="delete-text">Delete</div></div>'+
                '</div>'+
                '<div class="reply myreply" id="edit">'+
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
    
    let usercontent = '<div class="comment-reply myresponse" commentid="'+comments.comments[i].id+'">'+
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
                '<div class="reply mycomdlt" id="delete">'+
                  '<div class="reply-icon"><img src="./images/icon-delete.svg"></div>'+
                  '<div class="reply-text" id="delete-text">Delete</div>'+
                '</div>'+
                '<div class="reply myreply" id="edit">'+
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

  let usernameParent = event.target.closest('.user-top');
  let username = usernameParent.querySelector('h4').innerHTML;
  
  let replyComment = '<div class="comment-box" id="current-reply-area">'+
      '<div class="current-user-image"><img id="current-user-image" src="'+comments.currentUser.image.png+'"></div>'+
      '<div class="input-message"><textarea id="userReply">@'+username+' </textarea></div>'+
      '<div class="send"><button type="submit" id="replybutton">REPLY</button></div>'+
      '</div>';
  if(!document.getElementById('temporaryreply')) { 
          
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
      await fetch('http://localhost:3000/comments?id=1/replies',{
      method: 'POST',
      body: JSON.stringify(replyinfo),
      headers: {'Content-Type': 'application/json'} 
     })
   }

})} else {
        document.getElementById('temporaryreply').remove();
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
      await fetch('http://localhost:3000/comments?id=1/replies',{
      method: 'POST',
      body: JSON.stringify(replyinfo),
      headers: {'Content-Type': 'application/json'} 
     })
   }

})
}
  
}

for  (let i=0; i<replyBox.length; i++) {
  if (replyBox[i].id!="edit"&&replyBox[i].id!="delete"){
      replyBox[i].addEventListener('click',openReplyBox);

}
}

//adding deletebutton event

let deletebox = document.getElementsByClassName('mycomdlt');

let deletecomment = async (event) =>{
    let newparent = event.target.closest('.myresponse');
    let commentId = parseInt(newparent.getAttribute('commentid'));
    console.log(typeof commentId);
   await fetch('http://localhost:3000/comments/'+commentId,{
      method: 'DELETE',
      })
    
    newparent.remove();
    
} 

for (let i=0; i<deletebox.length; i++){
  deletebox[i].addEventListener('click', deletecomment);
}

let editButtons = document.getElementsByClassName('myreply');

let editComment = (event) => {
    if(document.getElementById('edittext')){
      let currentEdit = document.getElementById('edittext');
      let currentEditContent = currentEdit.value;
      let currentUserArea = currentEdit.closest('.user-area');
      document.getElementById('updatebutton').remove();
      document.getElementById('edittext').remove();
      
      let para = document.createElement('p');
      para.setAttribute('class','comment');
      para.innerHTML =  currentEditContent;
      currentUserArea.appendChild(para);
    }


    let editParent = event.target.closest('.user-area');
    let editParagraph = editParent.querySelector('.comment');
    let textToEdit = editParagraph.innerHTML;
    editParagraph.remove();
    let editTextArea = document.createElement('textarea');
    editTextArea.innerHTML = textToEdit;
    editTextArea.setAttribute('class','edit-text-area');
    editTextArea.setAttribute('id','edittext');
    editParent.appendChild(editTextArea);

    let updateButton = document.createElement('button');
    updateButton.setAttribute('class', 'update-button');
    updateButton.setAttribute('id', 'updatebutton');
    updateButton.innerHTML = "UPDATE";
    let updatediv = document.createElement('div');
    updatediv.setAttribute('id', 'updatediv');
    updatediv.appendChild(updateButton);
    editParent.appendChild(updatediv);
    
    let focusText = document.getElementsByClassName('edit-text-area');
    focusText[0].focus();
    focusText[0].setSelectionRange(focusText[0].value.length,focusText[0].value.length);
    
    //  add eventlistener to update button

      let updateComment =  () => {
      let updateButton1 = document.getElementById('updatebutton');
      let currentUserArea1 = updateButton1.closest('.user-area');
      let currentTextarea1 = currentUserArea1.querySelector('textarea');
      let currentInput1 = currentTextarea1.value;
      let likesAmount = updateButton1.closest('.comment-box').querySelector('#result').innerHTML;
      let comId;
      if(!updateButton1.closest('.reply-box')){
        comId = updateButton1.closest('.myresponse').getAttribute('commentid'); 
      } else {
        comId = updateButton1.closest('.comment-reply').getAttribute('commentid');
      }


      console.log(updateButton1.closest('.reply-box'));
      
      let currentUserImage = comments.currentUser.image.png;
      let currentUserUsername  = comments.currentUser.username;
        
      let editedComment={};
      let replyTo = '';
      for (let i=0; i<comments.comments.length; i++){
        if(comments.comments[i].replies){
          for (let j=0; j<comments.comments[i].replies.length; j++){
            if(comments.comments[i].replies[j].id==comId) replyTo = comments.comments[i].replies[j].replyingTo;
          }
        }
        
      }

      if(updateButton1.closest('.reply-box')){
       editedComment = {
        id: comId,
        content: currentInput1,
        createdAt: 'just now',
        score: likesAmount,
        user: {
            image:{
              png:currentUserImage,
              webp:currentUserImage
            },
            username:currentUserUsername
        },
        replies:[]
      }
    }  
    if(!updateButton1.closest('.reply-box')){   
      editedComment = {
        id: comId,
        content: currentInput1,
        createdAt: 'just now',
        score: likesAmount,
        replyingTo: replyTo,
        user: {
            image:{
              png:currentUserImage,
              webp:currentUserImage
            },
            username:currentUserUsername
        }
      }
    }


      fetch('http://localhost:3000/comments/'+comId,{
      method: 'PUT',
      body: JSON.stringify(editedComment),
      headers: {'Content-Type': 'application/json'} 
     })

      let para = document.createElement('p');
      para.setAttribute('class','comment');
      para.innerHTML =  currentInput1;
      currentUserArea1.appendChild(para);

      updateButton1.remove();
      currentTextarea1.remove();
      
    }

    document.getElementById('updatebutton').addEventListener('click', updateComment);
}

for(let i=0; i<editButtons.length; i++ ){
  editButtons[i].addEventListener('click', editComment);
}



