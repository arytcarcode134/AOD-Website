

// Change main variable here to be displayed on all location pages

const citiesServed = 30;
document.getElementById("city-count").textContent = citiesServed;

const noOfReviews = 120;
document.getElementById("review-count").textContent = noOfReviews;

const noOfCarsDetailed = 400
document.getElementById("car-count").textContent = noOfCarsDetailed;

// Online Booking Variable Link

const onlineBookinglink = "https://book.squareup.com/appointments/wymgknwlq7jts2/location/L8N52RM78X4YF/services?rwg_token=AE37R_hu3nzXDNowa1APaedOgItR03VOjOsInmnCKxG1_P50U3P8-zO96gkQqQRhMNnItC12sLLeIGHvGo40rcGqJ4JWYDdeKg%3D%3D&source=cat&ved=2ahUKEwjbiq2S-raVAxXf4skDHQSHKWMQnL4JegQIGxAP";

const bookingLinks = document.querySelectorAll(".book-btn");

bookingLinks.forEach(link =>
{
    link.href = onlineBookinglink;
}
)