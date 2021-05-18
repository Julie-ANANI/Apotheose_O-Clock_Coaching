-- Deploy OAP-Coaching:function-json to pg

BEGIN;

CREATE FUNCTION new_user(json) RETURNS "user" AS $$
    INSERT INTO "user" (api_user, admin_status, created_at, modified_at)
    VALUES (
        ($1->>'api_user')::int,
        ($1->>'admin_status')::boolean,
        ($1->>'created_at')::timestamptz,
        ($1->>'modified_at')::timestamptz
    )
    RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION new_mission(json) RETURNS mission AS $$
    INSERT INTO mission (title, advice, position, created_at, modified_at)
    VALUES (
        $1->>'title',
        $1->>'advice',
        ($1->>'position')::int,
        ($1->>'created_at')::timestamptz,
        ($1->>'modified_at')::timestamptz
    )
    RETURNING *;
$$ LANGUAGE sql;


COMMIT;
