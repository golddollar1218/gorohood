const CONFIG = {
  tokenAddress: "0x29063f81b00c8970e6664d1fdf14c0e4a7286a31",
  twitter: "https://x.com/GOROHOOD_X",
  telegram: "https://t.me/GoroHood_Group",
  dexscreener: "https://dexscreener.com/ethereum/0x29063f81b00c8970e6664d1fdf14c0e4a7286a31",
  dextools: "https://www.dextools.io",
};

function initContract() {
  const displays = document.querySelectorAll("#ca-display, #ca-display-2");
  const copyBtn = document.getElementById("copy-ca");
  const toast = document.getElementById("copy-toast");

  displays.forEach((el) => {
    el.textContent = CONFIG.tokenAddress;
  });

  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.tokenAddress);
      copyBtn.textContent = "Copied!";
      if (toast) {
        toast.textContent = "Contract address copied!";
        toast.classList.add("show");
      }
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        if (toast) toast.classList.remove("show");
      }, 2500);
    } catch {
      if (toast) {
        toast.textContent = "Copy failed — select and copy manually.";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
      }
    }
  });
}

function initNav() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".header-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function initSocialLinks() {
  document.querySelectorAll("[data-telegram]").forEach((el) => {
    el.href = CONFIG.telegram;
  });
  document.querySelectorAll("[data-twitter]").forEach((el) => {
    el.href = CONFIG.twitter;
  });
  document.querySelectorAll("[data-dexscreener]").forEach((el) => {
    el.href = CONFIG.dexscreener;
  });
  document.querySelectorAll("[data-dextools]").forEach((el) => {
    el.href = CONFIG.dextools;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContract();
  initNav();
  initSocialLinks();
});
