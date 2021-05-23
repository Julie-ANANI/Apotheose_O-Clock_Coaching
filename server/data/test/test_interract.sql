-- EXEMPLE 

-- 1 --
--
UPDATE client
SET rue = '49 Rue Ameline',
  ville = 'Saint-Eustache-la-Forêt',
  code_postal = '76210'
WHERE id = 2
-- 


-- 2 --
---
SELECT id, nom, marge_pourcentage, prix_unitaire, quantite, 
    CASE 
      WHEN marge_pourcentage=1 THEN 'Prix ordinaire'
      WHEN marge_pourcentage>1 THEN 'Prix supérieur à la normale'
      ELSE 'Prix inférieur à la normale'
    END
FROM `achat`
---

--------------------------------------------------------------------------------------------
FONCTIONNE
-- AFFICHE LES TRUE ET FALSE SELON UNE CONDITION
SELECT
CASE is_checked 
       WHEN true THEN 'un'
       WHEN false THEN 'deux'
       ELSE 'autre'
END
FROM interact;

--------------------------------------------------------------------------------------------

-- change la valeur true en false
UPDATE interact
SET is_checked = 'false'
WHERE mission_id = 2
AND "user_id" = 1;
--------------------------------------------------------------------------------------------

-- select TOUS les is_checked et renvoie true
SELECT is_checked
FROM interact
    WHERE mission_id = 1
    AND "user_id" =1;
    UPDATE interact
    SET is_checked = 'true';

--------------------------------------------------------------------------------------------

-- LOGIQUE 
-- SI is_checked = true 
-- ALORS update is_checked in false
-- SI is_checked= false
--ALORS update in true 
--------------------------------------------------------------------------------------------
SELECT is_checked
CASE
    WHEN 'true' THEN
    UPDATE interact
    SET is_checked = 'false';
    -------
--QUAND is_checked est true renvoie 'win' ---
SELECT 
    CASE WHEN is_checked = 'true' THEN 'win'
END
FROM interact;
 ------

SELECT is_checked
FROM interact
GROUP BY is_checked
HAVING 'false';
UPDATE interact
SET is_checked = 'true';
LIMIT 1;
-- 
UPDATE interact
SET is_checked = 'false';


-- FONCTIONNE RECUPERE TOUS LES FALSE 
SELECT is_checked
FROM interact
GROUP BY is_checked
HAVING 'false'
WHERE mission_id = 1
AND "user_id" =1
AND
LIMIT 1;
UPDATE interact
SET is_checked = 'true';
--


-- FONCTIONNE RECUPERE TOUS LES FALSE 
SELECT is_checked
FROM interact
HAVING 'false'
WHERE mission_id = 1
AND "user_id" =1
AND
LIMIT 1;
UPDATE interact
SET is_checked = 'true';
--

--SELECTIONNE UN SEUL TRUE
--OUIIIII !!!!
SELECT is_checked 
FROM interact
WHERE 'false'
AND mission_id = 1
AND "user_id" =1
LIMIT 1;
UPDATE interact
SET is_checked = 'true' WHERE mission_id =  1;
 ---!!!!!!


--ICI ÇA FOU LA MERDE
UPDATE interact
SET is_checked = 'true';


SELECT 
    CASE WHEN is_checked = 'true' THEN 'win'
END
FROM interact;





WITH case_checked AS (
    SELECT is_checked 
    FROM interact
)



-- FONCTIONNE 
SELECT is_checked
FROM interact
ORDER BY is_checked
HAVING 'true';
AND
LIMIT 1;


UPDATE interact
SET is_checked = 'false';
--







-- 
UPDATE interact
SET is_checked = 'false';




---
SELECT
	customer_id,
	SUM (amount)
FROM
	payment
GROUP BY
	customer_id
HAVING
	SUM (amount) > 200;
    


CAS expression
    QUAND valueALORS result
    [ QUAND ... ]
    [ ELSEresult ]
FINIR

SELECT a,
       CASE WHEN a=1 THEN 'one'
            WHEN a=2 THEN 'two'
            ELSE 'other'
       END
    FROM test;


CASE WHEN condition THEN result
     [WHEN ...]
     [ELSE result]
END




-- changer valeur false en true
SELECT is_checked
CASE is_checked 
       WHEN 'true' THEN 'false'
       ELSE 'autre'
END

-- sur la colonne is_checked

---SOLUTION
UPDATE interact SET is_checked = NOT is_checked WHERE true
AND mission_id = 1
AND "user_id" =1;
----
         

