import { useCallback, useEffect, useRef, useState } from "react"
import {ChevronLeft, ChevronRight, ExternalLink, LayoutGrid, Rows3} from "lucide-react"
import wildscape from "../assets/projects/wildscape.webp"
import sylvaHearth from "../assets/projects/sylva-hearth.webp"
import nordhome from "../assets/projects/nordhome.webp"
import fishingGame from "../assets/projects/fishing-game.webp"
import worldbrief from "../assets/projects/worldbrief.webp"
import freshcart from "../assets/projects/freshcart.webp"
import panto from "../assets/projects/panto.webp"
import cryptoTracker from "../assets/projects/crypto-tracker.webp"
import profileCard from "../assets/projects/profile-card.webp"
import velora from "../assets/projects/velora.webp"
import aurel from "../assets/projects/aurel-watch.webp"
import gta6 from "../assets/projects/gta6.webp"
import obsidian from "../assets/projects/obsidian.webp"
import { FaGithub } from "react-icons/fa"

// Order: projects with both GitHub + live demo first, then partial, then the rest
const projectsData = [
    {
        id: 1,
        image: obsidian,
        title: 'OBSIDIAN — Architecture Studio',
        desc: 'Bold architecture studio landing page with oversized typography, an isometric geometry hero and a lime-on-black palette.',
        github: 'https://github.com/Vitalik-444/slate-and-lime',
        demo: 'https://obsidian-landing-nine.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 2,
        image: aurel,
        title: 'AUREL — Watch Landing',
        desc: 'Elegant Swiss-inspired watchmaking landing page with a full-screen hero, collections and a refined gold accent.',
        github: 'https://github.com/Vitalik-444/watch-landing',
        demo: 'https://watch-landing-iota.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 3,
        image: sylvaHearth,
        title: 'Sylva & Hearth Store',
        desc: 'Artisanal home-goods shop with a catalog, collections, room style quiz, wishlist and basket.',
        github: 'https://github.com/Vitalik-444/all-for-homes',
        demo: 'https://all-for-homes.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 4,
        image: nordhome,
        title: 'NordHome Furniture',
        desc: 'Furniture storefront with a hero slider, dropdown navigation, search, wishlist and cart counters.',
        github: 'https://github.com/Vitalik-444/furniture-store-web-application',
        demo: 'https://furniture-store-web-application-9xp.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 5,
        image: worldbrief,
        title: 'WorldBrief News',
        desc: 'News portal with category sections, search, bookmarks and a light/dark theme switch.',
        github: 'https://github.com/Vitalik-444/worldbrief-news-website',
        demo: 'https://worldbrief-news-website.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 6,
        image: fishingGame,
        title: 'Lake Fishing 3D',
        desc: 'First-person 3D fishing game: walk the shore, charge your cast and reel in. Levels, coins and bait.',
        github: 'https://github.com/Vitalik-444/fishing-game',
        demo: 'https://fishing-game-opal.vercel.app/',
        tags: ['Three.js', 'Javascript'],
    },
    {
        id: 7,
        image: velora,
        title: 'VELORA — Modern Essentials',
        desc: 'Colorful e-commerce store of everyday objects with a 100-product catalog, search, wishlist and bag.',
        github: '#',
        demo: 'https://e-commerce-web-application-eta.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 8,
        image: wildscape,
        title: 'WildScape — Safari Travel',
        desc: 'Luxury safari landing page with a full-screen hero slider, key stats and a booking call-to-action.',
        github: '#',
        demo: 'https://wildspace-landing.vercel.app/',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 9,
        image: gta6,
        title: 'GTA VI — Fan Portal',
        desc: 'Fan portal for Grand Theft Auto VI with a cinematic hero, release info, characters, locations and trailers.',
        github: 'https://github.com/Vitalik-444/gta-6-landing',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 10,
        image: freshcart,
        title: 'FreshCart Grocery',
        desc: 'Online grocery shop with live search, wishlist, cart and dark mode, wrapped in a fresh, playful design.',
        github: 'https://github.com/Vitalik-444/fresh-cart-web-application',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 11,
        image: panto,
        title: 'Panto Furniture Landing',
        desc: 'Minimalist furniture landing page with a hero search bar, dropdown menu and a shopping cart icon.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 12,
        image: cryptoTracker,
        title: 'Crypto Portfolio Tracker',
        desc: 'Track your crypto holdings: portfolio pie chart, sortable asset table, profit/loss and an asset picker.',
        github: '#',
        demo: '#',
        tags: ['React Js', 'Tailwind CSS', 'Javascript'],
    },
    {
        id: 13,
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

const ProjectCard = ({ project, className = '' }) => (
    <div
        className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300
        dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white
        hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col ${className}`}>
        <div className='relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900'>
            <img src={project.image} alt={project.title} loading='lazy'
                 className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className='p-6 flex flex-col justify-between grow min-h-50'>
            <div>
                <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className='text-xs leading-relaxed mb-4 dark:text-gray-400 text-gray-600 line-clamp-3'>
                    {project.desc}
                </p>
            </div>
            <div>
                <div className='flex flex-wrap gap-1.5 mb-4'>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className='text-[10px] font-medium px-2.5 py-0.5 rounded-full font-mono
                            dark:bg-red-500/10 bg-red-500/5 dark:text-red-300 text-red-600'>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex items-center gap-4 pt-2 border-t dark:border-zinc-800/80 border-gray-100'>
                    {project.github !== '#' && (
                        <a href={project.github} target='_blank' rel='noopener noreferrer'
                           className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black'>
                            <FaGithub size={14}/> Code
                        </a>
                    )}
                    {project.demo !== '#' && (
                        <a href={project.demo} target='_blank' rel='noopener noreferrer'
                           className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black'>
                            <ExternalLink size={14}/> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
)

// Endless horizontal slider with prev/next arrows
const Slider = () => {
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
        <>
            <div className='flex justify-end gap-4 mb-6'>
                <button onClick={() => handleScroll('left')} aria-label='Previous project'
                        className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                    <ChevronLeft size={22}/>
                </button>
                <button onClick={() => handleScroll('right')} aria-label='Next project'
                        className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                    <ChevronRight size={22}/>
                </button>
            </div>
            <div ref={scrollRef}
                 className="flex gap-6 scrollbar-none snap-x snap-mandatory overflow-x-auto w-full">
                {infiniteProjects.map((project, index) => (
                    <ProjectCard
                        key={`${project.id}-${index}`}
                        project={project}
                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                    />
                ))}
            </div>
        </>
    )
}

const Projects = () => {
    const [showAll, setShowAll] = useState(false)

    const toggleShowAll = () => {
        setShowAll((prev) => !prev)
        // Keep the section title in view after the layout switches
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id='projects' className='py-20 relative overflow-x-clip'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative z-10'>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-10 gap-4'>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
                        My <span className="text-red-500 dark:text-red-400">Projects</span>
                        <span className='ml-3 align-middle text-sm font-mono font-medium dark:text-gray-400 text-gray-500'>
                            ({projectsData.length})
                        </span>
                    </h2>
                    <button
                        onClick={toggleShowAll}
                        aria-expanded={showAll}
                        className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-medium
                        transition-all duration-300 dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800
                        hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                        {showAll ? <Rows3 size={18}/> : <LayoutGrid size={18}/>}
                        {showAll ? 'Show slider' : 'View all projects'}
                    </button>
                </div>

                {showAll ? (
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                ) : (
                    <Slider/>
                )}
            </div>
        </section>
    )
}

export default Projects
