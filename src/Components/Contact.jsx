import React, { useState,useRef } from 'react'
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion'
import StarsCanvas from './canvas/Stars'
import { styles } from '../styles'
import { SocialIcon } from 'react-social-icons';

//template_qjk0v8a
//y_Tk5oB4t9_u_UjbB
//service_trl9hdn

function ContactCard(){
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       'service_6kg5lto',
       'template_n2w0lu5',
        {
          from_name: form.name,
          to_name: "Mrinmoy Goswami",
          from_email: form.email,
          to_email: "gmrinmoy893@gmail.com",
          message: form.message,
        },
        'y_Tk5oB4t9_u_UjbB'
      )
      .then(
        () => {
          if(form.name === "" || form.email==="" || form.message===""){
            setLoading(false)
            alert("Please fill the form completely")
          }
          else{

            setLoading(false);
            alert("Thank you. I will get back to you ASAP !");
            
          }
            setForm({
              name: "",
              email: "",
              message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops, something went wrong.Maybe Mrinmoy didn't pay the bills :( Please try again later.");
        }
      );
  };
  return(
    <motion.div
    initial={{x:-100}}
    whileInView={{x:0}}
    transition={{delay:0.5,duration:1}}
    className='flex flex-col bg-emerald-500 p-10  rounded-2xl w-full '
  >
    <p className={styles.sectionSubText}>Get in touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>

    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-4  flex flex-col gap-4'
    >
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's your good name?"
          className='bg-tertiary py-6 px-6 placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white text-md mb-4'>Your email</span>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email address?"
          className='bg-tertiary py-2 px-6 placeholder:text-sm placeholder:font-sm text-white rounded-lg outline-none border-none font-small'
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea
          rows={2}
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='What do you want to say?'
          className='bg-tertiary py-4 px-6 placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
        />
      </label>

      <button
        type='submit'
        className='bg-sky-400 hover:bg-sky-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
    <div className='mt-4  md:p-2  rounded-2xl justify-center flex'>
     <SocialIcon className=' md:bg-white  md:rounded-full mx-3'  url="https://github.com/Mrinmoy-Goswami"/>
     <SocialIcon className=' md:bg-white md:rounded-full mx-3'  url="https://www.linkedin.com/in/mrinmoy-goswami-83a1431b7/"/>
     <SocialIcon className=' md:bg-white  md:rounded-full mx-3'  url="https://www.instagram.com/go_mrin/"/>
     <SocialIcon className=' md:bg-white  md:rounded-full mx-3'  url="https://www.facebook.com/mrinmoy.goswami.5205"/>

      
    </div>
  </motion.div>

  )
}

export default function Contact() {
  return (
    <div id='contact' className='relative w-full h-screen mt-10 mb-10 scroll ' >
      <div className='h-full'>
          <StarsCanvas/>
        <div className='absolute  left-12  top-8 md:left-56 md:top-8 lg:top-12 lg:left-60 w-2/3 md:w-1/2 '>
        <ContactCard/>

        </div>
      </div>
    </div>
  )
}
