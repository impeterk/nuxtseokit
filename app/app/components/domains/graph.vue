<script setup lang="ts">
import {
  VisXYContainer,
  VisLine,
  VisAxis,
  VisCrosshair,
  VisTooltip,
  VisScatter,
} from "@unovis/vue";
import { Scatter } from "@unovis/ts";

type DataRecord = { year: number; "Import Growth Rate": number };
const data = reactive<DataRecord[]>([
  {
    year: 1970,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Import Growth Rate": 1.67,
  },
  {
    year: 1975,
    "Import Growth Rate": 1.64,
  },
  {
    year: 1976,
    "Import Growth Rate": 1.62,
  },
  {
    year: 1977,
    "Import Growth Rate": 1.69,
  },
  {
    year: 1978,
    "Import Growth Rate": 1.7,
  },
  {
    year: 1979,
    "Import Growth Rate": 1.67,
  },
  {
    year: 1980,
    "Import Growth Rate": 1.7,
  },
  {
    year: 1981,
    "Import Growth Rate": 1.72,
  },
  {
    year: 1982,
    "Import Growth Rate": 1.73,
  },
  {
    year: 1983,
    "Import Growth Rate": 1.73,
  },
  {
    year: 1984,
    "Import Growth Rate": 1.78,
  },
  {
    year: 1985,
    "Import Growth Rate": 1.81,
  },
  {
    year: 1986,
    "Import Growth Rate": 1.89,
  },
  {
    year: 1987,
    "Import Growth Rate": 1.91,
  },
  {
    year: 1988,
    "Import Growth Rate": 1.94,
  },
  {
    year: 1989,
    "Import Growth Rate": 1.94,
  },
  {
    year: 1990,
    "Import Growth Rate": 1.97,
  },
  {
    year: 1991,
    "Import Growth Rate": 1.99,
  },
  {
    year: 1992,
    "Import Growth Rate": 2.12,
  },
  {
    year: 1993,
    "Import Growth Rate": 2.13,
  },
  {
    year: 1994,
    "Import Growth Rate": 2.15,
  },
  {
    year: 1995,
    "Import Growth Rate": 2.17,
  },
  {
    year: 1996,
    "Import Growth Rate": 2.2,
  },
  {
    year: 1997,
    "Import Growth Rate": 2.15,
  },
  {
    year: 1998,
    "Import Growth Rate": 2.07,
  },
  {
    year: 1999,
    "Import Growth Rate": 2.05,
  },
  {
    year: 2000,
    "Import Growth Rate": 2.07,
  },
  {
    year: 2001,
    "Import Growth Rate": 2.08,
  },
  {
    year: 2002,
    "Import Growth Rate": 2.1,
  },
  {
    year: 2003,
    "Import Growth Rate": 2.15,
  },
  {
    year: 2004,
    "Import Growth Rate": 2.21,
  },
  {
    year: 2005,
    "Import Growth Rate": 2.23,
  },
  {
    year: 2006,
    "Import Growth Rate": 2.29,
  },
  {
    year: 2007,
    "Import Growth Rate": 2.34,
  },
  {
    year: 2008,
    "Import Growth Rate": 2.36,
  },
  {
    year: 2009,
    "Import Growth Rate": 2.36,
  },
  {
    year: 2010,
    "Import Growth Rate": 2.35,
  },
  {
    year: 2011,
    "Import Growth Rate": 2.34,
  },
  {
    year: 2012,
    "Import Growth Rate": 2.39,
  },
  {
    year: 2013,
    "Import Growth Rate": 2.3,
  },
  {
    year: 2014,
    "Import Growth Rate": 2.35,
  },
  {
    year: 2015,
    "Import Growth Rate": 2.39,
  },
  {
    year: 2016,
    "Import Growth Rate": 2.41,
  },
  {
    year: 2017,
    "Import Growth Rate": 2.44,
  },
  {
    year: 2018,
    "Import Growth Rate": 2.45,
  },
  {
    year: 2019,
    "Import Growth Rate": 2.47,
  },
  {
    year: 2020,
    "Import Growth Rate": 2.48,
  },
  {
    year: 2021,
    "Import Growth Rate": 2.51,
  },
]);

const triggers = {
  [Scatter.selectors.point]: (d) =>
    `<span>x :  ${d.year} <br/> y :  ${d["Import Growth Rate"]} </span>`,
};
</script>

<template>
  <div class="grid grid-cols-3 gap-0">
    <UCard
      :ui="{ divide: 'divide-y-0', rounded: 'rounded-r-none' }"
      class="col-span-2"
    >
      <template #header>
        <h2 class="font-semibold text-2xl">Crawling history</h2>
      </template>
      <VisXYContainer :data="data">
        <VisLine
          :x="(d) => d.year"
          :y="(d) => d['Import Growth Rate']"
          curve-type="linear"
        />
        <VisScatter :x="(d) => d.year" :y="(d) => d['Import Growth Rate']" />
        <VisAxis type="x" />
        <VisAxis type="y" />
        <VisTooltip :triggers />
        <VisCrosshair />
      </VisXYContainer>
    </UCard>
    <UCard
      :ui="{ divide: 'divide-y-0', rounded: 'rounded-l-none' }"
      class="col-span-1"
    >
      <template #header>
        <h2 class="font-semibold text-2xl">Details</h2>
      </template>
      <div class="prose">
        <ul>
          <li>Something random</li>
          <li>Something random</li>
          <li>Something random</li>
          <li>Something random</li>
          <li>Something random</li>
          <li>Something random</li>
        </ul>
      </div>
    </UCard>
  </div>
</template>

<style scoped></style>
