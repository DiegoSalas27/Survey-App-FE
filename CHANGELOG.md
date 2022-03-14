## [1.8.1](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.8.0...v1.8.1) (2022-03-14)


### Bug Fixes

* fixed compare field validation test ([e560aa0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/e560aa0375c0b9a8085915e028e5879cd1156d88))



# [1.8.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.7.0...v1.8.0) (2022-03-14)


### Features

* add initial survey-list view ([4887f8c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4887f8c0de105f2517314a016d07084f36825693))
* add LoadSurveyList usecase ([dce709f](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/dce709f743fefa833b33dd4c90d9f3314195b532))
* add skeleton shimmer effect ([52b8897](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/52b88971e7dffb031ab7a61269c6b3689829b3ea))
* add survey icon to show status ([80d03bd](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/80d03bd938592f4d24b595c116f76abdcaa292b4))
* add SurveyModel ([11f3ef9](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/11f3ef95e9bc2379d628027a7b87143775e56793))
* ensure AxiosHttpClient  returns correct response on axios.get ([dc9139a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/dc9139a899b57574adae6853e80491df30365ee6))
* ensure AxiosHttpClient calls axios.get with correct values ([65b523c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/65b523cf05cb255baf24fe5a67e177f5dba4d7d4))
* ensure AxiosHttpClient returns correct error on axios.get ([a239153](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/a2391537a51b113980b0550ea3a0c8c87d653db0))
* ensure RemoteLoadSurveyList calls HttpGetClient with correct URL ([4914f1b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4914f1b0d8b4b73570798eb082643f7e698f1cda))
* ensure RemoteLoadSurveyList returns a list of SurveyModel if HttpGetClient returns 200 ([31897cc](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/31897cce2d499d6ecd08e1677cf937233cbb3214))
* ensure RemoteLoadSurveyList returns no content if HttpGetClient returns 204 ([ec138c8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ec138c8fbedecd9f133fccd1611bef2c6108b998))
* ensure RemoteLoadSurveyList thros UnexpectedError if HttpGetClient returns 403 ([ea2c5db](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ea2c5db066f6b6efb7c31bd1a3df9790abbfd968))



# [1.7.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.6.0...v1.7.0) (2022-03-13)


### Bug Fixes

* ignore cypress folder for tsconfig ([acde551](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/acde5515b9e990888316dd3fa19460c21878807c))


### Features

* ensure LocalSaveAccessToken throws an error if no accessToken is provided ([1565524](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/15655245e3821d57ba2f6b09ae14ee085b429597))



# [1.6.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.5.0...v1.6.0) (2022-03-12)


### Bug Fixes

* delete style import in Button component ([4c0dd81](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4c0dd810c235523117e522243279ce23ea8d786e))


### Features

* add AddAccount to index ([ace2e57](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ace2e57805c5bd584abe52f52ca4e5bfbb6075b1))
* add AddAccount usecase ([24d209e](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/24d209e1576accf28ce467338d2d345944ee6ab3))
* add SignUp Composition ([5f53785](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5f5378594a5d4f9d557156df63087a3612188172))
* add signup view ([20127d3](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/20127d35f21c5ecd55fccda6430d47d781344cb4))
* add SignupValidation factory ([b1c6298](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/b1c62980e3954f38134ae320e76caca782546090))
* ensure CompareFieldsValidation returns error if validation fails ([9101b9a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/9101b9af4df042a11b10c0164901a983172ee1b9))
* ensure CompareFieldsValidation returns falsy if validation succeeds ([586d1a9](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/586d1a942cb222b0da95451050709c6a64810382))
* ensure Login component shows email error if Validation fails ([babf220](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/babf220490bdbbce6e2e0a9f803194cf0d733f49))
* ensure Login component shows password  error if Validation fails ([12b1b5a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/12b1b5aac4790487a942b2fd3d812d9e9b1eabd5))
* ensure Login component shows password confirmation error if Validation fails ([b27f833](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/b27f83389332fedc5822aaaed4be0ebc458aee25))
* ensure RemoteAddAccount throws EmailInUseError if HttpPostClient returns 403 ([ec7787c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ec7787c5a6154071ba833a5a64b12eaff172b56f))
* ensure RemoteAddAccount throws UnexpectedError if HttpPostClient returns 400 ([3b32d70](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/3b32d709bf80001bb2f16c9daf1719a1de05af80))
* ensure RemoteAuthentication calls httpPostClient with correct url ([2c211b1](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/2c211b1c738fbc8d8dbab1dd829d954f17e67241))
* ensure Signup component calls AddAccount only once ([2a7db8f](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/2a7db8fa23e17a82e18505aef3bde5ab3df9a14c))
* ensure Signup component calls AddAccount with correct values ([d846990](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/d846990f44da65e80f9e4255d7b9d00d8143ae8f))
* ensure Signup component calls SaveAccessToken on success ([d2cb16d](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/d2cb16d04719e852a2ce4dde354d7a60fd9c57a3))
* ensure Signup component doesn not call AddAccount if form is invalid ([44e845c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/44e845c3969ba29106990e80a41ac080652cf670))
* ensure Signup component goes to login page ([1cff2e4](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/1cff2e4820d8ffec946663d1e0b3fd0cf9adf7f2))
* ensure Signup component presents error if AddAccount fails ([e6e307d](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/e6e307d56d2f0925d7505af7b12a6a638c1a5670))
* ensure Signup component shows name error if Validation fails ([d1c1dbd](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/d1c1dbdcb1043ea2ef611f1545bb3b0e37da64eb))
* ensure Signup component shows spinner on submit ([7f154b5](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/7f154b5c275b3053e6abc6769eb33c3fe090a302))
* ensure Signup component starts with correct initial state ([5f5bf05](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5f5bf05028018328795e549bf60e62548e5acb52))
* ensure Signup enables submit button if form is valid ([9eef501](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/9eef501bd54067bede62a5142496593de33007a4))



# [1.5.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.4.0...v1.5.0) (2022-03-12)


### Bug Fixes

* change webpack env var to use JSON.stringify ([115092d](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/115092d1db63ed254c127e897dfd6f3e581c0180))


### Features

* add SaveAccessToken usecase ([9e6e351](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/9e6e351630490548c16f57a93b05ce2785cdb9b1))
* added continuous integration with travis ci ([7ab1eeb](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/7ab1eeb58e3ed3734f54a5f6e8bad408349599c8))
* change login composition to add SaveAccessToken ([40f8886](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/40f8886aff92e3a64a15371a05592ac8f50701aa))
* ensure LocalAccessToken calls SetStorage with correct value ([8fe4778](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/8fe47788b456114b54ecfb64a6df93d9f0a677b3))
* ensure LocalStorageAdapter calls localStorage with correct values ([d313500](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/d313500b370e6bace22f5a2611ca58f65225f27b))
* ensure Login calls SaveAccessToken with correct values ([9c4a3fd](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/9c4a3fd58fb8505f9e978bf61823c96b971cc729))



