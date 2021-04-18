import Head from 'next/head'
import Button from '../components/base/Button/Button'
import Card from '../components/base/Card/Card'
import Title from '../components/base/Title/Title'
import { AreaChart } from "@carbon/charts-react";

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
        <Title>Area charts</Title>
        <Card>
          <AreaChart
            data={[
              {
                "group": "Dataset 1",
                "date": "2019-01-01",
                "value": 0
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-06",
                "value": -37312
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-08",
                "value": -22392
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-15",
                "value": -52576
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-19",
                "value": 20135
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-01",
                "value": 47263
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-05",
                "value": 14178
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-08",
                "value": 23094
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-13",
                "value": 45281
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-19",
                "value": -63954
              }
            ]}
            options={{
              // "title": "Area (time series - natural curve)",
              "axes": {
                "bottom": {
                  "title": "2019 Annual Sales Figures",
                  "mapsTo": "date",
                  "scaleType": "time"
                },
                "left": {
                  "mapsTo": "value",
                  "scaleType": "linear"
                }
              },
              "curve": "curveNatural",
              "experimental": true,
              "zoomBar": {
                "top": {
                  "enabled": true
                }
              },
              "height": "400px"
            }}>
          </AreaChart>
        </Card>
      </main>
    </div>
  )
}
