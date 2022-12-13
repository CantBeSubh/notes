export const Search = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <i class="fa fa-search" aria-hidden="true" />
            <input
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                }
                type='text'
                placeholder='type to search...'
            />
        </div>
    );
};
