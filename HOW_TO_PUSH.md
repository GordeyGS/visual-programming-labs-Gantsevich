# Как отправить готовую лабораторную на GitHub

1. На GitHub создайте **пустой публичный** репозиторий `visual-programming-labs-Gantsevich`.
2. В Terminal откройте эту распакованную папку.
3. Выполните (подставьте свой GitHub username):

```bash
git remote add origin git@github.com:YOUR_USERNAME/visual-programming-labs-Gantsevich.git
git push -u origin main
```

Если используете HTTPS:

```bash
git remote add origin https://github.com/YOUR_USERNAME/visual-programming-labs-Gantsevich.git
git push -u origin main
```

## Важно про email
В архиве для локальной истории коммитов временно указан `student@mf.grsu.by`, потому что ваш точный университетский адрес не был указан. Перед следующими коммитами задайте настоящий адрес:

```bash
git config --global user.name "Ганцевич Гордей"
git config --global user.email "ВАШ_АДРЕС@mf.grsu.by"
```
