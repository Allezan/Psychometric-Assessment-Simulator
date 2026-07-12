// SVG Asset bank for Abstract/Figural Reasoning (ABS001 - ABS015)
// Designed with crisp SVG vectors, compatible with light and dark mode.

export const figuralSvgs: Record<string, string> = {
  // ABS001: Stars counting sequence (1, 2, 3, 4, ?)
  ABS001: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Star definition -->
    <defs>
      <polygon id="star" points="10,2 13,8 20,8 15,12 17,18 10,14 3,18 5,12 0,8 7,8" class="fill-zinc-800 dark:fill-zinc-200" />
    </defs>
    <!-- Box 1: 1 star -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#star" x="30" y="30" />
    </g>
    <!-- Box 2: 2 stars -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#star" x="15" y="30" />
      <use href="#star" x="45" y="30" />
    </g>
    <!-- Box 3: 3 stars -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#star" x="15" y="15" />
      <use href="#star" x="45" y="15" />
      <use href="#star" x="30" y="45" />
    </g>
    <!-- Box 4: 4 stars -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#star" x="15" y="15" />
      <use href="#star" x="45" y="15" />
      <use href="#star" x="15" y="45" />
      <use href="#star" x="45" y="45" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS002: Rotating arrows (Up, Right, Down, Left, ?)
  ABS002: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <g id="arrow">
        <line x1="40" y1="65" x2="40" y2="20" />
        <polygon points="40,15 34,27 46,27" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </defs>
    <!-- Up -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow" />
    </g>
    <!-- Right -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow" transform="rotate(90, 40, 40)" />
    </g>
    <!-- Down -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow" transform="rotate(180, 40, 40)" />
    </g>
    <!-- Left -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow" transform="rotate(270, 40, 40)" />
    </g>
    <!-- ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS003: Circled sectors filling up (0%, 25%, 50%, 75%, ?)
  ABS003: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- 0% -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="25" />
    </g>
    <!-- 25% -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="25" />
      <path d="M 40,40 L 40,15 A 25,25 0 0,1 65,40 Z" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- 50% -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="25" />
      <path d="M 40,40 L 40,15 A 25,25 0 0,1 40,65 Z" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- 75% -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="25" />
      <path d="M 40,40 L 40,15 A 25,25 0 1,1 15,40 Z" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS004: 3x3 Matrix, star corners logic
  ABS004: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <!-- 4-star -->
      <polygon id="star4" points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7" />
      <!-- 5-star -->
      <polygon id="star5" points="10,2 13,8 20,8 15,12 17,18 10,14 3,18 5,12 0,8 7,8" />
      <!-- 6-star -->
      <polygon id="star6" points="10,0 13,6 19,3 15,10 19,17 13,14 10,20 7,14 1,17 5,10 1,3 7,6" />
    </defs>
    
    <!-- Row 1: outlines -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#star4" x="25" y="25" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#star5" x="25" y="25" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#star6" x="25" y="25" />
    </g>
    
    <!-- Row 2: gray fill -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#star4" x="25" y="25" class="fill-zinc-400 stroke-zinc-500" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#star5" x="25" y="25" class="fill-zinc-400 stroke-zinc-500" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#star6" x="25" y="25" class="fill-zinc-400 stroke-zinc-500" />
    </g>

    <!-- Row 3: solid fill -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <use href="#star4" x="25" y="25" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <use href="#star5" x="25" y="25" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS005: Rotating squares/diamonds with dots (1, 2, 3, 4, ?)
  ABS005: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Square with 1 dot -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <circle cx="40" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Square with 2 dots -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <circle cx="32" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="48" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: Diamond with 3 dots -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="30" y="30" width="20" height="20" transform="rotate(45, 40, 40)" />
      <circle cx="40" cy="30" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: Diamond with 4 dots -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="30" y="30" width="20" height="20" transform="rotate(45, 40, 40)" />
      <circle cx="34" cy="34" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="34" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="34" cy="46" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="46" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS006: Hexagons with increasing shaded sides (1, 2, 3, 4, 5, ?)
  ABS006: `<svg viewBox="0 0 620 100" class="w-full max-w-2xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Hexagon path generator -->
    <defs>
      <polygon id="hex" points="40,15 65,30 65,60 40,75 15,60 15,30" />
    </defs>
    <!-- 1 side -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#hex" />
      <line x1="40" y1="15" x2="65" y2="30" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </g>
    <!-- 2 sides -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#hex" />
      <polyline points="40,15 65,30 65,60" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </g>
    <!-- 3 sides -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#hex" />
      <polyline points="40,15 65,30 65,60 40,75" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </g>
    <!-- 4 sides -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#hex" />
      <polyline points="40,15 65,30 65,60 40,75 15,60" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </g>
    <!-- 5 sides -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#hex" />
      <polyline points="40,15 65,30 65,60 40,75 15,60 15,30" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </g>
    <!-- ? -->
    <g transform="translate(510, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS007: 3x3 Matrix Shapes counts (1, 2, 3 circles, triangles, squares)
  ABS007: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: Circles -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="10" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="25" cy="35" r="10" />
      <circle cx="45" cy="35" r="10" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="20" cy="35" r="8" />
      <circle cx="35" cy="35" r="8" />
      <circle cx="50" cy="35" r="8" />
    </g>
    
    <!-- Row 2: Triangles -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,20 25,45 45,45" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="25,20 15,45 35,45" />
      <polygon points="45,20 35,45 55,45" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="20,22 12,42 28,42" />
      <polygon points="35,22 27,42 43,42" />
      <polygon points="50,22 42,42 58,42" />
    </g>

    <!-- Row 3: Squares -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <rect x="25" y="25" width="20" height="20" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <rect x="15" y="25" width="16" height="16" />
      <rect x="38" y="25" width="16" height="16" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS008: Triangle rotation with dots (Up, Rot120, Rot240, Up, ?)
  ABS008: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Triangle builder -->
    <defs>
      <g id="tri-grp">
        <polygon points="40,20 20,60 60,60" />
        <circle cx="40" cy="48" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </defs>
    <!-- Pos 1 -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#tri-grp" />
    </g>
    <!-- Pos 2: Rot 120 -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#tri-grp" transform="rotate(120, 40, 40)" />
      <!-- Add extra dot -->
      <circle cx="34" cy="34" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Pos 3: Rot 240 -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#tri-grp" transform="rotate(240, 40, 40)" />
      <!-- Add 2 extra dots -->
      <circle cx="46" cy="34" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="34" cy="46" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Pos 4: Up (Rot 360) with 4 dots -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#tri-grp" />
      <!-- 4 dots total -->
      <circle cx="34" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="32" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS009: 3x3 Matrix outer shape & inner line patterns
  ABS009: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: Circle outer -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" />
      <line x1="35" y1="15" x2="35" y2="55" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" />
      <line x1="35" y1="15" x2="35" y2="55" />
      <line x1="15" y1="35" x2="55" y2="35" />
    </g>
    
    <!-- Row 2: Square outer -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="20" y="20" width="30" height="30" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="20" y="20" width="30" height="30" />
      <line x1="35" y1="20" x2="35" y2="50" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="20" y="20" width="30" height="30" />
      <line x1="35" y1="20" x2="35" y2="50" />
      <line x1="20" y1="35" x2="50" y2="35" />
    </g>

    <!-- Row 3: Triangle outer -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,15 15,55 55,55" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,15 15,55 55,55" />
      <line x1="35" y1="15" x2="35" y2="55" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS010: Polygons side counts + shading (Pentagon, Hexagon, Heptagon, Octagon, ?)
  ABS010: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- White Pentagon (5) -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 60,35 52,60 28,60 20,35" class="fill-white dark:fill-zinc-950" />
    </g>
    <!-- Light gray Hexagon (6) -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,18 58,28 58,52 40,62 22,52 22,28" class="fill-zinc-100 dark:fill-zinc-900" />
    </g>
    <!-- Dark gray Heptagon (7) -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,16 56,24 60,42 50,58 30,58 20,42 24,24" class="fill-zinc-400 dark:fill-zinc-700" />
    </g>
    <!-- Black Octagon (8) -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,15 54,21 60,35 54,49 40,55 26,49 20,35 26,21" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS011: Letter L and dots mirror sequences
  ABS011: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1 -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polyline points="30,25 30,55 50,55" stroke-width="3" />
      <circle cx="55" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Mirrored L -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <polyline points="50,25 50,55 30,55" stroke-width="3" />
      <circle cx="25" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="25" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: Normal L -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <polyline points="30,25 30,55 50,55" stroke-width="3" />
      <circle cx="55" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="55" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="55" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: Mirrored L -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <polyline points="50,25 50,55 30,55" stroke-width="3" />
      <circle cx="25" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="25" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="25" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="25" cy="55" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS012: Diagonal rotating line (0, 30, 60, 90, 120, ?)
  ABS012: `<svg viewBox="0 0 620 100" class="w-full max-w-2xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- 0 deg -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="15" y1="40" x2="65" y2="40" stroke-width="3" />
    </g>
    <!-- 30 deg -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="18" y1="28" x2="62" y2="52" stroke-width="3" />
    </g>
    <!-- 60 deg -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="28" y1="18" x2="52" y2="62" stroke-width="3" />
    </g>
    <!-- 90 deg -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="40" y1="15" x2="40" y2="65" stroke-width="3" />
    </g>
    <!-- 120 deg -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="52" y1="18" x2="28" y2="62" stroke-width="3" />
    </g>
    <!-- ? -->
    <g transform="translate(510, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS013: Concentric circles (1, 2, 3, 4, 5 layers)
  ABS013: `<svg viewBox="0 0 620 100" class="w-full max-w-2xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- 1 Layer -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- 2 Layers -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="18" class="fill-white dark:fill-zinc-950" />
    </g>
    <!-- 3 Layers -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="20" class="fill-white dark:fill-zinc-950" />
      <circle cx="40" cy="40" r="12" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- 4 Layers -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="22" class="fill-white dark:fill-zinc-950" />
      <circle cx="40" cy="40" r="16" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="10" class="fill-white dark:fill-zinc-950" />
    </g>
    <!-- 5 Layers -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="23" class="fill-white dark:fill-zinc-950" />
      <circle cx="40" cy="40" r="18" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="13" class="fill-white dark:fill-zinc-950" />
      <circle cx="40" cy="40" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- ? -->
    <g transform="translate(510, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS014: 3x3 shapes matrix with main diagonal solid black
  ABS014: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: (1,1) solid black circle, (1,2) 2 outline triangles, (1,3) 3 outline squares -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="10" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <polygon points="25,20 15,45 35,45" />
      <polygon points="45,20 35,45 55,45" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <rect x="15" y="15" width="16" height="16" />
      <rect x="38" y="15" width="16" height="16" />
      <rect x="26.5" y="38" width="16" height="16" />
    </g>
    
    <!-- Row 2: (2,1) 1 outline circle, (2,2) 2 solid black triangles, (2,3) 3 outline squares -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="10" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="25,20 15,45 35,45" class="fill-zinc-800 dark:fill-zinc-200" />
      <polygon points="45,20 35,45 55,45" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="15" y="15" width="16" height="16" />
      <rect x="38" y="15" width="16" height="16" />
      <rect x="26.5" y="38" width="16" height="16" />
    </g>

    <!-- Row 3: (3,1) 1 outline circle, (3,2) 2 outline triangles, (3,3) ? (would be 3 solid black squares) -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="10" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <polygon points="25,20 15,45 35,45" />
      <polygon points="45,20 35,45 55,45" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // ABS015: Solid red hearts sequence growing (tiny to extra large)
  ABS015: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto" stroke-width="2">
    <defs>
      <!-- Heart path helper (centered around 0,0) -->
      <path id="heart" d="M 0,-5 C -3,-10 -10,-10 -10,-5 C -10,0 -5,5 0,10 C 5,5 10,0 10,-5 C 10,-10 3,-10 0,-5 Z" class="fill-red-500 stroke-red-600" />
    </defs>
    <!-- Tiny -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 fill-none dark:stroke-zinc-800" />
      <use href="#heart" transform="translate(40, 40) scale(0.8)" />
    </g>
    <!-- Small -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 fill-none dark:stroke-zinc-800" />
      <use href="#heart" transform="translate(40, 40) scale(1.3)" />
    </g>
    <!-- Medium -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 fill-none dark:stroke-zinc-800" />
      <use href="#heart" transform="translate(40, 40) scale(1.8)" />
    </g>
    <!-- Large -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 fill-none dark:stroke-zinc-800" />
      <use href="#heart" transform="translate(40, 40) scale(2.4)" />
    </g>
    <!-- ? (Extra Large) -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 fill-none dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold">?</text>
    </g>
  </svg>`,

  // NUM013: Daily production bar chart
  NUM013: `<svg viewBox="0 0 450 250" class="w-full max-w-md h-auto fill-none stroke-zinc-700 dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Lines -->
    <line x1="55" y1="50" x2="420" y2="50" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="100" x2="420" y2="100" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="150" x2="420" y2="150" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    
    <!-- Y-Axis Labels -->
    <text x="45" y="54" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">250</text>
    <text x="45" y="104" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">170</text>
    <text x="45" y="154" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">90</text>
    <text x="45" y="204" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">0</text>

    <!-- Bars -->
    <!-- Senin: 180 unit -> Y = 200 - 180/250*150 = 92 -->
    <rect x="75" y="92" width="45" height="108" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="97.5" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">180</text>

    <!-- Selasa: 210 -> Y = 200 - 210/250*150 = 74 -->
    <rect x="160" y="74" width="45" height="126" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="182.5" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">210</text>

    <!-- Rabu: 195 -> Y = 200 - 195/250*150 = 83 -->
    <rect x="245" y="83" width="45" height="117" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="267.5" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">195</text>

    <!-- Kamis: 250 -> Y = 200 - 150 = 50 -->
    <rect x="330" y="50" width="45" height="150" rx="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-zinc-800 dark:stroke-zinc-200" />
    <text x="352.5" y="42" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-800 dark:fill-zinc-100 font-bold" stroke="none">250</text>

    <!-- Axes -->
    <line x1="55" y1="200" x2="410" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />
    <line x1="55" y1="50" x2="55" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />

    <!-- X-Axis Labels -->
    <text x="97.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Senin</text>
    <text x="182.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Selasa</text>
    <text x="267.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Rabu</text>
    <text x="352.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Kamis</text>
  </svg>`,

  // AR001: 3x3 shapes & sizes matrix
  AR001: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: Circles -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="14" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="22" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    
    <!-- Row 2: Squares -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="27.5" y="27.5" width="15" height="15" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="21" y="21" width="28" height="28" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="13" y="13" width="44" height="44" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>

    <!-- Row 3: Triangles -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,27.5 27.5,42.5 42.5,42.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,21 21,49 49,49" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR002: Dot movement in square corners
  AR002: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Left top dot -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" stroke-dasharray="2" />
      <circle cx="25" cy="25" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Right top dot -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" stroke-dasharray="2" />
      <circle cx="55" cy="25" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: Right bottom dot -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" stroke-dasharray="2" />
      <circle cx="55" cy="55" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: ? -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR003: Hexagon losing sides
  AR003: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Hexagon -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 62,32 62,58 40,70 18,58 18,32" class="fill-zinc-100 dark:fill-zinc-900" />
    </g>
    <!-- Box 2: Pentagon -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 62,36 53,65 27,65 18,36" class="fill-zinc-100 dark:fill-zinc-900" />
    </g>
    <!-- Box 3: Square -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" class="fill-zinc-100 dark:fill-zinc-900" />
    </g>
    <!-- Box 4: ? -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR004: 3x3 Matrix Shapes and Shadings (Latin Square)
  AR004: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <!-- Pattern for hatched lines -->
      <pattern id="hatch-ar" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#888" stroke-width="2" />
      </pattern>
    </defs>
    <!-- Row 1 -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" fill="url(#hatch-ar)" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,18 18,52 52,52" />
    </g>
    
    <!-- Row 2 -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,18 18,52 52,52" fill="url(#hatch-ar)" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>

    <!-- Row 3 -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="20" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR005: Rotating arrows (Up, Right, Down, Left, Up, ?)
  AR005: `<svg viewBox="0 0 620 100" class="w-full max-w-2xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <g id="arrow-ar">
        <line x1="40" y1="65" x2="40" y2="20" />
        <polygon points="40,15 34,27 46,27" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </defs>
    <!-- Up -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow-ar" />
    </g>
    <!-- Right -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow-ar" transform="rotate(90, 40, 40)" />
    </g>
    <!-- Down -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow-ar" transform="rotate(180, 40, 40)" />
    </g>
    <!-- Left -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow-ar" transform="rotate(270, 40, 40)" />
    </g>
    <!-- Up -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#arrow-ar" />
    </g>
    <!-- Right -->
    <g transform="translate(510, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR006: Find the odd shape
  AR006: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Square with X -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <line x1="25" y1="25" x2="55" y2="55" />
      <line x1="55" y1="25" x2="25" y2="55" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(1)</text>
    </g>
    <!-- Box 2: Circle with X -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="16" />
      <line x1="28.7" y1="28.7" x2="51.3" y2="51.3" />
      <line x1="51.3" y1="28.7" x2="28.7" y2="51.3" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(2)</text>
    </g>
    <!-- Box 3: Triangle with X -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,22 22,53 58,53" />
      <line x1="40" y1="22" x2="40" y2="53" />
      <line x1="22" y1="53" x2="49" y2="37.5" />
      <line x1="58" y1="53" x2="31" y2="37.5" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(3)</text>
    </g>
    <!-- Box 4: Square with single diagonal -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <line x1="25" y1="25" x2="55" y2="55" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(4)</text>
    </g>
  </svg>`,

  // AR007: Diagonally split square, rotation + shading
  AR007: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <pattern id="hatch-ar-7" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#888" stroke-width="1.5" />
      </pattern>
    </defs>
    <!-- Box 1 -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <line x1="25" y1="25" x2="55" y2="55" />
      <line x1="55" y1="25" x2="25" y2="55" />
      <polygon points="25,25 55,25 40,40" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2 -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <line x1="25" y1="25" x2="55" y2="55" />
      <line x1="55" y1="25" x2="25" y2="55" />
      <polygon points="55,25 55,55 40,40" fill="url(#hatch-ar-7)" />
    </g>
    <!-- Box 3 -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <line x1="25" y1="25" x2="55" y2="55" />
      <line x1="55" y1="25" x2="25" y2="55" />
      <polygon points="25,55 55,55 40,40" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: ? -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR008: 3x3 Matrix Shapes with internal dots
  AR008: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1 -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="16" />
      <circle cx="35" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" />
      <circle cx="35" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,16 16,50 54,50" />
      <circle cx="35" cy="37" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    
    <!-- Row 2 -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="16" />
      <circle cx="28" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" />
      <circle cx="28" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <polygon points="35,16 16,50 54,50" />
      <circle cx="28" cy="37" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="37" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>

    <!-- Row 3 -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <circle cx="35" cy="35" r="16" />
      <circle cx="26" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="35" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <rect x="18" y="18" width="34" height="34" />
      <circle cx="26" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="35" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR009: Rotating and sizing arrows (45° steps)
  AR009: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Small arrow pointing UP -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <line x1="40" y1="55" x2="40" y2="30" stroke-width="1.5" />
      <polygon points="40,25 36,34 44,34" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Medium arrow pointing UP-RIGHT (45°) -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <g transform="rotate(45, 40, 40)">
        <line x1="40" y1="60" x2="40" y2="25" stroke-width="2.5" />
        <polygon points="40,18 34,29 46,29" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <!-- Box 3: Large arrow pointing RIGHT (90°) -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <g transform="rotate(90, 40, 40)">
        <line x1="40" y1="65" x2="40" y2="20" stroke-width="4" />
        <polygon points="40,12 32,25 48,25" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <!-- Box 4: ? -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR010: Figural analogy (A -> B | C -> ?)
  AR010: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Large Solid Square -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="22" y="22" width="36" height="36" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Arrow 1 -->
    <g transform="translate(95, 10)">
      <path d="M 5,40 L 20,40 M 15,35 L 20,40 L 15,45" stroke-width="2.5" />
    </g>
    <!-- Box 2: Small Hollow Square -->
    <g transform="translate(125, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="31" y="31" width="18" height="18" />
    </g>
    <!-- Separator -->
    <g transform="translate(212.5, 10)">
      <line x1="0" y1="10" x2="0" y2="70" stroke-dasharray="3" class="stroke-zinc-300 dark:stroke-zinc-700" />
    </g>
    <!-- Box 3: Large Solid Circle -->
    <g transform="translate(225, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="18" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Arrow 2 -->
    <g transform="translate(310, 10)">
      <path d="M 5,40 L 20,40 M 15,35 L 20,40 L 15,45" stroke-width="2.5" />
    </g>
    <!-- Box 4: ? -->
    <g transform="translate(340, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR011: Find the odd region count
  AR011: `<svg viewBox="0 0 420 100" class="w-full max-w-lg h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1 -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="22" />
      <line x1="20" y1="30" x2="60" y2="30" />
      <line x1="20" y1="50" x2="60" y2="50" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(1)</text>
    </g>
    <!-- Box 2 -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,16 16,58 64,58" />
      <line x1="28" y1="37" x2="52" y2="37" />
      <line x1="22" y1="48" x2="58" y2="48" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(2)</text>
    </g>
    <!-- Box 3 -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="20" y="26" width="40" height="28" />
      <line x1="33.3" y1="26" x2="33.3" y2="54" />
      <line x1="46.6" y1="26" x2="46.6" y2="54" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(3)</text>
    </g>
    <!-- Box 4 -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="22" y="22" width="36" height="36" />
      <line x1="22" y1="40" x2="58" y2="40" />
      <line x1="40" y1="22" x2="40" y2="58" />
      <text x="40" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-500 font-bold" stroke="none">(4)</text>
    </g>
  </svg>`,

  // AR012: 3x3 Matrix with count rules and rotational offsets
  AR012: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1 -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(30, 35, 35)">
        <polygon points="35,18 24,46 46,46" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(30, 24, 35)">
        <polygon points="24,22 15,44 33,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(30, 46, 35)">
        <polygon points="46,22 37,44 55,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(30, 18, 35)">
        <polygon points="18,24 11,42 25,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(30, 35, 35)">
        <polygon points="35,24 28,42 42,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(30, 52, 35)">
        <polygon points="52,24 45,42 59,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    
    <!-- Row 2 -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(60, 35, 35)">
        <polygon points="35,18 24,46 46,46" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(60, 24, 35)">
        <polygon points="24,22 15,44 33,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(60, 46, 35)">
        <polygon points="46,22 37,44 55,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(60, 18, 35)">
        <polygon points="18,24 11,42 25,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(60, 35, 35)">
        <polygon points="35,24 28,42 42,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(60, 52, 35)">
        <polygon points="52,24 45,42 59,42" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>

    <!-- Row 3 -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(90, 35, 35)">
        <polygon points="35,18 24,46 46,46" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <g transform="rotate(90, 24, 35)">
        <polygon points="24,22 15,44 33,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(90, 46, 35)">
        <polygon points="46,22 37,44 55,44" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR013: 5 Hexagons sequence (arrow rotation + color cycle)
  AR013: `<svg viewBox="0 0 500 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <polygon id="hex-base" points="40,22 58,32 58,52 40,62 22,52 22,32" />
      <g id="arrow-up-red">
        <line x1="40" y1="52" x2="40" y2="32" class="stroke-red-500" stroke-width="2" />
        <polygon points="40,28 36,36 44,36" class="fill-red-500 stroke-red-500" />
      </g>
      <g id="arrow-right-blue">
        <line x1="28" y1="42" x2="48" y2="42" class="stroke-blue-500" stroke-width="2" />
        <polygon points="54,42 46,38 46,46" class="fill-blue-500 stroke-blue-500" />
      </g>
      <g id="arrow-down-red">
        <line x1="40" y1="32" x2="40" y2="52" class="stroke-red-500" stroke-width="2" />
        <polygon points="40,56 36,48 44,48" class="fill-red-500 stroke-red-500" />
      </g>
      <g id="arrow-up-blue">
        <line x1="40" y1="52" x2="40" y2="32" class="stroke-blue-500" stroke-width="2" />
        <polygon points="40,28 36,36 44,36" class="fill-blue-500 stroke-blue-500" />
      </g>
      <g id="arrow-right-red">
        <line x1="28" y1="42" x2="48" y2="42" class="stroke-red-500" stroke-width="2" />
        <polygon points="54,42 46,38 46,46" class="fill-red-500 stroke-red-500" />
      </g>
    </defs>
    <!-- Hex 1 -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#hex-base" class="stroke-red-500" />
      <use href="#arrow-up-red" />
    </g>
    <!-- Hex 2 -->
    <g transform="translate(90, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#hex-base" class="stroke-blue-500" />
      <use href="#arrow-right-blue" />
    </g>
    <!-- Hex 3 -->
    <g transform="translate(170, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#hex-base" class="stroke-red-500" />
      <use href="#arrow-down-red" />
    </g>
    <!-- Hex 4 -->
    <g transform="translate(250, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#hex-base" class="stroke-blue-500" />
      <use href="#arrow-up-blue" />
    </g>
    <!-- Hex 5 -->
    <g transform="translate(330, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#hex-base" class="stroke-red-500" />
      <use href="#arrow-right-red" />
    </g>
    <!-- Hex 6: ? -->
    <g transform="translate(410, 10)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR014: 3x3 Matrix with mirror and inversion rules
  AR014: `<svg viewBox="0 0 280 280" class="w-full max-w-[240px] h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <defs>
      <g id="arrow-asym">
        <path d="M 22,48 L 48,22" />
        <polygon points="48,22 36,25 45,34" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g id="arrow-asym-white">
        <path d="M 22,48 L 48,22" />
        <polygon points="48,22 36,25 45,34" fill="white" />
      </g>
      <g id="arrow-asym-ref">
        <path d="M 48,48 L 22,22" />
        <polygon points="22,22 34,25 25,34" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g id="arrow-asym-ref-white">
        <path d="M 48,48 L 22,22" />
        <polygon points="22,22 34,25 25,34" fill="white" />
      </g>
    </defs>
    <!-- Row 1 -->
    <g transform="translate(10, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym" />
    </g>
    <g transform="translate(100, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym-ref-white" />
    </g>
    <g transform="translate(190, 10)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym" />
    </g>
    
    <!-- Row 2 -->
    <g transform="translate(10, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym-white" />
    </g>
    <g transform="translate(100, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym-ref" />
    </g>
    <g transform="translate(190, 100)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym-white" />
    </g>

    <!-- Row 3 -->
    <g transform="translate(10, 190)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym" />
    </g>
    <g transform="translate(100, 190)">
      <rect width="70" height="70" rx="4" />
      <use href="#arrow-asym-ref-white" />
    </g>
    <g transform="translate(190, 190)">
      <rect width="70" height="70" rx="4" stroke-dasharray="4" />
      <text x="35" y="42" text-anchor="middle" font-family="sans-serif" font-size="20" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // AR015: Shapes sequence with side counts and inner dots
  AR015: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Triangle (3 sides) with 4 dots -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 20,60 60,60" />
      <circle cx="34" cy="42" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="42" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="33" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Square (4 sides) with 3 dots -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="25" y="25" width="30" height="30" />
      <circle cx="33" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="47" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="47" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: Pentagon (5 sides) with 2 dots -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,22 62,38 54,63 26,63 18,38" />
      <circle cx="34" cy="45" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="45" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: Hexagon (6 sides) with 1 dot -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 60,31 60,57 40,68 20,57 20,31" />
      <circle cx="40" cy="44" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // NR006: Monthly Sales bar chart
  NR006: `<svg viewBox="0 0 450 250" class="w-full max-w-md h-auto fill-none stroke-zinc-700 dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Lines -->
    <line x1="55" y1="50" x2="420" y2="50" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="100" x2="420" y2="100" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="150" x2="420" y2="150" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    
    <!-- Y-Axis Labels -->
    <text x="45" y="54" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">200</text>
    <text x="45" y="104" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">130</text>
    <text x="45" y="154" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">60</text>
    <text x="45" y="204" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">0</text>

    <!-- Bars -->
    <!-- Jan: 120 -> Y = 200 - 120/200*150 = 110 -->
    <rect x="75" y="110" width="45" height="90" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="97.5" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">120</text>

    <!-- Feb: 150 -> Y = 200 - 150/200*150 = 87.5 -->
    <rect x="160" y="87.5" width="45" height="112.5" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="182.5" y="79.5" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">150</text>

    <!-- Mar: 135 -> Y = 200 - 135/200*150 = 98.75 -->
    <rect x="245" y="98.75" width="45" height="101.25" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="267.5" y="90.75" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">135</text>

    <!-- Apr: 180 -> Y = 200 - 180/200*150 = 65 -->
    <rect x="330" y="65" width="45" height="135" rx="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-zinc-800 dark:stroke-zinc-200" />
    <text x="352.5" y="57" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-800 dark:fill-zinc-100 font-bold" stroke="none">180</text>

    <!-- Axes -->
    <line x1="55" y1="200" x2="410" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />
    <line x1="55" y1="50" x2="55" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />

    <!-- X-Axis Labels -->
    <text x="97.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Jan</text>
    <text x="182.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Feb</text>
    <text x="267.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Mar</text>
    <text x="352.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Apr</text>
  </svg>`,

  // NR012: Quarterly Profits trend line chart
  NR012: `<svg viewBox="0 0 450 250" class="w-full max-w-md h-auto fill-none stroke-zinc-700 dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Lines -->
    <line x1="55" y1="50" x2="420" y2="50" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="100" x2="420" y2="100" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="150" x2="420" y2="150" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    
    <!-- Y-Axis Labels -->
    <text x="45" y="54" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">100</text>
    <text x="45" y="104" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">65</text>
    <text x="45" y="154" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">30</text>
    <text x="45" y="204" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">0</text>

    <!-- Trend Line -->
    <path d="M 97.5,125 L 182.5,102.5 L 267.5,113 L 352.5,80" class="stroke-indigo-500 dark:stroke-indigo-400" stroke-width="3" />

    <!-- Data points -->
    <circle cx="97.5" cy="125" r="4.5" class="fill-zinc-900 stroke-indigo-500 dark:fill-zinc-50 dark:stroke-indigo-400" stroke-width="2.5" />
    <text x="97.5" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-400 font-semibold" stroke="none">50</text>

    <circle cx="182.5" cy="102.5" r="4.5" class="fill-zinc-900 stroke-indigo-500 dark:fill-zinc-50 dark:stroke-indigo-400" stroke-width="2.5" />
    <text x="182.5" y="92.5" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-400 font-semibold" stroke="none">65</text>

    <circle cx="267.5" cy="113" r="4.5" class="fill-zinc-900 stroke-indigo-500 dark:fill-zinc-50 dark:stroke-indigo-400" stroke-width="2.5" />
    <text x="267.5" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-400 font-semibold" stroke="none">58</text>

    <circle cx="352.5" cy="80" r="4.5" class="fill-zinc-800 stroke-indigo-600 dark:fill-zinc-100 dark:stroke-indigo-300" stroke-width="2.5" />
    <text x="352.5" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-800 dark:fill-zinc-100 font-bold" stroke="none">80</text>

    <!-- Axes -->
    <line x1="55" y1="200" x2="410" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />
    <line x1="55" y1="50" x2="55" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />

    <!-- X-Axis Labels -->
    <text x="97.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Q1</text>
    <text x="182.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Q2</text>
    <text x="267.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Q3</text>
    <text x="352.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Q4</text>
  </svg>`,

  // NR020: Revenue Growth bar chart
  NR020: `<svg viewBox="0 0 450 250" class="w-full max-w-md h-auto fill-none stroke-zinc-700 dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Lines -->
    <line x1="55" y1="50" x2="420" y2="50" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="100" x2="420" y2="100" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="150" x2="420" y2="150" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    
    <!-- Y-Axis Labels -->
    <text x="45" y="54" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">Rp2.0M</text>
    <text x="45" y="104" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">Rp1.3M</text>
    <text x="45" y="154" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">Rp0.7M</text>
    <text x="45" y="204" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">Rp0.0</text>

    <!-- Bars -->
    <!-- 2022: 1.2M -> Y = 200 - 1.2/2.0*150 = 110 -->
    <rect x="75" y="110" width="45" height="90" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="97.5" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">Rp1.2M</text>

    <!-- 2023: 1.44M -> Y = 200 - 1.44/2.0*150 = 92 -->
    <rect x="160" y="92" width="45" height="108" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="182.5" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">Rp1.44M</text>

    <!-- 2024: 1.728M -> Y = 200 - 1.728/2.0*150 = 70.4 -->
    <rect x="245" y="70.4" width="45" height="129.6" rx="3" class="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-400 dark:stroke-zinc-700" />
    <text x="267.5" y="62.4" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-300 font-semibold" stroke="none">Rp1.728M</text>

    <!-- 2025: ? Projection -->
    <rect x="330" y="44.5" width="45" height="155.5" rx="3" stroke-dasharray="3" class="stroke-indigo-500 dark:stroke-indigo-400" />
    <text x="352.5" y="36.5" text-anchor="middle" font-family="sans-serif" font-size="10" class="fill-indigo-600 dark:fill-indigo-400 font-bold" stroke="none">?</text>

    <!-- Axes -->
    <line x1="55" y1="200" x2="410" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />
    <line x1="55" y1="50" x2="55" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />

    <!-- X-Axis Labels -->
    <text x="97.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">2022</text>
    <text x="182.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">2023</text>
    <text x="267.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">2024</text>
    <text x="352.5" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">2025</text>
  </svg>`,

  // === V3 Questions ===

  // QR15: Dual Line Chart
  QR15: `<svg viewBox="0 0 450 250" class="w-full max-w-md h-auto fill-none stroke-zinc-700 dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Lines -->
    <line x1="55" y1="50" x2="420" y2="50" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="100" x2="420" y2="100" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="55" y1="150" x2="420" y2="150" stroke-dasharray="4" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    
    <!-- Y-Axis Labels -->
    <text x="45" y="54" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">200</text>
    <text x="45" y="104" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">130</text>
    <text x="45" y="154" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">60</text>
    <text x="45" y="204" text-anchor="end" font-family="sans-serif" font-size="11" class="fill-zinc-400 font-medium" stroke="none">0</text>

    <!-- Axes -->
    <line x1="55" y1="200" x2="420" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />
    <line x1="55" y1="30" x2="55" y2="200" stroke-width="2" class="stroke-zinc-400 dark:stroke-zinc-700" />

    <!-- X-Axis Labels -->
    <text x="80" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Jan</text>
    <text x="140" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Feb</text>
    <text x="200" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Mar</text>
    <text x="260" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Apr</text>
    <text x="320" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Mei</text>
    <text x="380" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" class="fill-zinc-500 font-medium" stroke="none">Jun</text>

    <!-- Product A Line (Blue) - Constant: Jan=100, Feb=110, Mar=120, Apr=130, Mei=140, Jun=150 -->
    <!-- Formula: Y = 200 - (Val/200)*150 -->
    <path d="M 80,125 L 140,117.5 L 200,110 L 260,102.5 L 320,95 L 380,87.5" stroke="rgb(59, 130, 246)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="80" cy="125" r="4" fill="rgb(59, 130, 246)" />
    <circle cx="140" cy="117.5" r="4" fill="rgb(59, 130, 246)" />
    <circle cx="200" cy="110" r="4" fill="rgb(59, 130, 246)" />
    <circle cx="260" cy="102.5" r="4" fill="rgb(59, 130, 246)" />
    <circle cx="320" cy="95" r="4" fill="rgb(59, 130, 246)" />
    <circle cx="380" cy="87.5" r="4" fill="rgb(59, 130, 246)" />

    <!-- Product B Line (Red) - Faster: Jan=60, Feb=80, Mar=105, Apr=135, Mei=160, Jun=180 -->
    <!-- Formula: Y = 200 - (Val/200)*150 -->
    <path d="M 80,155 L 140,140 L 200,121.25 L 260,98.75 L 320,80 L 380,65" stroke="rgb(244, 63, 94)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="80" cy="155" r="4" fill="rgb(244, 63, 94)" />
    <circle cx="140" cy="140" r="4" fill="rgb(244, 63, 94)" />
    <circle cx="200" cy="121.25" r="4" fill="rgb(244, 63, 94)" />
    <circle cx="260" cy="98.75" r="4" fill="rgb(244, 63, 94)" />
    <circle cx="320" cy="80" r="4" fill="rgb(244, 63, 94)" />
    <circle cx="380" cy="65" r="4" fill="rgb(244, 63, 94)" />

    <!-- Legend -->
    <rect x="300" y="30" width="110" height="40" rx="4" class="fill-white/80 dark:fill-zinc-950/80 stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
    <line x1="310" y1="42" x2="330" y2="42" stroke="rgb(59, 130, 246)" stroke-width="3" />
    <text x="338" y="46" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-400 font-medium" stroke="none">Produk A</text>
    <line x1="310" y1="58" x2="330" y2="58" stroke="rgb(244, 63, 94)" stroke-width="3" />
    <text x="338" y="62" font-family="sans-serif" font-size="10" class="fill-zinc-600 dark:fill-zinc-400 font-medium" stroke="none">Produk B</text>
  </svg>`,

  // VZ01: Letter F in white box
  VZ01: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <rect width="90" height="90" rx="4" x="5" y="5" />
    <text x="50" y="65" text-anchor="middle" font-family="sans-serif" font-size="45" font-weight="bold" class="fill-blue-500 stroke-none">F</text>
  </svg>`,

  // VZ02: 3D Isometric Cube with symbols
  VZ02: `<svg viewBox="0 0 120 120" class="w-32 h-32 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Top Face (Star) -->
    <polygon points="60,20 95,38 60,56 25,38" class="fill-zinc-50 dark:fill-zinc-900" />
    <!-- Star on top face (skewed/transformed) -->
    <g transform="translate(60, 38) scale(0.8)">
      <polygon points="0,-12 3,-3 12,-3 5,2 8,11 0,6 -8,11 -5,2 -12,-3 -3,-3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </g>

    <!-- Left Face (Circle) -->
    <polygon points="25,38 60,56 60,96 25,78" class="fill-zinc-100 dark:fill-zinc-900/50" />
    <circle cx="42.5" cy="67" r="10" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />

    <!-- Right Face (Triangle) -->
    <polygon points="60,56 95,38 95,78 60,96" class="fill-zinc-200 dark:fill-zinc-800" />
    <polygon points="77.5,57 87.5,77 67.5,77" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
  </svg>`,

  // VZ03: Cube net - cross
  VZ03: `<svg viewBox="0 0 140 180" class="w-36 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="1.5">
    <!-- Baris 1: Bintang -->
    <rect x="50" y="10" width="40" height="40" />
    <polygon points="70,18 72,24 78,24 73,28 75,34 70,30 65,34 67,28 62,24 68,24" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />

    <!-- Baris 2: Lingkaran -->
    <rect x="50" y="50" width="40" height="40" />
    <circle cx="70" cy="70" r="10" />

    <!-- Baris 3: Segitiga (Tengah) -->
    <rect x="50" y="90" width="40" height="40" />
    <polygon points="70,98 80,118 60,118" />

    <!-- Kiri Baris 3: Hati -->
    <rect x="10" y="90" width="40" height="40" />
    <path d="M 30,102 C 26,96, 18,98, 18,106 C 18,114, 30,122, 30,122 C 30,122, 42,114, 42,106 C 42,98, 34,96, 30,102 Z" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />

    <!-- Kanan Baris 3: Panah -->
    <rect x="90" y="90" width="40" height="40" />
    <polygon points="102,110 112,110 112,104 118,110 112,116 112,110" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <line x1="102" y1="110" x2="112" y2="110" stroke-width="2" class="stroke-zinc-800 dark:stroke-zinc-200" />

    <!-- Baris 4: Persegi -->
    <rect x="50" y="130" width="40" height="40" />
    <rect x="60" y="140" width="20" height="20" />
  </svg>`,

  // VZ04: Cube net - Inverted T
  VZ04: `<svg viewBox="0 0 180 140" class="w-40 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="1.5">
    <!-- Row 1: A, B, C, D -->
    <rect x="10" y="10" width="40" height="40" />
    <text x="30" y="36" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">A</text>

    <rect x="50" y="10" width="40" height="40" />
    <text x="70" y="36" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">B</text>

    <rect x="90" y="10" width="40" height="40" />
    <text x="110" y="36" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">C</text>

    <rect x="130" y="10" width="40" height="40" />
    <text x="150" y="36" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">D</text>

    <!-- Row 2: E below B -->
    <rect x="50" y="50" width="40" height="40" />
    <text x="70" y="76" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">E</text>

    <!-- Row 3: F below E -->
    <rect x="50" y="90" width="40" height="40" />
    <text x="70" y="116" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">F</text>
  </svg>`,

  // VZ05: 3x3 Matrix - Sizes
  VZ05: `<svg viewBox="0 0 310 310" class="w-64 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Grid Background Boxes -->
    <!-- Row 1: Circles -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="10" />
    </g>
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="20" />
    </g>
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="30" />
    </g>

    <!-- Row 2: Squares -->
    <g transform="translate(10, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="30" y="30" width="20" height="20" />
    </g>
    <g transform="translate(110, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="20" y="20" width="40" height="40" />
    </g>
    <g transform="translate(210, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="10" y="10" width="60" height="60" />
    </g>

    <!-- Row 3: Triangles -->
    <g transform="translate(10, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,28 52,58 28,58" />
    </g>
    <g transform="translate(110, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,18 64,62 16,62" />
    </g>
    <!-- Cell 3,3: Question Mark -->
    <g transform="translate(210, 210)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ06: 3x3 Matrix - Dots & shapes
  VZ06: `<svg viewBox="0 0 310 310" class="w-64 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: 1 dot -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,18 68,66 12,66" />
      <circle cx="40" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" />
      <circle cx="40" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="24" />
      <circle cx="40" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>

    <!-- Row 2: 2 dots -->
    <g transform="translate(10, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,18 68,66 12,66" />
      <circle cx="32" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="48" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(110, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" />
      <circle cx="32" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="48" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(210, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="24" />
      <circle cx="32" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="48" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>

    <!-- Row 3: 3 dots -->
    <g transform="translate(10, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,18 68,66 12,66" />
      <circle cx="28" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="52" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(110, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" />
      <circle cx="28" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="52" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Cell 3,3: Question Mark -->
    <g transform="translate(210, 210)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ07: 3x3 Matrix - Arrows
  VZ07: `<svg viewBox="0 0 310 310" class="w-64 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Row 1: Unfilled (CW: Up, Right, Down) -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,20 20,45 32,45 32,65 48,65 48,45 60,45" />
    </g>
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="60,40 35,20 35,32 15,32 15,48 35,48 35,60" />
    </g>
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,60 20,35 32,35 32,15 48,15 48,35 60,35" />
    </g>

    <!-- Row 2: Half Filled (CW: Up, Right, Down) -->
    <g transform="translate(10, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,20 20,45 32,45 32,65 48,65 48,45 60,45" />
      <path d="M 32,45 L 32,65 L 48,65 L 48,45 Z" class="fill-zinc-500/40" />
    </g>
    <g transform="translate(110, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="60,40 35,20 35,32 15,32 15,48 35,48 35,60" />
      <path d="M 35,32 L 15,32 L 15,48 L 35,48 Z" class="fill-zinc-500/40" />
    </g>
    <g transform="translate(210, 110)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,60 20,35 32,35 32,15 48,15 48,35 60,35" />
      <path d="M 32,35 L 32,15 L 48,15 L 48,35 Z" class="fill-zinc-500/40" />
    </g>

    <!-- Row 3: Full Filled (CW: Up, Right, ?) -->
    <g transform="translate(10, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,20 20,45 32,45 32,65 48,65 48,45 60,45" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <g transform="translate(110, 210)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="60,40 35,20 35,32 15,32 15,48 35,48 35,60" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Cell 3,3: Question Mark -->
    <g transform="translate(210, 210)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ08: Clock hand rotation
  VZ08: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: 12 o'clock -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" />
      <line x1="40" y1="40" x2="40" y2="18" stroke-width="2.5" class="stroke-zinc-800 dark:stroke-zinc-200" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: 1:30 (45°) -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" />
      <line x1="40" y1="40" x2="56" y2="24" stroke-width="2.5" class="stroke-zinc-800 dark:stroke-zinc-200" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: 3 o'clock (90°) -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" />
      <line x1="40" y1="40" x2="62" y2="40" stroke-width="2.5" class="stroke-zinc-800 dark:stroke-zinc-200" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: 4:30 (135°) -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="28" />
      <line x1="40" y1="40" x2="56" y2="56" stroke-width="2.5" class="stroke-zinc-800 dark:stroke-zinc-200" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ09: Polygon + dots sequence
  VZ09: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Box 1: Triangle + 1 dot -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,22 64,64 16,64" />
      <circle cx="40" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 2: Square + 2 dots -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="20" y="20" width="40" height="40" />
      <circle cx="34" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 3: Pentagon + 3 dots -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,20 62,36 54,62 26,62 18,36" />
      <circle cx="32" cy="46" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="48" cy="46" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 4: Hexagon + 4 dots -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,18 60,29 60,53 40,64 20,53 20,29" />
      <circle cx="33" cy="36" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="47" cy="36" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="33" cy="47" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="47" cy="47" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ10: Star sequence (rotates 72° CW, gets darker, dots increase)
  VZ10: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Star Path definition -->
    <defs>
      <polygon id="v3star" points="0,-24 7,-7 23,-5 10,6 14,22 0,13 -14,22 -10,6 -23,-5 -7,-7" />
    </defs>
    <!-- Box 1: White, 0° CW, 0 dots -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#v3star" x="40" y="40" class="fill-white dark:fill-zinc-950 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
    </g>
    <!-- Box 2: Light Grey, 72° CW, 1 dot -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#v3star" x="40" y="40" transform="rotate(72, 40, 40)" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
      <circle cx="40" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </g>
    <!-- Box 3: Medium Grey, 144° CW, 2 dots -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#v3star" x="40" y="40" transform="rotate(144, 40, 40)" class="fill-zinc-400 dark:fill-zinc-600 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
      <circle cx="35" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="45" cy="40" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </g>
    <!-- Box 4: Dark Grey, 216° CW, 3 dots -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <use href="#v3star" x="40" y="40" transform="rotate(216, 40, 40)" class="fill-zinc-600 dark:fill-zinc-400 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
      <circle cx="34" cy="45" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="40" cy="35" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="46" cy="45" r="2.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </g>
    <!-- Box 5: ? -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ11: Transform Analogy
  VZ11: `<svg viewBox="0 0 450 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Shape 1: Blue Square -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
    </g>

    <!-- Arrow -->
    <g transform="translate(100, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 2: Quadrant Shaded Square -->
    <g transform="translate(160, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" stroke-width="2" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="40" y1="18" x2="40" y2="62" stroke-width="1.5" />
      <line x1="18" y1="40" x2="62" y2="40" stroke-width="1.5" />
      <!-- Diagonal Quadrants fill: Left-Top & Right-Bottom -->
      <rect x="18" y="18" width="22" height="22" class="fill-zinc-700 dark:fill-zinc-400" />
      <rect x="40" y="40" width="22" height="22" class="fill-zinc-700 dark:fill-zinc-400" />
    </g>

    <!-- Colon separator (::) -->
    <g transform="translate(250, 10)">
      <text x="15" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">::</text>
    </g>

    <!-- Shape 3: Blue Circle -->
    <g transform="translate(290, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="40" cy="40" r="22" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
    </g>

    <!-- Arrow -->
    <g transform="translate(380, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 4: ? -->
    <g transform="translate(440, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ12: Shape trim analogy
  VZ12: `<svg viewBox="0 0 450 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Shape 1: Plain Square -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="18" y="18" width="44" height="44" />
    </g>

    <!-- Arrow -->
    <g transform="translate(100, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 2: Octagon with small black circle in center -->
    <g transform="translate(160, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="32,18 48,18 62,32 62,48 48,62 32,62 18,48 18,32" />
      <circle cx="40" cy="40" r="5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </g>

    <!-- Colon -->
    <g transform="translate(250, 10)">
      <text x="15" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">::</text>
    </g>

    <!-- Shape 3: Plain equilateral triangle -->
    <g transform="translate(290, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,18 64,60 16,60" />
    </g>

    <!-- Arrow -->
    <g transform="translate(380, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 4: ? -->
    <g transform="translate(440, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // VZ13: Balok berbentuk L 3D
  VZ13: `<svg viewBox="0 0 120 120" class="w-32 h-32 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="1.5">
    <!-- Drawing an L block in isometric projection -->
    <!-- Base block (cube 1) and upright block (cube 2) -->
    <!-- Bottom base right face -->
    <polygon points="65,65 95,50 95,80 65,95" class="fill-zinc-200 dark:fill-zinc-800" />
    <!-- Bottom base left face -->
    <polygon points="35,50 65,65 65,95 35,80" class="fill-zinc-150 dark:fill-zinc-900/60" />
    <!-- Base top face (where upright sits next to it) -->
    <polygon points="65,65 95,50 65,35 35,50" class="fill-zinc-100 dark:fill-zinc-900/30" />

    <!-- Upright block (stacked on back-right of base) -->
    <!-- Upright top face -->
    <polygon points="65,35 95,20 65,5 35,20" class="fill-zinc-50 dark:fill-zinc-900" />
    <!-- Upright left face -->
    <polygon points="35,20 65,35 65,65 35,50" class="fill-zinc-100 dark:fill-zinc-900/50" />
    <!-- Upright right face -->
    <polygon points="65,35 95,20 95,50 65,65" class="fill-zinc-200 dark:fill-zinc-800" />
  </svg>`,

  // VZ14: Staircase cube net
  VZ14: `<svg viewBox="0 0 180 140" class="w-40 h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="1">
    <!-- Box 1 (Horizontal stripes): x=10, y=10 -->
    <rect x="10" y="10" width="30" height="30" />
    <line x1="10" y1="16" x2="40" y2="16" />
    <line x1="10" y1="22" x2="40" y2="22" />
    <line x1="10" y1="28" x2="40" y2="28" />

    <!-- Box 2 (Dots): x=40, y=10 -->
    <rect x="40" y="10" width="30" height="30" />
    <circle cx="48" cy="18" r="1.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <circle cx="62" cy="18" r="1.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <circle cx="48" cy="32" r="1.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <circle cx="62" cy="32" r="1.5" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />

    <!-- Box 3 (Blank): x=40, y=40 -->
    <rect x="40" y="40" width="30" height="30" />

    <!-- Box 4 (Checkerboard): x=70, y=40 -->
    <rect x="70" y="40" width="30" height="30" />
    <rect x="70" y="40" width="15" height="15" class="fill-zinc-700 dark:fill-zinc-500" />
    <rect x="85" y="55" width="15" height="15" class="fill-zinc-700 dark:fill-zinc-500" />

    <!-- Box 5 (Cross-hatch): x=70, y=70 -->
    <rect x="70" y="70" width="30" height="30" />
    <line x1="70" y1="70" x2="100" y2="100" />
    <line x1="70" y1="100" x2="100" y2="70" stroke-dasharray="2" />

    <!-- Box 6 (Wavy lines): x=100, y=70 -->
    <rect x="100" y="70" width="30" height="30" />
    <path d="M 100,78 Q 107.5,73 115,78 T 130,78" />
    <path d="M 100,85 Q 107.5,80 115,85 T 130,85" />
    <path d="M 100,92 Q 107.5,87 115,92 T 130,92" />
  </svg>`,

  // VZ15: Rotation + color analogy
  VZ15: `<svg viewBox="0 0 450 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Shape 1: White pentagon with diagonal line -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,20 62,36 54,62 26,62 18,36" />
      <line x1="40" y1="20" x2="54" y2="62" />
    </g>

    <!-- Arrow -->
    <g transform="translate(100, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 2: Grey pentagon rotated 72° -->
    <g transform="translate(160, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <g transform="rotate(72,40,40)">
        <polygon points="40,20 62,36 54,62 26,62 18,36" class="fill-zinc-400 dark:fill-zinc-600 stroke-zinc-700 dark:stroke-zinc-400" />
        <line x1="40" y1="20" x2="54" y2="62" class="stroke-zinc-700 dark:stroke-zinc-300" />
      </g>
    </g>

    <!-- Colon -->
    <g transform="translate(250, 10)">
      <text x="15" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">::</text>
    </g>

    <!-- Shape 3: White hexagon with diagonal line -->
    <g transform="translate(290, 10)">
      <rect width="80" height="80" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="40,20 60,31 60,53 40,64 20,53 20,29" />
      <line x1="40" y1="20" x2="40" y2="64" />
    </g>

    <!-- Arrow -->
    <g transform="translate(380, 10)">
      <text x="25" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" class="fill-zinc-400 stroke-none">→</text>
    </g>

    <!-- Shape 4: ? -->
    <g transform="translate(440, 10)">
      <rect width="80" height="80" rx="4" stroke-dasharray="4" class="stroke-zinc-400 dark:stroke-zinc-600" />
      <text x="40" y="48" text-anchor="middle" font-family="sans-serif" font-size="24" class="fill-zinc-600 dark:fill-zinc-400 font-bold" stroke="none">?</text>
    </g>
  </svg>`,

  // WM07: Grid 3x3 memory
  WM07: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Outer Box -->
    <rect width="90" height="90" rx="4" x="5" y="5" />
    <!-- Lines -->
    <line x1="35" y1="5" x2="35" y2="95" />
    <line x1="65" y1="5" x2="65" y2="95" />
    <line x1="5" y1="35" x2="95" y2="35" />
    <line x1="5" y1="65" x2="95" y2="65" />
    <!-- Colored Squares -->
    <!-- Baris 1: putih, gelap (x=35, y=5), putih -->
    <rect x="35" y="5" width="30" height="30" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <!-- Baris 2: putih, putih, gelap (x=65, y=35) -->
    <rect x="65" y="35" width="30" height="30" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <!-- Baris 3: gelap (x=5, y=65), putih, putih -->
    <rect x="5" y="65" width="30" height="30" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
  </svg>`,

  // WM08: Grid 4x4 memory
  WM08: `<svg viewBox="0 0 100 100" class="w-24 h-24 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Outer Box -->
    <rect width="92" height="92" rx="4" x="4" y="4" />
    <!-- Lines -->
    <line x1="27" y1="4" x2="27" y2="96" />
    <line x1="50" y1="4" x2="50" y2="96" />
    <line x1="73" y1="4" x2="73" y2="96" />
    <line x1="4" y1="27" x2="96" y2="27" />
    <line x1="4" y1="50" x2="96" y2="50" />
    <line x1="4" y1="73" x2="96" y2="73" />
    <!-- Dark cells -->
    <!-- Row 1: 1 (4-27), 3 (50-73) -->
    <rect x="4" y="4" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <rect x="50" y="4" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <!-- Row 2: 2 (27-50), 4 (73-96) -->
    <rect x="27" y="27" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <rect x="73" y="27" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <!-- Row 3: 1 (4-27), 4 (73-96) -->
    <rect x="4" y="50" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <rect x="73" y="50" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <!-- Row 4: 2 (27-50), 3 (50-73) -->
    <rect x="27" y="73" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    <rect x="50" y="73" width="23" height="23" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
  </svg>`,

  // WM09: 5 shapes horizontal memory
  WM09: `<svg viewBox="0 0 520 100" class="w-full max-w-xl h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Shape 1: Lingkaran biru -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="24" class="fill-blue-500/20 stroke-blue-500" stroke-width="2.5" />
    </g>
    <!-- Shape 2: Segitiga merah -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,18 66,62 14,62" class="fill-rose-500/20 stroke-rose-500" stroke-width="2.5" />
    </g>
    <!-- Shape 3: Persegi hijau -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="18" y="18" width="44" height="44" class="fill-emerald-500/20 stroke-emerald-500" stroke-width="2.5" />
    </g>
    <!-- Shape 4: Bintang kuning -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <!-- Star -->
      <polygon points="40,16 43,28 55,28 46,36 49,48 40,40 31,48 34,36 25,28 37,28" class="fill-amber-500/20 stroke-amber-500" stroke-width="2.5" />
    </g>
    <!-- Shape 5: Hati ungu -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <path d="M 40,42 C 34,32, 22,35, 22,47 C 22,59, 40,71, 40,71 C 40,71, 58,59, 58,47 C 58,35, 46,32, 40,42 Z" class="fill-purple-500/20 stroke-purple-500" stroke-width="2.5" />
    </g>
  </svg>`,

  // WM10: 8 shapes horizontal memory
  WM10: `<svg viewBox="0 0 810 100" class="w-full h-auto stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
    <!-- Shape 1: Segitiga merah -->
    <g transform="translate(10, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,18 66,62 14,62" class="fill-rose-500/20 stroke-rose-500" stroke-width="2" />
    </g>
    <!-- Shape 2: Lingkaran biru -->
    <g transform="translate(110, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="24" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
    </g>
    <!-- Shape 3: Persegi merah -->
    <g transform="translate(210, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="18" y="18" width="44" height="44" class="fill-rose-500/20 stroke-rose-500" stroke-width="2" />
    </g>
    <!-- Shape 4: Bintang hijau -->
    <g transform="translate(310, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,16 43,28 55,28 46,36 49,48 40,40 31,48 34,36 25,28 37,28" class="fill-emerald-500/20 stroke-emerald-500" stroke-width="2" />
    </g>
    <!-- Shape 5: Hati kuning -->
    <g transform="translate(410, 10)">
      <rect width="80" height="80" rx="4" />
      <path d="M 40,42 C 34,32, 22,35, 22,47 C 22,59, 40,71, 40,71 C 40,71, 58,59, 58,47 C 58,35, 46,32, 40,42 Z" class="fill-amber-500/20 stroke-amber-500" stroke-width="2" />
    </g>
    <!-- Shape 6: Segitiga merah -->
    <g transform="translate(510, 10)">
      <rect width="80" height="80" rx="4" />
      <polygon points="40,18 66,62 14,62" class="fill-rose-500/20 stroke-rose-500" stroke-width="2" />
    </g>
    <!-- Shape 7: Lingkaran ungu -->
    <g transform="translate(610, 10)">
      <rect width="80" height="80" rx="4" />
      <circle cx="40" cy="40" r="24" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
    </g>
    <!-- Shape 8: Persegi biru -->
    <g transform="translate(710, 10)">
      <rect width="80" height="80" rx="4" />
      <rect x="18" y="18" width="44" height="44" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
    </g>
  </svg>`
};

export const figuralOptionSvgs: Record<string, string[]> = {
  ABS001: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star-opt1" points="5,1 6.5,4 10,4 7.5,6 8.5,9 5,7 1.5,9 2.5,6 0,4 3.5,4" class="fill-zinc-800 dark:fill-zinc-200" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star-opt1" x="25" y="25" />
      <use href="#star-opt1" x="55" y="25" />
      <use href="#star-opt1" x="25" y="55" />
      <use href="#star-opt1" x="55" y="55" />
      <use href="#star-opt1" x="40" y="40" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star-opt2" points="5,1 6.5,4 10,4 7.5,6 8.5,9 5,7 1.5,9 2.5,6 0,4 3.5,4" class="fill-zinc-800 dark:fill-zinc-200" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star-opt2" x="25" y="25" />
      <use href="#star-opt2" x="55" y="25" />
      <use href="#star-opt2" x="25" y="55" />
      <use href="#star-opt2" x="55" y="55" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star-opt3" points="5,1 6.5,4 10,4 7.5,6 8.5,9 5,7 1.5,9 2.5,6 0,4 3.5,4" class="fill-zinc-800 dark:fill-zinc-200" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star-opt3" x="25" y="25" />
      <use href="#star-opt3" x="55" y="25" />
      <use href="#star-opt3" x="40" y="50" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star-opt4" points="5,1 6.5,4 10,4 7.5,6 8.5,9 5,7 1.5,9 2.5,6 0,4 3.5,4" class="fill-zinc-800 dark:fill-zinc-200" />
      </defs>
      <circle cx="50" cy="50" r="43" />
      <use href="#star-opt4" x="35" y="35" />
      <use href="#star-opt4" x="55" y="35" />
      <use href="#star-opt4" x="35" y="55" />
      <use href="#star-opt4" x="55" y="55" />
      <use href="#star-opt4" x="45" y="45" />
    </svg>`
  ],
  ABS002: [
    // Option A (Up)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="50" y1="75" x2="50" y2="25" />
      <polygon points="50,20 44,32 56,32" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B (Down)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="50" y1="25" x2="50" y2="75" />
      <polygon points="50,80 44,68 56,68" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (Right)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="25" y1="50" x2="75" y2="50" />
      <polygon points="80,50 68,44 68,56" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (Left)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="75" y1="50" x2="25" y2="50" />
      <polygon points="20,50 32,44 32,56" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS003: [
    // Option A (100% filled)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="25" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B (0% filled)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="25" />
    </svg>`,
    // Option C (50% filled)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="25" />
      <path d="M 50,50 L 50,25 A 25,25 0 0,1 50,75 Z" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (25% filled)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="25" />
      <path d="M 50,50 L 50,25 A 25,25 0 0,1 75,50 Z" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS004: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star6-opt" points="50,15 57,36 78,36 61,49 67,70 50,57 33,70 39,49 22,36 43,36" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star6-opt" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star6-opt2" points="50,15 57,36 78,36 61,49 67,70 50,57 33,70 39,49 22,36 43,36" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star6-opt2" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star5-opt" points="50,18 53,30 65,30 55,38 59,50 50,42 41,50 45,38 35,30 47,30" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star5-opt" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <defs>
        <polygon id="star6-opt3" points="50,15 57,36 78,36 61,49 67,70 50,57 33,70 39,49 22,36 43,36" />
      </defs>
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#star6-opt3" class="fill-zinc-400 stroke-zinc-500" />
    </svg>`
  ],
  ABS005: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="35" y="35" width="30" height="30" transform="rotate(45, 50, 50)" />
      <circle cx="50" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="38" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="35" y="35" width="30" height="30" transform="rotate(45, 50, 50)" />
      <circle cx="43" cy="43" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="57" cy="43" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="43" cy="57" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="57" cy="57" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <circle cx="38" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="38" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <circle cx="38" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="38" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS006: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" stroke-dasharray="none" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" />
      <polyline points="50,20 75,35 75,65 50,80 25,65 25,35" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" />
      <polyline points="50,20 75,35 75,65 50,80 25,65" stroke-width="4" class="stroke-zinc-900 dark:stroke-zinc-100" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" />
    </svg>`
  ],
  ABS007: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="15" y="40" width="16" height="16" />
      <rect x="38" y="40" width="16" height="16" />
      <rect x="61" y="40" width="16" height="16" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="25" y="40" width="16" height="16" />
      <rect x="48" y="40" width="16" height="16" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="25,35 15,60 35,60" />
      <polygon points="50,35 40,60 60,60" />
      <polygon points="75,35 65,60 85,60" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="25" y="25" width="16" height="16" />
      <rect x="48" y="25" width="16" height="16" />
      <rect x="25" y="48" width="16" height="16" />
      <rect x="48" y="48" width="16" height="16" />
    </svg>`
  ],
  ABS008: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 30,60 70,60" transform="rotate(120, 50, 50)" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="56" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="56" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 30,60 70,60" transform="rotate(120, 50, 50)" />
      <circle cx="50" cy="40" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="48" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="48" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 30,60 70,60" transform="rotate(120, 50, 50)" />
      <circle cx="50" cy="42" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="52" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 30,60 70,60" transform="rotate(240, 50, 50)" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="56" cy="38" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="44" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="56" cy="62" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS009: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 20,70 80,70" />
      <line x1="50" y1="20" x2="50" y2="70" />
      <line x1="32" y1="50" x2="68" y2="50" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 20,70 80,70" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="25" y="25" width="50" height="50" />
      <line x1="50" y1="25" x2="50" y2="75" />
      <line x1="25" y1="50" x2="75" y2="50" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 20,70 80,70" />
      <line x1="50" y1="20" x2="50" y2="70" />
    </svg>`
  ],
  ABS010: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,15 72,23 85,42 82,66 66,82 42,85 20,75 15,50 28,26" class="fill-white dark:fill-zinc-950" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,15 75,25 85,50 75,75 50,85 25,75 15,50 25,25" class="fill-white dark:fill-zinc-950" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,15 72,23 85,42 82,66 66,82 42,85 20,75 15,50 28,26" class="fill-zinc-400 dark:fill-zinc-700" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,15 70,19 85,32 90,52 82,72 65,85 45,85 25,78 15,58 22,35" class="fill-white dark:fill-zinc-950" />
    </svg>`
  ],
  ABS011: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polyline points="35,25 35,65 60,65" stroke-width="3" />
      <circle cx="68" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="55" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="65" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polyline points="65,25 65,65 40,65" stroke-width="3" />
      <circle cx="32" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="55" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="65" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polyline points="35,25 35,65 60,65" stroke-width="3" />
      <circle cx="68" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="68" cy="55" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polyline points="65,25 65,65 40,65" stroke-width="3" />
      <circle cx="32" cy="25" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="35" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="45" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="32" cy="55" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS012: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="20" y1="67" x2="80" y2="33" stroke-width="3" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="20" y1="50" x2="80" y2="50" stroke-width="3" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="30" y1="75" x2="70" y2="25" stroke-width="3" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <line x1="50" y1="20" x2="50" y2="80" stroke-width="3" />
    </svg>`
  ],
  ABS013: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="40" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="33" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="26" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="19" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="12" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="5" class="fill-white dark:fill-zinc-950" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="40" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="32" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="24" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="16" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="40" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="42" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="36" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="30" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="24" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="18" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="12" class="fill-white dark:fill-zinc-950" />
      <circle cx="50" cy="50" r="6" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS014: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="15" y="15" width="16" height="16" class="fill-zinc-800 dark:fill-zinc-200" />
      <rect x="38" y="15" width="16" height="16" class="fill-zinc-800 dark:fill-zinc-200" />
      <rect x="26.5" y="38" width="16" height="16" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="15" y="15" width="16" height="16" />
      <rect x="38" y="15" width="16" height="16" />
      <rect x="26.5" y="38" width="16" height="16" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="15" y="15" width="16" height="16" class="fill-zinc-800 dark:fill-zinc-200" />
      <rect x="38" y="15" width="16" height="16" class="fill-zinc-800 dark:fill-zinc-200" />
      <rect x="26.5" y="38" width="16" height="16" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="23" cy="23" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="46" cy="23" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="34.5" cy="46" r="8" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  ABS015: [
    // Option A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <defs>
        <path id="heart-opt" d="M 0,-5 C -3,-10 -10,-10 -10,-5 C -10,0 -5,5 0,10 C 5,5 10,0 10,-5 C 10,-10 3,-10 0,-5 Z" class="fill-red-500 stroke-red-600" />
      </defs>
      <rect width="90" height="90" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <use href="#heart-opt" transform="translate(50, 50) scale(3)" />
    </svg>`,
    // Option B
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <use href="#heart" transform="translate(50, 50) scale(1.8)" />
    </svg>`,
    // Option C
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <path d="M 0,-5 C -3,-10 -10,-10 -10,-5 C -10,0 -5,5 0,10 C 5,5 10,0 10,-5 C 10,-10 3,-10 0,-5 Z" class="fill-blue-500 stroke-blue-600" transform="translate(50, 50) scale(3)" />
    </svg>`,
    // Option D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="30" class="fill-red-500 stroke-red-600" />
    </svg>`
  ],
  AR001: [
    // Option A (Correct: large triangle)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,18 20,72 80,72" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B (large circle)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="28" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (small triangle)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,40 40,58 60,58" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (large square)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="22" y="22" width="56" height="56" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR002: [
    // Option A (Correct: kiri bawah)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" stroke-dasharray="2" />
      <circle cx="30" cy="70" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B (kiri atas)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" stroke-dasharray="2" />
      <circle cx="30" cy="30" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (tengah)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" stroke-dasharray="2" />
      <circle cx="50" cy="50" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (kanan atas)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" stroke-dasharray="2" />
      <circle cx="70" cy="30" r="5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR003: [
    // Option A (Correct: segitiga)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,25 25,68 75,68" class="fill-zinc-100 dark:fill-zinc-900" />
    </svg>`,
    // Option B (segi lima)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 75,40 65,70 35,70 25,40" class="fill-zinc-100 dark:fill-zinc-900" />
    </svg>`,
    // Option C (segi enam)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,20 75,34 75,64 50,78 25,64 25,34" class="fill-zinc-100 dark:fill-zinc-900" />
    </svg>`,
    // Option D (lingkaran)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="26" class="fill-zinc-100 dark:fill-zinc-900" />
    </svg>`
  ],
  AR004: [
    // Option A (Correct: segitiga bergaris)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" fill="url(#hatch-ar)" />
    </svg>`,
    // Option B (lingkaran padat)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="24" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (kotak kosong)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="26" y="26" width="48" height="48" />
    </svg>`,
    // Option D (segitiga padat)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR005: [
    // Option A (Correct: panah bawah)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#arrow-ar" transform="rotate(180, 50, 50) translate(10, 10)" />
    </svg>`,
    // Option B (panah atas)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#arrow-ar" transform="translate(10, 10)" />
    </svg>`,
    // Option C (panah kiri)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#arrow-ar" transform="rotate(270, 50, 50) translate(10, 10)" />
    </svg>`,
    // Option D (panah kanan)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <use href="#arrow-ar" transform="rotate(90, 50, 50) translate(10, 10)" />
    </svg>`
  ],
  AR006: [
    // Option A (Gambar 1)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
      <line x1="70" y1="30" x2="30" y2="70" />
    </svg>`,
    // Option B (Gambar 2)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="22" />
      <line x1="34.4" y1="34.4" x2="65.6" y2="65.6" />
      <line x1="65.6" y1="34.4" x2="34.4" y2="65.6" />
    </svg>`,
    // Option C (Gambar 3)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" />
      <line x1="50" y1="22" x2="50" y2="68" />
      <line x1="25" y1="68" x2="62.5" y2="45" />
      <line x1="75" y1="68" x2="37.5" y2="45" />
    </svg>`,
    // Option D (Correct: Gambar 4)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
    </svg>`
  ],
  AR007: [
    // Option A (Correct: Segitiga kiri bergaris)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
      <line x1="70" y1="30" x2="30" y2="70" />
      <polygon points="30,30 30,70 50,50" fill="url(#hatch-ar-7)" />
    </svg>`,
    // Option B (Segitiga kiri hitam pekat)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
      <line x1="70" y1="30" x2="30" y2="70" />
      <polygon points="30,30 30,70 50,50" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (Segitiga atas bergaris)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
      <line x1="70" y1="30" x2="30" y2="70" />
      <polygon points="30,30 70,30 50,50" fill="url(#hatch-ar-7)" />
    </svg>`,
    // Option D (Segitiga kanan hitam pekat)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="30" width="40" height="40" />
      <line x1="30" y1="30" x2="70" y2="70" />
      <line x1="70" y1="30" x2="30" y2="70" />
      <polygon points="70,30 70,70 50,50" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR008: [
    // Option A (Correct: segitiga 3 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" />
      <circle cx="41" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="59" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B (segitiga 2 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" />
      <circle cx="45" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="55" cy="52" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (kotak 3 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="26" y="26" width="48" height="48" />
      <circle cx="41" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="59" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (lingkaran 3 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="24" />
      <circle cx="41" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="59" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR009: [
    // Option A (Correct: ekstra besar 135°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(135, 50, 50)">
        <line x1="50" y1="80" x2="50" y2="20" stroke-width="5" />
        <polygon points="50,10 40,26 60,26" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option B (ekstra besar 180°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(180, 50, 50)">
        <line x1="50" y1="80" x2="50" y2="20" stroke-width="5" />
        <polygon points="50,10 40,26 60,26" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option C (besar 135°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(135, 50, 50)">
        <line x1="50" y1="75" x2="50" y2="25" stroke-width="3" />
        <polygon points="50,16 42,30 58,30" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option D (ekstra besar 90°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(90, 50, 50)">
        <line x1="50" y1="80" x2="50" y2="20" stroke-width="5" />
        <polygon points="50,10 40,26 60,26" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`
  ],
  AR010: [
    // Option A (Correct: lingkaran berongga kecil)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="14" />
    </svg>`,
    // Option B (lingkaran berongga besar)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="26" />
    </svg>`,
    // Option C (lingkaran padat kecil)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="14" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D (segitiga padat besar)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 22,78 78,78" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR011: [
    // Option A (Gambar 1)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <circle cx="50" cy="50" r="22" />
      <line x1="30" y1="40" x2="70" y2="40" />
      <line x1="30" y1="60" x2="70" y2="60" />
    </svg>`,
    // Option B (Gambar 2)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 25,68 75,68" />
      <line x1="37" y1="45" x2="63" y2="45" />
      <line x1="31" y1="56" x2="69" y2="56" />
    </svg>`,
    // Option C (Gambar 3)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="30" y="36" width="40" height="28" />
      <line x1="43.3" y1="36" x2="43.3" y2="64" />
      <line x1="56.6" y1="36" x2="56.6" y2="64" />
    </svg>`,
    // Option D (Correct: Gambar 4)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <rect x="28" y="28" width="44" height="44" />
      <line x1="28" y1="50" x2="72" y2="50" />
      <line x1="50" y1="28" x2="50" y2="72" />
    </svg>`
  ],
  AR012: [
    // Option A (Correct: 3 bentuk rot 90°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(90, 24, 50)">
        <polygon points="24,35 15,62 33,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(90, 50, 50)">
        <polygon points="50,35 41,62 59,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(90, 76, 50)">
        <polygon points="76,35 67,62 85,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option B (3 bentuk rot 60°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(60, 24, 50)">
        <polygon points="24,35 15,62 33,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(60, 50, 50)">
        <polygon points="50,35 41,62 59,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(60, 76, 50)">
        <polygon points="76,35 67,62 85,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option C (2 bentuk rot 90°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(90, 35, 50)">
        <polygon points="35,35 26,62 44,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(90, 65, 50)">
        <polygon points="65,35 56,62 74,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`,
    // Option D (3 bentuk rot 30°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <g transform="rotate(30, 24, 50)">
        <polygon points="24,35 15,62 33,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(30, 50, 50)">
        <polygon points="50,35 41,62 59,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
      <g transform="rotate(30, 76, 50)">
        <polygon points="76,35 67,62 85,62" class="fill-zinc-800 dark:fill-zinc-200" />
      </g>
    </svg>`
  ],
  AR013: [
    // Option A (Correct: panah bawah/biru)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,26 74,40 74,66 50,80 26,66 26,40" class="stroke-blue-500" />
      <line x1="50" y1="36" x2="50" y2="64" class="stroke-blue-500" stroke-width="2" />
      <polygon points="50,70 44,59 56,59" class="fill-blue-500 stroke-blue-500" />
    </svg>`,
    // Option B (panah atas/merah)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,26 74,40 74,66 50,80 26,66 26,40" class="stroke-red-500" />
      <line x1="50" y1="64" x2="50" y2="36" class="stroke-red-500" stroke-width="2" />
      <polygon points="50,30 44,41 56,41" class="fill-red-500 stroke-red-500" />
    </svg>`,
    // Option C (panah bawah/merah)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,26 74,40 74,66 50,80 26,66 26,40" class="stroke-red-500" />
      <line x1="50" y1="36" x2="50" y2="64" class="stroke-red-500" stroke-width="2" />
      <polygon points="50,70 44,59 56,59" class="fill-red-500 stroke-red-500" />
    </svg>`,
    // Option D (panah kanan/biru)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,26 74,40 74,66 50,80 26,66 26,40" class="stroke-blue-500" />
      <line x1="36" y1="50" x2="64" y2="50" class="stroke-blue-500" stroke-width="2" />
      <polygon points="70,50 59,44 59,56" class="fill-blue-500 stroke-blue-500" />
    </svg>`
  ],
  AR014: [
    // Option A (Correct: panah putih cermin)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <path d="M 62,62 L 38,38" />
      <polygon points="38,38 50,41 41,50" fill="white" />
    </svg>`,
    // Option B (panah hitam cermin)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <path d="M 62,62 L 38,38" />
      <polygon points="38,38 50,41 41,50" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (panah putih tidak cermin)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <path d="M 38,62 L 62,38" />
      <polygon points="62,38 50,41 59,50" fill="white" />
    </svg>`,
    // Option D (panah hitam tidak cermin)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <path d="M 38,62 L 62,38" />
      <polygon points="62,38 50,41 59,50" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],
  AR015: [
    // Option A (Correct: segi tujuh 0 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,24 73,34 83,57 69,76 31,76 17,57 27,34" />
    </svg>`,
    // Option B (segi tujuh 1 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,24 73,34 83,57 69,76 31,76 17,57 27,34" />
      <circle cx="50" cy="50" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C (segi delapan 0 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 70,30 78,50 70,70 50,78 30,70 22,50 30,30" />
    </svg>`,
    // Option D (segi enam 0 titik)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-zinc-700 fill-none dark:stroke-zinc-400" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" />
      <polygon points="50,22 72,35 72,65 50,78 28,65 28,35" />
    </svg>`
  ],

  // ─── V3: Visualization Option SVGs ─────────────────────────────────

  // VZ01: Letter F rotation options
  VZ01: [
    // Option A — F rotated 90° CW
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" class="fill-blue-500" transform="rotate(90,50,50)">F</text>
    </svg>`,
    // Option B — F mirrored horizontally
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" class="fill-blue-500" transform="scale(-1,1) translate(-100,0)">F</text>
    </svg>`,
    // Option C — F rotated 180°
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" class="fill-blue-500" transform="rotate(180,50,50)">F</text>
    </svg>`,
    // Option D — F mirrored and rotated
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" class="fill-blue-500" transform="rotate(90,50,50) scale(-1,1) translate(-100,0)">F</text>
    </svg>`
  ],

  // VZ05: Matrix pattern — shapes growing in size, answer = large triangle
  VZ05: [
    // Option A — segitiga besar
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,18 80,78 20,78" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option B — segitiga kecil
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,38 62,68 38,68" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option C — lingkaran besar
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="28" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option D — persegi besar
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="20" y="20" width="60" height="60" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`
  ],

  // VZ06: Matrix — shapes × dots, answer = lingkaran 3 titik
  VZ06: [
    // Option A — lingkaran dengan 3 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="38" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B — lingkaran dengan 2 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="42" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C — persegi dengan 3 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <rect x="24" y="24" width="52" height="52" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="38" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D — segitiga dengan 3 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,22 78,74 22,74" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="42" cy="58" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="58" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="58" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],

  // VZ07: Matrix — arrows direction × fill, answer = arrow down solid
  VZ07: [
    // Option A — panah bawah solid
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,80 25,45 40,45 40,20 60,20 60,45 75,45" class="fill-zinc-800 dark:fill-zinc-200 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option B — panah bawah separuh
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,80 25,45 40,45 40,20 60,20 60,45 75,45" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <rect x="25" y="50" width="50" height="30" class="fill-zinc-500/50" clip-path="polygon(50% 100%, 0% 0%, 100% 0%)" />
    </svg>`,
    // Option C — panah kanan solid
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="80,50 45,25 45,40 20,40 20,60 45,60 45,75" class="fill-zinc-800 dark:fill-zinc-200 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option D — panah atas solid
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,20 25,55 40,55 40,80 60,80 60,55 75,55" class="fill-zinc-800 dark:fill-zinc-200 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`
  ],

  // VZ08: Clock hand rotation, answer = 180° (6 o'clock)
  VZ08: [
    // Option A — jam 6 (180°)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="50" x2="50" y2="78" class="stroke-zinc-800 dark:stroke-zinc-200" stroke-width="3" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B — jam 7:30
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="50" x2="30" y2="70" class="stroke-zinc-800 dark:stroke-zinc-200" stroke-width="3" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C — jam 9
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="50" x2="22" y2="50" class="stroke-zinc-800 dark:stroke-zinc-200" stroke-width="3" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D — jam 12
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="50" x2="50" y2="22" class="stroke-zinc-800 dark:stroke-zinc-200" stroke-width="3" />
      <circle cx="50" cy="50" r="3" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],

  // VZ09: Polygon + dots sequence, answer = heptagon (7 sisi) + 5 titik
  VZ09: [
    // Option A — heptagon + 5 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,18 72,28 80,52 68,74 32,74 20,52 28,28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="38" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="42" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B — heksagon + 5 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,20 74,35 74,65 50,80 26,65 26,35" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="38" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="42" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C — heptagon + 4 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,18 72,28 80,52 68,74 32,74 20,52 28,28" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="40" cy="46" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="60" cy="46" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="40" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="60" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option D — oktagon + 5 titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,18 70,25 78,45 78,60 65,76 35,76 22,60 22,45 30,25" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="38" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="50" cy="42" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="62" cy="48" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="42" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
      <circle cx="58" cy="60" r="2.5" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],

  // VZ11: Analogy transformation — answer = lingkaran quadrant diagonal shaded
  VZ11: [
    // Option A — lingkaran 4 kuadran, kiri-atas & kanan-bawah diarsir (diagonal sama)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="24" x2="50" y2="76" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="24" y1="50" x2="76" y2="50" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <path d="M50,24 A26,26 0 0,0 24,50 L50,50 Z" class="fill-zinc-700 dark:fill-zinc-400" />
      <path d="M50,76 A26,26 0 0,0 76,50 L50,50 Z" class="fill-zinc-700 dark:fill-zinc-400" />
    </svg>`,
    // Option B — lingkaran seluruhnya diarsir
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="fill-zinc-700 dark:fill-zinc-400 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option C — lingkaran hanya kuadran atas diarsir
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="24" y1="50" x2="76" y2="50" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <path d="M24,50 A26,26 0 0,1 76,50 Z" class="fill-zinc-700 dark:fill-zinc-400" />
    </svg>`,
    // Option D — lingkaran diagonal berlawanan (kiri-bawah & kanan-atas)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <circle cx="50" cy="50" r="26" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="24" x2="50" y2="76" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="24" y1="50" x2="76" y2="50" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <path d="M50,24 A26,26 0 0,1 76,50 L50,50 Z" class="fill-zinc-700 dark:fill-zinc-400" />
      <path d="M50,76 A26,26 0 0,1 24,50 L50,50 Z" class="fill-zinc-700 dark:fill-zinc-400" />
    </svg>`
  ],

  // VZ12: Shape transformation — answer = segitiga sudut dipotong + lingkaran tengah
  VZ12: [
    // Option A — segitiga sudut dipotong + lingkaran
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,22 38,38 22,72 30,78 70,78 78,72 62,38" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="50" cy="60" r="6" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option B — segitiga utuh + lingkaran
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,22 78,78 22,78" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="50" cy="62" r="6" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`,
    // Option C — segitiga sudut dipotong tanpa lingkaran
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,22 38,38 22,72 30,78 70,78 78,72 62,38" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option D — segitiga sudut dipotong + persegi
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,22 38,38 22,72 30,78 70,78 78,72 62,38" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <rect x="44" y="54" width="12" height="12" class="fill-zinc-800 dark:fill-zinc-200" />
    </svg>`
  ],

  // VZ15: Pentagon/Hexagon rotation + color, answer = hexagon rotated 60° abu-abu
  VZ15: [
    // Option A — heksagon diputar 60° CW, abu-abu
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <g transform="rotate(60,50,50)">
        <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" class="fill-zinc-400 dark:fill-zinc-600 stroke-zinc-700 dark:stroke-zinc-400" />
        <line x1="50" y1="20" x2="50" y2="80" class="stroke-zinc-700 dark:stroke-zinc-300" />
      </g>
    </svg>`,
    // Option B — heksagon diputar 72°, abu-abu
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <g transform="rotate(72,50,50)">
        <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" class="fill-zinc-400 dark:fill-zinc-600 stroke-zinc-700 dark:stroke-zinc-400" />
        <line x1="50" y1="20" x2="50" y2="80" class="stroke-zinc-700 dark:stroke-zinc-300" />
      </g>
    </svg>`,
    // Option C — heksagon tanpa rotasi, abu-abu
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" class="fill-zinc-400 dark:fill-zinc-600 stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="50" y1="20" x2="50" y2="80" class="stroke-zinc-700 dark:stroke-zinc-300" />
    </svg>`,
    // Option D — heksagon diputar 60°, tetap putih
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" />
      <g transform="rotate(60,50,50)">
        <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" class="stroke-zinc-700 dark:stroke-zinc-400" />
        <line x1="50" y1="20" x2="50" y2="80" class="stroke-zinc-700 dark:stroke-zinc-300" />
      </g>
    </svg>`
  ],

  // VZ02: 3D Isometric Cube options
  VZ02: [
    // Option A (Top = Segitiga, Front/Left = Bintang, Right = Lingkaran)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="60,20 95,38 60,56 25,38" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="60,27 70,47 50,47" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
      <polygon points="25,38 60,56 60,96 25,78" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <g transform="translate(42.5, 67) scale(0.6)">
        <polygon points="0,-12 3,-3 12,-3 5,2 8,11 0,6 -8,11 -5,2 -12,-3 -3,-3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      </g>
      <polygon points="60,56 95,38 95,78 60,96" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="77.5" cy="67" r="7" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
    </svg>`,
    // Option B (Top = Bintang, Front/Left = Segitiga, Right = Lingkaran)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="60,20 95,38 60,56 25,38" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <g transform="translate(60, 38) scale(0.6)">
        <polygon points="0,-12 3,-3 12,-3 5,2 8,11 0,6 -8,11 -5,2 -12,-3 -3,-3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      </g>
      <polygon points="25,38 60,56 60,96 25,78" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="42.5,57 52.5,77 32.5,77" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
      <polygon points="60,56 95,38 95,78 60,96" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="77.5" cy="67" r="7" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
    </svg>`,
    // Option C (Top = Lingkaran, Front/Left = Segitiga, Right = Bintang)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="60,20 95,38 60,56 25,38" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="60" cy="38" r="7" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
      <polygon points="25,38 60,56 60,96 25,78" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="42.5,57 52.5,77 32.5,77" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
      <polygon points="60,56 95,38 95,78 60,96" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <g transform="translate(77.5, 67) scale(0.6)">
        <polygon points="0,-12 3,-3 12,-3 5,2 8,11 0,6 -8,11 -5,2 -12,-3 -3,-3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      </g>
    </svg>`,
    // Option D (Top = Lingkaran, Front/Left = Bintang, Right = Segitiga)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="60,20 95,38 60,56 25,38" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <circle cx="60" cy="38" r="7" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
      <polygon points="25,38 60,56 60,96 25,78" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <g transform="translate(42.5, 67) scale(0.6)">
        <polygon points="0,-12 3,-3 12,-3 5,2 8,11 0,6 -8,11 -5,2 -12,-3 -3,-3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      </g>
      <polygon points="60,56 95,38 95,78 60,96" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="77.5,57 87.5,77 67.5,77" class="stroke-zinc-800 dark:stroke-zinc-200 fill-none" />
    </svg>`
  ],

  // VZ13: Balok berbentuk L 3D options
  VZ13: [
    // Option A (L rotated 90°)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="50,35 80,20 50,5 20,20" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="20,20 50,35 50,65 20,50" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="50,35 80,20 80,50 50,65" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="20,50 50,65 50,95 20,80" class="fill-zinc-150 dark:fill-zinc-900/70 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="20,80 50,95 80,80 50,65" class="fill-zinc-100 dark:fill-zinc-900/30 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="50,65 80,80 80,50 50,65" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option B (Mirrored L)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="55,65 25,50 25,80 55,95" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="85,50 55,65 55,95 85,80" class="fill-zinc-150 dark:fill-zinc-900/60 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="55,65 25,50 55,35 85,50" class="fill-zinc-100 dark:fill-zinc-900/30 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="55,35 25,20 55,5 85,20" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="85,20 55,35 55,65 85,50" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="55,35 25,20 25,50 55,65" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option C (Proporsi berbeda / longer upright part)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="65,75 95,60 95,90 65,105" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="35,60 65,75 65,105 35,90" class="fill-zinc-150 dark:fill-zinc-900/60 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,75 95,60 65,45 35,60" class="fill-zinc-100 dark:fill-zinc-900/30 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,25 95,10 65,-5 35,10" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="35,10 65,25 65,75 35,60" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,25 95,10 95,60 65,75" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option D (Identical to original)
    `<svg viewBox="0 0 120 120" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="110" height="110" rx="6" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1.5" />
      <polygon points="65,65 95,50 95,80 65,95" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="35,50 65,65 65,95 35,80" class="fill-zinc-150 dark:fill-zinc-900/60 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,65 95,50 65,35 35,50" class="fill-zinc-100 dark:fill-zinc-900/30 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,35 95,20 65,5 35,20" class="fill-zinc-50 dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="35,20 65,35 65,65 35,50" class="fill-zinc-100 dark:fill-zinc-900/50 stroke-zinc-700 dark:stroke-zinc-400" />
      <polygon points="65,35 95,20 95,50 65,65" class="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`
  ],

  // VZ03: Cube net - cross options
  VZ03: [
    // Option A: Lingkaran
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <circle cx="50" cy="50" r="18" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option B: Hati
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <path d="M 50,55 C 42,42, 18,48, 18,65 C 18,82, 50,96, 50,96 C 50,96, 82,82, 82,65 C 82,48, 58,42, 50,55 Z" transform="scale(0.8) translate(12, -10)" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </svg>`,
    // Option C: Bulan sabit
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <path d="M 50,25 A 25,25 0 1,0 75,50 A 20,20 0 1,1 50,25 Z" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </svg>`,
    // Option D: Persegi
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <rect x="30" y="30" width="40" height="40" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`
  ],

  // VZ04: Cube net - T options
  VZ04: [
    // Option A: Kotak A
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <text x="50" y="62" text-anchor="middle" font-family="sans-serif" font-size="36" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">A</text>
    </svg>`,
    // Option B: Kotak E
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <text x="50" y="62" text-anchor="middle" font-family="sans-serif" font-size="36" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">E</text>
    </svg>`,
    // Option C: Kotak F
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <text x="50" y="62" text-anchor="middle" font-family="sans-serif" font-size="36" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">F</text>
    </svg>`,
    // Option D: Kotak D
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <text x="50" y="62" text-anchor="middle" font-family="sans-serif" font-size="36" font-weight="bold" class="fill-zinc-800 dark:fill-zinc-200 stroke-none">D</text>
    </svg>`
  ],

  // VZ10: Star sequence options
  VZ10: [
    // Option A: Bintang hitam solid, diputar total 288°, dengan empat titik putih di tengah
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <g transform="translate(50, 50) rotate(288)">
        <polygon points="0,-32 9,-9 31,-7 14,8 19,29 0,17 -19,29 -14,8 -31,-7 -9,-9" class="fill-zinc-800 dark:fill-zinc-100 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
        <circle cx="-6" cy="-6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="6" cy="-6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="-6" cy="6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="6" cy="6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
      </g>
    </svg>`,
    // Option B: Bintang abu-abu tua, diputar total 288°, dengan tiga titik hitam
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <g transform="translate(50, 50) rotate(288)">
        <polygon points="0,-32 9,-9 31,-7 14,8 19,29 0,17 -19,29 -14,8 -31,-7 -9,-9" class="fill-zinc-600 dark:fill-zinc-400 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
        <circle cx="-6" cy="6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
        <circle cx="0" cy="-6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
        <circle cx="6" cy="6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
      </g>
    </svg>`,
    // Option C: Bintang hitam solid, diputar total 216°, dengan empat titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <g transform="translate(50, 50) rotate(216)">
        <polygon points="0,-32 9,-9 31,-7 14,8 19,29 0,17 -19,29 -14,8 -31,-7 -9,-9" class="fill-zinc-800 dark:fill-zinc-100 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
        <circle cx="-6" cy="-6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="6" cy="-6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="-6" cy="6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
        <circle cx="6" cy="6" r="2.5" class="fill-zinc-100 dark:fill-zinc-900 stroke-none" />
      </g>
    </svg>`,
    // Option D: Bintang putih, diputar total 288°, dengan empat titik hitam
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <g transform="translate(50, 50) rotate(288)">
        <polygon points="0,-32 9,-9 31,-7 14,8 19,29 0,17 -19,29 -14,8 -31,-7 -9,-9" class="fill-white dark:fill-zinc-900 stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
        <circle cx="-6" cy="-6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
        <circle cx="6" cy="-6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
        <circle cx="-6" cy="6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
        <circle cx="6" cy="6" r="2.5" class="fill-zinc-900 dark:fill-zinc-100 stroke-none" />
      </g>
    </svg>`
  ],

  // VZ14: Staircase cube net options
  VZ14: [
    // Option A: Pola titik-titik
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <circle cx="30" cy="30" r="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="70" cy="30" r="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="30" cy="70" r="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
      <circle cx="70" cy="70" r="3" class="fill-zinc-800 dark:fill-zinc-200 stroke-none" />
    </svg>`,
    // Option B: Pola kotak-kotak (checkerboard)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <rect x="5" y="5" width="45" height="45" class="fill-zinc-700 dark:fill-zinc-500 stroke-none" />
      <rect x="50" y="50" width="45" height="45" class="fill-zinc-700 dark:fill-zinc-500 stroke-none" />
    </svg>`,
    // Option C: Pola garis silang (cross-hatch)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <line x1="5" y1="5" x2="95" y2="95" class="stroke-zinc-700 dark:stroke-zinc-400" />
      <line x1="5" y1="95" x2="95" y2="5" stroke-dasharray="3" class="stroke-zinc-700 dark:stroke-zinc-400" />
    </svg>`,
    // Option D: Pola bergelombang (wavy)
    `<svg viewBox="0 0 100 100" class="w-12 h-12 fill-none" stroke-width="2">
      <rect width="90" height="90" rx="4" x="5" y="5" class="stroke-zinc-200 dark:stroke-zinc-800" stroke-width="1" />
      <path d="M 10,25 Q 30,10 50,25 T 90,25" class="stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
      <path d="M 10,50 Q 30,35 50,50 T 90,50" class="stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
      <path d="M 10,75 Q 30,60 50,75 T 90,75" class="stroke-zinc-700 dark:stroke-zinc-400" stroke-width="1.5" />
    </svg>`
  ]
};


