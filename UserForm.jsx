import { useState } from "react";
import Card from "./ui/Card";
import Btn from "./ui/Button";
import styles from "./UserForm.module.css";

function UserForm({ onAdd }) {
  // name — значение поля имени.
  // setName — функция для обновления имени при вводе.
  const [name, setName] = useState("");

  // ageInput — строковое значение инпута возраста.
  // Мы специально храним его строкой, потому что input всегда отдаёт строку.
  const [ageInput, setAgeInput] = useState("");

  // error — текст ошибки валидации.
  // Если ошибок нет, здесь хранится пустая строка.
  const [error, setError] = useState("");

  function submitHandler(event) {
    // Отменяем стандартную перезагрузку страницы при отправке формы.
    event.preventDefault();

    // Убираем лишние пробелы по краям,
    // чтобы пользователь не смог отправить, например, только пробелы.
    const trimmedName = name.trim();

    // Преобразуем введённый возраст в число.
    // Number("18") => 18
    // Number("") => 0, поэтому выше/ниже нужна отдельная проверка на пустое поле.
    const parsedAge = Number(ageInput);

    // Проверка №1: имя не должно быть пустым.
    if (trimmedName === "") {
      setError("Пожалуйста, введите имя.");
      return;
    }

    // Проверка №2: поле возраста не должно быть пустым.
    if (ageInput.trim() === "") {
      setError("Пожалуйста, введите возраст.");
      return;
    }

    // Проверка №3: возраст должен быть корректным числом больше 0.
    // Number.isNaN защищает от нечисловых значений.
    if (Number.isNaN(parsedAge) || parsedAge <= 0) {
      setError("Возраст должен быть числом больше 0.");
      return;
    }

    // Если все проверки пройдены,
    // очищаем сообщение об ошибке.
    setError("");

    // Отправляем данные в родительский компонент.
    onAdd({
      // Date.now() создаёт простой уникальный id на основе текущего времени.
      // Для учебного проекта этого достаточно.
      id: Date.now(),

      // Сохраняем уже очищенное имя без лишних пробелов.
      name: trimmedName,

      // Возраст сохраняем числом, а не строкой.
      age: parsedAge,
    });

    // После успешного добавления очищаем поля формы,
    // чтобы можно было сразу ввести следующего пользователя.
    setName("");
    setAgeInput("");
  }

  return (
    <Card>
      {/*
        form — семантически правильный элемент для ввода данных.
        onSubmit сработает как по кнопке, так и по Enter.
      */}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          {/*
            htmlFor связывает label с input по id.
            Это улучшает доступность и позволяет кликать по label,
            чтобы активировать input.
          */}
          <label htmlFor="inp-name">Имя</label>
          <input
            id="inp-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Введите имя"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="inp-age">Возраст</label>
          <input
            id="inp-age"
            type="number"
            value={ageInput}
            onChange={(event) => setAgeInput(event.target.value)}
            placeholder="Введите возраст"
            min="1"
          />
        </div>

        {/*
          Если есть текст ошибки, показываем его пользователю.
          Это лучше, чем просто молча ничего не делать.
        */}
        {error && <p className={styles.error}>{error}</p>}

        {/*
          type="submit" говорит браузеру,
          что эта кнопка отправляет форму.
        */}
        <Btn type="submit">Добавить</Btn>
      </form>
    </Card>
  );
}

export default UserForm;
