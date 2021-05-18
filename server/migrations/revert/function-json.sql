-- Revert OAP-Coaching:function-json from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION new_mission(json);

DROP FUNCTION new_user(json);

COMMIT;
