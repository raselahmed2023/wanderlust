'use client'
import { Button, Calendar, Card, DateField, Label } from '@heroui/react';


const BookingCard = ({ destination }) => {

    const { price } = destination
    return (
        <Card className='rounded-none border'>
            <p>Starting from</p>
            <h2 className='text-3xl font-bold'>{price}</h2>
            <p>per person</p>
            <DateField className="w-[256px]" name="date">
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button  className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>
       

        </Card >
    );
};

export default BookingCard;