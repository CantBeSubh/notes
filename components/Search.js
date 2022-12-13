import styles from "../styles/Search.module.css";

export const Search = ({ handleSearchNote }) => {
    return (
        <div className={styles.search}>
            <i class="fa fa-search" aria-hidden="true" />

            <input
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                }
                type='text'
                className={styles.in}
                placeholder='type to search...'
            />
        </div>
    );
};
