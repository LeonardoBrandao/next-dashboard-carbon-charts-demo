import Head from 'next/head'
import Card from '../components/base/Card/Card'
import Flex from '../components/base/Flex/Flex';
import Title from '../components/base/Title/Title'
import { DonutChart, GaugeChart } from "@carbon/charts-react";

import s from '../styles/Home.module.scss'
import "@carbon/charts/styles.css";

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Dashboard demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Title>Miscelaneous charts</Title>
        <div className={s.grid}>
        <Card>
          <Flex>
            <DonutChart
              data={[
                {
                  "group": "2V2N 9KYPM version 1",
                  "value": 20000
                },
                {
                  "group": "L22I P66EP L22I P66EP L22I P66EP",
                  "value": 65000
                },
                {
                  "group": "JQAI 2M4L1",
                  "value": 75000
                },
                {
                  "group": "J9DZ F37AP",
                  "value": 1200
                },
                {
                  "group": "YEL48 Q6XK YEL48",
                  "value": 10000
                },
                {
                  "group": "Misc",
                  "value": 25000
                }
              ]}
              options={{
                "resizable": true,
                "donut": {
                  "center": {
                    "label": "Browsers"
                  },
                  "alignment": "center"
                },
                "height": "400px"
              }}
            />
          </Flex>
        </Card>
        <Card>
          <Flex>
            <GaugeChart
              data={[
                {
                  "group": "value",
                  "value": 42
                },
                {
                  "group": "delta",
                  "value": -13.37
                }
              ]}
              options={{
                "resizable": true,
                "height": "250px",
                "width": "100%",
                "gauge": {
                  "type": "semi",
                  "status": "danger",
                  "alignment": "center"
                }
              }}
            />
          </Flex>
        </Card>
        </div>
      </main>
    </div>
  )
}
