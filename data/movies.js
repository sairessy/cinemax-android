const movies = [
  { 
    "id": "0",
     "title": "Bohemian Rhapsody", 
     "url": "http://cinetop.co.mz/storage/film/Bohemian.Rhapsody.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
     "img": "http://cinetop.co.mz/storage/images/201906/Bohemian_Rhapsody_episodes_1_poster_vertial_1559551962895_436x720.jpg",
     "related": [1, 2, 4] 
  },
  { 
    "id": "1", 
    "title": "O chamado da selva", 
    "url": "http://cinetop.co.mz/storage/film/TheCallOfTheWild.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201912/Campo_do_Medo_episodes_1_poster_vertial_1577765680636_436x720.jpg",
    "related": [1, 2, 4]  
  },
  { 
    "id": "2", 
    "title": "Tango One", 
    "url": "http://cinetop.co.mz/storage/film/Tango.One.2018.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201905/Tango_One__O_Mais_Procurado_episodes_1_poster_vertial_1558951204613_436x720.jpg",
    "related": [1, 2, 4]  
  },
  { 
    "id": "3", 
    "title": "The rhythm section", 
    "url": "http://cinetop.co.mz/storage/film/TheRhythmSection.mp4", 
    "img": "http://cinetop.co.mz/storage/images/202005/The_Rhythm_Section_episodes_1_poster_vertial_1589794828989_436x720.jpg",
    "related": [1, 2, 4]  
  },
  { "id": "4", 
  "title": "Black Panther", 
  "url": "http://cinetop.co.mz/storage/film/Black.Panther.2018.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
  "img": "http://cinetop.co.mz/storage/images/201905/Pantera_Negra_episodes_1_poster_vertial_1557997044991_436x720.jpg",
  "related": [0, 7, 27, 29, 30, 34, 36]  
  },
  { "id": "5", 
  "title": "Ready Player", 
  "url": "http://cinetop.co.mz/storage/film/Ready.Player.One.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
  "img": "http://cinetop.co.mz/storage/images/201812/Jogador_N_1_episodes_1_poster_vertial_1544177013289_436x720.jpg",
  "related": [1, 22, 14]  
  },
  { "id": "6", 
  "title": "Wonder 2017", 
  "url": "http://cinetop.co.mz/storage/film/Wonder.2017.1080p.BluRay.x264-[YTS.AG-muxed.mp4", 
  "img": "http://cinetop.co.mz/storage/images/201806/767d3-wonder.jpg",
  "related": [1, 2, 4]  
  },
  { "id": "7", 
  "title": "Sherlock Gnomes 2018", 
  "url": "http://cinetop.co.mz/storage/film/Sherlock.Gnomes.2018.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
  "img": "http://cinetop.co.mz/storage/images/201812/Gnomeu_e_Julieta__O_Misterio_do_Jardim_episodes_1_poster_vertial_1544177412365_436x720.jpg",
  "related": [5, 22, 24]  
  },
  { "id": "8", 
  "title": "Muse 2017", 
  "url": "http://cinetop.co.mz/storage/film/Muse.2017.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
  "img": "http://cinetop.co.mz/storage/images/201904/Musa_episodes_1_poster_vertial_1555387815594_436x720.jpg",
  "related": [1, 2, 4, 25]  
  },
  { 
    "id": "9", 
    "title": "Men In Black International 2019", 
    "url": "http://cinetop.co.mz/storage/film/Men.In.Black.International.2019.720p.WEBRip.x264-YTS.LT-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201912/MIB__Homens_de_Preto___Internacional_episodes_1_poster_vertial_1577766022492_436x720.jpg",
    "related": [15, 25, 31]  
  },
  { "id": "10", 
    "title": "Manchester by the sea 2016", 
    "url": "http://cinetop.co.mz/storage/film/Manchester.By.The.Sea.2016.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/4bb1d-mv5bmtyxmjk0ndg4ml5bml5banbnxkftztgwodcynja5ote@._v1_sy1000_cr0,0,674,1000_al_.jpg",
    "related": [0, 6, 13, 22]  
  },
  { 
    "id": "11", 
    "title": "Titanic 1997", 
    "url": "http://cinetop.co.mz/storage/film/Titanic1997-Prt.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/104ec-mv5bmjexnzm0ndm0n15bml5banbnxkftztcwmzkxotuwnw@@._v1_sy317_cr0,0,214,317_al_.jpg",
    "related": [1, 2, 4]  
  },
  { 
    "id": "12", 
    "title": "The Quake.2018", 
    "url": "http://cinetop.co.mz/storage/film/The.Quake.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201907/O_Terremoto__episodes_1_poster_vertial_1563781363577_436x720.jpg",
    "related": [1, 2, 11]  
  },
  { 
    "id": "13", 
    "title": "Spinning.Man.2018", 
    "url": "http://cinetop.co.mz/storage/film/Spinning.Man.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201904/Spinning_Man_episodes_1_poster_vertial_1555899426457_436x720.jpg",
    "related": [1, 2, 4] 
  },
  { 
    "id": "14", 
    "title": "IpMan 4: The Final", 
    "url": "http://cinetop.co.mz/storage/film/IpMan4TheFinale.mp4", 
    "img": "http://cinetop.co.mz/storage/images/202005/Ip_Man_4__The_Finale_episodes_1_poster_vertial_1589355468757_436x720.jpg",
    "related": [1, 2, 4]  
  },
  { 
    "id": "15", 
    "title": "Android Cop 2014", 
    "url": "http://cinetop.co.mz/storage/film/Android.Cop.2014.mp4",
    "img": "http://cinetop.co.mz/storage/images/201806/191e0-android.cop.2014.jpg",
    "related": [1, 2, 4]  
  },
  { 
    "id": "16", 
    "title": "Macbeth 2015", 
    "url": "http://cinetop.co.mz/storage/film/Macbeth2015.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/LADY_BIRD___A_HORA_DE_VOAR_episodes_1_poster_vertial_1538122073868_436x720.jpg",
    "related": [1, 2, 4, 9, 22]  
  },
  { 
    "id": "17", 
    "title": "Death Note", 
    "url": "http://cinetop.co.mz/storage/film/Death.Note.2017.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201810/Death_Note_episodes_1_poster_vertial_1540869289225_436x720.jpg",
    "related": [0, 1, 4, 6, 29]  
  },
  { 
    "id": "18", 
    "title": "The final wish", 
    "url": "http://cinetop.co.mz/storage/film/The.Final.Wish.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201906/The_Final_Wish_episodes_1_poster_vertial_1560765080964_436x720.jpg",
    "related": [1, 2, 6, 16, 27]  
  },
  { 
    "id": "19", 
    "title": "Aladdin 2019", 
    "url": "http://cinetop.co.mz/storage/film/Aladdin.2019.720p.BluRay.x264-YTS.LT-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201912/Aladdin_episodes_1_poster_vertial_1577172851933_436x720.jpg",
    "related": [1, 16, 24, 26, 28]  
  },
  { 
    "id": "20", 
    "title": "Thelma", 
    "url": "http://cinetop.co.mz/storage/film/Thelma.2017.720p.BluRay.x264-[YTS.AG-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201907/Thelma_episodes_1_poster_vertial_1563780754968_436x720.jpg",
    "related": [11, 12, 14, 22, 28]  
  },
  { 
    "id": "21", 
    "title": "Spider: de volta ao lar", 
    "url": "http://cinetop.co.mz/storage/film/Spider-Man.Into.The.Spider-Verse.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/96db7-spiderman-poster-7-large.jpg",
    "related": [1, 2, 4, 19, 29]  
  },
  { 
    "id": "22", 
    "title": "Killers Anonymous", 
    "url": "http://cinetop.co.mz/storage/film/Killers.Anonymous.2019.1080p.BluRay.x264-YTS.LT-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201912/Killers_Anonymous_episodes_1_poster_vertial_1577782722020_436x720.jpg",
    "related": [6, 17, 29, 33, 36]  
  },
  { 
    "id": "23", 
    "title": "Pixels", 
    "url": "http://cinetop.co.mz/storage/film/Pixels.2015.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/395d1-pixels.jpg",
    "related": [1, 2, 4, 19, 26]  
  },
  { 
    "id": "24", 
    "title": "Chips 2017", 
    "url": "http://cinetop.co.mz/storage/film/CHIPS.2017.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/80496-163559_poster_2_w600.jpg",
    "related": [1, 2, 4, 23, 26, 28]  
  },
  { 
    "id": "25", 
    "title": "Genesis", 
    "url": "http://cinetop.co.mz/storage/film/Genesis.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201903/Genesis__episodes_1_poster_vertial_1553505042357_436x720.jpg",
    "related": [1, 2, 4, 13, 29, 33]  
  },
  { 
    "id": "26", 
    "title": "Sorry to bother you", 
    "url": "http://cinetop.co.mz/storage/film/Sorry.To.Bother.You.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201904/Sorry_to_Bother_You_episodes_1_poster_vertial_1555575722454_436x720.jpg",
    "related": [1, 2, 4, 23, 24]  
  },
  { 
    "id": "27", 
    "title": "How to train your dragon", 
    "url": "http://cinetop.co.mz/storage/film/How.To.Train.Your.Dragon.The.Hidden.World.2019.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201907/Como_Treinar_o_seu_Dragao_3_episodes_1_poster_vertial_1562579042731_436x720.jpg",
    "related": [1, 2, 23, 25, 28]  
  },
  {
    "id": "28", 
    "title": "Annilation", 
    "url": "http://cinetop.co.mz/storage/film/Annihilation.2018.1080p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/0234f-annihilation_ver2.jpg",
    "related": [5, 12, 14, 23, 27]  
  },
  {
    "id": "29", 
    "title": "Bad boys forlife", 
    "url": "http://cinetop.co.mz/storage/film/BadBoysForLife.mp4", 
    "img": "http://cinetop.co.mz/storage/images/202005/Bad_Boys_para_Sempre_episodes_1_poster_vertial_1589353464900_436x720.jpg",
    "related": [1, 2, 5, 6, 22]  
  },
  {
    "id": "30", 
    "title": "Capitain Marvel", 
    "url": "http://cinetop.co.mz/storage/film/Captain.Marvel.2019.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201908/Capita_Marvel_episodes_1_poster_vertial_1566200735913_436x720.jpg",
    "related": [1, 2, 4, 21, 25]  
  },
  {
    "id": "31", 
    "title": "I kill giants", 
    "url": "http://cinetop.co.mz/storage/film/I.Kill.Giants.2017.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201903/I_Kill_Giants_episodes_1_poster_vertial_1553568028180_436x720.jpg",
    "related": [1, 2, 4, 26, 27]  
  },
  {
    "id": "32", 
    "title": "A quiet place", 
    "url": "http://cinetop.co.mz/storage/film/A.Quiet.Place.2018.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201901/Um_Lugar_Silencioso_episodes_1_poster_vertial_1547609328759_436x720.jpg",
    "related": [1, 2, 6, 22, 24, 27]  
  },
  {
    "id": "33", 
    "title": "Spectral", 
    "url": "http://cinetop.co.mz/storage/film/Spectral.2016.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201910/Spectral_episodes_1_poster_vertial_1570680591625_436x720.jpg",
    "related": [1, 2, 19, 20, 23]  
  },
  {
    "id": "34", 
    "title": "Resident evil 6: Final chapter", 
    "url": "http://cinetop.co.mz/storage/film/Resident.Evil.The.Final.Chapter.2016.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201806/58284-resident_evil_the_final_chapter_ver8_xlg.jpg",
    "related": [1, 2, 4, 33, 34, 36]  
  },
  {
    "id": "35", 
    "title": "The meg", 
    "url": "http://cinetop.co.mz/storage/film/The.Meg.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201905/Megatubarao_episodes_1_poster_vertial_1557309258410_436x720.jpg",
    "related": [1, 5, 21, 24, 33, 35]  
  },
  {
    "id": "36", 
    "title": "Siberia", 
    "url": "http://cinetop.co.mz/storage/film/The.Meg.2018.720p.WEBRip.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201812/Siberia_episodes_1_poster_vertial_1544178581370_436x720.jpg",
    "related": [3, 11, 14, 31]  
  },
  {
    "id": "37", 
    "title": "Arctic", 
    "url": "http://cinetop.co.mz/storage/film/Arctic.2018.720p.BluRay.x264-[YTS.AM-muxed.mp4", 
    "img": "http://cinetop.co.mz/storage/images/201908/Arctic_episodes_1_poster_vertial_1564978306714_436x720.jpg",
    "related": [1, 10, 19, 23] 
  }
];

module.exports = movies;