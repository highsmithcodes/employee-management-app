import * as React from 'react';
import { Link } from "react-router-dom"
import map from "../Images/map-icon.svg";
import hands from "../Images/hands-icon.svg";
import people from "../Images/people-icon.svg";
import logo from "../logo.png";


export default function LandingPageNoLogin() {

    return (
        <>
             <div className="hero purple-bg">
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
        </div>

        </>
    )
}