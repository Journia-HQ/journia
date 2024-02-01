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
]

export default blocks
