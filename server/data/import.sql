-- Un fichier pour charger des données de tests et pouvoir valider mes devs.

INSERT INTO theme (title,description, position, created_At, modified_At)
VALUES 
('Créer un CV', 'Depuis quelques années on annonce la mort imminente du CV... Certains vont jusqu''à dire qu''il serait même déjà mort. Nous pensons plutôt que le CV fait partie d''une liste de plus en plus longue d''élements te concernant qui seront appréciés par les recruteurs.Malgrè tout, le CV reste, dans la très grande majorité des cas, la première pièce qui sera pris en considération par le recruteur. Il est donc très important de lui laisser une bonne impression pour qu''il continue à s''intéresser à ta candidature. Nous avons réuni ici quelques conseils qui pourront t''aider à rédiger (ou améliorer) ton CV. Il ne s''agit en aucun cas d''une liste exhaustive ou de vérités absolues. Prends tout avec des pincettes et n''hésite pas à faire preuve d''esprit critique !', 0 , NOW(), NOW() + '2 day'),
('Créer un profil Linkedin', 'En moyenne, un recruteur passe 15 secondes sur le CV, alors qu''il va passer entre ​2 et 3 minutes sur ton profil Linkedin​. Il faut donc être généreux sur Linkedin, mettre du contenu qui va intéresser le recruteur. Tu as la possibilité d’en dire bien plus sur toi que sur un CV, alors profites-en ! D''après de récentes études (début 2021) : " - LinkedIn compte plus de 706 millions de membres à travers le monde - La plateforme est présente dans plus de 200 pays et territoires - Plus de 55 millions d’entreprises y sont présentes - 3 professionnels inscrivent sur LinkedIn chaque seconde - LinkedIn fait partie des 10 marques les plus dynamiques au monde - Le réseau social compte 2,9 millions de groupes" Source → 94% des recruteurs utilisent LinkedIn pour évaluer les candidats dans leur processus de recrutement Pour réaliser un bon profil Linkedin, il faut avant tout ​se mettre à la place du recruteur ​pour comprendre son utilité et ce que l''on vient y chercher.', 0 , NOW(), NOW() + '1 day'),
('Préparer son compte Github', 'Tu n''imagines pas tout ce qu''un bon compte GitHub peut faire pour toi ! Les recruteurs qui recherchent des développeurs sont habitués à chercher le compte GitHub des candidats pour se faire une idée de leurs compétences. L''objectif des conseils qui se rappotent à cette tâche sont les suivants : - Permettre aux recruteurs de trouver facilement ton profil public GitHub - Vous présenter très succinctement et montrer que tu codes régulièrement - Démontrer tes compétences techniques en montrant quelques projets représentatifs', 0 , NOW(), NOW() + '4 day');



INSERT INTO mission (title, advice, position, created_At,modified_At, theme_id )
VALUES 
('Insérer une belle photo', 'Qu''est-ce qu''on appelle une bonne photo ? - Souris ! Tu as déjà rencontré des personnes qui souhaitaient recruter des gens avec une tête de serial-killer ? C''est sur la carte d''identité que l''on te demande de faire cette tête, pas sur le CV. - Utilise un fond neutre, ne va pas recadrer ta tête sur la photo prise à la mer avec tata Martine devant un magnifique cocotier - Cadre ta photo correctement. Idéalement on doit voir ta tête en entier et le début de tes épaules. Pas de photo debout ou au contraire en très gros plan - Place-toi dans un endroit lumineux mais pas à contre-jour - N''hésite pas à retoucher légerement pour ajuster la luminosité et contraste - Choisi une tenue correcte : ni mal habillé, ni trop bien habillé. Surtout dans le domaine du web, évite un style trop sérieux (les hommes, on évite la cravate!) - N''utilise pas un avatar. La photo doit aussi aider le recruteur à se rappeler de vous. Or, un avatar restera toujours un élément anonyme - Regarde la caméra dans les yeux', 0, NOW(), NOW () + '1 day', 1),
('Ajouter les coordonnées', '- NOM Prénom (ou l''inverse) - Ville d''habitation (L''adresse complète est inutile, en revanche, si tu es mobile, tu le notes clairement. Exemple : Mobile Nouvelle-Aquitaine) – Pour les personnes en IDF qui résident dans le 91 ou le 77, il est préférable d''associer à ta ville, la distance d''une grande gare parisienne. Exemple : 77 - Marne-la-Vallée (30 min de la Gare de Lyon). - Numéro de téléphone - Email pro (et non pas un « petitefleur78@... » ou « beaugossedu95@... » ) -  Age. Il y a deux écoles à ce niveau... Certains recruteurs suggèrent de ne pas mettre l’âge après 45 ans. Chez O’clock, nous ne sommes pas pour la perte de temps, nous allons donc te conseiller de le noter (parce que même si tu as 50 ans, à moins d’être béni(e) des dieux de la jeunesse, ça se verra que tu n’as plus 20 ans en entretien et sur ton parcours pro aussi donc bon …). De toute façon, entre toi et nous, habituellement il n’y a que les profils de plus de 40 ans qui ne mettent pas l’âge, donc tu es vite “identifiable” en faisant pareil mais en plus, tu montres que toi-même tu n’es pas à l’aise avec ça, créant à ton initiative une situation malaisante là où il n’y a pas lieu d’être ! - Infos personnelles de type : Mariée, 2 enfants - Permis B, véhiculée - Le lien vers ton profil Linkedin (cliquable et en gras) - Le lien vers ton profil Github (cliquable) et/ou portfolio', 0, NOW(), NOW () + '2 day', 1),
('Mettre', '- Donne un titre au CV (en gras, en couleur et en taille un peu plus grosse que le reste du CV). - C''est l''accroche du CV (on peut y mettre une seconde ligne, qui ne sera pas en gras et qui apportera des infos complémentaires : type d''alternance ou encore qualités, mobilité, valeurs, langues parfaitement maîtrisées).  - Ne note pas junior sur ton CV, on laisse l’opportunité au recruteur de lire ton CV en entier et d''apprendre de lui même que tu débutes. - Pour le titre, on pense aux mots clés. On regarde quel titre l''entreprise donne au poste pour coller au besoin. - Par exemple : Développeur Web - Spécialisé en WordPress', 0, NOW(), NOW () + '2 day', 1);


INSERT INTO "user" (api_user, admin_status, created_At,modified_At)
VALUES(4627, true, NOW(), NOW() + '1 day');


INSERT INTO interact (checked, created_At, modified_At,mission_id, "user_id")
VALUES 
(true, NOW (), NOW() + '1 day', 1, 1 ),
(false, NOW (), NOW() + '1 day', 2, 1 ),
(false, NOW (), NOW() + '1 day', 3, 1 );