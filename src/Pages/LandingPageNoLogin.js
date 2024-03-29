import * as React from 'react';
import { Link } from "react-router-dom"
import map from "../Images/map-icon.svg";
import hands from "../Images/hands-icon.svg";
import people from "../Images/people-icon.svg";
import logo from "../logo.png";


export default function LandingPageNoLogin() {

    return (
        <>
            

    <section className="w-screen h-screen text-white overflow-hidden" style={{
     background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
   }}>
      
        <div class="relative flex justify-between item-center max-w-5xl mx-auto pt-24 sm:pt-32 lg:pt-32 lg:h-screen xl:h-screen md:h-full min-h-full flex-col">
            <div class="mx-auto place-self-center lg:col-span-7">
                <h1 class="mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-center text-white">Create, store and manage records</h1>
                <p class="max-w-2xl font-light text-gray-500 text-center mx-auto text-white">Transform your companies organization game. Keep your teams engaged and contributing to the betterment of their department.</p>
                <div class="flex justify-center items-center mx-auto py-5">
                <Link to="/login/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-rose-600 rounded-lg bg-white hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-rose-300">Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>           
                </div> 
            </div>
            <div class=" lg:mt-0 lg:col-span-5 lg:flex shadow-xl">
                <img className="rounded-tl-lg rounded-tr-lg" src="https://github.com/highsmithcodes/employee-management-app/assets/17016293/d5b5346d-43a5-4fc3-954a-9e1b24a9eac2" alt="mockup" />
            </div>                
        </div>
    </section>


    <section class="bg-gray-50">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 ">Designed for business teams like yours</h2>
                <p class="text-gray-500 sm:text-xl">Here at Kept we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Marketing</h3>
                    <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Legal</h3>
                    <p class="text-gray-500">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Business Automation</h3>
                    <p class="text-gray-500">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Finance</h3>
                    <p class="text-gray-500">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Enterprise Design</h3>
                    <p class="text-gray-500">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-100 lg:h-12 lg:w-12">
                        <svg class="w-5 h-5 text-rose-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Operations</h3>
                    <p class="text-gray-500">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                </div>
            </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 ">We <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-500 relative inline-block">
    <span class="relative text-white">didn't</span>
  </span> reinvent the wheel</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
            </div>
        </div>
    </section>

      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h2 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 ">Start your free trial today</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">Try Kept Platform for 30 days. No credit card required.</p>
                <a href="#" class="text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-500 dark:hover:bg-rose-500 focus:outline-none dark:focus:ring-rose-800">Free trial for 30 days</a>
            </div>
        </div>
    </section>
             {/* <div className="hero purple-bg">
          <div className="hero-inner w-11/12 mx-auto">
            <div className="hero-content">
              <div className="col-50">
                <div className="sub-title-small lt-purple">A knowledge base for every department</div>
                <h1 className="text-white leading-none">Kept</h1>
                <p className="text-3xl font-bold lt-purple">Keep your teams organized and up to date with the latest department news.</p>
                <div className="hero-buttons">
                  <Link className="button purple" to="/register/">Sign Up</Link>
                  <Link className="button transparent" to="/login/">Sign In</Link>
                </div>
              </div>
              <div className="col-50">

              </div>
            </div>
          </div>
        </div>


        <div className="home-steps purple-bg py-5">
          <div className="container mx-auto pb-5">
          <h2 className="text-white leading-none mt-0 text-center pb-5">Organized Department Information</h2>

            <div className="flex flex-row py-5">
              <div className="step flex-1">
                <div className="step-icon flex justify-items-center	items-center"><img src={people} width="70px" height="auto" /></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5 text-center">Create an account</h6>
                </div>
              </div>
              <div className="step flex-1">
                <div className="step-icon flex justify-items-center	items-center"><img src={hands} width="70px" /></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5 text-center">Join your department</h6>
                </div>
              </div>
              <div className="step flex-1">
                <div className="step-icon flex justify-items-center	items-center"><img src={map} width="70px" /></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5 text-center">Trade information</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-services purple-bg">
          <div className="home-services-inner purple-bg-light w-11/12 mx-auto">
            <div className="hero-content columns-2">
                <div>
                  <h2 className="text-white leading-none text-left text-center">Learn and Create to further grow your department</h2>
                </div>

            </div>

            
            <div>
            <div className="container mx-auto py-8">
              <div className="w-2/3 mx-auto">
                <details className="p-4">
                    <summary className="font-semibold text-white">What is Kept?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                          A way to keep your departments organzied with a knowledge base.
                        </p>
                    </div>
                </details>
                <details className="p-4">
                    <summary className="font-semibold text-white">
                        How do I get an account?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                        Sign up silly goose!
                        </p>
                    </div>
                </details>
                <details className="p-4">
                    <summary className="font-semibold text-white">
                        What does this site look incomplete?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                        Because it is!
                        </p>
                    </div>
                </details>
                </div>
            </div>

            <div className="container mx-auto py-5">
              <div className="text-center my-5">
                <a href="#" className="button white mr-5">View Marketplace</a>
                <a href="#" className="button transparent">Get Started</a>
              </div>
            </div>
        </div>
          </div>
        </div>

        <div className="purple-bg py-5">
          <div className="container mx-auto py-5 my-5 text-center">
            <Link to="/">
                 <img src={logo} width="100px" className='mx-auto' />
                </Link>
          </div>
        </div> */}

        </>
    )
}