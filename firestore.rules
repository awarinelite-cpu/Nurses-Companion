rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Public read-only: care plan cache (AI-generated plans)
    match /carePlanCache/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Public read-only: drug cache (AI-generated drug info)
    match /drugCache/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Users: only the owner can read/write their data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      match /plans/{planId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }

      match /drugs/{drugId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
