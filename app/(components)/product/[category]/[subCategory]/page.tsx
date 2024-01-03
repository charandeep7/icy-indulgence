type Params = {
  params: {
    category: string,
    subCategory: string
  };
};
export async function generateMetadata({ params: {category, subCategory}}: Params) {
    const title = subCategory.split("%20").join(" ");
    if (!title) {
        return {
            title: "Product Not Found",
        };
    }
    
    return {
        title,
    };
}

export default function SubCategory({ params: {category, subCategory}}: Params){
    const productCategory = category.split("%20").join(" ");
    const productSubCategory = subCategory.split("%20").join(" ");
    return (
        <div>
            <p>{productCategory} {productSubCategory}</p>
        </div>
    )
}