import React from 'react';

import { ResponsivePie } from '@nivo/pie';
import pieData from '../../assets/pieData/pieData';
import { RiCustomerService2Line } from 'react-icons/ri';

// styles
import classes from './Dashboard.module.css';


const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <h1 className={classes.heading}>Welcome to Public Dashboard</h1>
      <div className={classes.dashboardContainer}>
        <div className={classes.topContainer}>
          <div className={classes.dashboardCardContainer}>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Customers</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>127618</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Today transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>12 tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Weekly Transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>1k tons</p>
                <div className={classes.box1}>
                  <p>+16%</p>
                  <p>than last week</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Monthly Transactions</p>
                  <RiCustomerService2Line className={classes.icon} />
                </div>
                <p className={classes.number}>4k tons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.lineChartBox}>
            <ResponsivePie
              data={pieData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    0.2
                  ]
                ]
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    2
                  ]
                ]
              }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: 'ruby'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'c'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'go'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'python'
                  },
                  id: 'dots'
                },
                {
                  match: {
                    id: 'scala'
                  },
                  id: 'lines'
                },
                {
                  match: {
                    id: 'lisp'
                  },
                  id: 'lines'
                },
                {
                  match: {
                    id: 'elixir'
                  },
                  id: 'lines'
                },
                {
                  match: {
                    id: 'javascript'
                  },
                  id: 'lines'
                }
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </div>
        <div className={classes.bottomContainer}>

        </div>
      </div>
    </div>
  )
}

export default Dashboard