import ProductContainer from "../ProductContainer/ProductContainer";
import Category from "../Category/Category";

export default function TopCategory(){

    return (
        <ProductContainer isGray={true} heading={"Top Category"} style={""} >
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
            <Category name={"Handbags"} />
        </ProductContainer>
    )

}