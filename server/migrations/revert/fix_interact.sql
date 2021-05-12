-- Revert OAP-Coaching:fix_interact from pg

BEGIN;

ALTER TABLE interact ADD COLUMN is_checked BOOLEAN DEFAULT FALSE;

COMMIT;
