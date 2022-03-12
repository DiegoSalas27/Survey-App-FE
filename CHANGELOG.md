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



# [1.4.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.3.0...v1.4.0) (2022-03-12)


### Bug Fixes

* change AxiosHttpClient to handle exceptions ([863ebbc](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/863ebbcceb78702951099a84f1c89f208689af03))


### Features

* add env var to API URL ([3408fe7](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/3408fe724ed65ce41e9545a60bf21d8ecc335516))
* add Login composition ([8af0a00](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/8af0a00086f99e6ef5c2f5a9879e05d031571c2f))



# [1.3.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.2.0...v1.3.0) (2022-03-09)


### Bug Fixes

* ensure EmailValidation allows empty value ([74859ca](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/74859caef3ec5e765757432a766c14cb1c7e2a64))


### Features

* ensure EmailValidation returns error if email is invalid ([5270af0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5270af0ebda3ae504abac8146481f45daf4f73b0))
* ensure EmailValidation returns falsy if email is valid ([c3793e0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/c3793e001426438e01310df7355f7fe5b9c26379))
* ensure MinLengthValidation returns error if value is invalid ([3d8a5a8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/3d8a5a83da2fe066f8c9a500f0fcec9f3cd573a2))
* ensure MinLengthValidation returns falsy if value is valid ([91700a7](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/91700a7b4158dd7b9617c0401f28e05d0c3a9bc7))
* ensure RequiredFiledValidation returns error if field is empty ([b7fa5c8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/b7fa5c8d9dd268170b67b3920997fb306e678265))
* ensure RequiredFiledValidation returns falsy if field is not empty ([6dfd0c6](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/6dfd0c670278edd640aa048ca97e0993395aaf7d))
* ensure ValidationBuilder has a min-length  helper ([fb8a334](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/fb8a3345ef21c4dc16ae07e02ac4fb361d91e638))
* ensure ValidationBuilder has a required helper ([8307d33](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/8307d331c116df6274b39079f57dc6a4a1d97597))
* ensure ValidationBuilder has an email helper ([e6d6e8b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/e6d6e8b2a8e298f096e629ee5e2845a80f39c475))
* ensure ValidationComposite returns error if any validation fails ([a033cce](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/a033cce0d15e1b42c876a06fc60ce34a214ab5bf))



# [1.2.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.1.0...v1.2.0) (2022-03-08)


### Features

* add app router ([285d994](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/285d9943fb33b09366d31af36cd8c93138217fd8))
* add index.html ([f954e2e](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/f954e2e1436d609e89ac67287a81330500d943f8))
* add login view ([812748a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/812748afa086002e4bf7f0aeb1016ca566105169))
* ensure Login Component adds accessToken to localstorage on success ([6d51241](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/6d512415e2ccf98d252bbab4d61fdc93986ccb11))
* ensure Login Component call Validation with correct password ([0c75df0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/0c75df056e394ca49c8b933e8e77463f7c065801))
* ensure Login Component call Validation with correct values ([971823c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/971823c8edb4f44d774a17d3bb057ceeb8462653))
* ensure Login Component calls Authentication with correct values ([42fa156](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/42fa156108093059b69ab8ab6263cac91bbfb530))
* ensure Login Component does not render Spinner and error on start ([7f5d7cb](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/7f5d7cb3d54891aedda310e89e52464b85013ea6))
* ensure Login Component enables submit button if form is valid ([24885f7](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/24885f76e6bc9386ad97a9ed608eb98853596e60))
* ensure Login Component goes to signup page ([5b8f42b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5b8f42ba0b2f7a4d5db0d9b84bc56d48e6c1d7fd))
* ensure Login Component navigates to main page on success ([36c243a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/36c243a65b72c4e47f606c8435a4ac5fc0d7dfab))
* ensure Login Component presents error and hides spinner if Authentication fails ([c7176fb](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/c7176fb76b5b75a0a6ed4801ca59d53b0e2b25a1))
* ensure Login Component should call Authentication only once ([6ce54fb](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/6ce54fb258faa619b09ef1427509a54b32d73d7b))
* ensure Login Component shows email error if Validation fails ([7d56b3f](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/7d56b3fd76ee092c9a9c49a0c15a0a2af70dbe31))
* ensure Login Component shows password error if Validation fails ([4d2bd4b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4d2bd4bd7ca00e85d72778f330cf19b357f1a6fd))
* ensure Login Component shows spinner on submit ([1269131](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/12691318900326d4fb7bde568a64c5d7a806163a))
* ensure Login Component shows valid password state if Validation succeeds ([f271ff8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/f271ff80fee98d9d6a8f31cd443bbdaf59b16768))
* ensure Login Component start with initial state ([c8fc92b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/c8fc92bedcf294968ee9bc8da4e2678a44d1b599))
* ensure Login starts with submit button disabled ([0e8f70e](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/0e8f70eac980c12b7edb1d34f81499e636ed78eb))
* prevent Login to submit form if its invalid ([c20584b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/c20584b36315e5f72cb971cd4ff73af68b1b5deb))
* remove autofill input on chrome ([b702108](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/b702108a277b446cbfd58f25dccda3696e8c63df))



