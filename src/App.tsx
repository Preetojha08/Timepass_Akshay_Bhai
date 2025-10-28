import Contact from './components/Contact';
import Experience, { type ExperienceItem } from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KpiRow from './components/KpiRow';
import Navbar from './components/Navbar';
import Projects, { type Project } from './components/Projects';
import Skills from './components/Skills';

const profile = {
  name: 'Akshay Dhoundiyal',
  role: 'Warehouse Operations Manager',
  location: 'Scarborough, ON',
  email: 'akkydhons@gmail.com',
  phone: '(437) 339-0089',
  linkedin: 'https://linkedin.com/in/akshay-d-081565154',
  resumeUrl: '#',
  avatarUrl: '/avatar.jpg',
};

const highlights = [
  'Raised inventory accuracy to 99.4%',
  'Improved OTIF to 97.8%',
  'Cut dock-to-stock to 4.2 hours',
  'Reduced error rate 18% through 5S refresh',
];

const kpis = [
  { label: 'Inventory Accuracy', value: '99.4%' },
  { label: 'OTIF', value: '97.8%' },
  { label: 'Pick Rate', value: '140/hr' },
  { label: 'Dock-to-Stock', value: '4.2h' },
];

const experience: ExperienceItem[] = [
  {
    company: 'NowPac Inc.',
    title: 'Warehouse Operations Manager',
    period: 'Feb 2024 - Sept 2025',
    bullets: [
      'Owned SLAs and KPIs while aligning operations to the growth roadmap',
      'Passed all GMP, HACCP, SQF, and Health Canada audits without findings',
      'Optimized carrier and 3PL mix to reduce freight cost and detention time',
      'Partnered with QA on deviations, CAPA, and SOP lifecycle',
    ],
  },
  {
    company: 'ShuffleSpace',
    title: 'Warehouse Supervisor',
    period: 'May 2022 - Nov 2023',
    bullets: [
      'Led inbound to outbound flow; delivered 18% error reduction via 5S and safety training',
      'Leveraged WMS and Xero dashboards for labor and space optimization',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'Cycle Count Overhaul',
    result: 'Inventory accuracy 99.4%',
    detail: 'Built risk-based frequency model, layered RCA, and CAPA follow-through',
  },
  {
    title: 'Load and Carrier Sequencing',
    result: 'OTIF 97.8%',
    detail: 'Implemented scorecards, lane leveling, and proactive detention reviews',
  },
];

const skills = [
  'WMS',
  'SAP',
  'Odoo',
  'OrderGrid',
  'MaintainX',
  'Xero',
  'Excel',
  'PowerPoint',
  '5S',
  'Kanban',
  'SOPs',
  'RCA',
  'CAPA',
];

const compliance = ['GMP', 'HACCP', 'SQF', 'Health Canada', 'WHMIS', 'OH&S'];

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">{eyebrow}</p>
    <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h2>
    {description ? <p className="text-base text-slate-600 dark:text-slate-400 sm:text-lg">{description}</p> : null}
  </div>
);

const HighlightsList = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400"
      >
        <span aria-hidden="true" className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SkillsGrid = () => (
  <div className="space-y-6 md:space-y-8">
    <SectionHeading
      eyebrow="Toolkit"
      title="Skills & Compliance"
      description="Systems expertise and regulatory frameworks that keep operations audit-ready."
    />
    <Skills skills={skills} compliance={compliance} />
  </div>
);

const ProjectsGrid = () => (
  <div className="space-y-6 md:space-y-8">
    <SectionHeading
      eyebrow="Initiatives"
      title="Projects"
      description="Targeted programs that delivered measurable outcomes for inventory accuracy and OTIF."
    />
    <Projects items={projects} />
  </div>
);

const ExperienceGrid = () => (
  <div className="space-y-6 md:space-y-8">
    <SectionHeading
      eyebrow="Track Record"
      title="Experience"
      description="Leadership shaping compliant, high-velocity teams with strong partner alignment."
    />
    <Experience items={experience} />
  </div>
);

const HighlightsSection = () => (
  <div className="space-y-6 md:space-y-8">
    <SectionHeading
      eyebrow="Results"
      title="Operational Highlights"
      description="Core KPIs that demonstrate accuracy, responsiveness, and velocity across the warehouse."
    />
    <KpiRow kpis={kpis} />
    <HighlightsList items={highlights} />
  </div>
);

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar name={profile.name} />
      <main id="content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="about" className="section">
          <Hero
            name={profile.name}
            role={profile.role}
            location={profile.location}
            email={profile.email}
            phone={profile.phone}
            linkedin={profile.linkedin}
            resumeUrl={profile.resumeUrl}
            avatarUrl={profile.avatarUrl}
          />
        </section>
        <section id="highlights" className="section">
          <HighlightsSection />
        </section>
        <section id="experience" className="section">
          <ExperienceGrid />
        </section>
        <section id="projects" className="section">
          <ProjectsGrid />
        </section>
        <section id="skills" className="section">
          <SkillsGrid />
        </section>
        <section id="contact" className="section">
          <Contact email={profile.email} linkedin={profile.linkedin} />
        </section>
      </main>
      <Footer name={profile.name} location={profile.location} email={profile.email} />
    </>
  );
}

