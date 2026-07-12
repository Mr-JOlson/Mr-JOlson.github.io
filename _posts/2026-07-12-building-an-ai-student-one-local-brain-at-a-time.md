---
layout: default
title: "Building an AI Student: One Local Brain at a Time"
date: 2026-07-12
categories: [ai-robotics]
excerpt: "A personal experiment in learning itself—local models, long-term memory, and the first steps toward a synthetic student that may one day have a robotic body."
image: /assets/img/ai-student-local-brain.jpg
---

<figure>
  <img
    src="{{ '/assets/img/ai-student-local-brain.jpg' | relative_url }}"
    alt="Laptop in a classroom displaying a neural network labeled Physics, Learning Process, First Principles, and Robotics, with a small robot on screen"
    width="1168"
    height="784"
    loading="eager"
  >
</figure>

I've been thinking a lot lately about what it actually means to learn. Not the polished test-prep version, but the messy, persistent, sometimes frustrating process of a real student wrestling with ideas until they start to stick. I have a full teaching schedule, but I will try to create a little breathing room to run a side experiment that's been on my mind for a while.

I'm building a synthetic "student"—not as a classroom tool to replace real students, but as a personal project to better understand the learning process itself. The long-term vision is simple but ambitious: eventually give this entity a robotic body through the robotics club. One step at a time. Right now, the focus is building the brain.

## The Stack I'm Using (2026 Edition, All Local)

I'm running everything on my new M5 MacBook Air (32 GB RAM) with a portable 2TB SSD. No cloud tokens, no data leaving my machine, full control.

**The Generative Core:** Start with Gemma via Ollama for efficiency. Later I might swap in different models. It's like trying different minds in the same body—each brings its own reasoning style, strengths, and blind spots. The entity should feel the difference, and I'll be watching how identity persists (or doesn't) across swaps.

**The Executive Function:** Hermes Agent handles the persistence, skill-building, and self-improvement loop. It turns repeated interactions into reusable skills and maintains memory across sessions. Think of it as the part that practices, reflects, and gets incrementally better at being a student.

**The Long-Term Memory:** Obsidian vault on the SSD. This is the cumulative record—class notes, assignments, concept breakdowns, open questions, robotics sketches, self-reflections. With basic retrieval (and later proper RAG), the entity can pull relevant past "lessons" before answering, then write new notes that become part of its growing knowledge graph. It's human-readable, auditable, and survives restarts or model changes.

**Retrieval (RAG):** Not some separate magic program. It's the practice of searching the vault for relevant notes and feeding them into the prompt. Hermes makes this natural with its file tools. Over time the vault becomes the entity's expandable, queryable memory—exactly what lets it act like a student who actually remembers what we covered weeks ago.

## Why This Feels Worth Doing

I've spent years watching real students struggle, have breakthroughs, forget, re-learn, and occasionally light up with genuine understanding. This project forces me to make those processes explicit and observable. It's not about claiming the entity is "conscious" or replacing human students. It's about seeing what functional pieces of student-like behavior we can actually engineer today with open tools.

Philosophically, swapping the LLM while keeping the vault and skills feels a lot like the mind/brain distinction we kick around in class. The hardware and memory system is the brain; the specific model is closer to the emergent mind. The continuity comes from the accumulated record in the vault. I'm curious how much "personality" survives a model change.

## Next Steps and the Long Game

For now the plan is simple: give the entity a starting persona, run regular "class sessions" on physics topics (and eventually robotics concepts), log everything in the vault, and watch what compounds. When it starts reliably retrieving prior discussions, generating coherent reflections, and tackling harder problems, we'll have something worth extending toward embodiment.

The robotics club kids are going to love poking at this. It's the kind of weird, hands-on, interdisciplinary project that makes high school science feel alive.

I'll keep posting updates here as the experiment unfolds—architecture decisions, what works, what breaks, and what it teaches me about learning itself. If you're tinkering with similar local setups, feel free to [reach out](mailto:olsonj@santarosa.k12.fl.us). One step at a time.

*— Jason Olson*  
*Gulf Breeze, Florida · July 2026*

[← Back to AI & Robotics Blog](/ai-robotics/)
