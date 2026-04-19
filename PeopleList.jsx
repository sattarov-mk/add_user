import { useState } from "react";
import Btn from "./ui/Button";
import styles from "./PeopleList.module.css";

function PeopleList({ items, onRemove }) {
  // confirmId хранит id пользователя,
  // которого пользователь собирается удалить.
  // null означает, что модальное окно подтверждения сейчас закрыто.
  const [confirmId, setConfirmId] = useState(null);

  function handleDelete() {
    // Защита на случай, если функция вызовется,
    // когда id для удаления ещё не выбран.
    if (confirmId === null) return;

    // Вызываем функцию удаления,
    // которую передал родительский компонент App.
    onRemove(confirmId);

    // После удаления закрываем модальное окно.
    setConfirmId(null);
  }

  return (
    <div className={styles.wrapper}>
      {/*
        ul используется, потому что у нас список пользователей.
        Это семантически правильнее, чем обычный div.
      */}
      <ul className={styles.list}>
        {items.map((person) => (
          // key нужен React для корректного отслеживания элементов списка.
          <li key={person.id} className={styles.row}>
            <span>
              {person.name}, {person.age} лет
            </span>

            {/*
              При нажатии не удаляем пользователя сразу,
              а сначала сохраняем его id и открываем подтверждение.
            */}
            <Btn onClick={() => setConfirmId(person.id)}>Удалить</Btn>
          </li>
        ))}
      </ul>

      {/*
        Модальное окно отображается только тогда,
        когда выбран какой-то confirmId.
      */}
      {confirmId !== null && (
        <div className={styles.overlay} onClick={() => setConfirmId(null)}>
          {/*
            stopPropagation нужен, чтобы клик внутри окна
            не всплывал на overlay и не закрывал модалку.
          */}
          <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
            <h3 className={styles.dialogTitle}>Подтверждение</h3>
            <p className={styles.dialogText}>
              Вы точно хотите удалить этого пользователя?
            </p>
            <div className={styles.dialogActions}>
              <Btn onClick={handleDelete}>Да</Btn>
              <Btn onClick={() => setConfirmId(null)}>Отмена</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleList;
