import { shoe4 } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons/index.js";

const SuperQuality = () => {
    return (
        <section
            id='about-us'
            className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl lg:max-w-3xl font-bold'>
                    Мы предоставляем Вам обувь
                    <span className='text-blue'> высшего </span>
                    <span className='text-blue'> качества </span>
                </h2>
                <p className='mt-6 lg:max-w-3xl info-text text-justify'>
                    Обеспечивая высочайший комфорт и стиль, наша тщательно изготовленная обувь предназначена для того,
                    чтобы улучшить ваши впечатления, обеспечивая вам непревзойденное качество,
                    инновации и нотку элегантности.
                </p>
                <div className='mt-11'>
                    <Button backgroundColor="bg-blue" textColor="text-white" label='Подробнее' iconURL={arrowRight} />
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={shoe4}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    );
};

export default SuperQuality;