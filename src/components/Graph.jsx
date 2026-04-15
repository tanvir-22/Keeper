import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { ListContext } from '../Context/ListProvider';
import { useContext } from 'react';


const COLORS = ['#7f36f5', '#244d3f', '#37a163'];

export default function Graph() {

    const {ListArrayState} = useContext(ListContext);
    const data = [
  { name: 'Text',  value: ListArrayState.filter(item=>item.action=='Text').length },
  { name: 'Call',  value: ListArrayState.filter(item=>item.action=='Call').length },
  { name: 'Video', value: ListArrayState.filter(item=>item.action=='Video').length    },
];

  return (
   
      
      <ResponsiveContainer width='100%' height={250}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            iconType='circle'
            iconSize={8}
            formatter={(value) => (
              <span style={{ color: '#6B7280', fontSize: '13px' }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
  
  );
}