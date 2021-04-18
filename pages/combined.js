import Head from 'next/head'
import Card from '../components/base/Card/Card'
import Title from '../components/base/Title/Title'
import { ComboChart } from "@carbon/charts-react";

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
        <Title>Combined charts</Title>
        <Card>
          <ComboChart
            data={[
              {
                "group": "School A",
                "date": "Monday",
                "value": 10000
              },
              {
                "group": "School A",
                "date": "Tuesday",
                "value": 65000
              },
              {
                "group": "School A",
                "date": "Wednesday",
                "value": 30000
              },
              {
                "group": "School A",
                "date": "Thursday",
                "value": 49213
              },
              {
                "group": "School A",
                "date": "Friday",
                "value": 49213
              },
              {
                "group": "Temperature",
                "date": "Monday",
                "temp": 70
              },
              {
                "group": "Temperature",
                "date": "Tuesday",
                "temp": 75
              },
              {
                "group": "Temperature",
                "date": "Wednesday",
                "temp": 31
              },
              {
                "group": "Temperature",
                "date": "Thursday",
                "temp": 31
              },
              {
                "group": "Temperature",
                "date": "Friday",
                "temp": 43
              }
            ]}
            options={{
              "title": "Combo (Line + Simple bar) - custom configs",
              "axes": {
                "left": {
                  "mapsTo": "value",
                  "scaleType": "linear",
                  "title": "USA Summer School Attendance"
                },
                "right": {
                  "mapsTo": "temp",
                  "scaleType": "linear",
                  "title": "Temperature (°F)",
                  "correspondingDatasets": [
                    "Temperature"
                  ]
                },
                "bottom": {
                  "title": "Day of the Week",
                  "mapsTo": "date",
                  "scaleType": "labels"
                }
              },
              "comboChartTypes": [
                {
                  "type": "simple-bar",
                  "correspondingDatasets": [
                    "School A"
                  ]
                },
                {
                  "type": "scatter",
                  "options": {
                    "points": {
                      "radius": 5
                    }
                  },
                  "correspondingDatasets": [
                    "Temperature"
                  ]
                }
              ],
              "height": "400px"
            }}
          />
        </Card>
      </main>
    </div>
  )
}
