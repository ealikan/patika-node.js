const posts = [
    { name: "post 1", author: "Yazar 1" },
    { name: "post 2", author: "Yazar 2" },
    { name: "post 3", author: "Yazar 3" },
  ];



  const listPosts = () => {
    posts.map((posts) => {
      console.log(posts.name);
    });
  };

  console.log("ESKİ LİSTE")
  listPosts()

  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
     posts.push(newPost);
      resolve(posts)
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  addPost({ name: "post 5", author: "Yazar 5" })
    .then(() => {
        
      console.log("YENI LISTE");
      listPosts();
    })
    .catch((error) => {
      console.log(error);
    });
  