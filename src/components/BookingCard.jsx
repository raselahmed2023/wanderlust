'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField } from '@heroui/react';
import React, { useState } from "react";
import toast from "react-hot-toast";


const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [departureDate, setDepartureDate] = useState(null);

    const { price, _id, destinationName, imageUrl, country } = destination;

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }

        const res = await fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        toast.success("You booked successfully!")
    }

    return (
        <Card className='rounded-none border'>
            <p>Starting from</p>
            <h2 className='text-3xl font-bold'>{price}</h2>
            <p>per person</p>
            <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>


        </Card >
    );
};

export default BookingCard;