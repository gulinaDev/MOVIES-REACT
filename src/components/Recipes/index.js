import {data} from "../Data/Data";

function Recipes() {
    return (
        <div className="container">
            <h1>Вкусные рецепты</h1>
            {
                data.map((el,idx) => (
                    <div key={idx}>
                        <h3>{el.name}</h3>
                       <ul>
                           {
                               el.ingredients.map(ingredient =>(
                                   <li key={ingredient.name}>{ingredient.name}</li>
                               ))
                           }
                       </ul>
                        <h1>Инструкция по приготовлению</h1>
                        <ol>
                            {
                                el.steps.map(step => (
                                    <li key={step}>{step}</li>
                                ))
                            }
                        </ol>
                        <span>_______________________________________________</span>
                    </div>
                ))
            }

        </div>
    )

}

export default Recipes