function loadFonts() {
  const fonts = [
    "/fonts/Poppins-Regular.woff2",
    "/fonts/Poppins-Bold.woff2",
    "/fonts/Poppins-Semibold.woff2",
    "/fonts/Poppins-Medium.woff2",
  ];

  const head = document.head;

  fonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = font;
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    head.appendChild(link);
  });
}

loadFonts();
