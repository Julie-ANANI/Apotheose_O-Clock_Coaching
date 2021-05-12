{
  "id": 3,
  "title": "Préparer son compte Github",
  "description": "Tu n'imagines pas tout ce qu'un bon compte GitHub peut faire pour toi ! Les recruteurs qui recherchent des développeurs sont habitués à chercher le compte GitHub des candidats pour se faire une idée de leurs compétences. L'objectif des conseils qui se rappotent à cette tâche sont les suivants : - Permettre aux recruteurs de trouver facilement ton profil public GitHub - Vous présenter très succinctement et montrer que tu codes régulièrement - Démontrer tes compétences techniques en montrant quelques projets représentatifs",
  "position": 0,
  "created_at": "2021-05-09T13:38:14.201Z",
  "modified_at": "2021-05-13T13:38:14.201Z"
}

UPDATE "theme" SET modified_at = now() WHERE id = 3;

 RETURNING id;

 UPDATE "theme" SET title = $1, description = $2, position = $3  WHERE id = $4 RETURNING id;

 UPDATE theme 
 SET title = 'test', "description" = 'une description simpliste', position = 1, modified_at = now()
WHERE id = 3; 
