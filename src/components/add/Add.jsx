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
        console.log(data)
    }
       
    return(
        <div className="add">
            <h1>Add</h1>
            <form className="form_add" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="title">Title: </label>
                    </div>
                    <input id="title" className="input_field" {...register("title", { required: true })} />
                    {errors.title && <span className="input_error" > This field is required</span>}
                </div>
                <div>
                    <div>
                        <label htmlFor="description">Description: </label>
                    </div>
                    <input id="description" className="input_field" {...register("decription", { required: true })} />
                    {errors.description && <span className="input_error" > This field is required</span>}
                </div>
                <div>
                    <div>
                        <label htmlFor="price">Price: </label>
                    </div>
                    <input id="price" className="input_field" {...register("price", { required: true, pattern: /\d/g })} />
                    {errors.price && <span className="input_error"> This field is required and need only numbers</span>}
                </div>
                <div>
                    <label htmlFor="public">Public</label>
                    <input id="public" type="checkbox" {...register("public", { required: false })} />
                </div>
            
                <input id="submit" type="submit" value={'Add product'}/>
            </form>
        </div>
    )
}

export default Add