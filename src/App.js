import { useState } from "react";
import UserForm from "./components/UserForm";
import PeopleList from "./components/PeopleList";

function App() {
  // Главный state приложения.
  // Здесь мы храним массив всех добавленных пользователей.
  // Каждый пользователь — это объект вида:
  // { id: number, name: string, age: number }
  const [people, setPeople] = useState([]);

  // Функция добавления нового пользователя в список.
  // Она получает уже готовый объект person из дочернего компонента UserForm.
  function handleAddPerson(person) {
    // Используем функциональную форму setState,
    // потому что новое значение зависит от предыдущего.
    // prev — это прошлый массив пользователей.
    // Возвращаем новый массив, где в конец добавляем нового пользователя.
    setPeople((prev) => [...prev, person]);
  }

  // Функция удаления пользователя по id.
  function handleRemovePerson(id) {
    // filter создаёт новый массив,
    // в который попадут все пользователи, КРОМЕ того,
    // чей id совпал с id удаляемого элемента.
    setPeople((prev) => prev.filter((person) => person.id !== id));
  }

  return (
    <div>
      {/*
        Заголовок приложения.
        Inline-стили здесь допустимы, потому что стили очень маленькие
        и относятся только к одному элементу.
      */}
      <h1 style={{ textAlign: "center", marginBottom: 24, color: "#222" }}>
        Управление пользователями
      </h1>

      {/*
        Передаём в форму callback-функцию onAdd.
        Когда пользователь отправит форму,
        UserForm вызовет onAdd(...) и передаст данные наверх.
      */}
      <UserForm onAdd={handleAddPerson} />

      {/*
        Показываем список только тогда,
        когда в массиве есть хотя бы один пользователь.
        Это удобно, чтобы не рендерить пустой блок.
      */}
      {people.length > 0 && (
        <PeopleList items={people} onRemove={handleRemovePerson} />
      )}
    </div>
  );
}

export default App;
