import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor: '#0f0f0f'}}>
           <div className="container py-5">
              <div style={{color: '#FDE3A7'}}>
              <h3>Send Me A Massage</h3>
               <h4>I m available 24hrs</h4>
              </div> <br/>
           <form action="https://getform.io/f/9e45335c-0029-4c4b-b53c-cf63ca0fecf8" method="POST" className="mt-2">
                <label style={{color: '#FDE3A7'}} className="form-label">Your Name</label>
                <input  className="form-control w-25" type="text" name="name"/> <br/>
                <label style={{color: '#FDE3A7'}} className="form-label">Your Email</label> <br/>
                <input type="email" className="form-control w-50" name="email" /> <br/>
                <label style={{color: '#FDE3A7'}} className="form-label">Your Massage</label>
                <input type="text" className="form-control w-75 py-5"  name="message" /> <br/>
                <button className="btn px-5" type="submit" style={{ backgroundColor: '#00e991' }}>Send</button>
            </form>
           </div>
        </section>
    );
};

export default Contact;