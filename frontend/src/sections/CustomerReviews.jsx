import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section className='max-container'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                Что наши
                <span className='text-blue'> клиенты </span>
                думают о нас?
            </h3>
            <p className='m-auto mt-4 max-w-3xl text-center info-text'>
                Услышьте подлинные отзывы от наших довольных клиентов об их исключительном опыте работы с нами.
            </p>

            <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;