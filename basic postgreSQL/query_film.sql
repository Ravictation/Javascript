-- SELECT *
-- FROM Movie
-- WHERE title LIKE '%Young%'
--     AND EXTRACT(YEAR FROM release_date) = 2022
--     AND genre_id = '1';

SELECT m.title, m.release_date, g.name AS Genre, s.studio
FROM Movie m
JOIN Genre g ON m.genre_id = g.genre_id
JOIN Schedule s ON m.movie_id = s.movie_id
WHERE m.title iLIKE '%%'
    AND EXTRACT(YEAR FROM m.release_date) = 2022
    AND g.name iLike '%%'
ORDER BY m.movie_id ASC
LIMIT 10
OFFSET 1 ;