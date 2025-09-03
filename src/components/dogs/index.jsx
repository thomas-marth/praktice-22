import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../redux/thunks";
import styles from "./styles.module.css";

function Dogs() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.dogs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDogs());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dog breeds</h1>
      <ul className={styles.list}>
        {items.map((breed) => (
          <li key={breed.name} className={styles.item}>
            <p className={styles.name}>{breed.name}</p>
            <p className={styles.temperament}>{breed.temperament}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dogs;
