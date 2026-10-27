import { useCallback, useEffect, useRef } from "react"
import {ChevronLeft, ChevronRight, ExternalLink} from "lucide-react"
import wildscape from "../assets/projects/wildscape.webp"
import sylvaHearth from "../assets/projects/sylva-hearth.webp"
import nordhome from "../assets/projects/nordhome.webp"
import fishingGame from "../assets/projects/fishing-game.webp"
import worldbrief from "../assets/projects/worldbrief.webp"
import freshcart from "../assets/projects/freshcart.webp"
import panto from "../assets/projects/panto.webp"
import cryptoTracker from "../assets/projects/crypto-tracker.webp"
import notesApp from "../assets/projects/notes-app.webp"
import snakeGame from "../assets/projects/snake-game.webp"
import profileCard from "../assets/projects/profile-card.webp"
import { FaGithub } from "react-icons/fa"

const projectsData = [
    {
        id: 1,
        image: wildscape,
        title: 'WildScape — Safari Travel',
        desc: 'Luxury safari landing page with a full-screen hero slider, key stats and a booking call-to-action.',
        github: '#',
        demo: 'https://wildspace-landing.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 2,
        image: sylvaHearth,
        title: 'Sylva & Hearth Store',
        desc: 'Artisanal home-goods shop with a catalog, collections, room style quiz, wishlist and basket.',
        github: 'https://github.com/Vitalik-444/all-for-homes',
        demo: 'https://all-for-homes.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 3,
        image: nordhome,
        title: 'NordHome Furniture',
        desc: 'Furniture storefront with a hero slider, dropdown navigation, search, wishlist and cart counters.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 4,
        image: fishingGame,
        title: 'Lake Fishing 3D',
        desc: 'First-person 3D fishing game: walk the shore, charge your cast and reel in. Levels, coins and bait.',
        github: '#',
        demo: '#',
        tags: ['Three.js', 'Javascript'],
    },
    {
        id: 5,
        image: worldbrief,
        title: 'WorldBrief News',
        desc: 'News portal with category sections, search, bookmarks and a light/dark theme switch.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 6,
        image: freshcart,
        title: 'FreshCart Grocery',
        desc: 'Online grocery shop with live search, wishlist, cart and dark mode, wrapped in a fresh, playful design.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 7,
        image: panto,
        title: 'Panto Furniture Landing',
        desc: 'Minimalist furniture landing page with a hero search bar, dropdown menu and a shopping cart icon.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 8,
        image: cryptoTracker,
        title: 'Crypto Portfolio Tracker',
        desc: 'Track your crypto holdings: portfolio pie chart, sortable asset table, profit/loss and an asset picker.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 9,
        image: notesApp,
        title: 'Notes App',
        desc: 'Notes app with cards: add, edit and delete thoughts and ideas in a clean, soft interface.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 10,
        image: snakeGame,
        title: 'Snake Game',
        desc: 'Classic Snake with a score counter and restart button, in a calm, minimal style.',
        github: '#',
        demo: '#',
        tags: ['Javascript', 'CSS'],
    },
    {
        id: 11,
        image: profileCard,
        title: 'Profile Page',
        desc: 'Dark profile page with biography, interests, stats and tabs for About, Posts, Photos and Contact.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
]

// Three copies of the list make the slider loop endlessly
const infiniteProjects = [...projectsData, ...projectsData, ...projectsData]

const Projects = () => {
    const scrollRef = useRef(null)

    // Width of one full set of projects (distance between the same card in two copies)
    const getSetWidth = useCallback(() => {
        const el = scrollRef.current
        if (!el || el.children.length < projectsData.length * 2) return 0
        return el.children[projectsData.length].offsetLeft - el.children[0].offsetLeft
    }, [])

    // Start in the middle copy so both directions have room to scroll
    useEffect(() => {
        const el = scrollRef.current
        if (el) el.scrollLeft = getSetWidth()
    }, [getSetWidth])

    // Silently jump back into the middle copy when the edge copies are reached
    const handleScrollEnd = useCallback(() => {
        const el = scrollRef.current
        const setWidth = getSetWidth()
        if (!el || !setWidth) return
        if (el.scrollLeft >= setWidth * 2 - 2) {
            el.scrollLeft -= setWidth
        } else if (el.scrollLeft <= 2) {
            el.scrollLeft += setWidth
        }
    }, [getSetWidth])

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        let timer
        // `scrollend` is not supported everywhere, so a debounced `scroll` is the fallback
        const onScroll = () => {
            clearTimeout(timer)
            timer = setTimeout(handleScrollEnd, 120)
        }
        el.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            clearTimeout(timer)
            el.removeEventListener('scroll', onScroll)
        }
    }, [handleScrollEnd])

    const handleScroll = (direction) => {
        const el = scrollRef.current
        if (!el || el.children.length < 2) return
        // Scroll exactly one card (width + gap), so the cards never drift out of alignment
        const step = el.children[1].offsetLeft - el.children[0].offsetLeft
        el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' })
    }

    return (
        <section id='projects' className='py-20 relative overflow-x-clip'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14
           relative z-10'>
                <div className='flex flex-col sm:flex-row justify-between
               items-center mb-16 gap-4'>
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold dark:text-white text-gray-900">
                            My <span className="text-red-500 dark:text-red-400">Projects</span>
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => handleScroll('left')}
                            aria-label='Previous project'
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200
                       border-gray-800 dark:text-white text-gray-800
                       hover:border-red-500 dark:hover:border-red-500
                       hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                            <ChevronLeft size={22}/>
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            aria-label='Next project'
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200
                       border-gray-800 dark:text-white text-gray-800
                       hover:border-red-500 dark:hover:border-red-500
                       hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                            <ChevronRight size={22}/>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="flex gap-6 scrollbar-none snap-x snap-mandatory overflow-x-auto w-full">
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group
                            rounded-3xl overflow-hidden border-2 transition-all duration-300
                            dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white
                            hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col">
                            <div className='relative overflow-hidden aspect-video
                               bg-gray-100 dark:bg-zinc-900'>
                                <img src={project.image} alt={project.title} loading='lazy'
                                     className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                            <div className='p-6 flex flex-col justify-between grow min-h-50'>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className='text-xs leading-relaxed mb-4
                                   dark:text-gray-400 text-gray-600 line-clamp-3'>
                                        {project.desc}
                                    </p>
                                </div>
                                <div>
                                    <div className='flex flex-wrap gap-1.5 mb-4'>
                                        {project.tags.map((tag, i) =>(
                                            <span
                                                key={i}
                                                className='text-[10px] font-medium px-2.5
                                           py-0.5 rounded-full font-mono
                                           dark:bg-red-500/10 bg-red-500/5
                                           dark:text-red-300 text-red-600'>
                                               {tag}
                                           </span>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-4 pt-2 border-t dark:border-zinc-800/80
                                    border-gray-100'>
                                        {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black  '>
                                            <FaGithub size={14}/> Code
                                        </a>
                                        )}
                                        {project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black  '>
                                            <ExternalLink size={14}/> Live Demo
                                        </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects