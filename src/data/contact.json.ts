export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:armandzentil@gmail.com",
  type: "Email",
  title: "armandzentil@gmail.com",
};
const two: Template = {
link: "https://twitter.com/kryptoUnikorn",
    type: "Twitter",
  title: "KryptoUnikorn",
};
const three: Template = {
link: "https://www.linkedin.com/in/armand-zentil-192b70234/",
    type: "LinkedIn",
  title: "Armand Zentil",
};
export const bytype = {
  one,
    two,
    three,
};
export const contact = Object.values(bytype);
