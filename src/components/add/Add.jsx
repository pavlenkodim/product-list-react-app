import React from "react";
import { useForm } from "react-hook-form";

import './Add.css'

const Add = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
    }
    
    console.log(watch("example"))
       
    return(
        <div className="add">
            <h1>Add</h1>
            <form className="form_add" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input id="title" {...register("title", { required: true })} />
                    {errors.title && <span className="input_error" >This field is required</span>}
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input id="description" {...register("decription", { required: true })} />
                    {errors.description && <span className="input_error" >This field is required</span>}
                </div>
                <div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <label htmlFor="price">Price: </label>
                    <input id="price" {...register("price", { required: true, pattern: /\d/g })} />
                    {errors.price && <span className="input_error">This field is required and need only numbers</span>}
                </div>
                <div>
                    <label htmlFor="public">Public</label>
                    <input id="public" type="checkbox" {...register("public", { required: false })} />
                    {/* errors will return when field validation fails  */}
                </div>
            
                <input type="submit" />
            </form>
        </div>
    )
}

export default Add