document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (url, targetId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const targetElement = document.getElementById(targetId);

      if (targetId === "header-placeholder") {
        const headerContent = doc.querySelector("header.header");
        if (headerContent) {
          targetElement.appendChild(headerContent);
          highlightActiveLink(targetElement);
        }
      } else if (targetId === "footer-placeholder") {
        const footerContent = doc.querySelector("footer.footer");
        if (footerContent) {
          targetElement.appendChild(footerContent);
        }
      }
    } catch (error) {
      console.error("Error loading component:", error);
    }
  };

  const highlightActiveLink = (headerElement) => {
    const currentPathname = window.location.pathname.split("/").pop();
    const navLinks = headerElement.querySelectorAll(".header__nav-link");

    console.log("Current Pathname:", currentPathname);

    navLinks.forEach((link) => {
      link.classList.remove("active-link");

      const linkHref = link.getAttribute("href");
      console.log("Link Href:", linkHref);

      if (
        currentPathname === "" &&
        (linkHref === "index.html" || linkHref === "#")
      ) {
        console.log("Condition 1 met for link:", linkHref);
        link.classList.add("active-link");
      } else if (currentPathname === linkHref) {
        console.log("Condition 2 met for link:", linkHref);
        link.classList.add("active-link");
      }
    });
  };

  if (document.getElementById("header-placeholder")) {
    loadComponent("index.html", "header-placeholder");
  }
  if (document.getElementById("footer-placeholder")) {
    loadComponent("index.html", "footer-placeholder");
  }
});
