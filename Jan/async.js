// let tododata = [];
// async function fetchTodo () {
//      const apiUrl = "https://jsonplaceholder.typicode.com/todos";
//       const res = await fetch(apiUrl);
//       todoData = await res.json();
//       console.log("Todo data",todoData);
// }


// fetchTodo();


// // function add (a) {
// //      return a+10;
// // }

// // let c = add(90);
// // console.log(c);
// // console.log("Hello");

// async function add(a) {
//   return a + 10;
// }

// let c = add(90);
// c.then((data)=> console.log(data));
// console.log(c);
// console.log("Hello");

// /**
//  *  I want to print hello world after 3 second
//  */

// function startTimerFor3Second () {
//      const timeoutPromise = new Promise((resolve,reject)=> {
//           setTimeout(()=> resolve(),3000);
//      })

//      return timeoutPromise;
// }

// async function waitFor3second () {
//      const data = await startTimerFor3Second();
//      console.log("Hello world",data);
//      console.log("heyyy")
// }

// waitFor3second();
// console.log("At global execution context after waitfor3second function call");
// function add (a){
//      return a+ 10;
// }

// add()


const user = {
     id:1,
     name:"Rahul"
};
const posts = [
  { id: 2, text: "My second post" },
  { id: 3, text: "My Third post" },
];
const comments = [{ id: 3, text: "Second comment" }];
const replies = [{ id: 4, text: "reply of second comment" }];

function getUserDetails() {
  const userPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 3000);
  });

  return userPromise;
}

function getUserPosts(userId) {
  const postPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 2000);
  });

  return postPromise;
}

function getPostComment(postId) {
  const postComment = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 3000);
  });

  return postComment;
}


const renderTimeline = async () => {
     try{
     const userProfile = await getUserDetails();
     const userPosts = await getUserPosts(userProfile.id);
     const commentsOfPost = await getPostComment(userPosts[0].id);

     const timeline =  [userProfile,userPosts,commentsOfPost];
     console.log("timeline",timeline);
     } catch(err) {
          console.error("error",err);
     }
}

renderTimeline();
[
  {
    rank: 1,
    artist: "The Weeknd",
    monthlyListeners: "94.51",
  },
  {
    rank: 2,
    artist: "Ed Sheeran",
    monthlyListeners: "82.50",
  },
  {
    rank: 3,
    artist: "Justin Bieber",
    monthlyListeners: "82.09",
  },
  {
    rank: 4,
    artist: "Taylor Swift",
    monthlyListeners: "81.37",
  },
  {
    rank: 5,
    artist: "Ariana Grande",
    monthlyListeners: "78.49",
  },
  {
    rank: 6,
    artist: "Sam Smith",
    monthlyListeners: "75.72",
  },
  {
    rank: 7,
    artist: "David Guetta",
    monthlyListeners: "70.92",
  },
  {
    rank: 8,
    artist: "Drake",
    monthlyListeners: "68.57",
  },
  {
    rank: 9,
    artist: "Rihanna",
    monthlyListeners: "68.23",
  },
  {
    rank: 10,
    artist: "Bad Bunny",
    monthlyListeners: "67.44",
  },
  {
    rank: 11,
    artist: "Coldplay",
    monthlyListeners: "65.93",
  },
  {
    rank: 12,
    artist: "Mariah Carey",
    monthlyListeners: "65.68",
  },
  {
    rank: 13,
    artist: "Harry Styles",
    monthlyListeners: "65.40",
  },
  {
    rank: 14,
    artist: "Eminem",
    monthlyListeners: "64.18",
  },
  {
    rank: 15,
    artist: "Dua Lipa",
    monthlyListeners: "61.71",
  },
  {
    rank: 16,
    artist: "Elton John",
    monthlyListeners: "61.23",
  },
  {
    rank: 17,
    artist: "Sia",
    monthlyListeners: "59.50",
  },
  {
    rank: 18,
    artist: "Lady Gaga",
    monthlyListeners: "58.47",
  },
  {
    rank: 19,
    artist: "SZA",
    monthlyListeners: "58.09",
  },
  {
    rank: 20,
    artist: " Savage",
    monthlyListeners: "56.41",
  },
];