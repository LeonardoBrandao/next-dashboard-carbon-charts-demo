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
        <Title>Teste</Title>
        <Card>
          <Button type="default">teste</Button>
          <Button type="primary">teste</Button>
          <Button type="dark">teste</Button>
        </Card>
        <Card>

          <AreaChart
            data={[
              {
                "group": "Dataset 1",
                "date": "2019-01-01T02:00:00.000Z",
                "value": 0
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-06T02:00:00.000Z",
                "value": -37312
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-08T02:00:00.000Z",
                "value": -22392
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-15T02:00:00.000Z",
                "value": -52576
              },
              {
                "group": "Dataset 1",
                "date": "2019-01-19T02:00:00.000Z",
                "value": 20135
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-01T02:00:00.000Z",
                "value": 47263
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-05T02:00:00.000Z",
                "value": 14178
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-08T02:00:00.000Z",
                "value": 23094
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-13T02:00:00.000Z",
                "value": 45281
              },
              {
                "group": "Dataset 2",
                "date": "2019-01-19T02:00:00.000Z",
                "value": -63954
              }
            ]}
            options={{
              "title": "Area (time series - natural curve)",
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
              "height": "400px"
            }}>
          </AreaChart>
        </Card>
      </main>
    </div>
  )
}
