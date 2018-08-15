const mock = [
  {
    id: 88,
    time: { secs_since_epoch: 1521048860, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.73892e-7,
    price_usd: 0.00311246,
    price_eth: 0.00000494122,
    volume_usd: 123548
  },
  {
    id: 44,
    time: { secs_since_epoch: 1521060860, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.74375e-7,
    price_usd: 0.00310232,
    price_eth: 0.00000500659,
    volume_usd: 221740
  },
  {
    id: 132,
    time: { secs_since_epoch: 1521080960, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.28473e-7,
    price_usd: 0.00260674,
    price_eth: 0.00000439333,
    volume_usd: 329155
  },
  {
    id: 176,
    time: { secs_since_epoch: 1521082461, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.42671e-7,
    price_usd: 0.00270117,
    price_eth: 0.00000458503,
    volume_usd: 330933
  },
  {
    id: 264,
    time: { secs_since_epoch: 1521090260, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 2.90464e-7,
    price_usd: 0.00230159,
    price_eth: 0.00000386135,
    volume_usd: 369496
  },
  {
    id: 352,
    time: { secs_since_epoch: 1521102560, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 2.90379e-7,
    price_usd: 0.00228199,
    price_eth: 0.00000385953,
    volume_usd: 435266
  },
  {
    id: 220,
    time: { secs_since_epoch: 1521120560, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.31604e-7,
    price_usd: 0.00272373,
    price_eth: 0.00000447628,
    volume_usd: 486702
  },
  {
    id: 308,
    time: { secs_since_epoch: 1521129260, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.37174e-7,
    price_usd: 0.00272018,
    price_eth: 0.00000454908,
    volume_usd: 467864
  },
  {
    id: 528,
    time: { secs_since_epoch: 1521170061, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.6156e-7,
    price_usd: 0.00293148,
    price_eth: 0.00000485709,
    volume_usd: 296714
  },
  {
    id: 484,
    time: { secs_since_epoch: 1521180560, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.7084e-7,
    price_usd: 0.00303897,
    price_eth: 0.00000499339,
    volume_usd: 280266
  },
  {
    id: 440,
    time: { secs_since_epoch: 1521182960, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 3.82947e-7,
    price_usd: 0.00315463,
    price_eth: 0.00000515508,
    volume_usd: 282135
  },
  {
    id: 396,
    time: { secs_since_epoch: 1521210563, nanos_since_epoch: 0 },
    capitalization: 0,
    price_btc: 4.07816e-7,
    price_usd: 0.0034626,
    price_eth: 0.00000561652,
    volume_usd: 917209
  },
  {
    id: 660,
    time: { secs_since_epoch: 1521229460, nanos_since_epoch: 0 },
    capitalization: 19729126,
    price_btc: 4.86194e-7,
    price_usd: 0.00415414,
    price_eth: 0.00000667826,
    volume_usd: 1089500
  },
  {
    id: 616,
    time: { secs_since_epoch: 1521230661, nanos_since_epoch: 0 },
    capitalization: 19662352,
    price_btc: 4.84432e-7,
    price_usd: 0.00414008,
    price_eth: 0.00000666543,
    volume_usd: 1093440
  },
  {
    id: 572,
    time: { secs_since_epoch: 1521237560, nanos_since_epoch: 0 },
    capitalization: 19058102,
    price_btc: 4.71778e-7,
    price_usd: 0.00401285,
    price_eth: 0.00000655796,
    volume_usd: 1124340
  },
  {
    id: 968,
    time: { secs_since_epoch: 1521250761, nanos_since_epoch: 0 },
    capitalization: 19515314,
    price_btc: 5.05183e-7,
    price_usd: 0.00410912,
    price_eth: 0.00000690291,
    volume_usd: 1190350
  },
  {
    id: 836,
    time: { secs_since_epoch: 1521254360, nanos_since_epoch: 0 },
    capitalization: 19556490,
    price_btc: 5.05082e-7,
    price_usd: 0.00411779,
    price_eth: 0.0000069045,
    volume_usd: 1196790
  },
  {
    id: 880,
    time: { secs_since_epoch: 1521271760, nanos_since_epoch: 0 },
    capitalization: 19063136,
    price_btc: 4.90062e-7,
    price_usd: 0.00401391,
    price_eth: 0.00000666027,
    volume_usd: 1255470
  },
  {
    id: 748,
    time: { secs_since_epoch: 1521288261, nanos_since_epoch: 0 },
    capitalization: 17643912,
    price_btc: 4.4986e-7,
    price_usd: 0.00371508,
    price_eth: 0.00000617248,
    volume_usd: 835058
  },
  {
    id: 704,
    time: { secs_since_epoch: 1521301160, nanos_since_epoch: 0 },
    capitalization: 17254045,
    price_btc: 4.60185e-7,
    price_usd: 0.00363299,
    price_eth: 0.0000063002,
    volume_usd: 617498
  },
  {
    id: 924,
    time: { secs_since_epoch: 1521308660, nanos_since_epoch: 0 },
    capitalization: 17146474,
    price_btc: 4.53856e-7,
    price_usd: 0.00361034,
    price_eth: 0.00000628499,
    volume_usd: 549363
  },
  {
    id: 792,
    time: { secs_since_epoch: 1521317960, nanos_since_epoch: 0 },
    capitalization: 17053483,
    price_btc: 4.59544e-7,
    price_usd: 0.00359076,
    price_eth: 0.00000655856,
    volume_usd: 503413
  },
  {
    id: 1012,
    time: { secs_since_epoch: 1521339260, nanos_since_epoch: 0 },
    capitalization: 15779160,
    price_btc: 4.35444e-7,
    price_usd: 0.00332244,
    price_eth: 0.00000637783,
    volume_usd: 365439
  },
  {
    id: 1056,
    time: { secs_since_epoch: 1521358159, nanos_since_epoch: 0 },
    capitalization: 14260059,
    price_btc: 3.89254e-7,
    price_usd: 0.00300258,
    price_eth: 0.00000579305,
    volume_usd: 339515
  },
  {
    id: 1100,
    time: { secs_since_epoch: 1521365060, nanos_since_epoch: 0 },
    capitalization: 14356754,
    price_btc: 3.90387e-7,
    price_usd: 0.00302294,
    price_eth: 0.00000582967,
    volume_usd: 337280
  },
  {
    id: 1144,
    time: { secs_since_epoch: 1521388461, nanos_since_epoch: 0 },
    capitalization: 14073365,
    price_btc: 3.99129e-7,
    price_usd: 0.00296327,
    price_eth: 0.00000633705,
    volume_usd: 287873
  },
  {
    id: 1188,
    time: { secs_since_epoch: 1521395960, nanos_since_epoch: 0 },
    capitalization: 13534370,
    price_btc: 3.81543e-7,
    price_usd: 0.00284978,
    price_eth: 0.00000584204,
    volume_usd: 294574
  },
  {
    id: 1232,
    time: { secs_since_epoch: 1521402560, nanos_since_epoch: 0 },
    capitalization: 14342458,
    price_btc: 4.033e-7,
    price_usd: 0.00301993,
    price_eth: 0.00000618258,
    volume_usd: 309124
  },
  {
    id: 1452,
    time: { secs_since_epoch: 1521424760, nanos_since_epoch: 0 },
    capitalization: 15473782,
    price_btc: 3.97746e-7,
    price_usd: 0.00325814,
    price_eth: 0.00000618408,
    volume_usd: 317376
  },
  {
    id: 1276,
    time: { secs_since_epoch: 1521428360, nanos_since_epoch: 0 },
    capitalization: 15878799,
    price_btc: 4.05448e-7,
    price_usd: 0.00334342,
    price_eth: 0.00000623028,
    volume_usd: 287622
  },
  {
    id: 1364,
    time: { secs_since_epoch: 1521464061, nanos_since_epoch: 0 },
    capitalization: 16180235,
    price_btc: 4.10688e-7,
    price_usd: 0.00340689,
    price_eth: 0.00000643383,
    volume_usd: 264971
  },
  {
    id: 1496,
    time: { secs_since_epoch: 1521467960, nanos_since_epoch: 0 },
    capitalization: 16490458,
    price_btc: 4.06743e-7,
    price_usd: 0.00347221,
    price_eth: 0.00000636397,
    volume_usd: 295195
  },
  {
    id: 1540,
    time: { secs_since_epoch: 1521471260, nanos_since_epoch: 0 },
    capitalization: 16181755,
    price_btc: 3.96956e-7,
    price_usd: 0.00340721,
    price_eth: 0.00000622198,
    volume_usd: 296353
  },
  {
    id: 1320,
    time: { secs_since_epoch: 1521493160, nanos_since_epoch: 0 },
    capitalization: 16070622,
    price_btc: 4.02591e-7,
    price_usd: 0.00338381,
    price_eth: 0.00000626427,
    volume_usd: 266211
  },
  {
    id: 1408,
    time: { secs_since_epoch: 1521501260, nanos_since_epoch: 0 },
    capitalization: 16063403,
    price_btc: 3.98978e-7,
    price_usd: 0.00338229,
    price_eth: 0.00000627429,
    volume_usd: 257479
  },
  {
    id: 1672,
    time: { secs_since_epoch: 1521522560, nanos_since_epoch: 0 },
    capitalization: 16327938,
    price_btc: 4.07209e-7,
    price_usd: 0.00343799,
    price_eth: 0.00000645818,
    volume_usd: 278595
  },
  {
    id: 1804,
    time: { secs_since_epoch: 1521532460, nanos_since_epoch: 0 },
    capitalization: 16072209,
    price_btc: 3.89408e-7,
    price_usd: 0.00329756,
    price_eth: 0.00000616763,
    volume_usd: 262246
  },
  {
    id: 1716,
    time: { secs_since_epoch: 1521555261, nanos_since_epoch: 0 },
    capitalization: 15641691,
    price_btc: 3.78066e-7,
    price_usd: 0.00320923,
    price_eth: 0.00000602883,
    volume_usd: 213369
  },
  {
    id: 1584,
    time: { secs_since_epoch: 1521562161, nanos_since_epoch: 0 },
    capitalization: 15668595,
    price_btc: 3.76184e-7,
    price_usd: 0.00321475,
    price_eth: 0.0000059965,
    volume_usd: 191031
  },
  {
    id: 1628,
    time: { secs_since_epoch: 1521575960, nanos_since_epoch: 0 },
    capitalization: 15137748,
    price_btc: 3.45987e-7,
    price_usd: 0.00309165,
    price_eth: 0.00000552791,
    volume_usd: 236402
  },
  {
    id: 1760,
    time: { secs_since_epoch: 1521581360, nanos_since_epoch: 0 },
    capitalization: 14500882,
    price_btc: 3.31823e-7,
    price_usd: 0.00296158,
    price_eth: 0.00000528442,
    volume_usd: 259594
  },
  {
    id: 2024,
    time: { secs_since_epoch: 1521601160, nanos_since_epoch: 0 },
    capitalization: 14175521,
    price_btc: 3.23673e-7,
    price_usd: 0.00289513,
    price_eth: 0.00000517642,
    volume_usd: 297319
  },
  {
    id: 1848,
    time: { secs_since_epoch: 1521604460, nanos_since_epoch: 0 },
    capitalization: 14724155,
    price_btc: 3.35514e-7,
    price_usd: 0.00300718,
    price_eth: 0.00000533304,
    volume_usd: 291863
  },
  {
    id: 2068,
    time: { secs_since_epoch: 1521629660, nanos_since_epoch: 0 },
    capitalization: 15233667,
    price_btc: 3.43564e-7,
    price_usd: 0.00311124,
    price_eth: 0.00000537944,
    volume_usd: 325901
  },
  {
    id: 2112,
    time: { secs_since_epoch: 1521640767, nanos_since_epoch: 0 },
    capitalization: 15443426,
    price_btc: 3.49401e-7,
    price_usd: 0.00315408,
    price_eth: 0.00000549978,
    volume_usd: 322419
  },
  {
    id: 1936,
    time: { secs_since_epoch: 1521641961, nanos_since_epoch: 0 },
    capitalization: 15447147,
    price_btc: 3.48893e-7,
    price_usd: 0.00315484,
    price_eth: 0.00000550117,
    volume_usd: 318377
  },
  {
    id: 1892,
    time: { secs_since_epoch: 1521662360, nanos_since_epoch: 0 },
    capitalization: 19175069,
    price_btc: 3.27174e-7,
    price_usd: 0.00291365,
    price_eth: 0.00000518151,
    volume_usd: 287347
  },
  {
    id: 1980,
    time: { secs_since_epoch: 1521676760, nanos_since_epoch: 0 },
    capitalization: 18982045,
    price_btc: 3.23653e-7,
    price_usd: 0.00288432,
    price_eth: 0.00000516432,
    volume_usd: 240410
  },
  {
    id: 2200,
    time: { secs_since_epoch: 1521682460, nanos_since_epoch: 0 },
    capitalization: 19470561,
    price_btc: 3.27977e-7,
    price_usd: 0.00295855,
    price_eth: 0.00000520069,
    volume_usd: 218392
  },
  {
    id: 2244,
    time: { secs_since_epoch: 1521683060, nanos_since_epoch: 0 },
    capitalization: 19589877,
    price_btc: 3.29551e-7,
    price_usd: 0.00297668,
    price_eth: 0.00000521639,
    volume_usd: 218199
  },
  {
    id: 2376,
    time: { secs_since_epoch: 1521701360, nanos_since_epoch: 0 },
    capitalization: 19327948,
    price_btc: 3.25536e-7,
    price_usd: 0.00293688,
    price_eth: 0.00000518198,
    volume_usd: 204464
  },
  {
    id: 2156,
    time: { secs_since_epoch: 1521738560, nanos_since_epoch: 0 },
    capitalization: 17844959,
    price_btc: 3.14569e-7,
    price_usd: 0.00271154,
    price_eth: 0.00000510947,
    volume_usd: 146810
  },
  {
    id: 2288,
    time: { secs_since_epoch: 1521739760, nanos_since_epoch: 0 },
    capitalization: 17435680,
    price_btc: 3.07905e-7,
    price_usd: 0.00264935,
    price_eth: 0.00000502514,
    volume_usd: 142353
  },
  {
    id: 2332,
    time: { secs_since_epoch: 1521760760, nanos_since_epoch: 0 },
    capitalization: 17664439,
    price_btc: 3.07023e-7,
    price_usd: 0.00268411,
    price_eth: 0.00000494894,
    volume_usd: 134215
  },
  {
    id: 2684,
    time: { secs_since_epoch: 1521768861, nanos_since_epoch: 0 },
    capitalization: 17995009,
    price_btc: 3.18036e-7,
    price_usd: 0.00273434,
    price_eth: 0.00000512794,
    volume_usd: 128685
  },
  {
    id: 2596,
    time: { secs_since_epoch: 1521797060, nanos_since_epoch: 0 },
    capitalization: 16472204,
    price_btc: 2.95221e-7,
    price_usd: 0.00250295,
    price_eth: 0.00000480856,
    volume_usd: 139177
  },
  {
    id: 2420,
    time: { secs_since_epoch: 1521827660, nanos_since_epoch: 0 },
    capitalization: 19215583,
    price_btc: 2.8649e-7,
    price_usd: 0.00247383,
    price_eth: 0.00000470655,
    volume_usd: 140209
  },
  {
    id: 2552,
    time: { secs_since_epoch: 1521844760, nanos_since_epoch: 0 },
    capitalization: 18759085,
    price_btc: 2.79683e-7,
    price_usd: 0.00241506,
    price_eth: 0.00000456037,
    volume_usd: 203722
  },
  {
    id: 2464,
    time: { secs_since_epoch: 1521846560, nanos_since_epoch: 0 },
    capitalization: 19681170,
    price_btc: 2.92965e-7,
    price_usd: 0.00253377,
    price_eth: 0.00000476995,
    volume_usd: 206316
  },
  {
    id: 2640,
    time: { secs_since_epoch: 1521847459, nanos_since_epoch: 0 },
    capitalization: 19370857,
    price_btc: 2.86302e-7,
    price_usd: 0.00249382,
    price_eth: 0.00000466042,
    volume_usd: 209159
  },
  {
    id: 2508,
    time: { secs_since_epoch: 1521848960, nanos_since_epoch: 0 },
    capitalization: 19182649,
    price_btc: 2.83348e-7,
    price_usd: 0.00246959,
    price_eth: 0.00000461718,
    volume_usd: 210265
  },
  {
    id: 2992,
    time: { secs_since_epoch: 1521853460, nanos_since_epoch: 0 },
    capitalization: 18439761,
    price_btc: 2.66466e-7,
    price_usd: 0.00237395,
    price_eth: 0.00000438205,
    volume_usd: 230788
  },
  {
    id: 2948,
    time: { secs_since_epoch: 1521870560, nanos_since_epoch: 0 },
    capitalization: 18112903,
    price_btc: 2.61066e-7,
    price_usd: 0.00233187,
    price_eth: 0.00000429261,
    volume_usd: 256890
  },
  {
    id: 2728,
    time: { secs_since_epoch: 1521884360, nanos_since_epoch: 0 },
    capitalization: 17763829,
    price_btc: 2.56845e-7,
    price_usd: 0.00228693,
    price_eth: 0.0000042431,
    volume_usd: 268110
  },
  {
    id: 2816,
    time: { secs_since_epoch: 1521907460, nanos_since_epoch: 0 },
    capitalization: 18911251,
    price_btc: 2.72099e-7,
    price_usd: 0.00243465,
    price_eth: 0.0000045205,
    volume_usd: 266331
  },
  {
    id: 2860,
    time: { secs_since_epoch: 1521912860, nanos_since_epoch: 0 },
    capitalization: 18684594,
    price_btc: 2.70329e-7,
    price_usd: 0.00240547,
    price_eth: 0.0000044938,
    volume_usd: 248429
  },
  {
    id: 2772,
    time: { secs_since_epoch: 1521914360, nanos_since_epoch: 0 },
    capitalization: 18207201,
    price_btc: 2.63836e-7,
    price_usd: 0.00234401,
    price_eth: 0.00000438596,
    volume_usd: 245710
  },
  {
    id: 2904,
    time: { secs_since_epoch: 1521924560, nanos_since_epoch: 0 },
    capitalization: 18753415,
    price_btc: 2.70198e-7,
    price_usd: 0.00241433,
    price_eth: 0.00000448463,
    volume_usd: 199713
  },
  {
    id: 3080,
    time: { secs_since_epoch: 1521938960, nanos_since_epoch: 0 },
    capitalization: 17566223,
    price_btc: 2.64414e-7,
    price_usd: 0.00226149,
    price_eth: 0.00000433937,
    volume_usd: 150960
  },
  {
    id: 3168,
    time: { secs_since_epoch: 1521965360, nanos_since_epoch: 0 },
    capitalization: 18130302,
    price_btc: 2.7576e-7,
    price_usd: 0.00233411,
    price_eth: 0.00000451062,
    volume_usd: 123604
  },
  {
    id: 3124,
    time: { secs_since_epoch: 1521970760, nanos_since_epoch: 0 },
    capitalization: 18271361,
    price_btc: 2.75641e-7,
    price_usd: 0.00235227,
    price_eth: 0.0000045217,
    volume_usd: 106013
  },
  {
    id: 3256,
    time: { secs_since_epoch: 1521996560, nanos_since_epoch: 0 },
    capitalization: 17875449,
    price_btc: 2.70031e-7,
    price_usd: 0.0023013,
    price_eth: 0.00000441917,
    volume_usd: 115738
  },
  {
    id: 3036,
    time: { secs_since_epoch: 1521998060, nanos_since_epoch: 0 },
    capitalization: 18276720,
    price_btc: 2.75866e-7,
    price_usd: 0.00235296,
    price_eth: 0.00000451559,
    volume_usd: 115068
  },
  {
    id: 3212,
    time: { secs_since_epoch: 1522020860, nanos_since_epoch: 0 },
    capitalization: 18521010,
    price_btc: 2.82987e-7,
    price_usd: 0.00238441,
    price_eth: 0.00000456762,
    volume_usd: 129401
  },
  {
    id: 3300,
    time: { secs_since_epoch: 1522033760, nanos_since_epoch: 0 },
    capitalization: 18469822,
    price_btc: 2.81712e-7,
    price_usd: 0.00237782,
    price_eth: 0.00000455205,
    volume_usd: 128705
  },
  {
    id: 3476,
    time: { secs_since_epoch: 1522044560, nanos_since_epoch: 0 },
    capitalization: 18065676,
    price_btc: 2.75253e-7,
    price_usd: 0.00232579,
    price_eth: 0.00000445451,
    volume_usd: 116988
  },
  {
    id: 3432,
    time: { secs_since_epoch: 1522046060, nanos_since_epoch: 0 },
    capitalization: 17907063,
    price_btc: 2.72854e-7,
    price_usd: 0.00230537,
    price_eth: 0.00000441593,
    volume_usd: 115459
  },
  {
    id: 3564,
    time: { secs_since_epoch: 1522060460, nanos_since_epoch: 0 },
    capitalization: 17836301,
    price_btc: 2.76144e-7,
    price_usd: 0.00229626,
    price_eth: 0.00000450171,
    volume_usd: 110275
  },
  {
    id: 3520,
    time: { secs_since_epoch: 1522091360, nanos_since_epoch: 0 },
    capitalization: 16512556,
    price_btc: 2.69879e-7,
    price_usd: 0.00212584,
    price_eth: 0.00000453814,
    volume_usd: 95425
  },
  {
    id: 3344,
    time: { secs_since_epoch: 1522097961, nanos_since_epoch: 0 },
    capitalization: 16511468,
    price_btc: 2.69193e-7,
    price_usd: 0.0021257,
    price_eth: 0.00000446856,
    volume_usd: 102716
  },
  {
    id: 3388,
    time: { secs_since_epoch: 1522103360, nanos_since_epoch: 0 },
    capitalization: 17767558,
    price_btc: 2.79865e-7,
    price_usd: 0.00228741,
    price_eth: 0.00000465145,
    volume_usd: 102503
  },
  {
    id: 3696,
    time: { secs_since_epoch: 1522113260, nanos_since_epoch: 0 },
    capitalization: 18400147,
    price_btc: 2.89051e-7,
    price_usd: 0.00236885,
    price_eth: 0.00000483095,
    volume_usd: 114144
  },
  {
    id: 3828,
    time: { secs_since_epoch: 1522129761, nanos_since_epoch: 0 },
    capitalization: 16777274,
    price_btc: 2.72031e-7,
    price_usd: 0.00215992,
    price_eth: 0.00000467577,
    volume_usd: 112653
  },
  {
    id: 3608,
    time: { secs_since_epoch: 1522154660, nanos_since_epoch: 0 },
    capitalization: 16805470,
    price_btc: 2.71192e-7,
    price_usd: 0.00216355,
    price_eth: 0.00000476294,
    volume_usd: 110220
  },
  {
    id: 3784,
    time: { secs_since_epoch: 1522160660, nanos_since_epoch: 0 },
    capitalization: 16787449,
    price_btc: 2.68616e-7,
    price_usd: 0.00216123,
    price_eth: 0.00000469353,
    volume_usd: 111864
  },
  {
    id: 3652,
    time: { secs_since_epoch: 1522165460, nanos_since_epoch: 0 },
    capitalization: 17183050,
    price_btc: 2.74167e-7,
    price_usd: 0.00221216,
    price_eth: 0.00000473787,
    volume_usd: 114298
  },
  {
    id: 3740,
    time: { secs_since_epoch: 1522187360, nanos_since_epoch: 0 },
    capitalization: 16975579,
    price_btc: 2.73441e-7,
    price_usd: 0.00218545,
    price_eth: 0.00000476113,
    volume_usd: 100889
  },
  {
    id: 3960,
    time: { secs_since_epoch: 1522203860, nanos_since_epoch: 0 },
    capitalization: 16657498,
    price_btc: 2.7382e-7,
    price_usd: 0.0021445,
    price_eth: 0.00000478573,
    volume_usd: 70410
  },
  {
    id: 4092,
    time: { secs_since_epoch: 1522209560, nanos_since_epoch: 0 },
    capitalization: 16894719,
    price_btc: 2.7663e-7,
    price_usd: 0.00217504,
    price_eth: 0.00000483559,
    volume_usd: 72219
  },
  {
    id: 4004,
    time: { secs_since_epoch: 1522219760, nanos_since_epoch: 0 },
    capitalization: 17249463,
    price_btc: 2.81519e-7,
    price_usd: 0.00222071,
    price_eth: 0.00000488827,
    volume_usd: 72283
  },
  {
    id: 4136,
    time: { secs_since_epoch: 1522237160, nanos_since_epoch: 0 },
    capitalization: 18060394,
    price_btc: 2.88785e-7,
    price_usd: 0.00232511,
    price_eth: 0.00000502127,
    volume_usd: 91857
  },
  {
    id: 4048,
    time: { secs_since_epoch: 1522243461, nanos_since_epoch: 0 },
    capitalization: 16932547,
    price_btc: 2.71172e-7,
    price_usd: 0.00217991,
    price_eth: 0.00000475375,
    volume_usd: 106612
  },
  {
    id: 3916,
    time: { secs_since_epoch: 1522248860, nanos_since_epoch: 0 },
    capitalization: 17046963,
    price_btc: 2.77155e-7,
    price_usd: 0.00219464,
    price_eth: 0.00000486274,
    volume_usd: 104114
  },
  {
    id: 3872,
    time: { secs_since_epoch: 1522257261, nanos_since_epoch: 0 },
    capitalization: 16817199,
    price_btc: 2.74633e-7,
    price_usd: 0.00216506,
    price_eth: 0.00000484373,
    volume_usd: 97932
  },
  {
    id: 4444,
    time: { secs_since_epoch: 1522303160, nanos_since_epoch: 0 },
    capitalization: 15864898,
    price_btc: 2.69135e-7,
    price_usd: 0.00204246,
    price_eth: 0.00000483716,
    volume_usd: 99508
  },
  {
    id: 4268,
    time: { secs_since_epoch: 1522305860, nanos_since_epoch: 0 },
    capitalization: 15855422,
    price_btc: 2.68979e-7,
    price_usd: 0.00204124,
    price_eth: 0.00000485212,
    volume_usd: 100600
  },
  {
    id: 4400,
    time: { secs_since_epoch: 1522319061, nanos_since_epoch: 0 },
    capitalization: 15755609,
    price_btc: 2.69364e-7,
    price_usd: 0.00202839,
    price_eth: 0.0000048694,
    volume_usd: 99079
  },
  {
    id: 4356,
    time: { secs_since_epoch: 1522337963, nanos_since_epoch: 0 },
    capitalization: 15177160,
    price_btc: 2.63888e-7,
    price_usd: 0.00195392,
    price_eth: 0.00000484961,
    volume_usd: 63351
  },
  {
    id: 4224,
    time: { secs_since_epoch: 1522341261, nanos_since_epoch: 0 },
    capitalization: 15500678,
    price_btc: 2.65208e-7,
    price_usd: 0.00199557,
    price_eth: 0.00000479486,
    volume_usd: 70905
  },
  {
    id: 4180,
    time: { secs_since_epoch: 1522345178, nanos_since_epoch: 0 },
    capitalization: 15559167,
    price_btc: 2.66886e-7,
    price_usd: 0.0020031,
    price_eth: 0.00000480948,
    volume_usd: 72044
  },
  {
    id: 4312,
    time: { secs_since_epoch: 1522362561, nanos_since_epoch: 0 },
    capitalization: 14983515,
    price_btc: 2.66747e-7,
    price_usd: 0.00192899,
    price_eth: 0.00000487011,
    volume_usd: 62809
  },
  {
    id: 4576,
    time: { secs_since_epoch: 1522378461, nanos_since_epoch: 0 },
    capitalization: 14378035,
    price_btc: 2.73041e-7,
    price_usd: 0.00185104,
    price_eth: 0.00000493328,
    volume_usd: 51496
  },
  {
    id: 4708,
    time: { secs_since_epoch: 1522406060, nanos_since_epoch: 0 },
    capitalization: 15070123,
    price_btc: 2.74493e-7,
    price_usd: 0.00194014,
    price_eth: 0.000004905,
    volume_usd: 64369
  },
  {
    id: 4620,
    time: { secs_since_epoch: 1522414761, nanos_since_epoch: 0 },
    capitalization: 14958581,
    price_btc: 2.75912e-7,
    price_usd: 0.00192578,
    price_eth: 0.00000490824,
    volume_usd: 58208
  },
  {
    id: 4488,
    time: { secs_since_epoch: 1522431560, nanos_since_epoch: 0 },
    capitalization: 14484295,
    price_btc: 2.7855e-7,
    price_usd: 0.00186472,
    price_eth: 0.00000496492,
    volume_usd: 54711
  },
  {
    id: 4664,
    time: { secs_since_epoch: 1522437561, nanos_since_epoch: 0 },
    capitalization: 14366616,
    price_btc: 2.72884e-7,
    price_usd: 0.00184957,
    price_eth: 0.0000048765,
    volume_usd: 56973
  },
  {
    id: 4532,
    time: { secs_since_epoch: 1522450161, nanos_since_epoch: 0 },
    capitalization: 14475440,
    price_btc: 2.74225e-7,
    price_usd: 0.00186358,
    price_eth: 0.00000477277,
    volume_usd: 58996
  },
  {
    id: 4884,
    time: { secs_since_epoch: 1522454960, nanos_since_epoch: 0 },
    capitalization: 14803308,
    price_btc: 2.78113e-7,
    price_usd: 0.00190579,
    price_eth: 0.00000480831,
    volume_usd: 60183
  },
  {
    id: 4752,
    time: { secs_since_epoch: 1522472660, nanos_since_epoch: 0 },
    capitalization: 15037499,
    price_btc: 2.75494e-7,
    price_usd: 0.00193594,
    price_eth: 0.00000470773,
    volume_usd: 56796
  },
  {
    id: 4840,
    time: { secs_since_epoch: 1522481960, nanos_since_epoch: 0 },
    capitalization: 14787229,
    price_btc: 2.78377e-7,
    price_usd: 0.00190372,
    price_eth: 0.00000482904,
    volume_usd: 49116
  },
  {
    id: 4972,
    time: { secs_since_epoch: 1522515861, nanos_since_epoch: 0 },
    capitalization: 15554429,
    price_btc: 2.80226e-7,
    price_usd: 0.00200249,
    price_eth: 0.00000488206,
    volume_usd: 51613
  },
  {
    id: 5016,
    time: { secs_since_epoch: 1522517660, nanos_since_epoch: 0 },
    capitalization: 15493765,
    price_btc: 2.80379e-7,
    price_usd: 0.00199468,
    price_eth: 0.00000491701,
    volume_usd: 51361
  },
  {
    id: 4928,
    time: { secs_since_epoch: 1522530560, nanos_since_epoch: 0 },
    capitalization: 14898305,
    price_btc: 2.79936e-7,
    price_usd: 0.00191802,
    price_eth: 0.0000048446,
    volume_usd: 47171
  },
  {
    id: 4796,
    time: { secs_since_epoch: 1522532660, nanos_since_epoch: 0 },
    capitalization: 15076181,
    price_btc: 2.80448e-7,
    price_usd: 0.00194092,
    price_eth: 0.00000488925,
    volume_usd: 46221
  },
  {
    id: 5104,
    time: { secs_since_epoch: 1522566260, nanos_since_epoch: 0 },
    capitalization: 15403894,
    price_btc: 2.89793e-7,
    price_usd: 0.00198311,
    price_eth: 0.00000505645,
    volume_usd: 46803
  },
  {
    id: 5060,
    time: { secs_since_epoch: 1522579460, nanos_since_epoch: 0 },
    capitalization: 15113388,
    price_btc: 2.90973e-7,
    price_usd: 0.00194571,
    price_eth: 0.00000506907,
    volume_usd: 46400
  },
  {
    id: 5192,
    time: { secs_since_epoch: 1522583060, nanos_since_epoch: 0 },
    capitalization: 14945920,
    price_btc: 2.87785e-7,
    price_usd: 0.00192415,
    price_eth: 0.0000050527,
    volume_usd: 45656
  },
  {
    id: 5280,
    time: { secs_since_epoch: 1522588160, nanos_since_epoch: 0 },
    capitalization: 15177781,
    price_btc: 2.92016e-7,
    price_usd: 0.001954,
    price_eth: 0.00000511719,
    volume_usd: 42082
  },
  {
    id: 5236,
    time: { secs_since_epoch: 1522598660, nanos_since_epoch: 0 },
    capitalization: 14298029,
    price_btc: 2.85462e-7,
    price_usd: 0.00184074,
    price_eth: 0.00000501081,
    volume_usd: 46754
  },
  {
    id: 5148,
    time: { secs_since_epoch: 1522620861, nanos_since_epoch: 0 },
    capitalization: 15168848,
    price_btc: 2.8511e-7,
    price_usd: 0.00195285,
    price_eth: 0.00000510634,
    volume_usd: 54000
  },
  {
    id: 5412,
    time: { secs_since_epoch: 1522662261, nanos_since_epoch: 0 },
    capitalization: 15595519,
    price_btc: 2.84745e-7,
    price_usd: 0.00200778,
    price_eth: 0.00000509835,
    volume_usd: 59314
  },
  {
    id: 5456,
    time: { secs_since_epoch: 1522676961, nanos_since_epoch: 0 },
    capitalization: 15558546,
    price_btc: 2.85947e-7,
    price_usd: 0.00200302,
    price_eth: 0.00000510585,
    volume_usd: 70493
  },
  {
    id: 5324,
    time: { secs_since_epoch: 1522678461, nanos_since_epoch: 0 },
    capitalization: 15589927,
    price_btc: 2.86938e-7,
    price_usd: 0.00200706,
    price_eth: 0.00000511163,
    volume_usd: 71048
  },
  {
    id: 5500,
    time: { secs_since_epoch: 1522679661, nanos_since_epoch: 0 },
    capitalization: 15264078,
    price_btc: 2.83527e-7,
    price_usd: 0.00196511,
    price_eth: 0.00000506663,
    volume_usd: 67636
  },
  {
    id: 5544,
    time: { secs_since_epoch: 1522687461, nanos_since_epoch: 0 },
    capitalization: 15565304,
    price_btc: 2.86555e-7,
    price_usd: 0.00200389,
    price_eth: 0.00000513152,
    volume_usd: 66614
  },
  {
    id: 5588,
    time: { secs_since_epoch: 1522701260, nanos_since_epoch: 0 },
    capitalization: 15810913,
    price_btc: 2.93595e-7,
    price_usd: 0.00203551,
    price_eth: 0.00000529975,
    volume_usd: 68556
  },
  {
    id: 5368,
    time: { secs_since_epoch: 1522702760, nanos_since_epoch: 0 },
    capitalization: 15671719,
    price_btc: 2.91948e-7,
    price_usd: 0.00201759,
    price_eth: 0.00000526743,
    volume_usd: 68997
  },
  {
    id: 5632,
    time: { secs_since_epoch: 1522730360, nanos_since_epoch: 0 },
    capitalization: 16926954,
    price_btc: 2.99576e-7,
    price_usd: 0.00217919,
    price_eth: 0.00000545419,
    volume_usd: 82597
  },
  {
    id: 5808,
    time: { secs_since_epoch: 1522757661, nanos_since_epoch: 0 },
    capitalization: 17293660,
    price_btc: 3.02553e-7,
    price_usd: 0.0022264,
    price_eth: 0.00000552597,
    volume_usd: 67158
  },
  {
    id: 5676,
    time: { secs_since_epoch: 1522769960, nanos_since_epoch: 0 },
    capitalization: 17017679,
    price_btc: 2.96625e-7,
    price_usd: 0.00219087,
    price_eth: 0.00000538266,
    volume_usd: 76615
  },
  {
    id: 5720,
    time: { secs_since_epoch: 1522773261, nanos_since_epoch: 0 },
    capitalization: 17198119,
    price_btc: 2.9882e-7,
    price_usd: 0.0022141,
    price_eth: 0.00000541322,
    volume_usd: 82494
  },
  {
    id: 5852,
    time: { secs_since_epoch: 1522784960, nanos_since_epoch: 0 },
    capitalization: 17454293,
    price_btc: 3.00246e-7,
    price_usd: 0.00224708,
    price_eth: 0.00000535139,
    volume_usd: 89613
  },
  {
    id: 5764,
    time: { secs_since_epoch: 1522789761, nanos_since_epoch: 0 },
    capitalization: 17355257,
    price_btc: 3.01144e-7,
    price_usd: 0.00223433,
    price_eth: 0.00000536123,
    volume_usd: 86463
  },
  {
    id: 5940,
    time: { secs_since_epoch: 1522803861, nanos_since_epoch: 0 },
    capitalization: 17934482,
    price_btc: 3.11721e-7,
    price_usd: 0.0023089,
    price_eth: 0.00000551673,
    volume_usd: 105400
  },
  {
    id: 6116,
    time: { secs_since_epoch: 1522814661, nanos_since_epoch: 0 },
    capitalization: 18060394,
    price_btc: 3.18366e-7,
    price_usd: 0.00232511,
    price_eth: 0.00000573307,
    volume_usd: 115151
  },
  {
    id: 6160,
    time: { secs_since_epoch: 1522837761, nanos_since_epoch: 0 },
    capitalization: 17090694,
    price_btc: 3.08397e-7,
    price_usd: 0.00220027,
    price_eth: 0.00000561585,
    volume_usd: 124043
  },
  {
    id: 6072,
    time: { secs_since_epoch: 1522857261, nanos_since_epoch: 0 },
    capitalization: 16513876,
    price_btc: 3.08515e-7,
    price_usd: 0.00212601,
    price_eth: 0.00000559139,
    volume_usd: 114305
  },
  {
    id: 5984,
    time: { secs_since_epoch: 1522863861, nanos_since_epoch: 0 },
    capitalization: 16317047,
    price_btc: 3.06977e-7,
    price_usd: 0.00210067,
    price_eth: 0.00000547633,
    volume_usd: 113121
  },
  {
    id: 6028,
    time: { secs_since_epoch: 1522875861, nanos_since_epoch: 0 },
    capitalization: 15980634,
    price_btc: 3.00477e-7,
    price_usd: 0.00205736,
    price_eth: 0.00000532968,
    volume_usd: 116801
  },
  {
    id: 5896,
    time: { secs_since_epoch: 1522876160, nanos_since_epoch: 0 },
    capitalization: 15974498,
    price_btc: 3.00518e-7,
    price_usd: 0.00205657,
    price_eth: 0.00000532807,
    volume_usd: 116713
  },
  {
    id: 6204,
    time: { secs_since_epoch: 1522911260, nanos_since_epoch: 0 },
    capitalization: 16208301,
    price_btc: 3.07968e-7,
    price_usd: 0.00208667,
    price_eth: 0.00000543256,
    volume_usd: 75100
  },
  {
    id: 6380,
    time: { secs_since_epoch: 1522925661, nanos_since_epoch: 0 },
    capitalization: 16283336,
    price_btc: 3.08359e-7,
    price_usd: 0.00209633,
    price_eth: 0.00000544782,
    volume_usd: 73572
  },
  {
    id: 6292,
    time: { secs_since_epoch: 1522938560, nanos_since_epoch: 0 },
    capitalization: 16387731,
    price_btc: 3.0673e-7,
    price_usd: 0.00210977,
    price_eth: 0.00000541993,
    volume_usd: 69392
  },
  {
    id: 6248,
    time: { secs_since_epoch: 1522946662, nanos_since_epoch: 0 },
    capitalization: 15745666,
    price_btc: 3.00427e-7,
    price_usd: 0.00202711,
    price_eth: 0.000005292,
    volume_usd: 72534
  },
  {
    id: 6336,
    time: { secs_since_epoch: 1522949960, nanos_since_epoch: 0 },
    capitalization: 15854179,
    price_btc: 3.02155e-7,
    price_usd: 0.00204108,
    price_eth: 0.0000053427,
    volume_usd: 71485
  },
  {
    id: 6424,
    time: { secs_since_epoch: 1522951460, nanos_since_epoch: 0 },
    capitalization: 15562740,
    price_btc: 2.98451e-7,
    price_usd: 0.00200356,
    price_eth: 0.00000526738,
    volume_usd: 58165
  },
  {
    id: 6468,
    time: { secs_since_epoch: 1522966460, nanos_since_epoch: 0 },
    capitalization: 15714674,
    price_btc: 2.99254e-7,
    price_usd: 0.00202312,
    price_eth: 0.00000535354,
    volume_usd: 55783
  },
  {
    id: 6644,
    time: { secs_since_epoch: 1522974260, nanos_since_epoch: 0 },
    capitalization: 15904435,
    price_btc: 3.0135e-7,
    price_usd: 0.00204755,
    price_eth: 0.00000535185,
    volume_usd: 50410
  },
  {
    id: 6556,
    time: { secs_since_epoch: 1522984461, nanos_since_epoch: 0 },
    capitalization: 15743957,
    price_btc: 3.00122e-7,
    price_usd: 0.00202689,
    price_eth: 0.00000535916,
    volume_usd: 57309
  },
  {
    id: 6732,
    time: { secs_since_epoch: 1523009660, nanos_since_epoch: 0 },
    capitalization: 15147565,
    price_btc: 2.96071e-7,
    price_usd: 0.00195011,
    price_eth: 0.00000526356,
    volume_usd: 50361
  },
  {
    id: 6688,
    time: { secs_since_epoch: 1523030960, nanos_since_epoch: 0 },
    capitalization: 15520485,
    price_btc: 3.02666e-7,
    price_usd: 0.00199812,
    price_eth: 0.00000541372,
    volume_usd: 40689
  },
  {
    id: 6600,
    time: { secs_since_epoch: 1523057060, nanos_since_epoch: 0 },
    capitalization: 15363037,
    price_btc: 2.99129e-7,
    price_usd: 0.00197785,
    price_eth: 0.00000534391,
    volume_usd: 50465
  },
  {
    id: 6512,
    time: { secs_since_epoch: 1523058260, nanos_since_epoch: 0 },
    capitalization: 15347036,
    price_btc: 2.99062e-7,
    price_usd: 0.00197579,
    price_eth: 0.00000534543,
    volume_usd: 50391
  },
  {
    id: 6864,
    time: { secs_since_epoch: 1523072060, nanos_since_epoch: 0 },
    capitalization: 15952749,
    price_btc: 3.00818e-7,
    price_usd: 0.00205377,
    price_eth: 0.00000540036,
    volume_usd: 45490
  },
  {
    id: 6908,
    time: { secs_since_epoch: 1523072360, nanos_since_epoch: 0 },
    capitalization: 15961526,
    price_btc: 3.00889e-7,
    price_usd: 0.0020549,
    price_eth: 0.00000539629,
    volume_usd: 45515
  },
  {
    id: 6776,
    time: { secs_since_epoch: 1523089761, nanos_since_epoch: 0 },
    capitalization: 15984596,
    price_btc: 2.98455e-7,
    price_usd: 0.00205787,
    price_eth: 0.00000534602,
    volume_usd: 42350
  },
  {
    id: 6952,
    time: { secs_since_epoch: 1523097860, nanos_since_epoch: 0 },
    capitalization: 15840042,
    price_btc: 2.96781e-7,
    price_usd: 0.00203926,
    price_eth: 0.0000053413,
    volume_usd: 40934
  },
  {
    id: 6996,
    time: { secs_since_epoch: 1523111060, nanos_since_epoch: 0 },
    capitalization: 15793203,
    price_btc: 2.96711e-7,
    price_usd: 0.00203323,
    price_eth: 0.0000053406,
    volume_usd: 36570
  },
  {
    id: 6820,
    time: { secs_since_epoch: 1523129960, nanos_since_epoch: 0 },
    capitalization: 16300657,
    price_btc: 3.00142e-7,
    price_usd: 0.00209856,
    price_eth: 0.00000540849,
    volume_usd: 33903
  },
  {
    id: 7040,
    time: { secs_since_epoch: 1523134460, nanos_since_epoch: 0 },
    capitalization: 16232846,
    price_btc: 2.98503e-7,
    price_usd: 0.00208983,
    price_eth: 0.00000533671,
    volume_usd: 33036
  },
  {
    id: 7128,
    time: { secs_since_epoch: 1523145260, nanos_since_epoch: 0 },
    capitalization: 16083399,
    price_btc: 3.00548e-7,
    price_usd: 0.00207059,
    price_eth: 0.00000537978,
    volume_usd: 26009
  },
  {
    id: 7172,
    time: { secs_since_epoch: 1523147960, nanos_since_epoch: 0 },
    capitalization: 16260577,
    price_btc: 3.00917e-7,
    price_usd: 0.0020934,
    price_eth: 0.00000540699,
    volume_usd: 26313
  },
  {
    id: 7216,
    time: { secs_since_epoch: 1523153360, nanos_since_epoch: 0 },
    capitalization: 16163172,
    price_btc: 3.00298e-7,
    price_usd: 0.00208086,
    price_eth: 0.0000053987,
    volume_usd: 24597
  },
  {
    id: 7260,
    time: { secs_since_epoch: 1523165960, nanos_since_epoch: 0 },
    capitalization: 16173891,
    price_btc: 2.99407e-7,
    price_usd: 0.00208224,
    price_eth: 0.0000053383,
    volume_usd: 22599
  },
  {
    id: 7084,
    time: { secs_since_epoch: 1523180660, nanos_since_epoch: 0 },
    capitalization: 16121538,
    price_btc: 2.97493e-7,
    price_usd: 0.0020755,
    price_eth: 0.00000529166,
    volume_usd: 28523
  },
  {
    id: 7304,
    time: { secs_since_epoch: 1523220860, nanos_since_epoch: 0 },
    capitalization: 16052639,
    price_btc: 2.96592e-7,
    price_usd: 0.00206663,
    price_eth: 0.00000520511,
    volume_usd: 32225
  },
  {
    id: 7524,
    time: { secs_since_epoch: 1523234661, nanos_since_epoch: 0 },
    capitalization: 16252188,
    price_btc: 2.95829e-7,
    price_usd: 0.00209232,
    price_eth: 0.00000515899,
    volume_usd: 37712
  },
  {
    id: 7436,
    time: { secs_since_epoch: 1523236160, nanos_since_epoch: 0 },
    capitalization: 16358370,
    price_btc: 2.9744e-7,
    price_usd: 0.00210599,
    price_eth: 0.00000515507,
    volume_usd: 40963
  },
  {
    id: 7392,
    time: { secs_since_epoch: 1523239160, nanos_since_epoch: 0 },
    capitalization: 16174901,
    price_btc: 2.92939e-7,
    price_usd: 0.00208237,
    price_eth: 0.00000506663,
    volume_usd: 42355
  },
  {
    id: 7612,
    time: { secs_since_epoch: 1523241260, nanos_since_epoch: 0 },
    capitalization: 16598698,
    price_btc: 2.98806e-7,
    price_usd: 0.00213693,
    price_eth: 0.00000518498,
    volume_usd: 42793
  },
  {
    id: 7480,
    time: { secs_since_epoch: 1523278460, nanos_since_epoch: 0 },
    capitalization: 15696265,
    price_btc: 3.00718e-7,
    price_usd: 0.00202075,
    price_eth: 0.00000513176,
    volume_usd: 43788
  },
  {
    id: 7348,
    time: { secs_since_epoch: 1523283861, nanos_since_epoch: 0 },
    capitalization: 15678865,
    price_btc: 3.00856e-7,
    price_usd: 0.00201851,
    price_eth: 0.00000515452,
    volume_usd: 43242
  },
  {
    id: 7568,
    time: { secs_since_epoch: 1523314464, nanos_since_epoch: 0 },
    capitalization: 15585810,
    price_btc: 2.99554e-7,
    price_usd: 0.00200653,
    price_eth: 0.00000507559,
    volume_usd: 56566
  },
  {
    id: 7656,
    time: { secs_since_epoch: 1523329761, nanos_since_epoch: 0 },
    capitalization: 15667292,
    price_btc: 2.99418e-7,
    price_usd: 0.00201702,
    price_eth: 0.00000507266,
    volume_usd: 59990
  },
  {
    id: 7700,
    time: { secs_since_epoch: 1523335160, nanos_since_epoch: 0 },
    capitalization: 15462151,
    price_btc: 2.94611e-7,
    price_usd: 0.00199061,
    price_eth: 0.00000496305,
    volume_usd: 59469
  },
  {
    id: 7876,
    time: { secs_since_epoch: 1523367261, nanos_since_epoch: 0 },
    capitalization: 15441411,
    price_btc: 2.94335e-7,
    price_usd: 0.00198794,
    price_eth: 0.00000497738,
    volume_usd: 60595
  },
  {
    id: 7788,
    time: { secs_since_epoch: 1523367561, nanos_since_epoch: 0 },
    capitalization: 15316587,
    price_btc: 2.92132e-7,
    price_usd: 0.00197187,
    price_eth: 0.00000494155,
    volume_usd: 60858
  },
  {
    id: 7832,
    time: { secs_since_epoch: 1523393661, nanos_since_epoch: 0 },
    capitalization: 15570042,
    price_btc: 2.93501e-7,
    price_usd: 0.0020045,
    price_eth: 0.00000488503,
    volume_usd: 86085
  },
  {
    id: 7744,
    time: { secs_since_epoch: 1523399961, nanos_since_epoch: 0 },
    capitalization: 15841362,
    price_btc: 2.97047e-7,
    price_usd: 0.00203943,
    price_eth: 0.00000487901,
    volume_usd: 92923
  },
  {
    id: 7964,
    time: { secs_since_epoch: 1523413162, nanos_since_epoch: 0 },
    capitalization: 15866451,
    price_btc: 2.98696e-7,
    price_usd: 0.00204266,
    price_eth: 0.00000490073,
    volume_usd: 90148
  },
  {
    id: 8096,
    time: { secs_since_epoch: 1523418261, nanos_since_epoch: 0 },
    capitalization: 15804311,
    price_btc: 2.9811e-7,
    price_usd: 0.00203466,
    price_eth: 0.00000492213,
    volume_usd: 85738
  },
  {
    id: 7920,
    time: { secs_since_epoch: 1523438060, nanos_since_epoch: 0 },
    capitalization: 15776581,
    price_btc: 2.96262e-7,
    price_usd: 0.00203109,
    price_eth: 0.00000486483,
    volume_usd: 86923
  },
  {
    id: 8184,
    time: { secs_since_epoch: 1523449764, nanos_since_epoch: 0 },
    capitalization: 15919581,
    price_btc: 2.99358e-7,
    price_usd: 0.0020495,
    price_eth: 0.00000493817,
    volume_usd: 86387
  },
  {
    id: 8052,
    time: { secs_since_epoch: 1523450365, nanos_since_epoch: 0 },
    capitalization: 15863344,
    price_btc: 2.98241e-7,
    price_usd: 0.00204226,
    price_eth: 0.00000492654,
    volume_usd: 86158
  },
  {
    id: 8008,
    time: { secs_since_epoch: 1523452166, nanos_since_epoch: 0 },
    capitalization: 16002383,
    price_btc: 3.00486e-7,
    price_usd: 0.00206016,
    price_eth: 0.00000494844,
    volume_usd: 85567
  },
  {
    id: 8140,
    time: { secs_since_epoch: 1523474665, nanos_since_epoch: 0 },
    capitalization: 16202009,
    price_btc: 3.02113e-7,
    price_usd: 0.00208586,
    price_eth: 0.0000049443,
    volume_usd: 60455
  },
  {
    id: 8360,
    time: { secs_since_epoch: 1523511865, nanos_since_epoch: 0 },
    capitalization: 16529722,
    price_btc: 3.07054e-7,
    price_usd: 0.00212805,
    price_eth: 0.00000490131,
    volume_usd: 65328
  },
  {
    id: 8316,
    time: { secs_since_epoch: 1523514266, nanos_since_epoch: 0 },
    capitalization: 16525528,
    price_btc: 3.06948e-7,
    price_usd: 0.00212751,
    price_eth: 0.00000491998,
    volume_usd: 69470
  },
  {
    id: 8404,
    time: { secs_since_epoch: 1523515165, nanos_since_epoch: 0 },
    capitalization: 16262596,
    price_btc: 3.02186e-7,
    price_usd: 0.00209366,
    price_eth: 0.00000486642,
    volume_usd: 73418
  },
  {
    id: 8228,
    time: { secs_since_epoch: 1523522364, nanos_since_epoch: 0 },
    capitalization: 15838255,
    price_btc: 2.98173e-7,
    price_usd: 0.00203903,
    price_eth: 0.00000481562,
    volume_usd: 71261
  },
  {
    id: 8448,
    time: { secs_since_epoch: 1523531066, nanos_since_epoch: 0 },
    capitalization: 16164647,
    price_btc: 3.00089e-7,
    price_usd: 0.00208105,
    price_eth: 0.00000478791,
    volume_usd: 72404
  },
  {
    id: 8272,
    time: { secs_since_epoch: 1523548465, nanos_since_epoch: 0 },
    capitalization: 17282319,
    price_btc: 2.91175e-7,
    price_usd: 0.00222494,
    price_eth: 0.00000477719,
    volume_usd: 93089
  },
  {
    id: 8624,
    time: { secs_since_epoch: 1523576365, nanos_since_epoch: 0 },
    capitalization: 17590536,
    price_btc: 2.87321e-7,
    price_usd: 0.00226462,
    price_eth: 0.00000459448,
    volume_usd: 137830
  },
  {
    id: 8580,
    time: { secs_since_epoch: 1523598265, nanos_since_epoch: 0 },
    capitalization: 17696252,
    price_btc: 2.91754e-7,
    price_usd: 0.00227823,
    price_eth: 0.00000467876,
    volume_usd: 113377
  },
  {
    id: 8536,
    time: { secs_since_epoch: 1523600964, nanos_since_epoch: 0 },
    capitalization: 17755207,
    price_btc: 2.91915e-7,
    price_usd: 0.00228582,
    price_eth: 0.00000464924,
    volume_usd: 109179
  },
  {
    id: 8712,
    time: { secs_since_epoch: 1523630965, nanos_since_epoch: 0 },
    capitalization: 18353464,
    price_btc: 2.91701e-7,
    price_usd: 0.00236284,
    price_eth: 0.00000458464,
    volume_usd: 119702
  },
  {
    id: 8492,
    time: { secs_since_epoch: 1523632165, nanos_since_epoch: 0 },
    capitalization: 18204482,
    price_btc: 2.89748e-7,
    price_usd: 0.00234366,
    price_eth: 0.00000456633,
    volume_usd: 118494
  },
  {
    id: 8756,
    time: { secs_since_epoch: 1523643864, nanos_since_epoch: 0 },
    capitalization: 18011536,
    price_btc: 2.85903e-7,
    price_usd: 0.00231882,
    price_eth: 0.00000450809,
    volume_usd: 102824
  },
  {
    id: 8668,
    time: { secs_since_epoch: 1523645664, nanos_since_epoch: 0 },
    capitalization: 18102727,
    price_btc: 2.87786e-7,
    price_usd: 0.00233056,
    price_eth: 0.00000453489,
    volume_usd: 101381
  },
  {
    id: 8844,
    time: { secs_since_epoch: 1523686765, nanos_since_epoch: 0 },
    capitalization: 18402089,
    price_btc: 2.96603e-7,
    price_usd: 0.0023691,
    price_eth: 0.00000472962,
    volume_usd: 96508
  },
  {
    id: 8976,
    time: { secs_since_epoch: 1523696364, nanos_since_epoch: 0 },
    capitalization: 17970213,
    price_btc: 2.84699e-7,
    price_usd: 0.0023135,
    price_eth: 0.00000453114,
    volume_usd: 103145
  },
  {
    id: 9064,
    time: { secs_since_epoch: 1523696964, nanos_since_epoch: 0 },
    capitalization: 18019226,
    price_btc: 2.85676e-7,
    price_usd: 0.00231981,
    price_eth: 0.00000455704,
    volume_usd: 103149
  },
  {
    id: 8888,
    time: { secs_since_epoch: 1523710764, nanos_since_epoch: 0 },
    capitalization: 17219480,
    price_btc: 2.79847e-7,
    price_usd: 0.00221685,
    price_eth: 0.00000451978,
    volume_usd: 92897
  },
  {
    id: 8932,
    time: { secs_since_epoch: 1523735065, nanos_since_epoch: 0 },
    capitalization: 18134186,
    price_btc: 2.91427e-7,
    price_usd: 0.00233461,
    price_eth: 0.00000465218,
    volume_usd: 61449
  },
  {
    id: 9020,
    time: { secs_since_epoch: 1523736864, nanos_since_epoch: 0 },
    capitalization: 18166421,
    price_btc: 2.91783e-7,
    price_usd: 0.00233876,
    price_eth: 0.00000463613,
    volume_usd: 60019
  },
  {
    id: 8800,
    time: { secs_since_epoch: 1523745264, nanos_since_epoch: 0 },
    capitalization: 18031654,
    price_btc: 2.87947e-7,
    price_usd: 0.00232141,
    price_eth: 0.00000457711,
    volume_usd: 57738
  },
  {
    id: 9240,
    time: { secs_since_epoch: 1523754564, nanos_since_epoch: 0 },
    capitalization: 17793191,
    price_btc: 2.84558e-7,
    price_usd: 0.00229071,
    price_eth: 0.00000453365,
    volume_usd: 54204
  },
  {
    id: 9328,
    time: { secs_since_epoch: 1523762665, nanos_since_epoch: 0 },
    capitalization: 18010527,
    price_btc: 2.86683e-7,
    price_usd: 0.00231869,
    price_eth: 0.00000453543,
    volume_usd: 35918
  },
  {
    id: 9196,
    time: { secs_since_epoch: 1523770761, nanos_since_epoch: 0 },
    capitalization: 17756839,
    price_btc: 2.81866e-7,
    price_usd: 0.00228603,
    price_eth: 0.00000445692,
    volume_usd: 40118
  },
  {
    id: 9284,
    time: { secs_since_epoch: 1523776464, nanos_since_epoch: 0 },
    capitalization: 17255677,
    price_btc: 2.74149e-7,
    price_usd: 0.00222151,
    price_eth: 0.00000434664,
    volume_usd: 72770
  },
  {
    id: 9152,
    time: { secs_since_epoch: 1523819963, nanos_since_epoch: 0 },
    capitalization: 17667900,
    price_btc: 2.74277e-7,
    price_usd: 0.00227458,
    price_eth: 0.00000435174,
    volume_usd: 89580
  },
  {
    id: 9108,
    time: { secs_since_epoch: 1523833763, nanos_since_epoch: 0 },
    capitalization: 17811600,
    price_btc: 2.75192e-7,
    price_usd: 0.00229308,
    price_eth: 0.00000433727,
    volume_usd: 97182
  },
  {
    id: 9372,
    time: { secs_since_epoch: 1523850564, nanos_since_epoch: 0 },
    capitalization: 16956626,
    price_btc: 2.67388e-7,
    price_usd: 0.00218301,
    price_eth: 0.00000421871,
    volume_usd: 93956
  },
  {
    id: 9636,
    time: { secs_since_epoch: 1523861363, nanos_since_epoch: 0 },
    capitalization: 16761117,
    price_btc: 2.66173e-7,
    price_usd: 0.00215784,
    price_eth: 0.00000422016,
    volume_usd: 57735
  },
  {
    id: 9416,
    time: { secs_since_epoch: 1523865264, nanos_since_epoch: 0 },
    capitalization: 16541762,
    price_btc: 2.62258e-7,
    price_usd: 0.0021296,
    price_eth: 0.00000414743,
    volume_usd: 60885
  },
  {
    id: 9504,
    time: { secs_since_epoch: 1523874863, nanos_since_epoch: 0 },
    capitalization: 16136451,
    price_btc: 2.56035e-7,
    price_usd: 0.00207742,
    price_eth: 0.00000403798,
    volume_usd: 64079
  },
  {
    id: 9460,
    time: { secs_since_epoch: 1523876964, nanos_since_epoch: 0 },
    capitalization: 16437910,
    price_btc: 2.621e-7,
    price_usd: 0.00211623,
    price_eth: 0.00000414179,
    volume_usd: 63631
  },
  {
    id: 9548,
    time: { secs_since_epoch: 1523892563, nanos_since_epoch: 0 },
    capitalization: 16213039,
    price_btc: 2.61797e-7,
    price_usd: 0.00208728,
    price_eth: 0.00000414891,
    volume_usd: 66286
  },
  {
    id: 9592,
    time: { secs_since_epoch: 1523920464, nanos_since_epoch: 0 },
    capitalization: 16208456,
    price_btc: 2.5941e-7,
    price_usd: 0.00208669,
    price_eth: 0.0000040955,
    volume_usd: 65362
  },
  {
    id: 9680,
    time: { secs_since_epoch: 1523930363, nanos_since_epoch: 0 },
    capitalization: 16028560,
    price_btc: 2.56898e-7,
    price_usd: 0.00206353,
    price_eth: 0.00000405325,
    volume_usd: 71875
  },
  {
    id: 9724,
    time: { secs_since_epoch: 1523942963, nanos_since_epoch: 0 },
    capitalization: 16093574,
    price_btc: 2.58791e-7,
    price_usd: 0.0020719,
    price_eth: 0.00000408583,
    volume_usd: 74566
  },
  {
    id: 9812,
    time: { secs_since_epoch: 1523953163, nanos_since_epoch: 0 },
    capitalization: 16608252,
    price_btc: 2.63112e-7,
    price_usd: 0.00213816,
    price_eth: 0.00000415373,
    volume_usd: 72554
  },
  {
    id: 9768,
    time: { secs_since_epoch: 1523976264, nanos_since_epoch: 0 },
    capitalization: 16372429,
    price_btc: 2.60151e-7,
    price_usd: 0.0021078,
    price_eth: 0.00000408669,
    volume_usd: 71065
  },
  {
    id: 9900,
    time: { secs_since_epoch: 1523983165, nanos_since_epoch: 0 },
    capitalization: 16003005,
    price_btc: 2.54449e-7,
    price_usd: 0.00206024,
    price_eth: 0.00000399817,
    volume_usd: 63037
  },
  {
    id: 9856,
    time: { secs_since_epoch: 1524006264, nanos_since_epoch: 0 },
    capitalization: 16509837,
    price_btc: 2.68902e-7,
    price_usd: 0.00212549,
    price_eth: 0.00000421531,
    volume_usd: 62661
  },
  {
    id: 10120,
    time: { secs_since_epoch: 1524008364, nanos_since_epoch: 0 },
    capitalization: 16446687,
    price_btc: 2.68199e-7,
    price_usd: 0.00211736,
    price_eth: 0.00000420491,
    volume_usd: 62545
  },
  {
    id: 10208,
    time: { secs_since_epoch: 1524013164, nanos_since_epoch: 0 },
    capitalization: 16709618,
    price_btc: 2.71781e-7,
    price_usd: 0.00215121,
    price_eth: 0.00000426235,
    volume_usd: 61089
  },
  {
    id: 9944,
    time: { secs_since_epoch: 1524042263, nanos_since_epoch: 0 },
    capitalization: 17373044,
    price_btc: 2.76308e-7,
    price_usd: 0.00223662,
    price_eth: 0.00000435235,
    volume_usd: 64125
  },
  {
    id: 9988,
    time: { secs_since_epoch: 1524047063, nanos_since_epoch: 0 },
    capitalization: 16992357,
    price_btc: 2.70309e-7,
    price_usd: 0.00218761,
    price_eth: 0.00000425826,
    volume_usd: 57953
  },
  {
    id: 10076,
    time: { secs_since_epoch: 1524053662, nanos_since_epoch: 0 },
    capitalization: 16258091,
    price_btc: 2.58089e-7,
    price_usd: 0.00209308,
    price_eth: 0.00000404934,
    volume_usd: 60866
  },
  {
    id: 10164,
    time: { secs_since_epoch: 1524064463, nanos_since_epoch: 0 },
    capitalization: 15616259,
    price_btc: 2.51627e-7,
    price_usd: 0.00201045,
    price_eth: 0.00000394958,
    volume_usd: 59175
  },
  {
    id: 10032,
    time: { secs_since_epoch: 1524074665, nanos_since_epoch: 0 },
    capitalization: 16263295,
    price_btc: 2.58305e-7,
    price_usd: 0.00209375,
    price_eth: 0.00000406626,
    volume_usd: 64019
  },
  {
    id: 10428,
    time: { secs_since_epoch: 1524114263, nanos_since_epoch: 0 },
    capitalization: 16436512,
    price_btc: 2.59079e-7,
    price_usd: 0.00211605,
    price_eth: 0.00000396276,
    volume_usd: 78104
  },
  {
    id: 10472,
    time: { secs_since_epoch: 1524116662, nanos_since_epoch: 0 },
    capitalization: 16136840,
    price_btc: 2.54526e-7,
    price_usd: 0.00207747,
    price_eth: 0.00000391269,
    volume_usd: 78027
  },
  {
    id: 10340,
    time: { secs_since_epoch: 1524142462, nanos_since_epoch: 0 },
    capitalization: 16362487,
    price_btc: 2.56254e-7,
    price_usd: 0.00210652,
    price_eth: 0.00000389027,
    volume_usd: 70558
  },
  {
    id: 10252,
    time: { secs_since_epoch: 1524149364, nanos_since_epoch: 0 },
    capitalization: 16302832,
    price_btc: 2.55287e-7,
    price_usd: 0.00209884,
    price_eth: 0.00000385426,
    volume_usd: 71351
  },
  {
    id: 10384,
    time: { secs_since_epoch: 1524160763, nanos_since_epoch: 0 },
    capitalization: 16724454,
    price_btc: 2.6077e-7,
    price_usd: 0.00215312,
    price_eth: 0.00000383074,
    volume_usd: 73720
  },
  {
    id: 10296,
    time: { secs_since_epoch: 1524170062, nanos_since_epoch: 0 },
    capitalization: 15519320,
    price_btc: 2.42596e-7,
    price_usd: 0.00199797,
    price_eth: 0.00000359445,
    volume_usd: 71451
  },
  {
    id: 10516,
    time: { secs_since_epoch: 1524188063, nanos_since_epoch: 0 },
    capitalization: 16040367,
    price_btc: 2.48506e-7,
    price_usd: 0.00206505,
    price_eth: 0.00000358994,
    volume_usd: 74266
  },
  {
    id: 10692,
    time: { secs_since_epoch: 1524202163, nanos_since_epoch: 0 },
    capitalization: 16518304,
    price_btc: 2.56978e-7,
    price_usd: 0.00212658,
    price_eth: 0.00000376366,
    volume_usd: 65402
  },
  {
    id: 10604,
    time: { secs_since_epoch: 1524212963, nanos_since_epoch: 0 },
    capitalization: 16315260,
    price_btc: 2.5249e-7,
    price_usd: 0.00210044,
    price_eth: 0.00000364412,
    volume_usd: 63951
  },
  {
    id: 10648,
    time: { secs_since_epoch: 1524237863, nanos_since_epoch: 0 },
    capitalization: 16314949,
    price_btc: 2.47706e-7,
    price_usd: 0.0021004,
    price_eth: 0.0000035823,
    volume_usd: 83530
  },
  {
    id: 10780,
    time: { secs_since_epoch: 1524238463, nanos_since_epoch: 0 },
    capitalization: 16241235,
    price_btc: 2.46672e-7,
    price_usd: 0.00209091,
    price_eth: 0.0000035734,
    volume_usd: 84537
  },
  {
    id: 10736,
    time: { secs_since_epoch: 1524244163, nanos_since_epoch: 0 },
    capitalization: 16352855,
    price_btc: 2.47723e-7,
    price_usd: 0.00210528,
    price_eth: 0.00000357301,
    volume_usd: 90812
  },
  {
    id: 10560,
    time: { secs_since_epoch: 1524254963, nanos_since_epoch: 0 },
    capitalization: 16521877,
    price_btc: 2.5027e-7,
    price_usd: 0.00212704,
    price_eth: 0.00000358675,
    volume_usd: 96895
  },
  {
    id: 11044,
    time: { secs_since_epoch: 1524293363, nanos_since_epoch: 0 },
    capitalization: 16729037,
    price_btc: 2.42346e-7,
    price_usd: 0.00215371,
    price_eth: 0.00000348821,
    volume_usd: 124298
  },
  {
    id: 10956,
    time: { secs_since_epoch: 1524303263, nanos_since_epoch: 0 },
    capitalization: 16094274,
    price_btc: 2.36627e-7,
    price_usd: 0.00207199,
    price_eth: 0.00000346472,
    volume_usd: 126300
  },
  {
    id: 10824,
    time: { secs_since_epoch: 1524323964, nanos_since_epoch: 0 },
    capitalization: 16345476,
    price_btc: 2.40015e-7,
    price_usd: 0.00210433,
    price_eth: 0.00000349613,
    volume_usd: 115325
  },
  {
    id: 10868,
    time: { secs_since_epoch: 1524331164, nanos_since_epoch: 0 },
    capitalization: 16487467,
    price_btc: 2.41189e-7,
    price_usd: 0.00212261,
    price_eth: 0.00000351224,
    volume_usd: 111669
  },
  {
    id: 10912,
    time: { secs_since_epoch: 1524335063, nanos_since_epoch: 0 },
    capitalization: 16393635,
    price_btc: 2.41351e-7,
    price_usd: 0.00211053,
    price_eth: 0.00000349671,
    volume_usd: 103559
  },
  {
    id: 11000,
    time: { secs_since_epoch: 1524343162, nanos_since_epoch: 0 },
    capitalization: 16056446,
    price_btc: 2.36557e-7,
    price_usd: 0.00206712,
    price_eth: 0.00000342258,
    volume_usd: 100765
  },
  {
    id: 11132,
    time: { secs_since_epoch: 1524359062, nanos_since_epoch: 0 },
    capitalization: 16323105,
    price_btc: 2.38298e-7,
    price_usd: 0.00210145,
    price_eth: 0.00000353353,
    volume_usd: 86263
  },
  {
    id: 11352,
    time: { secs_since_epoch: 1524374661, nanos_since_epoch: 0 },
    capitalization: 15687565,
    price_btc: 2.28075e-7,
    price_usd: 0.00201963,
    price_eth: 0.00000332772,
    volume_usd: 77646
  },
  {
    id: 11220,
    time: { secs_since_epoch: 1524392661, nanos_since_epoch: 0 },
    capitalization: 15967818,
    price_btc: 2.30899e-7,
    price_usd: 0.00205571,
    price_eth: 0.00000332011,
    volume_usd: 73130
  },
  {
    id: 11308,
    time: { secs_since_epoch: 1524394161, nanos_since_epoch: 0 },
    capitalization: 16024987,
    price_btc: 2.31329e-7,
    price_usd: 0.00206307,
    price_eth: 0.00000331264,
    volume_usd: 73139
  },
  {
    id: 11264,
    time: { secs_since_epoch: 1524416361, nanos_since_epoch: 0 },
    capitalization: 16160298,
    price_btc: 2.34356e-7,
    price_usd: 0.00208049,
    price_eth: 0.00000328711,
    volume_usd: 73957
  },
  {
    id: 11088,
    time: { secs_since_epoch: 1524419662, nanos_since_epoch: 0 },
    capitalization: 16214437,
    price_btc: 2.33721e-7,
    price_usd: 0.00208746,
    price_eth: 0.00000325468,
    volume_usd: 67275
  },
  {
    id: 11176,
    time: { secs_since_epoch: 1524432862, nanos_since_epoch: 0 },
    capitalization: 16317746,
    price_btc: 2.36525e-7,
    price_usd: 0.00210076,
    price_eth: 0.00000329398,
    volume_usd: 67318
  },
  {
    id: 11616,
    time: { secs_since_epoch: 1524453863, nanos_since_epoch: 0 },
    capitalization: 16239371,
    price_btc: 2.36229e-7,
    price_usd: 0.00209067,
    price_eth: 0.00000330363,
    volume_usd: 91665
  },
  {
    id: 11528,
    time: { secs_since_epoch: 1524457167, nanos_since_epoch: 0 },
    capitalization: 16009918,
    price_btc: 2.32904e-7,
    price_usd: 0.00206113,
    price_eth: 0.00000326169,
    volume_usd: 87506
  },
  {
    id: 11396,
    time: { secs_since_epoch: 1524483861, nanos_since_epoch: 0 },
    capitalization: 15988713,
    price_btc: 2.31034e-7,
    price_usd: 0.0020584,
    price_eth: 0.00000323699,
    volume_usd: 84158
  },
  {
    id: 11440,
    time: { secs_since_epoch: 1524501262, nanos_since_epoch: 0 },
    capitalization: 15916630,
    price_btc: 2.29887e-7,
    price_usd: 0.00204912,
    price_eth: 0.00000317988,
    volume_usd: 81066
  },
  {
    id: 11484,
    time: { secs_since_epoch: 1524515663, nanos_since_epoch: 0 },
    capitalization: 16151443,
    price_btc: 2.34379e-7,
    price_usd: 0.00207935,
    price_eth: 0.0000032721,
    volume_usd: 84313
  },
  {
    id: 11572,
    time: { secs_since_epoch: 1524516563, nanos_since_epoch: 0 },
    capitalization: 16074855,
    price_btc: 2.32683e-7,
    price_usd: 0.00206949,
    price_eth: 0.00000324961,
    volume_usd: 84564
  },
  {
    id: 11660,
    time: { secs_since_epoch: 1524524063, nanos_since_epoch: 0 },
    capitalization: 16526071,
    price_btc: 2.38467e-7,
    price_usd: 0.00212758,
    price_eth: 0.00000331338,
    volume_usd: 77810
  },
  {
    id: 11924,
    time: { secs_since_epoch: 1524535762, nanos_since_epoch: 0 },
    capitalization: 17758548,
    price_btc: 2.49374e-7,
    price_usd: 0.00228625,
    price_eth: 0.00000341663,
    volume_usd: 92129
  },
  {
    id: 11748,
    time: { secs_since_epoch: 1524547463, nanos_since_epoch: 0 },
    capitalization: 17213732,
    price_btc: 2.40868e-7,
    price_usd: 0.00221611,
    price_eth: 0.00000326043,
    volume_usd: 108927
  },
  {
    id: 11880,
    time: { secs_since_epoch: 1524548963, nanos_since_epoch: 0 },
    capitalization: 17145455,
    price_btc: 2.39019e-7,
    price_usd: 0.00220732,
    price_eth: 0.00000324225,
    volume_usd: 110391
  },
  {
    id: 11704,
    time: { secs_since_epoch: 1524549564, nanos_since_epoch: 0 },
    capitalization: 17513015,
    price_btc: 2.43763e-7,
    price_usd: 0.00225464,
    price_eth: 0.00000330438,
    volume_usd: 110451
  },
  {
    id: 11836,
    time: { secs_since_epoch: 1524579266, nanos_since_epoch: 0 },
    capitalization: 17846321,
    price_btc: 2.4783e-7,
    price_usd: 0.00229755,
    price_eth: 0.00000332499,
    volume_usd: 148942
  },
  {
    id: 11792,
    time: { secs_since_epoch: 1524606266, nanos_since_epoch: 0 },
    capitalization: 21718597,
    price_btc: 2.95084e-7,
    price_usd: 0.00279607,
    price_eth: 0.00000396798,
    volume_usd: 267708
  },
  {
    id: 12012,
    time: { secs_since_epoch: 1524623367, nanos_since_epoch: 0 },
    capitalization: 21188928,
    price_btc: 2.80995e-7,
    price_usd: 0.00272788,
    price_eth: 0.0000039116,
    volume_usd: 331296
  },
  {
    id: 12232,
    time: { secs_since_epoch: 1524623966, nanos_since_epoch: 0 },
    capitalization: 21406186,
    price_btc: 2.83744e-7,
    price_usd: 0.00275585,
    price_eth: 0.0000039395,
    volume_usd: 333105
  },
  {
    id: 11968,
    time: { secs_since_epoch: 1524626667, nanos_since_epoch: 0 },
    capitalization: 21374650,
    price_btc: 2.84023e-7,
    price_usd: 0.00275179,
    price_eth: 0.00000400654,
    volume_usd: 328672
  },
  {
    id: 12188,
    time: { secs_since_epoch: 1524662069, nanos_since_epoch: 0 },
    capitalization: 20425922,
    price_btc: 2.8739e-7,
    price_usd: 0.00262965,
    price_eth: 0.000004175,
    volume_usd: 331218
  },
  {
    id: 12144,
    time: { secs_since_epoch: 1524665068, nanos_since_epoch: 0 },
    capitalization: 19730882,
    price_btc: 2.80622e-7,
    price_usd: 0.00254017,
    price_eth: 0.00000411992,
    volume_usd: 320770
  },
  {
    id: 12100,
    time: { secs_since_epoch: 1524683069, nanos_since_epoch: 0 },
    capitalization: 19094643,
    price_btc: 2.74416e-7,
    price_usd: 0.00245826,
    price_eth: 0.00000391749,
    volume_usd: 315739
  },
  {
    id: 12056,
    time: { secs_since_epoch: 1524685165, nanos_since_epoch: 0 },
    capitalization: 19351360,
    price_btc: 2.78385e-7,
    price_usd: 0.00249131,
    price_eth: 0.00000397935,
    volume_usd: 305599
  },
  {
    id: 12496,
    time: { secs_since_epoch: 1524703465, nanos_since_epoch: 0 },
    capitalization: 18757065,
    price_btc: 2.76312e-7,
    price_usd: 0.0024148,
    price_eth: 0.00000398914,
    volume_usd: 186558
  },
  {
    id: 12408,
    time: { secs_since_epoch: 1524722965, nanos_since_epoch: 0 },
    capitalization: 19754418,
    price_btc: 2.85775e-7,
    price_usd: 0.0025432,
    price_eth: 0.00000402311,
    volume_usd: 156099
  },
  {
    id: 12276,
    time: { secs_since_epoch: 1524730165, nanos_since_epoch: 0 },
    capitalization: 19120431,
    price_btc: 2.77722e-7,
    price_usd: 0.00246158,
    price_eth: 0.00000388368,
    volume_usd: 160361
  },
  {
    id: 12320,
    time: { secs_since_epoch: 1524761665, nanos_since_epoch: 0 },
    capitalization: 18766153,
    price_btc: 2.72568e-7,
    price_usd: 0.00241597,
    price_eth: 0.00000380671,
    volume_usd: 107067
  },
  {
    id: 12364,
    time: { secs_since_epoch: 1524768266, nanos_since_epoch: 0 },
    capitalization: 18485900,
    price_btc: 2.68428e-7,
    price_usd: 0.00237989,
    price_eth: 0.0000037627,
    volume_usd: 100007
  },
  {
    id: 12452,
    time: { secs_since_epoch: 1524771568, nanos_since_epoch: 0 },
    capitalization: 18630454,
    price_btc: 2.70671e-7,
    price_usd: 0.0023985,
    price_eth: 0.00000380225,
    volume_usd: 101491
  },
  {
    id: 12540,
    time: { secs_since_epoch: 1524809966, nanos_since_epoch: 0 },
    capitalization: 19657557,
    price_btc: 2.74442e-7,
    price_usd: 0.00253073,
    price_eth: 0.00000387576,
    volume_usd: 123804
  },
  {
    id: 12672,
    time: { secs_since_epoch: 1524814465, nanos_since_epoch: 0 },
    capitalization: 19857571,
    price_btc: 2.77465e-7,
    price_usd: 0.00255648,
    price_eth: 0.00000390929,
    volume_usd: 119699
  },
  {
    id: 12584,
    time: { secs_since_epoch: 1524828267, nanos_since_epoch: 0 },
    capitalization: 19547025,
    price_btc: 2.69503e-7,
    price_usd: 0.0025165,
    price_eth: 0.00000370663,
    volume_usd: 116030
  },
  {
    id: 12804,
    time: { secs_since_epoch: 1524845365, nanos_since_epoch: 0 },
    capitalization: 18793650,
    price_btc: 2.60663e-7,
    price_usd: 0.00241951,
    price_eth: 0.00000357986,
    volume_usd: 124651
  },
  {
    id: 12716,
    time: { secs_since_epoch: 1524855865, nanos_since_epoch: 0 },
    capitalization: 19180552,
    price_btc: 2.67202e-7,
    price_usd: 0.00246932,
    price_eth: 0.00000366497,
    volume_usd: 124279
  },
  {
    id: 12760,
    time: { secs_since_epoch: 1524860967, nanos_since_epoch: 0 },
    capitalization: 19640624,
    price_btc: 2.77719e-7,
    price_usd: 0.00252855,
    price_eth: 0.00000383573,
    volume_usd: 123093
  },
  {
    id: 12628,
    time: { secs_since_epoch: 1524864866, nanos_since_epoch: 0 },
    capitalization: 19265917,
    price_btc: 2.75123e-7,
    price_usd: 0.00248031,
    price_eth: 0.000003802,
    volume_usd: 125882
  },
  {
    id: 12980,
    time: { secs_since_epoch: 1524891265, nanos_since_epoch: 0 },
    capitalization: 19270500,
    price_btc: 2.71642e-7,
    price_usd: 0.0024809,
    price_eth: 0.00000373191,
    volume_usd: 123682
  },
  {
    id: 13024,
    time: { secs_since_epoch: 1524891865, nanos_since_epoch: 0 },
    capitalization: 19157560,
    price_btc: 2.70394e-7,
    price_usd: 0.00246636,
    price_eth: 0.00000371297,
    volume_usd: 120483
  },
  {
    id: 12936,
    time: { secs_since_epoch: 1524905366, nanos_since_epoch: 0 },
    capitalization: 19570405,
    price_btc: 2.70087e-7,
    price_usd: 0.00251951,
    price_eth: 0.00000369873,
    volume_usd: 121502
  },
  {
    id: 12848,
    time: { secs_since_epoch: 1524912565, nanos_since_epoch: 0 },
    capitalization: 19783702,
    price_btc: 2.75436e-7,
    price_usd: 0.00254697,
    price_eth: 0.00000374066,
    volume_usd: 118571
  },
  {
    id: 12892,
    time: { secs_since_epoch: 1524920066, nanos_since_epoch: 0 },
    capitalization: 19572657,
    price_btc: 2.68984e-7,
    price_usd: 0.0025198,
    price_eth: 0.00000366014,
    volume_usd: 120531
  },
  {
    id: 13068,
    time: { secs_since_epoch: 1524956065, nanos_since_epoch: 0 },
    capitalization: 20052847,
    price_btc: 2.76586e-7,
    price_usd: 0.00258162,
    price_eth: 0.00000376923,
    volume_usd: 102054
  },
  {
    id: 13376,
    time: { secs_since_epoch: 1524963565, nanos_since_epoch: 0 },
    capitalization: 20218063,
    price_btc: 2.76999e-7,
    price_usd: 0.00260289,
    price_eth: 0.00000378175,
    volume_usd: 98106
  },
  {
    id: 13288,
    time: { secs_since_epoch: 1524964165, nanos_since_epoch: 0 },
    capitalization: 20213402,
    price_btc: 2.76913e-7,
    price_usd: 0.00260229,
    price_eth: 0.00000378583,
    volume_usd: 99604
  },
  {
    id: 13332,
    time: { secs_since_epoch: 1524970465, nanos_since_epoch: 0 },
    capitalization: 19650333,
    price_btc: 2.66792e-7,
    price_usd: 0.0025298,
    price_eth: 0.00000365127,
    volume_usd: 111536
  },
  {
    id: 13156,
    time: { secs_since_epoch: 1524983965, nanos_since_epoch: 0 },
    capitalization: 19556734,
    price_btc: 2.66556e-7,
    price_usd: 0.00251775,
    price_eth: 0.00000363644,
    volume_usd: 112043
  },
  {
    id: 13200,
    time: { secs_since_epoch: 1524990866, nanos_since_epoch: 0 },
    capitalization: 19527683,
    price_btc: 2.67516e-7,
    price_usd: 0.00251401,
    price_eth: 0.00000365626,
    volume_usd: 121791
  },
  {
    id: 13112,
    time: { secs_since_epoch: 1525020865, nanos_since_epoch: 0 },
    capitalization: 19273063,
    price_btc: 2.66919e-7,
    price_usd: 0.00248123,
    price_eth: 0.00000365896,
    volume_usd: 123704
  },
  {
    id: 13244,
    time: { secs_since_epoch: 1525038565, nanos_since_epoch: 0 },
    capitalization: 19224905,
    price_btc: 2.65139e-7,
    price_usd: 0.00247503,
    price_eth: 0.00000364129,
    volume_usd: 103861
  },
  {
    id: 13420,
    time: { secs_since_epoch: 1525061366, nanos_since_epoch: 0 },
    capitalization: 18864102,
    price_btc: 2.60873e-7,
    price_usd: 0.00242858,
    price_eth: 0.00000357313,
    volume_usd: 107392
  },
  {
    id: 13464,
    time: { secs_since_epoch: 1525074565, nanos_since_epoch: 0 },
    capitalization: 18467258,
    price_btc: 2.57356e-7,
    price_usd: 0.00237749,
    price_eth: 0.00000351539,
    volume_usd: 89768
  },
  {
    id: 13596,
    time: { secs_since_epoch: 1525088664, nanos_since_epoch: 0 },
    capitalization: 18868219,
    price_btc: 2.62689e-7,
    price_usd: 0.00242911,
    price_eth: 0.00000354536,
    volume_usd: 74769
  },
  {
    id: 13640,
    time: { secs_since_epoch: 1525091965, nanos_since_epoch: 0 },
    capitalization: 18918320,
    price_btc: 2.61936e-7,
    price_usd: 0.00243556,
    price_eth: 0.00000352931,
    volume_usd: 69296
  },
  {
    id: 13508,
    time: { secs_since_epoch: 1525100665, nanos_since_epoch: 0 },
    capitalization: 18428887,
    price_btc: 2.55367e-7,
    price_usd: 0.00237255,
    price_eth: 0.00000348628,
    volume_usd: 77008
  },
  {
    id: 13684,
    time: { secs_since_epoch: 1525120163, nanos_since_epoch: 0 },
    capitalization: 18417080,
    price_btc: 2.54166e-7,
    price_usd: 0.00237103,
    price_eth: 0.00000349854,
    volume_usd: 79360
  },
  {
    id: 13552,
    time: { secs_since_epoch: 1525128263, nanos_since_epoch: 0 },
    capitalization: 18584237,
    price_btc: 2.58456e-7,
    price_usd: 0.00239255,
    price_eth: 0.00000358002,
    volume_usd: 82278
  },
  {
    id: 13904,
    time: { secs_since_epoch: 1525134864, nanos_since_epoch: 0 },
    capitalization: 19116004,
    price_btc: 2.68791e-7,
    price_usd: 0.00246101,
    price_eth: 0.00000374076,
    volume_usd: 75546
  },
  {
    id: 13860,
    time: { secs_since_epoch: 1525139063, nanos_since_epoch: 0 },
    capitalization: 18520621,
    price_btc: 2.66085e-7,
    price_usd: 0.00238436,
    price_eth: 0.00000372417,
    volume_usd: 68660
  },
  {
    id: 13948,
    time: { secs_since_epoch: 1525146862, nanos_since_epoch: 0 },
    capitalization: 18555808,
    price_btc: 2.67084e-7,
    price_usd: 0.00238889,
    price_eth: 0.00000370476,
    volume_usd: 75494
  },
  {
    id: 13772,
    time: { secs_since_epoch: 1525161262, nanos_since_epoch: 0 },
    capitalization: 18002837,
    price_btc: 2.58153e-7,
    price_usd: 0.0023177,
    price_eth: 0.00000349935,
    volume_usd: 76729
  },
  {
    id: 13728,
    time: { secs_since_epoch: 1525181062, nanos_since_epoch: 0 },
    capitalization: 18194928,
    price_btc: 2.63209e-7,
    price_usd: 0.00234243,
    price_eth: 0.00000361541,
    volume_usd: 96049
  },
  {
    id: 13816,
    time: { secs_since_epoch: 1525201764, nanos_since_epoch: 0 },
    capitalization: 19089827,
    price_btc: 2.7329e-7,
    price_usd: 0.00245764,
    price_eth: 0.00000371134,
    volume_usd: 119838
  },
  {
    id: 14036,
    time: { secs_since_epoch: 1525220363, nanos_since_epoch: 0 },
    capitalization: 19287278,
    price_btc: 2.73373e-7,
    price_usd: 0.00248306,
    price_eth: 0.00000367624,
    volume_usd: 122483
  },
  {
    id: 14256,
    time: { secs_since_epoch: 1525237763, nanos_since_epoch: 0 },
    capitalization: 19260791,
    price_btc: 2.73498e-7,
    price_usd: 0.00247965,
    price_eth: 0.00000366915,
    volume_usd: 120001
  },
  {
    id: 13992,
    time: { secs_since_epoch: 1525255763, nanos_since_epoch: 0 },
    capitalization: 19870465,
    price_btc: 2.79935e-7,
    price_usd: 0.00255814,
    price_eth: 0.00000377034,
    volume_usd: 123579
  },
  {
    id: 14168,
    time: { secs_since_epoch: 1525258763, nanos_since_epoch: 0 },
    capitalization: 20329139,
    price_btc: 2.85682e-7,
    price_usd: 0.00261719,
    price_eth: 0.00000384032,
    volume_usd: 133147
  },
  {
    id: 14124,
    time: { secs_since_epoch: 1525268062, nanos_since_epoch: 0 },
    capitalization: 19984648,
    price_btc: 2.83409e-7,
    price_usd: 0.00257284,
    price_eth: 0.00000381914,
    volume_usd: 127191
  },
  {
    id: 14212,
    time: { secs_since_epoch: 1525273163, nanos_since_epoch: 0 },
    capitalization: 19896486,
    price_btc: 2.81593e-7,
    price_usd: 0.00256149,
    price_eth: 0.00000378867,
    volume_usd: 125731
  },
  {
    id: 14080,
    time: { secs_since_epoch: 1525280963, nanos_since_epoch: 0 },
    capitalization: 19845376,
    price_btc: 2.79666e-7,
    price_usd: 0.00255491,
    price_eth: 0.00000375387,
    volume_usd: 110031
  },
  {
    id: 14432,
    time: { secs_since_epoch: 1525322363, nanos_since_epoch: 0 },
    capitalization: 20223578,
    price_btc: 2.81263e-7,
    price_usd: 0.0026036,
    price_eth: 0.00000358987,
    volume_usd: 115046
  },
  {
    id: 14476,
    time: { secs_since_epoch: 1525333463, nanos_since_epoch: 0 },
    capitalization: 20246026,
    price_btc: 2.8239e-7,
    price_usd: 0.00260649,
    price_eth: 0.00000359049,
    volume_usd: 112616
  },
  {
    id: 14388,
    time: { secs_since_epoch: 1525341563, nanos_since_epoch: 0 },
    capitalization: 20351665,
    price_btc: 2.8523e-7,
    price_usd: 0.00262009,
    price_eth: 0.00000367452,
    volume_usd: 120804
  },
  {
    id: 14520,
    time: { secs_since_epoch: 1525355663, nanos_since_epoch: 0 },
    capitalization: 20778491,
    price_btc: 2.86251e-7,
    price_usd: 0.00267504,
    price_eth: 0.00000356494,
    volume_usd: 103374
  },
  {
    id: 14344,
    time: { secs_since_epoch: 1525370364, nanos_since_epoch: 0 },
    capitalization: 21110321,
    price_btc: 2.80567e-7,
    price_usd: 0.00271776,
    price_eth: 0.00000353698,
    volume_usd: 136310
  },
  {
    id: 14300,
    time: { secs_since_epoch: 1525382363, nanos_since_epoch: 0 },
    capitalization: 21839149,
    price_btc: 2.90894e-7,
    price_usd: 0.00281159,
    price_eth: 0.00000370035,
    volume_usd: 136993
  },
  {
    id: 14784,
    time: { secs_since_epoch: 1525389263, nanos_since_epoch: 0 },
    capitalization: 22404083,
    price_btc: 2.95189e-7,
    price_usd: 0.00288432,
    price_eth: 0.00000367709,
    volume_usd: 150936
  },
  {
    id: 14828,
    time: { secs_since_epoch: 1525402463, nanos_since_epoch: 0 },
    capitalization: 22553297,
    price_btc: 3.0176e-7,
    price_usd: 0.00290353,
    price_eth: 0.00000375463,
    volume_usd: 157511
  },
  {
    id: 14564,
    time: { secs_since_epoch: 1525415363, nanos_since_epoch: 0 },
    capitalization: 21589578,
    price_btc: 2.88739e-7,
    price_usd: 0.00277946,
    price_eth: 0.00000359933,
    volume_usd: 151177
  },
  {
    id: 14696,
    time: { secs_since_epoch: 1525419563, nanos_since_epoch: 0 },
    capitalization: 21755182,
    price_btc: 2.89702e-7,
    price_usd: 0.00280078,
    price_eth: 0.00000360225,
    volume_usd: 147020
  },
  {
    id: 14740,
    time: { secs_since_epoch: 1525423463, nanos_since_epoch: 0 },
    capitalization: 21687138,
    price_btc: 2.86576e-7,
    price_usd: 0.00279202,
    price_eth: 0.00000352624,
    volume_usd: 137859
  },
  {
    id: 14608,
    time: { secs_since_epoch: 1525428863, nanos_since_epoch: 0 },
    capitalization: 22626623,
    price_btc: 2.99972e-7,
    price_usd: 0.00291297,
    price_eth: 0.00000365794,
    volume_usd: 148356
  },
  {
    id: 14652,
    time: { secs_since_epoch: 1525466663, nanos_since_epoch: 0 },
    capitalization: 21435625,
    price_btc: 2.85642e-7,
    price_usd: 0.00275964,
    price_eth: 0.00000351267,
    volume_usd: 125091
  },
  {
    id: 14916,
    time: { secs_since_epoch: 1525485563, nanos_since_epoch: 0 },
    capitalization: 22030464,
    price_btc: 2.91188e-7,
    price_usd: 0.00283622,
    price_eth: 0.00000359189,
    volume_usd: 100151
  },
  {
    id: 15048,
    time: { secs_since_epoch: 1525506563, nanos_since_epoch: 0 },
    capitalization: 22612020,
    price_btc: 2.96929e-7,
    price_usd: 0.00291109,
    price_eth: 0.00000362,
    volume_usd: 94025
  },
  {
    id: 14960,
    time: { secs_since_epoch: 1525524563, nanos_since_epoch: 0 },
    capitalization: 22852503,
    price_btc: 2.96383e-7,
    price_usd: 0.00294205,
    price_eth: 0.00000358408,
    volume_usd: 74817
  },
  {
    id: 15004,
    time: { secs_since_epoch: 1525526363, nanos_since_epoch: 0 },
    capitalization: 22618545,
    price_btc: 2.92395e-7,
    price_usd: 0.00291193,
    price_eth: 0.00000352358,
    volume_usd: 70956
  },
  {
    id: 15092,
    time: { secs_since_epoch: 1525542862, nanos_since_epoch: 0 },
    capitalization: 22097498,
    price_btc: 2.87284e-7,
    price_usd: 0.00284485,
    price_eth: 0.00000349789,
    volume_usd: 59109
  },
  {
    id: 14872,
    time: { secs_since_epoch: 1525548863, nanos_since_epoch: 0 },
    capitalization: 22461485,
    price_btc: 2.93494e-7,
    price_usd: 0.00289171,
    price_eth: 0.00000357234,
    volume_usd: 69247
  },
  {
    id: 15356,
    time: { secs_since_epoch: 1525586963, nanos_since_epoch: 0 },
    capitalization: 22299687,
    price_btc: 2.94977e-7,
    price_usd: 0.00287088,
    price_eth: 0.0000035925,
    volume_usd: 66757
  },
  {
    id: 15312,
    time: { secs_since_epoch: 1525600463, nanos_since_epoch: 0 },
    capitalization: 20898422,
    price_btc: 2.82207e-7,
    price_usd: 0.00269048,
    price_eth: 0.00000347524,
    volume_usd: 68273
  },
  {
    id: 15400,
    time: { secs_since_epoch: 1525607363, nanos_since_epoch: 0 },
    capitalization: 21772970,
    price_btc: 2.93743e-7,
    price_usd: 0.00280307,
    price_eth: 0.00000359069,
    volume_usd: 65862
  },
  {
    id: 15180,
    time: { secs_since_epoch: 1525610063, nanos_since_epoch: 0 },
    capitalization: 21419391,
    price_btc: 2.90851e-7,
    price_usd: 0.00275755,
    price_eth: 0.00000360221,
    volume_usd: 63658
  },
  {
    id: 15224,
    time: { secs_since_epoch: 1525618163, nanos_since_epoch: 0 },
    capitalization: 21270876,
    price_btc: 2.86234e-7,
    price_usd: 0.00273843,
    price_eth: 0.00000351974,
    volume_usd: 65660
  },
  {
    id: 15268,
    time: { secs_since_epoch: 1525628964, nanos_since_epoch: 0 },
    capitalization: 21474075,
    price_btc: 2.89029e-7,
    price_usd: 0.00276459,
    price_eth: 0.0000035005,
    volume_usd: 65810
  },
  {
    id: 15136,
    time: { secs_since_epoch: 1525640663, nanos_since_epoch: 0 },
    capitalization: 20929414,
    price_btc: 2.8196e-7,
    price_usd: 0.00269447,
    price_eth: 0.00000346299,
    volume_usd: 51988
  },
  {
    id: 15576,
    time: { secs_since_epoch: 1525657462, nanos_since_epoch: 0 },
    capitalization: 21062550,
    price_btc: 2.90465e-7,
    price_usd: 0.00271161,
    price_eth: 0.00000355887,
    volume_usd: 62958
  },
  {
    id: 15664,
    time: { secs_since_epoch: 1525662263, nanos_since_epoch: 0 },
    capitalization: 19993037,
    price_btc: 2.76463e-7,
    price_usd: 0.00257392,
    price_eth: 0.00000342317,
    volume_usd: 107442
  },
  {
    id: 15532,
    time: { secs_since_epoch: 1525707863, nanos_since_epoch: 0 },
    capitalization: 26106172,
    price_btc: 3.59628e-7,
    price_usd: 0.00336093,
    price_eth: 0.00000461096,
    volume_usd: 676642
  },
  {
    id: 15444,
    time: { secs_since_epoch: 1525720163, nanos_since_epoch: 0 },
    capitalization: 27098243,
    price_btc: 3.72425e-7,
    price_usd: 0.00348865,
    price_eth: 0.00000468503,
    volume_usd: 741890
  },
  {
    id: 15620,
    time: { secs_since_epoch: 1525730063, nanos_since_epoch: 0 },
    capitalization: 28257005,
    price_btc: 3.86958e-7,
    price_usd: 0.00363783,
    price_eth: 0.00000481493,
    volume_usd: 788065
  },
  {
    id: 15488,
    time: { secs_since_epoch: 1525731862, nanos_since_epoch: 0 },
    capitalization: 27808740,
    price_btc: 3.81808e-7,
    price_usd: 0.00358012,
    price_eth: 0.00000476945,
    volume_usd: 789867
  },
  {
    id: 15796,
    time: { secs_since_epoch: 1525734562, nanos_since_epoch: 0 },
    capitalization: 27764154,
    price_btc: 3.83372e-7,
    price_usd: 0.00357438,
    price_eth: 0.00000481357,
    volume_usd: 789060
  },
  {
    id: 15708,
    time: { secs_since_epoch: 1525745663, nanos_since_epoch: 0 },
    capitalization: 27499902,
    price_btc: 3.75841e-7,
    price_usd: 0.00354036,
    price_eth: 0.00000458816,
    volume_usd: 796579
  },
  {
    id: 15840,
    time: { secs_since_epoch: 1525754662, nanos_since_epoch: 0 },
    capitalization: 25551802,
    price_btc: 3.49592e-7,
    price_usd: 0.00328956,
    price_eth: 0.00000429585,
    volume_usd: 808966
  },
  {
    id: 15884,
    time: { secs_since_epoch: 1525762162, nanos_since_epoch: 0 },
    capitalization: 24377427,
    price_btc: 3.36463e-7,
    price_usd: 0.00313837,
    price_eth: 0.0000041602,
    volume_usd: 831648
  },
  {
    id: 15972,
    time: { secs_since_epoch: 1525764563, nanos_since_epoch: 0 },
    capitalization: 23734818,
    price_btc: 3.26821e-7,
    price_usd: 0.00305564,
    price_eth: 0.00000403682,
    volume_usd: 793233
  },
  {
    id: 15928,
    time: { secs_since_epoch: 1525809863, nanos_since_epoch: 0 },
    capitalization: 25773177,
    price_btc: 3.58597e-7,
    price_usd: 0.00331806,
    price_eth: 0.00000442922,
    volume_usd: 443623
  },
  {
    id: 15752,
    time: { secs_since_epoch: 1525813162, nanos_since_epoch: 0 },
    capitalization: 25320718,
    price_btc: 3.54875e-7,
    price_usd: 0.00325981,
    price_eth: 0.00000439255,
    volume_usd: 412966
  },
  {
    id: 16236,
    time: { secs_since_epoch: 1525858463, nanos_since_epoch: 0 },
    capitalization: 27131876,
    price_btc: 3.83142e-7,
    price_usd: 0.00349298,
    price_eth: 0.00000477097,
    volume_usd: 397392
  },
  {
    id: 16016,
    time: { secs_since_epoch: 1525876763, nanos_since_epoch: 0 },
    capitalization: 27675837,
    price_btc: 3.84324e-7,
    price_usd: 0.00356301,
    price_eth: 0.00000477755,
    volume_usd: 342535
  },
  {
    id: 16060,
    time: { secs_since_epoch: 1525883963, nanos_since_epoch: 0 },
    capitalization: 27831654,
    price_btc: 3.85806e-7,
    price_usd: 0.00358307,
    price_eth: 0.00000478356,
    volume_usd: 343952
  },
  {
    id: 16104,
    time: { secs_since_epoch: 1525887863, nanos_since_epoch: 0 },
    capitalization: 28148415,
    price_btc: 3.88265e-7,
    price_usd: 0.00362385,
    price_eth: 0.00000479556,
    volume_usd: 342861
  },
  {
    id: 16280,
    time: { secs_since_epoch: 1525894763, nanos_since_epoch: 0 },
    capitalization: 28023357,
    price_btc: 3.89029e-7,
    price_usd: 0.00360775,
    price_eth: 0.00000483057,
    volume_usd: 313598
  },
  {
    id: 16192,
    time: { secs_since_epoch: 1525901663, nanos_since_epoch: 0 },
    capitalization: 28227100,
    price_btc: 3.93169e-7,
    price_usd: 0.00363398,
    price_eth: 0.00000488701,
    volume_usd: 305929
  },
  {
    id: 16148,
    time: { secs_since_epoch: 1525905863, nanos_since_epoch: 0 },
    capitalization: 29346947,
    price_btc: 4.04938e-7,
    price_usd: 0.00377815,
    price_eth: 0.00000501727,
    volume_usd: 342760
  },
  {
    id: 16500,
    time: { secs_since_epoch: 1525920863, nanos_since_epoch: 0 },
    capitalization: 31221100,
    price_btc: 4.31396e-7,
    price_usd: 0.00401943,
    price_eth: 0.00000532168,
    volume_usd: 368863
  },
  {
    id: 16456,
    time: { secs_since_epoch: 1525921463, nanos_since_epoch: 0 },
    capitalization: 31650024,
    price_btc: 4.37123e-7,
    price_usd: 0.00407465,
    price_eth: 0.00000539089,
    volume_usd: 369082
  },
  {
    id: 16544,
    time: { secs_since_epoch: 1525954163, nanos_since_epoch: 0 },
    capitalization: 35530378,
    price_btc: 4.89709e-7,
    price_usd: 0.00457421,
    price_eth: 0.00000602657,
    volume_usd: 646839
  },
  {
    id: 16412,
    time: { secs_since_epoch: 1525955963, nanos_since_epoch: 0 },
    capitalization: 35794785,
    price_btc: 4.92894e-7,
    price_usd: 0.00460825,
    price_eth: 0.0000060756,
    volume_usd: 662092
  },
  {
    id: 16368,
    time: { secs_since_epoch: 1525978763, nanos_since_epoch: 0 },
    capitalization: 34008405,
    price_btc: 4.79161e-7,
    price_usd: 0.00437827,
    price_eth: 0.00000590871,
    volume_usd: 1438280
  },
  {
    id: 16324,
    time: { secs_since_epoch: 1525984764, nanos_since_epoch: 0 },
    capitalization: 36199552,
    price_btc: 5.12054e-7,
    price_usd: 0.00466036,
    price_eth: 0.00000633295,
    volume_usd: 1805260
  },
  {
    id: 16588,
    time: { secs_since_epoch: 1525999763, nanos_since_epoch: 0 },
    capitalization: 34221858,
    price_btc: 4.94371e-7,
    price_usd: 0.00440575,
    price_eth: 0.00000606934,
    volume_usd: 1951100
  },
  {
    id: 16720,
    time: { secs_since_epoch: 1526026763, nanos_since_epoch: 0 },
    capitalization: 34747254,
    price_btc: 5.09477e-7,
    price_usd: 0.00447339,
    price_eth: 0.00000638812,
    volume_usd: 2070090
  },
  {
    id: 16808,
    time: { secs_since_epoch: 1526039663, nanos_since_epoch: 0 },
    capitalization: 33203144,
    price_btc: 4.90729e-7,
    price_usd: 0.0042746,
    price_eth: 0.00000623531,
    volume_usd: 1946950
  },
  {
    id: 16676,
    time: { secs_since_epoch: 1526043263, nanos_since_epoch: 0 },
    capitalization: 31902935,
    price_btc: 4.81347e-7,
    price_usd: 0.00410721,
    price_eth: 0.00000607139,
    volume_usd: 1870280
  },
  {
    id: 16764,
    time: { secs_since_epoch: 1526069963, nanos_since_epoch: 0 },
    capitalization: 33882571,
    price_btc: 5.066e-7,
    price_usd: 0.00436207,
    price_eth: 0.0000063295,
    volume_usd: 1328910
  },
  {
    id: 16852,
    time: { secs_since_epoch: 1526074763, nanos_since_epoch: 0 },
    capitalization: 33383895,
    price_btc: 5.10652e-7,
    price_usd: 0.00429787,
    price_eth: 0.00000638649,
    volume_usd: 1108270
  },
  {
    id: 16632,
    time: { secs_since_epoch: 1526076864, nanos_since_epoch: 0 },
    capitalization: 33811187,
    price_btc: 5.15272e-7,
    price_usd: 0.00435288,
    price_eth: 0.00000643457,
    volume_usd: 1100530
  },
  {
    id: 16940,
    time: { secs_since_epoch: 1526098463, nanos_since_epoch: 0 },
    capitalization: 34131055,
    price_btc: 5.21769e-7,
    price_usd: 0.00439406,
    price_eth: 0.0000065009,
    volume_usd: 874277
  },
  {
    id: 17072,
    time: { secs_since_epoch: 1526102662, nanos_since_epoch: 0 },
    capitalization: 33132459,
    price_btc: 5.11216e-7,
    price_usd: 0.0042655,
    price_eth: 0.00000639946,
    volume_usd: 809811
  },
  {
    id: 16896,
    time: { secs_since_epoch: 1526126363, nanos_since_epoch: 0 },
    capitalization: 35237542,
    price_btc: 5.30742e-7,
    price_usd: 0.00453651,
    price_eth: 0.00000669127,
    volume_usd: 629374
  },
  {
    id: 16984,
    time: { secs_since_epoch: 1526139562, nanos_since_epoch: 0 },
    capitalization: 34065031,
    price_btc: 5.23312e-7,
    price_usd: 0.00438556,
    price_eth: 0.00000662382,
    volume_usd: 451824
  },
  {
    id: 17116,
    time: { secs_since_epoch: 1526149763, nanos_since_epoch: 0 },
    capitalization: 33885523,
    price_btc: 5.23168e-7,
    price_usd: 0.00436245,
    price_eth: 0.00000656441,
    volume_usd: 337485
  },
  {
    id: 17028,
    time: { secs_since_epoch: 1526163263, nanos_since_epoch: 0 },
    capitalization: 34734360,
    price_btc: 5.32602e-7,
    price_usd: 0.00447173,
    price_eth: 0.00000662646,
    volume_usd: 267730
  },
  {
    id: 17160,
    time: { secs_since_epoch: 1526184863, nanos_since_epoch: 0 },
    capitalization: 36386750,
    price_btc: 5.53667e-7,
    price_usd: 0.00468446,
    price_eth: 0.00000685712,
    volume_usd: 256281
  },
  {
    id: 17336,
    time: { secs_since_epoch: 1526189963, nanos_since_epoch: 0 },
    capitalization: 36120789,
    price_btc: 5.54359e-7,
    price_usd: 0.00465022,
    price_eth: 0.00000687007,
    volume_usd: 259743
  },
  {
    id: 17380,
    time: { secs_since_epoch: 1526208563, nanos_since_epoch: 0 },
    capitalization: 37348372,
    price_btc: 5.61703e-7,
    price_usd: 0.00480826,
    price_eth: 0.0000069615,
    volume_usd: 266206
  },
  {
    id: 17248,
    time: { secs_since_epoch: 1526216663, nanos_since_epoch: 0 },
    capitalization: 38624735,
    price_btc: 5.79977e-7,
    price_usd: 0.00497258,
    price_eth: 0.00000707056,
    volume_usd: 273022
  },
  {
    id: 17292,
    time: { secs_since_epoch: 1526222963, nanos_since_epoch: 0 },
    capitalization: 39087603,
    price_btc: 5.85213e-7,
    price_usd: 0.00503217,
    price_eth: 0.00000706888,
    volume_usd: 340405
  },
  {
    id: 17204,
    time: { secs_since_epoch: 1526226263, nanos_since_epoch: 0 },
    capitalization: 38112931,
    price_btc: 5.70145e-7,
    price_usd: 0.00490669,
    price_eth: 0.00000683061,
    volume_usd: 354183
  },
  {
    id: 17424,
    time: { secs_since_epoch: 1526236163, nanos_since_epoch: 0 },
    capitalization: 39690675,
    price_btc: 5.92808e-7,
    price_usd: 0.00510981,
    price_eth: 0.00000699851,
    volume_usd: 364736
  },
  {
    id: 17644,
    time: { secs_since_epoch: 1526255363, nanos_since_epoch: 0 },
    capitalization: 44918310,
    price_btc: 6.63058e-7,
    price_usd: 0.00578282,
    price_eth: 0.00000789731,
    volume_usd: 594292
  },
  {
    id: 17468,
    time: { secs_since_epoch: 1526257463, nanos_since_epoch: 0 },
    capitalization: 44312597,
    price_btc: 6.60581e-7,
    price_usd: 0.00570484,
    price_eth: 0.00000792979,
    volume_usd: 605226
  },
  {
    id: 17600,
    time: { secs_since_epoch: 1526280263, nanos_since_epoch: 0 },
    capitalization: 43491956,
    price_btc: 6.66807e-7,
    price_usd: 0.00559919,
    price_eth: 0.00000793925,
    volume_usd: 716626
  },
  {
    id: 17556,
    time: { secs_since_epoch: 1526297064, nanos_since_epoch: 0 },
    capitalization: 42704948,
    price_btc: 6.51497e-7,
    price_usd: 0.00549787,
    price_eth: 0.00000772285,
    volume_usd: 780723
  },
  {
    id: 17512,
    time: { secs_since_epoch: 1526326164, nanos_since_epoch: 0 },
    capitalization: 44340171,
    price_btc: 6.52037e-7,
    price_usd: 0.00570839,
    price_eth: 0.00000776779,
    volume_usd: 874911
  },
  {
    id: 17688,
    time: { secs_since_epoch: 1526336363, nanos_since_epoch: 0 },
    capitalization: 42754893,
    price_btc: 6.3077e-7,
    price_usd: 0.0055043,
    price_eth: 0.00000756005,
    volume_usd: 749980
  },
  {
    id: 17776,
    time: { secs_since_epoch: 1526355263, nanos_since_epoch: 0 },
    capitalization: 41682195,
    price_btc: 6.17071e-7,
    price_usd: 0.0053662,
    price_eth: 0.00000738753,
    volume_usd: 645958
  },
  {
    id: 17732,
    time: { secs_since_epoch: 1526356763, nanos_since_epoch: 0 },
    capitalization: 41469598,
    price_btc: 6.13763e-7,
    price_usd: 0.00533883,
    price_eth: 0.00000735448,
    volume_usd: 626804
  },
  {
    id: 17996,
    time: { secs_since_epoch: 1526366963, nanos_since_epoch: 0 },
    capitalization: 42602106,
    price_btc: 6.2686e-7,
    price_usd: 0.00548463,
    price_eth: 0.00000746721,
    volume_usd: 589345
  },
  {
    id: 17908,
    time: { secs_since_epoch: 1526372963, nanos_since_epoch: 0 },
    capitalization: 40982184,
    price_btc: 6.06655e-7,
    price_usd: 0.00527608,
    price_eth: 0.00000724606,
    volume_usd: 566808
  },
  {
    id: 17820,
    time: { secs_since_epoch: 1526375963, nanos_since_epoch: 0 },
    capitalization: 39950499,
    price_btc: 5.89345e-7,
    price_usd: 0.00514326,
    price_eth: 0.00000704145,
    volume_usd: 593398
  },
  {
    id: 17952,
    time: { secs_since_epoch: 1526381063, nanos_since_epoch: 0 },
    capitalization: 39049619,
    price_btc: 5.70786e-7,
    price_usd: 0.00502728,
    price_eth: 0.00000686047,
    volume_usd: 572554
  },
  {
    id: 17864,
    time: { secs_since_epoch: 1526408362, nanos_since_epoch: 0 },
    capitalization: 38691691,
    price_btc: 5.85791e-7,
    price_usd: 0.0049812,
    price_eth: 0.00000697523,
    volume_usd: 424531
  },
  {
    id: 18216,
    time: { secs_since_epoch: 1526428763, nanos_since_epoch: 0 },
    capitalization: 37939249,
    price_btc: 5.75232e-7,
    price_usd: 0.00488433,
    price_eth: 0.00000691679,
    volume_usd: 391969
  },
  {
    id: 18172,
    time: { secs_since_epoch: 1526433863, nanos_since_epoch: 0 },
    capitalization: 37838115,
    price_btc: 5.75586e-7,
    price_usd: 0.00487131,
    price_eth: 0.00000695391,
    volume_usd: 364453
  },
  {
    id: 18260,
    time: { secs_since_epoch: 1526447364, nanos_since_epoch: 0 },
    capitalization: 36338513,
    price_btc: 5.7081e-7,
    price_usd: 0.00467825,
    price_eth: 0.00000683546,
    volume_usd: 357527
  },
  {
    id: 18128,
    time: { secs_since_epoch: 1526475563, nanos_since_epoch: 0 },
    capitalization: 37006056,
    price_btc: 5.69352e-7,
    price_usd: 0.00476419,
    price_eth: 0.000006759,
    volume_usd: 292845
  },
  {
    id: 18084,
    time: { secs_since_epoch: 1526477663, nanos_since_epoch: 0 },
    capitalization: 37428766,
    price_btc: 5.87464e-7,
    price_usd: 0.00481861,
    price_eth: 0.00000702448,
    volume_usd: 279838
  },
  {
    id: 18040,
    time: { secs_since_epoch: 1526495063, nanos_since_epoch: 0 },
    capitalization: 38581236,
    price_btc: 5.96173e-7,
    price_usd: 0.00496698,
    price_eth: 0.00000710428,
    volume_usd: 293027
  },
  {
    id: 18568,
    time: { secs_since_epoch: 1526530163, nanos_since_epoch: 0 },
    capitalization: 38925106,
    price_btc: 5.98828e-7,
    price_usd: 0.00501125,
    price_eth: 0.00000705436,
    volume_usd: 264754
  },
  {
    id: 18524,
    time: { secs_since_epoch: 1526532263, nanos_since_epoch: 0 },
    capitalization: 39091098,
    price_btc: 6.01141e-7,
    price_usd: 0.00503262,
    price_eth: 0.00000705979,
    volume_usd: 258935
  },
  {
    id: 18436,
    time: { secs_since_epoch: 1526561063, nanos_since_epoch: 0 },
    capitalization: 38274418,
    price_btc: 5.93055e-7,
    price_usd: 0.00492748,
    price_eth: 0.00000703298,
    volume_usd: 243994
  },
  {
    id: 18304,
    time: { secs_since_epoch: 1526569163, nanos_since_epoch: 0 },
    capitalization: 38101746,
    price_btc: 5.90135e-7,
    price_usd: 0.00490525,
    price_eth: 0.00000695235,
    volume_usd: 238094
  },
  {
    id: 18392,
    time: { secs_since_epoch: 1526573063, nanos_since_epoch: 0 },
    capitalization: 39143451,
    price_btc: 6.06799e-7,
    price_usd: 0.00503936,
    price_eth: 0.00000713809,
    volume_usd: 231857
  },
  {
    id: 18348,
    time: { secs_since_epoch: 1526585963, nanos_since_epoch: 0 },
    capitalization: 38047218,
    price_btc: 5.98495e-7,
    price_usd: 0.00489823,
    price_eth: 0.00000714884,
    volume_usd: 210032
  },
  {
    id: 18480,
    time: { secs_since_epoch: 1526587463, nanos_since_epoch: 0 },
    capitalization: 37897926,
    price_btc: 5.96271e-7,
    price_usd: 0.00487901,
    price_eth: 0.00000712754,
    volume_usd: 213220
  },
  {
    id: 18744,
    time: { secs_since_epoch: 1526616863, nanos_since_epoch: 0 },
    capitalization: 36490369,
    price_btc: 5.87145e-7,
    price_usd: 0.0046978,
    price_eth: 0.00000698569,
    volume_usd: 192963
  },
  {
    id: 18612,
    time: { secs_since_epoch: 1526620462, nanos_since_epoch: 0 },
    capitalization: 36848297,
    price_btc: 5.89828e-7,
    price_usd: 0.00474388,
    price_eth: 0.00000703066,
    volume_usd: 192798
  },
  {
    id: 18832,
    time: { secs_since_epoch: 1526639363, nanos_since_epoch: 0 },
    capitalization: 37101830,
    price_btc: 5.87746e-7,
    price_usd: 0.00477652,
    price_eth: 0.00000699581,
    volume_usd: 164018
  },
  {
    id: 18876,
    time: { secs_since_epoch: 1526653163, nanos_since_epoch: 0 },
    capitalization: 35713304,
    price_btc: 5.68053e-7,
    price_usd: 0.00459776,
    price_eth: 0.00000679691,
    volume_usd: 166057
  },
  {
    id: 18656,
    time: { secs_since_epoch: 1526655863, nanos_since_epoch: 0 },
    capitalization: 35841468,
    price_btc: 5.70404e-7,
    price_usd: 0.00461426,
    price_eth: 0.00000685299,
    volume_usd: 167761
  },
  {
    id: 18700,
    time: { secs_since_epoch: 1526662462, nanos_since_epoch: 0 },
    capitalization: 36000314,
    price_btc: 5.68828e-7,
    price_usd: 0.00463471,
    price_eth: 0.000006825,
    volume_usd: 169638
  },
  {
    id: 18788,
    time: { secs_since_epoch: 1526682562, nanos_since_epoch: 0 },
    capitalization: 35207870,
    price_btc: 5.50277e-7,
    price_usd: 0.00453269,
    price_eth: 0.00000656286,
    volume_usd: 165975
  },
  {
    id: 19096,
    time: { secs_since_epoch: 1526710463, nanos_since_epoch: 0 },
    capitalization: 36332998,
    price_btc: 5.67374e-7,
    price_usd: 0.00467754,
    price_eth: 0.00000675447,
    volume_usd: 165265
  },
  {
    id: 18964,
    time: { secs_since_epoch: 1526711063, nanos_since_epoch: 0 },
    capitalization: 36302627,
    price_btc: 5.67308e-7,
    price_usd: 0.00467363,
    price_eth: 0.00000675772,
    volume_usd: 162639
  },
  {
    id: 19140,
    time: { secs_since_epoch: 1526731463, nanos_since_epoch: 0 },
    capitalization: 34970105,
    price_btc: 5.42121e-7,
    price_usd: 0.00450208,
    price_eth: 0.00000640494,
    volume_usd: 161741
  },
  {
    id: 18920,
    time: { secs_since_epoch: 1526750063, nanos_since_epoch: 0 },
    capitalization: 35824302,
    price_btc: 5.55954e-7,
    price_usd: 0.00461205,
    price_eth: 0.00000657856,
    volume_usd: 148716
  },
  {
    id: 19008,
    time: { secs_since_epoch: 1526766563, nanos_since_epoch: 0 },
    capitalization: 34390413,
    price_btc: 5.37172e-7,
    price_usd: 0.00442745,
    price_eth: 0.00000639589,
    volume_usd: 147414
  },
  {
    id: 19052,
    time: { secs_since_epoch: 1526768362, nanos_since_epoch: 0 },
    capitalization: 34203915,
    price_btc: 5.34758e-7,
    price_usd: 0.00440344,
    price_eth: 0.00000634346,
    volume_usd: 148518
  },
  {
    id: 19360,
    time: { secs_since_epoch: 1526775863, nanos_since_epoch: 0 },
    capitalization: 34236461,
    price_btc: 5.3577e-7,
    price_usd: 0.00440763,
    price_eth: 0.00000633447,
    volume_usd: 136458
  },
  {
    id: 19448,
    time: { secs_since_epoch: 1526776763, nanos_since_epoch: 0 },
    capitalization: 34145114,
    price_btc: 5.34838e-7,
    price_usd: 0.00439587,
    price_eth: 0.00000632208,
    volume_usd: 135104
  },
  {
    id: 19228,
    time: { secs_since_epoch: 1526780663, nanos_since_epoch: 0 },
    capitalization: 34244150,
    price_btc: 5.36068e-7,
    price_usd: 0.00440862,
    price_eth: 0.00000635266,
    volume_usd: 126904
  },
  {
    id: 19184,
    time: { secs_since_epoch: 1526802863, nanos_since_epoch: 0 },
    capitalization: 32847235,
    price_btc: 5.10885e-7,
    price_usd: 0.00422878,
    price_eth: 0.00000598534,
    volume_usd: 112886
  },
  {
    id: 19316,
    time: { secs_since_epoch: 1526812763, nanos_since_epoch: 0 },
    capitalization: 33040259,
    price_btc: 5.09281e-7,
    price_usd: 0.00425363,
    price_eth: 0.00000595359,
    volume_usd: 120261
  },
  {
    id: 19272,
    time: { secs_since_epoch: 1526830463, nanos_since_epoch: 0 },
    capitalization: 32893763,
    price_btc: 5.06727e-7,
    price_usd: 0.00423477,
    price_eth: 0.0000059553,
    volume_usd: 105370
  },
  {
    id: 19404,
    time: { secs_since_epoch: 1526834064, nanos_since_epoch: 0 },
    capitalization: 32499948,
    price_btc: 4.9269e-7,
    price_usd: 0.00418407,
    price_eth: 0.00000582575,
    volume_usd: 113988
  },
  {
    id: 19580,
    time: { secs_since_epoch: 1526855363, nanos_since_epoch: 0 },
    capitalization: 31779975,
    price_btc: 4.79955e-7,
    price_usd: 0.00409138,
    price_eth: 0.00000569832,
    volume_usd: 148681
  },
  {
    id: 19536,
    time: { secs_since_epoch: 1526868263, nanos_since_epoch: 0 },
    capitalization: 30952498,
    price_btc: 4.70755e-7,
    price_usd: 0.00398485,
    price_eth: 0.0000056405,
    volume_usd: 166983
  },
  {
    id: 19492,
    time: { secs_since_epoch: 1526884763, nanos_since_epoch: 0 },
    capitalization: 33695063,
    price_btc: 5.10215e-7,
    price_usd: 0.00433793,
    price_eth: 0.00000608521,
    volume_usd: 211865
  },
  {
    id: 19668,
    time: { secs_since_epoch: 1526891663, nanos_since_epoch: 0 },
    capitalization: 33161510,
    price_btc: 5.01412e-7,
    price_usd: 0.00426924,
    price_eth: 0.00000596203,
    volume_usd: 196773
  },
  {
    id: 19712,
    time: { secs_since_epoch: 1526892563, nanos_since_epoch: 0 },
    capitalization: 32744471,
    price_btc: 4.9459e-7,
    price_usd: 0.00421555,
    price_eth: 0.00000589266,
    volume_usd: 200926
  },
  {
    id: 19624,
    time: { secs_since_epoch: 1526909362, nanos_since_epoch: 0 },
    capitalization: 34086314,
    price_btc: 5.15928e-7,
    price_usd: 0.0043883,
    price_eth: 0.00000620051,
    volume_usd: 234478
  },
  {
    id: 20020,
    time: { secs_since_epoch: 1526945963, nanos_since_epoch: 0 },
    capitalization: 38533621,
    price_btc: 5.89345e-7,
    price_usd: 0.00496085,
    price_eth: 0.00000708266,
    volume_usd: 641245
  },
  {
    id: 19800,
    time: { secs_since_epoch: 1526952863, nanos_since_epoch: 0 },
    capitalization: 37609983,
    price_btc: 5.81291e-7,
    price_usd: 0.00484194,
    price_eth: 0.00000702977,
    volume_usd: 634202
  },
  {
    id: 19844,
    time: { secs_since_epoch: 1526965162, nanos_since_epoch: 0 },
    capitalization: 37703970,
    price_btc: 5.85128e-7,
    price_usd: 0.00485404,
    price_eth: 0.00000705374,
    volume_usd: 641056
  },
  {
    id: 19756,
    time: { secs_since_epoch: 1526981063, nanos_since_epoch: 0 },
    capitalization: 38161711,
    price_btc: 5.93708e-7,
    price_usd: 0.00491297,
    price_eth: 0.00000715968,
    volume_usd: 637911
  },
  {
    id: 19932,
    time: { secs_since_epoch: 1527010763, nanos_since_epoch: 0 },
    capitalization: 36765029,
    price_btc: 5.74574e-7,
    price_usd: 0.00473316,
    price_eth: 0.00000698951,
    volume_usd: 471341
  },
  {
    id: 19976,
    time: { secs_since_epoch: 1527014664, nanos_since_epoch: 0 },
    capitalization: 36289112,
    price_btc: 5.68188e-7,
    price_usd: 0.00467189,
    price_eth: 0.00000693189,
    volume_usd: 374243
  },
  {
    id: 19888,
    time: { secs_since_epoch: 1527016463, nanos_since_epoch: 0 },
    capitalization: 35940427,
    price_btc: 5.61899e-7,
    price_usd: 0.004627,
    price_eth: 0.0000068698,
    volume_usd: 317389
  },
  {
    id: 20196,
    time: { secs_since_epoch: 1527029363, nanos_since_epoch: 0 },
    capitalization: 33854919,
    price_btc: 5.4382e-7,
    price_usd: 0.00435851,
    price_eth: 0.00000678625,
    volume_usd: 271722
  },
  {
    id: 20240,
    time: { secs_since_epoch: 1527038063, nanos_since_epoch: 0 },
    capitalization: 33022782,
    price_btc: 5.36558e-7,
    price_usd: 0.00425138,
    price_eth: 0.00000670454,
    volume_usd: 282106
  },
  {
    id: 20108,
    time: { secs_since_epoch: 1527050663, nanos_since_epoch: 0 },
    capitalization: 32359977,
    price_btc: 5.27283e-7,
    price_usd: 0.00416605,
    price_eth: 0.00000657997,
    volume_usd: 277658
  },
  {
    id: 20152,
    time: { secs_since_epoch: 1527064763, nanos_since_epoch: 0 },
    capitalization: 32051994,
    price_btc: 5.25836e-7,
    price_usd: 0.0041264,
    price_eth: 0.00000668049,
    volume_usd: 256571
  },
  {
    id: 20064,
    time: { secs_since_epoch: 1527065963, nanos_since_epoch: 0 },
    capitalization: 32115300,
    price_btc: 5.26151e-7,
    price_usd: 0.00413455,
    price_eth: 0.00000671248,
    volume_usd: 258018
  },
  {
    id: 20284,
    time: { secs_since_epoch: 1527092964, nanos_since_epoch: 0 },
    capitalization: 30412265,
    price_btc: 5.14289e-7,
    price_usd: 0.0039153,
    price_eth: 0.00000669257,
    volume_usd: 230112
  },
  {
    id: 20592,
    time: { secs_since_epoch: 1527125063, nanos_since_epoch: 0 },
    capitalization: 31239897,
    price_btc: 5.28291e-7,
    price_usd: 0.00402185,
    price_eth: 0.00000676592,
    volume_usd: 201613
  },
  {
    id: 20548,
    time: { secs_since_epoch: 1527131664, nanos_since_epoch: 0 },
    capitalization: 31049126,
    price_btc: 5.27081e-7,
    price_usd: 0.00399729,
    price_eth: 0.00000676998,
    volume_usd: 194098
  },
  {
    id: 20504,
    time: { secs_since_epoch: 1527140063, nanos_since_epoch: 0 },
    capitalization: 31390199,
    price_btc: 5.23987e-7,
    price_usd: 0.0040412,
    price_eth: 0.00000665189,
    volume_usd: 203806
  },
  {
    id: 20372,
    time: { secs_since_epoch: 1527140363, nanos_since_epoch: 0 },
    capitalization: 31278191,
    price_btc: 5.22198e-7,
    price_usd: 0.00402678,
    price_eth: 0.00000662968,
    volume_usd: 203867
  },
  {
    id: 20328,
    time: { secs_since_epoch: 1527151463, nanos_since_epoch: 0 },
    capitalization: 29476509,
    price_btc: 5.1277e-7,
    price_usd: 0.00379483,
    price_eth: 0.00000670861,
    volume_usd: 196790
  },
  {
    id: 20416,
    time: { secs_since_epoch: 1527157163, nanos_since_epoch: 0 },
    capitalization: 29509366,
    price_btc: 5.13882e-7,
    price_usd: 0.00379906,
    price_eth: 0.00000671034,
    volume_usd: 188334
  },
  {
    id: 20460,
    time: { secs_since_epoch: 1527175764, nanos_since_epoch: 0 },
    capitalization: 32001039,
    price_btc: 5.49174e-7,
    price_usd: 0.00411984,
    price_eth: 0.00000704002,
    volume_usd: 209555
  },
  {
    id: 20768,
    time: { secs_since_epoch: 1527201563, nanos_since_epoch: 0 },
    capitalization: 32254106,
    price_btc: 5.49646e-7,
    price_usd: 0.00415242,
    price_eth: 0.00000702082,
    volume_usd: 233035
  },
  {
    id: 20812,
    time: { secs_since_epoch: 1527213265, nanos_since_epoch: 0 },
    capitalization: 32326421,
    price_btc: 5.50461e-7,
    price_usd: 0.00416173,
    price_eth: 0.00000694491,
    volume_usd: 246884
  },
  {
    id: 20900,
    time: { secs_since_epoch: 1527224362, nanos_since_epoch: 0 },
    capitalization: 32582750,
    price_btc: 5.53999e-7,
    price_usd: 0.00419473,
    price_eth: 0.00000692963,
    volume_usd: 231811
  },
  {
    id: 20856,
    time: { secs_since_epoch: 1527224663, nanos_since_epoch: 0 },
    capitalization: 32364871,
    price_btc: 5.49243e-7,
    price_usd: 0.00416668,
    price_eth: 0.00000687223,
    volume_usd: 233378
  },
  {
    id: 20680,
    time: { secs_since_epoch: 1527239364, nanos_since_epoch: 0 },
    capitalization: 32333102,
    price_btc: 5.59007e-7,
    price_usd: 0.00416259,
    price_eth: 0.00000698251,
    volume_usd: 232348
  },
  {
    id: 20636,
    time: { secs_since_epoch: 1527242363, nanos_since_epoch: 0 },
    capitalization: 32938038,
    price_btc: 5.7006e-7,
    price_usd: 0.00424047,
    price_eth: 0.00000711251,
    volume_usd: 232070
  },
  {
    id: 20724,
    time: { secs_since_epoch: 1527256463, nanos_since_epoch: 0 },
    capitalization: 31968338,
    price_btc: 5.4931e-7,
    price_usd: 0.00411563,
    price_eth: 0.00000685718,
    volume_usd: 233466
  },
  {
    id: 20944,
    time: { secs_since_epoch: 1527292163, nanos_since_epoch: 0 },
    capitalization: 31224207,
    price_btc: 5.43173e-7,
    price_usd: 0.00401983,
    price_eth: 0.00000696465,
    volume_usd: 140507
  },
  {
    id: 21120,
    time: { secs_since_epoch: 1527299064, nanos_since_epoch: 0 },
    capitalization: 31396569,
    price_btc: 5.4213e-7,
    price_usd: 0.00404202,
    price_eth: 0.00000687243,
    volume_usd: 144642
  },
  {
    id: 21076,
    time: { secs_since_epoch: 1527316163, nanos_since_epoch: 0 },
    capitalization: 31589281,
    price_btc: 5.46958e-7,
    price_usd: 0.00406683,
    price_eth: 0.0000069001,
    volume_usd: 136513
  },
  {
    id: 20988,
    time: { secs_since_epoch: 1527317063, nanos_since_epoch: 0 },
    capitalization: 31553007,
    price_btc: 5.47074e-7,
    price_usd: 0.00406216,
    price_eth: 0.00000689617,
    volume_usd: 136328
  },
  {
    id: 21164,
    time: { secs_since_epoch: 1527320063, nanos_since_epoch: 0 },
    capitalization: 31958551,
    price_btc: 5.39715e-7,
    price_usd: 0.00411437,
    price_eth: 0.00000678853,
    volume_usd: 128240
  },
  {
    id: 21032,
    time: { secs_since_epoch: 1527327263, nanos_since_epoch: 0 },
    capitalization: 35085608,
    price_btc: 5.98902e-7,
    price_usd: 0.00451695,
    price_eth: 0.00000749318,
    volume_usd: 197357
  },
  {
    id: 21384,
    time: { secs_since_epoch: 1527393564, nanos_since_epoch: 0 },
    capitalization: 36077524,
    price_btc: 6.36666e-7,
    price_usd: 0.00464465,
    price_eth: 0.00000799202,
    volume_usd: 609381
  },
  {
    id: 21472,
    time: { secs_since_epoch: 1527404963, nanos_since_epoch: 0 },
    capitalization: 39109585,
    price_btc: 6.90668e-7,
    price_usd: 0.005035,
    price_eth: 0.00000860909,
    volume_usd: 711131
  },
  {
    id: 21340,
    time: { secs_since_epoch: 1527410063, nanos_since_epoch: 0 },
    capitalization: 38104309,
    price_btc: 6.71802e-7,
    price_usd: 0.00490558,
    price_eth: 0.00000840521,
    volume_usd: 715733
  },
  {
    id: 21296,
    time: { secs_since_epoch: 1527412464, nanos_since_epoch: 0 },
    capitalization: 38993693,
    price_btc: 6.85361e-7,
    price_usd: 0.00502008,
    price_eth: 0.00000869317,
    volume_usd: 707143
  },
  {
    id: 21208,
    time: { secs_since_epoch: 1527415463, nanos_since_epoch: 0 },
    capitalization: 40385093,
    price_btc: 7.09471e-7,
    price_usd: 0.00519921,
    price_eth: 0.00000902413,
    volume_usd: 708273
  },
  {
    id: 21428,
    time: { secs_since_epoch: 1527440363, nanos_since_epoch: 0 },
    capitalization: 44132856,
    price_btc: 7.7282e-7,
    price_usd: 0.0056817,
    price_eth: 0.00000995997,
    volume_usd: 1663320
  },
  {
    id: 21252,
    time: { secs_since_epoch: 1527457764, nanos_since_epoch: 0 },
    capitalization: 44438120,
    price_btc: 7.80802e-7,
    price_usd: 0.005721,
    price_eth: 0.0000101295,
    volume_usd: 1914940
  },
  {
    id: 21560,
    time: { secs_since_epoch: 1527475763, nanos_since_epoch: 0 },
    capitalization: 44917921,
    price_btc: 7.85509e-7,
    price_usd: 0.00578277,
    price_eth: 0.0000101396,
    volume_usd: 2065980
  },
  {
    id: 21516,
    time: { secs_since_epoch: 1527517164, nanos_since_epoch: 0 },
    capitalization: 56111186,
    price_btc: 9.92303e-7,
    price_usd: 0.0072238,
    price_eth: 0.000013485,
    volume_usd: 3277320
  },
  {
    id: 21648,
    time: { secs_since_epoch: 1527518364, nanos_since_epoch: 0 },
    capitalization: 57379703,
    price_btc: 0.00000101427,
    price_usd: 0.00738711,
    price_eth: 0.0000137976,
    volume_usd: 3203770
  },
  {
    id: 21692,
    time: { secs_since_epoch: 1527523464, nanos_since_epoch: 0 },
    capitalization: 58830914,
    price_btc: 0.00000104593,
    price_usd: 0.00757394,
    price_eth: 0.00001427,
    volume_usd: 3301340
  },
  {
    id: 21736,
    time: { secs_since_epoch: 1527526169, nanos_since_epoch: 0 },
    capitalization: 55831865,
    price_btc: 9.94789e-7,
    price_usd: 0.00718784,
    price_eth: 0.0000135843,
    volume_usd: 3400450
  },
  {
    id: 21604,
    time: { secs_since_epoch: 1527535176, nanos_since_epoch: 0 },
    capitalization: 52610819,
    price_btc: 9.36187e-7,
    price_usd: 0.00677316,
    price_eth: null,
    volume_usd: 3459280
  },
  {
    id: 21824,
    time: { secs_since_epoch: 1527546875, nanos_since_epoch: 0 },
    capitalization: 51772235,
    price_btc: 9.37185e-7,
    price_usd: 0.0066652,
    price_eth: null,
    volume_usd: 3427250
  },
  {
    id: 22044,
    time: { secs_since_epoch: 1527573577, nanos_since_epoch: 0 },
    capitalization: 53891610,
    price_btc: 9.74597e-7,
    price_usd: 0.00693805,
    price_eth: 0.000013256,
    volume_usd: 3317110
  },
  {
    id: 21780,
    time: { secs_since_epoch: 1527578676, nanos_since_epoch: 0 },
    capitalization: 54169843,
    price_btc: 9.7915e-7,
    price_usd: 0.00697387,
    price_eth: 0.0000133786,
    volume_usd: 3274470
  },
  {
    id: 21912,
    time: { secs_since_epoch: 1527580476, nanos_since_epoch: 0 },
    capitalization: 53486843,
    price_btc: 9.63853e-7,
    price_usd: 0.00688594,
    price_eth: 0.0000131694,
    volume_usd: 3283680
  },
  {
    id: 22000,
    time: { secs_since_epoch: 1527589777, nanos_since_epoch: 0 },
    capitalization: 54187864,
    price_btc: 9.76241e-7,
    price_usd: 0.00697619,
    price_eth: 0.0000133296,
    volume_usd: 3187250
  },
  {
    id: 21868,
    time: { secs_since_epoch: 1527608376, nanos_since_epoch: 0 },
    capitalization: 57851815,
    price_btc: 0.00000100514,
    price_usd: 0.00744789,
    price_eth: 0.0000134823,
    volume_usd: 8019530
  },
  {
    id: 21956,
    time: { secs_since_epoch: 1527627576, nanos_since_epoch: 0 },
    capitalization: 58725586,
    price_btc: 0.00000100928,
    price_usd: 0.00756038,
    price_eth: 0.0000132961,
    volume_usd: 6198180
  },
  {
    id: 22220,
    time: { secs_since_epoch: 1527640176, nanos_since_epoch: 0 },
    capitalization: 57847387,
    price_btc: 9.97955e-7,
    price_usd: 0.00744732,
    price_eth: 0.000013139,
    volume_usd: 5979870
  },
  {
    id: 22264,
    time: { secs_since_epoch: 1527661476, nanos_since_epoch: 0 },
    capitalization: 59063862,
    price_btc: 0.00000101108,
    price_usd: 0.00760393,
    price_eth: 0.0000132866,
    volume_usd: 6110710
  },
  {
    id: 22088,
    time: { secs_since_epoch: 1527672876, nanos_since_epoch: 0 },
    capitalization: 59479581,
    price_btc: 0.00000102444,
    price_usd: 0.00765745,
    price_eth: 0.0000136113,
    volume_usd: 5496090
  },
  {
    id: 22176,
    time: { secs_since_epoch: 1527691475, nanos_since_epoch: 0 },
    capitalization: 65876154,
    price_btc: 0.00000113026,
    price_usd: 0.00848095,
    price_eth: 0.0000149303,
    volume_usd: 6598470
  },
  {
    id: 22132,
    time: { secs_since_epoch: 1527697476, nanos_since_epoch: 0 },
    capitalization: 65571821,
    price_btc: 0.00000114846,
    price_usd: 0.00844177,
    price_eth: 0.0000153044,
    volume_usd: 8897420
  },
  {
    id: 22308,
    time: { secs_since_epoch: 1527709176, nanos_since_epoch: 0 },
    capitalization: 67041441,
    price_btc: 0.00000117944,
    price_usd: 0.00863097,
    price_eth: 0.0000157148,
    volume_usd: 9133120
  },
  {
    id: 22396,
    time: { secs_since_epoch: 1527721177, nanos_since_epoch: 0 },
    capitalization: 89572989,
    price_btc: 0.00000156943,
    price_usd: 0.0115317,
    price_eth: 0.0000208978,
    volume_usd: 13784300
  },
  {
    id: 22572,
    time: { secs_since_epoch: 1527731376, nanos_since_epoch: 0 },
    capitalization: 96980896,
    price_btc: 0.00000169918,
    price_usd: 0.0124854,
    price_eth: 0.0000223405,
    volume_usd: 24770800
  },
  {
    id: 22352,
    time: { secs_since_epoch: 1527785077, nanos_since_epoch: 0 },
    capitalization: 112014978,
    price_btc: 0.00000190964,
    price_usd: 0.0144209,
    price_eth: 0.0000250543,
    volume_usd: 89406400
  },
  {
    id: 22440,
    time: { secs_since_epoch: 1527785977, nanos_since_epoch: 0 },
    capitalization: 108070619,
    price_btc: 0.00000184205,
    price_usd: 0.0139131,
    price_eth: 0.0000241343,
    volume_usd: 89729800
  },
  {
    id: 22616,
    time: { secs_since_epoch: 1527794377, nanos_since_epoch: 0 },
    capitalization: 105171772,
    price_btc: 0.00000179122,
    price_usd: 0.0135399,
    price_eth: 0.0000233966,
    volume_usd: 91293900
  },
  {
    id: 22484,
    time: { secs_since_epoch: 1527797976, nanos_since_epoch: 0 },
    capitalization: 98406241,
    price_btc: 0.00000167949,
    price_usd: 0.0126689,
    price_eth: 0.0000219845,
    volume_usd: 91731800
  },
  {
    id: 22528,
    time: { secs_since_epoch: 1527800076, nanos_since_epoch: 0 },
    capitalization: 98741799,
    price_btc: 0.00000168313,
    price_usd: 0.0127121,
    price_eth: 0.0000217718,
    volume_usd: 91500900
  },
  {
    id: 22792,
    time: { secs_since_epoch: 1527816277, nanos_since_epoch: 0 },
    capitalization: 101165273,
    price_btc: 0.00000173802,
    price_usd: 0.0130241,
    price_eth: 0.0000225217,
    volume_usd: 80282200
  },
  {
    id: 22880,
    time: { secs_since_epoch: 1527851076, nanos_since_epoch: 0 },
    capitalization: 100151608,
    price_btc: 0.00000170718,
    price_usd: 0.0128936,
    price_eth: 0.0000220388,
    volume_usd: 10778300
  },
  {
    id: 22704,
    time: { secs_since_epoch: 1527859777, nanos_since_epoch: 0 },
    capitalization: 99009779,
    price_btc: 0.00000171891,
    price_usd: 0.0127466,
    price_eth: 0.0000222001,
    volume_usd: 6928940
  },
  {
    id: 22836,
    time: { secs_since_epoch: 1527873276, nanos_since_epoch: 0 },
    capitalization: 97313347,
    price_btc: 0.00000168502,
    price_usd: 0.0125282,
    price_eth: 0.0000219979,
    volume_usd: 4911150
  },
  {
    id: 22748,
    time: { secs_since_epoch: 1527880477, nanos_since_epoch: 0 },
    capitalization: 98556154,
    price_btc: 0.00000171126,
    price_usd: 0.0126882,
    price_eth: 0.0000223784,
    volume_usd: 4152150
  },
  {
    id: 22660,
    time: { secs_since_epoch: 1527884076, nanos_since_epoch: 0 },
    capitalization: 98918122,
    price_btc: 0.00000171225,
    price_usd: 0.0127348,
    price_eth: 0.0000222734,
    volume_usd: 3881050
  },
  {
    id: 23188,
    time: { secs_since_epoch: 1527892776, nanos_since_epoch: 0 },
    capitalization: 98909578,
    price_btc: 0.00000169353,
    price_usd: 0.0127337,
    price_eth: 0.0000221066,
    volume_usd: 3425430
  },
  {
    id: 23012,
    time: { secs_since_epoch: 1527894876, nanos_since_epoch: 0 },
    capitalization: 99140274,
    price_btc: 0.00000169847,
    price_usd: 0.0127634,
    price_eth: 0.0000220508,
    volume_usd: 3338630
  },
  {
    id: 22924,
    time: { secs_since_epoch: 1527917376, nanos_since_epoch: 0 },
    capitalization: 89086741,
    price_btc: 0.00000152957,
    price_usd: 0.0114691,
    price_eth: 0.0000198474,
    volume_usd: 2296160
  },
  {
    id: 22968,
    time: { secs_since_epoch: 1527943477, nanos_since_epoch: 0 },
    capitalization: 81037235,
    price_btc: 0.00000136635,
    price_usd: 0.0104328,
    price_eth: 0.0000176359,
    volume_usd: 2529360
  },
  {
    id: 23100,
    time: { secs_since_epoch: 1527961176, nanos_since_epoch: 0 },
    capitalization: 72901121,
    price_btc: 0.00000123087,
    price_usd: 0.00938535,
    price_eth: 0.0000159148,
    volume_usd: 3089730
  },
  {
    id: 23144,
    time: { secs_since_epoch: 1527966876, nanos_since_epoch: 0 },
    capitalization: 72284611,
    price_btc: 0.00000121799,
    price_usd: 0.00930598,
    price_eth: 0.0000156217,
    volume_usd: 3158880
  },
  {
    id: 23056,
    time: { secs_since_epoch: 1527968676, nanos_since_epoch: 0 },
    capitalization: 75483907,
    price_btc: 0.00000127009,
    price_usd: 0.00971786,
    price_eth: 0.0000162303,
    volume_usd: 3192040
  },
  {
    id: 23496,
    time: { secs_since_epoch: 1527985777, nanos_since_epoch: 0 },
    capitalization: 75502549,
    price_btc: 0.00000127213,
    price_usd: 0.00972026,
    price_eth: 0.0000164028,
    volume_usd: 3306880
  },
  {
    id: 23232,
    time: { secs_since_epoch: 1527994176, nanos_since_epoch: 0 },
    capitalization: 82423742,
    price_btc: 0.00000139004,
    price_usd: 0.0106113,
    price_eth: 0.0000178655,
    volume_usd: 3696590
  },
  {
    id: 23276,
    time: { secs_since_epoch: 1528012176, nanos_since_epoch: 0 },
    capitalization: 82894455,
    price_btc: 0.0000013875,
    price_usd: 0.0106719,
    price_eth: 0.0000176202,
    volume_usd: 16839600
  },
  {
    id: 23452,
    time: { secs_since_epoch: 1528012476, nanos_since_epoch: 0 },
    capitalization: 82442384,
    price_btc: 0.00000137925,
    price_usd: 0.0106137,
    price_eth: 0.0000175283,
    volume_usd: 16865200
  },
  {
    id: 23408,
    time: { secs_since_epoch: 1528021176, nanos_since_epoch: 0 },
    capitalization: 83950064,
    price_btc: 0.00000140349,
    price_usd: 0.0108078,
    price_eth: 0.0000174109,
    volume_usd: 16299500
  },
  {
    id: 23364,
    time: { secs_since_epoch: 1528030476, nanos_since_epoch: 0 },
    capitalization: 87151069,
    price_btc: 0.00000145513,
    price_usd: 0.0112199,
    price_eth: 0.0000180507,
    volume_usd: 13808000
  },
  {
    id: 23320,
    time: { secs_since_epoch: 1528057176, nanos_since_epoch: 0 },
    capitalization: 84162118,
    price_btc: 0.00000140824,
    price_usd: 0.0108351,
    price_eth: 0.0000176233,
    volume_usd: 11172700
  },
  {
    id: 23672,
    time: { secs_since_epoch: 1528092283, nanos_since_epoch: 0 },
    capitalization: 79677138,
    price_btc: 0.00000134126,
    price_usd: 0.0102577,
    price_eth: 0.0000166854,
    volume_usd: 6564380
  },
  {
    id: 23716,
    time: { secs_since_epoch: 1528112082, nanos_since_epoch: 0 },
    capitalization: 78369860,
    price_btc: 0.00000133793,
    price_usd: 0.0100894,
    price_eth: 0.0000168746,
    volume_usd: 5772650
  },
  {
    id: 23760,
    time: { secs_since_epoch: 1528131282, nanos_since_epoch: 0 },
    capitalization: 76934263,
    price_btc: 0.00000132116,
    price_usd: 0.00990458,
    price_eth: 0.0000168922,
    volume_usd: 4994620
  },
  {
    id: 23540,
    time: { secs_since_epoch: 1528136382, nanos_since_epoch: 0 },
    capitalization: 76890376,
    price_btc: 0.00000132225,
    price_usd: 0.00989893,
    price_eth: 0.0000168707,
    volume_usd: 4915360
  },
  {
    id: 23584,
    time: { secs_since_epoch: 1528140882, nanos_since_epoch: 0 },
    capitalization: 76961682,
    price_btc: 0.00000132007,
    price_usd: 0.00990811,
    price_eth: 0.0000167658,
    volume_usd: 4935270
  },
  {
    id: 23628,
    time: { secs_since_epoch: 1528149582, nanos_since_epoch: 0 },
    capitalization: 76978849,
    price_btc: 0.00000131486,
    price_usd: 0.00991032,
    price_eth: 0.0000165719,
    volume_usd: 4934360
  },
  {
    id: 23892,
    time: { secs_since_epoch: 1528159182, nanos_since_epoch: 0 },
    capitalization: 76304781,
    price_btc: 0.00000131104,
    price_usd: 0.00982354,
    price_eth: 0.000016531,
    volume_usd: 4833660
  },
  {
    id: 24024,
    time: { secs_since_epoch: 1528163383, nanos_since_epoch: 0 },
    capitalization: 74758651,
    price_btc: 0.00000128604,
    price_usd: 0.00962449,
    price_eth: 0.0000162042,
    volume_usd: 4731420
  },
  {
    id: 23980,
    time: { secs_since_epoch: 1528210782, nanos_since_epoch: 0 },
    capitalization: 73859869,
    price_btc: 0.00000128144,
    price_usd: 0.00950878,
    price_eth: 0.000016242,
    volume_usd: 7987380
  },
  {
    id: 24068,
    time: { secs_since_epoch: 1528226682, nanos_since_epoch: 0 },
    capitalization: 77661186,
    price_btc: 0.00000126123,
    price_usd: 0.0096219,
    price_eth: 0.000015806,
    volume_usd: 8473650
  },
  {
    id: 23848,
    time: { secs_since_epoch: 1528230582, nanos_since_epoch: 0 },
    capitalization: 77634873,
    price_btc: 0.00000126095,
    price_usd: 0.00961864,
    price_eth: 0.0000158068,
    volume_usd: 8493540
  },
  {
    id: 23804,
    time: { secs_since_epoch: 1528231782, nanos_since_epoch: 0 },
    capitalization: 78138280,
    price_btc: 0.00000126911,
    price_usd: 0.00968101,
    price_eth: 0.0000159113,
    volume_usd: 8493000
  },
  {
    id: 23936,
    time: { secs_since_epoch: 1528232084, nanos_since_epoch: 0 },
    capitalization: 78121330,
    price_btc: 0.00000126752,
    price_usd: 0.00967891,
    price_eth: 0.0000158862,
    volume_usd: 8492550
  },
  {
    id: 24288,
    time: { secs_since_epoch: 1528237783, nanos_since_epoch: 0 },
    capitalization: 77072869,
    price_btc: 0.00000125356,
    price_usd: 0.00954901,
    price_eth: 0.0000157262,
    volume_usd: 8403510
  },
  {
    id: 24156,
    time: { secs_since_epoch: 1528254883, nanos_since_epoch: 0 },
    capitalization: 76818704,
    price_btc: 0.00000124859,
    price_usd: 0.00951752,
    price_eth: 0.0000156866,
    volume_usd: 8413750
  },
  {
    id: 24244,
    time: { secs_since_epoch: 1528256682, nanos_since_epoch: 0 },
    capitalization: 77500405,
    price_btc: 0.00000125895,
    price_usd: 0.00960198,
    price_eth: 0.0000158037,
    volume_usd: 8210380
  },
  {
    id: 24332,
    time: { secs_since_epoch: 1528257883, nanos_since_epoch: 0 },
    capitalization: 76986668,
    price_btc: 0.00000125128,
    price_usd: 0.00953833,
    price_eth: 0.0000157102,
    volume_usd: 8160030
  },
  {
    id: 24200,
    time: { secs_since_epoch: 1528303782, nanos_since_epoch: 0 },
    capitalization: 73881479,
    price_btc: 0.00000121435,
    price_usd: 0.00915361,
    price_eth: 0.0000153354,
    volume_usd: 3487410
  },
  {
    id: 24112,
    time: { secs_since_epoch: 1528309182, nanos_since_epoch: 0 },
    capitalization: 73299377,
    price_btc: 0.00000120901,
    price_usd: 0.00908149,
    price_eth: 0.0000152661,
    volume_usd: 3399560
  },
  {
    id: 24464,
    time: { secs_since_epoch: 1528329582, nanos_since_epoch: 0 },
    capitalization: 73900608,
    price_btc: 0.0000011969,
    price_usd: 0.00915598,
    price_eth: 0.0000151037,
    volume_usd: 3040170
  },
  {
    id: 24420,
    time: { secs_since_epoch: 1528349683, nanos_since_epoch: 0 },
    capitalization: 73883255,
    price_btc: 0.00000118652,
    price_usd: 0.00915383,
    price_eth: 0.0000149724,
    volume_usd: 2868530
  },
  {
    id: 24596,
    time: { secs_since_epoch: 1528351782, nanos_since_epoch: 0 },
    capitalization: 73241103,
    price_btc: 0.00000117659,
    price_usd: 0.00907427,
    price_eth: 0.0000149433,
    volume_usd: 2939240
  },
  {
    id: 24508,
    time: { secs_since_epoch: 1528373082, nanos_since_epoch: 0 },
    capitalization: 70402186,
    price_btc: 0.00000113399,
    price_usd: 0.00872254,
    price_eth: 0.0000143755,
    volume_usd: 3025290
  },
  {
    id: 24552,
    time: { secs_since_epoch: 1528385984, nanos_since_epoch: 0 },
    capitalization: 69201985,
    price_btc: 0.00000111685,
    price_usd: 0.00857384,
    price_eth: 0.0000141722,
    volume_usd: 3139360
  },
  {
    id: 24640,
    time: { secs_since_epoch: 1528391082, nanos_since_epoch: 0 },
    capitalization: 69181887,
    price_btc: 0.00000111105,
    price_usd: 0.00857135,
    price_eth: 0.000014056,
    volume_usd: 3045310
  },
  {
    id: 24376,
    time: { secs_since_epoch: 1528402483, nanos_since_epoch: 0 },
    capitalization: 69061141,
    price_btc: 0.00000111204,
    price_usd: 0.00855639,
    price_eth: 0.0000141375,
    volume_usd: 3044990
  },
  {
    id: 24816,
    time: { secs_since_epoch: 1528429783, nanos_since_epoch: 0 },
    capitalization: 66647743,
    price_btc: 0.00000107899,
    price_usd: 0.00825738,
    price_eth: 0.0000136559,
    volume_usd: 3341480
  },
  {
    id: 24772,
    time: { secs_since_epoch: 1528458583, nanos_since_epoch: 0 },
    capitalization: 66256689,
    price_btc: 0.00000108301,
    price_usd: 0.00820893,
    price_eth: 0.0000137447,
    volume_usd: 4386050
  },
  {
    id: 24728,
    time: { secs_since_epoch: 1528462483, nanos_since_epoch: 0 },
    capitalization: 66464444,
    price_btc: 0.00000108817,
    price_usd: 0.00823467,
    price_eth: 0.0000138127,
    volume_usd: 4591650
  },
  {
    id: 24860,
    time: { secs_since_epoch: 1528467582, nanos_since_epoch: 0 },
    capitalization: 66009062,
    price_btc: 0.00000107929,
    price_usd: 0.00817825,
    price_eth: 0.0000137762,
    volume_usd: 4622080
  },
  {
    id: 24904,
    time: { secs_since_epoch: 1528469682, nanos_since_epoch: 0 },
    capitalization: 65919632,
    price_btc: 0.00000107508,
    price_usd: 0.00816717,
    price_eth: 0.0000136889,
    volume_usd: 4486610
  },
  {
    id: 24684,
    time: { secs_since_epoch: 1528489183, nanos_since_epoch: 0 },
    capitalization: 64884650,
    price_btc: 0.00000105101,
    price_usd: 0.00803894,
    price_eth: 0.0000134686,
    volume_usd: 4284020
  },
  {
    id: 25212,
    time: { secs_since_epoch: 1528499083, nanos_since_epoch: 0 },
    capitalization: 64996921,
    price_btc: 0.0000010533,
    price_usd: 0.00805285,
    price_eth: 0.0000133656,
    volume_usd: 4305350
  },
  {
    id: 25080,
    time: { secs_since_epoch: 1528511682, nanos_since_epoch: 0 },
    capitalization: 65782581,
    price_btc: 0.00000106126,
    price_usd: 0.00815019,
    price_eth: 0.000013429,
    volume_usd: 4287940
  },
  {
    id: 24948,
    time: { secs_since_epoch: 1528517383, nanos_since_epoch: 0 },
    capitalization: 66123351,
    price_btc: 0.00000106779,
    price_usd: 0.00819241,
    price_eth: 0.0000135093,
    volume_usd: 4011460
  },
  {
    id: 25036,
    time: { secs_since_epoch: 1528532982, nanos_since_epoch: 0 },
    capitalization: 65931093,
    price_btc: 0.00000106692,
    price_usd: 0.00816859,
    price_eth: 0.0000135126,
    volume_usd: 3644520
  },
  {
    id: 25168,
    time: { secs_since_epoch: 1528544384, nanos_since_epoch: 0 },
    capitalization: 67989434,
    price_btc: 0.0000011019,
    price_usd: 0.00842361,
    price_eth: 0.0000139033,
    volume_usd: 3895560
  },
  {
    id: 25124,
    time: { secs_since_epoch: 1528546184, nanos_since_epoch: 0 },
    capitalization: 68124709,
    price_btc: 0.00000110392,
    price_usd: 0.00844037,
    price_eth: 0.0000139445,
    volume_usd: 3735570
  },
  {
    id: 24992,
    time: { secs_since_epoch: 1528565083, nanos_since_epoch: 0 },
    capitalization: 69691832,
    price_btc: 0.00000113482,
    price_usd: 0.00863453,
    price_eth: 0.0000144386,
    volume_usd: 4215190
  },
  {
    id: 25344,
    time: { secs_since_epoch: 1528590883, nanos_since_epoch: 0 },
    capitalization: 66820469,
    price_btc: 0.00000111853,
    price_usd: 0.00827878,
    price_eth: 0.0000142044,
    volume_usd: 4623500
  },
  {
    id: 25432,
    time: { secs_since_epoch: 1528593582, nanos_since_epoch: 0 },
    capitalization: 65815593,
    price_btc: 0.00000111281,
    price_usd: 0.00815428,
    price_eth: 0.0000141457,
    volume_usd: 4789790
  },
  {
    id: 25300,
    time: { secs_since_epoch: 1528593883, nanos_since_epoch: 0 },
    capitalization: 65831816,
    price_btc: 0.0000011139,
    price_usd: 0.00815629,
    price_eth: 0.0000141175,
    volume_usd: 4785330
  },
  {
    id: 25476,
    time: { secs_since_epoch: 1528603783, nanos_since_epoch: 0 },
    capitalization: 65196282,
    price_btc: 0.00000110267,
    price_usd: 0.00807755,
    price_eth: 0.0000140762,
    volume_usd: 4845130
  },
  {
    id: 25388,
    time: { secs_since_epoch: 1528605882, nanos_since_epoch: 0 },
    capitalization: 65299595,
    price_btc: 0.00000110368,
    price_usd: 0.00809035,
    price_eth: 0.0000140524,
    volume_usd: 4865850
  },
  {
    id: 25256,
    time: { secs_since_epoch: 1528645182, nanos_since_epoch: 0 },
    capitalization: 65785729,
    price_btc: 0.00000112666,
    price_usd: 0.00815058,
    price_eth: 0.0000143905,
    volume_usd: 3289990
  },
  {
    id: 25696,
    time: { secs_since_epoch: 1528672781, nanos_since_epoch: 0 },
    capitalization: 62461486,
    price_btc: 0.00000114806,
    price_usd: 0.00773872,
    price_eth: 0.0000149956,
    volume_usd: 3052220
  },
  {
    id: 25520,
    time: { secs_since_epoch: 1528679682, nanos_since_epoch: 0 },
    capitalization: 61532480,
    price_btc: 0.00000113112,
    price_usd: 0.00762362,
    price_eth: 0.0000147124,
    volume_usd: 2920050
  },
  {
    id: 25608,
    time: { secs_since_epoch: 1528683582, nanos_since_epoch: 0 },
    capitalization: 67186744,
    price_btc: 0.0000012248,
    price_usd: 0.00832416,
    price_eth: 0.0000157664,
    volume_usd: 3022880
  },
  {
    id: 25784,
    time: { secs_since_epoch: 1528701583, nanos_since_epoch: 0 },
    capitalization: 62922760,
    price_btc: 0.0000011522,
    price_usd: 0.00779587,
    price_eth: 0.0000146687,
    volume_usd: 2714280
  },
  {
    id: 25652,
    time: { secs_since_epoch: 1528725281, nanos_since_epoch: 0 },
    capitalization: 61815863,
    price_btc: 0.00000113021,
    price_usd: 0.00765873,
    price_eth: 0.0000144508,
    volume_usd: 2554310
  },
  {
    id: 25740,
    time: { secs_since_epoch: 1528730682, nanos_since_epoch: 0 },
    capitalization: 61822804,
    price_btc: 0.00000113542,
    price_usd: 0.00765959,
    price_eth: 0.0000146622,
    volume_usd: 2527480
  },
  {
    id: 25564,
    time: { secs_since_epoch: 1528753181, nanos_since_epoch: 0 },
    capitalization: 61765740,
    price_btc: 0.00000112887,
    price_usd: 0.00765252,
    price_eth: 0.0000147189,
    volume_usd: 1782800
  },
  {
    id: 26092,
    time: { secs_since_epoch: 1528760081, nanos_since_epoch: 0 },
    capitalization: 63314218,
    price_btc: 0.0000011524,
    price_usd: 0.00784437,
    price_eth: 0.0000149144,
    volume_usd: 1768030
  },
  {
    id: 26048,
    time: { secs_since_epoch: 1528764882, nanos_since_epoch: 0 },
    capitalization: 63605027,
    price_btc: 0.00000114976,
    price_usd: 0.0078804,
    price_eth: 0.0000149332,
    volume_usd: 1792580
  },
  {
    id: 25960,
    time: { secs_since_epoch: 1528767282, nanos_since_epoch: 0 },
    capitalization: 63299528,
    price_btc: 0.00000114386,
    price_usd: 0.00784255,
    price_eth: 0.0000148496,
    volume_usd: 1779940
  },
  {
    id: 25828,
    time: { secs_since_epoch: 1528778982, nanos_since_epoch: 0 },
    capitalization: 62470929,
    price_btc: 0.00000112963,
    price_usd: 0.00773989,
    price_eth: 0.0000145746,
    volume_usd: 1712670
  },
  {
    id: 25916,
    time: { secs_since_epoch: 1528788583, nanos_since_epoch: 0 },
    capitalization: 64254685,
    price_btc: 0.00000116334,
    price_usd: 0.00796089,
    price_eth: 0.0000150666,
    volume_usd: 2129320
  },
  {
    id: 26004,
    time: { secs_since_epoch: 1528807483, nanos_since_epoch: 0 },
    capitalization: 64134746,
    price_btc: 0.00000115982,
    price_usd: 0.00794603,
    price_eth: 0.000014945,
    volume_usd: 2326840
  },
  {
    id: 25872,
    time: { secs_since_epoch: 1528836883, nanos_since_epoch: 0 },
    capitalization: 61292762,
    price_btc: 0.00000115582,
    price_usd: 0.00759392,
    price_eth: 0.0000153097,
    volume_usd: 2710990
  },
  {
    id: 26136,
    time: { secs_since_epoch: 1528866282, nanos_since_epoch: 0 },
    capitalization: 62689903,
    price_btc: 0.00000117691,
    price_usd: 0.00776702,
    price_eth: 0.0000156259,
    volume_usd: 2879160
  },
  {
    id: 26180,
    time: { secs_since_epoch: 1528872582, nanos_since_epoch: 0 },
    capitalization: 70152461,
    price_btc: 0.00000131822,
    price_usd: 0.0086916,
    price_eth: 0.0000175532,
    volume_usd: 2762130
  },
  {
    id: 26268,
    time: { secs_since_epoch: 1528877082, nanos_since_epoch: 0 },
    capitalization: 67908156,
    price_btc: 0.0000012808,
    price_usd: 0.00841354,
    price_eth: 0.000017121,
    volume_usd: 3151400
  },
  {
    id: 26312,
    time: { secs_since_epoch: 1528893282, nanos_since_epoch: 0 },
    capitalization: 62724933,
    price_btc: 0.00000119902,
    price_usd: 0.00777136,
    price_eth: 0.0000162256,
    volume_usd: 3545480
  },
  {
    id: 26356,
    time: { secs_since_epoch: 1528905882, nanos_since_epoch: 0 },
    capitalization: 62867875,
    price_btc: 0.00000121757,
    price_usd: 0.00778907,
    price_eth: 0.0000168147,
    volume_usd: 3465750
  },
  {
    id: 26224,
    time: { secs_since_epoch: 1528910383, nanos_since_epoch: 0 },
    capitalization: 62937773,
    price_btc: 0.00000124343,
    price_usd: 0.00779773,
    price_eth: 0.0000167865,
    volume_usd: 3593910
  },
  {
    id: 26532,
    time: { secs_since_epoch: 1528953881, nanos_since_epoch: 0 },
    capitalization: 64505864,
    price_btc: 0.00000123723,
    price_usd: 0.00799201,
    price_eth: 0.0000164972,
    volume_usd: 3332670
  },
  {
    id: 26400,
    time: { secs_since_epoch: 1528960481, nanos_since_epoch: 0 },
    capitalization: 64443311,
    price_btc: 0.00000123026,
    price_usd: 0.00798426,
    price_eth: 0.0000164649,
    volume_usd: 2994910
  },
  {
    id: 26488,
    time: { secs_since_epoch: 1528961082, nanos_since_epoch: 0 },
    capitalization: 64384310,
    price_btc: 0.00000123222,
    price_usd: 0.00797695,
    price_eth: 0.000016554,
    volume_usd: 2951200
  },
  {
    id: 26664,
    time: { secs_since_epoch: 1528979382, nanos_since_epoch: 0 },
    capitalization: 62747290,
    price_btc: 0.00000119372,
    price_usd: 0.00777413,
    price_eth: 0.0000160094,
    volume_usd: 2200460
  },
  {
    id: 26576,
    time: { secs_since_epoch: 1528983283, nanos_since_epoch: 0 },
    capitalization: 61721312,
    price_btc: 0.00000119566,
    price_usd: 0.00766029,
    price_eth: 0.000016138,
    volume_usd: 2028950
  },
  {
    id: 26444,
    time: { secs_since_epoch: 1529002782, nanos_since_epoch: 0 },
    capitalization: 63638307,
    price_btc: 0.00000118827,
    price_usd: 0.00789821,
    price_eth: 0.000015304,
    volume_usd: 2057120
  },
  {
    id: 26620,
    time: { secs_since_epoch: 1529009082, nanos_since_epoch: 0 },
    capitalization: 64165416,
    price_btc: 0.0000011972,
    price_usd: 0.00796363,
    price_eth: 0.0000152009,
    volume_usd: 2068960
  },
  {
    id: 26752,
    time: { secs_since_epoch: 1529017782, nanos_since_epoch: 0 },
    capitalization: 63793007,
    price_btc: 0.00000119255,
    price_usd: 0.00791741,
    price_eth: 0.0000153146,
    volume_usd: 2090230
  },
  {
    id: 26796,
    time: { secs_since_epoch: 1529048382, nanos_since_epoch: 0 },
    capitalization: 62627115,
    price_btc: 0.00000117783,
    price_usd: 0.00777271,
    price_eth: 0.0000153514,
    volume_usd: 1868720
  },
  {
    id: 26884,
    time: { secs_since_epoch: 1529051081, nanos_since_epoch: 0 },
    capitalization: 62593919,
    price_btc: 0.00000117667,
    price_usd: 0.00776859,
    price_eth: 0.0000153753,
    volume_usd: 1847110
  },
  {
    id: 26928,
    time: { secs_since_epoch: 1529067282, nanos_since_epoch: 0 },
    capitalization: 60978831,
    price_btc: 0.00000116034,
    price_usd: 0.00756814,
    price_eth: 0.0000154368,
    volume_usd: 1759030
  },
  {
    id: 26708,
    time: { secs_since_epoch: 1529074483, nanos_since_epoch: 0 },
    capitalization: 61639611,
    price_btc: 0.00000117259,
    price_usd: 0.00765015,
    price_eth: 0.0000155191,
    volume_usd: 1766280
  },
  {
    id: 26840,
    time: { secs_since_epoch: 1529093382, nanos_since_epoch: 0 },
    capitalization: 60045070,
    price_btc: 0.00000113378,
    price_usd: 0.00745225,
    price_eth: 0.0000150195,
    volume_usd: 1501870
  },
  {
    id: 27104,
    time: { secs_since_epoch: 1529113783, nanos_since_epoch: 0 },
    capitalization: 61428671,
    price_btc: 0.00000118355,
    price_usd: 0.00762397,
    price_eth: 0.0000155399,
    volume_usd: 1366320
  },
  {
    id: 27192,
    time: { secs_since_epoch: 1529120383, nanos_since_epoch: 0 },
    capitalization: 60056511,
    price_btc: 0.00000115566,
    price_usd: 0.00745367,
    price_eth: 0.0000151332,
    volume_usd: 1349240
  },
  {
    id: 27236,
    time: { secs_since_epoch: 1529132982, nanos_since_epoch: 0 },
    capitalization: 60915904,
    price_btc: 0.00000116514,
    price_usd: 0.00756033,
    price_eth: 0.0000151867,
    volume_usd: 1468970
  },
  {
    id: 27016,
    time: { secs_since_epoch: 1529135083, nanos_since_epoch: 0 },
    capitalization: 60689735,
    price_btc: 0.00000116224,
    price_usd: 0.00753226,
    price_eth: 0.0000151163,
    volume_usd: 1462240
  },
  {
    id: 27060,
    time: { secs_since_epoch: 1529164782, nanos_since_epoch: 0 },
    capitalization: 58471639,
    price_btc: 0.00000114044,
    price_usd: 0.00725697,
    price_eth: 0.0000148852,
    volume_usd: 1688710
  },
  {
    id: 26972,
    time: { secs_since_epoch: 1529172882, nanos_since_epoch: 0 },
    capitalization: 59409107,
    price_btc: 0.0000011251,
    price_usd: 0.00737332,
    price_eth: 0.0000147264,
    volume_usd: 1700190
  },
  {
    id: 27148,
    time: { secs_since_epoch: 1529182483, nanos_since_epoch: 0 },
    capitalization: 59652034,
    price_btc: 0.00000113021,
    price_usd: 0.00740347,
    price_eth: 0.0000148364,
    volume_usd: 1718190
  },
  {
    id: 27412,
    time: { secs_since_epoch: 1529191181, nanos_since_epoch: 0 },
    capitalization: 58829544,
    price_btc: 0.0000011171,
    price_usd: 0.00730139,
    price_eth: 0.0000146159,
    volume_usd: 1683500
  },
  {
    id: 27456,
    time: { secs_since_epoch: 1529219082, nanos_since_epoch: 0 },
    capitalization: 58680968,
    price_btc: 0.00000111195,
    price_usd: 0.00728295,
    price_eth: 0.0000145246,
    volume_usd: 1338110
  },
  {
    id: 27280,
    time: { secs_since_epoch: 1529225083, nanos_since_epoch: 0 },
    capitalization: 58861210,
    price_btc: 0.00000111078,
    price_usd: 0.00730532,
    price_eth: 0.0000144175,
    volume_usd: 1307220
  },
  {
    id: 27368,
    time: { secs_since_epoch: 1529234382, nanos_since_epoch: 0 },
    capitalization: 59756296,
    price_btc: 0.00000113248,
    price_usd: 0.00741641,
    price_eth: 0.00001484,
    volume_usd: 1226870
  },
  {
    id: 27500,
    time: { secs_since_epoch: 1529239482, nanos_since_epoch: 0 },
    capitalization: 59375911,
    price_btc: 0.00000113027,
    price_usd: 0.0073692,
    price_eth: 0.0000147137,
    volume_usd: 1101790
  },
  {
    id: 27324,
    time: { secs_since_epoch: 1529254783, nanos_since_epoch: 0 },
    capitalization: 59289214,
    price_btc: 0.00000112733,
    price_usd: 0.00735844,
    price_eth: 0.000014707,
    volume_usd: 819361
  },
  {
    id: 27588,
    time: { secs_since_epoch: 1529285382, nanos_since_epoch: 0 },
    capitalization: 58556321,
    price_btc: 0.00000113019,
    price_usd: 0.00726748,
    price_eth: 0.000014766,
    volume_usd: 789999
  },
  {
    id: 27676,
    time: { secs_since_epoch: 1529294083, nanos_since_epoch: 0 },
    capitalization: 58911326,
    price_btc: 0.00000112826,
    price_usd: 0.00731154,
    price_eth: 0.0000147375,
    volume_usd: 860490
  },
  {
    id: 27764,
    time: { secs_since_epoch: 1529326182, nanos_since_epoch: 0 },
    capitalization: 57976840,
    price_btc: 0.00000111248,
    price_usd: 0.00719556,
    price_eth: 0.0000144825,
    volume_usd: 949078
  },
  {
    id: 27632,
    time: { secs_since_epoch: 1529337283, nanos_since_epoch: 0 },
    capitalization: 58023814,
    price_btc: 0.00000111037,
    price_usd: 0.00720139,
    price_eth: 0.0000144663,
    volume_usd: 1137530
  },
  {
    id: 27544,
    time: { secs_since_epoch: 1529345082, nanos_since_epoch: 0 },
    capitalization: 59490727,
    price_btc: 0.00000109349,
    price_usd: 0.00738345,
    price_eth: 0.0000142542,
    volume_usd: 1315910
  },
  {
    id: 27808,
    time: { secs_since_epoch: 1529345383, nanos_since_epoch: 0 },
    capitalization: 60097523,
    price_btc: 0.00000110442,
    price_usd: 0.00745876,
    price_eth: 0.0000143626,
    volume_usd: 1317770
  },
  {
    id: 27720,
    time: { secs_since_epoch: 1529353782, nanos_since_epoch: 0 },
    capitalization: 59538668,
    price_btc: 0.00000109799,
    price_usd: 0.0073894,
    price_eth: 0.0000143183,
    volume_usd: 1292880
  },
  {
    id: 27896,
    time: { secs_since_epoch: 1529368783, nanos_since_epoch: 0 },
    capitalization: 59555508,
    price_btc: 0.00000109563,
    price_usd: 0.00739149,
    price_eth: 0.0000142243,
    volume_usd: 1230640
  },
  {
    id: 28028,
    time: { secs_since_epoch: 1529370282, nanos_since_epoch: 0 },
    capitalization: 59553332,
    price_btc: 0.00000109674,
    price_usd: 0.00739122,
    price_eth: 0.0000142063,
    volume_usd: 1224940
  },
  {
    id: 27852,
    time: { secs_since_epoch: 1529384683, nanos_since_epoch: 0 },
    capitalization: 56743991,
    price_btc: 0.00000104677,
    price_usd: 0.00704255,
    price_eth: 0.0000136223,
    volume_usd: 1282460
  },
  {
    id: 28072,
    time: { secs_since_epoch: 1529413482, nanos_since_epoch: 0 },
    capitalization: 58279673,
    price_btc: 0.00000107096,
    price_usd: 0.0072534,
    price_eth: 0.0000134391,
    volume_usd: 1321500
  },
  {
    id: 27984,
    time: { secs_since_epoch: 1529441982, nanos_since_epoch: 0 },
    capitalization: 57959646,
    price_btc: 0.000001073,
    price_usd: 0.00721357,
    price_eth: 0.000013569,
    volume_usd: 1395180
  },
  {
    id: 27940,
    time: { secs_since_epoch: 1529442582, nanos_since_epoch: 0 },
    capitalization: 58181327,
    price_btc: 0.00000107653,
    price_usd: 0.00724116,
    price_eth: 0.0000136446,
    volume_usd: 1403170
  },
  {
    id: 28116,
    time: { secs_since_epoch: 1529450983, nanos_since_epoch: 0 },
    capitalization: 57680999,
    price_btc: 0.00000106349,
    price_usd: 0.00717889,
    price_eth: 0.0000134326,
    volume_usd: 1608890
  },
  {
    id: 28380,
    time: { secs_since_epoch: 1529460883, nanos_since_epoch: 0 },
    capitalization: 54193330,
    price_btc: 0.00000101814,
    price_usd: 0.00674482,
    price_eth: 0.000012921,
    volume_usd: 2066670
  },
  {
    id: 28292,
    time: { secs_since_epoch: 1529483682, nanos_since_epoch: 0 },
    capitalization: 53177731,
    price_btc: 9.98772e-7,
    price_usd: 0.00661842,
    price_eth: 0.0000126226,
    volume_usd: 2398730
  },
  {
    id: 28336,
    time: { secs_since_epoch: 1529492982, nanos_since_epoch: 0 },
    capitalization: 50194246,
    price_btc: 9.43052e-7,
    price_usd: 0.0062471,
    price_eth: 0.0000119754,
    volume_usd: 2458830
  },
  {
    id: 28248,
    time: { secs_since_epoch: 1529500782, nanos_since_epoch: 0 },
    capitalization: 51483553,
    price_btc: 9.69534e-7,
    price_usd: 0.00641472,
    price_eth: 0.0000123148,
    volume_usd: 2409610
  },
  {
    id: 28160,
    time: { secs_since_epoch: 1529524481, nanos_since_epoch: 0 },
    capitalization: 51791505,
    price_btc: 9.55617e-7,
    price_usd: 0.00645309,
    price_eth: 0.0000120494,
    volume_usd: 2458780
  },
  {
    id: 28204,
    time: { secs_since_epoch: 1529527182, nanos_since_epoch: 0 },
    capitalization: 51605787,
    price_btc: 9.5239e-7,
    price_usd: 0.00642995,
    price_eth: 0.0000120531,
    volume_usd: 2438030
  },
  {
    id: 28644,
    time: { secs_since_epoch: 1529536781, nanos_since_epoch: 0 },
    capitalization: 48777719,
    price_btc: 9.01051e-7,
    price_usd: 0.00607758,
    price_eth: 0.0000113571,
    volume_usd: 2312280
  },
  {
    id: 28512,
    time: { secs_since_epoch: 1529542181, nanos_since_epoch: 0 },
    capitalization: 48953726,
    price_btc: 9.03316e-7,
    price_usd: 0.00609951,
    price_eth: 0.0000113622,
    volume_usd: 2304900
  },
  {
    id: 28424,
    time: { secs_since_epoch: 1529542481, nanos_since_epoch: 0 },
    capitalization: 49525648,
    price_btc: 9.15967e-7,
    price_usd: 0.00617077,
    price_eth: 0.000011507,
    volume_usd: 2407480
  },
  {
    id: 28556,
    time: { secs_since_epoch: 1529556281, nanos_since_epoch: 0 },
    capitalization: 50280318,
    price_btc: 9.27594e-7,
    price_usd: 0.0062648,
    price_eth: 0.0000116377,
    volume_usd: 2083290
  },
  {
    id: 28688,
    time: { secs_since_epoch: 1529568583, nanos_since_epoch: 0 },
    capitalization: 50576873,
    price_btc: 9.33805e-7,
    price_usd: 0.00630175,
    price_eth: 0.0000116909,
    volume_usd: 1847140
  },
  {
    id: 28600,
    time: { secs_since_epoch: 1529576981, nanos_since_epoch: 0 },
    capitalization: 50777921,
    price_btc: 9.38609e-7,
    price_usd: 0.0063268,
    price_eth: 0.0000118173,
    volume_usd: 1688130
  },
  {
    id: 28468,
    time: { secs_since_epoch: 1529617482, nanos_since_epoch: 0 },
    capitalization: 49239607,
    price_btc: 9.12971e-7,
    price_usd: 0.00613513,
    price_eth: 0.000011651,
    volume_usd: 1444170
  },
  {
    id: 28820,
    time: { secs_since_epoch: 1529622882, nanos_since_epoch: 0 },
    capitalization: 49040004,
    price_btc: 9.09945e-7,
    price_usd: 0.00611026,
    price_eth: 0.0000115774,
    volume_usd: 1355090
  },
  {
    id: 28732,
    time: { secs_since_epoch: 1529670281, nanos_since_epoch: 0 },
    capitalization: 45581988,
    price_btc: 8.95458e-7,
    price_usd: 0.0056794,
    price_eth: 0.0000116878,
    volume_usd: 1629980
  },
  {
    id: 28952,
    time: { secs_since_epoch: 1529672382, nanos_since_epoch: 0 },
    capitalization: 45037675,
    price_btc: 8.85163e-7,
    price_usd: 0.00561158,
    price_eth: 0.0000116386,
    volume_usd: 1662240
  },
  {
    id: 28908,
    time: { secs_since_epoch: 1529680181, nanos_since_epoch: 0 },
    capitalization: 43785804,
    price_btc: 8.82837e-7,
    price_usd: 0.0054556,
    price_eth: 0.0000114415,
    volume_usd: 1870890
  },
  {
    id: 28776,
    time: { secs_since_epoch: 1529685582, nanos_since_epoch: 0 },
    capitalization: 42822060,
    price_btc: 8.67772e-7,
    price_usd: 0.00533552,
    price_eth: 0.0000112629,
    volume_usd: 2001870
  },
  {
    id: 28864,
    time: { secs_since_epoch: 1529702981, nanos_since_epoch: 0 },
    capitalization: 42665075,
    price_btc: 8.83836e-7,
    price_usd: 0.00531596,
    price_eth: 0.0000114146,
    volume_usd: 2025150
  },
  {
    id: 29084,
    time: { secs_since_epoch: 1529704782, nanos_since_epoch: 0 },
    capitalization: 42557287,
    price_btc: 8.90407e-7,
    price_usd: 0.00530253,
    price_eth: 0.0000115727,
    volume_usd: 2029130
  },
  {
    id: 29216,
    time: { secs_since_epoch: 1529708682, nanos_since_epoch: 0 },
    capitalization: 42366593,
    price_btc: 8.69705e-7,
    price_usd: 0.00527877,
    price_eth: 0.0000112277,
    volume_usd: 2059530
  },
  {
    id: 28996,
    time: { secs_since_epoch: 1529715281, nanos_since_epoch: 0 },
    capitalization: 43336035,
    price_btc: 8.79892e-7,
    price_usd: 0.00539956,
    price_eth: 0.0000112944,
    volume_usd: 2080690
  },
  {
    id: 29128,
    time: { secs_since_epoch: 1529721581, nanos_since_epoch: 0 },
    capitalization: 44285573,
    price_btc: 8.97951e-7,
    price_usd: 0.00551787,
    price_eth: 0.0000115399,
    volume_usd: 2077790
  },
  {
    id: 29172,
    time: { secs_since_epoch: 1529740781, nanos_since_epoch: 0 },
    capitalization: 42336657,
    price_btc: 8.64828e-7,
    price_usd: 0.00527504,
    price_eth: 0.0000112833,
    volume_usd: 2097740
  },
  {
    id: 29260,
    time: { secs_since_epoch: 1529773181, nanos_since_epoch: 0 },
    capitalization: 41307824,
    price_btc: 8.40474e-7,
    price_usd: 0.00514685,
    price_eth: 0.000010943,
    volume_usd: 1293230
  },
  {
    id: 29040,
    time: { secs_since_epoch: 1529774981, nanos_since_epoch: 0 },
    capitalization: 41524201,
    price_btc: 8.44784e-7,
    price_usd: 0.00517381,
    price_eth: 0.0000109968,
    volume_usd: 1270280
  },
  {
    id: 29304,
    time: { secs_since_epoch: 1529811281, nanos_since_epoch: 0 },
    capitalization: 40508369,
    price_btc: 8.27189e-7,
    price_usd: 0.00504724,
    price_eth: 0.0000108278,
    volume_usd: 1017430
  },
  {
    id: 29392,
    time: { secs_since_epoch: 1529812181, nanos_since_epoch: 0 },
    capitalization: 40532527,
    price_btc: 8.27064e-7,
    price_usd: 0.00505025,
    price_eth: 0.0000107977,
    volume_usd: 1020030
  },
  {
    id: 29480,
    time: { secs_since_epoch: 1529835880, nanos_since_epoch: 0 },
    capitalization: 37496189,
    price_btc: 7.93281e-7,
    price_usd: 0.00467193,
    price_eth: 0.0000105618,
    volume_usd: 961410
  },
  {
    id: 29524,
    time: { secs_since_epoch: 1529860781, nanos_since_epoch: 0 },
    capitalization: 39436036,
    price_btc: 7.94289e-7,
    price_usd: 0.00491363,
    price_eth: 0.0000108995,
    volume_usd: 1343010
  },
  {
    id: 29436,
    time: { secs_since_epoch: 1529861380, nanos_since_epoch: 0 },
    capitalization: 40329393,
    price_btc: 8.09409e-7,
    price_usd: 0.00502494,
    price_eth: 0.0000110143,
    volume_usd: 1401150
  },
  {
    id: 29348,
    time: { secs_since_epoch: 1529874881, nanos_since_epoch: 0 },
    capitalization: 44157079,
    price_btc: 8.87963e-7,
    price_usd: 0.00550186,
    price_eth: 0.0000119402,
    volume_usd: 2611810
  },
  {
    id: 29744,
    time: { secs_since_epoch: 1529904882, nanos_since_epoch: 0 },
    capitalization: 51253773,
    price_btc: 0.00000103829,
    price_usd: 0.00638609,
    price_eth: 0.000014175,
    volume_usd: 9593820
  },
  {
    id: 29832,
    time: { secs_since_epoch: 1529909081, nanos_since_epoch: 0 },
    capitalization: 50153750,
    price_btc: 0.0000010141,
    price_usd: 0.00624903,
    price_eth: 0.000013837,
    volume_usd: 9784260
  },
  {
    id: 29568,
    time: { secs_since_epoch: 1529910581, nanos_since_epoch: 0 },
    capitalization: 50025257,
    price_btc: 0.00000101094,
    price_usd: 0.00623302,
    price_eth: 0.0000138522,
    volume_usd: 9803160
  },
  {
    id: 29612,
    time: { secs_since_epoch: 1529918380, nanos_since_epoch: 0 },
    capitalization: 53181180,
    price_btc: 0.00000107664,
    price_usd: 0.00662624,
    price_eth: 0.0000147439,
    volume_usd: 10649100
  },
  {
    id: 29656,
    time: { secs_since_epoch: 1529946281, nanos_since_epoch: 0 },
    capitalization: 52317759,
    price_btc: 0.00000103906,
    price_usd: 0.00651866,
    price_eth: 0.0000140295,
    volume_usd: 13268500
  },
  {
    id: 29700,
    time: { secs_since_epoch: 1529953181, nanos_since_epoch: 0 },
    capitalization: 51149918,
    price_btc: 0.00000101566,
    price_usd: 0.00637315,
    price_eth: 0.0000137495,
    volume_usd: 12410700
  },
  {
    id: 29788,
    time: { secs_since_epoch: 1529953781, nanos_since_epoch: 0 },
    capitalization: 50610742,
    price_btc: 0.00000100549,
    price_usd: 0.00630597,
    price_eth: 0.0000135993,
    volume_usd: 12358900
  },
  {
    id: 29964,
    time: { secs_since_epoch: 1529967282, nanos_since_epoch: 0 },
    capitalization: 50623102,
    price_btc: 0.00000100823,
    price_usd: 0.00630751,
    price_eth: 0.0000136915,
    volume_usd: 12167200
  },
  {
    id: 29876,
    time: { secs_since_epoch: 1529972681, nanos_since_epoch: 0 },
    capitalization: 51641582,
    price_btc: 0.00000103011,
    price_usd: 0.00643441,
    price_eth: 0.0000140188,
    volume_usd: 11592800
  },
  {
    id: 29920,
    time: { secs_since_epoch: 1529987666, nanos_since_epoch: 0 },
    capitalization: 48005392,
    price_btc: 9.60855e-7,
    price_usd: 0.00598135,
    price_eth: 0.0000130577,
    volume_usd: 6272730
  },
  {
    id: 30052,
    time: { secs_since_epoch: 1529998465, nanos_since_epoch: 0 },
    capitalization: 49854065,
    price_btc: 9.9702e-7,
    price_usd: 0.00621169,
    price_eth: 0.0000136696,
    volume_usd: 5808400
  },
  {
    id: 30096,
    time: { secs_since_epoch: 1530024566, nanos_since_epoch: 0 },
    capitalization: 47867428,
    price_btc: 9.64713e-7,
    price_usd: 0.00596416,
    price_eth: 0.0000134226,
    volume_usd: 2842720
  },
  {
    id: 30008,
    time: { secs_since_epoch: 1530026065, nanos_since_epoch: 0 },
    capitalization: 46982177,
    price_btc: 9.45529e-7,
    price_usd: 0.00585386,
    price_eth: 0.0000131304,
    volume_usd: 2797170
  },
  {
    id: 30272,
    time: { secs_since_epoch: 1530071069, nanos_since_epoch: 0 },
    capitalization: 44931012,
    price_btc: 9.23595e-7,
    price_usd: 0.00559829,
    price_eth: 0.000013029,
    volume_usd: 2482080
  },
  {
    id: 30184,
    time: { secs_since_epoch: 1530072571, nanos_since_epoch: 0 },
    capitalization: 44736385,
    price_btc: 9.19925e-7,
    price_usd: 0.00557404,
    price_eth: 0.0000130124,
    volume_usd: 2427790
  },
  {
    id: 30360,
    time: { secs_since_epoch: 1530079771, nanos_since_epoch: 0 },
    capitalization: 43996562,
    price_btc: 9.01896e-7,
    price_usd: 0.00548186,
    price_eth: 0.0000126583,
    volume_usd: 2410670
  },
  {
    id: 30316,
    time: { secs_since_epoch: 1530109770, nanos_since_epoch: 0 },
    capitalization: 45849008,
    price_btc: 9.39539e-7,
    price_usd: 0.00571267,
    price_eth: 0.0000132761,
    volume_usd: 2385960
  },
  {
    id: 30404,
    time: { secs_since_epoch: 1530110670, nanos_since_epoch: 0 },
    capitalization: 45120823,
    price_btc: 9.25783e-7,
    price_usd: 0.00562194,
    price_eth: 0.0000131005,
    volume_usd: 2408380
  },
  {
    id: 30228,
    time: { secs_since_epoch: 1530112470, nanos_since_epoch: 0 },
    capitalization: 45481264,
    price_btc: 9.28511e-7,
    price_usd: 0.00566685,
    price_eth: 0.0000131447,
    volume_usd: 2437650
  },
  {
    id: 30140,
    time: { secs_since_epoch: 1530127769, nanos_since_epoch: 0 },
    capitalization: 44928443,
    price_btc: 9.1595e-7,
    price_usd: 0.00559797,
    price_eth: 0.0000129171,
    volume_usd: 2386500
  },
  {
    id: 30536,
    time: { secs_since_epoch: 1530138269, nanos_since_epoch: 0 },
    capitalization: 45380619,
    price_btc: 9.2242e-7,
    price_usd: 0.00565431,
    price_eth: 0.0000129731,
    volume_usd: 2435230
  },
  {
    id: 30492,
    time: { secs_since_epoch: 1530142170, nanos_since_epoch: 0 },
    capitalization: 45059987,
    price_btc: 9.12905e-7,
    price_usd: 0.00561436,
    price_eth: 0.0000126871,
    volume_usd: 2427510
  },
  {
    id: 30624,
    time: { secs_since_epoch: 1530142469, nanos_since_epoch: 0 },
    capitalization: 44999312,
    price_btc: 9.1147e-7,
    price_usd: 0.0056068,
    price_eth: 0.0000127054,
    volume_usd: 2426980
  },
  {
    id: 30668,
    time: { secs_since_epoch: 1530154170, nanos_since_epoch: 0 },
    capitalization: 44731890,
    price_btc: 9.09687e-7,
    price_usd: 0.00557348,
    price_eth: 0.0000127036,
    volume_usd: 2234350
  },
  {
    id: 30712,
    time: { secs_since_epoch: 1530174270, nanos_since_epoch: 0 },
    capitalization: 44638309,
    price_btc: 9.08972e-7,
    price_usd: 0.00556182,
    price_eth: 0.0000127802,
    volume_usd: 1979250
  },
  {
    id: 30448,
    time: { secs_since_epoch: 1530177570, nanos_since_epoch: 0 },
    capitalization: 44611743,
    price_btc: 9.08604e-7,
    price_usd: 0.00555851,
    price_eth: 0.0000127456,
    volume_usd: 1896190
  },
  {
    id: 30580,
    time: { secs_since_epoch: 1530207269, nanos_since_epoch: 0 },
    capitalization: 44147529,
    price_btc: 9.00962e-7,
    price_usd: 0.00550067,
    price_eth: 0.0000126123,
    volume_usd: 1096570
  },
  {
    id: 30844,
    time: { secs_since_epoch: 1530236344, nanos_since_epoch: 0 },
    capitalization: 42439950,
    price_btc: 9.02312e-7,
    price_usd: 0.00528791,
    price_eth: 0.0000125394,
    volume_usd: 1027180
  },
  {
    id: 30888,
    time: { secs_since_epoch: 1530242044, nanos_since_epoch: 0 },
    capitalization: 41780867,
    price_btc: 8.87836e-7,
    price_usd: 0.00520579,
    price_eth: 0.0000123515,
    volume_usd: 1008390
  },
  {
    id: 30932,
    time: { secs_since_epoch: 1530255241, nanos_since_epoch: 0 },
    capitalization: 42755526,
    price_btc: 9.05734e-7,
    price_usd: 0.00532723,
    price_eth: 0.0000127728,
    volume_usd: 1085990
  },
  {
    id: 30976,
    time: { secs_since_epoch: 1530265144, nanos_since_epoch: 0 },
    capitalization: 43715979,
    price_btc: 9.22776e-7,
    price_usd: 0.0054469,
    price_eth: 0.0000130836,
    volume_usd: 991897
  },
  {
    id: 30800,
    time: { secs_since_epoch: 1530279841, nanos_since_epoch: 0 },
    capitalization: 42427911,
    price_btc: 9.04171e-7,
    price_usd: 0.00528641,
    price_eth: 0.0000129199,
    volume_usd: 1071660
  },
  {
    id: 30756,
    time: { secs_since_epoch: 1530299943, nanos_since_epoch: 0 },
    capitalization: 43147990,
    price_btc: 9.1462e-7,
    price_usd: 0.00537613,
    price_eth: 0.0000131383,
    volume_usd: 1028860
  },
  {
    id: 31240,
    time: { secs_since_epoch: 1530337142, nanos_since_epoch: 0 },
    capitalization: 47355539,
    price_btc: 9.22533e-7,
    price_usd: 0.00590038,
    price_eth: 0.0000130675,
    volume_usd: 1890710
  },
  {
    id: 31284,
    time: { secs_since_epoch: 1530349443, nanos_since_epoch: 0 },
    capitalization: 46890522,
    price_btc: 9.1404e-7,
    price_usd: 0.00584244,
    price_eth: 0.0000129305,
    volume_usd: 2099880
  },
  {
    id: 31152,
    time: { secs_since_epoch: 1530355141, nanos_since_epoch: 0 },
    capitalization: 46834662,
    price_btc: 9.13012e-7,
    price_usd: 0.00583548,
    price_eth: 0.0000128493,
    volume_usd: 2070730
  },
  {
    id: 31108,
    time: { secs_since_epoch: 1530367742, nanos_since_epoch: 0 },
    capitalization: 46815962,
    price_btc: 9.13371e-7,
    price_usd: 0.00583315,
    price_eth: 0.000012859,
    volume_usd: 2167590
  },
  {
    id: 31196,
    time: { secs_since_epoch: 1530375243, nanos_since_epoch: 0 },
    capitalization: 46278471,
    price_btc: 9.05609e-7,
    price_usd: 0.00576618,
    price_eth: 0.0000129054,
    volume_usd: 2309300
  },
  {
    id: 31020,
    time: { secs_since_epoch: 1530376143, nanos_since_epoch: 0 },
    capitalization: 46803843,
    price_btc: 9.17551e-7,
    price_usd: 0.00583164,
    price_eth: 0.0000130713,
    volume_usd: 2311710
  },
  {
    id: 31064,
    time: { secs_since_epoch: 1530383045, nanos_since_epoch: 0 },
    capitalization: 46247170,
    price_btc: 9.08516e-7,
    price_usd: 0.00576228,
    price_eth: 0.0000129383,
    volume_usd: 2332320
  },
  {
    id: 31372,
    time: { secs_since_epoch: 1530398344, nanos_since_epoch: 0 },
    capitalization: 46789557,
    price_btc: 9.20092e-7,
    price_usd: 0.00582986,
    price_eth: 0.0000130863,
    volume_usd: 2254970
  },
  {
    id: 31548,
    time: { secs_since_epoch: 1530402842, nanos_since_epoch: 0 },
    capitalization: 47351607,
    price_btc: 9.20632e-7,
    price_usd: 0.00589989,
    price_eth: 0.0000129774,
    volume_usd: 2147250
  },
  {
    id: 31328,
    time: { secs_since_epoch: 1530440342, nanos_since_epoch: 0 },
    capitalization: 46243799,
    price_btc: 9.047e-7,
    price_usd: 0.00576186,
    price_eth: 0.0000126887,
    volume_usd: 846577
  },
  {
    id: 31504,
    time: { secs_since_epoch: 1530445145, nanos_since_epoch: 0 },
    capitalization: 45690658,
    price_btc: 8.93569e-7,
    price_usd: 0.00569294,
    price_eth: 0.0000125236,
    volume_usd: 857354
  },
  {
    id: 31416,
    time: { secs_since_epoch: 1530470343, nanos_since_epoch: 0 },
    capitalization: 45596836,
    price_btc: 8.98336e-7,
    price_usd: 0.00568125,
    price_eth: 0.0000126452,
    volume_usd: 784742
  },
  {
    id: 31460,
    time: { secs_since_epoch: 1530475742, nanos_since_epoch: 0 },
    capitalization: 45585600,
    price_btc: 8.98718e-7,
    price_usd: 0.00567985,
    price_eth: 0.0000126589,
    volume_usd: 780770
  },
  {
    id: 31680,
    time: { secs_since_epoch: 1530485642, nanos_since_epoch: 0 },
    capitalization: 45547397,
    price_btc: 8.92028e-7,
    price_usd: 0.00567509,
    price_eth: 0.0000125501,
    volume_usd: 821477
  },
  {
    id: 31592,
    time: { secs_since_epoch: 1530520141, nanos_since_epoch: 0 },
    capitalization: 44928604,
    price_btc: 8.83094e-7,
    price_usd: 0.00559799,
    price_eth: 0.0000124063,
    volume_usd: 869036
  },
  {
    id: 31768,
    time: { secs_since_epoch: 1530534841, nanos_since_epoch: 0 },
    capitalization: 45595471,
    price_btc: 8.96735e-7,
    price_usd: 0.00568108,
    price_eth: 0.0000125873,
    volume_usd: 1091950
  },
  {
    id: 31812,
    time: { secs_since_epoch: 1530535142, nanos_since_epoch: 0 },
    capitalization: 45104049,
    price_btc: 8.88009e-7,
    price_usd: 0.00561985,
    price_eth: 0.0000124814,
    volume_usd: 1082310
  },
  {
    id: 31856,
    time: { secs_since_epoch: 1530545341, nanos_since_epoch: 0 },
    capitalization: 47413165,
    price_btc: 8.92174e-7,
    price_usd: 0.00590756,
    price_eth: 0.0000124822,
    volume_usd: 1654440
  },
  {
    id: 31724,
    time: { secs_since_epoch: 1530547441, nanos_since_epoch: 0 },
    capitalization: 46908018,
    price_btc: 8.83685e-7,
    price_usd: 0.00584462,
    price_eth: 0.0000123334,
    volume_usd: 1643770
  },
  {
    id: 31636,
    time: { secs_since_epoch: 1530562441, nanos_since_epoch: 0 },
    capitalization: 47680747,
    price_btc: 8.97141e-7,
    price_usd: 0.0059409,
    price_eth: 0.0000124482,
    volume_usd: 1806030
  },
  {
    id: 32120,
    time: { secs_since_epoch: 1530596941, nanos_since_epoch: 0 },
    capitalization: 49281181,
    price_btc: 9.25959e-7,
    price_usd: 0.00614031,
    price_eth: 0.0000127683,
    volume_usd: 2044760
  },
  {
    id: 31988,
    time: { secs_since_epoch: 1530610444, nanos_since_epoch: 0 },
    capitalization: 47107782,
    price_btc: 8.84727e-7,
    price_usd: 0.00586951,
    price_eth: 0.000012297,
    volume_usd: 2203410
  },
  {
    id: 32076,
    time: { secs_since_epoch: 1530629041, nanos_since_epoch: 0 },
    capitalization: 46597338,
    price_btc: 8.8396e-7,
    price_usd: 0.00580591,
    price_eth: 0.0000124504,
    volume_usd: 1878620
  },
  {
    id: 32032,
    time: { secs_since_epoch: 1530636542, nanos_since_epoch: 0 },
    capitalization: 45996362,
    price_btc: 8.69751e-7,
    price_usd: 0.00573103,
    price_eth: 0.0000121948,
    volume_usd: 1555560
  },
  {
    id: 31900,
    time: { secs_since_epoch: 1530637446, nanos_since_epoch: 0 },
    capitalization: 46472295,
    price_btc: 8.79302e-7,
    price_usd: 0.00579033,
    price_eth: 0.0000123231,
    volume_usd: 1554320
  },
  {
    id: 31944,
    time: { secs_since_epoch: 1530649743, nanos_since_epoch: 0 },
    capitalization: 46601832,
    price_btc: 8.77465e-7,
    price_usd: 0.00580647,
    price_eth: 0.000012364,
    volume_usd: 1468700
  },
  {
    id: 32340,
    time: { secs_since_epoch: 1530656941, nanos_since_epoch: 0 },
    capitalization: 46594368,
    price_btc: 8.80489e-7,
    price_usd: 0.00580554,
    price_eth: 0.0000123658,
    volume_usd: 1419590
  },
  {
    id: 32252,
    time: { secs_since_epoch: 1530667442, nanos_since_epoch: 0 },
    capitalization: 45491858,
    price_btc: 8.80511e-7,
    price_usd: 0.00566817,
    price_eth: 0.0000125113,
    volume_usd: 1558910
  },
  {
    id: 32384,
    time: { secs_since_epoch: 1530667745, nanos_since_epoch: 0 },
    capitalization: 45496994,
    price_btc: 8.80326e-7,
    price_usd: 0.00566881,
    price_eth: 0.0000124506,
    volume_usd: 1568630
  },
  {
    id: 32296,
    time: { secs_since_epoch: 1530696542, nanos_since_epoch: 0 },
    capitalization: 45961289,
    price_btc: 8.8138e-7,
    price_usd: 0.00572666,
    price_eth: 0.000012323,
    volume_usd: 1171850
  },
  {
    id: 32428,
    time: { secs_since_epoch: 1530712744, nanos_since_epoch: 0 },
    capitalization: 47116530,
    price_btc: 8.74638e-7,
    price_usd: 0.0058706,
    price_eth: 0.0000123468,
    volume_usd: 1164920
  },
  {
    id: 32208,
    time: { secs_since_epoch: 1530725642, nanos_since_epoch: 0 },
    capitalization: 46101337,
    price_btc: 8.60636e-7,
    price_usd: 0.00574877,
    price_eth: 0.0000121173,
    volume_usd: 1065740
  },
  {
    id: 32164,
    time: { secs_since_epoch: 1530732544, nanos_since_epoch: 0 },
    capitalization: 46588832,
    price_btc: 8.71004e-7,
    price_usd: 0.00580956,
    price_eth: 0.000012303,
    volume_usd: 1040010
  },
  {
    id: 32604,
    time: { secs_since_epoch: 1530751444, nanos_since_epoch: 0 },
    capitalization: 45977999,
    price_btc: 8.73744e-7,
    price_usd: 0.00573339,
    price_eth: 0.0000123227,
    volume_usd: 1038150
  },
  {
    id: 32472,
    time: { secs_since_epoch: 1530799145, nanos_since_epoch: 0 },
    capitalization: 45878078,
    price_btc: 8.67546e-7,
    price_usd: 0.00572093,
    price_eth: 0.0000121624,
    volume_usd: 743360
  },
  {
    id: 32560,
    time: { secs_since_epoch: 1530799441, nanos_since_epoch: 0 },
    capitalization: 45496518,
    price_btc: 8.60208e-7,
    price_usd: 0.00567335,
    price_eth: 0.0000120361,
    volume_usd: 733116
  },
  {
    id: 32692,
    time: { secs_since_epoch: 1530809341, nanos_since_epoch: 0 },
    capitalization: 45815367,
    price_btc: 8.63514e-7,
    price_usd: 0.00571311,
    price_eth: 0.0000121267,
    volume_usd: 818892
  },
  {
    id: 32516,
    time: { secs_since_epoch: 1530814742, nanos_since_epoch: 0 },
    capitalization: 44960104,
    price_btc: 8.52615e-7,
    price_usd: 0.00560646,
    price_eth: 0.0000119857,
    volume_usd: 781907
  },
  {
    id: 32648,
    time: { secs_since_epoch: 1530819541, nanos_since_epoch: 0 },
    capitalization: 44777584,
    price_btc: 8.62541e-7,
    price_usd: 0.0055837,
    price_eth: 0.0000121248,
    volume_usd: 822689
  },
  {
    id: 32956,
    time: { secs_since_epoch: 1530825841, nanos_since_epoch: 0 },
    capitalization: 45309748,
    price_btc: 8.71294e-7,
    price_usd: 0.00565006,
    price_eth: 0.0000121838,
    volume_usd: 806588
  },
  {
    id: 32824,
    time: { secs_since_epoch: 1530842942, nanos_since_epoch: 0 },
    capitalization: 44878868,
    price_btc: 8.57719e-7,
    price_usd: 0.00559633,
    price_eth: 0.0000119958,
    volume_usd: 783589
  },
  {
    id: 32736,
    time: { secs_since_epoch: 1530845042, nanos_since_epoch: 0 },
    capitalization: 44891940,
    price_btc: 8.56726e-7,
    price_usd: 0.00559796,
    price_eth: 0.0000119727,
    volume_usd: 761696
  },
  {
    id: 32780,
    time: { secs_since_epoch: 1530858541, nanos_since_epoch: 0 },
    capitalization: 44146141,
    price_btc: 8.46893e-7,
    price_usd: 0.00550496,
    price_eth: 0.0000119079,
    volume_usd: 886411
  },
  {
    id: 32868,
    time: { secs_since_epoch: 1530860042, nanos_since_epoch: 0 },
    capitalization: 43711654,
    price_btc: 8.43146e-7,
    price_usd: 0.00545078,
    price_eth: 0.0000118622,
    volume_usd: 889442
  },
  {
    id: 33000,
    time: { secs_since_epoch: 1530883741, nanos_since_epoch: 0 },
    capitalization: 45127067,
    price_btc: 8.59252e-7,
    price_usd: 0.00562728,
    price_eth: 0.0000120232,
    volume_usd: 795874
  },
  {
    id: 32912,
    time: { secs_since_epoch: 1530893642, nanos_since_epoch: 0 },
    capitalization: 44724416,
    price_btc: 8.48596e-7,
    price_usd: 0.00557707,
    price_eth: 0.0000119091,
    volume_usd: 681511
  },
  {
    id: 33220,
    time: { secs_since_epoch: 1530916770, nanos_since_epoch: 0 },
    capitalization: 44657134,
    price_btc: 8.47134e-7,
    price_usd: 0.00556868,
    price_eth: 0.0000118758,
    volume_usd: 642989
  },
  {
    id: 33308,
    time: { secs_since_epoch: 1530926644, nanos_since_epoch: 0 },
    capitalization: 44672852,
    price_btc: 8.46429e-7,
    price_usd: 0.00557064,
    price_eth: 0.0000118822,
    volume_usd: 628734
  },
  {
    id: 33044,
    time: { secs_since_epoch: 1530969541, nanos_since_epoch: 0 },
    capitalization: 42653565,
    price_btc: 8.13825e-7,
    price_usd: 0.00532946,
    price_eth: 0.0000114228,
    volume_usd: 645635
  },
  {
    id: 33264,
    time: { secs_since_epoch: 1530978241, nanos_since_epoch: 0 },
    capitalization: 43650223,
    price_btc: 8.32599e-7,
    price_usd: 0.00545399,
    price_eth: 0.000011671,
    volume_usd: 836863
  },
  {
    id: 33088,
    time: { secs_since_epoch: 1530992944, nanos_since_epoch: 0 },
    capitalization: 44151873,
    price_btc: 8.42652e-7,
    price_usd: 0.00551667,
    price_eth: 0.0000118245,
    volume_usd: 900310
  },
  {
    id: 33132,
    time: { secs_since_epoch: 1530996241, nanos_since_epoch: 0 },
    capitalization: 43700164,
    price_btc: 8.37249e-7,
    price_usd: 0.00546023,
    price_eth: 0.0000117539,
    volume_usd: 895012
  },
  {
    id: 33176,
    time: { secs_since_epoch: 1530996541, nanos_since_epoch: 0 },
    capitalization: 43730496,
    price_btc: 8.3672e-7,
    price_usd: 0.00546402,
    price_eth: 0.0000117365,
    volume_usd: 895553
  },
  {
    id: 33572,
    time: { secs_since_epoch: 1531034341, nanos_since_epoch: 0 },
    capitalization: 44381552,
    price_btc: 8.24859e-7,
    price_usd: 0.00555456,
    price_eth: 0.0000114462,
    volume_usd: 1143810
  },
  {
    id: 33528,
    time: { secs_since_epoch: 1531034946, nanos_since_epoch: 0 },
    capitalization: 44486382,
    price_btc: 8.26857e-7,
    price_usd: 0.00556768,
    price_eth: 0.0000114705,
    volume_usd: 1148670
  },
  {
    id: 33440,
    time: { secs_since_epoch: 1531040343, nanos_since_epoch: 0 },
    capitalization: 44782381,
    price_btc: 8.33947e-7,
    price_usd: 0.00560799,
    price_eth: 0.0000115596,
    volume_usd: 1254530
  },
  {
    id: 33396,
    time: { secs_since_epoch: 1531048446, nanos_since_epoch: 0 },
    capitalization: 43708489,
    price_btc: 8.16086e-7,
    price_usd: 0.00548789,
    price_eth: 0.0000113169,
    volume_usd: 1260730
  },
  {
    id: 33484,
    time: { secs_since_epoch: 1531063141, nanos_since_epoch: 0 },
    capitalization: 44439076,
    price_btc: 8.2736e-7,
    price_usd: 0.00557962,
    price_eth: 0.0000114258,
    volume_usd: 937137
  },
  {
    id: 33352,
    time: { secs_since_epoch: 1531077860, nanos_since_epoch: 0 },
    capitalization: 44790949,
    price_btc: 8.33707e-7,
    price_usd: 0.0056238,
    price_eth: 0.0000114532,
    volume_usd: 876665
  },
  {
    id: 33880,
    time: { secs_since_epoch: 1531095548, nanos_since_epoch: 0 },
    capitalization: 44287192,
    price_btc: 8.27239e-7,
    price_usd: 0.00556055,
    price_eth: 0.0000113954,
    volume_usd: 811044
  },
  {
    id: 33704,
    time: { secs_since_epoch: 1531105461, nanos_since_epoch: 0 },
    capitalization: 44061159,
    price_btc: 8.25403e-7,
    price_usd: 0.00553217,
    price_eth: 0.0000115169,
    volume_usd: 764024
  },
  {
    id: 33748,
    time: { secs_since_epoch: 1531107551, nanos_since_epoch: 0 },
    capitalization: 44101857,
    price_btc: 8.2441e-7,
    price_usd: 0.00553728,
    price_eth: 0.000011483,
    volume_usd: 750965
  },
  {
    id: 33616,
    time: { secs_since_epoch: 1531116246, nanos_since_epoch: 0 },
    capitalization: 43594198,
    price_btc: 8.16277e-7,
    price_usd: 0.00547354,
    price_eth: 0.0000113769,
    volume_usd: 720436
  },
  {
    id: 33836,
    time: { secs_since_epoch: 1531130345, nanos_since_epoch: 0 },
    capitalization: 42645622,
    price_btc: 8.01006e-7,
    price_usd: 0.00535444,
    price_eth: 0.0000111416,
    volume_usd: 804814
  },
  {
    id: 33792,
    time: { secs_since_epoch: 1531142360, nanos_since_epoch: 0 },
    capitalization: 43077778,
    price_btc: 8.04679e-7,
    price_usd: 0.0054087,
    price_eth: 0.0000112437,
    volume_usd: 993405
  },
  {
    id: 33660,
    time: { secs_since_epoch: 1531161854, nanos_since_epoch: 0 },
    capitalization: 42475260,
    price_btc: 7.95326e-7,
    price_usd: 0.00533305,
    price_eth: 0.0000112085,
    volume_usd: 937737
  },
  {
    id: 34012,
    time: { secs_since_epoch: 1531173554, nanos_since_epoch: 0 },
    capitalization: 42504490,
    price_btc: 7.95165e-7,
    price_usd: 0.00533672,
    price_eth: 0.0000111598,
    volume_usd: 975055
  },
  {
    id: 34056,
    time: { secs_since_epoch: 1531211361, nanos_since_epoch: 0 },
    capitalization: 41234466,
    price_btc: 7.83066e-7,
    price_usd: 0.00517726,
    price_eth: 0.00001129,
    volume_usd: 833578
  },
  {
    id: 34100,
    time: { secs_since_epoch: 1531229648, nanos_since_epoch: 0 },
    capitalization: 40430924,
    price_btc: 7.92534e-7,
    price_usd: 0.00507637,
    price_eth: 0.0000114999,
    volume_usd: 554357
  },
  {
    id: 33924,
    time: { secs_since_epoch: 1531232656, nanos_since_epoch: 0 },
    capitalization: 40949017,
    price_btc: 8.04912e-7,
    price_usd: 0.00514142,
    price_eth: 0.0000117228,
    volume_usd: 571361
  },
  {
    id: 33968,
    time: { secs_since_epoch: 1531240455, nanos_since_epoch: 0 },
    capitalization: 40313765,
    price_btc: 7.90512e-7,
    price_usd: 0.00506166,
    price_eth: 0.0000114759,
    volume_usd: 509373
  },
  {
    id: 34144,
    time: { secs_since_epoch: 1531242556, nanos_since_epoch: 0 },
    capitalization: 40855354,
    price_btc: 8.04548e-7,
    price_usd: 0.00512966,
    price_eth: 0.0000117106,
    volume_usd: 508453
  },
  {
    id: 34408,
    time: { secs_since_epoch: 1531284862, nanos_since_epoch: 0 },
    capitalization: 40042254,
    price_btc: 7.88761e-7,
    price_usd: 0.00502757,
    price_eth: 0.0000115749,
    volume_usd: 336737
  },
  {
    id: 34452,
    time: { secs_since_epoch: 1531303748, nanos_since_epoch: 0 },
    capitalization: 39624196,
    price_btc: 7.80505e-7,
    price_usd: 0.00497508,
    price_eth: 0.0000113239,
    volume_usd: 352325
  },
  {
    id: 34188,
    time: { secs_since_epoch: 1531311247, nanos_since_epoch: 0 },
    capitalization: 40645329,
    price_btc: 7.96761e-7,
    price_usd: 0.00510329,
    price_eth: 0.0000115213,
    volume_usd: 437276
  },
  {
    id: 34276,
    time: { secs_since_epoch: 1531317553, nanos_since_epoch: 0 },
    capitalization: 40716532,
    price_btc: 7.96746e-7,
    price_usd: 0.00511223,
    price_eth: 0.0000114758,
    volume_usd: 482102
  },
  {
    id: 34364,
    time: { secs_since_epoch: 1531323257, nanos_since_epoch: 0 },
    capitalization: 40822859,
    price_btc: 7.99045e-7,
    price_usd: 0.00512558,
    price_eth: 0.0000115727,
    volume_usd: 491133
  },
  {
    id: 34320,
    time: { secs_since_epoch: 1531324451, nanos_since_epoch: 0 },
    capitalization: 40696621,
    price_btc: 7.95844e-7,
    price_usd: 0.00510973,
    price_eth: 0.0000115422,
    volume_usd: 500736
  },
  {
    id: 34232,
    time: { secs_since_epoch: 1531339449, nanos_since_epoch: 0 },
    capitalization: 40602559,
    price_btc: 8.00695e-7,
    price_usd: 0.00509792,
    price_eth: 0.0000116398,
    volume_usd: 558823
  },
  {
    id: 34496,
    time: { secs_since_epoch: 1531347259, nanos_since_epoch: 0 },
    capitalization: 40204253,
    price_btc: 7.90753e-7,
    price_usd: 0.00504791,
    price_eth: 0.0000114225,
    volume_usd: 577826
  },
  {
    id: 34584,
    time: { secs_since_epoch: 1531354762, nanos_since_epoch: 0 },
    capitalization: 39522409,
    price_btc: 7.76792e-7,
    price_usd: 0.0049623,
    price_eth: 0.0000111371,
    volume_usd: 618952
  },
  {
    id: 34628,
    time: { secs_since_epoch: 1531364947, nanos_since_epoch: 0 },
    capitalization: 39485454,
    price_btc: 7.81178e-7,
    price_usd: 0.00495766,
    price_eth: 0.0000112597,
    volume_usd: 648132
  },
  {
    id: 34672,
    time: { secs_since_epoch: 1531382656, nanos_since_epoch: 0 },
    capitalization: 39149988,
    price_btc: 7.94172e-7,
    price_usd: 0.00491554,
    price_eth: 0.0000113403,
    volume_usd: 752258
  },
  {
    id: 34540,
    time: { secs_since_epoch: 1531411458, nanos_since_epoch: 0 },
    capitalization: 38525250,
    price_btc: 7.82842e-7,
    price_usd: 0.0048371,
    price_eth: 0.000011201,
    volume_usd: 684328
  },
  {
    id: 34716,
    time: { secs_since_epoch: 1531423451, nanos_since_epoch: 0 },
    capitalization: 38699434,
    price_btc: 7.85977e-7,
    price_usd: 0.00485897,
    price_eth: 0.0000112692,
    volume_usd: 669303
  },
  {
    id: 35024,
    time: { secs_since_epoch: 1531439955, nanos_since_epoch: 0 },
    capitalization: 38918777,
    price_btc: 7.83534e-7,
    price_usd: 0.00488651,
    price_eth: 0.0000113714,
    volume_usd: 672677
  },
  {
    id: 34848,
    time: { secs_since_epoch: 1531454349, nanos_since_epoch: 0 },
    capitalization: 39405649,
    price_btc: 7.90788e-7,
    price_usd: 0.00494764,
    price_eth: 0.0000112803,
    volume_usd: 642455
  },
  {
    id: 34936,
    time: { secs_since_epoch: 1531472653, nanos_since_epoch: 0 },
    capitalization: 38823044,
    price_btc: 7.79969e-7,
    price_usd: 0.00487449,
    price_eth: 0.0000111303,
    volume_usd: 523046
  },
  {
    id: 34804,
    time: { secs_since_epoch: 1531474151, nanos_since_epoch: 0 },
    capitalization: 39219996,
    price_btc: 7.87302e-7,
    price_usd: 0.00492433,
    price_eth: 0.0000112229,
    volume_usd: 508470
  },
  {
    id: 34892,
    time: { secs_since_epoch: 1531478049, nanos_since_epoch: 0 },
    capitalization: 39121105,
    price_btc: 7.78861e-7,
    price_usd: 0.00487114,
    price_eth: 0.0000110982,
    volume_usd: 547875
  },
  {
    id: 34760,
    time: { secs_since_epoch: 1531493362, nanos_since_epoch: 0 },
    capitalization: 39041516,
    price_btc: 7.75629e-7,
    price_usd: 0.00486123,
    price_eth: 0.000011057,
    volume_usd: 719580
  },
  {
    id: 34980,
    time: { secs_since_epoch: 1531496954, nanos_since_epoch: 0 },
    capitalization: 38461262,
    price_btc: 7.63867e-7,
    price_usd: 0.00478898,
    price_eth: 0.0000108999,
    volume_usd: 722090
  },
  {
    id: 35156,
    time: { secs_since_epoch: 1531523362, nanos_since_epoch: 0 },
    capitalization: 37065680,
    price_btc: 7.40608e-7,
    price_usd: 0.00461521,
    price_eth: 0.0000106404,
    volume_usd: 784858
  },
  {
    id: 35288,
    time: { secs_since_epoch: 1531525153, nanos_since_epoch: 0 },
    capitalization: 37469328,
    price_btc: 7.49384e-7,
    price_usd: 0.00466547,
    price_eth: 0.0000107765,
    volume_usd: 776374
  },
  {
    id: 35112,
    time: { secs_since_epoch: 1531535361, nanos_since_epoch: 0 },
    capitalization: 37418651,
    price_btc: 7.44987e-7,
    price_usd: 0.00465916,
    price_eth: 0.0000106861,
    volume_usd: 781159
  },
  {
    id: 35200,
    time: { secs_since_epoch: 1531545250, nanos_since_epoch: 0 },
    capitalization: 37449571,
    price_btc: 7.47642e-7,
    price_usd: 0.00466301,
    price_eth: 0.0000107554,
    volume_usd: 826295
  },
  {
    id: 35244,
    time: { secs_since_epoch: 1531548262, nanos_since_epoch: 0 },
    capitalization: 37128002,
    price_btc: 7.40869e-7,
    price_usd: 0.00462297,
    price_eth: 0.000010624,
    volume_usd: 832981
  },
  {
    id: 35068,
    time: { secs_since_epoch: 1531593544, nanos_since_epoch: 0 },
    capitalization: 37380101,
    price_btc: 7.43665e-7,
    price_usd: 0.00465436,
    price_eth: 0.0000106717,
    volume_usd: 529440
  },
  {
    id: 35596,
    time: { secs_since_epoch: 1531619959, nanos_since_epoch: 0 },
    capitalization: 36945694,
    price_btc: 7.34698e-7,
    price_usd: 0.00460027,
    price_eth: 0.0000105906,
    volume_usd: 497140
  },
  {
    id: 35376,
    time: { secs_since_epoch: 1531624460, nanos_since_epoch: 0 },
    capitalization: 37224617,
    price_btc: 7.40312e-7,
    price_usd: 0.004635,
    price_eth: 0.0000106625,
    volume_usd: 484186
  },
  {
    id: 35420,
    time: { secs_since_epoch: 1531635856, nanos_since_epoch: 0 },
    capitalization: 37262043,
    price_btc: 7.37008e-7,
    price_usd: 0.00463966,
    price_eth: 0.0000105861,
    volume_usd: 447980
  },
  {
    id: 35464,
    time: { secs_since_epoch: 1531642450, nanos_since_epoch: 0 },
    capitalization: 37155629,
    price_btc: 7.3463e-7,
    price_usd: 0.00462641,
    price_eth: 0.0000105402,
    volume_usd: 443298
  },
  {
    id: 35508,
    time: { secs_since_epoch: 1531652661, nanos_since_epoch: 0 },
    capitalization: 37695647,
    price_btc: 7.38596e-7,
    price_usd: 0.00469365,
    price_eth: 0.0000105216,
    volume_usd: 466401
  },
  {
    id: 35552,
    time: { secs_since_epoch: 1531672456, nanos_since_epoch: 0 },
    capitalization: 37797965,
    price_btc: 7.36645e-7,
    price_usd: 0.00470639,
    price_eth: 0.0000104125,
    volume_usd: 469205
  },
  {
    id: 35332,
    time: { secs_since_epoch: 1531683852, nanos_since_epoch: 0 },
    capitalization: 37768249,
    price_btc: 7.3691e-7,
    price_usd: 0.00470269,
    price_eth: 0.0000104261,
    volume_usd: 476963
  },
  {
    id: 35728,
    time: { secs_since_epoch: 1531703057, nanos_since_epoch: 0 },
    capitalization: 37509323,
    price_btc: 7.34123e-7,
    price_usd: 0.00467045,
    price_eth: 0.0000103848,
    volume_usd: 479432
  },
  {
    id: 35904,
    time: { secs_since_epoch: 1531708750, nanos_since_epoch: 0 },
    capitalization: 37517354,
    price_btc: 7.34252e-7,
    price_usd: 0.00467145,
    price_eth: 0.0000104313,
    volume_usd: 498953
  },
  {
    id: 35640,
    time: { secs_since_epoch: 1531720757, nanos_since_epoch: 0 },
    capitalization: 36180802,
    price_btc: 7.06925e-7,
    price_usd: 0.00450503,
    price_eth: 0.0000100252,
    volume_usd: 584485
  },
  {
    id: 35684,
    time: { secs_since_epoch: 1531722561, nanos_since_epoch: 0 },
    capitalization: 36146428,
    price_btc: 7.06106e-7,
    price_usd: 0.00450075,
    price_eth: 0.00000999647,
    volume_usd: 619090
  },
  {
    id: 35816,
    time: { secs_since_epoch: 1531723161, nanos_since_epoch: 0 },
    capitalization: 36167791,
    price_btc: 7.05978e-7,
    price_usd: 0.00450341,
    price_eth: 0.00000998398,
    volume_usd: 625360
  },
  {
    id: 35772,
    time: { secs_since_epoch: 1531737559, nanos_since_epoch: 0 },
    capitalization: 36064831,
    price_btc: 6.87679e-7,
    price_usd: 0.00449059,
    price_eth: 0.00000961877,
    volume_usd: 1050270
  },
  {
    id: 35860,
    time: { secs_since_epoch: 1531771762, nanos_since_epoch: 0 },
    capitalization: 36518835,
    price_btc: 6.81067e-7,
    price_usd: 0.00454712,
    price_eth: 0.00000950714,
    volume_usd: 1423580
  },
  {
    id: 36168,
    time: { secs_since_epoch: 1531790347, nanos_since_epoch: 0 },
    capitalization: 36133739,
    price_btc: 6.67585e-7,
    price_usd: 0.00449917,
    price_eth: 0.00000936541,
    volume_usd: 1405170
  },
  {
    id: 36124,
    time: { secs_since_epoch: 1531792460, nanos_since_epoch: 0 },
    capitalization: 36097197,
    price_btc: 6.69201e-7,
    price_usd: 0.00449462,
    price_eth: 0.00000941314,
    volume_usd: 1400640
  },
  {
    id: 35948,
    time: { secs_since_epoch: 1531813446, nanos_since_epoch: 0 },
    capitalization: 36137835,
    price_btc: 6.71665e-7,
    price_usd: 0.00449968,
    price_eth: 0.00000948097,
    volume_usd: 1318870
  },
  {
    id: 35992,
    time: { secs_since_epoch: 1531829355, nanos_since_epoch: 0 },
    capitalization: 36108120,
    price_btc: 6.7101e-7,
    price_usd: 0.00449598,
    price_eth: 0.0000095653,
    volume_usd: 857328
  },
  {
    id: 36080,
    time: { secs_since_epoch: 1531839864, nanos_since_epoch: 0 },
    capitalization: 35250066,
    price_btc: 6.53411e-7,
    price_usd: 0.00438914,
    price_eth: 0.00000932438,
    volume_usd: 890341
  },
  {
    id: 36036,
    time: { secs_since_epoch: 1531848547, nanos_since_epoch: 0 },
    capitalization: 36013432,
    price_btc: 6.61273e-7,
    price_usd: 0.00448419,
    price_eth: 0.00000947619,
    volume_usd: 891002
  },
  {
    id: 36476,
    time: { secs_since_epoch: 1531878249, nanos_since_epoch: 0 },
    capitalization: 36460207,
    price_btc: 6.17426e-7,
    price_usd: 0.00453982,
    price_eth: 0.00000901562,
    volume_usd: 1070990
  },
  {
    id: 36300,
    time: { secs_since_epoch: 1531883044, nanos_since_epoch: 0 },
    capitalization: 36876063,
    price_btc: 6.20405e-7,
    price_usd: 0.0045916,
    price_eth: 0.00000903191,
    volume_usd: 1108340
  },
  {
    id: 36212,
    time: { secs_since_epoch: 1531898660, nanos_since_epoch: 0 },
    capitalization: 37424112,
    price_btc: 6.27581e-7,
    price_usd: 0.00465984,
    price_eth: 0.0000092676,
    volume_usd: 1604640
  },
  {
    id: 36256,
    time: { secs_since_epoch: 1531906463, nanos_since_epoch: 0 },
    capitalization: 37358578,
    price_btc: 6.30951e-7,
    price_usd: 0.00465168,
    price_eth: 0.00000933204,
    volume_usd: 1745600
  },
  {
    id: 36344,
    time: { secs_since_epoch: 1531920853, nanos_since_epoch: 0 },
    capitalization: 36826591,
    price_btc: 6.17249e-7,
    price_usd: 0.00458544,
    price_eth: 0.00000922428,
    volume_usd: 1654010
  },
  {
    id: 36388,
    time: { secs_since_epoch: 1531924450, nanos_since_epoch: 0 },
    capitalization: 36799044,
    price_btc: 6.1403e-7,
    price_usd: 0.00458201,
    price_eth: 0.00000923795,
    volume_usd: 1674360
  },
  {
    id: 36432,
    time: { secs_since_epoch: 1531940662, nanos_since_epoch: 0 },
    capitalization: 36382626,
    price_btc: 6.09927e-7,
    price_usd: 0.00453016,
    price_eth: 0.00000922812,
    volume_usd: 1630370
  },
  {
    id: 36740,
    time: { secs_since_epoch: 1531948162, nanos_since_epoch: 0 },
    capitalization: 36582603,
    price_btc: 6.22003e-7,
    price_usd: 0.00455506,
    price_eth: 0.00000958058,
    volume_usd: 1596610
  },
  {
    id: 36696,
    time: { secs_since_epoch: 1531957161, nanos_since_epoch: 0 },
    capitalization: 36079448,
    price_btc: 6.08694e-7,
    price_usd: 0.00449241,
    price_eth: 0.00000934273,
    volume_usd: 1578890
  },
  {
    id: 36652,
    time: { secs_since_epoch: 1531966755, nanos_since_epoch: 0 },
    capitalization: 35676362,
    price_btc: 6.08222e-7,
    price_usd: 0.00444222,
    price_eth: 0.00000937841,
    volume_usd: 1589580
  },
  {
    id: 36520,
    time: { secs_since_epoch: 1531970355, nanos_since_epoch: 0 },
    capitalization: 35282191,
    price_btc: 5.98033e-7,
    price_usd: 0.00439314,
    price_eth: 0.00000920597,
    volume_usd: 1574560
  },
  {
    id: 36564,
    time: { secs_since_epoch: 1531983556, nanos_since_epoch: 0 },
    capitalization: 35934003,
    price_btc: 6.08285e-7,
    price_usd: 0.0044743,
    price_eth: 0.0000093387,
    volume_usd: 1013040
  },
  {
    id: 36608,
    time: { secs_since_epoch: 1532023755, nanos_since_epoch: 0 },
    capitalization: 36391621,
    price_btc: 6.09e-7,
    price_usd: 0.00453128,
    price_eth: 0.00000965025,
    volume_usd: 568109
  },
  {
    id: 36784,
    time: { secs_since_epoch: 1532035759, nanos_since_epoch: 0 },
    capitalization: 35486183,
    price_btc: 5.93333e-7,
    price_usd: 0.00441854,
    price_eth: 0.00000940338,
    volume_usd: 537999
  },
  {
    id: 37004,
    time: { secs_since_epoch: 1532056156, nanos_since_epoch: 0 },
    capitalization: 35955446,
    price_btc: 6.00726e-7,
    price_usd: 0.00447697,
    price_eth: 0.00000958194,
    volume_usd: 478111
  },
  {
    id: 36916,
    time: { secs_since_epoch: 1532060958, nanos_since_epoch: 0 },
    capitalization: 36213087,
    price_btc: 6.05653e-7,
    price_usd: 0.00450905,
    price_eth: 0.00000968946,
    volume_usd: 491277
  },
  {
    id: 36828,
    time: { secs_since_epoch: 1532073259, nanos_since_epoch: 0 },
    capitalization: 35307891,
    price_btc: 5.92734e-7,
    price_usd: 0.00439634,
    price_eth: 0.00000958771,
    volume_usd: 510424
  },
  {
    id: 36872,
    time: { secs_since_epoch: 1532076857, nanos_since_epoch: 0 },
    capitalization: 35493492,
    price_btc: 5.93101e-7,
    price_usd: 0.00441945,
    price_eth: 0.00000949708,
    volume_usd: 516271
  },
  {
    id: 37048,
    time: { secs_since_epoch: 1532079557, nanos_since_epoch: 0 },
    capitalization: 35384026,
    price_btc: 5.90598e-7,
    price_usd: 0.00440582,
    price_eth: 0.00000947479,
    volume_usd: 510297
  },
  {
    id: 36960,
    time: { secs_since_epoch: 1532088554, nanos_since_epoch: 0 },
    capitalization: 35256893,
    price_btc: 5.86949e-7,
    price_usd: 0.00438999,
    price_eth: 0.00000943837,
    volume_usd: 510436
  },
  {
    id: 37092,
    time: { secs_since_epoch: 1532127249, nanos_since_epoch: 0 },
    capitalization: 32162069,
    price_btc: 5.44756e-7,
    price_usd: 0.00400464,
    price_eth: 0.00000890918,
    volume_usd: 525113
  },
  {
    id: 37224,
    time: { secs_since_epoch: 1532136856, nanos_since_epoch: 0 },
    capitalization: 31533949,
    price_btc: 5.41269e-7,
    price_usd: 0.00392643,
    price_eth: 0.00000876059,
    volume_usd: 568702
  },
  {
    id: 37180,
    time: { secs_since_epoch: 1532171058, nanos_since_epoch: 0 },
    capitalization: 33630173,
    price_btc: 5.73718e-7,
    price_usd: 0.00418744,
    price_eth: 0.00000920082,
    volume_usd: 820139
  },
  {
    id: 37312,
    time: { secs_since_epoch: 1532175855, nanos_since_epoch: 0 },
    capitalization: 33674585,
    price_btc: 5.73206e-7,
    price_usd: 0.00419297,
    price_eth: 0.00000914469,
    volume_usd: 807624
  },
  {
    id: 37136,
    time: { secs_since_epoch: 1532183961, nanos_since_epoch: 0 },
    capitalization: 33544962,
    price_btc: 5.67446e-7,
    price_usd: 0.00417683,
    price_eth: 0.00000902928,
    volume_usd: 824448
  },
  {
    id: 37268,
    time: { secs_since_epoch: 1532202864, nanos_since_epoch: 0 },
    capitalization: 33059717,
    price_btc: 5.54945e-7,
    price_usd: 0.00411641,
    price_eth: 0.00000882612,
    volume_usd: 843489
  },
  {
    id: 37620,
    time: { secs_since_epoch: 1532210653, nanos_since_epoch: 0 },
    capitalization: 33543516,
    price_btc: 5.64249e-7,
    price_usd: 0.00417665,
    price_eth: 0.00000894644,
    volume_usd: 814250
  },
  {
    id: 37488,
    time: { secs_since_epoch: 1532219060, nanos_since_epoch: 0 },
    capitalization: 33421362,
    price_btc: 5.61938e-7,
    price_usd: 0.00416144,
    price_eth: 0.00000900401,
    volume_usd: 798888
  },
  {
    id: 37356,
    time: { secs_since_epoch: 1532232557, nanos_since_epoch: 0 },
    capitalization: 33824367,
    price_btc: 5.68288e-7,
    price_usd: 0.00421162,
    price_eth: 0.00000911844,
    volume_usd: 562490
  },
  {
    id: 37444,
    time: { secs_since_epoch: 1532267052, nanos_since_epoch: 0 },
    capitalization: 33579014,
    price_btc: 5.61617e-7,
    price_usd: 0.00418107,
    price_eth: 0.00000896912,
    volume_usd: 399638
  },
  {
    id: 37532,
    time: { secs_since_epoch: 1532267356, nanos_since_epoch: 0 },
    capitalization: 33724298,
    price_btc: 5.6377e-7,
    price_usd: 0.00419916,
    price_eth: 0.00000898825,
    volume_usd: 400501
  },
  {
    id: 37576,
    time: { secs_since_epoch: 1532276960, nanos_since_epoch: 0 },
    capitalization: 34829311,
    price_btc: 5.77769e-7,
    price_usd: 0.00433675,
    price_eth: 0.00000924534,
    volume_usd: 419564
  },
  {
    id: 37400,
    time: { secs_since_epoch: 1532282959, nanos_since_epoch: 0 },
    capitalization: 34308649,
    price_btc: 5.70073e-7,
    price_usd: 0.00427192,
    price_eth: 0.00000917581,
    volume_usd: 428978
  },
  {
    id: 37752,
    time: { secs_since_epoch: 1532292559, nanos_since_epoch: 0 },
    capitalization: 33830391,
    price_btc: 5.61389e-7,
    price_usd: 0.00421237,
    price_eth: 0.00000905077,
    volume_usd: 444556
  },
  {
    id: 37884,
    time: { secs_since_epoch: 1532296460, nanos_since_epoch: 0 },
    capitalization: 33342977,
    price_btc: 5.61711e-7,
    price_usd: 0.00415168,
    price_eth: 0.00000904017,
    volume_usd: 440089
  },
  {
    id: 37796,
    time: { secs_since_epoch: 1532327659, nanos_since_epoch: 0 },
    capitalization: 34020489,
    price_btc: 5.5395e-7,
    price_usd: 0.00423604,
    price_eth: 0.00000904964,
    volume_usd: 499782
  },
  {
    id: 37708,
    time: { secs_since_epoch: 1532359461, nanos_since_epoch: 0 },
    capitalization: 33220019,
    price_btc: 5.37596e-7,
    price_usd: 0.00413637,
    price_eth: 0.00000894887,
    volume_usd: 487182
  },
  {
    id: 37664,
    time: { secs_since_epoch: 1532364253, nanos_since_epoch: 0 },
    capitalization: 33138101,
    price_btc: 5.34763e-7,
    price_usd: 0.00412617,
    price_eth: 0.00000894617,
    volume_usd: 461489
  },
  {
    id: 37840,
    time: { secs_since_epoch: 1532372651, nanos_since_epoch: 0 },
    capitalization: 33267403,
    price_btc: 5.3533e-7,
    price_usd: 0.00414227,
    price_eth: 0.00000907347,
    volume_usd: 419240
  },
  {
    id: 38060,
    time: { secs_since_epoch: 1532380162, nanos_since_epoch: 0 },
    capitalization: 32940614,
    price_btc: 5.31047e-7,
    price_usd: 0.00410158,
    price_eth: 0.00000911534,
    volume_usd: 395875
  },
  {
    id: 37972,
    time: { secs_since_epoch: 1532416161, nanos_since_epoch: 0 },
    capitalization: 32929691,
    price_btc: 5.13366e-7,
    price_usd: 0.00410022,
    price_eth: 0.00000879695,
    volume_usd: 355460
  },
  {
    id: 38148,
    time: { secs_since_epoch: 1532417365, nanos_since_epoch: 0 },
    capitalization: 33152798,
    price_btc: 5.15307e-7,
    price_usd: 0.004128,
    price_eth: 0.00000872609,
    volume_usd: 351341
  },
  {
    id: 38016,
    time: { secs_since_epoch: 1532428161, nanos_since_epoch: 0 },
    capitalization: 33520868,
    price_btc: 5.2039e-7,
    price_usd: 0.00417383,
    price_eth: 0.00000887387,
    volume_usd: 334086
  },
  {
    id: 38192,
    time: { secs_since_epoch: 1532430853, nanos_since_epoch: 0 },
    capitalization: 33168700,
    price_btc: 5.09206e-7,
    price_usd: 0.00412998,
    price_eth: 0.00000872143,
    volume_usd: 341180
  },
  {
    id: 38104,
    time: { secs_since_epoch: 1532450660, nanos_since_epoch: 0 },
    capitalization: 31502868,
    price_btc: 4.79851e-7,
    price_usd: 0.00392256,
    price_eth: 0.00000830383,
    volume_usd: 774184
  },
  {
    id: 37928,
    time: { secs_since_epoch: 1532457552, nanos_since_epoch: 0 },
    capitalization: 31419585,
    price_btc: 4.7549e-7,
    price_usd: 0.00391219,
    price_eth: 0.00000821438,
    volume_usd: 805338
  },
  {
    id: 38280,
    time: { secs_since_epoch: 1532471966, nanos_since_epoch: 0 },
    capitalization: 31144275,
    price_btc: 4.6761e-7,
    price_usd: 0.00387791,
    price_eth: 0.00000812471,
    volume_usd: 927956
  },
  {
    id: 38412,
    time: { secs_since_epoch: 1532480056, nanos_since_epoch: 0 },
    capitalization: 30840294,
    price_btc: 4.63095e-7,
    price_usd: 0.00384006,
    price_eth: 0.00000802543,
    volume_usd: 968269
  },
  {
    id: 38236,
    time: { secs_since_epoch: 1532490555, nanos_since_epoch: 0 },
    capitalization: 30537839,
    price_btc: 4.61321e-7,
    price_usd: 0.0038024,
    price_eth: 0.00000802239,
    volume_usd: 961387
  },
  {
    id: 38368,
    time: { secs_since_epoch: 1532506761, nanos_since_epoch: 0 },
    capitalization: 29858560,
    price_btc: 4.48893e-7,
    price_usd: 0.00371782,
    price_eth: 0.00000788831,
    volume_usd: 990016
  },
  {
    id: 38324,
    time: { secs_since_epoch: 1532528356, nanos_since_epoch: 0 },
    capitalization: 29181128,
    price_btc: 4.43733e-7,
    price_usd: 0.00363347,
    price_eth: 0.00000770641,
    volume_usd: 917801
  },
  {
    id: 38456,
    time: { secs_since_epoch: 1532537652, nanos_since_epoch: 0 },
    capitalization: 29837920,
    price_btc: 4.55477e-7,
    price_usd: 0.00371525,
    price_eth: 0.00000786247,
    volume_usd: 718904
  },
  {
    id: 38588,
    time: { secs_since_epoch: 1532571558, nanos_since_epoch: 0 },
    capitalization: 29518840,
    price_btc: 4.48558e-7,
    price_usd: 0.00367552,
    price_eth: 0.00000774021,
    volume_usd: 547810
  },
  {
    id: 38544,
    time: { secs_since_epoch: 1532575767, nanos_since_epoch: 0 },
    capitalization: 29931885,
    price_btc: 4.5578e-7,
    price_usd: 0.00372695,
    price_eth: 0.00000785166,
    volume_usd: 543530
  },
  {
    id: 38632,
    time: { secs_since_epoch: 1532588968, nanos_since_epoch: 0 },
    capitalization: 29497798,
    price_btc: 4.4291e-7,
    price_usd: 0.0036729,
    price_eth: 0.00000758968,
    volume_usd: 533236
  },
  {
    id: 38500,
    time: { secs_since_epoch: 1532597669, nanos_since_epoch: 0 },
    capitalization: 29818565,
    price_btc: 4.48417e-7,
    price_usd: 0.00371284,
    price_eth: 0.00000770054,
    volume_usd: 440056
  },
  {
    id: 38720,
    time: { secs_since_epoch: 1532599168, nanos_since_epoch: 0 },
    capitalization: 29339825,
    price_btc: 4.42214e-7,
    price_usd: 0.00365323,
    price_eth: 0.00000758352,
    volume_usd: 432301
  },
  {
    id: 38764,
    time: { secs_since_epoch: 1532605167, nanos_since_epoch: 0 },
    capitalization: 29428088,
    price_btc: 4.44311e-7,
    price_usd: 0.00366422,
    price_eth: 0.0000076427,
    volume_usd: 396464
  },
  {
    id: 38676,
    time: { secs_since_epoch: 1532621666, nanos_since_epoch: 0 },
    capitalization: 29209421,
    price_btc: 4.41111e-7,
    price_usd: 0.00361802,
    price_eth: 0.00000760381,
    volume_usd: 356690
  },
  {
    id: 38852,
    time: { secs_since_epoch: 1532652570, nanos_since_epoch: 0 },
    capitalization: 25480195,
    price_btc: 3.988e-7,
    price_usd: 0.0031561,
    price_eth: 0.00000680026,
    volume_usd: 657234
  },
  {
    id: 38984,
    time: { secs_since_epoch: 1532667271, nanos_since_epoch: 0 },
    capitalization: 26236907,
    price_btc: 4.09615e-7,
    price_usd: 0.00324983,
    price_eth: 0.00000698512,
    volume_usd: 926623
  },
  {
    id: 39028,
    time: { secs_since_epoch: 1532670869, nanos_since_epoch: 0 },
    capitalization: 25794570,
    price_btc: 4.02873e-7,
    price_usd: 0.00319504,
    price_eth: 0.00000687862,
    volume_usd: 921473
  },
  {
    id: 38808,
    time: { secs_since_epoch: 1532671166, nanos_since_epoch: 0 },
    capitalization: 25750489,
    price_btc: 4.02537e-7,
    price_usd: 0.00318958,
    price_eth: 0.00000686222,
    volume_usd: 920100
  },
  {
    id: 38940,
    time: { secs_since_epoch: 1532672967, nanos_since_epoch: 0 },
    capitalization: 25705521,
    price_btc: 4.02562e-7,
    price_usd: 0.00318401,
    price_eth: 0.00000686099,
    volume_usd: 911967
  },
  {
    id: 39072,
    time: { secs_since_epoch: 1532688267, nanos_since_epoch: 0 },
    capitalization: 26106280,
    price_btc: 4.06517e-7,
    price_usd: 0.00323365,
    price_eth: 0.0000069581,
    volume_usd: 1019770
  },
  {
    id: 38896,
    time: { secs_since_epoch: 1532695168, nanos_since_epoch: 0 },
    capitalization: 26202433,
    price_btc: 4.11767e-7,
    price_usd: 0.00324556,
    price_eth: 0.0000070348,
    volume_usd: 1056020
  },
  {
    id: 39160,
    time: { secs_since_epoch: 1532732071, nanos_since_epoch: 0 },
    capitalization: 26726230,
    price_btc: 4.02132e-7,
    price_usd: 0.00331044,
    price_eth: 0.00000701722,
    volume_usd: 1083150
  },
  {
    id: 39204,
    time: { secs_since_epoch: 1532753364, nanos_since_epoch: 0 },
    capitalization: 27039233,
    price_btc: 4.08564e-7,
    price_usd: 0.00334921,
    price_eth: 0.00000713531,
    volume_usd: 545548
  },
  {
    id: 39248,
    time: { secs_since_epoch: 1532760269, nanos_since_epoch: 0 },
    capitalization: 26289545,
    price_btc: 3.982e-7,
    price_usd: 0.00325635,
    price_eth: 0.00000694482,
    volume_usd: 566837
  },
  {
    id: 39336,
    time: { secs_since_epoch: 1532761766, nanos_since_epoch: 0 },
    capitalization: 26624829,
    price_btc: 4.02525e-7,
    price_usd: 0.00329788,
    price_eth: 0.00000702657,
    volume_usd: 564306
  },
  {
    id: 39292,
    time: { secs_since_epoch: 1532774968, nanos_since_epoch: 0 },
    capitalization: 26462584,
    price_btc: 3.9514e-7,
    price_usd: 0.00323768,
    price_eth: 0.00000688777,
    volume_usd: 558158
  },
  {
    id: 39116,
    time: { secs_since_epoch: 1532797468, nanos_since_epoch: 0 },
    capitalization: 26291189,
    price_btc: 3.93397e-7,
    price_usd: 0.00321671,
    price_eth: 0.00000689659,
    volume_usd: 530321
  },
  {
    id: 39644,
    time: { secs_since_epoch: 1532832570, nanos_since_epoch: 0 },
    capitalization: 26392457,
    price_btc: 3.92252e-7,
    price_usd: 0.0032291,
    price_eth: 0.00000689333,
    volume_usd: 532518
  },
  {
    id: 39512,
    time: { secs_since_epoch: 1532837972, nanos_since_epoch: 0 },
    capitalization: 27036269,
    price_btc: 4.02582e-7,
    price_usd: 0.00330787,
    price_eth: 0.00000708781,
    volume_usd: 535571
  },
  {
    id: 39424,
    time: { secs_since_epoch: 1532843367, nanos_since_epoch: 0 },
    capitalization: 26580034,
    price_btc: 3.95671e-7,
    price_usd: 0.00325205,
    price_eth: 0.00000696797,
    volume_usd: 499994
  },
  {
    id: 39600,
    time: { secs_since_epoch: 1532846069, nanos_since_epoch: 0 },
    capitalization: 26559111,
    price_btc: 3.96069e-7,
    price_usd: 0.00324949,
    price_eth: 0.00000697473,
    volume_usd: 466827
  },
  {
    id: 39380,
    time: { secs_since_epoch: 1532852067, nanos_since_epoch: 0 },
    capitalization: 26512931,
    price_btc: 3.97215e-7,
    price_usd: 0.00324384,
    price_eth: 0.00000697345,
    volume_usd: 455289
  },
  {
    id: 39468,
    time: { secs_since_epoch: 1532867669, nanos_since_epoch: 0 },
    capitalization: 26501979,
    price_btc: 3.96255e-7,
    price_usd: 0.0032425,
    price_eth: 0.00000697601,
    volume_usd: 287931
  },
  {
    id: 39556,
    time: { secs_since_epoch: 1532870971, nanos_since_epoch: 0 },
    capitalization: 26516609,
    price_btc: 3.96128e-7,
    price_usd: 0.00324429,
    price_eth: 0.00000697808,
    volume_usd: 278928
  },
  {
    id: 39820,
    time: { secs_since_epoch: 1532906375, nanos_since_epoch: 0 },
    capitalization: 26206269,
    price_btc: 3.91494e-7,
    price_usd: 0.00320632,
    price_eth: 0.00000689734,
    volume_usd: 250565
  },
  {
    id: 39864,
    time: { secs_since_epoch: 1532914773, nanos_since_epoch: 0 },
    capitalization: 26365812,
    price_btc: 3.91608e-7,
    price_usd: 0.00322584,
    price_eth: 0.00000691296,
    volume_usd: 239711
  },
  {
    id: 39688,
    time: { secs_since_epoch: 1532925568, nanos_since_epoch: 0 },
    capitalization: 25547254,
    price_btc: 3.82686e-7,
    price_usd: 0.00312569,
    price_eth: 0.00000673582,
    volume_usd: 247788
  },
  {
    id: 39776,
    time: { secs_since_epoch: 1532931254, nanos_since_epoch: 0 },
    capitalization: 25222446,
    price_btc: 3.77215e-7,
    price_usd: 0.00308595,
    price_eth: 0.00000665617,
    volume_usd: 255722
  },
  {
    id: 39908,
    time: { secs_since_epoch: 1532949860, nanos_since_epoch: 0 },
    capitalization: 24737197,
    price_btc: 3.72146e-7,
    price_usd: 0.00302658,
    price_eth: 0.00000656912,
    volume_usd: 348403
  },
  {
    id: 39732,
    time: { secs_since_epoch: 1532965755, nanos_since_epoch: 0 },
    capitalization: 24355911,
    price_btc: 3.65772e-7,
    price_usd: 0.00297993,
    price_eth: 0.00000647992,
    volume_usd: 383503
  },
  {
    id: 40216,
    time: { secs_since_epoch: 1533004457, nanos_since_epoch: 0 },
    capitalization: 24628410,
    price_btc: 3.70023e-7,
    price_usd: 0.00301327,
    price_eth: 0.00000662771,
    volume_usd: 1035930
  },
  {
    id: 40040,
    time: { secs_since_epoch: 1533011660, nanos_since_epoch: 0 },
    capitalization: 24770053,
    price_btc: 3.74582e-7,
    price_usd: 0.0030306,
    price_eth: 0.00000671008,
    volume_usd: 1144210
  },
  {
    id: 40172,
    time: { secs_since_epoch: 1533025752, nanos_since_epoch: 0 },
    capitalization: 24622280,
    price_btc: 3.7215e-7,
    price_usd: 0.00301252,
    price_eth: 0.00000669977,
    volume_usd: 1133920
  },
  {
    id: 39996,
    time: { secs_since_epoch: 1533037755, nanos_since_epoch: 0 },
    capitalization: 24696330,
    price_btc: 3.77367e-7,
    price_usd: 0.00302158,
    price_eth: 0.00000685622,
    volume_usd: 1149350
  },
  {
    id: 40084,
    time: { secs_since_epoch: 1533055458, nanos_since_epoch: 0 },
    capitalization: 24057912,
    price_btc: 3.7805e-7,
    price_usd: 0.00294347,
    price_eth: 0.00000679508,
    volume_usd: 1144230
  },
  {
    id: 39952,
    time: { secs_since_epoch: 1533060554, nanos_since_epoch: 0 },
    capitalization: 24595553,
    price_btc: 3.89889e-7,
    price_usd: 0.00300925,
    price_eth: 0.0000069256,
    volume_usd: 1092940
  },
  {
    id: 40128,
    time: { secs_since_epoch: 1533063557, nanos_since_epoch: 0 },
    capitalization: 24562778,
    price_btc: 3.87633e-7,
    price_usd: 0.00300524,
    price_eth: 0.00000691679,
    volume_usd: 1087370
  },
  {
    id: 40392,
    time: { secs_since_epoch: 1533071054, nanos_since_epoch: 0 },
    capitalization: 24577572,
    price_btc: 3.90082e-7,
    price_usd: 0.00300705,
    price_eth: 0.00000693492,
    volume_usd: 1080870
  },
  {
    id: 40304,
    time: { secs_since_epoch: 1533083947, nanos_since_epoch: 0 },
    capitalization: 24484968,
    price_btc: 3.86659e-7,
    price_usd: 0.00299572,
    price_eth: 0.0000068851,
    volume_usd: 629710
  },
  {
    id: 40260,
    time: { secs_since_epoch: 1533085456, nanos_since_epoch: 0 },
    capitalization: 24019007,
    price_btc: 3.82653e-7,
    price_usd: 0.00293871,
    price_eth: 0.00000678776,
    volume_usd: 590291
  },
  {
    id: 40436,
    time: { secs_since_epoch: 1533109454, nanos_since_epoch: 0 },
    capitalization: 23396691,
    price_btc: 3.792e-7,
    price_usd: 0.00286257,
    price_eth: 0.00000678358,
    volume_usd: 372211
  },
  {
    id: 40480,
    time: { secs_since_epoch: 1533139449, nanos_since_epoch: 0 },
    capitalization: 23852435,
    price_btc: 3.83934e-7,
    price_usd: 0.00291833,
    price_eth: 0.00000689503,
    volume_usd: 308315
  },
  {
    id: 40348,
    time: { secs_since_epoch: 1533143057, nanos_since_epoch: 0 },
    capitalization: 23749778,
    price_btc: 3.83871e-7,
    price_usd: 0.00290577,
    price_eth: 0.00000689659,
    volume_usd: 257200
  },
  {
    id: 40744,
    time: { secs_since_epoch: 1533165259, nanos_since_epoch: 0 },
    capitalization: 23510709,
    price_btc: 3.79333e-7,
    price_usd: 0.00287652,
    price_eth: 0.00000684151,
    volume_usd: 248234
  },
  {
    id: 40568,
    time: { secs_since_epoch: 1533189565, nanos_since_epoch: 0 },
    capitalization: 23808299,
    price_btc: 3.8068e-7,
    price_usd: 0.00291293,
    price_eth: 0.00000691023,
    volume_usd: 163819
  },
  {
    id: 40612,
    time: { secs_since_epoch: 1533213854, nanos_since_epoch: 0 },
    capitalization: 23275562,
    price_btc: 3.75848e-7,
    price_usd: 0.00284775,
    price_eth: 0.00000685509,
    volume_usd: 167625
  },
  {
    id: 40656,
    time: { secs_since_epoch: 1533221060, nanos_since_epoch: 0 },
    capitalization: 23195709,
    price_btc: 3.76185e-7,
    price_usd: 0.00283798,
    price_eth: 0.00000687389,
    volume_usd: 176762
  },
  {
    id: 40524,
    time: { secs_since_epoch: 1533230657, nanos_since_epoch: 0 },
    capitalization: 22617856,
    price_btc: 3.65331e-7,
    price_usd: 0.00276728,
    price_eth: 0.00000667523,
    volume_usd: 206307
  },
  {
    id: 40788,
    time: { secs_since_epoch: 1533233353, nanos_since_epoch: 0 },
    capitalization: 22944461,
    price_btc: 3.7257e-7,
    price_usd: 0.00280724,
    price_eth: 0.00000682934,
    volume_usd: 205603
  },
  {
    id: 40700,
    time: { secs_since_epoch: 1533239650, nanos_since_epoch: 0 },
    capitalization: 23103024,
    price_btc: 3.74682e-7,
    price_usd: 0.00282664,
    price_eth: 0.00000687243,
    volume_usd: 222709
  },
  {
    id: 41052,
    time: { secs_since_epoch: 1533241758, nanos_since_epoch: 0 },
    capitalization: 23043031,
    price_btc: 3.73179e-7,
    price_usd: 0.0028193,
    price_eth: 0.00000685119,
    volume_usd: 231056
  },
  {
    id: 41008,
    time: { secs_since_epoch: 1533244152, nanos_since_epoch: 0 },
    capitalization: 23161136,
    price_btc: 3.74881e-7,
    price_usd: 0.00283375,
    price_eth: 0.00000688407,
    volume_usd: 233910
  },
  {
    id: 40964,
    time: { secs_since_epoch: 1533281660, nanos_since_epoch: 0 },
    capitalization: 22575273,
    price_btc: 3.77012e-7,
    price_usd: 0.00276207,
    price_eth: 0.00000679583,
    volume_usd: 427267
  },
  {
    id: 40920,
    time: { secs_since_epoch: 1533318859, nanos_since_epoch: 0 },
    capitalization: 23046272,
    price_btc: 3.74739e-7,
    price_usd: 0.00282289,
    price_eth: 0.00000674212,
    volume_usd: 494635
  },
  {
    id: 40876,
    time: { secs_since_epoch: 1533320058, nanos_since_epoch: 0 },
    capitalization: 23032474,
    price_btc: 3.74794e-7,
    price_usd: 0.0028212,
    price_eth: 0.00000672783,
    volume_usd: 493172
  },
  {
    id: 40832,
    time: { secs_since_epoch: 1533326355, nanos_since_epoch: 0 },
    capitalization: 22955487,
    price_btc: 3.80218e-7,
    price_usd: 0.00281177,
    price_eth: 0.00000678248,
    volume_usd: 472038
  },
  {
    id: 41184,
    time: { secs_since_epoch: 1533328160, nanos_since_epoch: 0 },
    capitalization: 22945854,
    price_btc: 3.79748e-7,
    price_usd: 0.00281059,
    price_eth: 0.00000672385,
    volume_usd: 464537
  },
  {
    id: 41272,
    time: { secs_since_epoch: 1533352755, nanos_since_epoch: 0 },
    capitalization: 22904707,
    price_btc: 3.7544e-7,
    price_usd: 0.00280555,
    price_eth: 0.00000668127,
    volume_usd: 338333
  },
  {
    id: 41228,
    time: { secs_since_epoch: 1533356660, nanos_since_epoch: 0 },
    capitalization: 22905033,
    price_btc: 3.76378e-7,
    price_usd: 0.00280559,
    price_eth: 0.00000670189,
    volume_usd: 306188
  },
  {
    id: 41360,
    time: { secs_since_epoch: 1533365354, nanos_since_epoch: 0 },
    capitalization: 22871071,
    price_btc: 3.77408e-7,
    price_usd: 0.00280143,
    price_eth: 0.00000671664,
    volume_usd: 274981
  },
  {
    id: 41316,
    time: { secs_since_epoch: 1533379451, nanos_since_epoch: 0 },
    capitalization: 22443355,
    price_btc: 3.71191e-7,
    price_usd: 0.00274904,
    price_eth: 0.00000663222,
    volume_usd: 156450
  },
  {
    id: 41096,
    time: { secs_since_epoch: 1533379755, nanos_since_epoch: 0 },
    capitalization: 22391676,
    price_btc: 3.70152e-7,
    price_usd: 0.00274271,
    price_eth: 0.00000660394,
    volume_usd: 156702
  },
  {
    id: 41140,
    time: { secs_since_epoch: 1533398957, nanos_since_epoch: 0 },
    capitalization: 21789413,
    price_btc: 3.81701e-7,
    price_usd: 0.00266894,
    price_eth: 0.00000659289,
    volume_usd: 159678
  },
  {
    id: 41580,
    time: { secs_since_epoch: 1533419356, nanos_since_epoch: 0 },
    capitalization: 21696261,
    price_btc: 3.77847e-7,
    price_usd: 0.00265753,
    price_eth: 0.00000653075,
    volume_usd: 152424
  },
  {
    id: 41492,
    time: { secs_since_epoch: 1533422653, nanos_since_epoch: 0 },
    capitalization: 21725162,
    price_btc: 3.7908e-7,
    price_usd: 0.00266107,
    price_eth: 0.00000655054,
    volume_usd: 151406
  },
  {
    id: 41448,
    time: { secs_since_epoch: 1533470059, nanos_since_epoch: 0 },
    capitalization: 22879316,
    price_btc: 3.98712e-7,
    price_usd: 0.00280244,
    price_eth: 0.00000687638,
    volume_usd: 164156
  },
  {
    id: 41536,
    time: { secs_since_epoch: 1533471858, nanos_since_epoch: 0 },
    capitalization: 22574225,
    price_btc: 3.9214e-7,
    price_usd: 0.00276507,
    price_eth: 0.00000676926,
    volume_usd: 158142
  },
  {
    id: 41404,
    time: { secs_since_epoch: 1533482653, nanos_since_epoch: 0 },
    capitalization: 22317220,
    price_btc: 3.90187e-7,
    price_usd: 0.00273359,
    price_eth: 0.00000670112,
    volume_usd: 139875
  },
  {
    id: 41624,
    time: { secs_since_epoch: 1533489858, nanos_since_epoch: 0 },
    capitalization: 22487278,
    price_btc: 3.92645e-7,
    price_usd: 0.00275442,
    price_eth: 0.00000676633,
    volume_usd: 137998
  },
  {
    id: 41756,
    time: { secs_since_epoch: 1533508754, nanos_since_epoch: 0 },
    capitalization: 22474868,
    price_btc: 3.90879e-7,
    price_usd: 0.0027529,
    price_eth: 0.00000668144,
    volume_usd: 144186
  },
  {
    id: 41712,
    time: { secs_since_epoch: 1533509658, nanos_since_epoch: 0 },
    capitalization: 22480420,
    price_btc: 3.90992e-7,
    price_usd: 0.00275358,
    price_eth: 0.00000668748,
    volume_usd: 141366
  },
  {
    id: 41800,
    time: { secs_since_epoch: 1533509958, nanos_since_epoch: 0 },
    capitalization: 22483522,
    price_btc: 3.91178e-7,
    price_usd: 0.00275396,
    price_eth: 0.00000668537,
    volume_usd: 140359
  },
  {
    id: 41844,
    time: { secs_since_epoch: 1533524355, nanos_since_epoch: 0 },
    capitalization: 22256153,
    price_btc: 3.80901e-7,
    price_usd: 0.00272611,
    price_eth: 0.00000658623,
    volume_usd: 170133
  },
  {
    id: 41888,
    time: { secs_since_epoch: 1533548356, nanos_since_epoch: 0 },
    capitalization: 22146673,
    price_btc: 3.87358e-7,
    price_usd: 0.0027127,
    price_eth: 0.00000663375,
    volume_usd: 170457
  },
  {
    id: 41932,
    time: { secs_since_epoch: 1533550156, nanos_since_epoch: 0 },
    capitalization: 22350530,
    price_btc: 3.9158e-7,
    price_usd: 0.00273767,
    price_eth: 0.00000669669,
    volume_usd: 177451
  },
  {
    id: 41668,
    time: { secs_since_epoch: 1533580158, nanos_since_epoch: 0 },
    capitalization: 21891382,
    price_btc: 3.87443e-7,
    price_usd: 0.00268143,
    price_eth: 0.00000661558,
    volume_usd: 163952
  },
  {
    id: 42020,
    time: { secs_since_epoch: 1533585854, nanos_since_epoch: 0 },
    capitalization: 21939224,
    price_btc: 3.85829e-7,
    price_usd: 0.00268729,
    price_eth: 0.00000661455,
    volume_usd: 173311
  },
  {
    id: 42108,
    time: { secs_since_epoch: 1533591856, nanos_since_epoch: 0 },
    capitalization: 21719284,
    price_btc: 3.85069e-7,
    price_usd: 0.00266035,
    price_eth: 0.00000658388,
    volume_usd: 181537
  },
  {
    id: 42196,
    time: { secs_since_epoch: 1533638660, nanos_since_epoch: 0 },
    capitalization: 21880769,
    price_btc: 3.79823e-7,
    price_usd: 0.00268013,
    price_eth: 0.0000065328,
    volume_usd: 182048
  },
  {
    id: 42152,
    time: { secs_since_epoch: 1533656060, nanos_since_epoch: 0 },
    capitalization: 21939795,
    price_btc: 3.77297e-7,
    price_usd: 0.00268736,
    price_eth: 0.00000654981,
    volume_usd: 216357
  },
  {
    id: 42064,
    time: { secs_since_epoch: 1533656958, nanos_since_epoch: 0 },
    capitalization: 22101362,
    price_btc: 3.8039e-7,
    price_usd: 0.00270715,
    price_eth: 0.00000659591,
    volume_usd: 215160
  },
  {
    id: 41976,
    time: { secs_since_epoch: 1533664453, nanos_since_epoch: 0 },
    capitalization: 22195657,
    price_btc: 3.8256e-7,
    price_usd: 0.0027187,
    price_eth: 0.00000663978,
    volume_usd: 232744
  },
  {
    id: 42460,
    time: { secs_since_epoch: 1533703157, nanos_since_epoch: 0 },
    capitalization: 20583988,
    price_btc: 3.86719e-7,
    price_usd: 0.00252129,
    price_eth: 0.00000671903,
    volume_usd: 312143
  },
  {
    id: 42372,
    time: { secs_since_epoch: 1533712453, nanos_since_epoch: 0 },
    capitalization: 20642035,
    price_btc: 3.86123e-7,
    price_usd: 0.0025284,
    price_eth: 0.00000673917,
    volume_usd: 353659
  },
  {
    id: 42416,
    time: { secs_since_epoch: 1533725054, nanos_since_epoch: 0 },
    capitalization: 20403072,
    price_btc: 3.85239e-7,
    price_usd: 0.00249913,
    price_eth: 0.00000676524,
    volume_usd: 401995
  },
  {
    id: 42328,
    time: { secs_since_epoch: 1533730765, nanos_since_epoch: 0 },
    capitalization: 20623992,
    price_btc: 3.89141e-7,
    price_usd: 0.00252619,
    price_eth: 0.00000683472,
    volume_usd: 412229
  },
  {
    id: 42504,
    time: { secs_since_epoch: 1533737058, nanos_since_epoch: 0 },
    capitalization: 20401358,
    price_btc: 3.86045e-7,
    price_usd: 0.00249892,
    price_eth: 0.00000679952,
    volume_usd: 415987
  },
  {
    id: 42240,
    time: { secs_since_epoch: 1533749348, nanos_since_epoch: 0 },
    capitalization: 20010544,
    price_btc: 3.91936e-7,
    price_usd: 0.00245105,
    price_eth: 0.00000685675,
    volume_usd: 478411
  },
  {
    id: 42284,
    time: { secs_since_epoch: 1533750262, nanos_since_epoch: 0 },
    capitalization: 19985970,
    price_btc: 3.90394e-7,
    price_usd: 0.00244804,
    price_eth: 0.00000682066,
    volume_usd: 492091
  },
  {
    id: 42636,
    time: { secs_since_epoch: 1533772163, nanos_since_epoch: 0 },
    capitalization: 19830199,
    price_btc: 3.86652e-7,
    price_usd: 0.00242896,
    price_eth: 0.000006799,
    volume_usd: 562610
  },
  {
    id: 42548,
    time: { secs_since_epoch: 1533776360, nanos_since_epoch: 0 },
    capitalization: 19724883,
    price_btc: 3.83974e-7,
    price_usd: 0.00241606,
    price_eth: 0.00000673411,
    volume_usd: 566076
  },
  {
    id: 42812,
    time: { secs_since_epoch: 1533779962, nanos_since_epoch: 0 },
    capitalization: 19911432,
    price_btc: 3.85959e-7,
    price_usd: 0.00243891,
    price_eth: 0.00000677903,
    volume_usd: 572955
  },
  {
    id: 42680,
    time: { secs_since_epoch: 1533812949, nanos_since_epoch: 0 },
    capitalization: 19827015,
    price_btc: 3.82362e-7,
    price_usd: 0.00242857,
    price_eth: 0.00000670331,
    volume_usd: 559468
  },
  {
    id: 42592,
    time: { secs_since_epoch: 1533821959, nanos_since_epoch: 0 },
    capitalization: 19338641,
    price_btc: 3.80289e-7,
    price_usd: 0.00236875,
    price_eth: 0.00000669292,
    volume_usd: 549947
  },
  {
    id: 42724,
    time: { secs_since_epoch: 1533831855, nanos_since_epoch: 0 },
    capitalization: 19835424,
    price_btc: 3.75276e-7,
    price_usd: 0.0024296,
    price_eth: 0.00000664262,
    volume_usd: 561103
  },
  {
    id: 42768,
    time: { secs_since_epoch: 1533842061, nanos_since_epoch: 0 },
    capitalization: 19764070,
    price_btc: 3.72218e-7,
    price_usd: 0.00242086,
    price_eth: 0.00000663719,
    volume_usd: 492221
  },
  {
    id: 43076,
    time: { secs_since_epoch: 1533857653, nanos_since_epoch: 0 },
    capitalization: 20052915,
    price_btc: 3.7485e-7,
    price_usd: 0.00245624,
    price_eth: 0.00000667148,
    volume_usd: 447058
  },
  {
    id: 42856,
    time: { secs_since_epoch: 1533873559, nanos_since_epoch: 0 },
    capitalization: 19675164,
    price_btc: 3.71003e-7,
    price_usd: 0.00240997,
    price_eth: 0.00000664572,
    volume_usd: 430145
  },
  {
    id: 42944,
    time: { secs_since_epoch: 1533874449, nanos_since_epoch: 0 },
    capitalization: 19735251,
    price_btc: 3.74173e-7,
    price_usd: 0.00241733,
    price_eth: 0.00000667709,
    volume_usd: 432620
  },
  {
    id: 42900,
    time: { secs_since_epoch: 1533878651, nanos_since_epoch: 0 },
    capitalization: 19813381,
    price_btc: 3.76413e-7,
    price_usd: 0.0024269,
    price_eth: 0.00000669693,
    volume_usd: 436021
  },
  {
    id: 43032,
    time: { secs_since_epoch: 1533879269, nanos_since_epoch: 0 },
    capitalization: 19631976,
    price_btc: 3.72967e-7,
    price_usd: 0.00240468,
    price_eth: 0.00000664874,
    volume_usd: 434766
  },
  {
    id: 42988,
    time: { secs_since_epoch: 1533886763, nanos_since_epoch: 0 },
    capitalization: 20027035,
    price_btc: 3.74157e-7,
    price_usd: 0.00245307,
    price_eth: 0.00000671077,
    volume_usd: 421759
  },
  {
    id: 43252,
    time: { secs_since_epoch: 1533932059, nanos_since_epoch: 0 },
    capitalization: 19772479,
    price_btc: 3.78157e-7,
    price_usd: 0.00242189,
    price_eth: 0.00000678695,
    volume_usd: 405692
  },
  {
    id: 43164,
    time: { secs_since_epoch: 1533947659, nanos_since_epoch: 0 },
    capitalization: 18078925,
    price_btc: 3.60707e-7,
    price_usd: 0.00221445,
    price_eth: 0.00000665281,
    volume_usd: 481773
  },
  {
    id: 43208,
    time: { secs_since_epoch: 1533971356, nanos_since_epoch: 0 },
    capitalization: 17403511,
    price_btc: 3.49839e-7,
    price_usd: 0.00213172,
    price_eth: 0.00000672938,
    volume_usd: 514627
  },
  {
    id: 43296,
    time: { secs_since_epoch: 1533979164, nanos_since_epoch: 0 },
    capitalization: 17279254,
    price_btc: 3.45495e-7,
    price_usd: 0.0021165,
    price_eth: 0.00000661042,
    volume_usd: 537684
  },
  {
    id: 43120,
    time: { secs_since_epoch: 1533987556, nanos_since_epoch: 0 },
    capitalization: 17566466,
    price_btc: 3.51271e-7,
    price_usd: 0.00215168,
    price_eth: 0.00000675658,
    volume_usd: 555623
  },
  {
    id: 43340,
    time: { secs_since_epoch: 1533990863, nanos_since_epoch: 0 },
    capitalization: 17143159,
    price_btc: 3.4455e-7,
    price_usd: 0.00209983,
    price_eth: 0.00000673045,
    volume_usd: 546076
  },
  {
    id: 43384,
    time: { secs_since_epoch: 1534014259, nanos_since_epoch: 0 },
    capitalization: 17721583,
    price_btc: 3.39169e-7,
    price_usd: 0.00217068,
    price_eth: 0.00000668073,
    volume_usd: 618856
  },
  {
    id: 43516,
    time: { secs_since_epoch: 1534020257, nanos_since_epoch: 0 },
    capitalization: 17448169,
    price_btc: 3.34545e-7,
    price_usd: 0.00213719,
    price_eth: 0.00000658384,
    volume_usd: 614870
  },
  {
    id: 43604,
    time: { secs_since_epoch: 1534035258, nanos_since_epoch: 0 },
    capitalization: 17339260,
    price_btc: 3.37566e-7,
    price_usd: 0.00212385,
    price_eth: 0.00000659514,
    volume_usd: 521884
  },
  {
    id: 43428,
    time: { secs_since_epoch: 1534049665, nanos_since_epoch: 0 },
    capitalization: 17491357,
    price_btc: 3.4151e-7,
    price_usd: 0.00214248,
    price_eth: 0.00000661876,
    volume_usd: 476816
  },
  {
    id: 43560,
    time: { secs_since_epoch: 1534064961, nanos_since_epoch: 0 },
    capitalization: 17495275,
    price_btc: 3.39882e-7,
    price_usd: 0.00214296,
    price_eth: 0.00000659844,
    volume_usd: 457753
  },
  {
    id: 43472,
    time: { secs_since_epoch: 1534069464, nanos_since_epoch: 0 },
    capitalization: 17530299,
    price_btc: 3.38824e-7,
    price_usd: 0.00214725,
    price_eth: 0.00000664074,
    volume_usd: 456639
  },
  {
    id: 43648,
    time: { secs_since_epoch: 1534100059, nanos_since_epoch: 0 },
    capitalization: 17121279,
    price_btc: 3.32688e-7,
    price_usd: 0.00209715,
    price_eth: 0.00000651473,
    volume_usd: 423127
  },
  {
    id: 43956,
    time: { secs_since_epoch: 1534104863, nanos_since_epoch: 0 },
    capitalization: 17326606,
    price_btc: 3.3525e-7,
    price_usd: 0.0021223,
    price_eth: 0.00000659679,
    volume_usd: 420191
  },
  {
    id: 43868,
    time: { secs_since_epoch: 1534118666, nanos_since_epoch: 0 },
    capitalization: 17151976,
    price_btc: 3.32243e-7,
    price_usd: 0.00210091,
    price_eth: 0.00000656648,
    volume_usd: 403603
  },
  {
    id: 43780,
    time: { secs_since_epoch: 1534124360, nanos_since_epoch: 0 },
    capitalization: 17237617,
    price_btc: 3.33433e-7,
    price_usd: 0.0021114,
    price_eth: 0.00000658221,
    volume_usd: 410414
  },
  {
    id: 43736,
    time: { secs_since_epoch: 1534131264, nanos_since_epoch: 0 },
    capitalization: 16948283,
    price_btc: 3.26655e-7,
    price_usd: 0.00207596,
    price_eth: 0.00000646462,
    volume_usd: 396514
  },
  {
    id: 43824,
    time: { secs_since_epoch: 1534154671, nanos_since_epoch: 0 },
    capitalization: 18128481,
    price_btc: 3.43497e-7,
    price_usd: 0.00222052,
    price_eth: 0.00000689748,
    volume_usd: 534625
  },
  {
    id: 43692,
    time: { secs_since_epoch: 1534171768, nanos_since_epoch: 0 },
    capitalization: 18013939,
    price_btc: 3.46074e-7,
    price_usd: 0.00220649,
    price_eth: 0.00000693555,
    volume_usd: 507159
  },
  {
    id: 43912,
    time: { secs_since_epoch: 1534182261, nanos_since_epoch: 0 },
    capitalization: 16648253,
    price_btc: 3.29852e-7,
    price_usd: 0.00203921,
    price_eth: 0.00000704205,
    volume_usd: 491426
  },
  {
    id: 44044,
    time: { secs_since_epoch: 1534203565, nanos_since_epoch: 0 },
    capitalization: 15844500,
    price_btc: 3.08382e-7,
    price_usd: 0.00194076,
    price_eth: 0.00000676111,
    volume_usd: 518646
  },
  {
    id: 44220,
    time: { secs_since_epoch: 1534226069, nanos_since_epoch: 0 },
    capitalization: 14669936,
    price_btc: 2.99294e-7,
    price_usd: 0.00179689,
    price_eth: 0.00000666616,
    volume_usd: 585039
  },
  {
    id: 44132,
    time: { secs_since_epoch: 1534238063, nanos_since_epoch: 0 },
    capitalization: 14947841,
    price_btc: 3.03639e-7,
    price_usd: 0.00183093,
    price_eth: 0.0000069045,
    volume_usd: 456130
  },
  {
    id: 44176,
    time: { secs_since_epoch: 1534245868, nanos_since_epoch: 0 },
    capitalization: 14521023,
    price_btc: 2.96026e-7,
    price_usd: 0.00177865,
    price_eth: 0.0000067876,
    volume_usd: 460784
  },
  {
    id: 44088,
    time: { secs_since_epoch: 1534259367, nanos_since_epoch: 0 },
    capitalization: 14995845,
    price_btc: 3.03546e-7,
    price_usd: 0.00183681,
    price_eth: 0.00000716464,
    volume_usd: 441546
  },
  {
    id: 44000,
    time: { secs_since_epoch: 1534270468, nanos_since_epoch: 0 },
    capitalization: 14405665,
    price_btc: 2.92335e-7,
    price_usd: 0.00176452,
    price_eth: 0.00000684731,
    volume_usd: 409479
  },
  {
    id: 44440,
    time: { secs_since_epoch: 1534283965, nanos_since_epoch: 0 },
    capitalization: 14763822,
    price_btc: 2.95143e-7,
    price_usd: 0.00180839,
    price_eth: 0.00000683615,
    volume_usd: 410865
  },
  {
    id: 44396,
    time: { secs_since_epoch: 1534322070, nanos_since_epoch: 0 },
    capitalization: 15735510,
    price_btc: 2.98111e-7,
    price_usd: 0.00192741,
    price_eth: 0.00000668168,
    volume_usd: 445149
  },
  {
    id: 44352,
    time: { secs_since_epoch: 1534326269, nanos_since_epoch: 0 },
    capitalization: 15547083,
    price_btc: 2.99544e-7,
    price_usd: 0.00190433,
    price_eth: 0.00000670918,
    volume_usd: 459596
  },
  {
    id: 44308,
    time: { secs_since_epoch: 1534330765, nanos_since_epoch: 0 },
    capitalization: 15769881,
    price_btc: 3.05287e-7,
    price_usd: 0.00193162,
    price_eth: 0.00000686187,
    volume_usd: 479709
  },
  {
    id: 44264,
    time: { secs_since_epoch: 1534336769, nanos_since_epoch: 0 },
    capitalization: 15116837,
    price_btc: 2.90757e-7,
    price_usd: 0.00185163,
    price_eth: 0.00000651632,
    volume_usd: 489732
  },
  {
    id: 44484,
    time: { secs_since_epoch: 1534340966, nanos_since_epoch: 0 },
    capitalization: 15371392,
    price_btc: 2.95144e-7,
    price_usd: 0.00188281,
    price_eth: 0.00000657009,
    volume_usd: 520735
  }
];

export default mock;
