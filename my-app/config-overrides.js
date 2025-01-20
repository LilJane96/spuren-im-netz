module.exports = function override(config, env) {
  config.module.rules.forEach((rule) => {
    if (rule.parser) {
      delete rule.parser.amd; // Entferne nicht unterstützte `amd`-Optionen
    }
  });

  config.module.rules.push({
    test: /\.js$/, // Nur auf .js-Dateien anwenden
    parser: {
      amd: false, // AMD-Unterstützung deaktivieren
    },
  });

  return config;
};
