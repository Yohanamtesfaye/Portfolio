import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';


import resume from "../public/Yohana_Resume.pdf"
import me from '../public/Me.png'
import design from '../public/design.png'
import code from '../public/code.png'
import voln from '../public/Voulenteer.png'
import tutor from '../public/tutor.png'
import { useState } from 'react';
import federal from '../public/Federal.png'
import AtomSquad from '../public/AtomSquad.png'
import logo from '../public/logo.jpg'
import movie from '../public/movie.png'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const refreshPage =()=> {
    location.reload();
  }
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 w-full'>
          <section className=" min-h-screen">
            <nav className='py-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='text-3xl font-burtons'>Portfolio</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '/></li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-cyan-300' href={resume} download="Yohana_Resume.pdf">Save Cv</a></li>
              </ul>
            </nav>
            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Yohana Mekuria</h2>
              <h3 className='text-2xl py-2 md:text-3x1 dark:text-white'>Full-stack Developer Specializing in Front-End Development.</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200 '>
              Committed freelancer adept at developing innovative solutions.
              Specializing in frontend development with a strong focus on 
              client satisfaction. Passionate about delivering quality. 

                 </p>
            </div>
                {/* buttons */}
            <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400 '>
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
                Currently working as a <span className='text-teal-500'>Front-End Developer </span> with the <span className='text-teal-500'>Federal Prison  system</span>
                ,where I am part of a team developing a registration system 
                for an upcoming college program designed to educate incarcerated
                individuals.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
                I interned as a front-end developer at <a className='text-teal-500 underline'   href="https://dynamictechnologieset.com">Dynamic Technologies</a>  during the summer of 2016 E.C (2024 G.C). 
                During this time, I enhanced my technical expertise in Next.js, Git, and GitHub, while also improving my collaboration and teamwork skills.
              </p>
                
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
               Since october 2023, I have actively contributed my time and skills to 
              <a className='text-teal-500 underline' href="https://askalcharityassociation.org/"> Askal Charity Association</a> <span className='text-teal-500'>Voulenteering </span>
                as a teacher for kids of age 10 and under. I also became a member of the organization in mid-2024 and have been actively involved ever since.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
              I have completed an intensive six-month study program at <a className='text-teal-500 underline' href="https://www.linkedin.com/company/gdsc-aastu/">GDSC AASTU</a>, where I dedicated myself to mastering React.js for front-end development.
               The experience has been invaluable, providing me with the expertise and confidence needed to tackle complex projects. 
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
               At <span className='text-teal-500'>SheCodes AASTU</span>, I mentored junior software engineers, guiding them through web development principles and best practices. I helped them improve their skills and grow in the field.
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
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  hover:bg-gradient-to-r from-teal-300 to-teal-50'>
                <img src={design} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Front-End Developmnet</h3>
                <p className='py-2'> crafting visually stunning digital experiences. Specializing in creating beautiful interfaces that captivate and engage users.</p>
                <h4 className='py-4 text-teal-600'>Technologies I use</h4>
                <p className='text-gray-800 py-1'>React.js</p>
                <p className='text-gray-800 py-1'>Tailwind, Bootstrap</p>
                <p className='text-gray-800 py-1'>HTML, CSS, JavaScript</p>
              </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white hover:bg-gradient-to-r from-teal-50 to-teal-300'>
                <img src={code} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Web Devlopment</h3>
                <p className='py-2'>Full-Stack Developer proficient in developing cutting-edge solutions. Skilled in front-end and back-end development.</p>
                <h4 className='py-4 text-teal-600'>Back-End technologies I use</h4>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>Node.js</p>
                <p className='text-gray-800 py-1'>Express.js</p>
                <p className='text-gray-800 py-1'>MySql</p>
              </div>
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white hover:bg-gradient-to-r from-teal-300 to-teal-50'>
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
              <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white hover:bg-gradient-to-r from-teal-50 to-teal-300'>
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
            <h3 className='text-3xl py-1 mt-5 dark:text-gray-200 font-bold'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-serif'>
              In my portfolio, I showcase a variety of projects, including an <span className='text-teal-600'> Abugida Tutors website</span>  built as a team project for our final hackathon project at GDSC AASTU,
              a <span className='text-teal-600'>Nuclear Energy website</span> developed in a 24-hour hackathon, a <span className='text-teal-600'>CineSphere Movies</span> recommendation system created as a capstone project for GDSC AASTU,
              a <span className='text-teal-600 '>Federal Prison registration system </span> developed collaboratively with a team.  Additionally, my GitHub repository houses various school and personal projects, reflecting my ongoing learning and growth in web development.
            </p>
            </div>
            <div className='flex flex-col py-10'>
            <div className='lg:flex shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={logo}   />
                </div>
                <div>
                  <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Abugida Tutors</h3>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-800 font-serif mb-5'>
                  At the GDSC AASTU hackathon, our project "Abugida Tutors" secured third place. I led the front-end team and collaborated with the backend team. Our project helps to connect university students who are seeking for financial independence through teaching with parents looking to educate their kids. 
                  </p>
                  <div>
                  </div>
                  <div className='lg:flex'>
                    <div className='border border-teal-600 bg-teal-600 px-7 py-1 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50 mr-5' ><a  href="https://github.com/Yohanamtesfaye/Abogida-Tutors">View in Github</a></div>   
                    <div className='border hover:border-teal-600 hover:bg-teal-600 px-14 max-md:mt-5 py-1 bg-teal-50 text-teal-600 rounded-lg font-bold hover:text-gray-50'><a href="https://abogida.vercel.app/">View Demo</a></div>
                  </div>
                </div>
              </div>   
            <div className='lg:flex shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div>
                  <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Necular Energy Website</h3>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-800 font-serif mb-5'>
                  The Peoples' Friendship University of Russia, MEPHI, and AASTU organized a 24-hour hackathon supported by Rosatom. Our team developed a website with in 24 hours, which focused on promoting nuclear energy through digital tools on interactive platforms which secured us 2nd place.
                  </p>
                  <div className='lg:flex'>
                    <div className='border border-teal-600 bg-teal-600 px-7 py-1 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50 mr-5' ><a  href="https://github.com/YegetaTaye/Atom-Squad-HackAtom">View in Github</a></div>   
                    <div className='border hover:border-teal-600 hover:bg-teal-600 px-7 max-md:mt-5 py-1 bg-teal-50 text-teal-600 rounded-lg font-bold hover:text-gray-50'><a href="https://stellar-starburst-21d4f3.netlify.app/">View Demo</a></div>
                  </div>
                </div>
                <div className='max-w-full max-h-full mx-auto max-md:mt-10 ml-10'>
                   <img src={AtomSquad}   />
                </div>
              </div>
              <div className='lg:flex shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={federal}  width={'1700px'} />
                </div>
                <div >
                  <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Registration System</h3>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-800 font-serif mb-5'>
                      I've been part of a dedicated team of six, as a Front-End Developer collaborating closely on a registration system for an upcoming college program,
                      for the Federal Prsion Located in Kality,While I can't share the GitHub link as it's a private project, You can explore the evidence of my collaborative
                       efforts on my GitHub account; feel free to check it out.
                  </p>
                  <a  className='border border-teal-600 bg-teal-600 px-7 py-1 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50 ' href="https://github.com/Yohanamtesfaye">View in Github</a>
                </div>
              </div>
            </div>
            <div className='lg:flex shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div>
                  <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>CineSphere Movies</h3>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-800 font-serif mb-5'>
                      As a team of three, we created a movie recommendation system as our capstone project for GDSC AASTU. This system suggests the latest popular movies and allows users to mark their favorites after logging in.
                  </p>
                  <div className='lg:flex'>
                    <div className='border border-teal-600 bg-teal-600 px-7 py-1 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50 mr-5' ><a  href="https://github.com/FikruDemlew/GDSC-Team-4">View in Github</a></div>   
                    <div className='border hover:border-teal-600 hover:bg-teal-600 px-7 max-md:mt-5 py-1 bg-teal-50 text-teal-600 rounded-lg font-bold hover:text-gray-50'><a href="https://cinesphere-one.vercel.app">View Demo</a></div>
                  </div>
                </div>
                 <div className='max-w-full max-h-full mx-auto max-md:mt-10 ml-10'>
                   <img src={movie}   />
                </div>
              {/* </div>
              <div className='lg:flex shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={ecommerce}   />
                </div> */}
                {/* <div>
                  <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>E-commerce Website</h3>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-800 font-serif mb-5'>
                  My first interactive website was an e-commerce platform, where I delved into the core fundamentals of state management. Through this project, I gained invaluable insights into handling data and maintaining application state dynamically.
                  </p>
                  <div className='lg:flex'>
                    <div className='border border-teal-600 bg-teal-600 px-7 py-1 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50 mr-5' ><a  href="https://github.com/Yohanamtesfaye/Gdsc-Ecommerce">View in Github</a></div>   
                    <div className='border hover:border-teal-600 hover:bg-teal-600 px-7 max-md:mt-5 py-1 bg-teal-50 text-teal-600 rounded-lg font-bold hover:text-gray-50'><a href="https://admirable-mermaid-56a9f2.netlify.app/">View Demo</a></div>
                  </div>

                </div> */}
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
                      <FaUser className='mt-3 lg:text-5xl max-md:text-4xl text-teal-500'/>
                    </div>
                    <div className='ml-10'>
                      <p className='font-bold lg:text-2xl py-2 '>Name</p>
                      <p className='lg:text-xl'>Yohana Mekuria</p>
                    </div>
                  </div>
                  <div >
                    <div className='flex'>
                      <div>
                        <FaMapMarkerAlt className='mt-3 lg:text-5xl max-md:text-4xl  text-teal-600'/>
                      </div>
                      <div className='ml-10'>
                        <p className='font-bold lg:text-2xl py-2'>Address</p>
                        <p className='lg:text-xl'>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <FaEnvelope className='mt-3 lg:text-5xl max-md:text-4xl  text-teal-600'/>
                      </div>
                      <div className='ml-10 j'>
                        <p className='font-bold lg:text-2xl py-2'>Email</p>
                        <p className='lg:text-xl'>yohanatesfaye24@gmail.com</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <FaPhone className='mt-3 lg:text-5xl max-md:text-4xl text-teal-600'/>
                      </div>
                      <div className='ml-10'>
                        <p className='font-bold lg:text-2xl py-2'>Phone</p>
                        <p className='lg:text-xl'>+251-989002391</p>
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
                      <button type='submit' className='border border-teal-600 bg-teal-600 px-3 py-3 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-bold text-gray-50'>send Message</button>
                  </form>
              </div>
            </div>
          </section>
        </main>
                <section>
              <div className='flex justify-center bg-teal-500 py-5 font-bold text-white w-full'>
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
