import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Card {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  text: string;

  @Column("tsvector", { select: false })
  document_with_weights: any;
}
