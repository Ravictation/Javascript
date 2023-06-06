-- CREATE TABLE Schedule (
--     schedule_id SERIAL PRIMARY KEY,
--     movie_id INT,
--     start_time TIMESTAMP,
--     end_time TIMESTAMP,
--     studio VARCHAR(255),
--     available_seats INT,
--     CONSTRAINT fk_movie
--         FOREIGN KEY (movie_id) 
--             REFERENCES Movie(movie_id)
-- );

-- INSERT INTO Schedule (movie_id, start_time, end_time, studio, available_seats)
-- VALUES
--     (1, '2022-01-01 10:00:00', '2022-01-01 12:00:00', 'Studio A', 100),
--     (2, '2022-02-05 13:30:00', '2022-02-05 15:20:00', 'Studio B', 80),
--     (3, '2022-03-10 17:45:00', '2022-03-10 19:20:00', 'Studio C', 120),
--     (4, '2022-04-15 14:00:00', '2022-04-15 16:10:00', 'Studio A', 90),
--     (5, '2022-05-20 11:30:00', '2022-05-20 13:15:00', 'Studio B', 110),
--     (6, '2022-06-25 18:20:00', '2022-06-25 20:15:00', 'Studio C', 100),
--     (7, '2022-07-30 15:45:00', '2022-07-30 17:30:00', 'Studio A', 95),
--     (8, '2022-08-04 12:10:00', '2022-08-04 14:25:00', 'Studio B', 85),
--     (9, '2022-09-09 16:30:00', '2022-09-09 18:10:00', 'Studio C', 105),


SELECT * FROM Schedule


-- UPDATE Schedule
-- SET studio = 'Studio B'
-- WHERE schedule_id = '9';

-- DELETE FROM Schedule
-- WHERE schedule_id = 9;


