// data/people.ts
import type { Person } from '../types'

export const people: Person[] = [
  {
    id: 'alice-dupont',
    name: 'Alice Dupont',
    role: 'researcher',
    shortBio: 'Doctorante en sciences de l\'éducation…',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit ante eu elit congue scelerisque. Sed eleifend, orci eu mattis pretium, nisl nulla mattis turpis, a tincidunt nibh nisl luctus arcu. Sed sed maximus tellus. Etiam nec libero ornare, suscipit ipsum vel, imperdiet libero. Duis pharetra quis orci eget pharetra. ',
    institution: 'Université de Grenoble',
    photoUrl: '/assets/alice.jpg',
  },
  // ...participants anonymisés
]