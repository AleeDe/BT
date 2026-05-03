export const CONTACT_PHONE = "+92 310 2700403";
export const CONTACT_PHONE_HREF = "tel:+923102700403";
export const CONTACT_EMAIL = "contact@babultech.com";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_HOURS = "Mon - Fri, 10am to 12pm PKT";

export const OFFICE_LOCATIONS = [
  {
    label: "IDC Office",
    address: "Karachi, Pakistan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Karachi%2C%20Pakistan",
  },
  {
    label: "Head Office",
    address: "Skardu, Gilgit-Baltistan, Pakistan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Skardu%2C%20Gilgit-Baltistan%2C%20Pakistan",
  },
];

export const DISALLOWED_EMAIL_DOMAINS = new Set([
  "aol.com",
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "icloud.com",
  "live.com",
  "me.com",
  "msn.com",
  "outlook.com",
  "proton.me",
  "protonmail.com",
  "yahoo.com",
  "ymail.com",
]);

export const DISALLOWED_MESSAGE_WORDS = ["test", "html"];
