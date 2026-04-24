/* Token data for all display modes: lc=Light Coordinator, lp=Light Personal, dc=Dark Coordinator */
(function () {
  var T = {
    /* ── Backgrounds ── */
    'bg/base':                { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#ffffff',prim:'color/neutral/0 - White'},        dc:{hex:'#232a39',prim:'color/neutral/dark/200'} },
    'bg/base-hover':          { lc:{hex:'#f8f8f9',prim:'color/neutral/100'},              lp:{hex:'#f8f8f9',prim:'color/neutral/100'},              dc:{hex:'#313949',prim:'color/neutral/dark/300'} },
    'bg/base-pressed':        { lc:{hex:'#f1f2f4',prim:'color/neutral/200'},              lp:{hex:'#f1f2f4',prim:'color/neutral/200'},              dc:{hex:'#454d5f',prim:'color/neutral/dark/400'} },
    'bg/secondary':           { lc:{hex:'#f8f8f9',prim:'color/neutral/100'},              lp:{hex:'#f8f8f9',prim:'color/neutral/100'},              dc:{hex:'#313949',prim:'color/neutral/dark/300'} },
    'bg/secondary-hover':     { lc:{hex:'#ebecef',prim:'color/neutral/300'},              lp:{hex:'#ebecef',prim:'color/neutral/300'},              dc:{hex:'#454d5f',prim:'color/neutral/dark/400'} },
    'bg/secondary-pressed':   { lc:{hex:'#e1e4e8',prim:'color/neutral/400'},              lp:{hex:'#e1e4e8',prim:'color/neutral/400'},              dc:{hex:'#4d576a',prim:'color/neutral/dark/500'} },
    'bg/tertiary':            { lc:{hex:'#e1e4e8',prim:'color/neutral/400'},              lp:{hex:'#e1e4e8',prim:'color/neutral/400'},              dc:{hex:'#4d576a',prim:'color/neutral/dark/500'} },
    'bg/disabled':            { lc:{hex:'rgba(25,39,67,0.10)',prim:'color/neutral/alpha-10'}, lp:{hex:'rgba(25,39,67,0.10)',prim:'color/neutral/alpha-10'}, dc:{hex:'rgba(255,255,255,0.10)',prim:'color/neutral/dark/alpha-10'} },
    'bg/input':               { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#ffffff',prim:'color/neutral/0 - White'},        dc:{hex:'#313949',prim:'color/neutral/dark/300'} },
    'bg/input-hover':         { lc:{hex:'#f8f8f9',prim:'color/neutral/100'},              lp:{hex:'#f8f8f9',prim:'color/neutral/100'},              dc:{hex:'#454d5f',prim:'color/neutral/dark/400'} },
    'bg/inverse/base':        { lc:{hex:'#192743',prim:'color/neutral/1200'},             lp:{hex:'#192743',prim:'color/neutral/1200'},             dc:{hex:'#f4f4f6',prim:'color/neutral/dark/1200'} },
    'bg/inverse/hover':       { lc:{hex:'#4a5873',prim:'color/neutral/1000'},             lp:{hex:'#4a5873',prim:'color/neutral/1000'},             dc:{hex:'#cfd2d8',prim:'color/neutral/dark/1000'} },
    'bg/interface/overlay':   { lc:{hex:'rgba(25,39,67,0.50)',prim:'color/neutral/alpha-50'}, lp:{hex:'rgba(25,39,67,0.50)',prim:'color/neutral/alpha-50'}, dc:{hex:'rgba(25,39,67,0.50)',prim:'color/neutral/alpha-50'} },
    /* Brand */
    'bg/brand/base':          { lc:{hex:'#0a9d99',prim:'color/turquoise/600'},            lp:{hex:'#fecd29',prim:'color/yellow/300'},               dc:{hex:'#0a9d99',prim:'color/turquoise/600'} },
    'bg/brand/base-hover':    { lc:{hex:'#0c827f',prim:'color/turquoise/700'},            lp:{hex:'#fdbd12',prim:'color/yellow/400'},               dc:{hex:'#30b3af',prim:'color/turquoise/500'} },
    'bg/brand/base-pressed':  { lc:{hex:'#166764',prim:'color/turquoise/800'},            lp:{hex:'#ec9f06',prim:'color/yellow/500'},               dc:{hex:'#5acbc7',prim:'color/turquoise/400'} },
    'bg/brand/subtle':        { lc:{hex:'#d2f8f6',prim:'color/turquoise/100'},            lp:{hex:'#ffe488',prim:'color/yellow/200'},               dc:{hex:'#166764',prim:'color/turquoise/800'} },
    /* Feedback */
    'bg/positive/base':       { lc:{hex:'#278747',prim:'color/green/700'},                lp:{hex:'#278747',prim:'color/green/700'},                dc:{hex:'#55ba76',prim:'color/green/500'} },
    'bg/positive/base-hover': { lc:{hex:'#236e41',prim:'color/green/800'},                lp:{hex:'#236e41',prim:'color/green/800'},                dc:{hex:'#72ce90',prim:'color/green/400'} },
    'bg/positive/subtle':     { lc:{hex:'#d7f9e0',prim:'color/green/100'},                lp:{hex:'#d7f9e0',prim:'color/green/100'},                dc:{hex:'#0a3914',prim:'color/green/1000'} },
    'bg/negative/base':       { lc:{hex:'#d3353b',prim:'color/red/700'},                  lp:{hex:'#d3353b',prim:'color/red/700'},                  dc:{hex:'#d3353b',prim:'color/red/700'} },
    'bg/negative/base-hover': { lc:{hex:'#b9252a',prim:'color/red/800'},                  lp:{hex:'#b9252a',prim:'color/red/800'},                  dc:{hex:'#f74e50',prim:'color/red/600'} },
    'bg/negative/base-pressed':{ lc:{hex:'#860e12',prim:'color/red/900'},                 lp:{hex:'#860e12',prim:'color/red/900'},                  dc:{hex:'#fe7377',prim:'color/red/500'} },
    'bg/negative/subtle':     { lc:{hex:'#ffebeb',prim:'color/red/100'},                  lp:{hex:'#ffebeb',prim:'color/red/100'},                  dc:{hex:'#63060a',prim:'color/red/1000'} },
    'bg/warning/bold':        { lc:{hex:'#fa8324',prim:'color/orange/500'},               lp:{hex:'#fa8324',prim:'color/orange/500'},               dc:{hex:'#ec6e0a',prim:'color/orange/600'} },
    'bg/warning/subtle':      { lc:{hex:'#feede1',prim:'color/orange/100'},               lp:{hex:'#feede1',prim:'color/orange/100'},               dc:{hex:'#542103',prim:'color/orange/1000'} },
    'bg/info/base':           { lc:{hex:'#3174db',prim:'color/blue/700'},                 lp:{hex:'#3174db',prim:'color/blue/700'},                 dc:{hex:'#4c8ef2',prim:'color/blue/600'} },
    'bg/info/base-hover':     { lc:{hex:'#205bb9',prim:'color/blue/800'},                 lp:{hex:'#205bb9',prim:'color/blue/800'},                 dc:{hex:'#6aa4f7',prim:'color/blue/500'} },
    'bg/info/subtle':         { lc:{hex:'#e6f0fe',prim:'color/blue/100'},                 lp:{hex:'#e6f0fe',prim:'color/blue/100'},                 dc:{hex:'#0e2d5d',prim:'color/blue/1000'} },
    'bg/highlight/base':      { lc:{hex:'#fdbd12',prim:'color/yellow/400'},               lp:{hex:'#fdbd12',prim:'color/yellow/400'},               dc:{hex:'#b16107',prim:'color/yellow/700'} },
    'bg/highlight/subtle':    { lc:{hex:'#ffefc2',prim:'color/yellow/100'},               lp:{hex:'#ffefc2',prim:'color/yellow/100'},               dc:{hex:'#512206',prim:'color/yellow/1000'} },
    /* Data viz */
    'bg/results/current':     { lc:{hex:'#4c8ef2',prim:'color/blue/600'},                 lp:{hex:'#4c8ef2',prim:'color/blue/600'},                 dc:{hex:'#4c8ef2',prim:'color/blue/600'} },
    'bg/results/previous':    { lc:{hex:'#fdbd12',prim:'color/yellow/400'},               lp:{hex:'#fdbd12',prim:'color/yellow/400'},               dc:{hex:'#ec9f06',prim:'color/yellow/500'} },
    'bg/results/benchmark':   { lc:{hex:'#0a9d99',prim:'color/turquoise/600'},            lp:{hex:'#0a9d99',prim:'color/turquoise/600'},            dc:{hex:'#0a9d99',prim:'color/turquoise/600'} },
    'bg/scores/very-positive':{ lc:{hex:'#94dfa8',prim:'color/green/300'},                lp:{hex:'#94dfa8',prim:'color/green/300'},                dc:{hex:'#39a35c',prim:'color/green/600'} },
    'bg/scores/positive':     { lc:{hex:'#bdf4cc',prim:'color/green/200'},                lp:{hex:'#bdf4cc',prim:'color/green/200'},                dc:{hex:'#236e41',prim:'color/green/800'} },
    'bg/scores/neutral':      { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#ffffff',prim:'color/neutral/0 - White'},        dc:{hex:'#151b26',prim:'color/neutral/dark/0'} },
    'bg/scores/negative':     { lc:{hex:'#ffdbdb',prim:'color/red/200'},                  lp:{hex:'#ffdbdb',prim:'color/red/200'},                  dc:{hex:'#b9252a',prim:'color/red/800'} },
    'bg/scores/very-negative':{ lc:{hex:'#feb9b9',prim:'color/red/300'},                  lp:{hex:'#feb9b9',prim:'color/red/300'},                  dc:{hex:'#d3353b',prim:'color/red/700'} },
    'bg/distribution/strongly-agree':       { lc:{hex:'#278747',prim:'color/green/700'},  lp:{hex:'#278747',prim:'color/green/700'},  dc:{hex:'#39a35c',prim:'color/green/600'} },
    'bg/distribution/agree':                { lc:{hex:'#55ba76',prim:'color/green/500'},  lp:{hex:'#55ba76',prim:'color/green/500'},  dc:{hex:'#72ce90',prim:'color/green/400'} },
    'bg/distribution/neither-agree-disagree':{ lc:{hex:'#ec9f06',prim:'color/yellow/500'},lp:{hex:'#ec9f06',prim:'color/yellow/500'},dc:{hex:'#fdbd12',prim:'color/yellow/400'} },
    'bg/distribution/disagree':             { lc:{hex:'#d3353b',prim:'color/red/700'},    lp:{hex:'#d3353b',prim:'color/red/700'},    dc:{hex:'#fe9c9c',prim:'color/red/400'} },
    'bg/distribution/strongly-disagree':    { lc:{hex:'#860e12',prim:'color/red/900'},    lp:{hex:'#860e12',prim:'color/red/900'},    dc:{hex:'#f74e50',prim:'color/red/600'} },
    'bg/distribution/no-answer':            { lc:{hex:'#e1e4e8',prim:'color/neutral/400'},lp:{hex:'#e1e4e8',prim:'color/neutral/400'},dc:{hex:'#5e6a82',prim:'color/neutral/dark/600'} },

    /* ── Content / Text ── */
    'content/base':           { lc:{hex:'#192743',prim:'color/neutral/1200'},             lp:{hex:'#192743',prim:'color/neutral/1200'},             dc:{hex:'rgba(255,255,255,0.95)',prim:'color/neutral/dark/alpha-95'} },
    'content/secondary':      { lc:{hex:'rgba(25,39,67,0.80)',prim:'color/neutral/alpha-80'},  lp:{hex:'rgba(25,39,67,0.80)',prim:'color/neutral/alpha-80'},  dc:{hex:'rgba(255,255,255,0.80)',prim:'color/neutral/dark/alpha-80'} },
    'content/subtle':         { lc:{hex:'rgba(25,39,67,0.50)',prim:'color/neutral/alpha-50'},  lp:{hex:'rgba(25,39,67,0.50)',prim:'color/neutral/alpha-50'},  dc:{hex:'rgba(255,255,255,0.50)',prim:'color/neutral/dark/alpha-50'} },
    'content/placeholder':    { lc:{hex:'rgba(25,39,67,0.65)',prim:'color/neutral/alpha-65'},  lp:{hex:'rgba(25,39,67,0.65)',prim:'color/neutral/alpha-65'},  dc:{hex:'rgba(255,255,255,0.65)',prim:'color/neutral/dark/alpha-65'} },
    'content/disabled':       { lc:{hex:'rgba(25,39,67,0.30)',prim:'color/neutral/alpha-30'},  lp:{hex:'rgba(25,39,67,0.30)',prim:'color/neutral/alpha-30'},  dc:{hex:'rgba(255,255,255,0.30)',prim:'color/neutral/dark/alpha-30'} },
    'content/action':         { lc:{hex:'rgba(25,39,67,0.80)',prim:'color/neutral/alpha-80'},  lp:{hex:'#4a5873',prim:'color/neutral/1000'},             dc:{hex:'rgba(255,255,255,0.80)',prim:'color/neutral/dark/alpha-80'} },
    'content/action-hover':   { lc:{hex:'rgba(25,39,67,0.95)',prim:'color/neutral/alpha-95'},  lp:{hex:'#303e5a',prim:'color/neutral/1100'},             dc:{hex:'rgba(255,255,255,0.95)',prim:'color/neutral/dark/alpha-95'} },
    'content/brand/base':     { lc:{hex:'#166764',prim:'color/turquoise/800'},            lp:{hex:'#8a4b15',prim:'color/yellow/800'},               dc:{hex:'#7adddb',prim:'color/turquoise/300'} },
    'content/brand/secondary':{ lc:{hex:'#0c827f',prim:'color/turquoise/700'},            lp:{hex:'#b16107',prim:'color/yellow/700'},               dc:{hex:'#5acbc7',prim:'color/turquoise/400'} },
    'content/on/brand-base':  { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#192743',prim:'color/neutral/1200'},             dc:{hex:'#ffffff',prim:'color/neutral/0 - White'} },
    'content/inverse/base':   { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#ffffff',prim:'color/neutral/0 - White'},        dc:{hex:'#151b26',prim:'color/neutral/dark/0'} },
    'content/inverse/secondary':{ lc:{hex:'rgba(255,255,255,0.80)',prim:'color/neutral/dark/alpha-80'}, lp:{hex:'rgba(255,255,255,0.80)',prim:'color/neutral/dark/alpha-80'}, dc:{hex:'rgba(25,39,67,0.80)',prim:'color/neutral/alpha-80'} },
    'content/positive/base':  { lc:{hex:'#236e41',prim:'color/green/800'},                lp:{hex:'#236e41',prim:'color/green/800'},                dc:{hex:'#94dfa8',prim:'color/green/300'} },
    'content/positive/secondary':{ lc:{hex:'#278747',prim:'color/green/700'},             lp:{hex:'#278747',prim:'color/green/700'},                dc:{hex:'#72ce90',prim:'color/green/400'} },
    'content/negative/base':  { lc:{hex:'#b9252a',prim:'color/red/800'},                  lp:{hex:'#b9252a',prim:'color/red/800'},                  dc:{hex:'#feb9b9',prim:'color/red/300'} },
    'content/negative/secondary':{ lc:{hex:'#d3353b',prim:'color/red/700'},               lp:{hex:'#d3353b',prim:'color/red/700'},                  dc:{hex:'#fe9c9c',prim:'color/red/400'} },
    'content/negative/subtle':{ lc:{hex:'#fe7377',prim:'color/red/500'},                  lp:{hex:'#fe7377',prim:'color/red/500'},                  dc:{hex:'#f74e50',prim:'color/red/600'} },
    'content/warning/base':   { lc:{hex:'#a83e00',prim:'color/orange/800'},               lp:{hex:'#a83e00',prim:'color/orange/800'},               dc:{hex:'#fec095',prim:'color/orange/300'} },
    'content/warning/secondary':{ lc:{hex:'#c75000',prim:'color/orange/700'},             lp:{hex:'#ec6e0a',prim:'color/orange/600'},               dc:{hex:'#fda569',prim:'color/orange/400'} },
    'content/info/base':      { lc:{hex:'#205bb9',prim:'color/blue/800'},                 lp:{hex:'#205bb9',prim:'color/blue/800'},                 dc:{hex:'#acceff',prim:'color/blue/300'} },
    'content/info/secondary': { lc:{hex:'#3174db',prim:'color/blue/700'},                 lp:{hex:'#3174db',prim:'color/blue/700'},                 dc:{hex:'#88b7f9',prim:'color/blue/400'} },
    'content/highlight/base': { lc:{hex:'#8a4b15',prim:'color/yellow/800'},               lp:{hex:'#8a4b15',prim:'color/yellow/800'},               dc:{hex:'#fecd29',prim:'color/yellow/300'} },
    'content/highlight/secondary':{ lc:{hex:'#ec9f06',prim:'color/yellow/500'},           lp:{hex:'#ec9f06',prim:'color/yellow/500'},               dc:{hex:'#ec9f06',prim:'color/yellow/500'} },

    /* ── Borders ── */
    'border/base':            { lc:{hex:'#e1e4e8',prim:'color/neutral/400'},              lp:{hex:'#e1e4e8',prim:'color/neutral/400'},              dc:{hex:'#454d5f',prim:'color/neutral/dark/400'} },
    'border/base-hover':      { lc:{hex:'#cfd3db',prim:'color/neutral/500'},              lp:{hex:'#cfd3db',prim:'color/neutral/500'},              dc:{hex:'#4d576a',prim:'color/neutral/dark/500'} },
    'border/base-pressed':    { lc:{hex:'#bcc1cd',prim:'color/neutral/600'},              lp:{hex:'#bcc1cd',prim:'color/neutral/600'},              dc:{hex:'#5e6a82',prim:'color/neutral/dark/600'} },
    'border/white':           { lc:{hex:'#ffffff',prim:'color/neutral/0 - White'},        lp:{hex:'#ffffff',prim:'color/neutral/0 - White'},        dc:{hex:'#232a39',prim:'color/neutral/dark/200'} },
    'border/disabled':        { lc:{hex:'rgba(25,39,67,0.30)',prim:'color/neutral/alpha-30'}, lp:{hex:'rgba(25,39,67,0.30)',prim:'color/neutral/alpha-30'}, dc:{hex:'rgba(255,255,255,0.30)',prim:'color/neutral/dark/alpha-30'} },
    'border/action':          { lc:{hex:'#bcc1cd',prim:'color/neutral/600'},              lp:{hex:'#bcc1cd',prim:'color/neutral/600'},              dc:{hex:'#5e6a82',prim:'color/neutral/dark/600'} },
    'border/action-hover':    { lc:{hex:'#a5adbc',prim:'color/neutral/700'},              lp:{hex:'#a5adbc',prim:'color/neutral/700'},              dc:{hex:'#818b9c',prim:'color/neutral/dark/700'} },
    'border/action-pressed':  { lc:{hex:'#7b869e',prim:'color/neutral/800'},              lp:{hex:'#7b869e',prim:'color/neutral/800'},              dc:{hex:'#969dad',prim:'color/neutral/dark/800'} },
    'border/action-active':   { lc:{hex:'#192743',prim:'color/neutral/1200'},             lp:{hex:'#192743',prim:'color/neutral/1200'},             dc:{hex:'#f4f4f6',prim:'color/neutral/dark/1200'} },
    'border/brand/base':      { lc:{hex:'#0c827f',prim:'color/turquoise/700'},            lp:{hex:'#d68100',prim:'color/yellow/600'},               dc:{hex:'#5acbc7',prim:'color/turquoise/400'} },
    'border/brand/secondary': { lc:{hex:'#0a9d99',prim:'color/turquoise/600'},            lp:{hex:'#ec9f06',prim:'color/yellow/500'},               dc:{hex:'#30b3af',prim:'color/turquoise/500'} },
    'border/brand/subtle':    { lc:{hex:'#7adddb',prim:'color/turquoise/300'},            lp:{hex:'#fdbd12',prim:'color/yellow/400'},               dc:{hex:'#166764',prim:'color/turquoise/800'} },
    'border/negative/base':   { lc:{hex:'#b9252a',prim:'color/red/800'},                  lp:{hex:'#b9252a',prim:'color/red/800'},                  dc:{hex:'#f74e50',prim:'color/red/600'} },
    'border/negative/subtle': { lc:{hex:'#feb9b9',prim:'color/red/300'},                  lp:{hex:'#feb9b9',prim:'color/red/300'},                  dc:{hex:'#b9252a',prim:'color/red/800'} },
    'border/positive/base':   { lc:{hex:'#39a35c',prim:'color/green/600'},                lp:{hex:'#39a35c',prim:'color/green/600'},                dc:{hex:'#55ba76',prim:'color/green/500'} },
    'border/positive/subtle': { lc:{hex:'#94dfa8',prim:'color/green/300'},                lp:{hex:'#94dfa8',prim:'color/green/300'},                dc:{hex:'#236e41',prim:'color/green/800'} },
    'border/warning/base':    { lc:{hex:'#ec6e0a',prim:'color/orange/600'},               lp:{hex:'#fa8324',prim:'color/orange/500'},               dc:{hex:'#ec6e0a',prim:'color/orange/600'} },
    'border/warning/subtle':  { lc:{hex:'#fec095',prim:'color/orange/300'},               lp:{hex:'#fec095',prim:'color/orange/300'},               dc:{hex:'#a83e00',prim:'color/orange/800'} },
    'border/info/base':       { lc:{hex:'#3174db',prim:'color/blue/700'},                 lp:{hex:'#3174db',prim:'color/blue/700'},                 dc:{hex:'#6aa4f7',prim:'color/blue/500'} },
    'border/info/subtle':     { lc:{hex:'#acceff',prim:'color/blue/300'},                 lp:{hex:'#acceff',prim:'color/blue/300'},                 dc:{hex:'#205bb9',prim:'color/blue/800'} },
    'border/highlight/base':  { lc:{hex:'#d68100',prim:'color/yellow/600'},               lp:{hex:'#d68100',prim:'color/yellow/600'},               dc:{hex:'#fecd29',prim:'color/yellow/300'} },
    'border/highlight/subtle':{ lc:{hex:'#fecd29',prim:'color/yellow/300'},               lp:{hex:'#fecd29',prim:'color/yellow/300'},               dc:{hex:'#ffefc2',prim:'color/yellow/100'} },
  };

  function getMode() {
    var dark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) return 'dc';
    return (localStorage.getItem('portal') || 'coordinator') === 'personal' ? 'lp' : 'lc';
  }

  function formatHex(hex) {
    if (!hex) return '';
    if (hex.indexOf('rgba') === 0) {
      var m = hex.match(/rgba\((\d+),(\d+),(\d+),([\d.]+)\)/);
      if (m) {
        var pct = Math.round(parseFloat(m[4]) * 100);
        var r = parseInt(m[1]);
        return pct + '% ' + (r > 200 ? 'White' : 'Navy');
      }
    }
    return hex.toUpperCase();
  }

  function isAlpha(hex) { return hex && hex.indexOf('rgba') === 0; }

  function updatePage() {
    var mode = getMode();
    document.querySelectorAll('.sem-row[data-token]').forEach(function (row) {
      var tok = T[row.dataset.token];
      if (!tok) return;
      var val = tok[mode] || tok.lc;
      var dot = row.querySelector('.sem-dot');
      if (dot) dot.style.background = val.hex;
      var inner = row.querySelector('.alpha-bg-inner');
      if (inner) inner.style.background = val.hex;
      var hexEl = row.querySelector('.sem-hex');
      if (hexEl) hexEl.textContent = formatHex(val.hex);
      var aliasCode = row.querySelector('.sem-alias code:first-child');
      if (aliasCode && val.prim) aliasCode.textContent = val.prim;
    });
  }

  window.ColorTokens = { update: updatePage, getMode: getMode };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePage);
  } else {
    updatePage();
  }
  document.addEventListener('themechange', updatePage);
  document.addEventListener('portalchange', updatePage);
})();
