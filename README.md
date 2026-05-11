# Swiss Games — Space Adventure

Адаптивный лендинг по Figma-макету. Тестовое задание.

## Стек

- **React 19** + Create React App (webpack 5)
- **Sass** (`@use`, CSS custom properties)
- **prop-types** для контрактов компонентов

## Запуск

```bash
npm install
npm start          # dev-сервер http://localhost:3000
npm run build      # production-сборка в build/
npm run format     # prettier
```

## Структура проекта

```text
src/
├── App.jsx                     — композиция верхнего уровня
├── index.js                    — точка входа
├── components/                 — компоненты с co-located стилями
│   ├── Button.{jsx,scss}       — переиспользуемая кнопка (primary | outline | link)
│   ├── Header.{jsx,scss}
│   ├── Hero.{jsx,scss}
│   ├── OfferCard.{jsx,scss}
│   ├── OffersSection.{jsx,scss}
│   ├── EmbarkSection.{jsx,scss}
│   ├── Footer.{jsx,scss}
│   └── index.js                — barrel-экспорт
├── data/                       — контент отдельно от разметки
│   ├── content.js              — тексты, акценты, лейблы
│   └── offers.js               — массив карточек-офферов
├── hooks/
│   └── useMenuControls.js      — закрытие меню на Esc + клик снаружи
├── icons/index.jsx             — React-компоненты SVG-иконок
├── styles/
│   ├── _tokens.scss            — design tokens как CSS-переменные
│   ├── _mixins.scss            — mq(), button-base, container
│   └── global.scss             — base + container, импортируется один раз
└── img/                        — растровые ассеты (webp)
```

## Архитектура

### Дизайн-токены

Все размеры, цвета и radii заданы как **CSS custom properties** в [src/styles/_tokens.scss](src/styles/_tokens.scss). Это даёт два преимущества:

1. Один источник истины — поменять breakpoint-размер можно в одном месте.
2. Доступны во всех `.scss` без `@use`-бойлерплейта (`var(--color-accent)`).

SCSS-переменные используются только для брейкпоинтов (`$bp-tablet`, `$bp-mobile`), потому что media queries не понимают CSS custom properties.

### Брейкпоинты

| Breakpoint | Max width   | Использование |
| ---------- | ----------- | ------------- |
| Desktop    | — (default) | ≥ 1025px      |
| Tablet     | 1024px      | 601–1024      |
| Mobile     | 600px       | ≤ 600         |

Мобильный брейкпоинт расширен до 600px (а не 360px из макета), чтобы реальные мобильные устройства попадали в mobile-стили — иначе на устройстве 414px (iPhone) применялись бы планшетные.

### Кнопка

`<Button variant="primary | outline | link" size="lg | sm" as="button | a">` —
один компонент вместо дублирующихся CSS-блоков hero и card CTA. Стили — миксин
`button-base` в [_mixins.scss](src/styles/_mixins.scss).

### Тема карточки

`OfferCard` пробрасывает фоновое изображение как CSS-переменную, а не inline-стиль:

```jsx
<article data-theme={theme} style={{ '--card-bg': `url(${bgImage})` }}>
```

Преимущество: вся стилизация остаётся в SCSS и подключается к hover-эффектам и media queries без правки JSX.

### Контент отдельно от JSX

Цветные акценты в заголовке хранятся как данные:

```js
hero: {
  title: { before: 'Discover the vast expanses of ', accent: 'space' },
}
```

i18n-готовность без правки разметки.

## Accessibility

- Семантические landmarks: `<header>`, `<main>`, `<nav aria-label="Primary">`, `<footer>`
- Sections с `aria-labelledby` ссылаются на свои заголовки
- Декоративные изображения (Earth, иконки внутри ссылок) скрыты `aria-hidden` и `alt=""`
- Бургер-меню: `aria-expanded`, `aria-controls`, `aria-label` меняется по состоянию
- Меню закрывается на Esc и клик снаружи ([useMenuControls](src/hooks/useMenuControls.js))
- `:focus-visible` outline на интерактивных элементах

## Чего намеренно нет

- **TypeScript** — используется `prop-types` для контрактов; миграция вне scope тестового
- **Vite** — оставлена CRA-сборка, миграция вне scope
- **Тесты** — testing-library есть в зависимостях, юнит-тесты не писал (статичный лендинг)
