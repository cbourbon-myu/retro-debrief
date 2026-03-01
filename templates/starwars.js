// ============================================================
// ⚔️ CONSEIL JEDI — Template Star Wars
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

    // --- Images ---
    appLogo: null,
    iconMeeting: null,
    iconStart: null,
    headerImage: 'url("' + ASSETS + '/titre.jpg")',
    rulesImage: 'url("' + ASSETS + '/regles.jpg")',
    summaryImage: 'url("' + ASSETS + '/resume.jpg")',
    outroGifs: null,

    bodyBg: "#0a0e1a",
    cardBg: "#111827",
    cardBorder: "#1e3a5f",
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accent: "#FBBF24",
    accentDark: "#D97706",
    accentLight: "#1c1607",
    inputBorder: "#374151",
    inputBg: "#1F2937",
    progressBg: "#1F2937",

    headerGradient: "linear-gradient(135deg, rgba(5,5,20,0.5) 0%, rgba(10,15,40,0.25) 40%, rgba(20,10,50,0) 100%)",
    summaryOverlay: "linear-gradient(135deg, rgba(5,5,20,0.5) 0%, rgba(10,15,40,0.25) 50%, rgba(5,5,20,0) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, rgba(17,24,39,0.5) 0%, rgba(17,24,39,0.25) 40%, rgba(17,24,39,0) 60%, rgba(17,24,39,0.5) 80%, rgba(17,24,39,0.3) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(17,24,39,0.5) 0%, rgba(17,24,39,0.25) 50%, rgba(17,24,39,0) 70%, rgba(17,24,39,0.5) 100%)",

    loginBg: "#0a0e1a",
    loginCardBg: "#111827",
    loginBtnBg: "#111827",
    loginBtnBorder: "#374151",
    loginBtnHover: "#1F2937",

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

    ratingLabels: {
      1: { emoji: "💀", label: "Piège Sith" },
      2: { emoji: "🌑", label: "Perturbation" },
      3: { emoji: "⚔️", label: "Padawan" },
      4: { emoji: "🌟", label: "Chevalier Jedi" },
      5: { emoji: "🌌", label: "Maître Jedi" },
    },
    vibeChecks: [
      { id: "ambiance", label: "Harmonie de la Force", color: "#166534", bg: "#052e16", border: "#22C55E" },
      { id: "satisfaction", label: "Puissance du Sabre", color: "#1E40AF", bg: "#0a1128", border: "#3B82F6" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#D97706", bg: "#1c1607", border: "#FBBF24" },
    ratingCatLabels: { ambiance: "Harmonie de la Force", satisfaction: "Puissance du Sabre", roti: "ROTI" },

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
    tooltip: {
      title: "⚔️ Sagesse du Maître ⚔️",
      quote: "\"Fais-le, ou ne le fais pas. Il n'y a pas d'essai.\"",
      author: "- Yoda, Maître Jedi",
    },
    vibeTitle: "Sondage de la Force",
    feedbackTitle: "🎙️ Transmission holographique",
    afterTitle: "Le Temple Jedi",
    actionTitle: "🗺️ Prochaine mission",
    actionQuote: "\"Toujours par deux ils vont. Ni plus, ni moins. Le maître et l'apprenti.\" ⚔️",
    summaryTitle: "📜 Archives du Conseil",
    summaryPinHint: "Épingle des retours avec 📌 pour construire les Archives",
    outroTitle: "🌌 Générique de fin",
    outro: {
      high: { text: "La Force était puissante dans ce sprint. Le Conseil salue votre maîtrise, jeunes Jedi. Rendez-vous dans la prochaine galaxie.", emoji: "🌌⚔️" },
      mid: { text: "L'équilibre dans la Force a été maintenu. Continuez votre entraînement, Padawans. Le prochain sprint nous attend.", emoji: "⚔️✨" },
      low: { text: "Le Côté Obscur a tenté de nous séduire, mais nous sommes toujours debout. Que la Force guide notre prochain sprint.", emoji: "🌑⚔️" },
      none: { text: "Le Conseil Jedi est réuni. Que la Force soit avec nous pour les sprints à venir.", emoji: "⚔️🌟" },
    },

    mdTitle: "⚔️ Conseil Jedi — Sprint",
    mdSummary: "📜 Archives du Conseil",
    mdGlobal: "Sondage de la Force",
    mdPinned: "📌 Transmissions clés",
    mdActions: "🗺️ Prochaine mission",
    mdDetail: "📋 Détail du Conseil",
  };
})();
