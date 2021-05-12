-- Deploy OAP-Coaching:trigger to pg

BEGIN;

-- Function that will update with the current time the modified_at field of a record when updating the record
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.modified_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger that will execute the function trigger_set_timestamp each time a theme is updated
CREATE TRIGGER set_timestamp_theme
BEFORE UPDATE ON theme
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- Trigger that will execute the function trigger_set_timestamp each time a mission is updated
CREATE TRIGGER set_timestamp_mission
BEFORE UPDATE ON mission
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- Trigger that will execute the function trigger_set_timestamp each time a user is updated
CREATE TRIGGER set_timestamp_user
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
