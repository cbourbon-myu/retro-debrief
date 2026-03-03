// ============================================================
// ⚔️ CONSEIL JEDI — Template Star Wars (Custom merged)
// ============================================================
// Pour créer un nouveau template, copie ce fichier,
// change l'id et adapte chaque propriété.
// Le fichier s'enregistre tout seul au chargement.
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  // Base URL des assets de ce template (facilite la maintenance)
  var ASSETS = "assets/starwars";

  window.RETRO_TEMPLATES["starwars"] = {
    // --- Identité ---
    id: "starwars",
    name: "⚔️ Conseil Jedi",
    desc: "Dans une galaxie lointaine...",
    preview: "✨💀⚔️",
    dark: true,

    // 👇 Ajouter ici — l'ordre par défaut
    sectionOrder: ["regles", "ressenti", "retours", "saisie", "roti", "actions", "resume", "fin"],

    // --- Emojis fallback (utilisés si pas d'image) ---
    emojiLogo: "⚔️",
    emojiMeeting: "🛸",
    emojiStart: "🌌",

    // --- Images de l'app ---
    appLogo: ASSETS + "/appLogo.png",
    iconMeeting: null,
    iconStart: null,

    // --- Couleurs globales ---
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

    // --- Images & fonds ---
    headerGradient: "linear-gradient(to right, rgba(20,10,50,1) 0%, rgba(10,15,40,0.80) 30%, rgba(10,15,40,0.50) 50%, rgba(10,15,40,0.80) 70%, rgba(20,10,50,1) 100%)",
    headerImage: 'url("' + ASSETS + '/titre.jpg")',
    headerImagePos: "50% 48%",
    headerImageZoom: 50,
    headerBlur: 0,
    headerImageOpacity: 1,
    rulesImage: 'url("' + ASSETS + '/regles.jpg")',
    rulesImagePos: "100% 82%",
    rulesImageZoom: 50,
    rulesBlur: 0,
    rulesImageOpacity: 1,
    rulesTitleImage: ASSETS + "/rulesTitleImage.jpg",
    summaryImage: 'url("' + ASSETS + '/resume.jpg")',
    summaryImagePos: "50% 68%",
    summaryImageZoom: 50,
    summaryBlur: 0,
    summaryImageOpacity: 1,
    summaryTitleImage: ASSETS + "/summaryTitleImage.png",
    summaryOverlay: "linear-gradient(to left, rgba(5,5,20,0) 0%, rgba(5,5,20,0.15) 15%, rgba(5,5,20,0.4) 30%, rgba(5,5,20,0.7) 42%, rgba(5,5,20,0.9) 52%, rgba(5,5,20,1) 62%, rgba(5,5,20,1) 100%)",
    rulesOverlayDesktop: "linear-gradient(to left, rgba(5,5,20,0) 0%, rgba(5,5,20,0.15) 15%, rgba(5,5,20,0.4) 30%, rgba(5,5,20,0.7) 42%, rgba(5,5,20,0.9) 52%, rgba(5,5,20,1) 62%, rgba(5,5,20,1) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(5,5,20,0) 0%, rgba(5,5,20,0.15) 15%, rgba(5,5,20,0.4) 30%, rgba(5,5,20,0.7) 42%, rgba(5,5,20,0.9) 52%, rgba(5,5,20,1) 62%, rgba(5,5,20,1) 100%)",
    
    outroGifs: {
      high: null,
      mid: null,
      low: null,
      none: ASSETS + "/outroGif-none.jpg",
    },
    outroTitleImage: ASSETS + "/outroTitleImage.png",
    outroGifPos: {
      high: "50% 50%",
      mid: "50% 50%",
      low: "50% 50%",
      none: "50% 75%",
    },
    outroGifZoom: {
      high: 100,
      mid: 100,
      low: 100,
      none: 50,
    },
    outroGifOpacity: {
      high: 1,
      mid: 1,
      low: 1,
      none: 1,
    },
    outroGifBlur: {
      high: 0,
      mid: 0,
      low: 0,
      none: 0,
    },
    outroStyle: {
      none: { bold: true, align: "left", italic: false },
    },
    outroOverlay: "radial-gradient(ellipse at center, rgba(5,5,20,0.3) 0%, rgba(5,5,20,0.6) 40%, rgba(5,5,20,0.85) 70%, rgba(5,5,20,0.95) 100%)",

    // --- Login (écran de connexion) ---
    loginBg: "#0a0e1a",
    loginCardBg: "#111827",
    loginBtnBg: "#111827",
    loginBtnBorder: "#374151",
    loginBtnHover: "#1F2937",

    // --- Catégories (les 3 colonnes de feedbacks) ---
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

    // --- Système de votes (emojis 1-5) ---
    // image : URL d'une image affichée à côté du titre (null = pas d'image)
    // imageStyle : style CSS optionnel appliqué à l'image (taille, filtre…)
    ratingLabels: {
      1: { emoji: "💀", label: "Côté Obscur", image: ASSETS + "/rating-1-cote-obscur.jpg" },
      2: { emoji: "🌑", label: "Piège Sith", image: ASSETS + "/rating-2-piege-sith.jpg" },
      3: { emoji: "⚔️", label: "Padawan", image: ASSETS + "/rating-3-padawan.jpg" },
      4: { emoji: "🌠", label: "Chevalier Jedi", image: ASSETS + "/rating-4-chevalier-jedi.jpg" },
      5: { emoji: "☄️", label: "Maître Jedi", image: ASSETS + "/rating-5-maitre-jedi.jpg" },
    },
    vibeChecks: [
      {
        id: "ambiance",
        label: "Harmonie de la Force",
        color: "#166534", bg: "#052e16", border: "#22C55E",
        image: ASSETS + "/vibe-ambiance.jpg",
      },
      {
        id: "satisfaction",
        label: "Puissance du Sabre",
        color: "#1E40AF", bg: "#0a1128", border: "#3B82F6",
        image: ASSETS + "/vibe-satisfaction.jpg",
      },
    ],
    roti: {
      id: "roti",
      label: "ROTI",
      color: "#991B1B", bg: "#1c1607", border: "#EF4444",
      image: ASSETS + "/vibe-roti.jpg",
    },
    ratingCatLabels: { ambiance: "Harmonie de la Force", satisfaction: "Puissance du Sabre", roti: "ROTI" },

    // --- Textes de l'interface ---
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
    rulesDotColor: "#22C55E",
    tooltip: {
      title: "⚔️ Sagesse du Maître ⚔️",
      quote: "\"Fais-le, ou ne le fais pas. Il n'y a pas d'essai.\"",
      author: "- Yoda, Maître Jedi",
      image: ASSETS + "/tooltip.jpg",
      imageZoom: 100,
      imagePos: "50% 50%",
      imageOpacity: 0.20,
      // Bandeau haut
      bannerColor: "#22C55E",
      // Titre
      titleColor: "#22C55E",
      titleFont: "",
      titleSize: 10,
      titleBold: true,
      titleItalic: false,
      titleUnderline: false,
      // Citation
      quoteColor: "#FAFAF9",
      quoteFont: "",
      quoteSize: 15,
      quoteBold: true,
      quoteItalic: false,
      quoteUnderline: false,
      // Auteur
      authorColor: "rgba(255,255,255,0.25)",
      authorFont: "",
      authorSize: 9,
      authorBold: false,
      authorItalic: true,
      authorUnderline: false,
    },
    vibeTitle: "Sondage de la Force",
    feedbackTitle: "🎙️ Transmission holographique",
    afterTitle: "Le Temple Jedi",
    actionImage: ASSETS + "/actionImage.jpg",
    actionBorder: "#FBBF24",
    actionTitle: "Prochaine mission",
    actionQuote: "\"Toujours par deux ils vont. Ni plus, ni moins. Le maître et l'apprenti.\" ⚔️",
    summaryTitle: "Archives du Conseil",
    summaryPinHint: "Épingle des retours avec 📌 pour construire les Archives",
    outroTitle: "Générique de fin",
    outro: {
      high: { text: "La Force était puissante dans ce sprint. Le Conseil salue votre maîtrise, jeunes Jedi. Rendez-vous dans la prochaine galaxie.", emoji: "🌌⚔️" },
      mid: { text: "L'équilibre dans la Force a été maintenu. Continuez votre entraînement, Padawans. Le prochain sprint nous attend.", emoji: "⚔️✨" },
      low: { text: "Le Côté Obscur a tenté de nous séduire, mais nous sommes toujours debout. Que la Force guide notre prochain sprint.", emoji: "🌑⚔️" },
      none: { text: "Le Conseil Jedi est réuni. Que la Force soit avec nous pour les sprints à venir.", emoji: "⚔️🌟" },
    },

    // --- Labels pour l'export Markdown/Confluence ---
    mdTitle: "⚔️ Conseil Jedi — Sprint",
    mdSummary: "📜 Archives du Conseil",
    mdGlobal: "Sondage de la Force",
    mdPinned: "📌 Transmissions clés",
    mdActions: "🗺️ Prochaine mission",
    mdDetail: "📋 Détail du Conseil",
  };
})();
