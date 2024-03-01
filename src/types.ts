type Block = {
  id: string | null
  createdAt: number
  lastEditedAt: number
}

export enum ContentBlockType {
  note = 'note',
  todo = 'todo',
}

export type NoteBlock = Block & {
  title: string
  text: string
  type: ContentBlockType.note
}

export type TodoBlock = Block & {
  title: string
  isDone: boolean
  type: ContentBlockType.todo
}

export type ContentBlock = NoteBlock | TodoBlock
