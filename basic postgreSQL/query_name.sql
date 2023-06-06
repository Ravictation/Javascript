SELECT * FROM Movie 
    WHERE title iLIKE '%a%'
    ORDER BY movie_id ASC
    LIMIT 5
    OFFSET 0 ;