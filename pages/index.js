import Hero from "../components/Hero";
import Contact from "../components/Contact";
import CardSection from "../components/CardSection";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { state } = useTheme();
  const { theme, themes } = state;
  const currentTheme = themes[theme];

  return (
    <div className="flex flex-col min-h-screen ">
      <main
        className={`${theme === "dark" ? "bg-[rgb(18,17,17)] text-white" : "bg-slate-50"} text-${
          currentTheme.textColor
        } top-[80px] flex flex-col flex-grow max-w-screen `}
        style={{ paddingTop: "80px" }}
      >
        <Hero />
        <CardSection />
      </main>
      <Contact />
    </div>
  );
}
