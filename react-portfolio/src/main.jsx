import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/NavSection/Navbar'
import HeroMain from './components/HeroSection/HeroMain'
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection';
import SkillsMain from './components/SkillsSection.jsx/SkillsMain'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroMain />
    <AboutMeMain />
    <HelperSection />
    <SkillsMain />
  </StrictMode>,
)
