-- ALTER TABLE Booking
-- DROP CONSTRAINT fk_schedule;

-- ALTER TABLE Booking
-- ADD CONSTRAINT fk_schedule
-- FOREIGN KEY (schedule_id) 
-- REFERENCES Schedule(schedule_id)
-- ON DELETE CASCADE;