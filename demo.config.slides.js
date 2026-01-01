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
      module: "MMM-Remote-Control",
      disabled: true,
      config: {
        secureEndpoints: false
      }
    },
    {
      module: "MMM-SendNotificationButton",
      position: "top_right"

    },


    {
      module: "MMM-Carousel",
      position: "bottom_bar",
      config: {
        transitionInterval: 10000,
        showPageIndicators: false,
        showPageControls: false,
        ignoreModules: [
          "MMM-Remote-Control",
          "MMM-SendNotificationButton"
        ],
        mode: "positional",
        top_left: {
          enabled: true,
          ignoreModules: [],
          overrideTransitionInterval: 8000
        },
        top_right: {
          enabled: true,
          ignoreModules: [],
          overrideTransitionInterval: 12000
        },
        bottom_bar: {
          enabled: true,
          ignoreModules: [],
          overrideTransitionInterval: 15000
        },
        keyBindings: {
          enabled: true,
          mode: "DEFAULT"
        }
      }
    },
    {
      module: "MMM-KeyBindings",
      config: {
        enableKeyboard: true,
        evdev: {
          enabled: false
        }
      }
    }
  ]
};

/** ************* DO NOT EDIT THE LINE BELOW */
if (typeof module !== "undefined") {
  module.exports = config;
}
