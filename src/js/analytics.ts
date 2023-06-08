declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any[]): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(...args);
}

export function setCookieConsent(keyword: "Accept" | "Reject"): void {
  const consentMode = {
    analytics_storage: keyword === "Accept" ? "granted" : "denied",
    ad_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "denied",
  };
  gtag("consent", "update", consentMode);
  localStorage.setItem("consentMode", JSON.stringify(consentMode));
}
