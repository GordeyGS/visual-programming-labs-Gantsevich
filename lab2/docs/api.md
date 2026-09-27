# API — Лабораторная работа №2

**Студент:** Gantsevich  
**Группа:** СДП-ИИ-241

Базовый адрес: `http://localhost:1880`

## GET /api/text

Возвращает простой текст.

```bash
curl http://localhost:1880/api/text
```

Ответ:

```text
Hello from Gantsevich, СДП-ИИ-241
```

## GET /api/info

Возвращает JSON с двумя полями.

```bash
curl http://localhost:1880/api/info
```

Ответ:

```json
{
  "student": "Gantsevich",
  "group": "СДП-ИИ-241"
}
```

## GET /api/items/:id

Параметр `id` передаётся в URL.

### Успешный запрос

```bash
curl -i http://localhost:1880/api/items/1
```

Статус: `200 OK`

Ответ:

```json
{
  "id": 1,
  "name": "Keyboard"
}
```

### Ошибка 400

```bash
curl -i http://localhost:1880/api/items/abc
```

Статус: `400 Bad Request`

Ответ:

```json
{
  "error": "invalid id",
  "student": "Gantsevich"
}
```

### Ошибка 404

```bash
curl -i http://localhost:1880/api/items/999
```

Статус: `404 Not Found`

Ответ:

```json
{
  "error": "item not found",
  "id": 999
}
```
