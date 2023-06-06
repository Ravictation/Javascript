--membuat tabel movie 
-- CREATE TABLE Movie (
--     movie_id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     release_date DATE,
--     duration INT,
--     director VARCHAR(255),
--     casts VARCHAR(255),
--     genre_id INT,
--     CONSTRAINT fk_genre
--         FOREIGN KEY (genre_id) 
--             REFERENCES Genre(genre_id)
-- );


-- INSERT INTO Movie (title, release_date, duration, director, casts, genre_id)
-- VALUES
--     ('Young Again', '2022-01-01', 120, 'Lizzy Aucoate', 'Nikoletta Nielson, Eleanora Capoun', 1),
--     ('Pandaemonium', '2022-02-05', 110, 'Megan Westlake', 'Emalee Taggart', 2),
--     ('Trial of the Incredible Hulk', '2022-03-10', 95, 'Cariotta Harmer', 'Kaleena Barthod, Rayner Speirs', 1),
--     ('8 Mile', '2022-04-15', 130, 'Jules Shooter', 'Elyssa Bohling, Glenine Jacobowits', 3),
--     ('Distant Drums', '2022-05-20', 105, 'Freda Caistor', 'Cast 9, Cast 10', 2),
--     ('The Substitute 2: Schools Out', '2022-06-25', 115, 'Rosalynd Depka', 'Clarice Prior, Lizbeth Ianizzi', 1),
--     ('Annabel Takes a Tour', '2022-07-30', 100, 'Talia Libbey', 'Madelon Dugdale', 3),
--     ('Emma', '2022-08-04', 125, 'Joleen Cuer', 'Estele Brearton, Georgeanna Healey', 2),
--     ('Dogs in Space', '2022-09-09', 90, 'Filmore Joynt', 'Rosaline Purdie, Katleen Wyre', 1),


-- SELECT * FROM Movie


-- UPDATE Movie 
-- SET title = 'Cinta Fitri', director = 'Abdul', release_date = '2021-02-05'
-- WHERE movie_id = 8;

DELETE FROM Movie
WHERE movie_id = 8;

