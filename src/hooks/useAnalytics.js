// Custom hook for Google Analytics tracking
export const useAnalytics = () => {
  // Function to track page views
  const trackPageView = (pageName) => {
    if (window.gtag) {
      window.gtag('config', 'G-6C4HG5DDR7', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  // Function to track events
  const trackEvent = (eventName, parameters = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        custom_parameter_1: 'greenweek_app'
      });
    }
  };

  // Function to track user interactions
  const trackInteraction = (action, category, label = '') => {
    trackEvent(action, {
      event_category: category,
      event_label: label
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackInteraction
  };
};