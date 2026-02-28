// ============================================================
// 🎸 BACKSTAGE DEBRIEF — Template original Rock & Concert
// ============================================================
// Pour créer un nouveau template, copie ce fichier,
// change l'id et adapte chaque propriété.
// Le fichier s'enregistre tout seul au chargement.
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  window.RETRO_TEMPLATES["backstage"] = {
    // --- Identité ---
    id: "backstage",
    name: "🎸 Backstage Debrief",
    desc: "Rock & concert",
    preview: "🎸🔇🎛️",
    dark: false,

    // --- Couleurs globales ---
    bodyBg: "#F8EBDB",
    cardBg: "#FFFAF5",
    cardBorder: "#F5D0B0",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    accent: "#F97316",
    accentDark: "#EA580C",
    accentLight: "#FFF7ED",
    inputBorder: "#E8C9A8",
    inputBg: "#FFFAF5",
    progressBg: "#F0DCC8",

    // --- Images & fonds ---
    headerGradient: "linear-gradient(135deg, rgba(28,10,10,0.85) 0%, rgba(59,15,15,0.80) 40%, rgba(120,30,20,0.45) 100%)",
    headerImage: 'url("https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/titre.jpg")',
    rulesImage: 'url("https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/neon.jpg")',
    summaryImage: 'url("https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/concert.jpg")',
    summaryOverlay: "linear-gradient(135deg, rgba(28,10,10,0.88) 0%, rgba(50,14,14,0.92) 50%, rgba(28,10,10,0.88) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, #FFF6EE 0%, #FFF6EE 40%, rgba(255,246,238,0.7) 60%, rgba(255,246,238,0.2) 80%, transparent 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, #FFF6EE 0%, #FFF6EE 50%, rgba(255,246,238,0.7) 70%, rgba(255,246,238,0.3) 100%)",
    outroGifs: {
      high: "https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/msg3.gif",
      mid: "https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/msg2.gif",
      low: "https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/msg1.gif",
      none: "https://raw.githubusercontent.com/cbourbon-myu/retro-debrief/main/assets/msg2.gif",
    },

    // --- Login (écran de connexion) ---
    loginBg: "#F8EBDB",
    loginCardBg: "#FEF5EC",
    loginBtnBg: "#FEF5EC",
    loginBtnBorder: "#E8C9A8",
    loginBtnHover: "#FCB98B",

    // --- Catégories (les 3 colonnes de feedbacks) ---
    categories: [
      { id: "rock", label: "🎸 A rocké", color: "#92400E", bg: "#FEF9C3", border: "#CA8A04" },
      { id: "fausse", label: "🔇 Fausse note", color: "#9F1239", bg: "#FFF1F2", border: "#E11D48" },
      { id: "ameliorer", label: "🎛️ Le soundcheck", color: "#9A3412", bg: "#FFF7ED", border: "#F97316" },
    ],
    columns: {
      rock: { title: "🎸 Ce qui a rocké", color: "#92400E", border: "#CA8A04" },
      fausse: { title: "🔇 Les fausses notes", color: "#9F1239", border: "#E11D48" },
      ameliorer: { title: "🎛️ Le soundcheck", color: "#9A3412", border: "#F97316" },
    },

    // --- Système de votes (emojis 1-5) ---
    ratingLabels: {
      1: { emoji: "💀", label: "Silence de mort" },
      2: { emoji: "🎵", label: "Fausse note" },
      3: { emoji: "🎸", label: "En rodage" },
      4: { emoji: "🤘", label: "Ça groove !" },
      5: { emoji: "⭐", label: "Épique !" },
    },
    vibeChecks: [
      { id: "ambiance", label: "Ambiance du Sprint", color: "#9F1239", bg: "#FFF1F2", border: "#E11D48" },
      { id: "satisfaction", label: "Satisfaction Travail", color: "#92400E", bg: "#FEF9C3", border: "#CA8A04" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#C2410C", bg: "#FFEDD5", border: "#EA580C" },
    ratingCatLabels: { ambiance: "Ambiance du Sprint", satisfaction: "Satisfaction Travail", roti: "ROTI" },

    // --- Textes de l'interface ---
    appTitle: "BACKSTAGE DEBRIEF",
    subtitle: "Tous les 15 jours • Mardi 14h30-15h30 • Ce qui se dit en backstage reste en backstage 🤫",
    rulesTitle: "🎼",
    rulesName: "Règles du Pitt",
    rulesItems: [
      "Respect mutuel",
      "Focus sur les process, pas les personnes",
      "Tout le monde participe",
      "Ce qui est dit en rétro reste en rétro",
      "On identifie, on propose, on agit",
    ],
    rulesColor: "#78350F",
    rulesDotColor: "#E11D48",
    tooltip: {
      title: "🥊 1ère règle du GI Club 🥊",
      quote: "\"Il est interdit de parler du GI Club.\"",
      author: "- Tyler Durden, probablement...",
    },
    vibeTitle: "Vibe check",
    feedbackTitle: "🫳 Drop the mic",
    afterTitle: "L'after",
    actionTitle: "🎯 Setlist du prochain set",
    actionQuote: "\"On repart avec 2-3 actions concrètes. L'idée : être un peu meilleurs pour le prochain set.\" 🤘",
    summaryTitle: "🥁 Le Rappel",
    summaryPinHint: "Épingle des retours avec 📌 pour construire le résumé",
    outroTitle: "🎤 Outro",
    outro: {
      high: { text: "Feedback dans les oreilles et sang sur les cordes : merci la meute, le son était crade et c'est pour ça qu'on s'aime. On revient foutre le feu dans 15 jours.", emoji: "🤘🏚️" },
      mid: { text: "Larsen en boucle, sueur au front et équipe au sommet : merci pour le chaos, on revient tout casser dans 15 jours.", emoji: "🤘🔥" },
      low: { text: "Le rideau tombe mais l'ampli siffle encore : merci à l'équipe, on sonne d'enfer ensemble et on remet le son dans 15 jours !", emoji: "🤘🎸" },
      none: { text: "On accorde les guitares et on libère les chevaux... Préparez-vous, ça va secouer les fondations !", emoji: "💥⚡️" },
    },

    // --- Labels pour l'export Markdown/Confluence ---
    mdTitle: "🥁 Rétro Sprint",
    mdSummary: "🎸 Le Rappel",
    mdGlobal: "Ressenti global",
    mdPinned: "📌 Retours clés",
    mdActions: "🎯 Setlist du prochain set",
    mdDetail: "📋 Détail de la rétro",
  };
})();
