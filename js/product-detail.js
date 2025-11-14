(() => {
  const DATA_URL = "data/products.json";
  const DEFAULT_LOCALE = "zh";

  const pageTitle = document.querySelector("[data-product-page-title]");
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  const backLink = document.querySelector("[data-product-back-link]");
  const heroEyebrow = document.querySelector("[data-product-hero-eyebrow]");
  const heroTitle = document.querySelector("[data-product-hero-title]");
  const heroDescription = document.querySelector("[data-product-hero-description]");
  const mainImage = document.querySelector("[data-product-main]");
  const specsList = document.querySelector("[data-product-specs]");
  const noteElement = document.querySelector("[data-product-note]");
  const thumbnailsContainer = document.querySelector("[data-product-thumbnails]");
  const mediaList = document.querySelector("[data-product-media]");
  const serviceTitle = document.querySelector("[data-product-service-title]");
  const serviceDescription = document.querySelector("[data-product-service-description]");
  const servicePrimary = document.querySelector("[data-product-service-primary]");
  const serviceSecondary = document.querySelector("[data-product-service-secondary]");

  const syncTopbarTitle = (categoryText, nameText) => {
    const topbar = document.querySelector(".product-detail__topbar");
    if (!topbar) return;

    let titleGroup = topbar.querySelector(".product-detail__topbar-group");
    if (!titleGroup) {
      titleGroup = document.createElement("div");
      titleGroup.className = "product-detail__topbar-group";

      const backLink = topbar.querySelector(".product-detail__back");
      if (backLink) {
        topbar.insertBefore(titleGroup, backLink.nextSibling);
      } else {
        topbar.appendChild(titleGroup);
      }
    }

    let titleWrapper = titleGroup.querySelector(".product-detail__topbar-title");
    if (!titleWrapper) {
      titleWrapper = document.createElement("div");
      titleWrapper.className = "product-detail__topbar-title";
      titleGroup.appendChild(titleWrapper);
    }

    let category = titleWrapper.querySelector(".product-detail__topbar-category");
    if (!category) {
      category = document.createElement("span");
      category.className = "product-detail__topbar-category";
      titleWrapper.appendChild(category);
    }

    let name = titleWrapper.querySelector(".product-detail__topbar-name");
    if (!name) {
      name = document.createElement("span");
      name.className = "product-detail__topbar-name";
      titleWrapper.appendChild(name);
    }

    category.textContent = categoryText || "";
    name.textContent = nameText || "";
  };

  const showErrorState = (message) => {
    const fallback = message || "暂未找到对应的产品信息。";
    if (pageTitle) pageTitle.textContent = "产品信息未找到 | DAEWOO";
    if (heroTitle) heroTitle.textContent = fallback;
    if (heroDescription) heroDescription.textContent = "请返回产品中心或稍后再试。";
    if (noteElement) noteElement.textContent = "未检索到有效的产品数据。";
    if (thumbnailsContainer) thumbnailsContainer.innerHTML = "";
    if (mediaList) mediaList.innerHTML = "";
    if (bodyElement) bodyElement.classList.add("product-detail--error");
  };

  const getRequestedProductId = () => {
    const url = new URL(window.location.href);
    const idParam = url.searchParams.get("id");
    if (idParam) return idParam.trim();
    const slugParam = url.searchParams.get("slug");
    if (slugParam) return slugParam.trim();
    const hashParam = url.hash ? url.hash.replace("#", "").trim() : "";
    if (hashParam) return hashParam;
    const bodyId = bodyElement?.getAttribute("data-product-id");
    if (bodyId) return bodyId.trim();
    return "";
  };

  const setLocale = (locale) => {
    if (!htmlElement) return;
    const normalized = typeof locale === "string" && locale.trim() ? locale.trim() : DEFAULT_LOCALE;
    htmlElement.setAttribute("lang", normalized);
  };

  const renderSpecs = (details) => {
    if (!specsList) return;
    specsList.innerHTML = "";
    if (!Array.isArray(details) || details.length === 0) return;

    details.forEach((item) => {
      if (!item || (!item.label && !item.value)) return;
      const group = document.createElement("div");
      const dt = document.createElement("dt");
      dt.textContent = item.label || "";
      const dd = document.createElement("dd");
      dd.textContent = item.value || "";
      group.appendChild(dt);
      group.appendChild(dd);
      specsList.appendChild(group);
    });
  };

  const renderThumbnails = (thumbnails, coverImage) => {
    if (!thumbnailsContainer) return;
    thumbnailsContainer.innerHTML = "";
    if (!Array.isArray(thumbnails) || thumbnails.length === 0) return;

    thumbnails.forEach((item, index) => {
      if (!item?.src) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "product-detail__thumbnail";
      button.dataset.img = item.src;

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      button.appendChild(img);

      if (index === 0) {
        button.classList.add("is-active");
        button.setAttribute("aria-current", "true");
        if (mainImage) {
          mainImage.src = item.src;
          mainImage.alt = item.alt || coverImage?.alt || "";
        }
      }

      button.addEventListener("click", () => {
        if (!mainImage) return;
        const active = thumbnailsContainer.querySelector(".product-detail__thumbnail.is-active");
        if (active && active !== button) {
          active.classList.remove("is-active");
          active.removeAttribute("aria-current");
        }
        if (!button.classList.contains("is-active")) {
          button.classList.add("is-active");
          button.setAttribute("aria-current", "true");
        }

        const newSrc = button.dataset.img;
        if (newSrc && mainImage.src !== newSrc) {
          mainImage.src = newSrc;
        }
        const altText = button.querySelector("img")?.alt || "";
        if (altText) {
          mainImage.alt = altText;
        }
      });

      thumbnailsContainer.appendChild(button);
    });
  };

  const renderGallery = (gallery) => {
    if (!mediaList) return;
    mediaList.innerHTML = "";
    if (!Array.isArray(gallery) || gallery.length === 0) return;

    gallery.forEach((item) => {
      if (!item?.src) return;
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.href || item.src;
      link.target = "_blank";
      link.rel = "noopener";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";

      link.appendChild(img);
      listItem.appendChild(link);
      mediaList.appendChild(listItem);
    });
  };

  const renderService = (service) => {
    if (serviceTitle) serviceTitle.textContent = service?.title || "联系顾问";
    if (serviceDescription) {
      serviceDescription.textContent =
        service?.description || "提交您的需求，我们将为您匹配合适的方案。";
    }

    if (servicePrimary) {
      servicePrimary.textContent = service?.primaryCta?.label || "联系顾问";
      if (service?.primaryCta?.href) {
        servicePrimary.href = service.primaryCta.href;
      }
    }

    if (serviceSecondary) {
      if (service?.secondaryCta?.label && service.secondaryCta.href) {
        serviceSecondary.textContent = service.secondaryCta.label;
        serviceSecondary.href = service.secondaryCta.href;
        serviceSecondary.classList.remove("is-hidden");
      } else {
        serviceSecondary.textContent = "";
        serviceSecondary.href = "#";
        serviceSecondary.classList.add("is-hidden");
      }
    }
  };

  const renderProduct = (product) => {
    if (!product) {
      showErrorState();
      return;
    }

    setLocale(product.locale);

    const hero = product.hero || {};
       const summary = product.summary || {};
    const media = product.media || {};

    if (pageTitle) {
      pageTitle.textContent = `${hero.title || "产品详情"} | DAEWOO`;
    }

    if (heroEyebrow) {
      heroEyebrow.textContent = hero.eyebrow || "";
    }
    if (heroTitle) {
      heroTitle.textContent = hero.title || "";
    }
    if (heroDescription) {
      heroDescription.textContent = hero.description || "";
    }

    if (backLink) {
      if (product.backLink?.href) {
        backLink.href = product.backLink.href;
      }
      backLink.textContent = product.backLink?.label || "返回产品中心";
    }

    if (mainImage) {
      if (summary.cover?.src) {
        mainImage.src = summary.cover.src;
      }
      mainImage.alt = summary.cover?.alt || hero.title || "产品主图";
    }

    renderSpecs(summary.details);

    syncTopbarTitle(hero.eyebrow, hero.title);

    if (noteElement) {
      noteElement.textContent = summary.note || "";
    }

    renderThumbnails(media.thumbnails, summary.cover);
    renderGallery(media.gallery);
    renderService(product.service);
  };

  const initialize = async () => {
    const productId = getRequestedProductId();
    if (!productId) {
      showErrorState("未指定产品 ID。");
      return;
    }

    try {
      const response = await fetch(DATA_URL, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`请求失败: ${response.status}`);
      }
      const payload = await response.json();
      const products = Array.isArray(payload?.products) ? payload.products : [];
      const product =
        products.find(
          (item) =>
            item?.id === productId ||
            item?.slug === productId ||
            item?.id === `product-${productId}`
        ) || null;

      if (!product) {
        showErrorState(`未找到 ID 为 “${productId}” 的产品。`);
        return;
      }

      renderProduct(product);
    } catch (error) {
      console.error("[product-detail] 数据加载失败：", error);
      showErrorState("产品数据加载失败，请稍后重试。");
    }
  };

  if (bodyElement?.classList.contains("product-detail-page")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
      initialize();
    }
  }
})();

