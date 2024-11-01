## Почему я выбрал Ant Design

1. **Большой набор компонентов**: Ant Design предлагает множество готовых компонентов.
  
2. **Кастомизация**: Ant Design предоставляет множество опций для кастомизации.

3. **Поддержка и документация**: Ant Design хорошо документирован и поддерживается сообществом.

4. **Совместимость**: Фреймворк хорошо интегрируется с TypeScript и React, а также не требует сложных настроек для работы с другими библиотеками.


## Тестовое задание: 

Необходимо получить с сервера и отобразить список элементов. Список должен поддерживать бесконечный плавный скролл, постепенную подгрузку элементов, локальное удаление и редактирование.

**Требования**

• Обязательно использование: TS, React/Mobx, CSS-модули, Webpack/Vite,
Jest, React Testing Library;

• Для получения списка надо использовать публичный АР| какого-либо сервиса: github api, npmjs api, imdb api и др. Важно, чтобы список данных был очень большим с возможностью пагинации;
Например: $ curl "https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=2"

• Добавить аутентификацию, если требует арі;

• Работать с апи можно через билиотеку, либо делать запросы напрямую;

• Механику отображения и работу со списком необходимо написать самостоятельно, нельзя использовать готовую библиотеку;

• Нужна возможность редактировать и удалять элементы из списка локально (работа со стором);

• Требований к дизайну нет, для отображения списка необходимо использовать любой Ul Kit/Framework, например Ant Design. Обосновать свой выбор.

• Функциональность покрыть unit-тестами на Jest + React Testing Library.

• Готовое решение разместить на github.com. В ответе написать ссылку на GitHub репозиторий с проектом.

**Желательно**

• Поддержать сортировку списка по разным полям если поддерживает арі;

• Добавить индикацию подгрузки данных.
