/**
 *  I want to Print hello world after 3 second using JS
 *  JS is Synchronous by default 
 *   var a = 90;
 *    console.log(a);
 *     function add(b) { return b+a;}
 *     console.log(add(20))
 *     console.log("Hey");
 */
const msg = "Hello world";

function logMsg () {
    console.log(msg);
}

setTimeout(logMsg,3000);
  // This is a web api -> APIs Takes time to execute -> JS Execute them async
console.log("Hi");

/**
 *  A use case 
 *  
 *  We want to show Users Timeline 
 *  1 GetUserDetails
 *  2 GetUsersPost
 *  3 GetPostsComments
 *  4 GetCommentsReplies 
 * 
 *  Order Of Execution 
 *  1 -> User details
 *  2 -> 
 *  3 
 *  4
 */

const user = {
        id: 1,
        name: "Rahul"
    }
function getUserDetails () {
    const userPromise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(user)
        },3000)
    });

    return userPromise;
}

function getUserPosts(userId) {
    if(!userId) {
        return null;
    }

    return [
        {
            id:1,
            content: "This is Rahul Post1"
        }
    ]
}

function getPostComments(postId) {
    if(!postId) {
        return []
    }

    return [{
        id: 1,
        content: "Comment1"
    }]
}

function getCommentReplies(commentId) {
    if(!commentId) {
        return []
    }

    return [{
        id: 1,
        content: "Reply 1"
    }]
}

/**
 *  Code become very difficult to understand
 *  Code become difficult to edit or debug 
 *  Reduce Code quality 
 */
setTimeout(()=> {
    const user = getUserDetails();

    setTimeout(()=> {
        const posts = getUserPosts(user.id);
        if(posts.length == 0) {
            alert("Post is empty")
        } 
        else {

        }

        setTimeout(()=> {
            const comments = getPostComments(post[0].id);

            setTimeout(()=> {
                const replyies = GetCommentsReplies(comments[0].id);
            },
            6000)
        },
        5000)
    }
    ,2000)
},3000)


/**
 *  Callback Hell 
 *  We wanted a guantee that my callback function gets called exatly once  
 */
const user = {
    id:2,
    name:"Simran"
};

const posts = [
  { id: 2, text: "My second post" },
  { id: 3, text: "My Third post" },
];
const comments =[{id:3,text:"Second comment"}];
const replies = [{id:4,text:"reply of second comment"}];

function getUserDetails () {
    const userPromise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(user)
        },3000)
    });

    return userPromise;
}


function getUserPosts(userId) {
    const postPromise =  new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(posts);
        },2000);
    });

    return postPromise;

}

function getPostComment(postId) {
     const postComment = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(comments)
        },3000)
    });

    return postComment
}

function getCommentReplies (commentId) {
     const commentReplies = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(replies)
        },3000);
    });

    return commentReplies;
}
  const userDetails = getUserDetails();
  
  userDetails
  .then((user)=> {
    console.log("Inside then",user);  // orderColdrink
    return getUserPosts(user.id);
})
.then((posts)=> {
    console.log("Inside second then",posts);
   return getPostComment(posts[1].id);
})
.then((comment)=> {
    console.log("Inside third then",comment);
    return getCommentReplies(comment[0].id);
})
.then((replies)=> console.log("Inside fourth then",replies))
  .catch((data)=> console.log("Inside catch",data));
 