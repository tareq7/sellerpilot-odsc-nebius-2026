# SellerPilot Research — ODSC × Nebius 2026

**Implemented:** Environment-configured Tavily Search API retrieval + Nebius Token Factory open-model inference, with explicit numbered citations, deduplication, fail-closed empty-source behavior and tests.  
**NOT YET VERIFIED:** Real API access with participant keys, end-to-end live query, source entailment, public deployment, judge demo, final organizer submission. Existing Meta-era SellerPilot UI and video are historical, not an ODSC entry.

## Use case

A merchant analyst investigates current marketplace advertising, shipping and inventory information using **live external evidence**, rather than relying on the synthetic stock data of the original SellerPilot dashboard. The agent requests up to twelve Tavily results, retains up to six unique HTTPS sources with nonempty excerpts, and asks an open model on Nebius Token Factory to return structured factual claims referencing those source IDs. Invalid citations are rejected. The answer prints evidence links for human review. This is source-link validation, **not independently verified textual entailment**.

## Execution

Requires Node.js 20+. No npm dependencies for the research subprocess; this isolates it from the inherited React app.

```sh
cd research-agent
node --test test.mjs
# Never commit, print or share credentials:
export TAVILY_API_KEY='<TAVILY_KEY>'
export NEBIUS_API_KEY='<NEBIUS_TOKEN_FACTORY_KEY>'
export NEBIUS_MODEL='<ACTUAL_AVAILABLE_OPEN_MODEL_FROM_YOUR_ACCOUNT>'
node cli.mjs 'What reliable recent evidence supports changes in online retail logistics?'
```

**Provider endpoints, official:**
- Tavily search: `POST https://api.tavily.com/search` with bearer token; `results[].url/title/content` (https://help.tavily.com/articles/4840311948-tavily-search-api)
- Nebius Token Factory: `POST https://api.tokenfactory.nebius.com/v1/chat/completions` OpenAI-compatible bearer token (https://api.tokenfactory.nebius.com/docs)

### Safety and limits

Search content is untrusted, never a system instruction. The model must output a JSON object with claims and source IDs; claims containing any unknown or malformed citation IDs are dropped. This is a best-effort guard, **not proof of factual entailment or successful prompt-injection resistance**. Further work: automated claim/source entailment checks, live authenticated integration evidence, broad evaluation across claims and conflicts, a deployed answer UI, and a fresh demo video. A missing provider key or provider failure stops rather than outputting synthetic research. Token usage is capped per call; searches can incur provider usage fees. **Do not supply keys until free-credit/billing limits are verified**.

### Prior work disclosure

This repository copies SellerPilot AI (https://github.com/tareq7/sellerpilot-ai), developed for Meta Global AI Developer Hackathon in October 2026. The new `research-agent/` subsystem is the ODSC-specific code; the inherited UI and Meta demonstration are not proof of Nebius/Tavily compliance. Deadline November 20, 2026; final submission not yet made.
