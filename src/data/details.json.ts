export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://searchyellowdirectory.com",
  title: "Owner, Developer, SYD.com",
  location: "Los Angeles, CA",
  date: "28.09.2017 - Current",
};
const two: Template = {
link: "https://heavysetrecordsnyc.com",
  title: "Founder, Heavyset Records NYC",
  location: "Brooklyn, NY",
  date: "01.04.20216 - 01.04.2019",
};
const three: Template = {
link: "https://strangecustoms.com",
  title: "Director/Producer/Co-Founder, Strange Customs",
  location: "Toronto / New York / Los Angeles",
  date: "01.07.2011 - 01.07.2016",
};
const four = {
link: "https://www.vicemediagroup.com/",
title: "Social Media Strategist, VICE",
location: "Brooklyn, NY",
date: "16.05.2011",
};

const five = {
link: "https://www.youtube.com/watch?v=6WJFjXtHcy4",
title: "Producer/Co-Director, Kreayshawn - Gucci Gucci",
location: "Los Angeles, CA",
date: "16.05.2011",
};

const six = {
link: "https://soroc.com/",
title: "Billing Analyst, Soroc Technologies Inc. ",
location: "Toronto, CA",
date: "04.06.2010",
};



export const bytitle = {
  one,
    two,
    three,
  four,
five,
six,
};
export const details = Object.values(bytitle);
