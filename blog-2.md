# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface?

Imagine you have a master interface that represents a user in your database:

```typescript
interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  avatarUrl: string;
  createdAt: Date;
}
```

Now, imagine you need a type for a Profile Page that only displays the username and avatar. If you manually create a new interface, you now have two places to update if you ever decide to rename username to displayName. If you forget one, your app breaks.

Instead of rewriting types, we can use Utility Types to "slice" the master interface.

**Pick** allows to choose exactly which keys we want from an existing interface.

- **Syntax**: Pick<Type, Keys>

**Omit** does the opposite: it takes everything except the keys you specify. This is incredibly useful for sensitive data.

- **Syntax**: Omit<Type, Keys>
