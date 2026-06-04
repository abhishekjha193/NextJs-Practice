import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";

import { getGitHubData } from "@/lib/github";

export default async function Home() {
  const github = await getGitHubData();

  return (
    <>
      <LoadingScreen />
      <CommandPalette />
      <Navbar />

      <main className="relative">
        <HeroSection />

        <GitHubSection data={github} />

        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}