
//search function
const searchBlogPosts = (blogPosts, searchTerm) => {
    return blogPosts?.items?.filter((post) =>
      post.fields.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  export default searchBlogPosts;