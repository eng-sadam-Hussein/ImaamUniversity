export const dynamic = "force-static";

const base = "https://imam-university-somalia.netlify.app";

const routes = [
  "",
  "/about",
  "/about/welcome",
  "/about/memberships",
  "/about/strategic-goals",
  "/about/organizational-structure",
  "/about/accreditation",
  "/academics",
  "/academics/undergraduate",
  "/academics/postgraduate",
  "/academics/diploma",
  "/academics/calendar",
  "/admissions",
  "/admissions/requirements",
  "/admissions/fees",
  "/admissions/apply",
  "/research",
  "/research/publications",
  "/research/conferences",
  "/centers/english-language-center",
  "/centers/innovation-center",
  "/students/orientation-week",
  "/students/academic-calendar",
  "/students/campus-events",
  "/students/announcements",
  "/students/student-organizations",
  "/students/awards-scholarships",
  "/students/alumni",
  "/students/student-exchange",
  "/media/news",
  "/media/gallery",
  "/contact",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
