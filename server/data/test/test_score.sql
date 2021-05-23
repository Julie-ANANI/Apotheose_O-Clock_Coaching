SELECT COUNT(mission.id) AS score
        FROM theme
        JOIN mission
        ON mission.theme_id = theme.id
        JOIN interact
        ON interact.mission_id = mission.id
        WHERE interact.user_id=6 AND theme_id=1
        GROUP BY theme.id;

SELECT COUNT(mission.id) AS score
        FROM theme
        JOIN mission
        ON mission.theme_id = theme.id
        JOIN interact
        ON interact.mission_id = mission.id
        WHERE interact.user_id=6 AND theme_id=1 AND ISNULL(theme) = 0
        GROUP BY theme.id;

SELECT id , ISNULL (id, 0)
FROM theme;


SELECT COUNT(mission.id) AS score
        FROM theme
        JOIN mission
        ON mission.theme_id = theme.id
        JOIN interact
        ON interact.mission_id = mission.id
        WHERE interact.user_id=6 AND theme_id=1
        GROUP BY theme.id;
        WHERE mission IN (null) = 0;

SELECT mission.id AS score 
       FROM theme
       JOIN mission
       ON mission.theme_id = theme.id
       JOIN interact
       ON interact.mission_id = mission.id
       WHERE interact.user_id=6 AND theme_id=1
       AND mission null  = 0;


SELECT COUNT(mission.id) AS score
        FROM theme
        JOIN mission
        ON mission.theme_id = theme.id
        JOIN interact
        ON interact.mission_id = mission.id
        WHERE interact.user_id=6 AND theme_id=1;       