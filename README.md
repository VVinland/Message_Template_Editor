Приложение для создания шаблонов сообщений.

Application for creating message templates.


Данное приложение предназначенно для создания привлекательных и глубоко осмысленных сообщений. Это приложение полезно для тех людей, которые стремятся заинтересовать свою целевую аудиторию определенным проектом или событием.

This application is designed to create attractive and deeply meaningful messages. This application is useful for those people who seek to interest their target audience in a specific project or event.


При открытии приложения перед пользователем откроется главное меню, с одной кнопкой, которая ведёт в редактор шаблонов сообщений.

При открытии приложения перед пользователем откроется главное меню с одной кнопкой, которая ведет к редактору шаблонов сообщений.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/398f6385-4cd7-452d-bd74-32aaa7bf48b1)

Редактор шаблонов сообщений выглядит следующим образом.

The message template editor looks like this.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/9f348c9a-12b9-418c-b2e3-641fed355799)

Нажав на кнопку "Add IF | THEN | ELSE" добавится конструкция, которя установится по последнему месту курсора ввода.

By clicking on the "Add IF | THEN | ELSE" button, a construction will be added, which will be installed at the last place of the input cursor.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/256babde-6cb5-4ea9-9526-419c5b7480a4)

Если в строке есть текст, то текст будет разбит по курсору ввода. Если нажать на кнопку удалить, то конструкция удалится и текст соединится.

If there is text in the line, then the text will be broken at the input cursor. If click on the delete button, the structure will be deleted and the text will be connected.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/d85de8c0-0b89-4e1f-ac5b-cc51dcd459ae)
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/41daeea9-bc3f-4c16-aedf-24f4a20a6208)
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/8da63ae2-5748-4d4b-a8d8-d0b05438e48f)


В верхнем левом углу есть кнопки - это переменные, по нажатию на которые они будут вставляться по последнему месту курсора ввода. 
Вместо таких переменных можно будет подставлять слова и даже целые предложения!

In the upper left corner there are buttons - these are variables, by clicking on which they will be inserted at the last place of the input cursor.
Вместо таких переменных можно будет подставлять слова и даже целые предложения!
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/8c1d43f0-fda8-4cb1-8e91-6069b7d5d8b6)

Кнопка "Save" - сохраняет шаблон сообщения в localStorage. При следующем заходе в приложение данный шаблон будет взят из localStorage.

"Save" button - saves the message template to localStorage. The next time you open the application, this template will be taken from localStorage.

Нажав на кнопку "Preview" - поверх редактора (модальное окно) откроется предпросмотр сообщения.

By clicking on the "Preview" button - a preview of the message will open on top of the editor (modal window).
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/7657b493-45b3-4d7e-b0b2-798da28541b2)

Сверху поле, в котором отображается полученный текст, а снизу поля ввода для переменных. 
Введя значение для переменной сообщение в верхнем поле тут же изменится, если переменные были установлены в тексте в редакторе шаблонов сообщений

Above is the field in which the received text is displayed, and below are the input fields for variables.
By entering a value for a variable, the message in the top field will immediately change if the variables have been set in the text in the message template editor.
![image](https://github.com/VVinland/Message_Template_Editor/assets/114589631/9f08b0fb-8e44-4bca-9971-4d45c0d8cc02)

Конструкция IF-THEN-ELSE нужна для изменения содержимого сообщения в зависимости от отсутствия/наличия текста в поле IF.
Если в IF есть значение, то в сообщение добавится текст из поля THEN, если в IF нет значения, то в сообщение добавится текст из
поля ELSE.

The IF-THEN-ELSE construct is needed to change the content of the message depending on the absence/presence of text in the IF field.
If there is a value in IF, then the text from the THEN field will be added to the message,
if there is no value in IF, then the text from the ELSE field will be added to the message.







