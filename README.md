# Betül Final Grafana Panel Plugin

This is my final project panel plugin for Web App Development course.

Features:
- Custom panel
- Student name displayed
- Supports Grafana queries
- Custom text and styling
- Smart Analysis Feature

Developed by **Betül Demirtaş**

1. Copy plugin folder to Grafana plugins directory.
2. Enable unsigned plugins in Grafana config if needed.
3. Restart Grafana and find "Betül Final Panel" in visualization list.


    Smart Analysis Feature

The panel reads numeric time-series data from Grafana queries and performs 
a simple anomaly detection using mean and standard deviation.

If the latest value deviates too much from the normal range, the panel:
- Highlights visually
- Displays a warning message
- Shows last value and mean

This simulates a lightweight AI-based monitoring assistant.
