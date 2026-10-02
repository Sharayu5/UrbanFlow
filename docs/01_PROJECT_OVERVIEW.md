# UrbanFlow - Project Overview
UrbanFlow is an AI-based adaptive traffic signal control system designed to manage a signalized intersection using real-time traffic information.

## Core pipeline
Traffic input -> vehicle detection -> tracking -> lane mapping -> traffic-state estimation -> Lane Agents -> Project Manager Agent -> decision policy -> safety layer -> signal controller.

## Objectives
- Reduce waiting time and queue length.
- Improve throughput and traffic flow.
- Adapt signal decisions to changing demand.
- Maintain fairness between approaches.
- Keep all control actions inside explicit safety constraints.
- Produce reproducible research results.

## Initial scope
A four-approach signalized intersection, with simulation-first development and later computer-vision integration.
