import React from 'react';

const Contact = () => {
    return (
        <section id='contactus'>
            <div className='mb-32'>
                <div className="relative">
                    <img
                        src="https://i.ibb.co/cNyPGhd/online-education-contact2.jpg"
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <div className="relative bg-gray-900 bg-opacity-75">
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-4xl font-semibold tracking-tight text-yellow-400 sm:text-4xl sm:leading-none uppercase">
                                        Contact Us<br className="hidden md:block uppercase" />
                                        For Teachers Professional Tranning Services {' '}
                                        <span className="text-teal-accent-400 uppercase">We Provide Our Best Sevices</span>
                                    </h2>
                                    <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"                                   >
                                        Learn more
                                        <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                    </a>
                                    <div className='text-white'>
                                        <p>Address: Dhaka, Bangladesh, 1216</p>
                                        <p>Phone: +88 01838-177411</p>
                                        <p>Email: theactedu@gmail.com</p>
                                    </div>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Contact Us</h3>
                                        <form>
                                            <div className="mb-1 sm:mb-2">
                                                <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                                                    Full Name
                                                </label>
                                                <input
                                                    placeholder="Your Name"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    name="firstName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label htmlFor="lastName" className="inline-block mb-1 font-medium">
                                                    E-mail
                                                </label>
                                                <input
                                                    placeholder="Your E-mail"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    name="lastName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label htmlFor="email" className="inline-block mb-1 font-medium">
                                                    Message Us
                                                </label>
                                                <textarea
                                                    className='w-full h-16 border border-gray-300 rounded shadow-sm'
                                                    placeholder="Your message for event..."
                                                    required
                                                    type="text">
                                                </textarea>
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-purple-500 text-white">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;