import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from '../comments/comments.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
