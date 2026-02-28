// ============================================================
// 🏝️ L'AVENTURE — Template Koh-Lanta
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  window.RETRO_TEMPLATES["kohlanta"] = {
    id: "kohlanta",
    name: "🏝️ L'Aventure",
    desc: "Survivre au sprint",
    preview: "🔥🌧️🗺️",
    dark: true,

    bodyBg: "#0f2918",
    cardBg: "#1a3a2a",
    cardBorder: "#2d5a3a",
    textPrimary: "#E5E7EB",
    textSecondary: "#86EFAC",
    textMuted: "#6B8F7B",
    accent: "#F59E0B",
    accentDark: "#D97706",
    accentLight: "#1c1607",
    inputBorder: "#2d5a3a",
    inputBg: "#1a3a2a",
    progressBg: "#1a3a2a",

    headerGradient: "linear-gradient(135deg, rgba(15,41,24,0.92) 0%, rgba(20,50,30,0.88) 40%, rgba(30,60,20,0.7) 100%)",
    headerImage: "none",
    rulesImage: "none",
    summaryImage: "none",
    summaryOverlay: "linear-gradient(135deg, rgba(15,41,24,0.95) 0%, rgba(26,58,42,0.92) 50%, rgba(15,41,24,0.95) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, rgba(26,58,42,0.97) 0%, rgba(26,58,42,0.95) 40%, rgba(26,58,42,0.8) 60%, rgba(26,58,42,0.5) 80%, rgba(26,58,42,0.3) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(26,58,42,0.97) 0%, rgba(26,58,42,0.95) 50%, rgba(26,58,42,0.8) 70%, rgba(26,58,42,0.5) 100%)",
    outroGifs: null,

    loginBg: "#0f2918",
    loginCardBg: "#1a3a2a",
    loginBtnBg: "#1a3a2a",
    loginBtnBorder: "#2d5a3a",
    loginBtnHover: "#2a4a3a",

    categories: [
      { id: "rock", label: "🔥 Épreuve remportée", color: "#B45309", bg: "#1c1607", border: "#F59E0B" },
      { id: "fausse", label: "🌧️ Épreuve perdue", color: "#1E40AF", bg: "#0a1128", border: "#60A5FA" },
      { id: "ameliorer", label: "🗺️ Stratégie d'équipe", color: "#15803D", bg: "#052e16", border: "#4ADE80" },
    ],
    columns: {
      rock: { title: "🔥 Épreuves remportées", color: "#B45309", border: "#F59E0B" },
      fausse: { title: "🌧️ Épreuves perdues", color: "#1E40AF", border: "#60A5FA" },
      ameliorer: { title: "🗺️ Stratégie d'équipe", color: "#15803D", border: "#4ADE80" },
    },

    ratingLabels: {
      1: { emoji: "🥥", label: "Naufragé" },
      2: { emoji: "🌧️", label: "Pluie tropicale" },
      3: { emoji: "🏕️", label: "Au campement" },
      4: { emoji: "🔥", label: "Feu allumé !" },
      5: { emoji: "🏆", label: "Aventurier légendaire" },
    },
    vibeChecks: [
      { id: "ambiance", label: "Esprit d'équipe", color: "#15803D", bg: "#052e16", border: "#4ADE80" },
      { id: "satisfaction", label: "Confort au camp", color: "#B45309", bg: "#1c1607", border: "#F59E0B" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#059669", bg: "#052e16", border: "#10B981" },
    ratingCatLabels: { ambiance: "Esprit d'équipe", satisfaction: "Confort au camp", roti: "ROTI" },

    appTitle: "L'AVENTURE",
    subtitle: "Ici, c'est la loi de la jungle • Éliminés tous les 15 jours • Dernier survivant du sprint 🏝️",
    rulesTitle: "🏝️",
    rulesName: "Règles du Conseil",
    rulesItems: [
      "Solidarité et respect entre aventuriers",
      "On juge l'épreuve, pas le coéquipier",
      "Chaque aventurier a droit à la parole",
      "Ce qui se dit au Conseil reste au Conseil",
      "On repart avec un totem d'immunité (les actions)",
    ],
    rulesColor: "#F59E0B",
    rulesDotColor: "#4ADE80",
    tooltip: {
      title: "🏝️ Parole du Conseil 🏝️",
      quote: "\"L'aventure est une épreuve, mais c'est ensemble qu'on la surmonte.\"",
      author: "- Denis Brogniart, probablement",
    },
    vibeTitle: "Moral du camp",
    feedbackTitle: "🗳️ Vote au Conseil",
    afterTitle: "Le Conseil final",
    actionTitle: "🏝️ Épreuves du prochain épisode",
    actionQuote: "\"C'est vous qui décidez qui mérite de rester dans l'aventure !\" 🔥",
    summaryTitle: "🗺️ Carnet de l'aventurier",
    summaryPinHint: "Épingle des retours avec 📌 pour le carnet",
    outroTitle: "🌅 Coucher de soleil",
    outro: {
      high: { text: "Épreuve dominée ! L'équipe a allumé le feu du premier coup. On se retrouve au prochain épisode, aventuriers !", emoji: "🔥🏆" },
      mid: { text: "Bonne journée au campement. Quelques épreuves à améliorer mais le moral est bon. Prochain conseil dans 15 jours.", emoji: "🏕️🔥" },
      low: { text: "L'épreuve a été rude mais aucun éliminé ! On revient plus forts au prochain épisode. L'aventure continue.", emoji: "🌧️💪" },
      none: { text: "Le feu crépite, les aventuriers se préparent. Prochain conseil dans 15 jours !", emoji: "🏝️🔥" },
    },

    mdTitle: "🏝️ L'Aventure — Sprint",
    mdSummary: "🗺️ Carnet de l'aventurier",
    mdGlobal: "Moral du camp",
    mdPinned: "📌 Moments clés",
    mdActions: "🏝️ Épreuves du prochain épisode",
    mdDetail: "📋 Détail du Conseil",
  };
})();
