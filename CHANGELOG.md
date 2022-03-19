# [1.11.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.10.0...v1.11.0) (2022-03-18)


### Bug Fixes

* adjust responsive layout ([8be5278](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/8be5278071d433e3b246e55fb24a8bd222ce4aec))


### Features

* add cdn to external dependencies ([c82bdc9](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/c82bdc964b0ad6c2600f77ac3a6d685484f7690f))
* add favicon ([493193f](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/493193f0c553c0a4441fe8d8cd73c9f31ea46dc3))
* add node server to serve static files ([dfcd836](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/dfcd836382e7db761113f7bd3494fcba96ef7717))



# [1.10.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.9.0...v1.10.0) (2022-03-17)


### Features

* add makeAuthorizeGetHttpClientDecorator factory ([3f9f353](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/3f9f353ae15283b950e61fc1c7fa03711edaec34))
* add SurveyList composition ([7cc77b3](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/7cc77b3a4a138f680c3ed784b21be17c2562031f))
* change LoadSurveyList error layout ([fdb4f57](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/fdb4f57ea67d45e4334c9b49a6f7d4c7e3a2d0e5))
* ensure AuthorizeHttpGetClientDecorator adds headers to HttpGetClient ([056d779](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/056d779e24b41c4f3ba1808a1f06c6a0ce0cf55c))
* ensure AuthorizeHttpGetClientDecorator does not add headers if GetStorage is invalid ([abe54c9](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/abe54c976c1b49c7cbd923f792ebac610784b4bb))
* ensure AuthorizeHttpGetClientDecorator returns the same as HttpGetClient ([a0d04b0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/a0d04b088a0405fedc779867b24ef1abe0c0f313))
* ensure AuthroizeHttpGetClientDecorator calls GetStorage with correct value ([ce201d8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ce201d889826cb654837692b8bde6b5b6481ea31))
* ensure AxiosHttpClient calls axios with correct values ([a67635b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/a67635b5f33f11189895107b7f20d9fcb48327da))
* ensure header renders username ([614a024](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/614a024ccf9203ae4d871fe73da07a5e4c8dd468))
* ensure LocalStorageAdapter removes localStorage item when value is undefined ([66d6aa8](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/66d6aa8ef8723d72fb538c83c154660337fbd495))
* ensure logout calls setCurrentAccount with undefined ([558173e](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/558173e032e10211843132c572fd846efce1e6df))
* ensure RemoteLoadSurveyList maps remote data to domain data ([0affe44](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/0affe44d18ee1f83d5118b4a714249af80c57517))
* ensure RemoteLoadSurveyList throws AccessDeniedError if HttpGetClient returns 403 ([4d1517a](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4d1517a77f453fce6bfa69141e667a90a9f4e0b4))
* ensure SurveyItem component renders data with correct values ([2af11f3](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/2af11f316f902b0ba65d6b51f8367b79c0ee7a7e))
* ensure SurveyItem component renders icon and data with correct values ([4884c31](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4884c31400b33b5589d9b12ca9fc4b0f8fb54201))
* ensure SurveyList calls LoadSurveyList on reload ([4b80e7b](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/4b80e7baa15971a08fe2c5a27bf056918513b92e))
* ensure SurveyList component logsout on AccessDeniedError ([62c5461](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/62c54610b90bc40b08bc4274fbcda43ee73987c2))
* ensure SurveyList component renders 4 empty items on start ([964a5ae](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/964a5ae6e98914c2b29592612743a8daea420e25))
* ensure SurveyList component renders SurveyItems on success ([5a28fe4](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5a28fe4380c4e7fbf254c2ab7c379d79e0531fbc))
* ensure SurveyList renders error on failure ([5f7ef62](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/5f7ef62fa5be917eed5f390806e922ab6ed14b35))
* ensuure SurveyList calls LoadSurveyList once ([15e0eb0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/15e0eb017c9b5c393c73fb04f902a0e7e674341d))



# [1.9.0](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/compare/v1.8.1...v1.9.0) (2022-03-15)


### Features

* add getCurrentAccount to ApiContext ([ad553f4](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/ad553f4a5d6cf5fda0e46137f641675fda7b06ad))
* apply PrivateRoute to SurveyList page ([380b717](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/380b717922ceb0175cafe4ccd71cbffeeaa24b42))
* ensure CurrentAccountAdapter calls LocalStorageAdapter.get with correct values ([be7c576](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/be7c5767fb1ec4297aaf52aec0efa9587086c53e))
* ensure LocalStorageAdapter calls localStorage.getItem with correct values ([0bfcb21](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/0bfcb214c24600f549723c574b2d56f16756d1f9))
* ensure PrivateRoute component redirects to /login ig token is empty ([6480742](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/648074262b799d323a60819ffc5d1707bea7d6e5))
* ensure PrivateRoute renders component if token is not empty ([d5bce60](https://github.com/DiegoSalas27/ReactJS-Hooks-TDD-Clean-Architecture-SOLID-e-Patterns/commit/d5bce606b12ae67c698d46d1e51c4fa278b91ac6))



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



