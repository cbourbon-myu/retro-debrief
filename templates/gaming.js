// ============================================================
// 🎮 GAME DEBRIEF — Template Jeux Vidéo
// ============================================================

(function () {
  window.RETRO_TEMPLATES = window.RETRO_TEMPLATES || {};

  window.RETRO_TEMPLATES["gaming"] = {
    id: "gaming",
    name: "🎮 Game Debrief",
    desc: "Level up & achievements",
    preview: "🏆💀🔧",
    dark: true,

   // 👇 Ajouter ici — l'ordre par défaut
    sectionOrder: ["rules", "vibecheck", "feedbacks", "feedbackInput", "roti", "summary", "outro"],
 
    bodyBg: "#0f0f1a",
    cardBg: "#1a1a2e",
    cardBorder: "#2d2d5e",
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accent: "#00ff88",
    accentDark: "#00cc6a",
    accentLight: "#0a1f14",
    inputBorder: "#374151",
    inputBg: "#16213e",
    progressBg: "#16213e",

    headerGradient: "linear-gradient(135deg, rgba(15,15,26,0.92) 0%, rgba(26,26,46,0.88) 40%, rgba(22,33,62,0.7) 100%)",
    headerImage: "none",
    rulesImage: "none",
    summaryImage: "none",
    summaryOverlay: "linear-gradient(135deg, rgba(15,15,26,0.95) 0%, rgba(26,26,46,0.92) 50%, rgba(15,15,26,0.95) 100%)",
    rulesOverlayDesktop: "linear-gradient(to right, rgba(26,26,46,0.97) 0%, rgba(26,26,46,0.95) 40%, rgba(26,26,46,0.8) 60%, rgba(26,26,46,0.5) 80%, rgba(26,26,46,0.3) 100%)",
    rulesOverlayMobile: "linear-gradient(to bottom, rgba(26,26,46,0.97) 0%, rgba(26,26,46,0.95) 50%, rgba(26,26,46,0.8) 70%, rgba(26,26,46,0.5) 100%)",
    outroGifs: null,

    loginBg: "#0f0f1a",
    loginCardBg: "#1a1a2e",
    loginBtnBg: "#1a1a2e",
    loginBtnBorder: "#2d2d5e",
    loginBtnHover: "#16213e",

    categories: [
      { id: "rock", label: "🏆 Achievement", color: "#A16207", bg: "#1c1607", border: "#EAB308" },
      { id: "fausse", label: "💀 Game Over", color: "#991B1B", bg: "#1c0606", border: "#EF4444" },
      { id: "ameliorer", label: "🔧 Patch Notes", color: "#0E7490", bg: "#061f26", border: "#06B6D4" },
    ],
    columns: {
      rock: { title: "🏆 Achievement Unlocked", color: "#A16207", border: "#EAB308" },
      fausse: { title: "💀 Game Over", color: "#991B1B", border: "#EF4444" },
      ameliorer: { title: "🔧 Patch Notes", color: "#0E7490", border: "#06B6D4" },
    },

    ratingLabels: {
      1: { emoji: "💀", label: "Game Over" },
      2: { emoji: "💔", label: "Dégâts critiques" },
      3: { emoji: "⚔️", label: "En combat" },
      4: { emoji: "🎮", label: "Combo réussi !" },
      5: { emoji: "👑", label: "Boss vaincu !" },
    },
    vibeChecks: [
      { id: "ambiance", label: "Ambiance du Lobby", color: "#7C3AED", bg: "#1a0a2e", border: "#A78BFA" },
      { id: "satisfaction", label: "Score de Partie", color: "#A16207", bg: "#1c1607", border: "#EAB308" },
    ],
    roti: { id: "roti", label: "ROTI", color: "#059669", bg: "#0a1f14", border: "#10B981" },
    ratingCatLabels: { ambiance: "Ambiance du Lobby", satisfaction: "Score de Partie", roti: "ROTI" },

    appTitle: "GAME DEBRIEF",
    subtitle: "Press START to retrospective • Cheat codes interdits • Respawn tous les 15 jours 🎮",
    rulesTitle: "🕹️",
    rulesName: "Règles du Lobby",
    rulesItems: [
      "No toxic, no flame — respect du lobby",
      "On débug le process, pas le joueur",
      "Tout le monde a le micro ouvert",
      "Ce qui se dit dans la game reste dans la game",
      "On farm les XP et on level up",
    ],
    rulesColor: "#00ff88",
    rulesDotColor: "#A78BFA",
    tooltip: {
      title: "🎮 Code Konami 🎮",
      quote: "\"↑ ↑ ↓ ↓ ← → ← → B A START\"",
      author: "- Kazuhisa Hashimoto, légende",
    },
    vibeTitle: "Stats de Partie",
    feedbackTitle: "💬 Chat vocal",
    afterTitle: "Écran de score",
    actionTitle: "🗺️ Quêtes du prochain sprint",
    actionQuote: "\"It's dangerous to go alone! Take this.\" 🗡️",
    summaryTitle: "🏆 Tableau des scores",
    summaryPinHint: "Épingle des retours avec 📌 pour le leaderboard",
    outroTitle: "🎬 Crédits",
    outro: {
      high: { text: "GG WP ! Score parfait. L'équipe a tout carry ce sprint. Ready pour la prochaine ranked dans 15 jours ?", emoji: "👑🎮" },
      mid: { text: "Bonne partie ! Quelques deaths mais le KDA reste positif. On respawn dans 15 jours plus forts.", emoji: "🎮⚔️" },
      low: { text: "Défaite... mais on a farmé de l'XP. Prochain sprint, on revient avec un meilleur build.", emoji: "💀🔄" },
      none: { text: "Partie en cours... Les stats arrivent bientôt. GG à toute l'équipe.", emoji: "🎮🏆" },
    },

    mdTitle: "🎮 Game Debrief — Sprint",
    mdSummary: "🏆 Tableau des scores",
    mdGlobal: "Stats de Partie",
    mdPinned: "📌 Highlights",
    mdActions: "🗺️ Quêtes du prochain sprint",
    mdDetail: "📋 Détail de la partie",
  };
})();
