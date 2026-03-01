// ============================================================
// 📼 RÉTRO FM — Template Années 80-2000
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  var ASSETS = "assets/retro80";

  window.RETRO_TEMPLATES["retro80"] = {
    id: "retro80",
    name: "📼 Années 80-2000",
    desc: "Nostalgie & néons",
    preview: "📼📟💾",
    dark: true,

    sectionOrder: ["regles", "ressenti", "retours", "saisie", "roti", "actions", "resume", "fin"],

    // --- Emojis fallback ---
    emojiLogo: "📼",
    emojiMeeting: "📺",
    emojiStart: "📡",

    // --- Images ---
    appLogo: null,
    iconMeeting: null,
    iconStart: null,
    headerImage: 'url("' + ASSETS + '/titre.jpg")',
    rulesImage: 'url("' + ASSETS + '/regles.jpg")',
    summaryImage: 'url("' + ASSETS + '/resume.jpg")',
    outroGifs: null,

    bodyBg: "#1a0a2e",
    cardBg: "#1e1035",
    cardBorder: "#4a1e7a",
    textPrimary: "#E5E7EB",
    textSecondary: "#C4B5FD",
    textMuted: "#8B5CF6",
    accent: "#FF6EC7",
    accentDark: "#DB2777",
    accentLight: "#2d0a1e",
    inputBorder: "#4a1e7a",
    inputBg: "#2a1045",
    progressBg: "#2a1045",

    headerGradient: "linear-gradient(135deg, rgba(26,10,46,0.92) 0%, rgba(45,10,30,0.88) 40%, rgba(60,20,80,0.7) 100%)",
    summaryOverlay: "linear-gradient(135deg, rgba(26,10,46,0.95) 0%, rgba(30,16,53,0.92) 50%, rgba(26,10,46,0.95) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, rgba(30,16,53,0.97) 0%, rgba(30,16,53,0.95) 40%, rgba(30,16,53,0.8) 60%, rgba(30,16,53,0.5) 80%, rgba(30,16,53,0.3) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(30,16,53,0.97) 0%, rgba(30,16,53,0.95) 50%, rgba(30,16,53,0.8) 70%, rgba(30,16,53,0.5) 100%)",

    loginBg: "#1a0a2e",
    loginCardBg: "#1e1035",
    loginBtnBg: "#1e1035",
    loginBtnBorder: "#4a1e7a",
    loginBtnHover: "#2a1045",

    categories: [
      { id: "rock", label: "📼 Hit Parade", color: "#DB2777", bg: "#2d0a1e", border: "#F472B6" },
      { id: "fausse", label: "📟 Flop total", color: "#7C3AED", bg: "#1a0a2e", border: "#A78BFA" },
      { id: "ameliorer", label: "💾 Remaster", color: "#0891B2", bg: "#061f26", border: "#22D3EE" },
    ],
    columns: {
      rock: { title: "📼 Hit Parade", color: "#DB2777", border: "#F472B6" },
      fausse: { title: "📟 Flop total", color: "#7C3AED", border: "#A78BFA" },
      ameliorer: { title: "💾 Remaster", color: "#0891B2", border: "#22D3EE" },
    },

    ratingLabels: {
      1: { emoji: "📟", label: "Minitel en panne" },
      2: { emoji: "📺", label: "Écran neigeux" },
      3: { emoji: "💾", label: "Disquette OK" },
      4: { emoji: "🕹️", label: "Game Boy chargé" },
      5: { emoji: "🌟", label: "Tube de l'été !" },
    },
    vibeChecks: [
      { id: "ambiance", label: "Ambiance Boum", color: "#DB2777", bg: "#2d0a1e", border: "#F472B6" },
      { id: "satisfaction", label: "Niveau Tetris", color: "#7C3AED", bg: "#1a0a2e", border: "#A78BFA" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#0891B2", bg: "#061f26", border: "#22D3EE" },
    ratingCatLabels: { ambiance: "Ambiance Boum", satisfaction: "Niveau Tetris", roti: "ROTI" },

    appTitle: "RÉTRO FM",
    subtitle: "Rembobinez la cassette • Retour vers le sprint • Nostalgie et amélioration continue 📼",
    rulesTitle: "📺",
    rulesName: "Le Code du Minitel",
    rulesItems: [
      "Respect façon Club Dorothée",
      "On juge le programme, pas le présentateur",
      "Tout le monde prend le micro (karaoké obligatoire)",
      "Ce qui est dit sur le Minitel reste sur le Minitel",
      "On enregistre sur cassette et on avance",
    ],
    rulesColor: "#FF6EC7",
    rulesDotColor: "#22D3EE",
    tooltip: {
      title: "📺 Le saviez-vous ? 📺",
      quote: "\"3615 RETRO — Tapez 42 pour la sagesse ultime.\"",
      author: "- Le Minitel, 1982",
    },
    vibeTitle: "Audimat",
    feedbackTitle: "📻 On passe à l'antenne",
    afterTitle: "Le générique",
    actionTitle: "📼 Programme du prochain épisode",
    actionQuote: "\"C'est pas fini, c'est pas fini, c'est pas fini !\" 📺",
    summaryTitle: "📺 Le Best-Of",
    summaryPinHint: "Épingle des retours avec 📌 pour le Best-Of",
    outroTitle: "📼 Fin de la K7",
    outro: {
      high: { text: "Audimat au maximum ! Cette rétro était un vrai tube de l'été. On se retrouve dans 15 jours pour le prochain épisode !", emoji: "🌟📼" },
      mid: { text: "Belle émission ! Pas encore le prime time mais on y arrive. Rendez-vous dans 15 jours, même chaîne, même heure.", emoji: "📺🎵" },
      low: { text: "Petite baisse d'audimat... mais les meilleurs comebacks commencent comme ça. Prochain épisode dans 15 jours !", emoji: "📟🔄" },
      none: { text: "Rembobinage en cours... Ne touchez pas à ce bouton, on revient dans 15 jours !", emoji: "📼⏪" },
    },

    mdTitle: "📼 Rétro FM — Sprint",
    mdSummary: "📺 Le Best-Of",
    mdGlobal: "Audimat",
    mdPinned: "📌 Hits de la rétro",
    mdActions: "📼 Programme du prochain épisode",
    mdDetail: "📋 Détail de l'émission",
  };
})();
