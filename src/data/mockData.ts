export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location?: string;
  year?: string;
  client?: string;
  area?: string;
  architect?: string;
  date?: string;
  description?: string[];
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'building' | 'bridge' | 'factory';
  tags: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt?: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
  image: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'WORK', href: '/work' },
  { label: 'NEWS', href: '/news' },
];

export const INTRO_CARDS = [
  {
    title: 'Who We Are',
    description: 'As a national leader in our industry, Konstruktion is revolutionizing what you expect from a contractor.',
  },
  {
    title: 'Our Mission',
    description: 'To integrate the entire building lifecycle into a seamless platform to redefine how the world builds.',
  },
  {
    title: 'Core Values',
    description: 'Passion. Integrity. Hard work. Professionalism. Caring.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'one-thousand-museum',
    title: 'One Thousand Museum',
    category: 'Interior, Projects',
    image: '/First-page-image.jpg',
    location: 'Miami, FL',
    year: '2022',
    client: 'Zaha Hadid Architects / 1000 Museum LLC',
    area: '920,000 sq ft',
    architect: 'Zaha Hadid Architects',
    date: 'October 31, 2022',
    description: [
      'Designed as a futuristic architectural landmark, One Thousand Museum features a striking exoskeleton structure that curves gracefully. It contains ultra-luxury residences with panoramic views of Biscayne Bay.',
      'Engaging customized SMART building and construction technologies, we implemented advanced structural sensor technology across all 62 stories, ensuring uncompromised safety and aerodynamic optimization.',
      'Constructed to LEED Gold Standards, the development seamlessly blends architectural artistry with state-of-the-art environmental efficiency.'
    ],
    tags: ['Residential', 'Interior', 'Projects']
  },
  {
    id: 'station-home',
    title: 'Station Home',
    category: 'Projects',
    image: '/about-building-facade.jpg',
    location: 'New York, NY',
    year: '2022',
    client: 'Cadillac Fairview Corporation Limited',
    area: '1.2 million sq ft',
    architect: 'PCL / Dattner Architects',
    date: 'October 31, 2022',
    description: [
      'A premiere address in Toronto’s Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City’s skyline.',
      'Offering 1.2 million square feet of office space, over 12,000 square feet of retail space and 339 parking stalls.'
    ],
    tags: ['Buildings', 'Projects']
  },
  {
    id: 'railcar-factory',
    title: 'Railcar Factory',
    category: 'Projects',
    image: '/about-nyc-skyline.jpg',
    location: 'Chicago, IL',
    year: '2021',
    client: 'Midwest Infrastructure Trust',
    area: '650,000 sq ft',
    architect: 'Industrial Systems Group',
    date: 'October 31, 2022',
    description: [
      'A structural masterpiece featuring a bold cantilever design that juts out over the surrounding plaza.'
    ],
    tags: ['Projects']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'buildings',
    title: 'Buildings',
    description: 'We offer substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.',
    iconName: 'building',
    tags: ['Residential', 'Houses', 'Business'],
  },
  {
    id: 'civil',
    title: 'Civil Infrastructure',
    description: 'The geographical diversity, project complexity and public nature of civil work results in an exceptionally challenging industry that demands a high level of technical construction expertise.',
    iconName: 'bridge',
    tags: ['Hospitality', 'Public Buildings', 'Museum', 'Hospitals'],
  },
  {
    id: 'industrial',
    title: 'Heavy Industrial',
    description: "Konstruktion's industrial construction companies respond to the unique needs of clients in the petrochemical, oil and gas, pulp and paper, mining, and power and renewable industries.",
    iconName: 'factory',
    tags: ['Factory', 'Refinery'],
  },
];

export const DARK_SERVICES_LIST = [
  { number: '01', title: 'Construction', desc: 'Full-scale structural buildout with state-of-the-art safety protocols and milestone monitoring.' },
  { number: '02', title: 'Pre-Construction', desc: 'Strategic planning, feasibility analysis, budgeting, site evaluation and pre-build optimization.' },
  { number: '03', title: 'Design - Build', desc: 'Turnkey architectural, structural, and interior design integration with build teams.' },
  { number: '04', title: 'Lump-Sum Contracting', desc: 'Transparent fixed-price contract management minimizing financial risk and timeline delays.' },
];

export const STATS_DATA = [
  { value: '100%', label: 'Employee Owned' },
  { value: '50+', label: 'Project in various industries' },
  { value: '20', label: 'With nearly 20 years in business' },
];

export const CLIENT_LOGOS = [
  { name: "L'OFFICIEL", subtitle: "La-féminité" },
  { name: "Salute", subtitle: "" },
  { name: "de bébé", subtitle: "" },
  { name: "Skole", subtitle: "" },
  { name: "JOLIE.", subtitle: "" },
];

export const LEADERSHIP_MEMBER = {
  name: 'John Smith',
  role: 'Executive Vice President & General Counsel',
  quote: "We favorably impact people, families and communities with our work, our projects and our charitable efforts. It's an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States.",
  image: '/red-man-image.jpg',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Executive Vice President & General Counsel',
    quote: '“We favorably impact people, families and communities with our work, our projects and our charitable efforts. It’s an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States.”',
    bio: 'Fosters legal compliance, major project risk management, and nationwide expansion strategy across all regional offices.',
    image: '/red-man-image.jpg',
  },
  {
    id: 'manuel-mitchell',
    name: 'Manuel Mitchell',
    role: 'Chief Financial Officer',
    quote: '“Wade believes the company’s shareholder program is a “gamechanger” in the construction industry. Konstruktion is 100% employee-owned, which means employees have the opportunity to invest in their own hard work.”',
    bio: 'Oversees financial operations, employee ownership equity distribution, and capital investment strategies.',
    image: '/marcus-vance.jpg',
  },
  {
    id: 'jack-morton',
    name: 'Jack Morton',
    role: 'Chief Financial Officer',
    quote: '“As owners, we are more accountable to you and more invested in your success. Across all levels of our organization, our experienced, innovative solution providers put our culture of ownership to work for you. When you succeed, we succeed.”',
    bio: 'Drives financial stewardship and ensures long-term capital allocation for landmark infrastructure projects.',
    image: '/elena-rostova.jpg',
  },
  {
    id: 'eric-green',
    name: 'Eric Green',
    role: 'Chief People Officer',
    quote: '“We favorably impact people, families and communities with our work, our projects and our charitable efforts. It’s an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States.”',
    bio: 'Leads talent acquisition, workforce safety programs, and corporate culture across nationwide job sites.',
    image: '/about-workers.jpg',
  },
  {
    id: 'emilie-torres',
    name: 'Emilie Torres',
    role: 'Executive Vice President',
    quote: '“We favorably impact people, families and communities with our work, our projects and our charitable efforts. It’s an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States.”',
    bio: 'Directs strategic expansion, regional operations, and enterprise partner alliances.',
    image: '/about-building-facade.jpg',
  },
  {
    id: 'hester-schmidt',
    name: 'Hester Schmidt',
    role: 'President of Florida Gulf Coast',
    quote: '“We favorably impact people, families and communities with our work, our projects and our charitable efforts. It’s an exciting place to be every day and our opportunities to contribute will grow as we continue to grow around the United States.”',
    bio: 'Manages coastal infrastructure development, hurricane-resilient architectural builds, and regional engineering teams.',
    image: '/construction-hero-cranes.jpg',
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'Winthrop Center Will Be One of the World’s Largest Passive House Buildings',
    date: 'AUG 18, 2026',
    category: 'Innovation, Interior',
    image: '/about-building-facade.jpg',
    excerpt: 'Winthrop Center integrates ultra-low energy passive house standards with iconic architectural design in the heart of Boston.'
  },
  {
    id: '2',
    title: 'Our approach to Sustainability',
    date: 'AUG 12, 2026',
    category: 'Report',
    image: '/about-hero-cityscape.jpg',
    excerpt: 'Detailed annual report on how our Sustainable Construction Advisors provide low-carbon frameworks across global infrastructure.'
  },
  {
    id: '3',
    title: 'Next-Generation Modular Infrastructure for Urban Rail Networks',
    date: 'JUL 28, 2026',
    category: 'Infrastructure',
    image: '/about-nyc-skyline.jpg',
    excerpt: 'Pioneering pre-fabricated steel framing that cuts metropolitan rail expansion timelines by 40%.'
  },
  {
    id: '4',
    title: 'Redefining High-Rise Safety Protocols with IoT Sensor Arrays',
    date: 'JUL 14, 2026',
    category: 'Safety & Tech',
    image: '/construction-hero-cranes.jpg',
    excerpt: 'Deploying real-time structural health monitoring across skyscraper build phases.'
  }
];

export const NEWS_ARTICLES = NEWS_DATA;

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'New York Office',
    address: '360 Lexington Avenue, 2nd Floor, New York, NY 10017',
    phone: '212.849.4800',
    email: 'office@konstruktion.com',
  },
  {
    city: 'Miami Office',
    address: 'One Biscayne Tower, Suite #2700, 2 South Biscayne Boulevard',
    phone: '305.849.4800',
    email: 'miami@konstruktion.com',
  },
  {
    city: 'New Jersey Office',
    address: 'One Evertrust Plaza, Suite 306, Jersey City, NJ 07302',
    phone: '201.849.4800',
    email: 'nj@konstruktion.com',
  },
  {
    city: 'Washington DC Office',
    address: '1250 I Street, NW, Suite 900, Washington, DC 20005',
    phone: '202.849.4800',
    email: 'dc@konstruktion.com',
  },
];

export const FOOTER_NAV_LINKS = [
  { label: 'PROJECTS', href: '/work' },
  { label: 'HISTORY', href: '/about#history' },
  { label: 'VISION', href: '/services/vision' },
  { label: 'LEADERSHIP', href: '/leadership' },
  { label: 'CAREERS', href: '/careers' },
];
