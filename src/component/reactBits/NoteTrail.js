import { useEffect } from 'react';

export default function NoteTrail() {
  useEffect(() => {
    const symbols = ['♫', '♩', '♪', '♬'];
    const existingNotes = new Set();

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // 加入隨機偏移，讓音符更分散
      const offsetX = (Math.random() - 0.5) * 50; // -25 ~ 25px 隨機偏移
      const offsetY = (Math.random() - 0.5) * 50; // -25 ~ 25px 隨機偏移
      const noteX = x + offsetX;
      const noteY = y + offsetY;

      // 位置四捨五入，降低出現密度
      const roundX = Math.round(noteX / 10) * 80;
      const roundY = Math.round(noteY / 10) * 80;
      const key = `${roundX}|${roundY}`;

      if (existingNotes.has(key)) {
        return;
      }
      existingNotes.add(key);

      const note = document.createElement('div');
      note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      note.style.position = 'fixed';
      note.style.left = `${noteX}px`;
      note.style.top = `${noteY}px`;
      note.style.fontSize = '24px';
      note.style.color = '#FCE3BE';
      note.style.pointerEvents = 'none';
      note.style.opacity = '0.5';
      note.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      document.body.appendChild(note);

      requestAnimationFrame(() => {
        note.style.transform = 'translateY(-20px)';
        note.style.opacity = '0';
      });

      setTimeout(() => {
        document.body.removeChild(note);
        existingNotes.delete(key);
      }, 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
