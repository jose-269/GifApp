import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

	const onAddCategory = ( newCategory ) => {

		const finder = categories.find(el => el === newCategory);
		if(finder || categories.includes(newCategory)) return;

		setCategories([ newCategory, ...categories ])
		// console.log(newCategory)
	}

  return (
    <>
      <h1>Gif App</h1>

	  <AddCategory 
			onNewCategory={ event => onAddCategory(event) }
		/>
				{ categories.map( category => (
						<GiftGrid key={ category } category={ category } />
					)) 
				}
    </>
  );
};
