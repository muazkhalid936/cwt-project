import TimelineSection from '@/components/TimeSection';

const educationItems = [
  { dateRange: '2006-2008', title: 'Oxford University', description: 'MSC in Computer Engineer' },
  { dateRange: '2004-2006', title: 'Oxford University', description: 'MSC in Computer Engineer' },
  { dateRange: '2002-2004', title: 'Oxford University', description: 'MSC in Computer Engineer' },
];

const experienceItems = [
  { dateRange: '2010-2012', title: 'Envato Company', description: 'Full Stack Web Developer' },
  { dateRange: '2012-2014', title: 'Envato Company', description: 'Full Stack Web Developer' },
  { dateRange: '2014-2021', title: 'Envato Company', description: 'Full Stack Web Developer' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TimelineSection title="Education" items={educationItems} />
          <TimelineSection title="Experience" items={experienceItems} />
        </div>
      </div>
    </div>
  );
}
