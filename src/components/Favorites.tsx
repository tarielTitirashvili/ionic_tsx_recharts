import { IonItem } from '@ionic/react'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { DATA_OBJ } from '../utils/MuTypes'

interface Props {
  
}

const data01: Array<DATA_OBJ> = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const data02: Array<DATA_OBJ> = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
]
const COLORS: Array<string> = [ '#00C49F', '#FFBB28', '#FC0000', '#C553BA']

const COLORS01: Array<string> = ['#00C49F','#7fe1cf', '#FEE700', '#FFBB28', '#FEBE07', '#FEA900', '#FE8A00', '#FC0000', '#FC0000' , '#B60F79', '#C553BA', '#940489' ]

export const Favorites: React.FC = (props: Props) => {
  let demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24'

  return (
    <>
      <IonItem>
        <ResponsiveContainer width="100%" height={600}>
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey="value"
              cx="25%"
              cy="50%"
              outerRadius={75}
              fill="#8884d8"
            >
              {data01.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index]}/>
              ))}
            </Pie>
            <Pie
              data={data02}
              dataKey="value"
              cx="25%"
              cy="50%"
              innerRadius={90}
              outerRadius={110}
              fill="#82ca9d"
              label
            >
              {data02.map((entry: any, index: number) => (<Cell key={`cell-${index}`} fill={COLORS01[index]}/>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </IonItem>
    </>
  )
}
