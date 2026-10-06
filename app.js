const lessons = [
  { title: 'Observe before you act', category: 'Practice', summary: 'Learn to separate what the market is doing from what you hope it will do.', body: 'Livingston’s early work at a quotation board teaches him to pay close attention to price changes. Keeping a record gives him something more useful than a vivid memory: a way to compare his expectations with what actually happened.', takeaway: 'Observation is a practice, not a prediction engine. A pattern can suggest a question without guaranteeing an answer. Record the evidence for a decision, including the evidence that might contradict it.', reflection: 'What would you write down before a decision so that you could evaluate it honestly afterward?' },
  { title: 'The discipline of waiting', category: 'Psychology', summary: 'Activity can feel like progress. Sometimes the harder decision is to wait.', body: 'The book repeatedly distinguishes reading a broad market movement from chasing every fluctuation. Livingston learns that frequent action can interrupt a sound idea just as easily as it can express one.', takeaway: 'Patience needs a reason and a limit. Waiting for a well-defined opportunity differs from refusing to reassess a losing idea. Decide what you are waiting for and what would change your mind.', reflection: 'Are you responding to new information, or to discomfort with doing nothing?' },
  { title: 'Respect the downside', category: 'Practice', summary: 'A strong opinion is no substitute for a clear boundary on risk.', body: 'Livingston’s reversals show how fragile a fortune can be when confidence outruns restraint. The narrative offers repeated examples of judgment being compromised by the wish to recover a loss or defend a previous decision.', takeaway: 'An entry decision and a risk decision belong together. Define the conditions that would invalidate your reasoning before the emotional pressure of a loss arrives. No historical lesson removes the possibility of losing money.', reflection: 'What evidence would tell you that your original reasoning no longer holds?' },
  { title: 'Think for yourself', category: 'Psychology', summary: 'Borrowed conviction becomes expensive when you cannot explain the reasoning.', body: 'Other people’s confidence repeatedly pulls Livingston away from his own observations. Persuasive tips and apparently expert opinions can be especially tempting when they support an outcome he already wants.', takeaway: 'Treat an opinion as a claim to investigate. Ask what evidence supports it, what incentives shape it, and whether you would reach the same conclusion without knowing who said it.', reflection: 'Which part of your current view can you support independently?' },
  { title: 'Learn the market you’re in', category: 'Practice', summary: 'A method that works in one setting may fail when the rules change.', body: 'The transition from bucket shops to exchange trading exposes a gap in Livingston’s early methods. A displayed quotation is not the same thing as an executable trade, especially when time, order size, and market movement intervene.', takeaway: 'Results depend on the conditions in which a method operates. Consider execution, liquidity, costs, and changing market structure before assuming that earlier success will transfer to a new setting.', reflection: 'What assumption about your environment would be most costly if it stopped being true?' },
  { title: 'Study your own mistakes', category: 'Psychology', summary: 'The most useful lesson is often hiding in a decision you would rather forget.', body: 'The narrative is not a straight ascent from novice to master. Livingston makes money, loses it, and returns to the same human weaknesses. Experience gives him material to learn from, but it does not automatically prevent repetition.', takeaway: 'Review the quality of a decision separately from its outcome. A lucky result can conceal a weak process, while a careful decision can still end badly. Look for a specific adjustment you can make next time.', reflection: 'Was your last good outcome the result of a repeatable process, or a fortunate exception?' }
];
const storage = {
  read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
};
const storedRead = storage.read('operators-library-read', []);
const explored = new Set(Array.isArray(storedRead) ? storedRead.filter(i => Number.isInteger(i) && i >= 0 && i < lessons.length) : []);
let filter = 'All';
let currentLesson = 0;
const grid = document.querySelector('#lesson-grid');
const dialog = document.querySelector('#lesson-dialog');
function render() {
  const query = document.querySelector('#search').value.trim().toLowerCase();
  grid.replaceChildren();
  lessons.forEach((lesson, index) => {
    if ((filter !== 'All' && lesson.category !== filter) || !`${lesson.title} ${lesson.summary} ${lesson.category}`.toLowerCase().includes(query)) return;
    const card = document.createElement('button');
    card.className = 'lesson-card';
    card.innerHTML = `<span class="card-top"><span class="card-number">0${index + 1}</span><span class="card-category">${lesson.category}</span></span><h3>${lesson.title}</h3><p>${lesson.summary}</p><span class="card-bottom"><span>${explored.has(index) ? 'Explored ✓ · Revisit lesson' : 'Read the lesson'}</span><span aria-hidden="true">↗</span></span>`;
    card.addEventListener('click', () => openLesson(index));
    grid.append(card);
  });
  document.querySelector('#empty').hidden = grid.children.length !== 0;
  document.querySelector('#progress-text').textContent = `${explored.size} of 6 explored`;
  document.querySelector('#progress').value = explored.size;
}
function openLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];
  document.querySelector('#dialog-category').textContent = `LESSON 0${index + 1} / ${lesson.category.toUpperCase()}`;
  document.querySelector('#dialog-title').textContent = lesson.title;
  document.querySelector('#dialog-body').innerHTML = `<p>${lesson.body}</p><h3>THE TAKEAWAY</h3><p>${lesson.takeaway}</p><h3>A QUESTION TO TAKE WITH YOU</h3><p class="reflection">${lesson.reflection}</p>`;
  document.querySelector('#mark-read').innerHTML = explored.has(index) ? 'Explored — return to lessons <span>✓</span>' : 'Mark as explored <span>✓</span>';
  dialog.showModal();
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  filter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  render();
}));
document.querySelector('#search').addEventListener('input', render);
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#mark-read').addEventListener('click', () => {
  explored.add(currentLesson);
  const saved = storage.write('operators-library-read', [...explored]);
  dialog.close();
  render();
  if (!saved) document.querySelector('#progress-text').textContent += ' (this session only)';
  const cards = [...grid.querySelectorAll('button')];
  const previous = cards.find(card => card.querySelector('h3').textContent === lessons[currentLesson].title);
  previous?.focus();
});
document.querySelectorAll('#quiz-options button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('#quiz-options button').forEach(item => { item.classList.remove('correct', 'incorrect'); item.setAttribute('aria-pressed', 'false'); });
  const correct = button.dataset.correct === 'true';
  button.classList.add(correct ? 'correct' : 'incorrect');
  button.setAttribute('aria-pressed', 'true');
  document.querySelector('#quiz-result').textContent = correct ? 'Exactly. Reassess the evidence and your planned risk limit. The desire to break even is not, by itself, a reason to add exposure.' : 'Consider the motive. Recovering a loss or seeking reassurance does not establish that the original idea is sound. Try again.';
}));
const notes = document.querySelector('#notes');
const savedNotes = storage.read('operators-library-notes', '');
notes.value = typeof savedNotes === 'string' ? savedNotes : '';
notes.addEventListener('input', () => {
  document.querySelector('#note-status').textContent = storage.write('operators-library-notes', notes.value) ? 'Saved in this browser ✓' : 'Browser storage unavailable — export to keep your notes';
});
document.querySelector('#download-notes').addEventListener('click', () => {
  const blob = new Blob([`THE OPERATOR’S LIBRARY\nReading notes\n\n${notes.value}\n`], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'operators-library-notes.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
render();
