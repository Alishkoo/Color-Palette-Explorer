# Установка и запуск проекта

Проект разработан с использованием **Angular** и **Django REST Framework**. Для его установки и запуска выполните следующие шаги:

## Установка

1. **Склонируйте репозиторий с GitHub**:

```bash
git clone <https://github.com/Alishkoo/Color-Palette-Explorer>
```

2. **Установите необходимые библиотеки для Angular**:

```bash
npm install gsap
npm install gsap-scrollsmoother
npm install gsap-trial
```

3. **Установите необходимые библиотеки для Django**:

```bash
pip install django
pip install djangorestframework 
pip install djangorestframework-simplejwt
python -m pip install django-cors-headers
```

## Запуск проекта

1. **Запустите сервер разработки Angular**:

```bash
ng serve --open
```

2. **Запустите сервер разработки Django**:

```bash
python manage.py runserver
```

После этого вы можете открыть веб-приложение в браузере по адресу `http://localhost:4200/`.

## JWT авторизация

В проекте реализована **JWT авторизация**. При успешной авторизации сервер возвращает JWT токен, который затем используется для доступа к защищенным ресурсам. Токен сохраняется в `localStorage` браузера.

Пожалуйста, обратите внимание, что для работы JWT авторизации необходимо правильно настроить Django и Angular для работы с JWT токенами.