# cat-energy

Cat Energy project ftom HTML Academy

[Демо проекта](https://maddlogg.github.io/cat-energy/)

## Технологии

- [HTML](https://html.spec.whatwg.org/multipage/)
- [CSS (Saas)](https://sass-lang.com/)
- [JavaScript](https://tc39.es/ecma262/)
- [Gulp](https://gulpjs.com/)
- [Bem methodology](https://ru.bem.info/methodology/)

### Требования

Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v.20.12.0 или выше.

### Установка зависимостей

Для установки зависимостей, выполните команду:

```sh
npm i
```

### Запуск Development сервера

Чтобы запустить сервер для разработки, выполните команду:

```sh
npm start
```

### Создание билда

Чтобы выполнить production сборку, выполните команду:

```sh
npm run build
```

### Создание deploy версии

Чтобы выполнить deploy сборку, и выложить проект на хостинг GH Pages выполните команду:

```sh
npm run deploy
```

### Структура проекта

```sh
.
├── build/                 # каталог сборки проекта (cоздаётся автоматически)
├── source/                # каталог для размещения исходных файлов проекта
│    ├── fonts/            # каталог шрифтов
│    ├── img/              # каталог растровых и векторных изображений
│    ├── js/               # каталог JS файлов
│    ├── css/              # каталог файлов стилей
│    ├── sass/             # каталог файлов препроцессорных стилей
│         ├── blocks/      # каталог препроцессорных стилей для блоков сайта
│         ├── mixins/      # каталог препроцессорных миксинов
│         ├── variables/   # каталог препроцессорных переменных
│         └── styles.scss  # файл препроцессорных стилей
│    ├── catalog.html      # файл разметки страницы каталога
│    ├── form.html         # файл разметки страницы с формой
│    └── index.html        # файл разметки главной страницы
├── .gitignore             # файл исключений Git
├── gulpfile.js/           # каталог задач для Gulp
├── package-lock.json      # lock-файл npm
├── package.json           # файл npm зависимостей и настроек проекта
├── preset.babelrc.json    # файл конфигурации Babel
└── README.md              # документация проекта
```

### Зачем вы разработали этот проект?

Чтобы был.

## Источники

HTML Academy
