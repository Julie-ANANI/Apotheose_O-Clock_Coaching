-- Deploy OAP-Coaching:fix_interact to pg

BEGIN;

ALTER TABLE interact DROP COLUMN is_checked;

COMMIT;
