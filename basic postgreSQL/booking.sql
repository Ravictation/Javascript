-- CREATE TABLE Booking (
--     booking_id SERIAL PRIMARY KEY,
--     schedule_id INT,
--     customer_name VARCHAR(255),
--     email VARCHAR(255),
--     phone_number VARCHAR(20),
--     seat_number VARCHAR(10),
--     CONSTRAINT fk_schedule
--         FOREIGN KEY (schedule_id) 
--             REFERENCES Schedule(schedule_id)
-- );

-- INSERT INTO Booking (schedule_id, customer_name, email, phone_number, seat_number)
-- VALUES
--     (1, 'John Doe', 'johndoe@example.com', '1234567890', 'A1'),
--     (2, 'Jane Smith', 'janesmith@example.com', '0987654321', 'B3'),
--     (3, 'Michael Johnson', 'michaeljohnson@example.com', '5551234567', 'C2'),
--     (4, 'Emily Davis', 'emilydavis@example.com', '9998887777', 'D4'),
--     (5, 'David Wilson', 'davidwilson@example.com', '1112223333', 'E5'),
--     (6, 'Sarah Anderson', 'sarahanderson@example.com', '4445556666', 'F6'),
--     (7, 'Matthew Taylor', 'matthewtaylor@example.com', '7776665555', 'G7'),
--     (8, 'Olivia Brown', 'oliviabrown@example.com', '2223334444', 'H8'),
--     (9, 'Daniel Martinez', 'danielmartinez@example.com', '8889990000', 'I9'),



SELECT * FROM Booking



-- UPDATE Booking
-- SET customer_name = 'Akbar'
-- WHERE booking_id= '9';

-- DELETE FROM Booking
-- WHERE booking_id = '9';
