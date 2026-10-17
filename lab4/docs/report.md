# Лабораторная работа №4 — n8n

**Студент:** Гордей Ганцевич  
**Группа:** СДП-ИИ-241

## Краткое описание

В работе n8n используется как low-code платформа для сборки и запуска workflow. Реализованы ручной и плановый запуск, преобразование данных, JavaScript-логика, условное ветвление, HTTP-запрос и работа с Redis.

Дополнительно выполнена ачивка 5.2: REST API для CRUD-операций над заметками, где Redis используется как хранилище.

## Установка и запуск

Используется Docker Compose с двумя сервисами:

- n8n на образе `n8nio/n8n:latest` с портом `5678`;
- Redis на образе `redis:7-alpine` с портом `6379`.

Контейнер n8n имеет обязательные volume для `/home/node/.n8n` и `/data`. Каталог `flows/` дополнительно подключён в режиме read-only для CLI-импорта. Часовой пояс — `Europe/Minsk`.

Команды запуска:

```bash
cd lab4
docker compose up -d
```

Проверенные версии: n8n `2.43.7`, Redis `7`.

## Выполненные workflow

### Flow 01 — Manual Trigger → Set → Code

Edit Fields задаёт `payload = Gantsevich` и `topic = lab4/Gantsevich/basic`. Code выводит полученные данные и добавляет отладочное поле.

### Flow 02 — Code

Код использует `const`, `let`, `if/else`, цикл `for`, массив и объект. На выходе получается `payload` с суммой `116`, средним `29` и результатом `passed`.

### Flow 03 — IF

Code возвращает `payload = approved` при сумме не менее 100. IF сравнивает `payload` с `approved` и направляет данные в true/false NoOp.

### Flow 04 — Edit Fields

Edit Fields задаёт `topic`, `payload` и динамический `timestamp`. Code формирует полный message object с фамилией и группой.

### Flow 05 — HTTP Request

HTTP Request выполняет GET к `https://catfact.ninja/fact` без токена. Code превращает JSON-ответ в объект с `payload`, `length` и `requestedBy`.

### Flow 06 — Schedule Trigger

Schedule Trigger запускает workflow каждые 5 минут. Code возвращает ISO-время, фамилию и топик.

### Flow 09 и 10 — Redis

Первый workflow создаёт и читает ключ `gantsevich`. Второй удаляет ключ и проверяет его отсутствие. Процесс подробно описан в `redis.md`.

## Ачивка 5.2 — REST API заметок с Redis

Workflow `flow-11-notes-api-redis.json` реализует:

| Метод | Endpoint | Действие |
|---|---|---|
| POST | `/webhook/lab4/gantsevich/notes` | создать заметку |
| GET | `/webhook/lab4/gantsevich/notes` | получить список |
| GET | `/webhook/lab4/gantsevich/notes/:id` | получить одну заметку |
| PUT | `/webhook/lab4/gantsevich/notes/:id` | изменить заметку |
| DELETE | `/webhook/lab4/gantsevich/notes/:id` | удалить заметку |

Ключ Redis имеет формат `notes:gantsevich:<id>`, значение — JSON-строка. После импорта нужно выбрать credentials `Redis local` в Redis-нодах и активировать workflow.

Пример создания:

```bash
curl -X POST http://localhost:5678/webhook/lab4/gantsevich/notes \
  -H 'Content-Type: application/json' \
  -d '{"id":"demo","title":"Защита лабы","text":"Повторить Redis и Webhook"}'
```

## Примеры AI-промптов

1. «Сгенерируй Code node n8n с `let/const`, `if/else`, циклом, массивом и объектом; верни результат в `payload`».
2. «Помоги собрать в n8n workflow Set → Get и Delete → Exists для Redis с ключом `gantsevich`».
3. «Спроектируй REST API заметок на Webhook-нодах n8n с Redis в качестве хранилища».

## Освоенные ноды

`Manual Trigger`, `Edit Fields (Set)`, `Code`, `No Operation`, `IF`, `HTTP Request`, `Schedule Trigger`, `Redis`, `Webhook`, `Respond to Webhook`.

## Проверка

Все 9 JSON-файлов успешно импортированы в n8n 2.43.7. Через CLI n8n успешно выполнены Flow 01–05, Redis Set/Get и Redis Delete/проверка. HTTP Request получил корректный JSON от публичного API. Redis-тест вернул записанное значение, а после удаления — `exists = false`.

## Скриншоты для защиты

После создания личного owner-аккаунта n8n нужно сохранить в `screenshots/`:

1. `01-version.png` — версия n8n;
2. `02-flow-01-manual-set.png`;
3. `03-flow-02-code.png`;
4. `04-flow-03-if.png`;
5. `05-flow-04-set.png`;
6. `06-flow-05-http.png`;
7. `07-flow-06-schedule.png`;
8. `08-redis-set-get.png`;
9. `09-redis-delete-exists.png`;
10. `10-notes-api.png`.

## Выводы

В ходе работы я освоил принцип сборки workflow из триггеров и нод обработки, научился передавать JSON между нодами, выполнять HTTP-запросы и ветвить поток по условию. Redis показал, что внешнее key-value хранилище можно использовать как для простых операций Set/Get/Delete, так и в качестве хранилища REST API. Экспорт workflow в JSON делает визуальную логику версионируемой и воспроизводимой.

