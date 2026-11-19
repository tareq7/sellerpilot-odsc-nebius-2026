# ODSC x Nebius research-agent demo

[Watch the 2:24 offline research-agent walkthrough](odsc-research-agent-offline-walkthrough.mp4)

This video documents the new research-agent architecture and 15 passing offline, mock-backed tests. It is NOT a recording of real authenticated Tavily or Nebius Token Factory calls. No live provider keys were available for the recording. The earlier Meta-era SellerPilot film is historical and is not used here.

Reproduce the tested behavior:
1. cd research-agent
2. node --test test.mjs

Live provider validation requires valid TAVILY_API_KEY, NEBIUS_API_KEY, and NEBIUS_MODEL and verified, non-billable credit limits.
