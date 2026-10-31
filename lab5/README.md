# Лабораторная работа №5 — чат-боты

Выбран трек **C — TypeBot**. Платформа запускается локально через Docker Compose.

## Сервисы

- Typebot Builder: <http://localhost:8080>
- Typebot Viewer: <http://127.0.0.1:8081>
- Опубликованный бот: <http://127.0.0.1:8081/lab5-gantsevich-student-helper>
- Mailpit: <http://localhost:8025>

## Запуск

```bash
cd lab5
docker compose up -d
```

Для входа укажите `student@mf.grsu.by`. Одноразовая ссылка придёт в локальный Mailpit.

После входа бот уже доступен в рабочей области. Для восстановления проекта можно импортировать `exports/flow-01-gantsevich-student-helper.json`, проверить граф и нажать Publish. Подробный сценарий проверки находится в `docs/testing.md`, памятка для защиты — в `DEFENSE.md`.

## Подтверждение работы

- `screenshots/01-workspace.png` — бот в рабочей области Typebot;
- `screenshots/02-flow-overview.png` — схема в Builder;
- `screenshots/03-http-request-success.png` — опубликованный диалог с успешным HTTP Request.

## Остановка

```bash
docker compose down
```

Данные PostgreSQL и Redis сохраняются в каталоге `.typebot/` и не добавляются в Git.
