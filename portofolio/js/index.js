const out = document.getElementById('output');
const inp = document.getElementById('cmd-input');

const data = {
  about: [
    '╔══════════════════════════════════════╗',
    '║         AFONSO D. VUNGULA           ║',
    '║      Fullstack Developer            ║',
    '╚══════════════════════════════════════╝',
    '',
    '  Nome    →  Afonso D. Vungula',
    '  Role    →  Fullstack Developer',
    '  Base    →  Luanda, Angola',
    '  Foco    →  Mobile & Web Apps',
    '',
    '  Apaixonado por criar soluções reais para',
    '  problemas reais. Atualmente a construir o',
    '  AgroSabi — uma app de assistência agrícola',
    '  para agricultores em Angola.',
  ],
  skills: [
    '  ┌─ FRONTEND ─────────────────────┐',
    '  │  React Native · Expo · TypeScript│',
    '  │  React.js · HTML · CSS · JS     │',
    '  └─────────────────────────────────┘',
    '  ┌─ BACKEND ──────────────────────┐',
    '  │  Node.js · Express · REST API  │',
    '  │  MySQL · Railway               │',
    '  └─────────────────────────────────┘',
    '  ┌─ FERRAMENTAS ──────────────────┐',
    '  │  Git · GitHub · Codespaces     │',
    '  │  Postman · VS Code             │',
    '  └─────────────────────────────────┘',
    '  ┌─ AI / INTEGRAÇÃO ──────────────┐',
    '  │  Groq SDK · LLaMA · LLaVA      │',
    '  │  API Integration               │',
    '  └─────────────────────────────────┘',
  ],
  projects: [
    '  ┌─ AGROSABI ─────────────────────────────────┐',
    '  │  App de assistência agrícola para Angola   │',
    '  │  Stack: React Native · Node.js · MySQL     │',
    '  │  Features: AgroChat (IA) · Deteção pragas  │',
    '  │           · Cronograma · Planejamento      │',
    '  │  Status: Em desenvolvimento ativo          │',
    '  └────────────────────────────────────────────┘',
    '',
    '  ┌─ PORTFOLIO TERMINAL ───────────────────────┐',
    '  │  Portfolio interativo estilo terminal      │',
    '  │  Stack: HTML · CSS · JavaScript            │',
    '  │  Status: Concluído                         │',
    '  └────────────────────────────────────────────┘',
  ],
  social: [
    '  ┌─ REDES SOCIAIS ─────────────────┐',
    '  │                                 │',
    '  │  GitHub   →  github.com/afonso  │',
    '  │  LinkedIn →  linkedin.com/in/   │',
    '  │             afonso-vungula      │',
    '  │  Instagram→  @afonso.dev        │',
    '  │                                 │',
    '  └─────────────────────────────────┘',
  ],
  contact: [
    '  ┌─ CONTACTO ──────────────────────┐',
    '  │                                 │',
    '  │  Email  →  afonso@email.com     │',
    '  │  WhatsApp → +244 9XX XXX XXX   │',
    '  │  Luanda, Angola                 │',
    '  │                                 │',
    '  │  Disponível para freelance      │',
    '  │  e projetos colaborativos       │',
    '  │                                 │',
    '  └─────────────────────────────────┘',
  ]
};

const help_text = [
  '  Comandos disponíveis:',
  '',
  '  about      →  Quem é Afonso',
  '  skills     →  Stack técnico',
  '  projectos   →  Projetos desenvolvidos',
  '  social     →  Redes sociais',
  '  contactos  →  Entrar em contacto',
  '  clear      →  Limpar terminal',
  '  help       →  Ver esta lista',
  ''
];

const boot = [
  '  █████╗  ███████╗ ██████╗ ███╗  ██╗███████╗ ██████╗ ',
  ' ██╔══██╗ ██╔════╝██╔═══██╗████╗ ██║██╔════╝██╔═══██╗',
  ' ███████║ █████╗  ██║   ██║██╔██╗██║███████╗██║   ██║',
  ' ██╔══██║ ██╔══╝  ██║   ██║██║╚████║╚════██║██║   ██║',
  ' ██║  ██║ ██║     ╚██████╔╝██║ ╚███║███████║╚██████╔╝',
  ' ╚═╝  ╚═╝ ╚═╝      ╚═════╝ ╚═╝  ╚══╝╚══════╝ ╚═════╝ ',

  '',
  '  Fullstack Developer · Luanda, Angola',
  '  ─────────────────────────────────────',
  '  Sistema iniciado. Digite "help" para ver os comandos.',
  '',
];



let history = [];
let histIdx = -1;

function print(lines, cls='output-text') {
  lines.forEach(l => {
    const d = document.createElement('div');
    d.className = 'line ' + cls;
    d.textContent = l;
    out.appendChild(d);
  });
  out.scrollTop = out.scrollHeight;
}

function printBoot() {
  const asciiLines = boot.slice(0, 12);
  const restLines = boot.slice(12);
  let i = 0;

  function printAscii() {
    if (i < asciiLines.length) {
      const d = document.createElement('div');
      d.className = 'line highlight boot-line';
      d.textContent = asciiLines[i];
      out.appendChild(d);
      out.scrollTop = out.scrollHeight;
      i++;
      setTimeout(printAscii, 40);
    } else {
      printRest(0);
    }
  }

  function printRest(lineIdx) {
    if (lineIdx >= restLines.length) return;
    const line = restLines[lineIdx];
    if (line === '') {
      const d = document.createElement('div');
      d.className = 'line highlight';
      d.textContent = '';
      out.appendChild(d);
      out.scrollTop = out.scrollHeight;
      printRest(lineIdx + 1);
      return;
    }
    const d = document.createElement('div');
    d.className = 'line highlight';
    out.appendChild(d);
    let charIdx = 0;
    const interval = setInterval(() => {
      d.textContent += line[charIdx];
      out.scrollTop = out.scrollHeight;
      charIdx++;
      if (charIdx >= line.length) {
        clearInterval(interval);
        setTimeout(() => printRest(lineIdx + 1), 80);
      }
    }, 50); // <- ajusta aqui (ms por caractere)
  }

  printAscii();
}

function printCmd(cmd) {
  const d = document.createElement('div');
  d.className = 'line';
  d.innerHTML = '<span class="prompt">visitor@portfolio:~$</span> <span class="cmd">' + escHtml(cmd) + '</span>';
  out.appendChild(d);
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function run(cmd) {
  const c = cmd.trim().toLowerCase();
  printCmd(cmd);
  if (!c) return;
  history.unshift(cmd); histIdx = -1;

  if (c === 'clear') { out.innerHTML = ''; return; }
  if (c === 'help') { print(help_text); return; }
  if (c === 'about') { print(data.about); return; }
  if (c === 'skills') { print(data.skills); return; }
  if (c === 'projectos') { print(data.projects); return; }
  if (c === 'social') { print(data.social); return; }
  if (c === 'contactos') { print(data.contact); return; }
  if (c === 'hello' || c === 'oi' || c === 'hi') {
    print(['  Olá! Bem-vindo ao meu portfolio.', '  Digite "help" para explorar. 👾']);
    return;
  }
  print(['  Comando não reconhecido: "' + cmd + '"', '  Digite "help" para ver os comandos disponíveis.'], 'error');
}

inp.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const v = inp.value;
    inp.value = '';
    run(v);
  } else if (e.key === 'ArrowUp') {
    if (histIdx < history.length - 1) { histIdx++; inp.value = history[histIdx]; }
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    if (histIdx > 0) { histIdx--; inp.value = history[histIdx]; }
    else { histIdx = -1; inp.value = ''; }
    e.preventDefault();
  }
});

document.getElementById('terminal').addEventListener('click', () => inp.focus());
printBoot();
inp.focus();