const express = require("express");
const bookingSystem = require("./booking-system");
const app = express();
app.use(express.json());
app.post("/api/book", bookingSystem.bookSeat);
app.listen(3000, () => {
    console.log("Ticket Booking System running on port 3000");
});
