# Лабораторная работа №4 — n8n

## Запуск

```bash
cd lab4
docker compose up -d
```

n8n будет доступен по адресу <http://localhost:5678>, Redis — на порту `6379`.

При первом запуске нужно создать owner-аккаунт, после чего:

1. Создать credentials типа Redis с именем `Redis local`.
2. Указать Host `redis`, Port `6379`, Database `0`, SSL — off.
3. Импортировать JSON-файлы из `flows/` через `Import from File`.

Альтернативный импорт через CLI:

```bash
docker exec lab4-n8n n8n import:workflow --separate --input=/workflows
```

## Остановка

```bash
docker compose down
```

Локальные данные n8n и Redis хранятся в `n8n-data/` и `redis-data/`; они не попадают в Git.

