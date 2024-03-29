// lib/gtag.js

export const GA_TRACKING_ID = "G-8YB54TSZXW"; // Replace with your tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ clientWindow, action, category, label }) => {
  clientWindow.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
