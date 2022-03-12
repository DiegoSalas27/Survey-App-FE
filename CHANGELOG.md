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



# [1.1.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/edf66070b42f19380e82e9ca4a66ac712f05f740...v1.1.0) (2022-03-06)


### Features

* add authentication usecase ([edf6607](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/edf66070b42f19380e82e9ca4a66ac712f05f740))
* ensure AxiosHttpClient calls axios with correct URL ([73436bf](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/73436bfe521a96451f178301571460801b763063))
* ensure AxiosHttpClient calls axios with correct URL and verb ([4dc1ccf](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4dc1ccf9dbf64580ebf855c29581645611856572))
* ensure AxiosHttpClient calls axios with correct values ([02ba867](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/02ba8676d9744a5a54cb6af4dd00d63f603075e7))
* ensure AxiosHttpClient returns correct values ([1a25de8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/1a25de88ab7a6dd5c992ddb9e322c89752fbe199))
* ensure RemoteAuthentication Usecase class httpPostClient with correct body ([2637a0e](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/2637a0e1ea2c43691ca0efb0b2d2761a9026460f))
* ensure RemoteAuthentication UseCase returns an AccountModel if HttpPostClient returns 200 ([a8e8d6d](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/a8e8d6dbd8ce4c8cb6641e50bcb604c2a09bc53f))
* ensure RemoteAuthentication UseCase throws InvalidCredentialsError if HttpPostClient returns 401 ([ed13c85](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ed13c85357830bfb938b07a6ad779a1173aa3924))
* ensure RemoteAuthentication UseCase throws UnexpectedError on default cases ([6654b0c](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/6654b0cdcb1422d6f537e8d506a0d51a89349dfb))
* ensure RemoteAuthenticationUseCase calls httpPostClient with correct URL ([6fff580](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/6fff5800e8f44a4885f492dc15c17c2e412299ba))



