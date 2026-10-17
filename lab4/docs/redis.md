# Redis в n8n

## Конфигурация

Redis 7 запускается вместе с n8n через `docker compose`. Оба контейнера находятся в одной Docker-сети, поэтому в credentials n8n используется host `redis`, а не `localhost`.

| Параметр | Значение |
|---|---|
| Name | `Redis local` |
| Host | `redis` |
| Port | `6379` |
| Database | `0` |
| SSL | disabled |

Во время запуска n8n напрямую на host-машине вместо Compose нужно указать `host.docker.internal`.

## Создание и чтение ключа

Workflow `flow-09-redis.json` выполняет:

1. Manual Trigger.
2. Redis Set: ключ `gantsevich`, значение `Lab 4 Redis value by Gantsevich`.
3. Redis Get: читает ключ в поле `redisValue`.

Проверенный результат: `redisValue = "Lab 4 Redis value by Gantsevich"`.

## Удаление и проверка отсутствия

Workflow `flow-10-redis.json` выполняет:

1. Manual Trigger.
2. Redis Delete: удаляет `gantsevich`.
3. Redis Keys: ищет точное имя `gantsevich`.
4. Code: преобразует результат в явное поле `exists`.

В n8n 2.43.7 у Redis node нет отдельной операции Exists, поэтому эквивалентная проверка реализована через Keys. Проверенный результат: `exists = false`, `verification = "Key successfully deleted"`.

## Персистентность

Redis запущен с AOF (`--appendonly yes`), а `/data` привязан к `redis-data/`. Поэтому ключи сохраняются после перезапуска контейнера.

