import React, { Component } from "react";
import CreateRecipeButton from "../components/CreateRecipeButton"
import { AddForm } from "../components/AddContainer"
import IngredientsForm from "../components/IngredientsForm"

class Add extends Component {
    render(){
        return(
            <div>
                <h1>Add</h1>
                <CreateRecipeButton/>
                <AddForm/>
                <IngredientsForm/>
            </div>
        )
    }
}

export default Add;