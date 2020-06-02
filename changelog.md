# Change Log

All notable outward-facing changes will be documented in this file.

## 1.0.1

- Fix bugs where checking union types would result in `boolean` which would fail
  the `Assert`. Now all types always result in `true` or `false` correctly.
- Expand the project readme to add documentation and examples for each utility.

## 1.0.0

- Initial release with `Assert`, `Extends`, `Equals`, `NotExtends`, and
  `NotEquals`.
