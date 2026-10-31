# Лабораторная работа №5 — чат-боты

Выбран трек **C — TypeBot**. Платформа запускается локально через Docker Compose.

## Сервисы

- Typebot Builder: <http://localhost:8080>
- Typebot Viewer: <http://127.0.0.1:8081>
- Mailpit: <http://localhost:8025>

## Запуск

```bash
cd lab5
docker compose up -d
```

Для входа укажите `student@mf.grsu.by`. Одноразовая ссылка придёт в локальный Mailpit.

После входа импортируйте `exports/flow-01-gantsevich-student-helper.json`, проверьте граф и нажмите Publish. Подробный сценарий проверки находится в `docs/testing.md`, памятка для защиты — в `DEFENSE.md`.

## Остановка

```bash
docker compose down
```

Данные PostgreSQL и Redis сохраняются в каталоге `.typebot/` и не добавляются в Git.
