import React from 'react';
import classico from '../../images/classico (1).jpg'
import julien from '../../images/classico (2).jpg'

const blogs = [
    {
        name: "হুলেন লোপেতেগি : উত্থান-পতনের এক অনন্য উদাহরণ",
        image: julien,
        link: "pavilion.com.bd/user/feeds/5595/details"
    },
    {
        name: "এল ক্লাসিকো - স্পেনীশ দ্রুপদী লড়াই",
        image: classico,
        link: "pavilion.com.bd/user/feeds/5567/details"
    }
]

const Blogs = () => {
    return (
        <section className="container mt-5">
            <div className="text-start">
                <h3>A Versatile <span style={{color: '#00e991'}}>Content Writer</span>.</h3>
                <h4>Passionate about writing blogs about sports, media and of course technology!</h4>
            </div>
            <div className="row mt-5">
                <h5 style={{color: '#00e991'}}>Sports blogs - </h5>
                {
                    blogs.map(blog => <div className="col-md-6 mt-3">
                        <div class="card bg-dark text-white">
                            <img src={blog.image} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">{blog.name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a className="btn btn-sm px-3" style={{ backgroundColor: '#00e991' }} href={`https://${blog.link}`} >Visit site</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Blogs;