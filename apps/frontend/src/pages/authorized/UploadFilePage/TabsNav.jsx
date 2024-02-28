import Tab from './Tab';

const tabs = [{ title: 'Sample data' }, { title: 'Upload file' }];

export default function TabsNav({ selectedTab, setSelectedTab }) {
  return (
    <div className='flex items-center justify-start gap-5'>
      {tabs.map(({ title }, index) => (
        <Tab key={index} isSelected={index === selectedTab} handleClick={() => setSelectedTab(index)} title={title} />
      ))}
    </div>
  );
}
