(() => {
  const DATA_URL = "data/products.json";
  const DEFAULT_LOCALE = "zh";
  const SUPPORTED_LOCALES = ["zh", "en", "ko"];

  const normalizeLocale = (locale) => {
    if (!locale) return null;
    const lower = locale.toLowerCase();
    return SUPPORTED_LOCALES.find((item) => lower.startsWith(item)) || null;
  };

  const pageTitle = document.querySelector("[data-product-page-title]");
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  const backLink = document.querySelector("[data-product-back-link]");
  const heroEyebrow = document.querySelector("[data-product-hero-eyebrow]");
  const heroTitle = document.querySelector("[data-product-hero-title]");
  const heroDescription = document.querySelector("[data-product-hero-description]");
  const mainImage = document.querySelector("[data-product-main]");
  const mainImageMobile = document.querySelector("[data-product-main-mobile]");
  const specsList = document.querySelector("[data-product-specs]");
  const specsListMobile = document.querySelector("[data-product-specs-mobile]");
  const noteElement = document.querySelector("[data-product-note]");
  const noteElementMobile = document.querySelector("[data-product-note-mobile]");
  const thumbnailsContainer = document.querySelector("[data-product-thumbnails]");
  const thumbnailsContainerMobile = document.querySelector("[data-product-thumbnails-mobile]");
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

  let isInternalLocaleUpdate = false;

  const setLocale = (locale) => {
    if (!htmlElement) return;
    const normalized = normalizeLocale(locale) || DEFAULT_LOCALE;
    if (htmlElement.getAttribute("lang") === normalized) return;
    isInternalLocaleUpdate = true;
    htmlElement.setAttribute("lang", normalized);
    queueMicrotask(() => {
      isInternalLocaleUpdate = false;
    });
  };

  const getStoredLocale = () => {
    try {
      const stored = localStorage.getItem("preferredLang");
      if (stored && SUPPORTED_LOCALES.includes(stored)) {
        return stored;
      }
    } catch (error) {
      // storage unavailable, ignore
    }
    return null;
  };

  const getNavigatorLocale = () => {
    const navLang = navigator.language || navigator.userLanguage;
    return normalizeLocale(navLang);
  };

  const getDocumentLocale = () => normalizeLocale(document.documentElement?.getAttribute("lang"));

  const getPreferredLocale = () =>
    getStoredLocale() || getDocumentLocale() || getNavigatorLocale() || DEFAULT_LOCALE;

  const mergeObjects = (base = {}, override = {}) => ({ ...base, ...override });

  const mergeDetails = (baseDetails, overrideDetails) => {
    if (Array.isArray(overrideDetails) && overrideDetails.length > 0) {
      return overrideDetails;
    }
    return Array.isArray(baseDetails) ? baseDetails : [];
  };

  const mergeMediaItems = (baseItems, overrideItems) => {
    if (!Array.isArray(baseItems)) {
      return Array.isArray(overrideItems) ? overrideItems : [];
    }
    if (!Array.isArray(overrideItems) || overrideItems.length === 0) {
      return baseItems;
    }
    const merged = baseItems.map((item, index) => ({
      ...item,
      ...(overrideItems[index] || {}),
    }));
    if (overrideItems.length > baseItems.length) {
      return merged.concat(overrideItems.slice(baseItems.length));
    }
    return merged;
  };

  const applyLocalization = (product, requestedLocale) => {
    if (!product) return null;
    const fallbackLocale = product.locale && SUPPORTED_LOCALES.includes(product.locale)
      ? product.locale
      : DEFAULT_LOCALE;
    const localeToUse = product.translations?.[requestedLocale]
      ? requestedLocale
      : fallbackLocale;

    const translation = product.translations?.[localeToUse];
    if (!translation) {
      return { ...product, locale: localeToUse };
    }

    return {
      ...product,
      locale: localeToUse,
      backLink: mergeObjects(product.backLink, translation.backLink),
      hero: mergeObjects(product.hero, translation.hero),
      summary: {
        ...product.summary,
        ...translation.summary,
        cover: mergeObjects(product.summary?.cover, translation.summary?.cover),
        details: mergeDetails(product.summary?.details, translation.summary?.details),
      },
      media: {
        thumbnails: mergeMediaItems(
          product.media?.thumbnails,
          translation.media?.thumbnails
        ),
        gallery: mergeMediaItems(product.media?.gallery, translation.media?.gallery),
      },
      service: {
        ...product.service,
        ...translation.service,
        primaryCta: mergeObjects(
          product.service?.primaryCta,
          translation.service?.primaryCta
        ),
        secondaryCta: mergeObjects(
          product.service?.secondaryCta,
          translation.service?.secondaryCta
        ),
      },
    };
  };

  // Ensure the document language reflects stored preference as early as possible.
  setLocale(getPreferredLocale());

  const renderSpecs = (details) => {
    const renderToElement = (element) => {
      if (!element) return;
      element.innerHTML = "";
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
        element.appendChild(group);
      });
    };

    renderToElement(specsList);
    renderToElement(specsListMobile);
  };

  const renderThumbnails = (thumbnails, coverImage) => {
    if (!thumbnailsContainer && !thumbnailsContainerMobile) return;
    if (!Array.isArray(thumbnails) || thumbnails.length === 0) return;

    const createThumbnailButton = (item, index, container, targetImage, isMobile) => {
      if (!item?.src) return null;
      const button = document.createElement("button");
      button.type = "button";
      button.className = isMobile ? "product-detail__thumbnail-mobile" : "product-detail__thumbnail";
      button.dataset.img = item.src;

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      button.appendChild(img);

      if (index === 0) {
        button.classList.add("is-active");
        button.setAttribute("aria-current", "true");
        if (targetImage) {
          targetImage.src = item.src;
          targetImage.alt = item.alt || coverImage?.alt || "";
        }
      }

      button.addEventListener("click", () => {
        if (!targetImage) return;
        const active = container.querySelector(`.${isMobile ? "product-detail__thumbnail-mobile" : "product-detail__thumbnail"}.is-active`);
        if (active && active !== button) {
          active.classList.remove("is-active");
          active.removeAttribute("aria-current");
        }
        if (!button.classList.contains("is-active")) {
          button.classList.add("is-active");
          button.setAttribute("aria-current", "true");
        }

        const newSrc = button.dataset.img;
        if (newSrc && targetImage.src !== newSrc) {
          targetImage.src = newSrc;
        }
        const altText = button.querySelector("img")?.alt || "";
        if (altText) {
          targetImage.alt = altText;
        }

        // 同步更新另一个主图片
        if (isMobile && mainImage) {
          mainImage.src = newSrc;
          mainImage.alt = altText;
        } else if (!isMobile && mainImageMobile) {
          mainImageMobile.src = newSrc;
          mainImageMobile.alt = altText;
        }

        // 滚动到主图片位置（仅桌面版）
        if (!isMobile) {
          const coverContainer = targetImage.closest(".product-detail__cover");
          if (coverContainer) {
            const siteHeader = document.querySelector(".site-header");
            const topbar = document.querySelector(".product-detail__topbar");
            let offset = 0;
            
            if (siteHeader) {
              offset += siteHeader.offsetHeight;
            }
            if (topbar) {
              offset += topbar.offsetHeight;
            }
            
            const containerRect = coverContainer.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = containerRect.top + scrollTop - offset;
            
            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: "smooth"
            });
          }
        }
      });

      return button;
    };

    // 清空容器
    if (thumbnailsContainer) thumbnailsContainer.innerHTML = "";
    if (thumbnailsContainerMobile) thumbnailsContainerMobile.innerHTML = "";

    // 渲染缩略图
    thumbnails.forEach((item, index) => {
      if (thumbnailsContainer) {
        const button = createThumbnailButton(item, index, thumbnailsContainer, mainImage, false);
        if (button) thumbnailsContainer.appendChild(button);
      }
      if (thumbnailsContainerMobile) {
        const button = createThumbnailButton(item, index, thumbnailsContainerMobile, mainImageMobile, true);
        if (button) thumbnailsContainerMobile.appendChild(button);
      }
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

  const renderProduct = (product, requestedLocale) => {
    if (!product) {
      showErrorState();
      return;
    }

    const preferredLocale = requestedLocale || getPreferredLocale();
    const localizedProduct = applyLocalization(product, preferredLocale) || product;
    setLocale(localizedProduct.locale || preferredLocale);

    const hero = localizedProduct.hero || {};
    const summary = localizedProduct.summary || {};
    const media = localizedProduct.media || {};

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
      if (localizedProduct.backLink?.href) {
        backLink.href = localizedProduct.backLink.href;
      }
      backLink.textContent = localizedProduct.backLink?.label || "返回产品中心";
    }

    if (mainImage) {
      if (summary.cover?.src) {
        mainImage.src = summary.cover.src;
      }
      mainImage.alt = summary.cover?.alt || hero.title || "产品主图";
    }
    if (mainImageMobile) {
      if (summary.cover?.src) {
        mainImageMobile.src = summary.cover.src;
      }
      mainImageMobile.alt = summary.cover?.alt || hero.title || "产品主图";
    }

    renderSpecs(summary.details);

    syncTopbarTitle(hero.eyebrow, hero.title);

    if (noteElement) {
      noteElement.textContent = summary.note || "";
    }
    if (noteElementMobile) {
      noteElementMobile.textContent = summary.note || "";
    }

    renderThumbnails(media.thumbnails, summary.cover);
    renderGallery(media.gallery);
    renderService(localizedProduct.service);
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

      currentProduct = product;
      renderProduct(currentProduct);
    } catch (error) {
      console.error("[product-detail] 数据加载失败：", error);
      showErrorState("产品数据加载失败，请稍后重试。");
    }
  };

  let currentProduct = null;

  if (bodyElement?.classList.contains("product-detail-page")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
      initialize();
    }

    const observer = new MutationObserver(() => {
      if (isInternalLocaleUpdate || !currentProduct) return;
      const docLocale = getDocumentLocale();
      renderProduct(currentProduct, docLocale);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    window.addEventListener("storage", (event) => {
      if (event.key === "preferredLang" && currentProduct) {
        const newLocale = normalizeLocale(event.newValue);
        if (newLocale) {
          renderProduct(currentProduct, newLocale);
        }
      }
    });

    window.addEventListener("daewoo:languagechange", (event) => {
      if (!currentProduct) return;
      const newLocale = normalizeLocale(event.detail?.lang);
      if (newLocale) {
        renderProduct(currentProduct, newLocale);
      }
    });
  }
})();

