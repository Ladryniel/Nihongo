/* =========================================================================
   KANA — tableaux et exercices.
   Même logique que mots.js : on peut ajouter des mots dans les niveaux 2 et 3.
   Format d'un mot : ["écriture en kana", "rōmaji", "sens en français"],
   ========================================================================= */

const KANA = {
  hira: {
    nom: "Hiragana",
    base: [
      ["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"],
      ["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"],
      ["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"],
      ["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"],
      ["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"],
      ["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"],
      ["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"],
      ["や","ya"],["ゆ","yu"],["よ","yo"],
      ["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"],
      ["わ","wa"],["を","wo"],["ん","n"]
    ],
    dakuten: [
      ["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"],
      ["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"],
      ["だ","da"],["ぢ","dji"],["づ","dzu"],["で","de"],["ど","do"],
      ["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"],
      ["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]
    ],
    niveau2: [
      ["ねこ","neko","le chat"],["いぬ","inu","le chien"],["やま","yama","la montagne"],
      ["うみ","umi","la mer"],["そら","sora","le ciel"],["みず","mizu","l'eau"],
      ["とり","tori","l'oiseau"],["ほし","hoshi","l'étoile"],["かわ","kawa","la rivière"],
      ["ゆき","yuki","la neige"],["あめ","ame","la pluie"],["はし","hashi","le pont"],
      ["くつ","kutsu","les chaussures"],["はな","hana","la fleur"],["つき","tsuki","la lune"],
      ["ひと","hito","la personne"],["いえ","ie","la maison"],["くち","kuchi","la bouche"],
      ["かぎ","kagi","la clé"],["ふね","fune","le bateau"],["えき","eki","la gare"],
      ["あき","aki","l'automne"],["なつ","natsu","l'été"],["ふゆ","fuyu","l'hiver"],
      ["はる","haru","le printemps"],["みみ","mimi","les oreilles"],["うた","uta","la chanson"],
      ["たび","tabi","le voyage"],["やさ","yasa","(douceur)"],["きた","kita","le nord"]
    ],
    niveau3: [
      ["さくら","sakura","les cerisiers"],["たまご","tamago","l'œuf"],["くるま","kuruma","la voiture"],
      ["てがみ","tegami","la lettre"],["ともだち","tomodachi","l'ami"],["はなび","hanabi","le feu d'artifice"],
      ["おんせん","onsen","les bains thermaux"],["でんわ","denwa","le téléphone"],["さかな","sakana","le poisson"],
      ["つくえ","tsukue","le bureau"],["なまえ","namae","le nom"],["しごと","shigoto","le travail"],
      ["おかね","okane","l'argent"],["せんせい","sensei","le professeur"],["やさい","yasai","les légumes"],
      ["ちかてつ","chikatetsu","le métro"],["まつり","matsuri","le festival"],["かばん","kaban","le sac"],
      ["ゆびわ","yubiwa","la bague"],["みどり","midori","le vert"],["ことば","kotoba","le mot"],
      ["がっこう","gakkou","l'école"],["きって","kitte","le timbre"],["にほん","nihon","le Japon"],
      ["とけい","tokei","la montre"],["くだもの","kudamono","les fruits"],["たべもの","tabemono","la nourriture"],
      ["にわとり","niwatori","la poule"],["ひこうき","hikouki","l'avion"],["おちゃ","ocha","le thé"]
    ]
  },

  kata: {
    nom: "Katakana",
    base: [
      ["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"],
      ["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"],
      ["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"],
      ["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"],
      ["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"],
      ["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"],
      ["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"],
      ["ヤ","ya"],["ユ","yu"],["ヨ","yo"],
      ["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"],
      ["ワ","wa"],["ヲ","wo"],["ン","n"]
    ],
    dakuten: [
      ["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"],
      ["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"],
      ["ダ","da"],["ヂ","dji"],["ヅ","dzu"],["デ","de"],["ド","do"],
      ["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"],
      ["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]
    ],
    niveau2: [
      ["パン","pan","le pain"],["ペン","pen","le stylo"],["バス","basu","le bus"],
      ["ドア","doa","la porte"],["ビル","biru","l'immeuble"],["ガム","gamu","le chewing-gum"],
      ["メモ","memo","la note"],["ハム","hamu","le jambon"],["ジム","jimu","la salle de sport"],
      ["ゴム","gomu","le caoutchouc"],["ピザ","piza","la pizza"],["バー","baa","le bar"],
      ["キー","kii","la clé"],["タイ","tai","la Thaïlande"],["ネコ","neko","le chat"]
    ],
    niveau3: [
      ["コーヒー","koohii","le café"],["テレビ","terebi","la télévision"],["カメラ","kamera","l'appareil photo"],
      ["ホテル","hoteru","l'hôtel"],["タクシー","takushii","le taxi"],["ケーキ","keeki","le gâteau"],
      ["ビール","biiru","la bière"],["チーズ","chiizu","le fromage"],["フランス","furansu","la France"],
      ["ピアノ","piano","le piano"],["ノート","nooto","le cahier"],["スーパー","suupaa","le supermarché"],
      ["トイレ","toire","les toilettes"],["カード","kaado","la carte"],["チケット","chiketto","le ticket"],
      ["ワイン","wain","le vin"],["サラダ","sarada","la salade"],["バナナ","banana","la banane"],
      ["ジュース","juusu","le jus"],["パスタ","pasuta","les pâtes"],["ズボン","zubon","le pantalon"],
      ["シャワー","shawaa","la douche"],["カレー","karee","le curry"],["メニュー","menyuu","le menu"],
      ["レストラン","resutoran","le restaurant"],["コピー","kopii","la copie"],["ソフト","sofuto","le logiciel"]
    ]
  }
};
