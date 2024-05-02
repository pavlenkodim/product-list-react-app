import React from "react";
import { useForm } from "react-hook-form";

import './Add.css'

const Add = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        localStorage.setItem('title', data.title)
        localStorage.setItem('description', data.description)
        localStorage.setItem('price', data.price)
        localStorage.setItem('public', data.public)
    }

    const getFromLocalStorage = (field) => {  
        return localStorage.getItem(field)
    }

    const setIntoLocalStarage = (data) => { //TODO: Неработате так как нужно, может лучше вообще удалить!?
        const field = data.target.id
        localStorage.setItem(field, data.target.value)
    }
       
    return(
        <div className="add">
            <h1>Add</h1>
            <form className="form_add" onSubmit={handleSubmit(onSubmit)}>
                <div className="input_field_container">
                    <div>
                        <label htmlFor="title">Title: </label>
                    </div>
                    <input 
                        id="title" 
                        className="input_field" 
                        {...register("title", { required: true })} 
                        defaultValue={getFromLocalStorage('title')} 
                        onInput={setIntoLocalStarage} 
                    />
                    {errors.title && <span className="input_error" > This field is required</span>}
                </div>
                <div className="input_field_container">
                    <div>
                        <label htmlFor="description">Description: </label>
                    </div>
                    <input 
                        id="description" 
                        className="input_field" 
                        {...register("description", { required: true })} 
                        defaultValue={getFromLocalStorage('description')} 
                        onInput={setIntoLocalStarage} 
                    />
                    {errors.description && <span className="input_error" > This field is required</span>}
                </div>
                <div className="input_field_container">
                    <div>
                        <label htmlFor="price">Price: </label>
                    </div>
                    <input 
                        id="price" 
                        className="input_field" 
                        {...register("price", { required: true, pattern: /^[0-9]+$/g })} 
                        defaultValue={getFromLocalStorage('price')} 
                        onInput={setIntoLocalStarage} 
                    />
                    {errors.price && <span className="input_error"> This field is required and need only numbers</span>}
                </div>
                <div className="input_field_container">
                    <label htmlFor="public">Public</label>
                    <input 
                        id="public" 
                        type="checkbox" 
                        {...register("public", { required: false })} 
                        defaultChecked={getFromLocalStorage('public') === 'true' ? true : false} 
                    />
                </div>
            
                <input id="submit" type="submit" value={'Add product'} />
            </form>
        </div>
    )
}

export default Add