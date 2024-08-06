'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "277b8783ffcb15f2000813047ea4f135",
"index.html": "86234735e4ebe7f82c2854d70c5c3413",
"/": "86234735e4ebe7f82c2854d70c5c3413",
"main.dart.js": "2648a263816404c07343073035352cb0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da643cd46508e87992682fd2b970eadb",
".git/config": "583c6b92596d829b21d1ba92f842bb69",
".git/objects/61/e7137448a24e739b87fea8b4075e82805bfb30": "3d49367c7fcf51d65c277dd36b4b90b2",
".git/objects/0d/894505e2d5cdaf6edecbd7e86c04057f06ec26": "90700370b8e96e6989b34ab22df4b5f9",
".git/objects/3b/365ec42e31ba1be04b2cbb866557fd321cb3f8": "ba69819d74c87648e6d330a816040cf3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/40ba5b4529ae07b15ec41049e8c1000d839c76": "690ab457acb31a5c077cfe63aa9a00bd",
".git/objects/03/e5642762ea152afc2fbe13d2292fa14e288876": "5d948f4aa508e9de2271edaa7c6f45e5",
".git/objects/9e/dadebabb8561b712abf552134aa4af2ea68faa": "d88604fa5bf398f371b6753618dccc83",
".git/objects/6a/a349f31e4235db16398fd053b62f7f0816cb6c": "959d78a617869b9f9626a7354cd7dde4",
".git/objects/69/103c95fef83c3dab69b25e382e06be845d97cf": "e74e26bf50165f8c84eacde156c83e76",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/814324c53ad9a2cd39d7125fcfae80282304e8": "010687f760837b5f15cfb034c8701f48",
".git/objects/5f/0bcfb41e7a8bd2b203046de441c578441d4054": "eedaf87527b427435643a63bce36a37e",
".git/objects/33/0677eefc0100445336dd6e603d61a902cb7283": "3b7465f0882b9cff0e2db4390ab7687a",
".git/objects/9d/3eafb68fa7f82a8901552b84a6bfda1f64cfbc": "2b0ca9f207275b4b234e8e426286f143",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/1ee3e7e5d0333b738366e3675d39d3efa79edb": "2567450933a58244fdfa3183ec1e52ac",
".git/objects/b4/35090a95b9c3de00b8491ea616b5b3957e85a3": "acf1bde94b4c173ba99af4dfc864dc60",
".git/objects/b4/b6968218b412131a0aed5dd75741613e8cfa51": "849754fd3e8656bb1d169fefb6d3414c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/45cd45eb84e5e80f15a2b5720d94631b5a3c98": "bf4703883d887862a957c652b5cd5693",
".git/objects/ab/4bde2015292b5369a79a3c7cb0328799bfd238": "38b7464a5a3820834b2a38eea0d33ac5",
".git/objects/ab/3bb78bceb57222dcaee2f94e09817945e6339c": "92bbc3fac0a03e38a38c54d8cfe8da5b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/6566bb6debb77599dd9a0974a729d8c632911c": "94a9380d31876f33b1ec1a564dfa9223",
".git/objects/ee/43d319068837643b36d543eee8e976986e73bd": "5e091613402f088c1cb9b40b44669f6f",
".git/objects/fc/03f7d34faa143dada729c25ec01244a99dc6c7": "9de3b38203230a4fbfed5e8e12f6c012",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/180af48214607391963a3d70fac4235173e51b": "836aba6dc0ddfc84c1b45ea70a1ad48f",
".git/objects/fb/6d3c0d3a925369a72611f1c4576f49d269e31b": "535afcda38394e9ec690e03e174a6e16",
".git/objects/ed/dbf1ea5c967b3891467b92c4f13cf3bb4abf00": "6e592564d7f8826ef36d7954770b8578",
".git/objects/4e/4ba09dc592ac79fe24daaf084257a99e6908da": "2bb865e05bda26073df89d43691f1f55",
".git/objects/4e/0e8c39071fe1641d454cd56edd9ab86c7a6d97": "839a2c5f6a43db6b9a4b28913928f23b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/f99c3e16a074c67ab3cec9522611971c5a8bd1": "c1495dbc39042810cf232f48fdc0be3c",
".git/objects/7c/e2fc7da7f6df7eb28cc21a01157f03bdeb9d50": "6b5278acf75cf93ba441d5bc5fe32998",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/67e0a6d7de96085ad31d1f2088744114d83513": "dd8171bdce307e123eef4b2fb8448bc6",
".git/objects/1f/055bfd0f380c00baf002f9367304632afd6eb7": "61989bdf581f1b2ad8d6cac696dfe356",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/d87ef9ecb8902a1efc0dd3ed25045e977b2f72": "8a51dfb0f17763221c7bfde4a0479258",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/4d2d5b6b9fa7e54432fae4dd6d8573b34d0305": "294d836be5b17effb36b05c18091177d",
".git/objects/19/3c48ddac1005226dda10c47f380e795ddf5b9a": "67813f31a2e2d0a2616c9056f6306d93",
".git/objects/21/f61dbc7be9c252d01b9fc10cd00cbfc1f90cda": "804931907eee544babcbfd1bf358f4e2",
".git/objects/43/1ce40e543a084e608fec4150deb1d5158511b8": "423490785d551624ef6d84c98046f6f6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a48a758b062888cfafcbaebb1022b9813e73d6": "9529893f8d0e6bd8d8f036419a793d49",
".git/objects/07/dc47b2d87b0e5c4e227de047cd720e3a1dc12a": "393e4705797b76f32bf6c5b4b7abd648",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/7ec8f45377e946f6024127a29c0baf4673ef3d": "f5c81794868bbaac6f99a2acde2ffd22",
".git/objects/6e/ec960f42480026e9834f220feec6d2f3cf6f8c": "b455e6de2ab9f1e85237ce9ff5710b70",
".git/objects/6e/ff7896897ab0676ad770d80a73308295ba526d": "2234a746001fa2a50497de5a502cf290",
".git/objects/5c/033f48a1be3194b65e3af19132fd02182b1188": "20d9dd29b95d4603ae92a2ed08f2dfa5",
".git/objects/09/886a298ece49d0d2546d8e3ff90722c5a6f1b7": "acc72932ac87e6bcf66ff080b07de099",
".git/objects/96/ab46408136fdd31e1f6243a8c300df3ae36c68": "ba209e777e0d04ecdcfceb214902b874",
".git/objects/96/aa8ff72488b9894ddf712690be9f2a6843e2d6": "97cf32f3c4519b58ed8f6ff7d0d16dfd",
".git/objects/3f/9536fab2f60414b23a726b7f1ec9fcda97edc2": "3923abb9ea7b669c92321461c80016ee",
".git/objects/99/c1e326bd6f7226a1a9cbe333eb2d9520c06122": "32e89c75a33d73097c35ac0f7a0e57c2",
".git/objects/55/a00ec923ee72dcf72129fb1d55d0ee8287db4f": "e4648263dbc93792af677ad95a98a18e",
".git/objects/0f/96471d9c9248501f8c87a9944a2012c1751326": "f8e3ab6aa93c35fb2b5ab82754fb4e1a",
".git/objects/d3/52860b3918b88204b64206a2f0ab65f662484d": "602a5db900d40b4af6d29dda4ae46fde",
".git/objects/d3/bf1d2e01e351bbf5d87ccc94f4d7975d018d3c": "5d6e25a8d29c8f6f41b93062e23bd783",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/9d8402d3dd267bd0c23431c7018360c4191eff": "4d4e0d8b8ed7f499187ead981b34814b",
".git/objects/a0/cb597b151b87228ad6b7d2ad7d27f517eb3e54": "75ff2ce29fb4ba5c90a0e21a81d81080",
".git/objects/b8/6bd0effad94af6b5c5a23c5450b27935e053a4": "c0bab43b7778b2fe48ed04b6e6a9bf93",
".git/objects/b1/bc60adb8a6068e852816a501e9130f38c98da2": "e8b6c2359b9b24b3e83680227bae4337",
".git/objects/dc/5af0b756159bf541ea236d4717714c69d81a23": "9b0f1161c970c3b4d5fa510fa520de40",
".git/objects/d5/5fa6802fc77565028a66308b4154e569bb3df6": "97424c36757904a6d8865f431ee4fbea",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9a0ebf1d1b1185e16cf9f94c2ed98f7026a2a8": "4e8ada5fca4209867195adbfbcd711f1",
".git/objects/db/a9580caeef099a4a86706ca2ca91d678662484": "96a24ec86d5a6dfb68fd5520c3e13a9b",
".git/objects/db/deb91bc9951b570ff54057a647f534db696776": "386f5b802ceaaba651f25bb2f357ef11",
".git/objects/a6/202e1fce640d5e7e07f1573b8f8cdc53298954": "d525cf4ce0c76e90c60116c3ee45f9d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/e85d7a0d9f7b441037c72d9d9e02bdf7c45f27": "8b2f2441e47eaf7472b9191de70b0152",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f0/eaff08d1559c25686375e254c0764b2a9aa148": "3ee90bce216799bca398e330e61edddd",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/4c137ebd563be63a64ba4e84cd4d5ef11109e4": "34aeb51a5493fb11ebc6f3d9ab6107fa",
".git/objects/e7/0dbd86e397a951e6a5db9880f97fe4befa4756": "2fc18e1e29d37f2e971dee7d0a086109",
".git/objects/e0/6a02975d69d8c45b4d220a868ececcd070e9aa": "13e8c2856aee3ad11eb92c23303ffd24",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d67021bbe1300de044dafa3875f54a2e818a3d": "301f83602a23fed054d1dfc13ba5e4e4",
".git/objects/79/624c211a842c648eed76606c4f4e8bae7ab0e9": "bc9ce4965283e04b43dae1690b632d7f",
".git/objects/83/65346a679a99f7a3134448239bc69bb48614a9": "55ea2036bff005c0cf7a8597d97da4d0",
".git/objects/1b/c1f31553e24fc735068150827e605f7a126538": "56404d0f6bb3f6ef6dcaadd5f9cd3747",
".git/objects/48/a02ee130124764ca98affa932bec9d1857c3aa": "ec489a41d2a38b26812089d8045c815c",
".git/objects/70/8c9d930236d62a4b96774611a856c4a9409a33": "b796bb4260b0c50bc86e1095abccbccd",
".git/objects/1e/667fbe7a0b2c9b0b6601fc5387c87e0e6eacd5": "f6f4c2dbb45f7a956d6693b06e94f404",
".git/objects/1e/3a6430f9ff522c52458727f2ad79fbc3ecdeb9": "1b035eae25560de1a55515bc00d6532b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/c745f93d1d1379537ead571be934fd93c7b378": "1dec8bf27337637bf8715fb2c92158fd",
".git/objects/23/4874f9b585483ced19046639d5f24c4ad5b228": "6c3d988834d10145a05b9d8dc67144b4",
".git/objects/8d/b021af67c9828439961d25842ebd5ebbf82c82": "7f8b5ac8167661cd5b59ce3374e21e3a",
".git/objects/8d/df5d21af0f36bc9b23ad6458eb36805843f492": "62e3c81384ca8dbef5b2e4c45099ac7e",
".git/objects/85/49be0fac21b3d92645edeaf9b5e4ee58d672ce": "c3501acd7a43787111a1d7ff485e82e4",
".git/objects/85/2d117b363c1354336c712df69ed858981ff871": "117070c1aabe0e46c2dbce77a39c563f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/3ac91c9f1d23bc0fdb18d8daa10b868599b26c": "164d3aaa422c52e9a3d310bc4ee129f4",
".git/objects/1d/62932d14ae47d6f7a299ad0793ff50518a1a7c": "9079ed667b7f33208768c8bcbe979702",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/8e9bbbf335c4ea3964c518edf9feaa4cbbb467": "7de5d9ec471b2b5370b096e2d6f90d62",
".git/objects/8b/460a1c3c9dc72dfae97231d4874ed252450029": "1252c93f5d3974bc78f18e84e619de89",
".git/objects/8b/1f99b4937e6daa3449b62c737bfc22b026e39f": "1ebac592c5cefbf562977246433d6528",
".git/objects/14/31d2d81ff786309fd8bbe50444b6a434f015ea": "7c587586d2628768f73dd85fa464bede",
".git/objects/8e/25dad10ebc2d915648936342b76ce0fab98030": "d1a6aa9330cd712a1f69ba58b913a521",
".git/objects/8e/5591911c28f0a392582c20c6dbf25c3822b54e": "7223096092e5898f745f42587e57f021",
".git/objects/22/9284e3f0aff52b7d3b29cc73a7196635341b16": "085af8f54274c1e8ed27f5e95f54ea8d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/774cf44d299cebe5b77f5b5e4aba23d3233d11": "225d0030f428d280269a195435f079a7",
".git/objects/25/8d691be7d92cf53ca4daa71cf715c290d29f2b": "29d7b73d4901e80b3a20c194deebf1d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db43d15a8391edbfdb705c55a7eede4a",
".git/logs/refs/heads/main": "dfe9cf253f30bd658d4ba3cbe3fd5487",
".git/logs/refs/remotes/origin/main": "aaedf4d7d706ce184cd92e5ddcfea704",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bbdf3663459367aab39a8141d8d7054f",
".git/refs/remotes/origin/main": "bbdf3663459367aab39a8141d8d7054f",
".git/index": "a7c7650d6ec92c6930408295114a8477",
".git/COMMIT_EDITMSG": "b8639a9205c5c425a067980a4cd7278c",
"assets/AssetManifest.json": "119e3d3ba45bc5604b18053bee9e7b76",
"assets/NOTICES": "def9a160d1acc383a57987899c5d9875",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c150899f3a23dedc9a46b63c2d714d76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eaa622ad6fa29ede77328fed863f1811",
"assets/fonts/MaterialIcons-Regular.otf": "5deb65fd6563828ea096bd9db911a9d3",
"assets/assets/images/land.png": "0e8c6a5eca5fa74ec2cebde8b0a35459",
"assets/assets/images/our_logo.png": "12c48e02789d570004bed182474c5e64",
"assets/assets/images/avatar_pirate.png": "5d9a3b03c2883fb334fb95d59f2f3e5f",
"assets/assets/images/avatar_man.png": "adf1db26f262b5f1ad700265f1ef2411",
"assets/assets/images/island.png": "638666e1836921b04ef9d78f93254bc8",
"assets/assets/images/bottom_borad.png": "cbd94e8cfaff0d3156424ca68551e199",
"assets/assets/images/pause_header.png": "e4218efc1b23f49c66a31d191925e12a",
"assets/assets/images/avatar.png": "2fc5365b8af869adad6874a4bcccb626",
"assets/assets/images/logos.png": "e673c20c3dc0a5f0a4f5a85cc3592713",
"assets/assets/images/tree.png": "7606d0d1852e8c59b17fd616d0d0bd43",
"assets/assets/images/logo_shiba.png": "3d5e612cc7256fc86edb6830de24026a",
"assets/assets/images/question_label.png": "0580b9631ba6c606c927bd92e7d516cf",
"assets/assets/images/board.png": "4e75201c4358935f3a77139b7385a8cf",
"assets/assets/images/logo_info.png": "90a9a394f2fe4bcbd1d2689f1ad4cd3b",
"assets/assets/images/logo_haifauni.png": "9e86e1880cd70cbce9b0e85f1fdad16d",
"assets/assets/images/open_treasure.png": "9e74dcf9ed3adf4c3317d10ebb9a9084",
"assets/assets/images/pause_board.png": "d1151199a881ba262b8d9b4b5f64ad9f",
"assets/assets/images/button.png": "ae4b9a0cfdaf9550de0dc4c55614d405",
"assets/assets/icons/sound_blank.png": "b23fcfde410b6049f3f7c3335e34cf6d",
"assets/assets/icons/Group-32.png": "f7567386410c1a6f2a0678880a956a68",
"assets/assets/icons/alert_blank.png": "6489f85bb2cfb35a76abaaa41ef2f521",
"assets/assets/icons/play_fill.png": "68731def10b89bdd595e2b6b6fa5a0d0",
"assets/assets/icons/Group-33.png": "423f9168687606cffa7b48eb27487322",
"assets/assets/icons/x_blank.png": "787e6c6369d0ba58ee6ef6ad9fa0631b",
"assets/assets/icons/Group-23.png": "c959a402b6a9c204263130c5a5fa0331",
"assets/assets/icons/pause_blank.png": "4763d3dea0df49fe832b87296d7628b7",
"assets/assets/icons/Group-22.png": "655d275dc303737ea46c35afb3ab0a62",
"assets/assets/icons/pause_fill.png": "3cef26087866a09d26f5da4b28b0908b",
"assets/assets/icons/Group-20.png": "54f23421837971ad9eed60ecbae04883",
"assets/assets/icons/Group-34.png": "cc059f41e513ff60b6a37604efdbf0cd",
"assets/assets/icons/x_fill.png": "cc904642af9400468a65a9dceb581b55",
"assets/assets/icons/Group-35.png": "4609f22836dc80fff48ece5ca02462ae",
"assets/assets/icons/Group-21.png": "70cb0d7829295bb571eb29132194ea53",
"assets/assets/icons/Group-46.png": "608d261ab74ee36fb187800a136e8e33",
"assets/assets/icons/alert_fill.png": "9c5921b5c611bcd34030147bbef1c911",
"assets/assets/icons/msg_fill.png": "77933dee76830dd5bab415ba470719d2",
"assets/assets/icons/Group-47.png": "293911ab2b2dbbb9105cb1bb41442cea",
"assets/assets/icons/Group-45.png": "02582aaaa7ae2dd7abb89192c86c9aac",
"assets/assets/icons/Group-44.png": "ea88dba1f43095ce0d11aa2f6644e004",
"assets/assets/icons/menu_blank.png": "fe995270336b0c8a78b52b388df53048",
"assets/assets/icons/Group-41.png": "14fc1884c3c2bdb4de90741e8694da01",
"assets/assets/icons/person_fill.png": "8145b1b50f26e3b4e220df3679995fda",
"assets/assets/icons/search_blank.png": "5ec816aca62b4fa5b5adbeacb5df1378",
"assets/assets/icons/favorite_blank.png": "27464b86ae39589beb88c85fe97c9fa4",
"assets/assets/icons/settings_blank.png": "1e5d08ff531051c7248ff1dcb2cb1482",
"assets/assets/icons/play_blank.png": "83caf0f588e7a24bffd8c8579a627e85",
"assets/assets/icons/person_blank.png": "a9e804a075781580d717cb4c1c814f05",
"assets/assets/icons/menu_fill.png": "d24b86b715c751cbaeac7bf6573e50d9",
"assets/assets/icons/Group-38.png": "06641de0507d9b16c947a5e7abbc426b",
"assets/assets/icons/Group-10.png": "257ab43ba7f7fe5d8bc86977c8ef2a0f",
"assets/assets/icons/v_blank.png": "611b15df1392989d7ed2d05065287324",
"assets/assets/icons/settings_fill.png": "adf3d382a171228eec19a5a2944b1418",
"assets/assets/icons/Group-11.png": "ceb65dfa32e561113419bfb35cc19f92",
"assets/assets/icons/Group-39.png": "feb05862307681b979bdb8a2ebc7b104",
"assets/assets/icons/home_fill.png": "b095d8b361a18abcdbd26ada3eb05826",
"assets/assets/icons/home_blank.png": "4b4a20dc383746aff95c1797ac8f8adf",
"assets/assets/icons/Group-8.png": "a190faea163ea8e6d0281d2b61d5e6a6",
"assets/assets/icons/Group-9.png": "feba0a3b776b8e5d15bd3248efc86433",
"assets/assets/icons/msg_blank.png": "36b4301a37512a1f5985a8917ad70822",
"assets/assets/icons/favorite_fill.png": "972ffe272dae2aee2805c2a1c29fe706",
"assets/assets/icons/sound_fill.png": "06201e2aa2599eb1e668ccd03a7a6b28",
"assets/assets/icons/Group-17.png": "98d78e85024a63cbfdd411eda669461e",
"assets/assets/icons/Group-15.png": "0a48419e6c9a4205d2a5cfd4e30277bc",
"assets/assets/icons/v_fill.png": "cc3379dd177f2e3bac051e1d9bdb4e33",
"assets/assets/icons/search_fill.png": "8f801f63da85487947bdfce7c2f8c1b4",
"assets/assets/icons/Group-14.png": "42b52d02e912dbad3dda28bb85f1b760",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
