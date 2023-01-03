import Button from "./Button";
import Card from "./Card";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addHandler = (event) => {
    const letters = /^[0-9-\u0600-\u06FF\s]+$/;
    const num = /^([0-9]{2})$/;
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "   خطا : فرم خالی است ",
        message: "لطفا نام و سن را وارد کنید "
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "خطا:سن نا معتبر",
        message: "سن باید بیش از یک باشد "
      });
      return;
    }
    if (!num.test(enteredAge)) {
      setError({
        title: "خطای ورود عدد",
        message: "فقط دو رقم عدد در قسمت سن وارد کنید"
      });
      return;
    }

    if (!letters.test(enteredUsername)) {
      setError({
        title: "خطای انتخاب زبان دستگاه",
        message: "زبان را فارسی انتخاب کنید"
      });
    }

    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addHandler}>
          <label>
            <input
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            Username
          </label>

          <label>
            <input type="text" value={enteredAge} onChange={ageChangeHandler} />
            Age (Years)
          </label>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
