import BarChartIcon from '../../../utils/svgs/BarChartIcon';
import KibanaIcon from '../../../utils/svgs/KibanaIcon';
import SecurityShieldIcon from '../../../utils/svgs/SecurityShieldIcon';
import WeirdMoon from '../../../utils/svgs/WeirdMoon';
import Card from './Card';

const allCards = [
  {
    color: '#fec514',
    title: 'Search',
    description: 'Create search experiences with a refined set of APIs and tools.',
    icon: {
      element: WeirdMoon,
      size: 35,
    },
  },
  {
    color: '#f04e98',
    title: 'Observability',
    description: 'Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs.',
    icon: {
      element: BarChartIcon,
      size: 35,
    },
  },
  {
    color: '#00bfb3',
    title: 'Security',
    description: 'Prevent, collect, detect, and respond to threats for unified protection across your infrastructure.',
    icon: {
      element: SecurityShieldIcon,
      size: 35,
    },
  },
  {
    color: '#07c',
    title: 'Analytics',
    description:
      'Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications.',
    icon: {
      element: KibanaIcon,
      size: 35,
    },
  },
];

export default function Section1() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Welcome home</h1>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {allCards.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
