Приложение для создания шаблонов сообщений.

Application for creating message templates.


Данное приложение предназначенно для создания привлекательных и глубоко осмысленных сообщений. Это приложение полезно для тех людей, которые стремятся заинтересовать свою целевую аудиторию определенным проектом или событием.

This application is designed to create attractive and deeply meaningful messages. This application is useful for those people who seek to interest their target audience in a specific project or event.


При открытии приложения перед пользователем откроется главное меню, с одной кнопкой, которая ведёт в редактор шаблонов сообщений.

При открытии приложения перед пользователем откроется главное меню с одной кнопкой, которая ведет к редактору шаблонов сообщений.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/5ba88255-61e6-4040-8418-712d38fd8f58)


Редактор шаблонов сообщений выглядит следующим образом.

The message template editor looks like this.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/e5f1b53d-9922-46ca-b7fa-5407df8b16fc)


Нажав на кнопку "Add IF | THEN | ELSE" добавится конструкция, которя установится по последнему месту курсора ввода.

By clicking on the "Add IF | THEN | ELSE" button, a construction will be added, which will be installed at the last place of the input cursor.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/9f776f07-dfec-494e-83bd-7101b1ff6db2)

Если в строке есть текст, то текст будет разбит по курсору ввода. Если нажать на кнопку удалить, то конструкция удалится и текст соединится.

If there is text in the line, then the text will be broken at the input cursor. If click on the delete button, the structure will be deleted and the text will be connected.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/9c4eef51-c703-4418-8138-dc657452efda)
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/4ecc1840-5213-4ca8-8999-41d8ad8bfd0a)
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/464be750-301f-406b-9b50-c3ee689b2580)

В верхнем левом углу есть кнопки - это переменные, по нажатию на которые они будут вставляться по последнему месту курсора ввода. 
Вместо таких переменных можно будет подставлять слова и даже целые предложения!

In the upper left corner there are buttons - these are variables, by clicking on which they will be inserted at the last place of the input cursor.
Вместо таких переменных можно будет подставлять слова и даже целые предложения!
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/3f9a2ecc-5208-456f-9f4a-3b6051692fd8)

Кнопка "Save" - сохраняет шаблон сообщения в localStorage. При следующем заходе в приложение данный шаблон будет взят из localStorage.

"Save" button - saves the message template to localStorage. The next time you open the application, this template will be taken from localStorage.

Нажав на кнопку "Preview" - поверх редактора (модальное окно) откроется предпросмотр сообщения.

By clicking on the "Preview" button - a preview of the message will open on top of the editor (modal window).
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/50e43ec7-9932-4733-a7a6-6b5a1221d139)

Сверху поле, в котором отображается полученный текст, а снизу поля ввода для переменных. 
Введя значение для переменной, сообщение в верхнем поле тут же изменится, если переменные были установлены в тексте в редакторе шаблонов сообщений

Above is the field in which the received text is displayed, and below are the input fields for variables.
By entering a value for a variable, the message in the top field will immediately change if the variables have been set in the text in the message template editor.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/0ac75504-5912-481d-b5d5-f0ecad1399c2)

Конструкция IF-THEN-ELSE нужна для изменения содержимого сообщения в зависимости от отсутствия/наличия текста в поле IF.
Если в IF есть значение, то в сообщение добавится текст из поля THEN, если в IF нет значения, то в сообщение добавится текст из
поля ELSE.

The IF-THEN-ELSE construct is needed to change the content of the message depending on the absence/presence of text in the IF field.
If there is a value in IF, then the text from the THEN field will be added to the message,
if there is no value in IF, then the text from the ELSE field will be added to the message.







