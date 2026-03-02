// ============================================================
// ⚔️ CONSEIL JEDI — Template Star Wars (Custom merged)
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  var ASSETS = "assets/starwars";

  window.RETRO_TEMPLATES["starwars"] = {
    id: "starwars",
    name: "⚔️ Conseil Jedi",
    desc: "Dans une galaxie lointaine...",
    preview: "✨💀⚔️",
    dark: true,

    sectionOrder: ["regles", "ressenti", "retours", "saisie", "roti", "actions", "resume", "fin"],

    // --- Emojis fallback ---
    emojiLogo: "⚔️",
    emojiMeeting: "🛸",
    emojiStart: "🌌",

    // --- Images (fichiers dans assets/starwars/) ---
    appLogo: ASSETS + "/appLogo.png",
    iconMeeting: null,
    iconStart: null,
    headerImage: 'url("' + ASSETS + '/titre.jpg")',
    headerImagePos: "1% 48%",
    headerImageZoom: 50,
    headerBlur: 0,
    headerImageOpacity: 0.45,
    rulesImage: 'url("' + ASSETS + '/regles.jpg")',
    rulesImagePos: "100% 82%",
    rulesImageZoom: 50,
    rulesBlur: 0,
    rulesImageOpacity: 0.5,
    rulesTitleImage: ASSETS + "/rulesTitleImage.jpg",
    summaryImage: 'url("' + ASSETS + '/resume.jpg")',
    summaryTitleImage: ASSETS + "/summaryTitleImage.png",
    summaryImageZoom: 50,
    summaryImagePos: "0% 68%",
    summaryBlur: 0,
    summaryImageOpacity: 0.45,
    actionImage: ASSETS + "/actionImage.jpg",
    actionBorder: "#3B82F6",
    outroTitleImage: ASSETS + "/outroTitleImage.png",
    outroGifs: {
      none: ASSETS + "/outroGif-none.jpg"
    },
    outroGifPos: {
      none: "0% 75%",
      low: "50% 50%",
      mid: "50% 50%",
      high: "50% 50%"
    },
    outroGifZoom: {
      none: 50,
      low: 100,
      mid: 100,
      high: 100
    },
    outroGifOpacity: {
      none: 0.34,
      low: 0.75,
      mid: 0.75,
      high: 0.75
    },
    outroGifBlur: {
      none: 0,
      low: 0,
      mid: 0,
      high: 0
    },
    outroStyle: {
      none: {
        bold: true,
        align: "left",
        italic: false
      }
    },

    // --- Couleurs ---
    bodyBg: "#0a0e1a",
    cardBg: "#111827",
    cardBorder: "#1e3a5f",
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accent: "#FBBF24",
    accentDark: "#D97706",
    accentLight: "#374151",
    inputBorder: "#374151",
    inputBg: "#1F2937",
    progressBg: "#1F2937",

    // --- Overlays & Gradients ---
    headerGradient: "linear-gradient(135deg, rgba(20,10,50,1) 0%, rgba(10,15,40,0.5) 40%, rgba(5,5,20,0) 100%)",
    summaryOverlay: "linear-gradient(to left, rgba(5,5,20,0.5) 0%, rgba(10,15,40,0.9) 50%, rgba(5,5,20,0.99) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, rgba(17,24,39,0.97) 0%, rgba(17,24,39,0.95) 40%, rgba(17,24,39,0.8) 60%, rgba(17,24,39,0.5) 80%, rgba(17,24,39,0.3) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(17,24,39,0.97) 0%, rgba(17,24,39,0.95) 50%, rgba(17,24,39,0.8) 70%, rgba(17,24,39,0.5) 100%)",

    // --- Login ---
    loginBg: "#0a0e1a",
    loginCardBg: "#111827",
    loginBtnBg: "#111827",
    loginBtnBorder: "#374151",
    loginBtnHover: "#1F2937",

    // --- Catégories ---
    categories: [
      { id: "rock", label: "✨ La Force", color: "#166534", bg: "#052e16", border: "#22C55E" },
      { id: "fausse", label: "💀 Côté Obscur", color: "#991B1B", bg: "#1c0606", border: "#EF4444" },
      { id: "ameliorer", label: "⚔️ Académie Jedi", color: "#1E40AF", bg: "#0a1128", border: "#3B82F6" },
    ],
    columns: {
      rock: { title: "✨ Ce qui a activé la Force", color: "#166534", border: "#22C55E" },
      fausse: { title: "💀 Le Côté Obscur", color: "#991B1B", border: "#EF4444" },
      ameliorer: { title: "⚔️ L'Académie Jedi", color: "#1E40AF", border: "#3B82F6" },
    },

    // --- Ratings (avec images) ---
    ratingLabels: {
      1: { emoji: "💀", label: "Côté Obscur", image: ASSETS + "/rating-1-cote-obscur.jpg" },
      2: { emoji: "🌑", label: "Piège Sith", image: ASSETS + "/rating-2-piege-sith.jpg" },
      3: { emoji: "⚔️", label: "Padawan", image: ASSETS + "/rating-3-padawan.jpg" },
      4: { emoji: "🌠", label: "Chevalier Jedi", image: ASSETS + "/rating-4-chevalier-jedi.jpg" },
      5: { emoji: "☄️", label: "Maître Jedi", image: ASSETS + "/rating-5-maitre-jedi.jpg" },
    },

    // --- Vibe Checks (avec images) ---
    vibeChecks: [
      { id: "ambiance", label: "Harmonie de la Force", color: "#166534", bg: "#052e16", border: "#22C55E", image: ASSETS + "/vibe-ambiance.jpg" },
      { id: "satisfaction", label: "Puissance du Sabre", color: "#1E40AF", bg: "#0a1128", border: "#3B82F6", image: ASSETS + "/vibe-satisfaction.jpg" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#D97706", bg: "#1c1607", border: "#FBBF24", image: ASSETS + "/vibe-roti.jpg" },
    ratingCatLabels: { ambiance: "Harmonie de la Force", satisfaction: "Puissance du Sabre", roti: "ROTI" },

    // --- Textes ---
    appTitle: "CONSEIL JEDI",
    subtitle: "Il y a bien longtemps, dans un sprint lointain... • Que la Force soit avec le backlog 🌌",
    rulesTitle: "⚔️",
    rulesName: "Le Code Jedi",
    rulesItems: [
      "Il n'y a pas d'émotion, il y a la paix (et le respect)",
      "Focus sur la mission, pas sur l'individu",
      "Chaque voix compte au Conseil",
      "Ce qui est dit au Temple reste au Temple",
      "Toujours en mouvement est l'avenir",
    ],
    rulesColor: "#FBBF24",
    rulesDotColor: "#3B82F6",

    // --- Tooltip (avec image) ---
    tooltip: {
      title: "⚔️ Sagesse du Maître ⚔️",
      quote: "\"Fais-le, ou ne le fais pas. Il n'y a pas d'essai.\"",
      author: "- Yoda, Maître Jedi",
      image: ASSETS + "/tooltip.jpg",
      imageZoom: 100,
      imagePos: "50% 50%",
      imageOpacity: 0.20,
    },

    // --- Section titles ---
    vibeTitle: "Sondage de la Force",
    feedbackTitle: "🎙️ Transmission holographique",
    afterTitle: "Le Temple Jedi",
    actionTitle: "Prochaine mission",
    actionQuote: "\"Toujours par deux ils vont. Ni plus, ni moins. Le maître et l'apprenti.\" ⚔️",
    summaryTitle: "Archives du Conseil",
    summaryPinHint: "Épingle des retours avec 📌 pour construire les Archives",
    outroTitle: "Générique de fin",

    // --- Outro ---
    outro: {
      high: { text: "La Force était puissante dans ce sprint. Le Conseil salue votre maîtrise, jeunes Jedi. Rendez-vous dans la prochaine galaxie.", emoji: "🌌⚔️" },
      mid: { text: "L'équilibre dans la Force a été maintenu. Continuez votre entraînement, Padawans. Le prochain sprint nous attend.", emoji: "⚔️✨" },
      low: { text: "Le Côté Obscur a tenté de nous séduire, mais nous sommes toujours debout. Que la Force guide notre prochain sprint.", emoji: "🌑⚔️" },
      none: { text: "Le Conseil Jedi est réuni. Que la Force soit avec nous pour les sprints à venir.", emoji: "⚔️🌟" },
    },

    // --- Export MD ---
    mdTitle: "⚔️ Conseil Jedi — Sprint",
    mdSummary: "📜 Archives du Conseil",
    mdGlobal: "Sondage de la Force",
    mdPinned: "📌 Transmissions clés",
    mdActions: "🗺️ Prochaine mission",
    mdDetail: "📋 Détail du Conseil",
  };
})();
