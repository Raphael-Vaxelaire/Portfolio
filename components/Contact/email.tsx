// components/Contact/email.tsx
import React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

// export en tant que fonction pure (Server Component friendly)
export function EmailTemplate({ firstName, userEmail }: { firstName: string; userEmail: string }) {
  return (
    <div>
      <p>Message de : {userEmail}</p>
      <p>{firstName}</p>
    </div>
  );
}

