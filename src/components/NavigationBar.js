import React from "react";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return(
        <div className="bg-indigo-500 w-full h-10">
            <nav className="flex flex-row place-content-between w-full py-2 px-2">
                <div className="flex flex-row ">
                    <Link to="/dashboard">
                    <div className="flex flex-col py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-white font-extrabold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </div>
                    </Link>
                    <div >
                        <span className="text-white font-extrabold pl-3">Welcome, Developer!</span>
                    </div>
                </div>
                <div className="w-1/3 flex flex-row justify-center">
                    <ul className="flex flex-row w-full justify-between font-semibold text-slate-100">
                        <Link to="projects">
                            <li className="">
                                <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                    <span>Projects</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="clients">
                            <li>
                                <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                    <span>Clients</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="resources">
                            <li >
                                <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                    <span>Resources</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="documents">
                            <li>
                                <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                    <span>Documents</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="/">
                            <li>
                                <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                    <button>Sign Out</button>
                                </div>
                            </li>
                        </Link>
                        <li>
                            <Link to="/settings/personalinfo">
                            <div className="rounded-lg hover:bg-indigo-400 px-2 ease-in-out duration-300 hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;