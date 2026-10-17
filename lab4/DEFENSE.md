# Памятка к защите лабораторной работы №4

## Как запустить

```bash
cd lab4
docker compose up -d
```

Открыть <http://localhost:5678>. Если Redis-ноды просят credentials, выбрать `Redis local` (`redis:6379`).

## Что объяснить

- **Manual Trigger** запускает workflow вручную для теста.
- **Edit Fields (Set)** создаёт или заменяет поля JSON.
- **Code** выполняет JavaScript и возвращает массив items формата `{ json: {...} }`.
- **IF** отправляет item в true- или false-ветку.
- **HTTP Request** делает GET к публичному API и разбирает JSON-ответ.
- **Schedule Trigger** запускает поток каждые 5 минут, если workflow активен.
- **Redis** работает с key-value хранилищем. Set записывает, Get читает, Delete удаляет, Keys ищет имена.
- **Webhook** создаёт HTTP endpoint, **Respond to Webhook** формирует JSON-ответ и status code.

## Почему host Redis равен `redis`

В Docker Compose имя сервиса работает как DNS-имя внутри общей сети. `localhost` внутри n8n-контейнера указывает на сам n8n-контейнер, а не на Redis.

## Как хранятся заметки

Каждая заметка хранится под ключом `notes:gantsevich:<id>`. Значение — JSON-строка с `id`, `title`, `text`, `author` и временем. Маска `notes:gantsevich:*` возвращает все заметки этого студента.

## Короткая демонстрация

1. Запустить Flow 01 и показать `payload` и `topic`.
2. Запустить Flow 03 и показать true-ветку.
3. Запустить Flow 05 и показать ответ API.
4. Запустить Flow 09, затем Flow 10, объяснить `exists = false`.
5. Активировать Notes API и показать create/list/update/read/delete.
6. Показать `git log --oneline -- lab4` и отчёт.

