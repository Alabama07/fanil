import { useRef } from 'react';
import  "./TodoCreateForm.css";


const TodoCreateForm = ({onSubmit} ) => {
    const _onSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
    };

    return (
        <form className='search-form' onSubmit={_onSubmit} >
            <input className='search-form__input' name='search-form__input' type='text' required />
            <input className='search-form__input-date' min={new Date().toISOString().split('T')[0]} name='search-form__date'  type='date' defaultValue={''}/>
            <button className='search-form__button' type='submit'>Send</button>
        </form>
    );
};

export default TodoCreateForm;