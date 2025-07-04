import React from 'react'
import contactimage from '../Asset/contact.webp';
function Contact() {
    return (
        <div className='bg-black pt-26'>

            <section
                id="contact"
                className="w-full bg-cover bg-center bg-no-repeat py-20 px-6"
                style={{
                    backgroundImage:
                        "url('https://elements-resized.envatousercontent.com/elements-preview-images/6f9a34a2-049f-4852-9cac-acb2da0c34aa?w=1370&cf_fit=scale-down&q=85&format=auto&s=a8261d8eaa48869ca74a3ec360c7fc4b8dad01df130dca50b104de2164db3f0c')"
                }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* LEFT SIDE */}
                    <div className="text-black px-2 sm:px-4" style={{ fontFamily: "'Lobster', cursive" }}>
                        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">Get in Touch</h2>
                        <p className="text-2xl mb-6 leading-relaxed text-black/80">
                            Planning a trip? Have questions? We’re here to help you book unforgettable journeys and resolve all your travel concerns.
                        </p>

                        <ul className="space-y-3 text-1xl font-medium text-black/80"

                        >
                            <li>📩 Reach out for custom packages</li>
                            <li>📍 Ask about destinations or availability</li>
                            <li>⏱ Quick response within 24 hours</li>
                        </ul>

                        {/* Email Block Centered */}
                        <div className="mt-10 flex ">
                            <div className="bg-white rounded-xl shadow-xl px-6 py-5 text-center">
                                <h4 className="text-gray-800 font-bold text-lg mb-1">Email Us</h4>
                                <a
                                    href="mailto:vaishnavidhadge@xpertstim.com"
                                    className="text-blue-600 hover:underline text-lg font-semibold"
                                >
                                    vaishnavidhadge@xpertstim.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Hidden on Small Screens */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src={contactimage}
                            alt="Contact"
                            className="rounded-2xl w-full max-w-md shadow-2xl"
                        />
                    </div>
                </div>
            </section>

        </div>



    )
}

export default Contact