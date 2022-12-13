export const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => handleDeleteNote(id)}
                />
            </div>
        </div>
    );
};