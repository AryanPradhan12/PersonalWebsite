export type Category = {
    slug: string;
    title: string;
    blurb: string;
    items: string[]; // fill later with your entries
  };
  
  export const categories: Category[] = [
    { slug: "leadership", title: "Leadership", blurb: "Teams, initiatives, and roles.", items: [] },
    { slug: "internships", title: "Internships", blurb: "Industry experiences and programs.", items: [] },
    { slug: "community-service", title: "Community Service", blurb: "Service initiatives and impact.", items: [] },
    { slug: "research", title: "Research Work", blurb: "Papers, presentations, and findings.", items: [] },
    { slug: "courses", title: "Courses & Certifications", blurb: "Online courses, tests, certificates.", items: [] },
    { slug: "arts-creativity", title: "Arts & Creativity", blurb: "Personal blog, creative work.", items: [] },
    { slug: "competitions-awards", title: "Competitions & Awards", blurb: "Awards, distinctions, contests.", items: [] },
  ];  