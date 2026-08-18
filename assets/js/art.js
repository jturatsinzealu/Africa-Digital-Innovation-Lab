/* ============================================================
   ADIL card art: small animated SVG illustrations.
   One per research theme and per project, matched to its topic.
   Pure SVG + CSS animation, no images, no dependencies.
   Add a new key here and the card picks it up automatically.
   ============================================================ */
(function () {
  var C = {
    navy: "#0b1f3a", navy2: "#16304f", red: "#d0202e", green: "#8fae63",
    gold: "#e3c14f", mint: "#d9f0b4", paper: "#eef3e2", slate: "#3e5a7a"
  };

  function frame(inner, bg) {
    return '<svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="320" height="120" fill="' + (bg || C.navy) + '"/>' + inner + '</svg>';
  }
  // shared keyframes injected once
  var css = '<style>' +
    '@keyframes adilDash{to{stroke-dashoffset:-260}}' +
    '@keyframes adilPulse{0%,100%{opacity:.25;r:3}50%{opacity:1;r:5.5}}' +
    '@keyframes adilRise{0%{transform:translateY(6px);opacity:0}30%{opacity:1}100%{transform:translateY(-14px);opacity:0}}' +
    '@keyframes adilSweep{0%{transform:translateX(-70px)}100%{transform:translateX(330px)}}' +
    '@keyframes adilRing{0%{r:6;opacity:.85}100%{r:46;opacity:0}}' +
    '@keyframes adilBar{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}' +
    '@keyframes adilBlink{0%,100%{opacity:.2}50%{opacity:1}}' +
    '@keyframes adilGrow{0%{transform:scaleY(0);opacity:0}20%{opacity:1}100%{transform:scaleY(1);opacity:1}}' +
    '@keyframes adilSpin{to{transform:rotate(360deg)}}' +
    '@keyframes adilFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}' +
    '@media (prefers-reduced-motion: reduce){svg *{animation:none!important}}' +
    '</style>';

  var ART = {
    /* ---------------- research themes ---------------- */

    // Language AI: speech waveform resolving into text lines
    "language-ai": function () {
      var bars = "";
      for (var i = 0; i < 26; i++) {
        var x = 18 + i * 7, h = 8 + (i % 5) * 9 + (i % 3) * 6;
        bars += '<rect x="' + x + '" y="' + (60 - h / 2) + '" width="3.4" height="' + h + '" rx="1.7" fill="' +
          (i % 4 === 0 ? C.gold : C.mint) + '" opacity="0.85" style="transform-origin:' + (x + 1.7) + 'px 60px;animation:adilBar ' +
          (1.1 + (i % 5) * 0.16) + 's ease-in-out ' + (i * 0.05) + 's infinite"/>';
      }
      return frame(css + bars +
        '<g opacity="0.75">' +
        '<rect x="212" y="82" width="76" height="4" rx="2" fill="' + C.green + '"/>' +
        '<rect x="212" y="92" width="54" height="4" rx="2" fill="' + C.green + '" opacity="0.6"/>' +
        '<rect x="212" y="102" width="64" height="4" rx="2" fill="' + C.green + '" opacity="0.35"/>' +
        '</g>' +
        '<text x="18" y="103" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">KINYARWANDA · SWAHILI</text>');
    },

    // Software engineering for low-resource contexts: code blocks + offline signal
    "software-engineering": function () {
      var lines = "";
      var w = [58, 92, 44, 76, 66, 38];
      for (var i = 0; i < w.length; i++) {
        lines += '<rect x="26" y="' + (24 + i * 14) + '" width="' + w[i] + '" height="5" rx="2.5" fill="' +
          (i === 1 ? C.mint : C.slate) + '" opacity="' + (i === 1 ? 0.95 : 0.75) + '" ' +
          'style="animation:adilBlink ' + (2 + i * 0.4) + 's ease-in-out ' + (i * 0.2) + 's infinite"/>';
      }
      var arcs = "";
      for (var a = 0; a < 3; a++) {
        arcs += '<circle cx="252" cy="88" r="' + (14 + a * 14) + '" fill="none" stroke="' + C.green +
          '" stroke-width="2" opacity="0.5" style="animation:adilBlink ' + (2.2) + 's ease-in-out ' + (a * 0.5) + 's infinite"/>';
      }
      return frame(css + lines + arcs +
        '<circle cx="252" cy="88" r="5" fill="' + C.gold + '"/>' +
        '<text x="26" y="112" fill="' + C.paper + '" opacity="0.5" font-family="monospace" font-size="9" letter-spacing="2">OFFLINE FIRST · EDGE</text>');
    },

    // Health: ECG trace with a pulsing node
    "ai-health": function () {
      var path = "M0 70 L60 70 L72 70 L80 44 L90 96 L100 70 L128 70 L140 70 L148 48 L158 92 L168 70 L320 70";
      return frame(css +
        '<path d="' + path + '" fill="none" stroke="' + C.red + '" stroke-width="3" stroke-linecap="round" ' +
        'stroke-dasharray="10 6" style="animation:adilDash 3.4s linear infinite" opacity="0.95"/>' +
        '<path d="' + path + '" fill="none" stroke="' + C.red + '" stroke-width="1" opacity="0.28"/>' +
        '<circle cx="245" cy="70" r="4" fill="' + C.mint + '" style="animation:adilPulse 1.6s ease-in-out infinite"/>' +
        '<g opacity="0.6"><rect x="20" y="94" width="46" height="4" rx="2" fill="' + C.green + '"/>' +
        '<rect x="20" y="103" width="30" height="4" rx="2" fill="' + C.green + '" opacity="0.6"/></g>' +
        '<text x="20" y="30" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">POINT OF CARE</text>');
    },

    // Agriculture: growing stalks under a scanning sweep
    "climate-agriculture": function () {
      var stalks = "";
      for (var i = 0; i < 9; i++) {
        var x = 30 + i * 32, hh = 30 + (i % 4) * 12;
        stalks += '<g style="transform-origin:' + x + 'px 100px;animation:adilGrow ' + (2.6 + i * 0.2) + 's ease-out ' + (i * 0.15) + 's infinite">' +
          '<rect x="' + (x - 1.6) + '" y="' + (100 - hh) + '" width="3.2" height="' + hh + '" rx="1.6" fill="' + C.green + '"/>' +
          '<ellipse cx="' + (x - 7) + '" cy="' + (100 - hh + 8) + '" rx="7" ry="3.4" fill="' + C.green + '" opacity="0.85" transform="rotate(-24 ' + (x - 7) + ' ' + (100 - hh + 8) + ')"/>' +
          '<ellipse cx="' + (x + 7) + '" cy="' + (100 - hh + 15) + '" rx="7" ry="3.4" fill="' + C.mint + '" opacity="0.7" transform="rotate(24 ' + (x + 7) + ' ' + (100 - hh + 15) + ')"/>' +
          '</g>';
      }
      return frame(css + stalks +
        '<rect x="0" y="100" width="320" height="20" fill="#20351c"/>' +
        '<rect x="-70" y="0" width="46" height="120" fill="' + C.mint + '" opacity="0.14" style="animation:adilSweep 4.6s linear infinite"/>' +
        '<text x="20" y="24" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">CROP HEALTH SCAN</text>');
    },

    // Sensing: radar rings + sensor dots
    "sensing": function () {
      var rings = "";
      for (var a = 0; a < 3; a++) {
        rings += '<circle cx="160" cy="70" r="6" fill="none" stroke="' + C.mint + '" stroke-width="2" ' +
          'style="animation:adilRing 3.2s ease-out ' + (a * 1.06) + 's infinite"/>';
      }
      var dots = "";
      var pts = [[54, 40], [96, 92], [232, 44], [268, 88], [128, 30], [204, 100]];
      for (var i = 0; i < pts.length; i++) {
        dots += '<circle cx="' + pts[i][0] + '" cy="' + pts[i][1] + '" r="3.5" fill="' + (i % 2 ? C.gold : C.green) +
          '" style="animation:adilPulse ' + (1.8 + i * 0.3) + 's ease-in-out ' + (i * 0.25) + 's infinite"/>';
      }
      return frame(css +
        '<g opacity="0.25" stroke="' + C.slate + '" stroke-width="1">' +
        '<path d="M0 40H320M0 70H320M0 100H320M80 0V120M160 0V120M240 0V120"/></g>' +
        rings + dots +
        '<circle cx="160" cy="70" r="5" fill="' + C.red + '"/>' +
        '<text x="20" y="112" fill="' + C.paper + '" opacity="0.5" font-family="monospace" font-size="9" letter-spacing="2">SENSOR NETWORK</text>');
    },

    // Responsible AI: balance scale + shield
    "responsible-computing": function () {
      return frame(css +
        '<g style="transform-origin:160px 44px;animation:adilFloat 4s ease-in-out infinite">' +
        '<rect x="158" y="30" width="4" height="52" rx="2" fill="' + C.paper + '" opacity="0.85"/>' +
        '<rect x="104" y="38" width="112" height="3.5" rx="1.75" fill="' + C.paper + '" opacity="0.85"/>' +
        '<path d="M104 40 L92 62 H116 Z" fill="' + C.green + '" opacity="0.9"/>' +
        '<path d="M216 40 L204 62 H228 Z" fill="' + C.red + '" opacity="0.9"/>' +
        '<circle cx="160" cy="26" r="5" fill="' + C.gold + '"/>' +
        '</g>' +
        '<path d="M160 84 l26 8 v12 c0 10 -12 16 -26 20 c-14 -4 -26 -10 -26 -20 v-12 z" fill="none" stroke="' + C.mint +
        '" stroke-width="2" opacity="0.7" style="animation:adilBlink 3s ease-in-out infinite"/>' +
        '<text x="20" y="26" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">FAIR · ACCOUNTABLE</text>');
    },

    /* ---------------- projects ---------------- */

    // KinyaVoice: voice ring speaking into text
    "kinyavoice": function () {
      var bars = "";
      for (var i = 0; i < 14; i++) {
        var x = 132 + i * 12, h = 10 + (i % 4) * 12 + (i % 3) * 8;
        bars += '<rect x="' + x + '" y="' + (60 - h / 2) + '" width="4" height="' + h + '" rx="2" fill="' + C.mint +
          '" opacity="0.9" style="transform-origin:' + (x + 2) + 'px 60px;animation:adilBar ' + (1 + (i % 4) * 0.2) + 's ease-in-out ' + (i * 0.07) + 's infinite"/>';
      }
      return frame(css +
        '<circle cx="70" cy="60" r="26" fill="none" stroke="' + C.gold + '" stroke-width="2" opacity="0.6"/>' +
        '<circle cx="70" cy="60" r="6" fill="none" stroke="' + C.gold + '" stroke-width="2" style="animation:adilRing 2.8s ease-out infinite"/>' +
        '<rect x="64" y="46" width="12" height="22" rx="6" fill="' + C.gold + '"/>' +
        '<path d="M56 64 a14 14 0 0 0 28 0" fill="none" stroke="' + C.gold + '" stroke-width="2.4"/>' +
        '<rect x="69" y="78" width="2.5" height="8" fill="' + C.gold + '"/>' +
        bars +
        '<text x="132" y="100" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">MURAKAZA NEZA</text>');
    },

    // ImyakaAI: leaf under a detection box
    "imyaka-ai": function () {
      return frame(css +
        '<g style="transform-origin:160px 62px;animation:adilFloat 5s ease-in-out infinite">' +
        '<path d="M160 96 C 118 88 106 52 132 28 C 168 34 186 62 160 96 Z" fill="' + C.green + '" opacity="0.92"/>' +
        '<path d="M160 96 C 150 74 142 48 132 28" fill="none" stroke="' + C.navy + '" stroke-width="2" opacity="0.65"/>' +
        '<circle cx="145" cy="56" r="4" fill="' + C.red + '" style="animation:adilPulse 1.8s ease-in-out infinite"/>' +
        '<circle cx="156" cy="76" r="3" fill="' + C.red + '" style="animation:adilPulse 2.2s ease-in-out .4s infinite"/>' +
        '</g>' +
        '<g stroke="' + C.mint + '" stroke-width="2" fill="none" opacity="0.9">' +
        '<path d="M104 26 h16 M104 26 v16 M216 26 h-16 M216 26 v16 M104 100 h16 M104 100 v-16 M216 100 h-16 M216 100 v-16"/></g>' +
        '<rect x="-70" y="0" width="40" height="120" fill="' + C.mint + '" opacity="0.16" style="animation:adilSweep 4s linear infinite"/>' +
        '<text x="20" y="112" fill="' + C.paper + '" opacity="0.5" font-family="monospace" font-size="9" letter-spacing="2">DISEASE DETECTED</text>');
    },

    // SomaAI: book with a chat bubble
    "soma-ai": function () {
      return frame(css +
        '<g style="transform-origin:120px 60px;animation:adilFloat 5.2s ease-in-out infinite">' +
        '<path d="M60 44 C 84 34 106 34 118 42 L118 96 C 106 88 84 88 60 98 Z" fill="' + C.paper + '" opacity="0.92"/>' +
        '<path d="M176 44 C 152 34 130 34 118 42 L118 96 C 130 88 152 88 176 98 Z" fill="' + C.paper + '" opacity="0.7"/>' +
        '<path d="M118 42 V96" stroke="' + C.navy + '" stroke-width="2"/>' +
        '</g>' +
        '<g style="transform-origin:246px 46px;animation:adilFloat 4.2s ease-in-out .6s infinite">' +
        '<rect x="206" y="22" width="84" height="44" rx="10" fill="' + C.gold + '" opacity="0.95"/>' +
        '<path d="M226 66 l4 12 l12 -12 z" fill="' + C.gold + '" opacity="0.95"/>' +
        '<circle cx="230" cy="44" r="3.6" fill="' + C.navy + '" style="animation:adilBlink 1.4s infinite"/>' +
        '<circle cx="246" cy="44" r="3.6" fill="' + C.navy + '" style="animation:adilBlink 1.4s .2s infinite"/>' +
        '<circle cx="262" cy="44" r="3.6" fill="' + C.navy + '" style="animation:adilBlink 1.4s .4s infinite"/>' +
        '</g>' +
        '<text x="60" y="112" fill="' + C.paper + '" opacity="0.5" font-family="monospace" font-size="9" letter-spacing="2">FEEDBACK AT SCALE</text>');
    },

    // UbuzimaAI: phone screen reading a sample
    "ubuzima-ai": function () {
      var cells = "";
      var cp = [[104, 44], [126, 62], [98, 74], [132, 38], [116, 88]];
      for (var i = 0; i < cp.length; i++) {
        cells += '<circle cx="' + cp[i][0] + '" cy="' + cp[i][1] + '" r="6" fill="' + (i < 2 ? C.red : C.slate) +
          '" opacity="0.9" style="animation:adilPulse ' + (2 + i * 0.3) + 's ease-in-out ' + (i * 0.2) + 's infinite"/>';
      }
      return frame(css +
        '<circle cx="116" cy="62" r="42" fill="#12253d" stroke="' + C.mint + '" stroke-width="2" opacity="0.9"/>' +
        cells +
        '<rect x="196" y="16" width="62" height="96" rx="10" fill="' + C.paper + '" opacity="0.95"/>' +
        '<rect x="204" y="28" width="46" height="46" rx="4" fill="#12253d"/>' +
        '<rect x="204" y="82" width="34" height="4" rx="2" fill="' + C.green + '"/>' +
        '<rect x="204" y="92" width="22" height="4" rx="2" fill="' + C.green + '" opacity="0.6"/>' +
        '<rect x="204" y="28" width="46" height="3" fill="' + C.mint + '" style="animation:adilRise 2.6s linear infinite"/>' +
        '<text x="20" y="112" fill="' + C.paper + '" opacity="0.5" font-family="monospace" font-size="9" letter-spacing="2">TRIAGE SUPPORT</text>');
    },

    // Kigali AirWatch: rising particles + sensor mast
    "kigali-airwatch": function () {
      var motes = "";
      for (var i = 0; i < 16; i++) {
        var x = 24 + i * 18;
        motes += '<circle cx="' + x + '" cy="' + (70 + (i % 5) * 8) + '" r="' + (2 + (i % 3)) + '" fill="' +
          (i % 4 === 0 ? C.red : C.mint) + '" opacity="0.75" style="animation:adilRise ' + (3 + (i % 5) * 0.6) + 's linear ' + (i * 0.25) + 's infinite"/>';
      }
      return frame(css + motes +
        '<g opacity="0.9"><rect x="252" y="44" width="4" height="58" fill="' + C.paper + '" opacity="0.8"/>' +
        '<rect x="238" y="34" width="32" height="16" rx="4" fill="' + C.gold + '"/>' +
        '<circle cx="254" cy="28" r="4" fill="' + C.red + '" style="animation:adilPulse 1.6s ease-in-out infinite"/></g>' +
        '<path d="M0 104 H320" stroke="' + C.slate + '" stroke-width="2" opacity="0.5"/>' +
        '<text x="20" y="26" fill="' + C.paper + '" opacity="0.55" font-family="monospace" font-size="9" letter-spacing="2">PM2.5 · LIVE</text>');
    },

    // SokoFlow: bar chart with a rising trend line
    "sokoflow": function () {
      var bars = "";
      var hs = [26, 40, 34, 54, 46, 68, 60, 82];
      for (var i = 0; i < hs.length; i++) {
        var x = 30 + i * 34;
        bars += '<rect x="' + x + '" y="' + (100 - hs[i]) + '" width="18" height="' + hs[i] + '" rx="3" fill="' +
          (i === hs.length - 1 ? C.gold : C.slate) + '" opacity="0.9" ' +
          'style="transform-origin:' + (x + 9) + 'px 100px;animation:adilGrow ' + (3 + i * 0.1) + 's ease-out ' + (i * 0.12) + 's infinite"/>';
      }
      return frame(css + bars +
        '<path d="M39 74 L73 60 L107 66 L141 46 L175 54 L209 32 L243 40 L277 18" fill="none" stroke="' + C.mint +
        '" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="8 5" style="animation:adilDash 3s linear infinite"/>' +
        '<path d="M0 100 H320" stroke="' + C.paper + '" stroke-width="1.5" opacity="0.4"/>' +
        '<text x="20" y="118" fill="' + C.paper + '" opacity="0.45" font-family="monospace" font-size="9" letter-spacing="2">SME CASH FLOW</text>');
    }
  };

  // fallback: abstract node graph
  ART._default = function () {
    var g = "";
    var pts = [[60, 40], [120, 80], [180, 36], [240, 84], [290, 50]];
    for (var i = 0; i < pts.length - 1; i++) {
      g += '<line x1="' + pts[i][0] + '" y1="' + pts[i][1] + '" x2="' + pts[i + 1][0] + '" y2="' + pts[i + 1][1] +
        '" stroke="' + C.slate + '" stroke-width="2" opacity="0.7"/>';
    }
    for (var j = 0; j < pts.length; j++) {
      g += '<circle cx="' + pts[j][0] + '" cy="' + pts[j][1] + '" r="5" fill="' + (j % 2 ? C.green : C.gold) +
        '" style="animation:adilPulse ' + (2 + j * 0.3) + 's ease-in-out ' + (j * 0.2) + 's infinite"/>';
    }
    return frame(css + g);
  };

  window.CARD_ART = function (id) {
    var fn = ART[id] || ART._default;
    return fn();
  };
})();
