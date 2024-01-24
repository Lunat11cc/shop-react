import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
    return (
        <section id='products' className='max-container max-sm:mt-12'>
            <div className='flex flex-col justify-start gap-5'>
                <h2 className='text-4xl font-palanquin font-bold'>
                    Наши <span className='text-blue'> популярные </span> модели
                </h2>
                <p className='lg:max-w-3xl mt-2 font-montserrat text-slate-gray'>
                    Насладитесь первоклассным качеством и стилем с нашими востребованными товарами.
                    Откройте для себя мир комфорта, дизайна и ценности
                </p>
            </div>

            <div className='mt-16 mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
                {products.map((product) => (
                    <div key={product.name}>
                        <PopularProductCard data={product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;