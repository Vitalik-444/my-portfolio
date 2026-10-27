import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import contactImg from '../assets/contact.avif'

const inputClass = 'w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400'

const Contact = () => {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: connect a real backend here (Formspree, EmailJS, your own API…)
        e.currentTarget.reset()
        setSent(true)
        setTimeout(() => setSent(false), 5000)
    }

    return (
        <section id='contact' className='py-20 relative overflow-x-clip'>
            <div className='container mx-auto px-6 max-w-6xl relative z-10'>
                <div className='text-center mb-6' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900'>
                        Get in <span className='text-red-500 dark:text-red-400'>Touch</span>
                    </h2>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
                        data-aos="fade-right"
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            aria-label='Name'
                            autoComplete='name'
                            className={inputClass}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            aria-label='Email'
                            autoComplete='email'
                            className={inputClass}
                            required
                            data-aos='fade-up'
                            data-aos-delay='200'
                        />
                        <textarea
                            rows="5"
                            name='message'
                            placeholder='Message'
                            aria-label='Message'
                            className={inputClass}
                            required
                            data-aos='fade-up'
                            data-aos-delay='300'
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-red-600 hover:bg-red-700 active:scale-95 transition-all cursor-pointer w-full sm:w-fit"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                        {sent && (
                            <p role="status" className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                                <CheckCircle size={16} />
                                Thanks! Your message has been sent.
                            </p>
                        )}
                    </form>

                    <div className='flex justify-center w-full relative order-1 lg:order-2' data-aos='fade-left'>
                        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                            <div className='w-75 h-90 rounded-full bg-red-400/65 dark:bg-red-500/40 blur-3xl scale-110'></div>
                        </div>
                        <img
                            src={contactImg}
                            alt="Contact illustration"
                            className='w-full max-w-96 h-110 object-cover rounded-3xl relative z-10'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact