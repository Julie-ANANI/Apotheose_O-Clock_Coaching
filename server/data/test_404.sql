---ligne de départ

SELECT * FROM theme WHERE id = $1;

---

SELECT EXISTS(SELECT * FROM theme WHERE id = 200);

--------------------

SELECT * FROM theme WHERE EXISTS(SELECT * FROM theme WHERE id = 200);
