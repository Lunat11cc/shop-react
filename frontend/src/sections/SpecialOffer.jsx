import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
    return (
        <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <img
                    src={offer}
                    alt='Shoe Promotion'
                    width={773}
                    height={687}
                    className='object-contain w-full'
                />
            </div>
            <div className='flex flex-1 flex-col'>
                <h2 className='text-4xl font-palanquin font-bold'>
                    <span className='text-blue'>Специальное </span>
                    предложение
                </h2>
                <p className='mt-4 info-text text-justify'>
                    Отправляйтесь в путешествие по магазинам, которое изменит ваш опыт благодаря выгодным предложениям.
                    От первоклассного выбора до невероятной экономии - мы предлагаем непревзойденную стоимость,
                    которая отличает нас от других.
                </p>
                <p className='mt-6 info-text text-justify'>
                    Путешествуйте по миру возможностей, предназначенных для исполнения ваших уникальных желаний,
                    превосходящих самые высокие ожидания. Ваше путешествие с нами - не что иное, как исключительное.
                </p>
                <div className='mt-11 flex flex-wrap gap-4'>
                    <Button
                        iconURL={arrowRight}
                        label='Подробнее'
                        backgroundColor='bg-blue'
                        textColor='text-white'
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;