import toast from "react-hot-toast";

export const getBlogs = () =>{
    let blogs = [];
    const storeBlogs = localStorage.getItem('blogs');
    if(storeBlogs){
        blogs = JSON.parse(storeBlogs);
    }
    return blogs;
};

export const saveBlogs = (blog) =>{
    let blogs = getBlogs();
    const isExists = blogs.find(b=>b.id===blog.id);
    if(isExists){
       return toast.error("Blogs already bookmarked");
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success("Blog bookmarked successfully");
}

export const removeBlog = (id) =>{
    let blogs = getBlogs();
    let remaining = blogs.map(b=>b.id!==id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success("Blog remove successfully");
}