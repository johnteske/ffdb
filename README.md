# read-only document-oriented database

- good for slow-changing/historical data
- read-only at compile time
- meant for publishing (static sites)

## exports
- read methods (which should be exposed and type in implementation databases)
  - [ ] read JSON
  - [ ] read files from directory (flat)
  - [ ] read subdirectories
  - [ ] read other file types (markdown)
- [ ] write via CLI only (specifically to help with new entries)
- test harness
  - [ ] validate schema
  - [ ] validate doc/dir structure (no duplicates)
