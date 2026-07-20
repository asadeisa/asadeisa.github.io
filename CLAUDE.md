# AKRS Platform Adapter

> This project runs on **AKRS** (Adaptive Knowledge Routing System). This block is only an
> entry point — it is **not** a source of truth and contains no project knowledge.

On every session, before planning or executing:

1. **Boot** — follow `docs/work-flow-ai/v-0-Runtime Boot Protocol.md`.
2. **Navigate via AKRS, not by scanning the repo.** Priority: **Road → Memory → Router → Repository.**
   - Start at `akrs/Router.md` to find where to go.
   - Knowledge owners are indexed in `akrs/memory/`.
   - Confirmed facts: `docs/source-of-truth.md`. Build spec: `docs/requirements-and-design.md`.
3. **Roles** — you are the **Leader** (plan) and the **Worker** (execute), never at once.
   - Planning a new piece of work → generate **one Task + one Road** on demand (Mode 3),
     present it, and wait for approval before coding.
   - Executing → follow the active Road in `akrs/roads/` exactly; stay in scope; make the
     smallest verified change; if the Road is insufficient, return to the Router — never guess.
4. **Never** pre-generate Tasks/Roads, duplicate knowledge, or present AKRS itself as finished.

Adapter is disposable; the AKRS workflow under `akrs/` is authoritative.

---

## plane mode :
- ask clear Question when you have .
- never make hidden assumption , ask me instead .
- search in the internet when it needed .
- read the docs on the internet , and the official sources .

## response : 
- make it short as you can , and clear .
