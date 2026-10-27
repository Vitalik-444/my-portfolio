import {FaGithub, FaLinkedin, FaTwitter, FaHeart} from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            className="border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black pt-6 pb-28"
        >
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="text-xl text-red-500 font-bold dark:text-red-400">
                        Portfolio
                    </h3>
                    <p className="text-xs dark:text-gray-300 text-gray-800">Frontend Developer</p>
                </div>
                <div className='flex gap-4'>
                    <a href="#" aria-label="GitHub" className='hover:text-red-500 transition-colors'>
                        <FaGithub size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className='hover:text-red-500 transition-colors'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className='hover:text-red-500 transition-colors'>
                        <FaTwitter size={20} />
                    </a>
                </div>
                <p className='text-xs flex items-center gap-1 dark:text-gray-300 text-gray-800'>
                    © {currentYear} Made with <FaHeart className='text-red-500'/> by <span className='font-semibold text-red-500'>
                    Vitalik
                </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer