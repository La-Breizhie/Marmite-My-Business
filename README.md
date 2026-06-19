# Marmite My Business — Application communautaire MVP

Application Next.js prête pour GitHub + Vercel.

## Fonctionnalités incluses

- Dashboard global personnalisé et coloré
- Annuaire membres
- Import CSV de membres
- Invitations à brancher via email / lien magique
- Événements à venir / passés
- Gestion de présence par membre : participation confirmée, intéressée, absence confirmée, en attente
- Calcul du taux de participation
- Recommandations business : qui recommande qui, pour quel besoin, statut, potentiel €
- Parrainage / personnes parrainées
- Anniversaires
- Fil d'actualité
- Modification autonome de fiche membre

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir : http://localhost:3000

## Import CSV conseillé

```csv
firstName,lastName,email,phone,birthday,city,job,company,sponsorEmail
Claire,Martin,claire@example.com,0600000000,1990-09-12,Rennes,Photographe,Studio Claire,marjoflp@gmail.com
```

## À brancher ensuite pour une vraie production

- Supabase pour la base de données
- Authentification par email / lien magique
- Rôles admin / responsable de Marmite / membre
- Envoi automatique des invitations email
- Stockage des avatars et documents
- Modération du fil d'actualité
- Historique fiable des présences, recommandations, personnes parrainées et statistiques
