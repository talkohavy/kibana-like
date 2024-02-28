import MyLink from '../../../components/Link';
import TabsNav from './TabsNav';

export default function TopBar({ selectedTab, setSelectedTab }) {
  return (
    <div className='w-full border-b border-b-[#d3dae6] bg-[#f7f8fc]'>
      <div className='mx-auto flex h-44 max-w-7xl flex-col items-start justify-between space-y-6 px-6 pt-6'>
        <h1 className='text-3xl font-bold'>More ways to add data</h1>

        <p>
          In addition to adding <MyLink to='#'>integrations</MyLink>, you can try our sample data or upload your own
          data.
        </p>

        <TabsNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
}
