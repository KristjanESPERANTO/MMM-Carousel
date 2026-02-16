const config = {
  address: "0.0.0.0",
  logLevel: [
    "INFO",
    "LOG",
    "WARN",
    "ERROR",
    "DEBUG"
  ],
  modules: [
    {
      module: "alert"
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            fetchInterval: 7 * 24 * 60 * 60 * 1000,
            symbol: "calendar-check",
            url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
          }
        ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },
    {
      module: "weather",
      position: "top_right",
      config: {
        weatherProvider: "openmeteo",
        type: "current",
        lat: 40.776676,
        lon: -73.971321
      }
    },
    {
      module: "weather",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        weatherProvider: "openmeteo",
        type: "forecast",
        lat: 40.776676,
        lon: -73.971321
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "New York Times",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: "MMM-Carousel",
      position: "bottom_bar",
      config: {
        transitionInterval: 10000,
        showPageIndicators: false,
        showPageControls: false,
        enableKeyboardControl: true,
        ignoreModules: ["clock"],
        mode: "global"
      }
    }
  ]
};

/** ************* DO NOT EDIT THE LINE BELOW */
if (typeof module !== "undefined") {
  module.exports = config;
}
