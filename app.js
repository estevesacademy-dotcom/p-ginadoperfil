const LINKS = {
  CONSULTORIA_URL: "https://consultoriahero.com/planos",
  QUIZ_URL: "https://quizconsultoriahero.netlify.app/",
};

const destinations = {
  consultoria: () => LINKS.CONSULTORIA_URL,
  quiz: () => LINKS.QUIZ_URL,
};

function trackLink(eventName) {
  if (!eventName) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName);
  }
}

document.querySelectorAll("[data-link]").forEach((element) => {
  const key = element.dataset.link;
  const getDestination = destinations[key];

  if (getDestination) {
    element.href = getDestination();
  }

  element.addEventListener("click", () => {
    trackLink(element.dataset.event);
  });
});
