import Contact from './components/Contact';
import Experience, { type ExperienceItem } from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KpiRow from './components/KpiRow';
import Navbar from './components/Navbar';
import Projects, { type Project } from './components/Projects';
import Section from './components/ui/Section';
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

const App = () => (
  <div className="min-h-screen bg-skin-base text-skin-base transition-colors duration-500">
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-[color:var(--primary-foreground)]"
    >
      Skip to content
    </a>
    <Navbar name={profile.name} />
    <main id="content" className="container pb-16 sm:pb-20 lg:pb-28">
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
      <Section
        id="highlights"
        eyebrow="Results"
        title="Operational Highlights"
        description="Core KPIs that demonstrate accuracy, responsiveness, and velocity across the warehouse."
      >
        <div className="space-y-8">
          <KpiRow kpis={kpis} />
          <ul className="grid grid-cols-1 gap-3 text-sm text-skin-muted md:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex h-full items-center gap-3 rounded-2xl border border-skin-muted bg-skin-card px-4 py-3 text-sm text-skin-base shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary"
              >
                <span aria-hidden="true" className="inline-flex h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section
        id="experience"
        eyebrow="Track Record"
        title="Experience"
        description="Leadership shaping compliant, high-velocity teams with strong partner alignment."
      >
        <Experience items={experience} />
      </Section>
      <Section
        id="projects"
        eyebrow="Initiatives"
        title="Projects"
        description="Targeted programs that delivered measurable outcomes for inventory accuracy and OTIF."
      >
        <Projects items={projects} />
      </Section>
      <Section
        id="skills"
        eyebrow="Toolkit"
        title="Skills & Compliance"
        description="Systems expertise and regulatory frameworks that keep operations audit-ready."
      >
        <Skills skills={skills} compliance={compliance} />
      </Section>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's Collaborate"
        description="Reach out for launch plans, audits, or to steady operations during rapid growth."
      >
        <Contact email={profile.email} linkedin={profile.linkedin} />
      </Section>
    </main>
    <Footer name={profile.name} location={profile.location} email={profile.email} />
  </div>
);

export default App;

