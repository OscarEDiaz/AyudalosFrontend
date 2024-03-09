import '../../styles/catalog_page/iniciative.css'

export const Iniciative = () => {
    return (
        <div className='iniciative-main-frame' >
            <div 
                className="banner"
                style={{ 'backgroundImage': 'url(https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785076_1280.jpg)' }}
            >
                <div className="faded-bg">
                    <h2>Iniciative name</h2>
                </div>
            </div>
            <div className="description">
                <h2 className="description-h2">Descripción</h2>
                <p className="iniciative-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat veniam libero enim, temporibus similique quos. Atque quidem, recusandae qui fugiat illo consequatur sunt ad incidunt, rerum nemo eos, praesentium quo!
                    Atque tenetur facere aliquam quasi quas nam delectus voluptate, impedit quibusdam, quisquam consectetur alias nobis beatae officia exercitationem? Recusandae nesciunt, dolorum molestias aliquid nobis assumenda tempore doloribus!<br/><br/>Accusamus, obcaecati dolorum?
                    Cum, laboriosam maiores sit magni dolor fugiat qui est facilis minus, vero quo hic reiciendis in, velit corporis totam eaque cupiditate iure exercitationem ab! Voluptatem ipsa aperiam totam atque qui!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat veniam libero enim, temporibus similique quos. Atque quidem, recusandae qui fugiat illo consequatur sunt ad incidunt, rerum nemo eos, praesentium quo!
                    Atque tenetur facere aliquam quasi quas nam delectus voluptate, impedit quibusdam, quisquam consectetur alias nobis beatae officia exercitationem? Recusandae nesciunt, dolorum molestias aliquid nobis assumenda tempore doloribus!<br/><br/>Accusamus, obcaecati dolorum?
                    Cum, laboriosam maiores sit magni dolor fugiat qui est facilis minus, vero quo hic reiciendis in, velit corporis totam eaque cupiditate iure exercitationem ab! Voluptatem ipsa aperiam totam atque qui!
                </p>
            </div>
            <button className="iniciative-donate-btn">
                <h3>Donar</h3>
            </button>
        </div>
    )
}
