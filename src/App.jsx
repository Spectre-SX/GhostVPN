import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SplitText from "./blocks/TextAnimations/SplitText/SplitText.jsx";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText.jsx";
import ScrambledText from "./blocks/TextAnimations/ScrambledText/ScrambledText.jsx";
import ScrollReveal from "./blocks/TextAnimations/ScrollReveal/ScrollReveal.jsx";
import Dock from "./blocks/Components/Dock/Dock.jsx";
import SpotlightCard from "./blocks/Components/SpotlightCard/SpotlightCard.jsx";
import ProfileCard from "./blocks/Components/ProfileCard/ProfileCard.jsx";
import Iridescence from "./blocks/Backgrounds/Iridescence/Iridescence.jsx";

import NotFound from "./404/404.jsx";

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { FaGithub, FaDiscord, FaLinkedin, FaGlobe } from "react-icons/fa";

import "./App.css";

function Home() {
  const [newsItems, setNewsItems] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [errorNews, setErrorNews] = useState(null);

  const handleClick = (message) => () => console.log(message);

  const dockItems = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home clicked!") },
    { icon: <VscArchive size={18} />, label: "Archive", onClick: () => alert("Archive clicked!") },
    { icon: <VscAccount size={18} />, label: "Profile", onClick: () => alert("Profile clicked!") },
    { icon: <VscSettingsGear size={18} />, label: "Settings", onClick: () => alert("Settings clicked!") },
  ];

  useEffect(() => {
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const feedUrl = encodeURIComponent("https://techcrunch.com/feed/");

    async function fetchNews() {
      setLoadingNews(true);
      try {
        const res = await fetch(proxyUrl + feedUrl);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");

        const items = Array.from(xml.querySelectorAll("item"))
          .slice(0, 5)
          .map((item) => ({
            title: item.querySelector("title")?.textContent ?? "",
            pubDate: item.querySelector("pubDate")?.textContent ?? "",
          }));

        setNewsItems(items);
        setErrorNews(null);
      } catch (err) {
        console.error(err);
        setErrorNews("Failed to fetch news.");
      } finally {
        setLoadingNews(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      {/* Iridescent Background ONLY on Home */}
      <div className="iridescence-wrapper">
        <Iridescence color={[0.2, 0.1, 0.2]} mouseReact={false} amplitude={0.1} speed={1.0} />
      </div>

      {/* Social Side Links */}
      <div className="side-buttons left">
        <SideLink icon={<FaGithub />} label="GitHub" href="https://github.com/yourname" />
        <SideLink icon={<FaGlobe />} label="Portfolio" href="https://yourportfolio.com" />
      </div>
      <div className="side-buttons right">
        <SideLink icon={<FaDiscord />} label="Discord" href="https://discord.gg/yourserver" />
        <SideLink icon={<FaLinkedin />} label="LinkedIn" href="https://linkedin.com/in/yourname" />
      </div>

      {/* Daily News */}
      <div className="daily-news-box">
        <h2>📰 Daily Tech News 🖥️</h2>
        {loadingNews && <p>Loading...</p>}
        {errorNews && <p className="error">{errorNews}</p>}
        {!loadingNews && !errorNews && (
          <ul>
            {newsItems.map((item, i) => (
              <li key={i}>
                {item.title} — {new Date(item.pubDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="app-container">
        <SplitText
          text="GhostVPN"
          className="hero-text"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleClick("Hero animation done!")}
        />

        <BlurText
          text="Your privacy comes before ours."
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text"
          onAnimationComplete={handleClick("Blur animation done!")}
        />

        <ScrollReveal
          className="scroll-reveal-text"
          baseOpacity={1}
          enableBlur={false}
          baseRotation={0}
          blurStrength={0}
          onRevealComplete={handleClick("Scroll reveal done!")}
        >
          Why do we do this? Great question! Our developers have seen what a mass data breach can
          do, so we respect your privacy.
        </ScrollReveal>

        <div className="scramble-spotlight-wrapper">
          <ScrambledText
            className="scramble-text"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            onAnimationComplete={handleClick("Scramble animation done!")}
          >
            Your IP is always hidden to hackers, scammers or anyone else who has access to your
            connected network.
          </ScrambledText>

          <SpotlightCard className="spotlight-card" spotlightColor="rgba(255,255,255,0.15)">
            <div className="spotlight-content">
              <h3>Military Grade Protection 🛡️</h3>
              <p>Keeping your data safe and secure with top‑tier encryption.</p>
            </div>
          </SpotlightCard>
        </div>

        <div className="profile-cards-wrapper">
          <ProfileCard
            name="Spectre-SX"
            title="Owner"
            handle="spectresx"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://cdn.discordapp.com/attachments/1251949633437958276/1381245587076419654/avatar.jpg?ex=6846d0b2&is=68457f32&hm=8f480be050c67538b08b89e57d7a8bc533b1abfc3be1b76fbc53ab436d04b5ef&"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />

          <ProfileCard
            name="Enes"
            title="Co-Owner"
            handle="00enes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://cdn.discordapp.com/attachments/1251949633437958276/1381246661602312326/Schermafbeelding_2025-06-08_141918-removebg-preview.png?ex=6846d1b2&is=68458032&hm=8bb3a0a98547784681228008c5787409c9f008740941ffaeedda9300d5211752&"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>

      {/* Dock */}
      <div className="dock">
        <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </>
  );
}

function SideLink({ icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon} {label}
    </a>
  );
}

function Layout({ children }) {
  // Simple wrapper without background, just content container for other pages
  return <div className="page-content">{children}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/404" element={<Layout><NotFound /></Layout>} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Replace this: */}
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        
        {/* WITH THIS: */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>

    </BrowserRouter>
  );
}
