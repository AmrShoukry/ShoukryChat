import GridItem from './GridItem';

const GridData = () => {
  return (
    <div>
      <h2 className="font-bold mb-[16px] text-[20px]">Data About you</h2>
      <div className="grid grid-fit gap-4 gridData">
        <GridItem text={'Joined Server'} count={0} />
        <GridItem text={'Joined Server'} count={0} />
        <GridItem text={'Joined Server'} count={0} />
      </div>
    </div>
  );
};

export default GridData;

