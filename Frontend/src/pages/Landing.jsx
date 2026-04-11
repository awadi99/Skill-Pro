// import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import WhySkillPro from '../components/sections/WhySkillPro';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import Footer from '../components/common/Footer';


export default function Landing() {
    return (
        <div className='bg-neutral-950  overflow-x-hidden text-white contrast-120 '>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <HowItWorks />
            <WhySkillPro />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    )
}
