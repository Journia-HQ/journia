import { ContentBlock, ContentBlockType } from "./types"

const blocks: ContentBlock[] = [
  {
    id: "1",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.todo,
    isDone: false,
    title: "Test todo",
  },
  {
    id: "2",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.note,
    title: "Test text",
    text: "Test note super note"
  },
  {
    id: "3",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.note,
    title: "Another beautiful note!",
    text: "Omg, what a note"
  },
  {
    id: "4",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.note,
    title: "Let me in!",
    text: "Let me out!"
  },
  {
    id: "5",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.todo,
    isDone: true,
    title: "Need to finish this app",
  },
  {
    id: "6",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: ContentBlockType.todo,
    isDone: false,
    title: "Fix a component",
  },
]

export default blocks
