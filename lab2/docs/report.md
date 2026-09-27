# Лабораторная работа №2 — Node-RED

**Студент:** Gantsevich  
**Группа:** СДП-ИИ-241

## Краткое описание

В работе Node-RED используется как low-code инструмент для создания и развёртывания потоков. Реализованы Inject, Debug, Function, Switch, Change, Template, HTTP Request, MQTT, HTTP endpoints, Dashboard, Telegram, File, Context и WebSocket.

Node-RED запущен в Docker Desktop с пробросом порта `1880` и подключённым volume для каталога `/data`.

## Установка и версии

Способ установки: **Docker Desktop**.

- Node-RED version: **5.0.7**
- Node.js version: **24.20.0**

![Versions](../screenshots/00-versions.png)

## Flow 01 — Inject → Debug

Inject каждые 5 секунд отправляет фамилию и уникальный `msg.topic`. Debug выводит полный объект сообщения.

![01](../screenshots/01-inject-debug.png)

## Flow 02 — Function

Function node использует `let/const`, `if/else`, цикл `for`, массив и объект, затем возвращает результат через `msg.payload`.

![02](../screenshots/02-function.png)

## Flow 03 — Switch

Случайное значение направляется в один из двух выходов в зависимости от условия `score >= 50`.

![03](../screenshots/03-switch.png)

## Flow 04 — Change / Set

Change node изменяет `msg.topic`, добавляет текущее время в `msg.timestamp` и задаёт новый `msg.payload`.

![04](../screenshots/04-change.png)

## Flow 05 — Template

Mustache-шаблон преобразует объект студента в JSON.

![05](../screenshots/05-template.png)

## Flow 06 — HTTP Request

Выполняется GET-запрос к публичному API без регистрации. Ответ возвращается как распарсенный JSON-объект.

![06](../screenshots/06-http-request.png)

## Flow 07 — MQTT

Node-RED публикует случайное значение каждые 5 секунд через публичный MQTT-брокер и принимает сообщение обратно по тому же топику.

Топик: `student/Gantsevich/lab2/random`.

![07](../screenshots/07-mqtt.png)

## Flow 08 — GET endpoints

Реализованы:

- `GET /api/text`
- `GET /api/info`
- `GET /api/items/:id`

Для третьего endpoint реализованы ответы `200`, `400` и `404`. Подробности и примеры запросов находятся в `api.md`.

![08 flow](../screenshots/08-endpoints-flow.png)

![08 text](../screenshots/08-text.png)

![08 info](../screenshots/08-info.png)

![08 success](../screenshots/08-items-success.png)

![08 errors](../screenshots/08-items-errors.png)

## Flow 09 — Dashboard

Inject и Function имитируют датчик температуры. Текущее значение отображается через Gauge, а история — через Chart.

![09 flow](../screenshots/09-dashboard-flow.png)

![09 dashboard](../screenshots/09-dashboard.png)

## Flow 10 — Telegram bot

Бот `tvl_lab2_Gantsevich_bot` поддерживает команды `/start`, `/status` и echo-ответ на обычное сообщение.

![10 flow](../screenshots/10-telegram-flow.png)

![10 chat](../screenshots/10-telegram-chat.png)

## Flow 11 — Files

Одна ветка записывает JSON-строки в `/data/lab2-gantsevich.txt`, другая читает этот файл и выводит содержимое в Debug.

Поскольку `/data` подключён через Docker volume, данные сохраняются после перезапуска контейнера.

![11](../screenshots/11-files.png)

![11 after restart](../screenshots/11-files-after-restart.png)

## Flow 12 — Context

Используется `flow context`: счётчик увеличивается при каждом сообщении и сохраняет значение между сообщениями.

![12](../screenshots/12-context.png)

## Ачивка 14 — WebSocket → Dashboard (BTC)

Node-RED подключается к публичному WebSocket Binance и получает `BTCUSDT markPrice` в реальном времени. Function node извлекает числовую цену из JSON-сообщения, после чего Dashboard отображает текущее значение и график изменения цены.

WebSocket:

`wss://fstream.binance.com/market/ws/btcusdt@markPrice@1s`

![14 flow](../screenshots/14-btc-flow.png)

![14 dashboard](../screenshots/14-btc-dashboard.png)

## Примеры AI-промптов

1. «Сгенерируй JavaScript для Function node Node-RED с let/const, if/else, for, массивом и объектом».
2. «Составь Mustache-шаблон, который из объекта студента формирует JSON».
3. «Помоги обработать JSON из BTC WebSocket и передать цену в Dashboard Chart».

## Освоенные ноды

`inject`, `debug`, `function`, `switch`, `change`, `template`, `http request`, `mqtt in`, `mqtt out`, `http in`, `http response`, `ui_gauge`, `ui_chart`, `ui_text`, `telegram command`, `telegram receiver`, `telegram sender`, `file`, `file in`, `websocket in`.

## Выводы

В ходе работы я научился собирать и развёртывать потоки в Node-RED, работать с API, MQTT, Telegram, файлами, контекстом и Dashboard. Также я подключил WebSocket с курсом BTC и вывел данные на график в реальном времени. Текстовые потоки удобно сохранять в Git, потому что изменения можно отслеживать через историю коммитов.
