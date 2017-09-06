
import assert from 'assert'

export default function (state) {
  const { document, selection } = state
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 3,
    focusKey: first.key,
    focusOffset: 3
  })

  const next = state
    .change()
    .select(range)
    .insertText('a')
    .state

  assert.deepEqual(
    next.selection.toJS(),
    range.move(1).toJS()
  )

  return next
}