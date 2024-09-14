export default function ProductContainer( {children , heading , isGray}  ){
    const bgClass = isGray ? "bg-secondary" : "bg-white";
    const textColor = isGray ? "text-white" : "text-dark";

    return  (
        <section className={bgClass + " container-fluid text-center"}>
            <h2 className={textColor + " pt-5"}>{heading}</h2>
            <ul className="list-group list-group-horizontal justify-content-center pt-5">
                {children}
            </ul>
        </section>
    )

}