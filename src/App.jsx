import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'
import { FaGithub, FaTelegram, FaWalking } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';


import resume from "../public/Yohana_Resume.pdf"
import me from '../public/Me.png'
import design from '../public/design.png'
import code from '../public/code.png'
import voln from '../public/Voulenteer.png'
import tutor from '../public/tutor.png'
import { useState } from 'react';
import signup from '../public/signup.jpg'
import signup3 from '../public/signup3.jpg'
import signup2 from '../public/signup2.jpg'
import landpage from '../public/landing1.png'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const refreshPage =()=> {
    location.reload();
  }
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className=" min-h-screen">
            <nav className='py-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='text-3xl font-burtons'>Portfolio</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-cyan-300' href={resume} download="Yohana_Resume.pdf">Save Cv</a></li>
              </ul>
            </nav>
            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Yohana Mekuria</h2>
              <h3 className='text-2xl py-2 md:text-3x1 dark:text-white'>Full-stack Developer Specializing in Front-End Development.</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200 '>
              Committed freelancer adept at developing innovative solutions.
              Specializing in full-stack development with a strong focus on 
              client satisfaction. Passionate about delivering quality. 

                 </p>
            </div>
                {/* buttons */}
            <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
              <a href="https://www.linkedin.com/in/yohana-mekuria-90607a2ab/"><AiFillLinkedin/></a>
              <a href="https://github.com/Yohanamtesfaye"><FaGithub/></a> 
              <a href="https://t.me/YohanaETH"><FaTelegram/></a>  
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
             <img src={me}/>
            </div>
          </section>
              {/* Experience */}
          <section id='service'>
            <div>
              <h3 className='text-3xl py-1 dark:text-white mt-5 font-bold'>Experiences</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
                Currently interning as a <span className='text-teal-500'>Front-End Developer </span> with the <span className='text-teal-500'>Federal Prison  system</span>
                ,where I am part of a team developing a registration system 
                for an upcoming college program designed to educate incarcerated
                individuals.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
              I actively contributed my time and skills to 
              <a className='text-teal-500 underline' href="https://askalcharityassociation.org/"> Askal Charity Association</a> every Saturday <span className='text-teal-500'>Voulenteering </span>
                as a teacher for kids of age 10 and under since The beginning of this academic year  .
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
                <span className='text-teal-500'>Tutoring</span>  students in grades 7 and 8 through <a className='text-teal-500 underline' href="https://haletatutors.com/">Haleta Tutoring Company</a>, 
                as well as providing academic support to younger learners in grades
                2 and 3 through personal connections, has allowed me to play a 
                significant role in their educational development.
              </p>
              
                {/* services */}
            </div>
            <h3 className='text-3xl py-1 dark:text-white mt-5 font-bold'>Services I Offer</h3>
            <div className='lg:flex gap-3'>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <img src={design} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Front-End Developmnet</h3>
                <p className='py-2'> crafting visually stunning digital experiences. Specializing in creating beautiful interfaces that captivate and engage users.</p>
                <h4 className='py-4 text-teal-600'>Technologies I use</h4>
                <p className='text-gray-800 py-1'>React.js</p>
                <p className='text-gray-800 py-1'>Tailwind, Bootstrap</p>
                <p className='text-gray-800 py-1'>HTML, CSS, JavaScript, TypeScript</p>
              </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <img src={code} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Web Devlopment</h3>
                <p className='py-2'>Full-Stack Developer proficient in developing cutting-edge solutions. Skilled in front-end and back-end development.</p>
                <h4 className='py-4 text-teal-600'>Back-End technologies I use</h4>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>Node.js</p>
                <p className='text-gray-800 py-1'>Express.js</p>
                <p className='text-gray-800 py-1'>Mongo DB, MySql</p>
              </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <img src={voln} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Voulnteering</h3>
                <p className='py-2'>
                  Volunteering allows me to give back to my 
                  community while making a meaningful difference 
                  in the lives of others. </p>
                <h4 className='py-4 text-teal-600'>Places I voulenteered</h4>
                <p className='text-gray-800 py-1'>Askal Charity Association</p>
                <p className='text-gray-800 py-1'>AASTU Student Union Charity Club</p>
                <p className='text-gray-800 py-1'>HighSchool Charity Club</p>
              </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <img src={tutor} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Tutoring</h3>
                <p className='py-2'>
                  Tutoring enables me to share my expertise and passion for learning while helping students reach their academic goals.
                </p>
                <h4 className='py-4 text-teal-600'>Places I Tutored</h4>
                <p className='text-gray-800 py-1'>Haleta Tutor</p>
              </div>
            </div>
          </section>
          {/* Portfolio Section */}
          <section id='Portofolio'>
            <div>
            <h3 className='text-3xl py-1 mt-5 dark:text-gray-200 font-bold'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
              As a passionate <span className='text-teal-600'>Full-Stack Developer</span>  with a focus on 
              front-end excellence, I've crafted captivating digital 
              experiences by blending creativity with technical expertise.
              Alongside my dedication to technology, I've <span className='text-teal-600'>volunteered</span> as 
              a teacher, sharing knowledge at Askal Charity Association,
              and <span className='text-teal-600'>tutored</span> students from grades 2 to 8, fostering academic
              growth. With a commitment to innovation and community 
              impact, I'm driven to push boundaries in both education
              and technology.
            </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className=' basis-1/3 flex-1'>
                <img src={signup} alt="" />
              </div >
              <div className=' basis-1/3 flex-1'>
                <img src={signup2} className="rounded-lg object-cover" width={'100%'} heigh={'100%'}  />
              </div>
              <div className=' basis-1/3 flex-1'>
                <img src={signup3} className="rounded-lg object-cover" width={'100%'} heigh={'100%'}  />
              </div>
              <div className=' basis-1/3 flex-1'>
                <img src={landpage} className="rounded-lg object-cover" width={'100%'} heigh={'100%'}  />
              </div>
            </div>
            {/* contactMe */}
          </section>
          <section id='contactMe'>
            <div className='text-center mt-10'>
            <h3 className='text-6xl py-1 font-bold  dark:text-gray-200 '>Contact Me</h3>
              <p className='inline-block text-teal-600 text-2xl font-bold '> get in touch</p>
            </div>
            <div className='lg:flex gap-60  py-10 dark:text-gray-200'>
              <div >
                <h1 className='font-bold text-2xl py-5'>Get in touch</h1>
                <div >
                  <div className='flex '>
                    <div>
                      <FaUser className='mt-3 text-5xl text-teal-500'/>
                    </div>
                    <div className='ml-10'>
                      <p className='font-bold text-2xl py-2 '>Name</p>
                      <p className='text-xl'>Yohana Mekuria</p>
                    </div>
                  </div>
                  <div >
                    <div className='flex'>
                      <div>
                        <FaMapMarkerAlt className='mt-3 text-5xl  text-teal-600'/>
                      </div>
                      <div className='ml-10'>
                        <p className='font-bold text-2xl py-2'>Address</p>
                        <p className='text-xl'>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <FaEnvelope className='mt-3 text-5xl  text-teal-600'/>
                      </div>
                      <div className='ml-10 j'>
                        <p className='font-bold text-2xl py-2'>Email</p>
                        <p className='text-xl'>yohanatesfaye24@gmail.com</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <FaPhone className='mt-3 text-5xl text-teal-600'/>
                      </div>
                      <div className='ml-10'>
                        <p className='font-bold text-2xl py-2'>Phone</p>
                        <p className='text-xl'>+251-989002391</p>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              <div>
                  <form action="mailto:yohanatesfaye24@gmail.com" onSubmit={refreshPage} >
                      <h3 className='font-bold text-3xl py-5'>Message Me</h3>
                      <input type="text" placeholder='Name' className='border border-teal-600 md:w-96 h-10 px-3 py-6 rounded-lg mb-2'/>  <br />
                      <input type="email" placeholder='Email'className='border border-teal-600 md:w-96 h-10 px-3 py-6 rounded-lg mb-2'/> <br />
                      <input type="text" placeholder='Subject' className='border border-teal-600 md:w-96 h-10 px-3 py-6 rounded-lg mb-2'/>
                      <input type="text" placeholder='Message...' className='border border-teal-600 md:w-96 md:h-44 mb-2 px-3 py-6 rounded-lg ' /> <br />
                      <button type='submit' className='border border-teal-600 bg-teal-600 px-3 py-3 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50' onClick={()=>{alert("Thank you For contacting us!")}}>send Message</button>
                  </form>
              </div>
            </div>
          </section>
        </main>
                <section>
              <div className='flex justify-center bg-teal-500 py-5 font-bold text-white'>
               <div>
               <p>Created by <a className='text-gray-700'href="https://www.linkedin.com/in/yohana-mekuria-90607a2ab/">Yohana</a> |</p>
                </div>  
                <div className='ml-2 mr-2 mt-1'>
                  <FaRegCopyright/>
                </div>

                <p> 2024 All right reserved</p>
              </div>
          </section>
      </div>
  
    </>
  )
}

export default App
