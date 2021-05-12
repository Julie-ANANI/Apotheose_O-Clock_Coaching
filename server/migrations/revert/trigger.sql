-- Revert OAP-Coaching:trigger from pg

BEGIN;

-- Trigger that will execute the function trigger_set_timestamp each time a theme is updated
DROP TRIGGER set_timestamp_theme ON theme;

-- Trigger that will execute the function trigger_set_timestamp each time a mission is updated
DROP TRIGGER set_timestamp_mission ON mission;

-- Trigger that will execute the function trigger_set_timestamp each time a user is updated
DROP TRIGGER set_timestamp_user ON "user";

-- Function that will update with the current time the modified_at field of a record when updating the record
DROP FUNCTION trigger_set_timestamp();

COMMIT;
