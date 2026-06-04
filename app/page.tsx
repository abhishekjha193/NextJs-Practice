import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

import CommandPalette from "@/components/ui/CommandPalette";
import ClientLoader from "@/components/ClientLoader";

import { getGitHubData } from "@/lib/github";

export default async function Home() {
  const github = await getGitHubData();

  return (
    <ClientLoader>
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
    </ClientLoader>
  );
}