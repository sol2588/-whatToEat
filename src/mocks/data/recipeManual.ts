const recipeManuals = [
    {
        mNum: 1,
        mContent: '오트밀 1컵을 전자렌지 가능한 밥그릇에 부어주고 설탕이나 꿀을 1스푼 넣고 소금과 후추 한꼬집씩을 넣고 골고루 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b1ac9431b37e51ee350cd3e776168d461.jpg',
        recipeId: 1,
    },
    {
        mNum: 2,
        mContent:
            '우유 한컵을 부어주고 전자렌지에 1분에서 2분 정도 가열하고 다시한번 섞어 저어주세요 걸쭉하게 죽처럼 꾸덕꾸덕해졌다면 완성!!! 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b8c1e0450ee0ae5fc6d2c1679390c1fc1.jpg',
        recipeId: 1,
    },
    {
        mNum: 3,
        mContent:
            '각종 견과류와 건과일류를 취향대로 토핑해주세요! 건포도,건살구,건블루베리,건라즈베리 다 좋구요 생블루베리나 생딸기등을 올려도 좋아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/ec86ebb503d8b1feec325f2e39cae9531.jpg',
        recipeId: 1,
    },
    {
        mNum: 4,
        mContent:
            '큰 볼에 계란 3개를 풀어 소금 1티스푼, 후추 1꼬집, 파마산 치즈 가루 1스푼을 넣어 저어줍니다. (저는 파마산 치즈가루를 피자 시키면 오는 걸 모아두기 때문에 그 한 봉지를 다 넣어 주었어요!) 계란, 소금, 후추, 파마산 치즈 가루 큰 볼 , 젓가락 파마산 치즈 가루를 넣기 때문에 소금을 너무 과하게 넣진 말아주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b56a2f67b05f48c202dcb5d5e14e054b1.jpg',
        recipeId: 2,
    },
    {
        mNum: 5,
        mContent:
            '달궈진 팬에 식용유를 1큰술 부어둔 뒤 감자 1개, 양파 1/2개, 마늘햄 1/2개를 얇고 길게 썰어 중불에 볶아주세요. 이때 소금을 약간 (1꼬집 정도) 뿌려 간을 살짝 해주세요. 식용유, 감자, 양파, 마늘햄 팬 , 도마 , 칼 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d86adc3a51078da6a2b09b2891d6ed481.jpg',
        recipeId: 2,
    },
    {
        mNum: 6,
        mContent:
            '볶아진 감자, 양파, 마늘햄을 팬에 골고루 퍼뜨려준 후 step1에서 만든 계란물을 넓게 부어줍니다. 이때 팬을 들고 휘어가며 움직이면서 계란들이 골고루 퍼져 재료들이 서로서로 붙도록 해주세요. 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1892d71740a5cfa293f56a8c190d617c1.jpg',
        recipeId: 2,
    },
    {
        mNum: 7,
        mContent:
            '불을 아주 약하게 한 후 후라이팬 뚜껑을 닫아 계란 윗 부분까지 익을 수 있도록 해줍니다. 팬 뚜껑 뚜껑을 덮고 약불에 익히면 밑에는 타지 않고 노릇해지고 윗 부분은 익혀져요! 뒤집어버리면 토핑이 많아 두껍고 잘 으스러질 수 있어서 뒤집지 않고 뚜껑을 이용해 익혀주면 좋아요.^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5346e7d1467f74ae8c1071485ee978c61.jpg',
        recipeId: 2,
    },
    {
        mNum: 8,
        mContent: '다 익혀진 에그 포테이토 피자를 팬 그대로 살살 흔들어 도마에 옮겨 둔 뒤 피자처럼 잘라 한 조각씩 접시로 옮겨주세요. 도마 , 칼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8ae5a47715b4db12841689cb76a24b9b1.jpg',
        recipeId: 2,
    },
    {
        mNum: 9,
        mContent:
            '접시에 옮긴 후 파슬리 가루가 있으시면 골고루 뿌려주시고 없으시면 안넣으셔도 맛에 변화가 없으시 걱정 마세요^^ 그리고 케첩으로 데코하며 뿌려주시면 끝! 파슬리 가루, 케첩',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/34043fa225b7c61b802584a8494bbfff1.jpg',
        recipeId: 2,
    },
    {
        mNum: 10,
        mContent:
            '큰 냄비에 물을 넉넉히 500ml정도 넣고 소금을 1스푼 넣어 끓여줍니다. 소금을 넣어주시면 시금치를 데칠 때 아주 푸르른 이쁜 색을 낼 수 있어요.^^ 물, 소금 냄비 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/fca29ad4fbb38983f4bf4ec9985be28a1.jpg',
        recipeId: 3,
    },
    {
        mNum: 11,
        mContent:
            '물이 끓는 동안 시금치를 다듬어 흙을 털며 찬물에 헹궈주세요. *시금치를 다듬을 때 끝트머리 뿌리 부분에( 사진 속 부분) 십자가로 칼집을 내주거나 1cm로 그냥 짤라 주셔도 되요. 시금치 칼 흙을 일일이 모두 버리겠다고 욕심부리지 않으셔도 됩니다! 데치고 또 찬물로 헹굴 때 흙이 다 털려요.^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/a225787fe4d45d85ee34c55649e86f891.jpg',
        recipeId: 3,
    },
    {
        mNum: 12,
        mContent:
            '팔팔 끓는 Step1의 물에 시금치를 넣어 데쳐줍니다. 넣고 계속 밑에 시금치와 위에 시금치를 위치를 바꿔주면서 고루고루 데쳐지도록 해주세요. (1분 정도) 젓가락 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/64800cfe82cb1a320be7c9d359c6c6191.jpg',
        recipeId: 3,
    },
    {
        mNum: 13,
        mContent: '시금치 하나를 들고 사진 속 부분을 손으로 눌렀을 때 딱딱하지 않게 적당히 반 정도 눌러지면 시금치를 건져내어 주세요. 젓가락 약-중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/da7ed4da7db5c63dbe8dd37a611e8a551.jpg',
        recipeId: 3,
    },
    {
        mNum: 14,
        mContent: '다 데쳐진 시금치를 건져 찬물에 2-3번 헹구워 줍니다. 찬물 큰 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/c1e7af5209a871e562635061b68c8f971.jpg',
        recipeId: 3,
    },
    {
        mNum: 15,
        mContent:
            '다 헹구어진 시금치는 물이 흥건하지 않게 두 손으로 한 뭉치씩 잡아 쭈욱 짜 주세요. (너무 세게 하진 말아주세요! 물기가 그냥 두어도 뚝뚝 안 흐른다는 정도로만 짜줍니다.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/dfcf6c163b23f80baa44f3282988b3cc1.jpg',
        recipeId: 3,
    },
    {
        mNum: 16,
        mContent:
            '다른 큰 볼로 시금치를 옮겨 양념 재료들로 나물을 묻혀 줍니다. 국간장 2스푼 + (함초)소금 2티스푼 + 참기름 1 스푼 + 깨소금 1큰술 국간장, (함초)소금, 참기름, 깨소금 비닐 장갑 군간장 : (함초) 소금 : 참기름 = 2 : 2 : 1',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d3004d3744768fdfe1e62f8eb69f31601.jpg',
        recipeId: 3,
    },
    {
        mNum: 17,
        mContent: '먼저 대파 손질했어요. 대파는 속대는 빼고요. 대파 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1de6997371203868bdc88869b35c5aaf1.jpg',
        recipeId: 4,
    },
    {
        mNum: 18,
        mContent: '대파 속대는 2cm 정도로 자르고요. 당근은 은행잎 모양으로 청양고추는 쫑쫑!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/4068590a9c388183494c20432fbee7941.jpg',
        recipeId: 4,
    },
    {
        mNum: 19,
        mContent: '대파 겉대는 사선으로 채를 썰고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/dafc5e12690a15ff59b8083f31872c241.jpg',
        recipeId: 4,
    },
    {
        mNum: 20,
        mContent: '물에 15분 정도 담가서 매운 기를 빼주고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/21d207da417f3b8d11871e4d4a461d821.jpg',
        recipeId: 4,
    },
    {
        mNum: 21,
        mContent: '팬에 돼지고기와 마늘 2큰술, 설탕 1큰술, 대파 속대 썬 것 흰부분을 넣고 달달 볶아줍니다. 당근도 넣고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/7c172669ef716ff9a1dfe5abd4cbafe01.jpg',
        recipeId: 4,
    },
    {
        mNum: 22,
        mContent:
            '하얗게 당근이 익으면 고춧가루 2큰술, 고추장 2큰술, 진간장 2큰술, 올리고당 2큰술 매실청을 넣고 잘 섞은 후 볶아주고요. 양념 넣을 땐 불을 꺼도 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5adf39e064c8342bc08d891ebe586b141.jpg',
        recipeId: 4,
    },
    {
        mNum: 23,
        mContent: '대파 속대 파란 부분을 넣고 달달~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1100cff9fd203c2f1b3095c5214758d01.jpg',
        recipeId: 4,
    },
    {
        mNum: 24,
        mContent: '지글지글~ 양념이 맛나게 조려질 때까지 볶으면 되는데요. 마지막에 참기름 두르고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1fbc7321439837195c9515e797fa1f561.jpg',
        recipeId: 4,
    },
    {
        mNum: 25,
        mContent: '접시에 대파 채 썬 것을 올리고 고기 담고 청양고추 썬 것으로 데코하고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/af414cabea6bd974ff33f2c76a76c3f31.jpg',
        recipeId: 4,
    },
    {
        mNum: 26,
        mContent: '통깨 솔솔 뿌리고 돼지고기 목살이라 고기가 야들야들 아주 맛이 좋더라고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/581930135b4a2984ef66cfc264375d981.jpg',
        recipeId: 4,
    },
    {
        mNum: 27,
        mContent: '시트재료',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/ccb9f8fcd395a93dc5559299f9dc74a31.jpg',
        recipeId: 5,
    },
    {
        mNum: 28,
        mContent: '레몬 커드 재료',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/6313e0ead68fba27d2ba8536ef6cf3451.jpg',
        recipeId: 5,
    },
    {
        mNum: 29,
        mContent:
            '시트 만들기 - 작업 전 박력분 2번 체 치기 - 틀에 유산지 준비해놓기 - 레몬 노란껍질 부분만 강판에 갈 거나 노란 부분만 얇게 깎아 잘게 다지기 Tip. 레몬이 너무 단단하면 즙이 잘 안나와요. 앞뒤로 굴려주면 작업이 수월해져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/342edc558daa3cb86d71a0f7e91e9e2e1.jpg',
        recipeId: 5,
    },
    {
        mNum: 30,
        mContent:
            '- 레몬 반개만 즙내기 - 버터, 우유, 식용유 한볼에 계량 중탕으로 버터 녹이기(따뜻한 온도정도) - 오븐 150~160도 예열해놓기 - 여름을 제와한 계절에는 따뜻한 물에 중탕으로 작업하기 - 휘핑기로 달걀 풀어주기 - 표면 위로 거품이 올라오면 소금과 꿀 먼저 넣기 - 설탕 3~4번 나눠가면서 거품 올리기 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/23cab56e84e33db72312509ba3d98b151.jpg',
        recipeId: 5,
    },
    {
        mNum: 31,
        mContent:
            '- 전체적으로 아이보리색이 나고 휘퍼자국이 선명해지면 체 친 박력분 넣어 거품이 꺼지지 않게 고무주걱을 세워 칼질하듯 재빨리 섞기 - 녹인 버터 볼에 반죽 2주걱 넣어 매끈해질 때까지 섞기 - 원래 반죽에 넣어 재빠르게 섞기 - 레몬즙과 껍질 넣어 섞기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/87edb9708d67c01cd0251de96b3e735f1.jpg',
        recipeId: 5,
    },
    {
        mNum: 32,
        mContent:
            '- 틀에 팬닝하기 - 예열된 오븐에 20~25분 굽기 Tip. 오븐마다 열전도율이 다르니 온도와 시간은 조절해주세요. 뾰족한 꼬지로 가운데 찔러 반죽이 묻어 나오지 않으면 다 익은 거예요. - 구워지면 바로 틀에서 분리 식힘망에 식히기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8c8b6b3740f07f9c70fc5f8de9598b261.jpg',
        recipeId: 5,
    },
    {
        mNum: 33,
        mContent:
            '레몬 커드 만들기(시트가 구워지는 동안 진행해요.) - 달걀 체에 한번 걸러내기 - 설탕과 전분가루 넣어 섞기 - 밀크팬에 위와 같은 방법으로 레몬 껍질과 즙내기 - 버터 넣어 직화로 버터는 다 녹이고 한번 후루룩 끓이기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/ea81525af3bbca65e5664b64363c26421.jpg',
        recipeId: 5,
    },
    {
        mNum: 34,
        mContent: '- 한 김 식힌 뒤 섞어 놓은 재료에 조금씩 부어주면서 섞기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/3383493b4a5b75e2ede749db2cb7a8691.jpg',
        recipeId: 5,
    },
    {
        mNum: 35,
        mContent:
            '- 다시 밀크팬에 옮겨 약한 불에서 걸쭉한 상태까지 끓이기 Tip. 바닥에 뭉치는 게 느껴지면 불에서 내렸다 섞어주면서 농도를 맞춰주세요. 식으면 처음보다 되직해지기 때문에 약간 흐르는 상태까지 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/06cebe1dcf71d53ed31aee50ea144efb1.jpg',
        recipeId: 5,
    },
    {
        mNum: 36,
        mContent: '- 뜨거운 상태로 볼에 옮겨 랩을 밀착시켜 씌운 후 냉장실에서 식히기 세균 번식을 막기 위해 랩을 밀착시켜줘요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1c3df0ea5b30c01b015bd856a5037c961.jpg',
        recipeId: 5,
    },
    {
        mNum: 37,
        mContent: '- 시럽은 한번 끓여주거나 따뜻한 물에 설탕을 녹여 준비하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/9eaf8cca618ee80ffe53f327314ce33c1.jpg',
        recipeId: 5,
    },
    {
        mNum: 38,
        mContent:
            '- 시트 3등분 후 시럽 듬뿍 바르기 2개 시트에 레몬 커드 나눠 바르기 Tip. 테두리까지 꽉 채워 바르지 마세요. 합치면 크림이 밖으로 튀어나와 아이싱 하기 힘들어져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b3f2264614fd7d333fd31b4daf98f7601.jpg',
        recipeId: 5,
    },
    {
        mNum: 39,
        mContent: '- 시트 3개를 합치기 - 크림을 들었을 때 끝이 휘는 정도까지생크림에 설탕 넣어 휘핑하기 - 윗면 아이싱 하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/52c9a5f4a7d9b52e1acd13f06556c88b1.jpg',
        recipeId: 5,
    },
    {
        mNum: 40,
        mContent: '- 옆면 얇게 애벌 아이싱 하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/21be1b546f3fdbd8b0ce6555edc183051.jpg',
        recipeId: 5,
    },
    {
        mNum: 41,
        mContent: '- 본인이 원하는 두께만큼 옆면 아이싱 하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/ebab2cde5eb35403c85a22a7d6bb73641.jpg',
        recipeId: 5,
    },
    {
        mNum: 42,
        mContent:
            '윗면의 자국이 신경 쓰인다면 수분에 녹지 않는 데코스노우를 뿌려보세요. 위에 옆면에 올라온 크림 정리할 땐 비스듬히 스페츌라를 잡고 안으로 누르듯 깎아주면 돼요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/e4e171fcd17725e301f9860d2908ddd71.jpg',
        recipeId: 5,
    },
    {
        mNum: 43,
        mContent: '원하는 디자인으로 장식하면 레몬케이크 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/50a6a55c743ad660cd327f1712f945fe1.jpg',
        recipeId: 5,
    },
    {
        mNum: 44,
        mContent: '재료를 미리 준비해요. 가루류는 소금과 함께 체쳐 준비하고 버터와 우유는 차갑게 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/0892f7e5fae30bcad5a685fb28b565bd1.jpg',
        recipeId: 6,
    },
    {
        mNum: 45,
        mContent: '체쳐둔 가루에 찬 버터를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/17e0e40774f407e6ef30d979407512161.jpg',
        recipeId: 6,
    },
    {
        mNum: 46,
        mContent: '스크래퍼로 버터가 녹지않게 잘게 다져줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/460eccf4a474670f61ad73a879f570491.jpg',
        recipeId: 6,
    },
    {
        mNum: 47,
        mContent: '우유를 붓고 주걱으로 자르며 잘섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5d1a7a2951e160ead1d2a37a2778cd881.jpg',
        recipeId: 6,
    },
    {
        mNum: 48,
        mContent:
            '날가루가 보이지 않으면 비닐에 넣어 한덩어리로 만들어 줍니다. 너무 치대지 않아야하여 한덩어리로 뭉쳐질정도로만 반죽합니다. ( 너무 치대면 딱딱한 식감이 됩니다.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/bde28bb87c8a926c7f400b3f0c8233ee1.jpg',
        recipeId: 6,
    },
    {
        mNum: 49,
        mContent: '한덩어리로 된 반죽을 냉장고에서 30분이상 휴지합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5aef1bc82e4dc96daa57ef3b24600b171.jpg',
        recipeId: 6,
    },
    {
        mNum: 50,
        mContent:
            '2mm정도로 얇게 구워줍니다. 얇아야 구웠을때 바삭해요. 반죽을 밀때 비닐 사이에 반죽을 넣고 밀면 수월하며 그상태 그대로 팬닝하여 정사각형으로 일정하게 잘라 포크로 찍어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/778ec5abb2b7a3b624752ad30e0c84a41.jpg',
        recipeId: 6,
    },
    {
        mNum: 51,
        mContent: '예열된 오븐에서 170도 12~15분 정도 굽습니다. (개인 오븐 사양에 따라 온도 및 시간은 조절하세요) 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5f11dbae8f6b6fa1fa7f419154dc37e61.jpg',
        recipeId: 6,
    },
    {
        mNum: 52,
        mContent: '바삭 노릇 하게 구워주면 완성~ 커피와 함께 먹음 좋고 크림치즈나 요거트와 함께 먹음 더 맛있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8e6393423c706f8ee108eab7bc46dedd1.jpg',
        recipeId: 6,
    },
    {
        mNum: 53,
        mContent: '양상추와 파프리카를 깨끗히 씻어 준비해주세요 파프리카는 동그랗게 잘라 6개 만들어쥬세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/aeeb1505cca4e229dcf60fa99677e4cc1.jpg',
        recipeId: 7,
    },
    {
        mNum: 54,
        mContent: '달걀3개를 풀고 치즈는 1장에 4개로 잘라줍니다 12개가 되도록!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/7950f339e4e1a9942f45770bb8aa44cd1.jpg',
        recipeId: 7,
    },
    {
        mNum: 55,
        mContent: '베이컨 4장을 3등분해서 12조각만들어주세요 달걀은 빵크기에 맞춰 동그랗게 6개 부쳐냅니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8a6c82ff17cadd41592b16cc2670e4121.jpg',
        recipeId: 7,
    },
    {
        mNum: 56,
        mContent: '모닝빵을 반으로 나누어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/97d400600a91519d26d3ac93b38a5fd81.jpg',
        recipeId: 7,
    },
    {
        mNum: 57,
        mContent: '딸기잼을 2/1숟갈씩 발라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d9768dbc38912f7942d649ebf6b299231.jpg',
        recipeId: 7,
    },
    {
        mNum: 58,
        mContent: '구워진 달걀을 올리고 치즈 2조각씩 올려주세요 그위에 타타르 소스 2/1스푼을 발라주세요 (타타르 소스가없다면 패스)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/db4388e63c547ede008ca082899865521.jpg',
        recipeId: 7,
    },
    {
        mNum: 59,
        mContent: '파프리카 - 양상추(접어서 사이즈맞게) -베이컨2조각 순으로 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/34d60e11bf71e36184f8b16fdf21917c1.jpg',
        recipeId: 7,
    },
    {
        mNum: 60,
        mContent: '빵 뚜껑을 덮어주면 끝^^♡',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d3d6de3fdd4ee9229444ac45439e8e3b1.jpg',
        recipeId: 7,
    },
    {
        mNum: 61,
        mContent: '돼지고기를 먹기 좋은 크기로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/07e0a54f66a06b5903003fcd22c0863b1.jpg',
        recipeId: 8,
    },
    {
        mNum: 62,
        mContent: '재료를 섞어 놓은 양념장에 고기를 넣고 잘 섞고, 10 ~ 20분 재워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/c528376c2b9e160077314a977e2636d31.jpg',
        recipeId: 8,
    },
    {
        mNum: 63,
        mContent: '감자, 애호박, 대파, 양파는 먹기 좋은 크기로 썰어주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/571069fa724c575c597b573f4dd0af5e1.jpg',
        recipeId: 8,
    },
    {
        mNum: 64,
        mContent: '믹서기에 무, 사과, 물 200ml를 넣고 갈아준 다음, 면포에 넣고 꼭 짜 국물을 내려주세요. (대략 800ml)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8185cea765763eccb81e7936148dd1b81.jpg',
        recipeId: 8,
    },
    {
        mNum: 65,
        mContent: '예열된 냄비에 고기를 넣고 중센불에서 3분 볶다가,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/557810f2f1d9597a7e76960d3b7f9c451.jpg',
        recipeId: 8,
    },
    {
        mNum: 66,
        mContent: '그리고 무사과즙을 넣고 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8e902e8e0360ae6a348a365022513e2c1.jpg',
        recipeId: 8,
    },
    {
        mNum: 67,
        mContent: '펄펄 끓어오르면 감자, 애호박, 양송이를 넣고 10분 더 끓여주세요. 중간에 떠오르는 불순물을 건져내주면, 맛이 깔끔해진답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5cac1e4e0fbac02bda221e22d0fbfe0b1.jpg',
        recipeId: 8,
    },
    {
        mNum: 68,
        mContent: '이제 양파를 넣고 3분 끓인 후,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/e6e18a63a0701ad0069a026817a4df5a1.jpg',
        recipeId: 8,
    },
    {
        mNum: 69,
        mContent: '대파를 넣어주면 오늘의 요리 끝. 국물 농도는 취향껏! 여기서 더 끓이셔도 OK.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/89ff32a8ad27e2eb1e6e4adef00f7d941.jpg',
        recipeId: 8,
    },
    {
        mNum: 70,
        mContent: '끓여가면서 먹으면, 더욱 맛있게 즐길 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/980b150fb48ea7fc762ec6bba13369981.jpg',
        recipeId: 8,
    },
    {
        mNum: 71,
        mContent:
            '먼저 채소를 손질해 볼게요. 양파와 고추는 0.3cm 두께로 썰어주시고, 부추는 세척 후에 4cm 간격으로 자를게요. 그리고 쪽파는 송송 썰어 고명용으로 준비 해 보겠습니다. 매콤한 고추를 넣으시면 오늘 맑은 국물요리지만 한결 깔끔하고 개운한 맛으로 완성하실 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/69841bc53170363b2b515e6985c0fdf01.jpg',
        recipeId: 9,
    },
    {
        mNum: 72,
        mContent:
            '주키니 호박은 긴 방향으로 2등분 한 다음, 0.3cm 정도로 어슷하게 편썰기해서 준비할게요. 물론 애호박을 사용하셔도 좋습니다. 저는 호박 듬뿍 넣어 만들면 국물이 달큰해서 더 좋더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/6f90b85146f86fedfbf7b054a525b34c1.jpg',
        recipeId: 9,
    },
    {
        mNum: 73,
        mContent: '풍성한 식감 더해줄 느타리버섯은 손으로 먹기 좋게 찢어서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/62881edfbce97ca404bc8213d128c7f71.jpg',
        recipeId: 9,
    },
    {
        mNum: 74,
        mContent:
            '칼국수는 역시 국물이 포인트죠? 바지락과 양파를 먼저 넣고 한소끔 끓여 육수를 만들어주세요. 토론토에서는 생물 바지락 구입이 어려워, 해감 후 자숙된 제품을 사용하였습니다. 생물을 사용하시는 경우에는 약한(약10%)소금물에 바지락을 30분 담가 해감 후 사용하시면 깔끔하게 완성 가능해요. 육수가 한소끔 끓어오르면, 소금1/2T,후추1/3t,국간장1/2T로 기호에 맞게 간을 맞추어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/0ec8b3951dc7ecf959bfc0a6c0dabc611.jpg',
        recipeId: 9,
    },
    {
        mNum: 75,
        mContent: '그리고 버섯,호박을 넣고 한소끔 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/4eb3d5160c9b3e3e69cae7dc2ea9f0861.jpg',
        recipeId: 9,
    },
    {
        mNum: 76,
        mContent:
            '칼국수 황금레시피 요리꿀팁! 그 사이, 넉넉한 물에 칼국수 생면을 따로 삶아주세요. 보통 덧가루가 많이 묻어있어서 그대로 사용하면 국물이 탁해지더라구요. 이렇게 따로 삶아 사용하시면 한결 깔끔하게 완성하실 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/96934be6c505c33fe3e9a84849074b6f1.jpg',
        recipeId: 9,
    },
    {
        mNum: 77,
        mContent:
            '끓고있는 육수에 살짝 데친 면을 넣고 한소끔 팔팔 끓여 주신 다음 부추,고추를 마저 넣고 다진마늘로 마무리 해 주시면 완성! 국물을 깔끔하게 하고 싶으시다면, 체에 다진마늘을 걸러 즙만 사용하셔도 좋답니다. 집에서도 푸짐하게 즐길 수 있어 좋겠죠? 바지락 듬뿍넣고 만들어도 외식하면서 사먹는 비용보다 적기 때문에 더욱 넉넉하게 즐길 수 있는 것 같아요. 오늘은 쌀쌀한 날씨에 더욱 생각나는 국물요리, 칼국수 황금레시피로 여러분과 함께했습니다. 조미료 없이도 바지락이면 개운하고 깊은 국물맛을 낼 수 있어 가정에서도 쉽게 성공이 가능한 메뉴랍니다. 오늘 저녁 넉넉히 만들어 즐겨보시면 어떨까요?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1f89072829550a6cfc83a08ab1d5076f1.jpg',
        recipeId: 9,
    },
    {
        mNum: 78,
        mContent: '오이 1개, 상추 5장, 양파 1/4, 당근 조금을 썰어서 준비를 해둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fd93e216bb5561623f46c2abe24e06f11.jpg',
        recipeId: 10,
    },
    {
        mNum: 79,
        mContent:
            '간장 4, 식초 2, 올리고당 1, 고춧가루 3, 다진 마늘 0.5, 파 1, 들기름 2, 들깨가루 1을 넣고 섞어서 양념을 만들어줍니다. 맛을 보시고 단맛이든 짠맛이든 추가하시면 되겠죠? 매운맛을 원하시면 청양고추를 썰어 넣으시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b4d4c4c7c9122816ed9a22ce755826211.jpg',
        recipeId: 10,
    },
    {
        mNum: 80,
        mContent:
            '오늘의 요리의 메인 재료이지요. 도토리묵...제가 드디어 물결 모양의 칼을 샀답니다. 사려고 할 땐 안 나타나더니 갑자기 눈에 띄어서 샀지요. 결론은 물결 칼을 사는 바람에 도토리묵무침을 하게 되었다는 말이랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d4bea8fb1faf21d4d0a5a12af35ecc641.jpg',
        recipeId: 10,
    },
    {
        mNum: 81,
        mContent: '준비한 재료들 넣고 살살 무쳐주세요. 묵이 망가질 수 있으니 조심스럽게~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/461dcce29f2a7a5f22db5bb14e3480d51.jpg',
        recipeId: 10,
    },
    {
        mNum: 82,
        mContent: '고춧가루가 모자란듯해서 1큰술 더 넣고 들기름 1큰술, 소금 살짝, 통깨 팍팍 넣어줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/351294b7837c50241ce36eda80d7ddc01.jpg',
        recipeId: 10,
    },
    {
        mNum: 83,
        mContent: '도토리묵무침 오랜만에 무쳐봤어요. 물결칼이 얼마나 잘 되나 확인하려고 했지만 잘 썰리고 난 메뉴 하나 완성하고 한 끼도 해결~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3a2a63d5ecc1a89851cd196ebc96c6c81.jpg',
        recipeId: 10,
    },
    {
        mNum: 84,
        mContent: '초록색이 강하고 작은 녀석이 바로 음나무순입니다. 끝부분만 잘라서 제거하고 크기에 따라 3등분 정도로 나눠 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e8806859666dfca2b8a7465dc766488c1.jpg',
        recipeId: 11,
    },
    {
        mNum: 85,
        mContent:
            '달궈진 팬에 다진마늘을 넣고 볶다가 음나무순을 넣고 같이 볶아 줍니다. 두릅나물볶음이나 초이삼볶음과 꼭같지요. 그리고 간은 피쉬소스나 액젓으로 해 주시고 매실액을 넣어 쌉싸름하고 쓴맛을 조금 잡아 주었습니다. 단시간에 재빠르게 센불에서 볶아 주시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9fe52f6ef60c3e44a010459f749178641.jpg',
        recipeId: 11,
    },
    {
        mNum: 86,
        mContent: '통깨 솔솔 뿌려서 마무리!!! 쉽고 간단하게 만든 음나무순 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2101edbec3101be4f89615270a54269d1.jpg',
        recipeId: 11,
    },
    {
        mNum: 87,
        mContent: '떡을 물에 담궈 두세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/41c2f75ce55d47e3e573784428c1de381.jpg',
        recipeId: 12,
    },
    {
        mNum: 88,
        mContent: '달걀두개를 흰자.노른자 분리해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2ac7a10ff9c0b58fd5de1c9d9f4eff7d1.jpg',
        recipeId: 12,
    },
    {
        mNum: 89,
        mContent: '흰자를 앞뒤 바싹부친후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a169c08577053f17a57652e319e17a1f1.jpg',
        recipeId: 12,
    },
    {
        mNum: 90,
        mContent: '노른자도 부어 앞뒤 굽고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ce8a721f479a700ccdc0051d845200c31.jpg',
        recipeId: 12,
    },
    {
        mNum: 91,
        mContent: '모양틀을 준비합니다 .ㅡ다이소에서 구매가능해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e99e8e7dc6303d192ef60a0de8d533991.jpg',
        recipeId: 12,
    },
    {
        mNum: 92,
        mContent: '지단위에 모양틀을 찍어서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f675aeace48172b97b5950a02f05c3d01.jpg',
        recipeId: 12,
    },
    {
        mNum: 93,
        mContent: '모양낸후 짜투리 지단도 채썰어 고명으로 쓰세요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/dd52484af2e4e7a2d25287b3e49627ad1.jpg',
        recipeId: 12,
    },
    {
        mNum: 94,
        mContent: '조미김 하나를 잘게 썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d1c3745c33ec587ebb104763df0c8f131.jpg',
        recipeId: 12,
    },
    {
        mNum: 95,
        mContent: '소고기를 잘게썰어 팬에 센불로',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ab9506557f97533c8226ec8933c7c9fa1.jpg',
        recipeId: 12,
    },
    {
        mNum: 96,
        mContent: '소금후추를 조금간을하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/efcbf653c61de092ec2e78eb4dff7b611.jpg',
        recipeId: 12,
    },
    {
        mNum: 97,
        mContent: '굴소스1t.들기름1t.통깨 조금넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/12e71b695ce395071ea48ced502d3a451.jpg',
        recipeId: 12,
    },
    {
        mNum: 98,
        mContent: '고명을 한접시 담아 준비하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a7e03ea4d7bf90d79650ff648416eb081.jpg',
        recipeId: 12,
    },
    {
        mNum: 99,
        mContent: '시판용 사골곰탕 1리터넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/43e8db5f0ec3e9f862336845967ec1481.jpg',
        recipeId: 12,
    },
    {
        mNum: 100,
        mContent: '냉동만두넣고 떡국떡 넣고 끓이다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cf14af5ad41c00cef142532ea56172f31.jpg',
        recipeId: 12,
    },
    {
        mNum: 101,
        mContent: '대파썰어서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7c78ed9dba03dd3a13d01bb113159ec51.jpg',
        recipeId: 12,
    },
    {
        mNum: 102,
        mContent: '마지막에 넣어주세요 ㅡ소금간은 안하셔도 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/81981ce3d84255b8209f88b52f1f26101.jpg',
        recipeId: 12,
    },
    {
        mNum: 103,
        mContent: '그릇에 떡국을 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4f8f9e6533731c30623e528441bdc5ee1.jpg',
        recipeId: 12,
    },
    {
        mNum: 104,
        mContent: '고명을 올리세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1ac3671e59e6fb0d3d9068672a46436d1.jpg',
        recipeId: 12,
    },
    {
        mNum: 105,
        mContent: '시리얼을 준비해요.( 켈로그 고소한 현미 그래놀라가 좋아요.) 과일칩은 넣지 마셔요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/7ed13e59f6235397b794834d013ffc841.jpg',
        recipeId: 13,
    },
    {
        mNum: 106,
        mContent: '시리얼 1컵을 먼저 갈아 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/11a47abdf9c3204e4be3ab66a591a5601.jpg',
        recipeId: 13,
    },
    {
        mNum: 107,
        mContent: '달걀 5개를 준비해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/89daeb953c12661ee24b3660eaae01c21.jpg',
        recipeId: 13,
    },
    {
        mNum: 108,
        mContent: '우유는 반컵 준비해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/08bb202edb032b4517eaf755a7dacdd11.jpg',
        recipeId: 13,
    },
    {
        mNum: 109,
        mContent: '볶은 소금 0.5t를 넣어주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/523a517dea10f194cfa5fd61fed247b21.jpg',
        recipeId: 13,
    },
    {
        mNum: 110,
        mContent: '단맛은 농축된 우유맛이 도는 연유 2t를 준비해요.(없으면 설탕1t만 넣어 주셔요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/9ffa10a4161b28c098321f6b006304171.jpg',
        recipeId: 13,
    },
    {
        mNum: 111,
        mContent: '시리얼,달걀,소금,연유,우유를 넣고 곱게 갈아 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/1ad7e891d5839be7d892f7b0075fbd201.jpg',
        recipeId: 13,
    },
    {
        mNum: 112,
        mContent: '세라믹 냄비(뚝배기)를 불에 먼저 달궈요. 올리브유를 넣고 벽,바닥을 꼼꼼하게 붓칠을 해요. (눌러 붙는걸 방지)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/64bd5021cc0517fe1f8c0a6b526c56be1.jpg',
        recipeId: 13,
    },
    {
        mNum: 113,
        mContent: '중불에서 믹싱한 재료를 넣고 나무 젓가락으로 몽글몽글 계속 저어 주어요.(달걀찜 만들때처럼...)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/da2f1701ddcb8027b0f4b9681dd5e3441.jpg',
        recipeId: 13,
    },
    {
        mNum: 114,
        mContent: '70%이상 응집이 되면...시리얼을 적당량 넣어서 살짝 섞어 주어요. (식감)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/03a974a666e6cf811ac86c6c002ff9ce1.jpg',
        recipeId: 13,
    },
    {
        mNum: 115,
        mContent: '불을 최대 약불로 교체하고 뚜껑을 닫고 뜸을 들여요. 2분 전후 작은 구멍에 물방울이 맺혀요. 불을 꺼요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/77fa7265bd1de4827220df7277aa912a1.jpg',
        recipeId: 13,
    },
    {
        mNum: 116,
        mContent: '속이 완전히 익었는지 젓가락을 찔러 보고 묻어 나지 않으면 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/cbd1897bce59416d8d7bf29129767c981.jpg',
        recipeId: 13,
    },
    {
        mNum: 117,
        mContent: '큰 스푼으로 떠서 개인 볼에 담아 내요. 바삭한 시리얼을 좀 더 올려 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/950ab2ce027572caee9f39cfb5513e001.jpg',
        recipeId: 13,
    },
    {
        mNum: 118,
        mContent: '샐러드,우유,쥬스,과일등 브런치에 좋은 음식이랑 함께 먹어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/26/83179ac242500969f9e5435437ea13261.jpg',
        recipeId: 13,
    },
    {
        mNum: 119,
        mContent: '먼저 버섯은 0.5cm 정도의 두께로 어슷썰고, 양파역시 비슷한 두께로 슬라이스 할게요. 고명용으로 쪽파도 송송 썰어 준비하겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c21a25eb2e7f9a2bc435ec9875f7f45c1.jpg',
        recipeId: 14,
    },
    {
        mNum: 120,
        mContent: '베이컨은 2cm간격으로 잘라서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8a77ae38225906e21f970d8438a30aec1.jpg',
        recipeId: 14,
    },
    {
        mNum: 121,
        mContent: '팬을 강불에서 3분간 예열 해 주시고, 기름 없이 베이컨을 볶다가 노릇해지면 준비한 양파를 넣고 투명해지도록 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/05db0a270ab5dfbd614bcb4ab9fb17f11.jpg',
        recipeId: 14,
    },
    {
        mNum: 122,
        mContent:
            '그 다음 소스를 넣고 끓여주세요. 저는 훈제 파프리카가 첨가 된 소스로 살짝 매콤한 향이 느껴지게 사용했어요. 일반 크림소스를 사용 해 주셔도 상관없습니다. 혹은, 무가당 생크림을 넣고 농도있게 조리 해 주셔도 맛있게 완성하실 수 있습니다. 따로 생크림을 사용해서 완성하시는 경우에는, 소금과 후추로 밑간해주시면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1dc90817de6e62dd10b3d4b1c4faf1d11.jpg',
        recipeId: 14,
    },
    {
        mNum: 123,
        mContent:
            '완성된 버섯 그라탕을 오븐그릇에 담고, 모짜렐라치즈 100g, 약 한줌 정도 넉넉히 올려 오븐 윗불(200도)에 치즈가 녹도록 약 7분정도 구워 내 주시면 완성! 색다른 새송이버섯요리 그라탕만들기 완성! 비쥬얼도 훌륭해서 집들이 음식으로 손색없겠죠? 오늘은 어렵지 않게 완성 가능한 집들이 음식, 그라탕만들기 레시피로 함께했습니다. 풍성하게 만들어 즐길 수 있었습니다. 간편히 준비해서 기분 좋게 즐겨보시면 어떨까요? 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2b46ba1252a47bc1c15bf5c174830b3e1.jpg',
        recipeId: 14,
    },
    {
        mNum: 124,
        mContent: '먼저 양파와 고추는 사방 0.5cm 크기로 다소 거칠게 다져주시고, 마늘은 0.3cm 정도 두께로 편썰어 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d66e85bb68447c27045b9a8361288af01.jpg',
        recipeId: 15,
    },
    {
        mNum: 125,
        mContent:
            '저는 신선한 생 홍합을 항상 구하기 쉽지는 않은데 이번에 마트에 있어서 구입했어요. 자숙홍합을 사용하셔도 간편하고 좋지만, 역시 신선한 홍합을 사용하시면 더욱 맛과 풍미가 좋답니다. 손질 된 것이라도 흐르는 물에 씻어주시고, 이물질이 많이 묻어있다면 세척용 솔로 껍질을 문질러 닦아주시고 수염은 뜯어내서 준비할게요. 사케는 저렴하면서 꽤 향도 괜찮은 하쿠쯔루 사케를 준비했습니다. 재료 준비에서 말씀드린 것 처럼, 청주나 와인으로 대체하실수도 있답니다. 홍합 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b7fb46bf28f4bf0e079a17588d44cdee1.jpg',
        recipeId: 15,
    },
    {
        mNum: 126,
        mContent:
            '강불에서 3분간 예열한 팬에 올리브유1T를 두르고, 마늘,고추,양파 준비한 것을 넣고 2분동안 향이 나게 볶아주세요. 그리고 소금1/3t,후추1/3t 이렇게 넣고 약하게 간을 해 줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0fae334bdd4b214ff012006b83a7e3441.jpg',
        recipeId: 15,
    },
    {
        mNum: 127,
        mContent: '이제 손질한 홍합을 넣어줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2a781d45d44dc3f570b088cf98be09b01.jpg',
        recipeId: 15,
    },
    {
        mNum: 128,
        mContent: '그리고 사케100mL를 붓고 향이 날아가지 않게 뚜껑을 덮어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/da7ac88b8343d4120f62b2361e231a061.jpg',
        recipeId: 15,
    },
    {
        mNum: 129,
        mContent:
            '촉촉한 육질을 그대로 유지하기 위해, 뚜껑을 덮은 시점을 기준으로 8분간 조리할게요. 너무 오래 조리하시면 홍합 살이 푸석푸석 해 질 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/01f5ebdbf62664d9ca5cd18a1dfc50571.jpg',
        recipeId: 15,
    },
    {
        mNum: 130,
        mContent:
            '그리고 쪽파를 솔솔 뿌려주시면? 먹음직한 와인안주 사케홍합술찜 완성! 제법 푸짐하죠? 홍합자체에 짠맛이 있기 때문에 사실 따로 간을 하지 않으셔도 되어요. 촉촉하고 쫄깃한 홍합 속살, 그리고 풍미 좋은 국물한모금. 여기에 깔끔한 와인 한잔! 그야말로 금상첨화겠죠? 바게트에 곁들여서 식사처럼 즐겨도 좋답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e6e0fc8401d4438d0cb9615dd7e1eefe1.jpg',
        recipeId: 15,
    },
    {
        mNum: 131,
        mContent:
            '먼저 애호박은 두께 0.3cm 길이 5cm 정도로 채썰고, 부추역시 5cm 정도로 잘라주세요. 그리고 개운한 맛을 더해 줄 고추는 , 잘게 다져서 준비하겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9eb80aa589a786fcd03857d98fb2bb0d1.jpg',
        recipeId: 16,
    },
    {
        mNum: 132,
        mContent: '새우살은 크기에 따라 그대로 사용하시거나 혹은 1cm정도 크기로 먹기 좋게 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d73997ee88d1fabfdd9455d1f0980c981.jpg',
        recipeId: 16,
    },
    {
        mNum: 133,
        mContent: '준비한 채소와 새우에, 부침가루 200g 그리고 물150mL를 넣고 가볍게 잘 섞어서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/92f8be8dfb3f910563fa8784ed3387671.jpg',
        recipeId: 16,
    },
    {
        mNum: 134,
        mContent:
            '바삭하고 고소한 부추전을 만들기 위해, 강불에서 3분간 예열한 팬에 기름은 한 번 부치 실 때 두큰술 정도 넉넉히 두르고, 반죽을 떠서 얇고 넓게 잘 펴주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7d1b2f7bc6fb871831813495793cc3b81.jpg',
        recipeId: 16,
    },
    {
        mNum: 135,
        mContent:
            '한쪽면당 3~4분정도 노릇하게 충분하게 익혀주세요. 양쪽모두 바삭하게 익히시려면, 한번 뒤집고 식용유 반큰술 정도 한번 더 흘려넣어 주시면 좋습니다.초간장을 곁들여 내 주시면 먹음직한 부추전 만드는법 완성! 바삭하게 즐기기 너무 좋겠죠? 막걸리 안주로 역시 이만한게 없더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/426b70e2b6a02ce224e41b5474562f1d1.jpg',
        recipeId: 16,
    },
    {
        mNum: 136,
        mContent: '사골 스지 알스지는 물에 담가 소주를 넣고 핏물을 뺍니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 137,
        mContent: '핏물이 빠진 사골은 한소끔 끓여 찬물에 헹굽니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 138,
        mContent: '사골에 쌀뜨물을 붓고 끓입니다 다시망에 파뿌리를 넣습니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 139,
        mContent: '물이 끓기 시작하면 다시망 스지 알스지를 넣습니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 140,
        mContent: '두시간 끓인후 스지를 건지고 한시간후 알스지를 건집니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 141,
        mContent: '스지 알스지를 기름을 제거하고 썰어놓습니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 142,
        mContent: '웍에 스지를 넣고 순서에 따라 양념을 기호에 맞게 합니다',
        mPicture: '',
        recipeId: 17,
    },
    {
        mNum: 143,
        mContent:
            '먼저 채소와 소세지를 손질해볼게요. 채소는 사방2cm 정도로 잘라주시고, 소세지 역시 비슷하게 자른 다음 칼집을 십자로 내서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/724fd969e2b92ffbd2a2daddafc8dab01.jpg',
        recipeId: 18,
    },
    {
        mNum: 144,
        mContent:
            '오늘 더욱 먹음직하게 만들어 줄 매콤소스는, 고추장1T,바베큐소스2T, 설탕1/2T,케첩1T,물1T, 다진마늘1/2T,다진고추1T 위의 재료를 넣고 섞어서 완성할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/61e56e8581a6150d448c361b04bf9e6c1.jpg',
        recipeId: 18,
    },
    {
        mNum: 145,
        mContent: '그리고 강불에서 3분 예열한 팬에, 식용유1T를 두르고 중불로 낮춘다음 소세지를 노릇하게 3분정도 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/34c790a982f2ad0d3ab866e25c536c741.jpg',
        recipeId: 18,
    },
    {
        mNum: 146,
        mContent: '그리고 준비한 갖은 채소를 넣고 강불에서 2분정도 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1bacc34a8ff21b3ea9c4363696e413901.jpg',
        recipeId: 18,
    },
    {
        mNum: 147,
        mContent: '이제 준비한 매콤 소스를 넣고 한번 더 바짝 볶아주시면, 먹음직한 소세지야채볶음 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/67d4863f448cd3fa691a9384091f908b1.jpg',
        recipeId: 18,
    },
    {
        mNum: 148,
        mContent:
            '이렇게 깨를 솔솔 뿌려 상에 내시면 더욱 그 맛깔스러움이 더해지겠죠? 뽀득뽀득, 식감 좋은 소세지. 역시 가끔 꼭 챙겨 먹게 되는 것 같아요. 오늘은 전국민이 사랑하는 소세지야채볶음 쏘야 황금레시피로 함께했습니다. 간단하게 완성할 수 있어서 딱히 부담없이 편하게 만들 수 있는 것 같아요. 매운 고추 넣어 더욱 매콤하게, 맛있게 즐겨보시길 바랄게요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a99d47d25e000f61b3f0a0ad0e45aad31.jpg',
        recipeId: 18,
    },
    {
        mNum: 149,
        mContent: '먼저 당면과 떡은 물에 담가 불려줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4f5d5f55baa6b2d85864850e64cbdcae1.jpg',
        recipeId: 19,
    },
    {
        mNum: 150,
        mContent:
            '파는 세로방향으로 2등분 후 5cm 간격으로 잘라준비하고, 양파는 큼직하게 사방 1.5cm 정도로 깍뚝썰기해서 손질하겠습니다. 양파 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/510c5c2485b22627df65cba24e857d5b1.jpg',
        recipeId: 19,
    },
    {
        mNum: 151,
        mContent: '감자역시 양파와 비슷하게 자른 뒤, 차가운 물에 담가 갈변현상을 방지해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9dca225dbea85c20143bb89a368612b91.jpg',
        recipeId: 19,
    },
    {
        mNum: 152,
        mContent:
            '오늘 닭도리탕 황금레시피의 꿀팁! 닭볶음탕 국물의 맛을 깔끔하고 또 깊이 있게 만들어줄 재료가 바로 오징어에요. 껍질이 붙어있지 않은 손질 링오징어를 냉동제품으로 저렴하게 구입해 자주 사용중이랍니다. 특히, 주재료가 닭고기인 오늘 요리에 껍질 없이 잘 손질 된 오징어 살을 넣으면 닭고기 자체의 맛은 진하게 유지되면서 감칠맛 성분이 적절히 배어나와 한결 국물의 맛이 깊고 풍미가 좋아집니다. 오늘의 중요한 포인트는, 닭볶음탕의 닭고기 맛은 지키되, 자연스럽게 감칠맛을 더하는거에요! 해물닭볶음탕과는 다른 컨셉이랍니다 :) 오징어 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/37dd0c7be4abfabd262c861e53d13d571.jpg',
        recipeId: 19,
    },
    {
        mNum: 153,
        mContent:
            '요리의 완성도를 좌우하는 양념장은 고추장2T,고춧가루2T,간장1/2T, 굴소스1T,맛술1T,다진마늘1T, 후춧가루1/3t,카레가루1/2T,물4T 위의 재료를 사용해 섞어주시고, 첨가하실때는 한번에 다 넣지 마시고 70%정도 넣으신 다음 간을 보고 부족하다 싶으면 그때 더 넣어주시면 좋을 것 같아요. 사용하시는 조미료의 상태나, 혹은 수입 제품도 자주 사용하게 되는 요즘은 생산회사에 따라 염도에 차이가 꽤 나는 편이더라구요. 카레가루는 잡내를 잡아주는 정도로 아주 소량만 넣어 주시면 좋습니다. 너무 많이 들어가게 되면 카레 향이 짙어서 오히려 맛을 떨어뜨릴 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/db6de5264fcea9e8bda4f3330ea27b8f1.jpg',
        recipeId: 19,
    },
    {
        mNum: 154,
        mContent:
            '먼저 냄비에 닭고기가 잠길만큼 물을 넉넉하게 부어주신 다음 닭을 넣고 초벌삶기 해 주세요. 이 과정에서 핏물도 어느정도 제거되고, 불필요한 기름을 한번 제거할 수 있답니다. 저는 선호하는 분위인 닭다리살을 이용해 오늘 완성해볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4b816e11a03744cb8861b3adf6ab615f1.jpg',
        recipeId: 19,
    },
    {
        mNum: 155,
        mContent:
            '닭고기를 깔끔하게 데친 다음, 새로 냄비에 다시 담고 물700mL를 넣고 양념장을 넣은 뒤 끓이기 시작 해 주세요. 인분을 추가하여 조리하실 경우, 무조건 물의 양을 그 배수로 계산하시지 말고, 닭고기가 넉넉히 잠기는 정도로 하신 다음 간의 세기나 국물 농도에 따라 물을 가감 해 주시면 더욱 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/875fbde243c28276ae00446c3c1dbda21.jpg',
        recipeId: 19,
    },
    {
        mNum: 156,
        mContent: '물이 한소끔 끓어오르면, 양파를 넣고 조리를 계속 해 주세요. 뚜껑을 덮고 중약불에서 10분 끓일게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e100205066a7a035614699b5c46dcc831.jpg',
        recipeId: 19,
    },
    {
        mNum: 157,
        mContent: '그리고 감자를 넣고 뚜껑을 덮고, 15분간 더 조리 해 주세요. 중불정도의 불세기가 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fcf286e598141cb257c068d0382c5a2e1.jpg',
        recipeId: 19,
    },
    {
        mNum: 158,
        mContent: '이제 오징어와 파를 넣고 한소끔 더 팔팔 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3d0845c3606caceef4d7039a6b08e1361.jpg',
        recipeId: 19,
    },
    {
        mNum: 159,
        mContent: '불린 당면과 떡을 넣고, 한번 더 우르르 끓여주시면 먹음직한 닭도리탕 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/26346a3af6db21f8499bb54b4d11950d1.jpg',
        recipeId: 19,
    },
    {
        mNum: 160,
        mContent: '먼저 배추는 2cm 정도 간격으로 먹기 좋게 손질해서 준비할게요. 배추 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5e548a2bee78b0e3f07faf594be467c91.jpg',
        recipeId: 20,
    },
    {
        mNum: 161,
        mContent:
            '국물을 깔끔하고 얼큰하게 해 줄 고추는 1개 가볍게 다져서 준비해주세요. 취향에 따라 양을 조절하셔서 더욱 매콤하게 즐기셔도 좋습니다. 저는 할라피뇨를 사용했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1b0c3c1a38b7574a325d1c6ef67af7af1.jpg',
        recipeId: 20,
    },
    {
        mNum: 162,
        mContent: '두부는 사방 1cm 정도 크기로 먹기 좋게 손질 해 둘게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1bba9eb48b5fac7934373aab8986fa021.jpg',
        recipeId: 20,
    },
    {
        mNum: 163,
        mContent: '국물맛을 내기 위해서 저는 손질 된 바지락을 오늘 사용해볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8898ade3d8b72cf475c866b3ef2488771.jpg',
        recipeId: 20,
    },
    {
        mNum: 164,
        mContent:
            '쌀의 수용성 성분이 녹아들어 한결 구수한 맛을 내기 좋은 쌀뜨물은 쌀을 두번헹군 다음 나온 물을 사용했습니다. 냄비에 넣고 배추와 함께 먼저 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fd0425e1366a7aa23b4e1b4b0abe73141.jpg',
        recipeId: 20,
    },
    {
        mNum: 165,
        mContent:
            '국간장1/2T로 밑간을 살짝 하고, 집된장1T와 미소된장1/2T를 넣고 체에 바쳐 잘 풀어주세요. 저는 콩 건더기가 보이는게 좋아서 체를 사용한 뒤에 건더기를 넣었는데 국물이 더욱 깔끔한게 좋으시다면 체에 걸로 건더기는 사용 안하셔도 좋습니다. 집된장과 미소된장을 같이 사용하시면 된장국 빛깔이 더욱 곱고 감칠맛이 돌아 맛있게 된장국을 완성하실 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d0ce79f208ae27e422715f2e24b009c51.jpg',
        recipeId: 20,
    },
    {
        mNum: 166,
        mContent:
            '+ Tip 된장찌개를 끓일 때에는 된장으로만 간을하면 좋지만 된장국은 맛이 찌개보다 가벼워야 좋기 때문에 된장의 양을 늘리시는 것 보다 간이 부족할 땐 소금으로 채워주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f5ff08c5811f21f9c801eb1ebe9249b31.jpg',
        recipeId: 20,
    },
    {
        mNum: 167,
        mContent:
            '이제 바지락과 두부를 넣고 한소끔 더 끓여주세요. 다진마늘과 고추를 살짝 넣고 한소끔 더 끓여서, 송송썬 쪽파 올려 완성 해 주시면 끝! 달큰한 배추된장국 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b934bc06f9b1a21e880e82ac8a91bd871.jpg',
        recipeId: 20,
    },
    {
        mNum: 168,
        mContent: '따뜻할 때 두부 듬뿍 넣어서, 밥한그릇 곁들이면 든든하고 좋더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e87fd39c157ef80d099f4fb3f195f9441.jpg',
        recipeId: 20,
    },
    {
        mNum: 169,
        mContent:
            '먼저 육수를 만들어볼게요. 면과 죽까지 넉넉하게 즐길 예정이라, 평소보다 물 양을 많이 잡아주세요. 물2L,쯔유4T,소금1/2T,후추1/3t, 매운고추1개,다시마(4 x 4cm)2개 이렇게 넣고 한번 우르르 끓여주세요. 간단하게 샤브샤브 육수 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6ba74636b62c482f76ee575e8ec6857d1.jpg',
        recipeId: 21,
    },
    {
        mNum: 170,
        mContent: '채소는 먹기 좋게 손질할게요. 이 외에도 선호하는 채소를 얼마든지 추가하셔도 좋습니다. 청경채 대신에 배추를 사용해도 좋구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ee90f4f6b133072b98042821db8775041.jpg',
        recipeId: 21,
    },
    {
        mNum: 171,
        mContent: '팩에 담긴 고기를 접시에 담아 보기 좋게 플레이팅 해 주시면 더 좋겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/dd6c1b86963a40541688ee11e92e9ee61.jpg',
        recipeId: 21,
    },
    {
        mNum: 172,
        mContent:
            '처음에는 보여주기 용으로 육수와 채소 및 버섯을 넉넉하게 담아 주셔도 좋고 테이블 위에 세팅을 마친 후 육수에 하나씩 넣어 가면서 즐기기 시작하셔도 좋습니다. 테이블용 쿡탑이나 버너를 이럴 때 활용해 주시면 아주 좋겠죠? 그렇지 않은 경우에는 한데 넣고 한소끔 끓여 전골처럼 즐기셔도 괜찮답니다. 고기를 익혀가며 나누어 먹는 사이 이야기 나누기도 좋고 샤브샤브 과정이 복잡하지 않기 때문에 식탁에 함께 둘러 앉아 가벼운 조리에 참여할 수 있다는 점도 매력적인 것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3c56c20715216370481dc7b578d6cdd51.jpg',
        recipeId: 21,
    },
    {
        mNum: 173,
        mContent:
            '이렇게 채소와 고기를 즐겨 드셨다면, 죽과 면도 즐길 차례. 밥과 달걀을 미리 세팅 해 두면 식당에서 서빙받는 것 처럼 제대로 대접하는 기분이 들겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8d7e6e64fe8973353ae24b784f3f243e1.jpg',
        recipeId: 21,
    },
    {
        mNum: 174,
        mContent:
            '오늘은 부담없이 쉽게 준비가 가능하면서 넉넉하고 푸짐하게 즐기기 좋은 집들이음식 샤브샤브만들기 레시피로 함께했습니다. 집에서 더욱 맛있게 즐겨보세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5992668ebb6468506481b7f201b842591.jpg',
        recipeId: 21,
    },
    {
        mNum: 175,
        mContent:
            '두릅의 딱딱한 밑동 부분은 잘라 내고 질기고 단단한 겉껍질을 벗겨내 깨끗이 씻은 후 두꺼운 밑동 부분에 칼집을 2~3개 넣어 손질해 주세요. 두릅 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fdfb8493e45bb5b01221cdbb1e61c77c1.jpg',
        recipeId: 22,
    },
    {
        mNum: 176,
        mContent: '보다 바삭한 튀김을 만들기 위해 튀김가루에 물 대신 탄산수를 붓고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/eea7ade70ca4bd71d2ce1d79de3c47321.jpg',
        recipeId: 22,
    },
    {
        mNum: 177,
        mContent:
            '얼음을 3~4조각 넣어 날가루가 보이지 않을 정도로만 가볍게 저어 차가운 반죽을 만들어 주세요. 반죽이 차가울수록 바삭한 튀김이 만들어 집니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8087e57e60b03715bc5aff03ea3b0efc1.jpg',
        recipeId: 22,
    },
    {
        mNum: 178,
        mContent: '위생 비닐에 튀김가루 1~2 큰 술과 손질한 두릅을 넣고 흔들어 얇게 덧옷을 입힌 다음',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ac265613ff7ffb463ab0dfc9d4975a771.jpg',
        recipeId: 22,
    },
    {
        mNum: 179,
        mContent: '튀김 반죽에 퐁당 담갔다 건져내 얇게 옷을 입히고 반죽이 두꺼우면 튀김이 맛이 덜해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e095aa68b54d2d894ccc4b1aff46fadc1.jpg',
        recipeId: 22,
    },
    {
        mNum: 180,
        mContent:
            '170도로 예열한 기름에 넣어 초벌로 튀겨내 한 김 식으면 다시 한 번 살짝 튀겨내 남은 수분을 완전히 날려주세요. 조금 번거롭더라도 2번을 튀겨줘야 보다 바삭바삭한 튀김을 먹을 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7d0e8ef7af15d77e432b0f2355fb19b01.jpg',
        recipeId: 22,
    },
    {
        mNum: 181,
        mContent:
            '먼저 육수를 만들어보겠습니다. 물500mL에 다시마 한조각 넣고 끓이다가, 쯔유1T와 소금1t로 간한 다음에 불을 끄고 가쓰오부시를 넣고 육수를 만들어주세요. 고명용으로 약간의 가쓰오부시를 남겨주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/35d2edd5aecfad5d67b2f99de85224761.jpg',
        recipeId: 23,
    },
    {
        mNum: 182,
        mContent: '다시마를 건져주시고, 이 육수에 새우를 살짝 데치고 고명으로 준비 해 두겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8560b57c44f76a4e291b2e51bf50c6b51.jpg',
        recipeId: 23,
    },
    {
        mNum: 183,
        mContent:
            '육수가 뜨거울 때, 계란을 먼저 살짝 풀고 총 세번에 걸쳐 나누어 넣을거에요. 꼭, 한손으로는 달걀물을 계속 휘젓고 그리고 천천히 뜨거운 육수를 부어주세요. 베이킹할 때, 템퍼링 하는 바로 그 과정이랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/96b68f683a368fe240167761ec9435d61.jpg',
        recipeId: 23,
    },
    {
        mNum: 184,
        mContent: '그리고 이 믹스처를 체에 걸러주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/aa7f8b2415bd434e838d4ff134d8d9551.jpg',
        recipeId: 23,
    },
    {
        mNum: 185,
        mContent:
            '용기에 나누어 담고, 큰 냄비에 물을 채우고 지그르르 살포시 끓는 정도로 불은 약불에서 중불사이로 맞출게요. 매끈한 표면을 원하시면 랩을 씌워서 쪄 주시면 더 좋습니다. 이제 뚜껑을 덮고 30분 조리할게요. Tip. 물이 우르르 끓으면 안돼요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/29a4d691e7481f20def1e44c751d96341.jpg',
        recipeId: 23,
    },
    {
        mNum: 186,
        mContent:
            '그 사이에, 쯔유1T,물6T,설탕1/2T 위 재료로 소스를 만들어둘게요. 마지막에 위에 끼얹어서 곁들일거에요. 이렇게 준비한 고명과 소스를 보기 좋게 얹어주시면 푸딩같이 부드러운 계란찜만드는법 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e5e22d1ee2269cd1ceb706295f18f3341.jpg',
        recipeId: 23,
    },
    {
        mNum: 187,
        mContent: '냉이와 달래는 시든 잎과 흙을 긁어내고 깨끗이 씻는다. 이때 냄비에 데칠 물을 준비해 끓인다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4c9527f0b37e8b64209dadd0de3d67731.jpg',
        recipeId: 24,
    },
    {
        mNum: 188,
        mContent: '끓는 물에 소금 약간을 넣고 냉이를 약 5초 정도 데쳐 찬물에 헹군 후 물을 꼭 짠다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bb25da27e14451ee4e630801b3a33af61.jpg',
        recipeId: 24,
    },
    {
        mNum: 189,
        mContent: '물기를 제거한 냉이와 달래를 약 2cm 정도로 자른다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/92dcb7a3c5811a7c911febf9691f541e1.jpg',
        recipeId: 24,
    },
    {
        mNum: 190,
        mContent: '부침가루와 참기름, 물을 섞고 준비된 냉이와 달래를 넣어 섞어 준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/53f9081c2f5b318cd704fe79c0da20471.jpg',
        recipeId: 24,
    },
    {
        mNum: 191,
        mContent: '달군 팬에 기름을 두르고 반죽을 크게 혹은 작게 원하는 크기대로 넣어 노릇하게 부친다.',
        mPicture: '',
        recipeId: 24,
    },
    {
        mNum: 192,
        mContent:
            '먼저 채소를 손질 해 볼거에요. 양파,양송이버섯,고추 그리고 마늘은 0.3cm 정도 두께로 슬라이스 해 주시고 파는 세로방향으로 2등분 뒤 길이 4cm 정도로 잘라서 준비할게요. 파의 파란 부분은 약간만 남겨 송송썰어 고명용으로 준비 해 보겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3dcdcdb7c967b9707e4abe22e6a565f41.jpg',
        recipeId: 25,
    },
    {
        mNum: 193,
        mContent:
            '삼겹살은 큼직하게 2cm 정도 크기로 잘라주시고 새우는 살만있는 손질새우를 사용할건데 크기가 좀 큰 경우에는 2등분 해 주시면 드실 때 한결 편하답니다. 껍질이 있는 새우를 사용하셔도 좋아요. 새우 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/128c2945f6508cd4d38b00a91272766b1.jpg',
        recipeId: 25,
    },
    {
        mNum: 194,
        mContent: '매콤한 양념장을 만들어볼게요. 고추장1T,고춧가루2T,굴소스1.5T, 맛술1T,다진마늘1/2T,물1T 위의 재료를 넣고 섞어서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/75d8910448d4ccb43afacf7d1deee7cc1.jpg',
        recipeId: 25,
    },
    {
        mNum: 195,
        mContent:
            '우동면은 따로 삶지 않고 흐르는 따뜻한 물에 붙은 면을 풀어준다 생각하시고 헹궈주세요. 고온에서 단시간 볶아 완성하기 때문에 삶아 넣으시는 경우 면의 쫄깃함이 떨어지는 경우가 있을 수 있기때문에 이렇게 헹구는 정도로 해주시길 권장해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/89f61021b44dd479aa283d2bc47a7cce1.jpg',
        recipeId: 25,
    },
    {
        mNum: 196,
        mContent: '달걀프라이도 하나 부쳐서 넉넉하게 얹어 완성 해 볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1eace9d40a1bbfa8a5a188defdb00e1a1.jpg',
        recipeId: 25,
    },
    {
        mNum: 197,
        mContent:
            '팬은 먼저 3분간 강불로 가열 후, 기름 없이 삼겹살을 볶다가 기름이 어느정도 배어나오고 삼겹살이 전체적으로 노릇해지면 이때 마늘과 고추를 넣고 한번 바짝 볶은 다음 새우를 넣을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ca663d398cfe15e9912109b5263a95171.jpg',
        recipeId: 25,
    },
    {
        mNum: 198,
        mContent:
            '후추 1/3t로 향을 더하고, 숙주를 제외한 모든 채소를 넣고 한번 볶아주신 다음 양념을 더해주세요. 매콤한 볶음에 이제 우동면을 넣고 강한 불에 한번 더 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/582b7e4bf38a904348e18334c92159141.jpg',
        recipeId: 25,
    },
    {
        mNum: 199,
        mContent:
            '마지막으로 불을 끄신 다음, 참기름을 둘러 주시고 그릇에 넉넉하게 담고 준비한 고명 달걀프라이와 송송썬 파, 그리고 참깨와 가쓰오부시를 얹어주시면 입맛 돋우기 좋은 매콤한 음식, 볶음우동 만드는법 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1a7e161352f04d991c2db3e8541924ce1.jpg',
        recipeId: 25,
    },
    {
        mNum: 200,
        mContent:
            '먼저 채소부터 손질해볼게요. 양파,감자,호박,두부는 사방1.5cm 정도로 큼직하게 잘라 준비 해 주시고 고추는 다지듯 손질할게요. 버섯은 크기에 따라 그대로 사용하시거나, 손으로 먹기 좋은 크기로 찢어주세요. 감자 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/946b38e098f5b441fd520daa5976a2151.jpg',
        recipeId: 26,
    },
    {
        mNum: 201,
        mContent:
            '저는 통 목살을 구입해서 손질했는데요. 과도하게 붙은 지방부분은 제거 해 주시고 채소를 손질한 크기와 비슷하도록 사방 1.5cm 정도 크기로 잘라서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fcb996249282eec0acfb138ca194489f1.jpg',
        recipeId: 26,
    },
    {
        mNum: 202,
        mContent:
            '먼저 냄비를 강불에서 3분 예열 후, 식용유1T를 두른다음 고기를 볶을게요. 이때 소금1/2t정도와 후추1/3t로 약하게 밑간을 해서 볶아줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e341e447bad7b8ec4b0636ce685239c71.jpg',
        recipeId: 26,
    },
    {
        mNum: 203,
        mContent: '그리고 고추를 제외한 채소를 넣고 한번 섞듯이 잘 볶아주신 다음, 물 500mL를 넣고 한소끔 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4132e795038455242607506936c9b6c61.jpg',
        recipeId: 26,
    },
    {
        mNum: 204,
        mContent: '한소끔 우르르 끓어오르면 고추장1.5T,진간장1/2T,맛술1T, 고춧가루1T,다진마늘1T 위의 양념장을 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a21f1d17cecb24d30f19821d90b0c76e1.jpg',
        recipeId: 26,
    },
    {
        mNum: 205,
        mContent: '마지막으로 고추와 두부를 넣고, 우르르 한번 더 끓여주시면, 얼큰한 국물요리 고추장찌개 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d6123049981f2174c29174c08fa0bb481.jpg',
        recipeId: 26,
    },
    {
        mNum: 206,
        mContent:
            '먼저 청경채는 깨끗하게 세척 후, 크기에따라 2~3등분해서 준비할게요. 청경채는 조리하게 되면 적당한 단맛이 국물에 배어 더욱 맛이 깔끔하고 좋답니다. 특유의 아삭한 식감때문에 음식의 풍성함을 더해주기도 하구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/84046a74b1c4b7079099049205d4e4b51.jpg',
        recipeId: 27,
    },
    {
        mNum: 207,
        mContent:
            '오늘 저는 손질 해물을 넣어볼거에요. 딱히 준비하는 번거로움 없이 바로바로 국물요리에 활용도가 좋습니다. 마트에서 저렴하게 손질해물 할인할 때, 냉동고에 구입해서 보관하면 두루두루 아주 사용하기 좋더라구요. 오늘 저는 새우,바지락,오징어 이렇게 넣고 더 풍성하게 만들게요. 미리 해동해 주시면 더욱 좋고, 한번 세척해 주시면 여분의 불순물이나 불필요한 껍질이 제거되어 요리가 더욱 깔끔해져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/31e2540ef7ebc0e8e8db2b26e5759a391.jpg',
        recipeId: 27,
    },
    {
        mNum: 208,
        mContent: '우동사리는 따로 데치지 않고, 흐르는 뜨거운 물에 헹구어 뭉친면을 풀어 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2764bcf0b51edb9d552cba8cb7bbb6b61.jpg',
        recipeId: 27,
    },
    {
        mNum: 209,
        mContent:
            '깊고 깔끔한 우동국물만들기 시작해볼까요? 먼저 물400mL를 넣고 끓으면 파뿌리2개와 다시마 한조각을 넣고, 4분간 끓인 다음 조각들을 건져낼게요. 그리고, 쯔유1T로 맛을 내 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d85eb215b8db0c0070000424abe03a771.jpg',
        recipeId: 27,
    },
    {
        mNum: 210,
        mContent:
            '이 국물에 해산물을 데쳐 준비할게요. 해산물에 보통 염분기가 있어서, 데친 후에 간이 더욱 맞추어 진답니다. 이때에도 싱겁다고 느껴지신다면, 소금살짝 넣어 부족한 간을 채워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1ae5fb7a5a9f84b17a4858426cd057ba1.jpg',
        recipeId: 27,
    },
    {
        mNum: 211,
        mContent: '한소끔 끓어오른 해물 국물에, 청경채를 넣고 3분간 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c4a651d8428e37003eae4a57c7b3636e1.jpg',
        recipeId: 27,
    },
    {
        mNum: 212,
        mContent: '국물에 떠오른 불순물을 한번 깔끔하게 걸러주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c53a86907de9a20914358f195c1321f01.jpg',
        recipeId: 27,
    },
    {
        mNum: 213,
        mContent: '그리고 면을 넣고 우르르 끓여주시고, 해산물 데친것을 먹기 좋게 얹어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0f37f258005aad27bb14701fb10ff91a1.jpg',
        recipeId: 27,
    },
    {
        mNum: 214,
        mContent: '여기에 마지막으로 가쓰오부시를 얹어 푸짐하게 담아주시면 깊고 깔끔한 우동국물만들기, 가쓰오우동 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3f5a6a4f5d15f12a5e5bcf4e7b005cbd1.jpg',
        recipeId: 27,
    },
    {
        mNum: 215,
        mContent:
            '먼저 신선한 달걀을 준비해주세요. 둥글게 예쁜 모양이 잡힌 최상의 수란을 위해선 신선한 달걀이 중요해요. 하다가 1개 정도 실패할 경우를 대비 해 한개정도 더 넉넉하게 준비하시면 좋습니다. 곁들일 채소인 양송이 버섯은 두툼하게 1cm 정도 두께로 슬라이스할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b76d5ee6710c0479bc7ffc2e0d599d301.jpg',
        recipeId: 28,
    },
    {
        mNum: 216,
        mContent:
            '수란 만드실 때 중요한게 바로 냄비인데요. 어느정도 깊이감이 있어야 좋습니다. 그리고 물의 아주 넉넉히 채워주세요. 저는 3L용량의 냄비에 2.5L물을 채웠어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3ed3135fc31b3453f7c6888b9c9cd1581.jpg',
        recipeId: 28,
    },
    {
        mNum: 217,
        mContent:
            '그리고 식초를 넣어줄게요. 식초는 65mL, 약 4큰술 반정도 넉넉히 넣어주세요. 이때, 물에 소금은 넣지 말아주세요! 식초가 나중에 수란을 만들 때 계란이 물속에 들어감과 동시에 모양을 잡아가며 응고될 수 있게 도와준답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c36a51c0d71eb6c4a91cb3ea4e8367161.jpg',
        recipeId: 28,
    },
    {
        mNum: 218,
        mContent: '물과 식초 믹스쳐가 끓을 때 까지 베이컨과 버섯을 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9bb2fb03ae4f93528c39c4522c4afbf91.jpg',
        recipeId: 28,
    },
    {
        mNum: 219,
        mContent:
            '많은 분들이 수란을 만드실 때, 물은 끓여야 하는건지 미지근할때 넣어야 하는건지, 헷갈려하시는 분들이 많은데요. 사실 한국말로 설명이 어려운 부분인데, Simmering 시머링 되는 순간 달걀을 넣습니다. 보글보글 끓기 전 단계에 기포가 포르르~ 올라올 때 있죠? 아직 바짝 우르르 끓는다고 생각이 되지 않는 그 때, 바로 그 때 달걀을 넣어주시면 가장 좋아요. 시머링이 우리나라에선 익숙한 단계가 아니기 때문에 혹시 애매하다, 나는 헷갈린다 싶으시면, 차라리 물을 한소끔 끓이시고 불을 중약불로 줄여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/de98a77e83feaa3d599833fa9095561a1.jpg',
        recipeId: 28,
    },
    {
        mNum: 220,
        mContent:
            '자 이제 계란을 넣어줄게요. 달걀을 투입하실 때 에는 거의 물쪽에 껍질이 닿도록 그래서 깨뜨린 달걀이 충격없이 살포시 물속에 들어가 자리를 잡고 동그랗고 탄력있는 모양을 잡게 도와주세요. 물이 뜨거워 보통 위에서 투척(?) 하시는 분들이 많은데 그러면 물과 부딧혀 들어가는 충격으로 인해 한쪽 면이 눌린 모습으로 익게되어요. 그리고 오히려 물이 튈 위험이 있다는 사실! 조심조심 물에 가까이 대고 달걀이 충격없이 미끄러지듯 들어가게 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/90c081b0adc1e9544178152188cba9fd1.jpg',
        recipeId: 28,
    },
    {
        mNum: 221,
        mContent:
            '달걀은 오늘 물 용량기준 최대 6~7개 까지 한번에 조리가 가능합니다. 모두 달걀을 넣으신 다음에는 떠오르는 흰자의 날개부분, 위로 펄럭거리는 부분을 제거할게요. 이렇게 해 주셔야 수란의 표면이 매끄럽고 더욱 먹음직하게 완성할 수 있습니다. 불은 중약불이 적당해요. 달걀이 너무 차가워서 물 온도가 내려갔다면 이때 강불로 잠시 올려주셔도 좋습니다. 기포가 올라오기 시작하면 그때 불을 다시 줄여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/90d6f10879dc3c633ec493b711f377661.jpg',
        recipeId: 28,
    },
    {
        mNum: 222,
        mContent:
            '수란의 생명은 갈랐을 때, 부드럽게 흘러내리는 노른자인데요. 물속에 들어간 시점으로 3분정도면 미디움 정도로 적당히 익습니다. 익힘 단계를 알아볼까요? Poached Soft : 물 속 들어간 후 3~4분 Poached Medium :물 속 들어간 후 4~5분 Poached Hard : 물 속 들어간 후 5~7분 수란을 영어로 포지드 에그라고 하는데요, 포치라고 읽는 이 단어가 우리가 흔히 말하는 "파우치"를 뜻해요. 파우치처럼 둥글고 몽글한 모양으로 물 속에서 삶아지는 계란요리랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e69b2367d0a072a7de7beec0256c86ef1.jpg',
        recipeId: 28,
    },
    {
        mNum: 223,
        mContent:
            '체로 달걀을 들어올렸을 때 풀어지려하지 않고 그 둥근 형태를 그대로 유지하고 있다면 사실 조리가 다 되었다고 보시면 되어요. 이때 실온에 두고 2분정도 기다릴게요. 이 시간동안에도 조리가 진행된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c23945b5c1e7f7b54592479101be93611.jpg',
        recipeId: 28,
    },
    {
        mNum: 224,
        mContent: '그 사이, 커피한잔 준비해 주시면 더 완벽한 브런치만들기가 가능하겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/077557955fdc0505c351353fa8af74d51.jpg',
        recipeId: 28,
    },
    {
        mNum: 225,
        mContent:
            '구운 베이컨과 버섯, 그리고 수란을 보기 좋게 담고 저는 파를 어슷하게 썰어 얹어봤어요. 이제 드시기 직전에 소금 후추로 살짝 간하고, 엑스트라 버진 올리브오일을 뿌려 그 완벽한 풍미까지 더해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/81bc31523d20e228603ab3f8a21821461.jpg',
        recipeId: 28,
    },
    {
        mNum: 226,
        mContent:
            '먼저 떡은 찬물에 담가 불려주시고 쪽파는 송송썰어 고명으로 준비할게요. 그리고 파의 흰 부분은 육수에 활용 해 볼거에요. 어묵은 사방2~3cm 정도로 먹기 좋은 크기로 잘라서 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/71edcf5d4c38e5c4a1514ae8cf54fb0a1.jpg',
        recipeId: 29,
    },
    {
        mNum: 227,
        mContent: '계란도 하나 삶아볼까요?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f7a73a971c967a838a0e761590b19de21.jpg',
        recipeId: 29,
    },
    {
        mNum: 228,
        mContent: '기본 육수를 만들어볼게요. 물600mL에 파 흰부분과 다시마를 넣고 끓기 시작한 시점을 기준으로 5분 뒤에 건더기를 건져줄거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/10d0338ac2b7eae1dce0c49bf85b85441.jpg',
        recipeId: 29,
    },
    {
        mNum: 229,
        mContent: '기본 육수를 만들어볼게요. 물600mL에 파 흰부분과 다시마를 넣고 끓기 시작한 시점을 기준으로 5분 뒤에 건더기를 건져줄거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7c7978494b6a346aa75efd2d5c847ba81.jpg',
        recipeId: 29,
    },
    {
        mNum: 230,
        mContent:
            '육수가 되는 5분 사이, 저희는 양념장을 준비하면 되겠죠? 고추장2T,고춧가루1T,간장1/2T, 설탕1T,다진마늘1/2T,라면스프1/2봉지 이렇게 넣고 섞어주세요. 조미료가 들어간 라면스프 사용이 꺼려지신다면 여기에 간장이나 굴소스를 첨가해서 부족한 간과 감칠맛을 더해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/754e2700fbbe8309fa2cfaf588260a4d1.jpg',
        recipeId: 29,
    },
    {
        mNum: 231,
        mContent: '끓은 육수에 양념장을 넣고 잘 풀어서 한소끔 끓여주세요. 우르르 끓으면 라면을 먼저 넣을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cadea323befc00e775fd4922756f7a5c1.jpg',
        recipeId: 29,
    },
    {
        mNum: 232,
        mContent:
            '그리고 바로 떡과 어묵을 넣어주세요. 떡을 불려두었기 때문에 라면삶는 시간과 거의 비슷하게 조리를 해 주셔도 익는 속도가 크게 다르지 않답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f39eed8aac4ee34458d139d854b8687d1.jpg',
        recipeId: 29,
    },
    {
        mNum: 233,
        mContent:
            '그리고 바글바글 4분정도 끓여주시면 맛있는 떡볶이 완성! 왠지 간이 부족하다 싶으시면? 남은 라면스프를 활용해 부족한 간을 채워주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/10ce991f451eb9533a5ff206e958086b1.jpg',
        recipeId: 29,
    },
    {
        mNum: 234,
        mContent:
            '먼저 계란을 삶기 시작해 주시고, 김치는 쫑쫑썰어 준비하고 오이는 어슷하게 잘라주세요. 그리고 미리 면삶을 물을 넉넉하게 2L냄비에 넣고 가열할게요. 추가로 차가운물 300mL도 따로 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7464f6171cb56c30f53de41c3f1bcbd31.jpg',
        recipeId: 30,
    },
    {
        mNum: 235,
        mContent: '목살에 소금1t,후추1/3t로 살짝 밑간해서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6517f82d654eb7c662a5455d11f95a4a1.jpg',
        recipeId: 30,
    },
    {
        mNum: 236,
        mContent:
            '오늘 레시피의 핵심, 양념장을 만들어볼까요? 고추장1T,고춧가루1/2T, 간장1/2T,설탕1T,다진마늘1/2T, 김칫국물3T,참기름1T 위의 재료를 넣고 잘 섞어주세요. 잘 익은 김칫국물을 넣으면 식초가 들어가지 않아도 충분히 상큼해요! 신맛이 좀 더 나는 것을 선호하시면 추가로 식초를 조금 넣어주셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8b78d4a462dba9a0f372379fbf7666cd1.jpg',
        recipeId: 30,
    },
    {
        mNum: 237,
        mContent: '팬에 식용유1T를 살짝 두르고 목살을 앞뒤로 노릇하게 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2d13a21d4c7825570235f51ac03505c81.jpg',
        recipeId: 30,
    },
    {
        mNum: 238,
        mContent:
            '이쯤 되면 물이 끓고있겠죠? 소면은 100원짜리 동전 정도 크기로 양이 집이면 1인분으로 적합한 분량이에요. 우르르 끓는 물에 소면을 넣고 잘저어주시다가 끓어오르면 찬물을 100mL넣어서 다시 한소끔 끓여주세요. 위의 과정을 총 3번 반복 해 주시면 소면이 얼추 잘 조리가 되었을거에요. 제품 권장시간을 꼭 참고해주세요! 차가운 물을 넣는 과정을 통해서 소면이 한층 탄력있게 쫄깃해진답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b85c9eddaeb96595efb152755005cee61.jpg',
        recipeId: 30,
    },
    {
        mNum: 239,
        mContent: '흐르는 차가운물에 더이상 전분기가 느껴지지 않을 때 까지 가볍게 빨래하듯 면을 헹구어주세요. 얼음물을 사용해 주시면 더 쫄깃해요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e3685b20cc8cbe797b59a7c0f2744dc51.jpg',
        recipeId: 30,
    },
    {
        mNum: 240,
        mContent:
            '자, 이제 준비한 양념장을 넣고 슥삭슥삭 손으로 잘 비벼주세요. 준비해둔 고명을 보기 좋게 담고 깨를 약간 뿌려주시면 먹음직한 비빔국수 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/66b1f84e32341c12f1eb70a5ff8859f11.jpg',
        recipeId: 30,
    },
    {
        mNum: 241,
        mContent: '뚝배기에 불린 쌀, 물을 동량으로 넣고 밥을 짓는다. 뚝배기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/de8f5525f7b5b3abaa81bf4dcb98111c1.png',
        recipeId: 31,
    },
    {
        mNum: 242,
        mContent: '버섯은 먹기 좋은 크기로 자른다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/df994c2eeb3dcc580ffe4219b7a331ea1.png',
        recipeId: 31,
    },
    {
        mNum: 243,
        mContent: '데친 취나물은 먹기 좋은 크기로 썬다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f8d38f0edc8ce4fb9bc1802a099f44851.png',
        recipeId: 31,
    },
    {
        mNum: 244,
        mContent: '취나물은 양념 재료에 버무린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/142124ef7e32970ef6d7fbda14f5c15e1.png',
        recipeId: 31,
    },
    {
        mNum: 245,
        mContent: '밥이 다 되면 버섯, 양념한 취나물을 넣고 10분간 뜸을 들인다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/48712c9c4cba44af71c120b86cddeb081.png',
        recipeId: 31,
    },
    {
        mNum: 246,
        mContent: '비빔 양념장을 곁들여 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bd559be09b6f6956d520efac44556c301.png',
        recipeId: 31,
    },
    {
        mNum: 247,
        mContent: '양파는 채썰어주고 대파, 홍고추는 어슷 썰어준다. 그리고 삶은 닭가슴살은 찢어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6c6d4298414e3ae5f8055a0dcc5e67ba1.png',
        recipeId: 32,
    },
    {
        mNum: 248,
        mContent: '팬에 기름을 두르고 다진마늘을 넣고 볶아주다가 대파, 양파를 넣어 볶아준다 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/679d0402e481038f975d72489e17967e1.png',
        recipeId: 32,
    },
    {
        mNum: 249,
        mContent: '닭가슴살을 넣어 볶아준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2399545d177dd8dfb2cdd62aa228144c1.png',
        recipeId: 32,
    },
    {
        mNum: 250,
        mContent: '양념재료를 모두 넣어 볶다가 홍고추, 통깨, 참기름을 넣어 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b2dc56167635855786fb3b8269fbec021.png',
        recipeId: 32,
    },
    {
        mNum: 251,
        mContent: '바나나를 한 입 크기로 썬다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e7d3d0ef13246ca6b3ab4b20199bac851.png',
        recipeId: 33,
    },
    {
        mNum: 252,
        mContent: '냄비에 달걀 노른자, 설탕, 밀가루를 섞은 후 우유를 붓고 되직하게 끓여 커스터드크림을 만든다. 냄비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/30ba03b12438c38106f4aab5ee35ad9e1.png',
        recipeId: 33,
    },
    {
        mNum: 253,
        mContent: '그릇에 커스터드크림을 붓고 냉장고에서 식힌다. 그릇',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e1d7a841510d5e78dbcffb448b9de1151.png',
        recipeId: 33,
    },
    {
        mNum: 254,
        mContent: '볼에 액상 생크림과 설탕을 넣고 휘핑해 생크림을 만든 후 커스터드크림을 넣어 같이 섞는다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/602402ca4efa7b5ee88fc6c23e1924fe1.png',
        recipeId: 33,
    },
    {
        mNum: 255,
        mContent: '컵에 크림>계란과자>바나나 순으로 쌓아 완성한다. 컵',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9ab11b4885d9e5f4ddbeb8c4126ffa8e1.png',
        recipeId: 33,
    },
    {
        mNum: 256,
        mContent:
            '양파는 다지고 스팸과 김치는 잘게 썰어 준비한다. - 스팸은 뜨거운물에 살짝 데쳐 주거나 따뜻한 물에 담가 건져 주면 불순물을 제거할 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c1d369dba5b314e8bd91d0c9a06c287d1.png',
        recipeId: 34,
    },
    {
        mNum: 257,
        mContent: '팬에 식용유를 두르고 달걀을 깨뜨려 스크램블 한다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2bdc5cc9c6d9a27a4ebd93e6f3709bed1.png',
        recipeId: 34,
    },
    {
        mNum: 258,
        mContent: '팬에 식용유를 약간 두르고 양파를 볶다가, 스팸, 김치, 밥, 간장, 설탕을 넣어 볶는다.. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f9aab2e3d8ba597cea06674740aa47df1.png',
        recipeId: 34,
    },
    {
        mNum: 259,
        mContent: '볶음밥을 밥그릇에 넣어 뒤집은 뒤 스크램블, 김, 치즈로 장식해 완성한다. 밥그릇 , 그릇',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0d99b9318f7c3981332e56939311dc581.png',
        recipeId: 34,
    },
    {
        mNum: 260,
        mContent: '요리 시작하기 1시간 전, 당면을 물에 불려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/dcfd1b59167566087b7241be3697c78a1.jpg',
        recipeId: 35,
    },
    {
        mNum: 261,
        mContent: '불고기감은 먹기 좋은 크기로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/f12b020743db92e8f0e04f70bb94df601.jpg',
        recipeId: 35,
    },
    {
        mNum: 262,
        mContent:
            '이제 양념 재료를 섞은 다음, 여기에 불고기감을 넣고 잘 섞어 20분 재워주세요. 배즙이나 사과즙 둘 중 집에 있는 걸로 사용해주면 된답니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/242d902fdf82b81b45d56ca12910e8221.jpg',
        recipeId: 35,
    },
    {
        mNum: 263,
        mContent: '냄비에 물(600ml)이 펄펄 끓어오르면, 찬물 200ml와 달걀을 넣고 뚜껑을 덮어 12분 동안 가만히 놔둬주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d66104c5ca15282c0d6e0749faa5089e1.jpg',
        recipeId: 35,
    },
    {
        mNum: 264,
        mContent: '그 다음에 껍질이 잘 벗겨지도록 찬물에 10분 동안 가만히 놔둬주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1935288f8167a81231dbf555b01d068c1.jpg',
        recipeId: 35,
    },
    {
        mNum: 265,
        mContent: '양파 & 표고버섯은 채썰기, 대파는 어슷썰기, 느타리는 몇 가닥씩 찢어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/6c6724ea3264195eb6e739cf338915d01.jpg',
        recipeId: 35,
    },
    {
        mNum: 266,
        mContent:
            '이제 냄비에 식용유 1.5T를 두른 다음 대파, 양파, 표고버섯, 느타리버섯을 넣고, 중센불에서 야채들의 숨이 살짝 죽을 때까지 볶아주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/bad7b6e8559efd6163c45c261e4c3baf1.jpg',
        recipeId: 35,
    },
    {
        mNum: 267,
        mContent: '그리고 불고기감을 넣고 살짝 익을 때까지 볶아주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5252512cd4d7754918d15aa739c56c9e1.jpg',
        recipeId: 35,
    },
    {
        mNum: 268,
        mContent: '여기에 다시마물을 넣고 끓여주다가,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/bff8a40ef7a5afc649f1af070546bac11.jpg',
        recipeId: 35,
    },
    {
        mNum: 269,
        mContent: '부글부글 끓어오르면 당면을 넣고 5분 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/93cbbd1c48a5568832dab5cb9fb4c1221.jpg',
        recipeId: 35,
    },
    {
        mNum: 270,
        mContent: '완성되기 30초 전, 달걀 껍질을 반만 조심스럽게 까서 그대로 엎어 넣어주세요. (후루룩~ 빠져나온답니다. )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/3c8e3de34e98ef0e4a0c3f5747c8edfa1.jpg',
        recipeId: 35,
    },
    {
        mNum: 271,
        mContent:
            '마무리로 통깨를 뿌려주고 휴대용 레인지에 끓여가면서 먹으면 끝. 아, 깻잎, 당근, 파채가 냉장고에 조금 있어 올렸답니다. 이건 고명 재료니 취향껏.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b977e8fb95bfbb42279e7cdcae7ac3491.jpg',
        recipeId: 35,
    },
    {
        mNum: 272,
        mContent: '손질한 쪽파는 뿌리부분을 액젓을 넣고 15분간 절인다. - 5분에 한번씩 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a0b7c3409288b44044f4a2a7db0d0ba71.png',
        recipeId: 36,
    },
    {
        mNum: 273,
        mContent: '냄비에 물, 밀가루를 넣고 풀을 쑨다. 냄비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f876039a1ba5e90b77618ff9742e9aa91.png',
        recipeId: 36,
    },
    {
        mNum: 274,
        mContent: '밀가루풀에 양념재료, 쪽파 절인 액젓을 넣고 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6def1589e710aae5139189b0c9befac61.png',
        recipeId: 36,
    },
    {
        mNum: 275,
        mContent: '절인 쪽파에 양념을 고루 묻혀 완성한다. - 상온에 반나절 두고 냉장보관해서 드세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c8f528e2ebee2cf3249d8d18120de5d31.png',
        recipeId: 36,
    },
    {
        mNum: 276,
        mContent: '닭은 칼집을 낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d5488d55c6226d18ca0d193726d577161.png',
        recipeId: 37,
    },
    {
        mNum: 277,
        mContent: '소금, 후추, 카레가루, 술을 넣고 30분간 밑간한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f64c334999899ffcf6978c0cee3b26111.png',
        recipeId: 37,
    },
    {
        mNum: 278,
        mContent: '밑간한 닭, 식용유, 감자전분, 튀김가루, 물 1/3종이컵을 넣고 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f0827a3635b85aeef91f90c8c33dc5091.png',
        recipeId: 37,
    },
    {
        mNum: 279,
        mContent:
            '빵가루를 묻혀 예열된 200도 오븐에 40분간 익혀 완성한다. 오븐 - 빵가루에 약간의 물을 넣으면 덜 타요. - 오븐에 따라 시간이 달라질 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0dfae6791dbe7b8d9909d111be3b6d5e1.png',
        recipeId: 37,
    },
    {
        mNum: 280,
        mContent: '사과는 껍질을 벗겨 편으로 썬다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d667a1777f10d0928982cb7dbf71b9991.png',
        recipeId: 38,
    },
    {
        mNum: 281,
        mContent: '냄비에 사과와 필링재료를 넣고 사과가 투명해질 때까지 약불로 졸인다. 냄비 - 물기없이 볶아야 쫀득한 식감이 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/41b601fbe1795713eb46a8788b4211091.png',
        recipeId: 38,
    },
    {
        mNum: 282,
        mContent: '박력분, 아몬드가루, 베이킹 파우더는 체에 내린다. 체',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/231ec9b1e695339688deb14fdd0c24971.png',
        recipeId: 38,
    },
    {
        mNum: 283,
        mContent: '계란, 소금, 설탕, 계피가루, 버터를 넣고 주걱으로 섞는다. 주걱',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1ffdf64f94105d770d74b9846b024a131.png',
        recipeId: 38,
    },
    {
        mNum: 284,
        mContent: '버터 덩어리가 없어질 때까지 손으로 비벼 크럼블을 만든다. - 덩어리가 뭉치지 않게 잘 비벼주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e3843148d8985a2a2a48b20883cb24f01.png',
        recipeId: 38,
    },
    {
        mNum: 285,
        mContent: '오븐용 팬에 유산지를 깔고 크럼블 절반을 깔고 잘 눌러준다. 오븐팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bb9527c3f44a3a32482803e7a504b7241.png',
        recipeId: 38,
    },
    {
        mNum: 286,
        mContent: '애플필링을 깔고 크럼블을 뿌린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fa58baf928b3c4eaae8ce3c42a63b4ff1.png',
        recipeId: 38,
    },
    {
        mNum: 287,
        mContent: '180도로 예열된 오븐에 30분간 구워 식힌다. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/af178f84aa13468f29d2c20e79bf9d871.png',
        recipeId: 38,
    },
    {
        mNum: 288,
        mContent: '식힌 애플크럼블을 먹기좋은 크기로 잘라 완성한다. - 기호에 따라 슈가파우더, 계피가루를 뿌려드세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3e5dff2523aa7ee66d55975cde77aabd1.png',
        recipeId: 38,
    },
    {
        mNum: 289,
        mContent: '다듬은 쪽파는 가볍게 손으로 주먹을 잡은양 만큼 준비를 했습니다. 단으로 1/3줌',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/72e449f7c161c739bc0355bc41d87d471.jpg',
        recipeId: 39,
    },
    {
        mNum: 290,
        mContent: '그리고 흰부분은 쏭쏭 썰어 주시고 초록부분은 3등분으로 잘라 준비했습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/08707a5f36c46056c1bef5a2999f45ce1.jpg',
        recipeId: 39,
    },
    {
        mNum: 291,
        mContent: '달군 팬에 식용유 1큰술, 참기름 1큰술을 두르고 준비한 쪽파 흰부분을 넣고 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e8d61b9fecb1969f14681845adac5f011.jpg',
        recipeId: 39,
    },
    {
        mNum: 292,
        mContent: '그리고 길이가 짧은 쪽으로 채썰어 준 사각어묵 3장 을 넣고 볶아 줍니다. 어묵이 까실하게 볶아지면....',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bca2758ef2eb2e73e915a5ca2b62f6e71.jpg',
        recipeId: 39,
    },
    {
        mNum: 293,
        mContent: '씻어 물기뺀 숙주 450g을 넣고 고루 살살 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ebaf1da6f64d0ed5e073365cefb843811.jpg',
        recipeId: 39,
    },
    {
        mNum: 294,
        mContent: '숙주의 숨이 죽으면 간장 2큰술, 굴소스 1큰술, 청주 2큰술, 매실청 1큰술을 섞은 양념을 붓고 골고루 잘 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/40c125647aa18aa5865649f430ef54b41.jpg',
        recipeId: 39,
    },
    {
        mNum: 295,
        mContent: '그리고 준비한 쪽파 초록부분을 넣고 한번 더 볶아 준 후 소금, 후추약간로 마무리간을 봐주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e0415a204f52e7950fd3eb0f3edb0b251.jpg',
        recipeId: 39,
    },
    {
        mNum: 296,
        mContent: '볼에 찹쌀가루, 딸기가루, 설탕, 소금을 넣고 섞은 뒤 뜨거운물을 붓는다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3de495b950958a58063c5a1d124dee751.png',
        recipeId: 40,
    },
    {
        mNum: 297,
        mContent: '랩을 씌어 전자레인지에 2분 돌려 섞은 뒤 1분 30초 더 돌린다. 전자레인지 , 랩',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c07a5b0bb624bdd4d951a050ca40a8b51.png',
        recipeId: 40,
    },
    {
        mNum: 298,
        mContent: '도마에 전분 가루를 약간 뿌린 후 반죽을 3등분으로 나눈다. 도마',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/25264585ff3fecbdbe3feaaa10252c9c1.png',
        recipeId: 40,
    },
    {
        mNum: 299,
        mContent: '반죽을 동글 납작하게 빚은 후 크림치즈를 넣고 빚어 완성한다. - 크림치즈를 얼음틀에 넣어 얼려 놓으면 만들기 쉬워요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6c92bed8bf2bef5c7802a5573dc2dd3d1.png',
        recipeId: 40,
    },
    {
        mNum: 300,
        mContent:
            '먼저 파와 고추는 0.2cm 두께로 송송썰어 준비 해 주시고 깊고 달큰한 국물 맛을 내 줄 무는 두툼하게 2~3cm 두께로 잘라줄게요. 무 직경이 너무 크다 싶으면 긴 방향으로 2~4등분 해서 잘라주셔도 좋아요. 저는 큼직한 무 덩어리를 잘라먹는 맛이 좋아 크게 준비했어요. 떠 먹기 편하게 준비하고 싶으시다면 무국을 끓이실 때 처럼 나박썰어 준비 해 주셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ae2f7ffbd4fa1f3afb4d86f8b01bf4781.jpg',
        recipeId: 41,
    },
    {
        mNum: 301,
        mContent: '물500mL 파뿌리2조각, 다시마 한조각을 넣고 끓이다가 쯔유1T로 밑간한 다음 손질한 무를 넣고 10분간 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/60d9dc71347e39f4ae37f5900a21536c1.jpg',
        recipeId: 41,
    },
    {
        mNum: 302,
        mContent:
            '잘 우러난 육수에 어묵꼬치와 해산물을 넣고 한소끔 끓으면 다진마늘1/2T,소금1t,파와 고추를 넣고 한소끔 더 끓여주시면 시원한 국물요리 어묵탕 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c5db6d9105dab74e18dd40f3fed1d7611.jpg',
        recipeId: 41,
    },
    {
        mNum: 303,
        mContent: '먼저 파와 양파는 사방0.5cm 정도의 크기로 다져서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0d7893b31e65377ebeefddc2b9c2c4de1.jpg',
        recipeId: 42,
    },
    {
        mNum: 304,
        mContent:
            '자연스러운 단맛과 풍미를 돋우기 위해, 강불에서 3분간 예열한 팬에 식용유1T를 두르고 양파와 파를 넣고 4분간 충분히 볶아주세요. 양파가 살짝 투명해지고 달큰한 향이 나면 거의 다 볶아진거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/317dd7208a5874c19990771afc9fda0f1.jpg',
        recipeId: 42,
    },
    {
        mNum: 305,
        mContent:
            '다진 소고기에 볶은채소 한김식혀 넣고, 간장1T,맛술1T,다진마늘1T, 설탕1/2T,후추1/3t,참기름1t 위의 양념장을 넣어 주신다음 한번 가볍게 섞어 주시고 손으로 5분정도 충분하게 치대주세요. 우리가 밀가루 반죽하는 것 처럼 고기믹스처에 탄력이 조금 생겨야해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bc792aa9b15a648f0fbc5e62194e22d51.jpg',
        recipeId: 42,
    },
    {
        mNum: 306,
        mContent:
            '두부반모는 동일한 크기로 2등분하고, 속은 티스푼을 이용해 고기를 넣을 수 있게 가운데 부분을 파 내주신 다음 전분가루1t를 파낸 부분에 묻히고 고기소를 눌러가며 가득 채워주세요. 두부는 부침용을 사용해주시면 한결 오늘 요리가 쉽게 진행됩니다. +Tip: 전분을 사용해 고기반죽을 채우면 고정해 주는 역할을 해서 부치다가 고기 소가 떨어지는 것을 방지해주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f6a077014c84ac2257fe5cfcca772f511.jpg',
        recipeId: 42,
    },
    {
        mNum: 307,
        mContent: '이제 강불에서 3분간 예열한 팬에 식용유1T를 두르고 중불로 낮추고 고기가 보이는 면이 아래로 가게 한 다음 6분동안 지긋이 익혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1a30e3f35af77b4a79e3b615b78e821f1.jpg',
        recipeId: 42,
    },
    {
        mNum: 308,
        mContent:
            '이제 뒤집어 반대쪽을 익혀볼게요. 이때는 불을 다시 강불로 높이고, 약 3분후 물2큰술을 넣고 뚜껑덮어 4분간 더 익혀주세요. 쪽파 다진것 조금하고 참깨를 솔솔 뿌려 상에 내 주시면 먹음직한 두부요리 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6ef048c1f83bdb20a7b78ea7ed54771f1.jpg',
        recipeId: 42,
    },
    {
        mNum: 309,
        mContent:
            '먼저 양파는 0.5cm 두께로 슬라이스하고, 대파는 5cm 간격으로 잘라줄게요. 얼큰함을 더해 줄 고추는 0.5cm 정도의 두께로 슬라이스 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6b4bfa9f431a677cd2e5d69c1dd526591.jpg',
        recipeId: 43,
    },
    {
        mNum: 310,
        mContent:
            '팽이버섯은 세척 후 붙어 있는 부분을 손으로 떼어 준비할게요. 두부는 1cm 정도 두께로 5cm x 4cm 정도 크기로 큼직하게 손질해 볼게요. 버섯 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d976b1e9d5fd7c64c60e509a2cacc1e11.jpg',
        recipeId: 43,
    },
    {
        mNum: 311,
        mContent:
            '찌개 맛에 깊이를 더해 줄 양념장을 만들어보겠습니다. 김칫국물4T,간장1T,다진마늘1T, 청주1T,고춧가루2T,물4T 포인트는 바로바로 김칫국물! 잘 익은 김치의 국물은 개운하면서 깊은맛이 나요. 만약 김치가 너무 시다면, 오늘 양념장에 설탕을 1/2티스푼 정도만 추가해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/133ce412eee0b800639693dd950e02831.jpg',
        recipeId: 43,
    },
    {
        mNum: 312,
        mContent:
            '강불에서 3분간 예열한 냄비에 식용유1T를 두르고 돼지고기를 먼저 볶다가 후추1/2t를 넣고 노릇하게 볶아지면 양파를 넣고 충분히 5분정도 더 볶을게요. 위에 보시는 것처럼, 좀 눌어 붙은 부분이 생겨야 좋아요! 그래야 구수한 맛이 더해져서, 한결 찌개에 깊은맛이 더해져요. 타지는 안되, 좀 눌어 구수한 향이 나게 해 주세요. 그리고 양파는 아삭함이 거의 없어지도록, 투명해 질 때 까지 충분하게 볶아주셔야 단맛을 내 줄 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/91a34a89c9ad3a4e2b33a17700c2a4d21.jpg',
        recipeId: 43,
    },
    {
        mNum: 313,
        mContent: '자 이제 김치를 넣고, 이때도 5분정도 충분히 볶다가 양념장을 넣고 한번 더 볶고 물500mL를 넣고 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/79751622afa3cbdb7555dc6a27f929f01.jpg',
        recipeId: 43,
    },
    {
        mNum: 314,
        mContent: '마지막으로 파,고추,팽이버섯,두부를 넣고 한소끔 끓으면 간을 이때 봐 주시고 부족한 간을 소금을 채워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6c8a38e03c03597f3af9556158d852b11.jpg',
        recipeId: 43,
    },
    {
        mNum: 315,
        mContent:
            '먼저 파는 쫑쫑썰어 준비해주시고 새우는 알새우라면 그냥 사용하시고 좀 크기가 있는 경우엔 2등분 정도 해 주세요. 달걀은 70%만 풀어서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/271a0295ea07ca71b722f9e8ea4bc4b31.jpg',
        recipeId: 44,
    },
    {
        mNum: 316,
        mContent:
            '강불에서 3분 예열한 팬에 식용유를 두르고 달걀 스크램블 후 따로 그릇에 담아 주세요. 팬을 다시 2분 예열 후, 식용유1T를 넣고 파와 다진마늘을 볶다가 손질한 새우를 넣고 가볍게 한번 더 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f73a062732b1ace95c7fe33500a20a371.jpg',
        recipeId: 44,
    },
    {
        mNum: 317,
        mContent:
            '이제 맛술1T,후추1/3t,간장1T를 넣고 간을 얼추 맞추신 다음에 밥을 넣고 센불에서 볶다가 참기름으로 마무리 해 주시면 끝이에요. 부족한 간은 소금으로 채워주시면 된답니다. 새우볶음밥 간단한 한그릇요리로 좋겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/05435a24ccd2b1d20ff54b5541b1de5a1.jpg',
        recipeId: 44,
    },
    {
        mNum: 318,
        mContent:
            '먼저 들어가는 재료 손질을 해 볼게요. 양파,호박,고추는 1cm정도 크기로 잘라서 준비 해 주시고 느타리버섯은 크기에 따라 그대로 사용하시거나 찢어서 준비할게요. 두부는 1.5cm정도 큼직하게 깍뚝썰기해서 손질 해 볼거에요. 양파 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9127f54344742f2f4df5ca466699be301.jpg',
        recipeId: 45,
    },
    {
        mNum: 319,
        mContent:
            '냄비에 물을 붓고 강불에 올리고, 준비한 채소를 한데 넣고 한소끔 끓어오를때까지 기다려주세요. 이때 채소에서 단맛이 우러나 국물의 맛이 한결 깊어질거에요. 그리고 된장을 풀어 간을 맞출게요. 된장찌개는 좀 간이 세고 맛이 진해야 제맛이죠? 소금을 사용하지 않고 부족한 간은 된장을 더 풀어 넣어 맞추어주세요. 이게 바로 맛을 내는 팁이랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4a301665797aa98e4c647930fa34061e1.jpg',
        recipeId: 45,
    },
    {
        mNum: 320,
        mContent: '이제 오늘 레시피 감칠맛재료, 새우를 넣고 한소끔 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/23a3018103b9ef0fe70edea3999c433e1.jpg',
        recipeId: 45,
    },
    {
        mNum: 321,
        mContent: '마지막으로 두부와 다진마늘1T를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6b3d1ccc6ab6ed09937f90dff793e2a11.jpg',
        recipeId: 45,
    },
    {
        mNum: 322,
        mContent: '강불에서 한번 더 우르르 끓여주시면, 먹음직한 새우 된장찌개 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/dbc3c2b368968e24a6074c028bf3ed701.jpg',
        recipeId: 45,
    },
    {
        mNum: 323,
        mContent:
            '오늘 저는 얼그레이 티백을 적은 양의 물에 진하게 우려서 샷을 추출한 것처럼 사용 해 볼거에요. 우유는 유지방량 2%짜리를 쓰고 꿀 한스푼을 첨가해서 좀 달콤하게 완성 해 볼거랍니다. 얼그레이 외에 원하시는 다양한 차를 얼마든지 활용해서 완성하셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/815e7c240c95d25b64d803ec871e92ee1.jpg',
        recipeId: 46,
    },
    {
        mNum: 324,
        mContent: '먼저 차 티백 두개를 겹치고, 물50mL를 부어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/705d0f8da3e7cefaea1a78fe257073c31.jpg',
        recipeId: 46,
    },
    {
        mNum: 325,
        mContent:
            '중불에 올려 끓기 시작하면 불을 꺼 주신 다음 3분간 우려내고 체에 꾹꾹 눌러 진한 차를 추출해 주세요. 혹은 전기포트가 있다면 한번 팔팔 끓은 다음 물을 부어 5분정도 충분하게 우리신 다음 사용 해 주셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8464ac17e6b50a511f6d793a15edd6551.jpg',
        recipeId: 46,
    },
    {
        mNum: 326,
        mContent:
            '그리고 우유는 전자레인지에 1분간 데워주시고 스푼으로 휘저어 주세요. 데운 다음 바로 휘저어 주셔야 표면에 유지방 막이 생기는 것을 방지할 수 있어요. 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8299358cc86609cddbaadf8a572677401.jpg',
        recipeId: 46,
    },
    {
        mNum: 327,
        mContent: '달콤한 맛 뿐 아니라 고급스러운 풍미를 더해 줄 꿀 한스푼을 찻잔에 담아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9466843f00694676e7052c971f77b76f1.jpg',
        recipeId: 46,
    },
    {
        mNum: 328,
        mContent:
            '데운 우유를 그 다음 붓고, 휘휘 저어 꿀을 완전히 녹여주세요. 추출한 얼그레이 차를 그 위에 부어 가볍게 저어주시면 향긋한 홈카페 레시피 얼그레이 밀크티 만드는법 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a50002f3eed250f066e88bed57ffc2b41.jpg',
        recipeId: 46,
    },
    {
        mNum: 329,
        mContent:
            '시금치는 끓는 물에 굵은소금을 조금 넣고 약 5초 정도 데쳐 찬물에 씻어 건져 건져 줍니다. 당근은 채 썰어서 굵은소금을 약간 넣고 팬에서 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/00ba9fd82794e7b2403758b3fc0637af1.jpg',
        recipeId: 47,
    },
    {
        mNum: 330,
        mContent: '햄은 마른팬에 앞뒤로 노릇노릇 부쳐 줍니다. 계란은 지단을 부쳐서 채를 썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/52c45688b7d9cb7b54c98803654dc20e1.jpg',
        recipeId: 47,
    },
    {
        mNum: 331,
        mContent: '어묵은 채를 썰어 간장과 올리고당을 넣고 조리듯 재빠르게 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7c9bbea94f9d344d1aec6340b230482e1.jpg',
        recipeId: 47,
    },
    {
        mNum: 332,
        mContent: '참치는 도구를 활용해서 기름기를 쫙 빼주고, 단무지와 우엉은 시판을 사용했어요. 크래미는 2등분 해서 준비 합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a13347068154ca1150df3f77163763621.jpg',
        recipeId: 47,
    },
    {
        mNum: 333,
        mContent:
            '1. 참치김밥 만들기 김발위에 김을 올리고 밥을 가장자리에서 약 1cm 이상 남겨 주고 밥을 골고루 펴 줍니다. 깻잎을 넓게 펴고 준비된 재료를 올려 둘둘 말아 줍니다. 김밥을 잘 못 마시는 분들은 손목에 스냅을 좀 주어서 단단히 고정한다는 느낌으로 말아주시면 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1aeb71ec76d2f50e450f6a5360dae1711.jpg',
        recipeId: 47,
    },
    {
        mNum: 334,
        mContent:
            '2. 누드김밥 만들기 김발에 일회용 봉지를 씌우고 김에 밥을 얇게 누르듯 판판히 펴서 뒤집어 준 후 깻잎을 깔고 그 위에 재료들을 봉긋이 올려 둘둘 말아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a69501413b03b48145fa05b9384234b51.jpg',
        recipeId: 47,
    },
    {
        mNum: 335,
        mContent: '먼저 어묵은 먹기 좋은 크기로 취향에 맞게 모양을 맞춰 잘라주세요. 양파는 0.5cm 간격으로 슬라이스할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a521cd77d10a3b27416a0d2d2a4b84af1.jpg',
        recipeId: 48,
    },
    {
        mNum: 336,
        mContent:
            '오늘 국을 더욱 얼큰하고 또 깊은맛을 낼 수 있게 도와줄 양념장을 만들어 보겠습니다. 고춧가루2T,간장1T,김칫국물6T,다진마늘1T 위의 재료를 넣고 잘 섞어주세요. 김칫국물이 꼭 들어가야 맛이 좋아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fd2d50ad66472fc4507fa5167dba69ce1.jpg',
        recipeId: 48,
    },
    {
        mNum: 337,
        mContent:
            '먼저 강불로 2분 예열한 냄비에 식용유1T를 두르고 양파와 김치를 볶아주세요. 충분히 볶아 김치의 신맛이 날아가고 양파에서 단맛과 깊은맛이 나오게 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f98143b18817e2293418b5e5818bfd6c1.jpg',
        recipeId: 48,
    },
    {
        mNum: 338,
        mContent: '준비한 양념장을 넣고 충분하게 4분정도 더 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a531d21eaecf38c4c942edd658edd5cf1.jpg',
        recipeId: 48,
    },
    {
        mNum: 339,
        mContent: '자 이제 분량의 물을 넣고 한소끔 끓어오를 때 까지 기다려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b6a3ad6e0731bca40c5a05b7f4f0950c1.jpg',
        recipeId: 48,
    },
    {
        mNum: 340,
        mContent:
            '이제 준비한 어묵을 넣고 후추1/3t를 넣어 향을 더할게요. 이제 간을 한 번 이쯤 봐 주시고, 부족한 간을 소금으로 맞춰주세요. 이렇게 간단한 저녁메뉴, 어묵김칫국이 완성되었습니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/92356285d3d4be190d5a015a8a4363c01.jpg',
        recipeId: 48,
    },
    {
        mNum: 341,
        mContent:
            '먼저 칼칼한 맛을 더해 줄 고추는 어슷하게 0.5cm두께로 손질할게요. 그리고 쪽파는 마지막에 얹어서 그 먹음직스러움과 향을 더할건데요, 송송썰어 고명용으로 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cb58735bb6594f205b555bf7d5aa68c41.jpg',
        recipeId: 49,
    },
    {
        mNum: 342,
        mContent:
            '해물찜 맛을 좌우하는 양념장을 만들어볼게요. 고운고춧가루2T,굵은고춧가루1T, 감자전분1T,간장2T,굴소스2T,맛술1T, 다진마늘1T,물4T,후추1/3t 위의 재료를 넣고 잘 섞어서 준비해 주세요. 굴소스가 들어가야 감칠맛이 채워져요. 혹시 더 걸쭉한 느낌으로 요리를 완성하고 싶으시다면 여분으로 감자전분과 물을 1:1.5로 섞어 녹말물을 만들어 두셨다가 이따 만드실 때 더 첨가하셔서 원하시는 농도로 맞춰 주셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ebdc13bba0fc7b56ef31ddbc986724851.jpg',
        recipeId: 49,
    },
    {
        mNum: 343,
        mContent:
            '저는 냉동 손질 주꾸미를 사용해서 한번 세척 후 사용했는데요. 이물질이 좀 많이 보이는 경우에는 밀가루 한줌 넣고 빨듯이 치대어 차가운 물에 한번 더 헹구어 주시면 깨끗하게 손질하실 수 있어요. 주꾸미 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/96f0576be7a9e47c6d9459dd8bd1362f1.jpg',
        recipeId: 49,
    },
    {
        mNum: 344,
        mContent:
            '자 이제 넉넉히 콩나물을 담고 그위에 주꾸미를 얹고 고추를 넣어 조리를 시작 해 주세요. 이때 물은 100mL정도만 넣을게요! 해물찜을 실패하게 되는 이유가 물 조절을 잘 하지 못해서인 경우가 많은 데요. 콩나물과 주꾸미에서 수분이 나오기 때문에 처음부터 물을 많이 넣어주시면 매운탕이 되어버릴 수 있으니 주의 해 주세요! 뚜껑을 덮고 불을 켠 시점에서 약10분 정도면 조리가 완성되어요. 보셨을때 주꾸미 색이 완전히 변하고 콩나물은 살짝 반투명해졌지만 여전히 아삭해야 잘 쪄진거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/089e5393b5324b1a1352785c6f322d9d1.jpg',
        recipeId: 49,
    },
    {
        mNum: 345,
        mContent: '자 이제 준비한 양념장을 넣고 불 위에서 잘 버무려 주신 다음 깨솔솔 참기름 한바퀴, 쪽파 얹어주시면 먹음직한 주꾸미 콩나물찜 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/672951c1e18e243dc1d5beb6829f9d6c1.jpg',
        recipeId: 49,
    },
    {
        mNum: 346,
        mContent:
            '먼저 양파,고추 그리고 스팸은 0.5cm 두께로 썰고 쪽파는 송송 썰어 고명으로 준비할게요. 파가 없으시다면, 그리고 앞으로도 굳이 사용하실 계획이 없다면 생략하셔도 크게 문제 없습니다. 달걀은 가볍게 풀어 두시고, 분량의 양념장재료(재료란참고)를 미리 섞어서 준비 해 둘게요. 저염간장을 사용하시는 경우나, 간혹 진간장에 염도 차이가 있는 경우가 있으니 두스푼 이상은 넣지 마시고 나중에 간이 싱겁다고 느껴지시면 그때 간장을 추가해서 간을 맞추시길 권장해요. 저염간장의 경우 2스푼보다 조금 더 넣어주셔야 보통 간이 맞습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ab631a2db2669f00d46128fefa7e51661.jpg',
        recipeId: 50,
    },
    {
        mNum: 347,
        mContent: '강불에서 3분간 예열한 팬에 식용유1T를 두르고 스팸을 먼저 노릇하게 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/977032cdd2d56f34cff6a94df99071321.jpg',
        recipeId: 50,
    },
    {
        mNum: 348,
        mContent:
            '스팸만 따로 건져 두고 남은 기름에 양파를 1분간 볶다가 준비한 소스 믹스쳐를 넣고 한소끔 끓여 고추와 달걀을 끼얹어 가볍게 우르르 끓여주시면 되어요. 이제 따뜻한 밥위에, 혹은 즉석밥을 데우고 그 위에 스팸과 덮밥 소스를 얹어주시면 맛도 좋고 푸짐한 자취생 간단요리, 스팸 돈부리 덮밥이 완성되었습니다. 간단한 재료로 완성한 음식 치고 그 비쥬얼이 꽤 먹음직스럽죠? 친숙하면서 언제나 맛있는 스팸에 입맛에 두루두루 잘 맞는 간장베이스의 덮밥 소스가 곁들여져서 호불호 크게 가리지 않고 즐기실 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/40609e054fa4c787653a81fd5fa061d31.jpg',
        recipeId: 50,
    },
    {
        mNum: 349,
        mContent: '각종 여채를 잘게 썬다(호박 양파 대파 양배추)...햄도 있음 넣으면 된다..후라이팬에 볶기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f1013ef9a521b1da7696897836474b351.jpg',
        recipeId: 51,
    },
    {
        mNum: 350,
        mContent: '카레를 한숟갈 물 반그릇에 개어놓는다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/357262d717dccdef3aaf830d0e22d0c61.jpg',
        recipeId: 51,
    },
    {
        mNum: 351,
        mContent: '야채가 익으면 바로 개어 놓은 카레를 붓는다..끓으면 먹는다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/81e886c4835ce2203697b16c724f45781.jpg',
        recipeId: 51,
    },
    {
        mNum: 352,
        mContent: '골뱅이는 체에 밭쳐 물기를 빼고 대파, 양파는 채썬다. 체',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/83be12e99cb0edb42f9014b6573209631.png',
        recipeId: 52,
    },
    {
        mNum: 353,
        mContent: '양배추, 오이, 깻잎은 먹기 좋은 크기로 자른다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/064958575d8c5850d1671891822ec8c91.png',
        recipeId: 52,
    },
    {
        mNum: 354,
        mContent: '쫄면은 삶아 물기를 빼둔다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5f47b9ed1bb8edda2e254486c89c01951.png',
        recipeId: 52,
    },
    {
        mNum: 355,
        mContent: '무침양념을 만든다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/82626b17aa89d3fa5c980f8c9c692f3b1.png',
        recipeId: 52,
    },
    {
        mNum: 356,
        mContent: '골뱅이, 썰어놓은 채소를 넣고 버무린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1ba2acba9348dce69fceae4ef9557cd01.png',
        recipeId: 52,
    },
    {
        mNum: 357,
        mContent: '접시에 삶은 쫄면, 골뱅이 무침을 담아 깨를 뿌려 완성한다. 접시',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/63d7aa9b2fe68c9575708d4d3e762ef11.png',
        recipeId: 52,
    },
    {
        mNum: 358,
        mContent: '포도는 알알이 모두 따서 레몬과 같이 식초물에 20분 정도 담가둡니다. 포도 꼭지에 갈색부분은 과도를 이용해 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/085bb48d3ebbd4c1b5b3e035a70563691.jpg',
        recipeId: 53,
    },
    {
        mNum: 359,
        mContent: '거즈를 이용해 포도의 물기를 닦아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c60a962d2181883cdf7172d51418542b1.jpg',
        recipeId: 53,
    },
    {
        mNum: 360,
        mContent: '착즙기를 이용해 레몬즙을 짜주세요. 착즙기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fe6a1d0df42a72053865b8a880e5ea6b1.jpg',
        recipeId: 53,
    },
    {
        mNum: 361,
        mContent: '믹서기를 이용해 청포도는 갈아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e496cb1302ef27064fd1701e7e3f3ebb1.jpg',
        recipeId: 53,
    },
    {
        mNum: 362,
        mContent: '오쿠 내솥에 갈린포도, 레몬즙, 설탕 순으로 넣고 재료가 잘 섞이도록 저어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d24e6e6cebb6aa2d671edb618bd5c28a1.jpg',
        recipeId: 53,
    },
    {
        mNum: 363,
        mContent:
            '도자기 뚜껑을 닫아 오쿠에 안치고 효소청 메뉴를 선택한 후 시작취소 버튼을 눌러 조리를 시작합니다. 1. 가열판에 가열물 600ml를 부어주세요. 2. 압력뚜껑에 압력패킹이 잘 끼워져있는지 확인해주세요. 3. 압력뚜껑 결합 후 압력추를 정 위치에 세워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/68009f86e96641bd0d376fe25d50aa1b1.jpg',
        recipeId: 53,
    },
    {
        mNum: 364,
        mContent: '닭 밑간하기 닭을 큼직하게 잘라 흐르는 물에 씻은 뒤 물기를 걷고 청주와 소금을 뿌려 밑간해둡니다. 30분정도 밑간시간을 가져주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a4310470cbfc9f33ef4a48b299b171861.jpg',
        recipeId: 54,
    },
    {
        mNum: 365,
        mContent:
            '채소썰기 감자와 당근, 양파는 3-4cm 크기로 썰고, 청홍고추는 어슷하게 썰어 씨를 털어줍니다. 감자가 1개 밖에 없어서 호박을 굵직하게 썰어서 넣어줬는데요. 이게 또 맛나네요. 대신 호박은 상에 올리기 15분정도 전에 넣어서 끓여주세요. 뭉그러지면 맛도 없고 요. 닭매운찜이 깨끗하지 않거든요. 대파는 2-3cm 길이로 어슷썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/32d35a86c8085a8d66146e8696336b3f1.jpg',
        recipeId: 54,
    },
    {
        mNum: 366,
        mContent: '양념만들기 분량의 닭찜양념재료를 넣어 고루 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3e7b1a95e5660ab40e0e6be1f39d7dd71.jpg',
        recipeId: 54,
    },
    {
        mNum: 367,
        mContent:
            '양념넣어 끓이기 냄비에 닭과, 감자, 당근을 넣고 닭찜 양념을 끼얹어 골고루 섞은 뒤 재료 가 잠길 정도의 물을 부어 30분 정도 끓여냅니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/316ce96d1eac3aa9192345b87be5b9071.jpg',
        recipeId: 54,
    },
    {
        mNum: 368,
        mContent: '간 맞추고 불 줄이기 국물이 자작해지면 간을 봐서 소금으로 조절하고 불을 줄입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fdfb7a25712470372db7ee8af4afa9111.jpg',
        recipeId: 54,
    },
    {
        mNum: 369,
        mContent:
            '양파, 대파, 고추 넣기 양파와 대파, 고추를 넣은 뒤 양념이 골고루 베개헤서 조금 더 끓여냅니다. 국물이 완전 끝내줘요. 첫맛은 매콤하지만, 강렬한 매콤함이라기보다는 맛나게 매운정도 예요. 강렬한 매운맛을 원하시면 매운고춧가루와 청양고추를 더 넣으시면 되겠죠. 저희 식구들은 매운걸 좋아는 하는데 그닫 잘 못먹어서 이정도로 만들어도 맛나게 매콤한 정도거든요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/00d0aa95f19e598238ff79784aa031ef1.jpg',
        recipeId: 54,
    },
    {
        mNum: 370,
        mContent: '청양고추는 칼집을 내주고, 마늘은 칼등으로 꾹 눌러 살짝 뭉개주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/7cee4e1ccff76cbea469cdb314142ef01.jpg',
        recipeId: 55,
    },
    {
        mNum: 371,
        mContent: '냄비에 육수 재료를 넣고 (다시마만 빼고) 뚜껑을 열어, 중불에서 20분 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/f2e246b45b96b952815d4574628996ce1.jpg',
        recipeId: 55,
    },
    {
        mNum: 372,
        mContent: '이제 불을 끈 다음, 다시마를 넣고 10분 동안 가만히 놔둬주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/c257d02ebcdea8083a4a4bb0b72959641.jpg',
        recipeId: 55,
    },
    {
        mNum: 373,
        mContent: '체에 밭쳐 건더기는 버려주면, 육수 완성. (대략 500ml 정도)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/62c6ad8c2d1424ceb72e04d9ebb2959a1.jpg',
        recipeId: 55,
    },
    {
        mNum: 374,
        mContent: '고명 재료인 쪽파는 쫑쫑쫑, 당근&양파는 길게 슬라이스 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/2a46997b14070f27df645c2ead3585341.jpg',
        recipeId: 55,
    },
    {
        mNum: 375,
        mContent: '신김치는 양념소를 살짝 긁어내고, 1cm 길이로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/763afe2d94354518663d1bc028b4c4961.jpg',
        recipeId: 55,
    },
    {
        mNum: 376,
        mContent: '이제 손에 쥐고 꼭 짜, 양념 국물을 살짝 빼주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/99f235d0657272fff5ee876cfeb2826e1.jpg',
        recipeId: 55,
    },
    {
        mNum: 377,
        mContent: '그리고 밑간 재료인 설탕, 깻가루, 참기름을 넣고 잘 섞어주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5b0a1d289a0ea6884e68d195a144d5001.jpg',
        recipeId: 55,
    },
    {
        mNum: 378,
        mContent: '메밀묵은 1*1*7cm 정도의 길이로 길쭉하게 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d0a39ceaa047fd6f66e44c5fe2130fe21.jpg',
        recipeId: 55,
    },
    {
        mNum: 379,
        mContent: '끓는 물에 넣고 센불에서 2분 데친 다음, 체에 밭쳐 물기를 빼주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b67e99f6425361441e8577ec1e2cfa251.jpg',
        recipeId: 55,
    },
    {
        mNum: 380,
        mContent: '육수를 중불에서 끓이다가, 펄펄 끓어오르기 시작하면 당근, 양파, 후추 2꼬집을 넣고 30초 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/02fd5a103b895a7a31af73631781f5731.jpg',
        recipeId: 55,
    },
    {
        mNum: 381,
        mContent:
            '메밀묵이 담겨 있는 그릇에 육수를 붓고, 신김치, 쪽파, 김가루, 깻가루 & 참기름 약간을 넣고 먹을 때 섞어주면 끝. 혹시 싱거우면 집간장을 살짝민~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/15a1c38d0984489bf228fab73bbebbbf1.jpg',
        recipeId: 55,
    },
    {
        mNum: 382,
        mContent:
            '시댁에서 뜯어온 쑥을 데쳐서 물기를 꽉 짜낸 쑥과 쌀을 하룻밤 불려서 물기를 뺀 다음 그 둘을 방앗간에 가져가면 이렇게 빻아준답니다. 이렇게 방앗간에서 빠온 쑥가루는 습식 쑥가루라 물이 많이 안 들어가요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/26ad4a78de113abe8dcb0de4b3ffb8dd1.jpg',
        recipeId: 56,
    },
    {
        mNum: 383,
        mContent: '빻아온 가루를 손으로 뭉개주면 이렇게 가루가 된답니다. 10컵 정도 넣고 설탕 5컵 넣어 골고루 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5177de760972b581b9ceb83a73ac32c21.jpg',
        recipeId: 56,
    },
    {
        mNum: 384,
        mContent:
            '쌀가루는 익반죽해주어야 하는데요. 뜨거운물 한컵을 담고 다 넣지 말고 조금씩 부어가면서 반죽해주면 되는데요. 이 한컵 다 안들어가고요.. 1/3~2/3컵 정도만 들어가요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4dcda818c2c5935422193ca7854c85831.jpg',
        recipeId: 56,
    },
    {
        mNum: 385,
        mContent: '골고루 치대주면서 이렇게 뭉쳐줍니다. 방앗간에서 빻아온 가루는 소금을 넣고 같이 빻앗기 때문에 소금은 따로 안 넣었어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8c273e696e698a7ae56eea096cb17e261.jpg',
        recipeId: 56,
    },
    {
        mNum: 386,
        mContent: '겉면이 마르지 않게 비닐로 덮어둔 다음 하나씩 빚어주면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/decd59074c6c1e6df2779d57c77aad9f1.jpg',
        recipeId: 56,
    },
    {
        mNum: 387,
        mContent: '이렇게 반죽을 떼어내 손으로 동그랗게 빚어주면 되는데요. 찍어내는 틀이 있으면 그걸 사용해서 빚어주면 더 이쁘겠죠~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d6e416bc94aeb49a1cceeae06a1533fe1.jpg',
        recipeId: 56,
    },
    {
        mNum: 388,
        mContent: '저는 손으로 동그랗게 빚었어요~ 반죽을 다 사용하니 종이호일 4단 정도 나온듯 합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2b2e764a89daa9f0ff2fa11917346cd21.jpg',
        recipeId: 56,
    },
    {
        mNum: 389,
        mContent: '찜기에 물 넣고 종이 호일 깐다음 물을 끓여주는데요. 물이 끓으면 그때 반죽을 올려 쪄주면 됩니다. 10~15분 정도 쪄주면 다 익어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cf26706fccc3c4b640997a4c96208adb1.jpg',
        recipeId: 56,
    },
    {
        mNum: 390,
        mContent: '쑥개떡에 바를 기름인데요. 물 1/2에 참기름 1큰술 넣고 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3975e68cde8db2b48ef62a652f19665c1.jpg',
        recipeId: 56,
    },
    {
        mNum: 391,
        mContent: '15분 정도 찌고나면 이렇게 솔로 기름 발라주면 쑥개떡 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7e3c3291bbaa23ed95006a42146e1a611.jpg',
        recipeId: 56,
    },
    {
        mNum: 392,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/547b606809ebe5466210a4a272a0b5f71.jpg',
        recipeId: 57,
    },
    {
        mNum: 393,
        mContent: '- 식빵과 어묵 마른 팬에 앞뒤 노릇하게 굽기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a93f179d3fa3854f1456bc48893f36b41.jpg',
        recipeId: 57,
    },
    {
        mNum: 394,
        mContent: '어묵은 따뜻하게 데워질 정도만 구워주면 돼요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/db981b55b571e3957c9f4cd08f31fcb51.jpg',
        recipeId: 57,
    },
    {
        mNum: 395,
        mContent:
            '- 야채는 세척해 물기 제거해서 준비 - 케첩과 머스터드소스는 이쁘게 짤 수 있도록 짤주머니처럼 위생봉투에 넣어 준비해주세요. 물론 그냥 뿌려도 무관해요. 전 일회용이 소스들이 있어 잘라서 사용했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/55ed82514dca9ac1ca5bc4959555241e1.jpg',
        recipeId: 57,
    },
    {
        mNum: 396,
        mContent: '- 식빵에 마요네즈 바르기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/86c3b20498c590eb6ab2fa00617c3f181.jpg',
        recipeId: 57,
    },
    {
        mNum: 397,
        mContent: '- 한쪽 식빵에 어묵',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/30a3ee03d96c824919283914ffc37fad1.jpg',
        recipeId: 57,
    },
    {
        mNum: 398,
        mContent:
            '- 야채 순으로 올리기 사각어묵 사용 시 옆으로 삐져나오는 부분이 많을 거예요 잘라서 식빵 안으로 넣어주세요. - 케찹과 머스터드소스 듬뿍 뿌리기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1d6d6acb50b87a9abcab265df55e37541.jpg',
        recipeId: 57,
    },
    {
        mNum: 399,
        mContent: '- 피클 올리기 - 슬라이스치즈 올리기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ad44e2f75b43a5e0e2bc20edd57c84041.jpg',
        recipeId: 57,
    },
    {
        mNum: 400,
        mContent: '- 다른 한쪽 식빵으로 덮어주면 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/dcd30a1630515eebe44c4042b03f21701.jpg',
        recipeId: 57,
    },
    {
        mNum: 401,
        mContent: 'Tip. 만들고 난 후 무거운 걸로 잠시 올려놓으면 재료들이 흐트러지지 않고 자를 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3d08a1f46aaeb0f0cf09c9377757ea2a1.jpg',
        recipeId: 57,
    },
    {
        mNum: 402,
        mContent: '포장해서 이쁘게 잘라주면 어묵토스트 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7cd8dafa2fa5a434b457193f1cf869df1.jpg',
        recipeId: 57,
    },
    {
        mNum: 403,
        mContent:
            '이번 샐러드를 준비하면서 함께 곁들인 켈로그 사르르 큐브 현미 그래놀라 입니다 통곡물 그래놀라와 오곡 푸레이크에 베리맛 큐브가 더해져서 고소하면서도 상큼함 맛의 시리얼 이에요 그래서 우유에 넣어도 맛있지만 요거트랑 더 잘 어울리더라구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/48419ee04e067a42b0b390dbce729a011.jpg',
        recipeId: 58,
    },
    {
        mNum: 404,
        mContent:
            '켈로그 시리얼에 처음 포함된 사르르 큐브는 베리믹스와 단백질이 풍부한 두유를 동결건조공법으로 제조해서 영양과 맛을 그대로 살리고 입에서 사르르 녹는 게 신기하더라구요 거기에 옥수수 귀리 등 오곡 푸레이크에 현미와 검정 약콩 분말을 더해서 영양과 동시에 고소함까지 더한 켈로그 시리얼 인데요 특히나 저는 샐러드 먹을때 시리얼을 종종 곁들이는데 요거트드레싱 과 이 고소한 현미 그래놀라가 잘 어울려서 맛 영양 까지 든든히 챙겨 보았어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5bf452782a895966af3401150dfd8ac91.jpg',
        recipeId: 58,
    },
    {
        mNum: 405,
        mContent:
            '먼저 요거트 드레싱 만들기 만약 단맛이 있는 플레인 요거트를 사용하신다면 꿀을 안 넣으셔도 되구요 무가당 요거트를 사용하신다면 꿀을 더해 주세요 그리고 다진양파는 물에 담구어 매운맛을 빼 주고 키친타올을 이용해서 물기를 제거한 다음 볼에 다진양파 요거트 마요네즈 꿀 레몬주스를 넣어주고 고루 섞어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6073a20f95c52df09e8860027322c4741.jpg',
        recipeId: 58,
    },
    {
        mNum: 406,
        mContent: '양상추와 어린잎 채소는 깨끗이 씻어 먹기 좋게 한입크기로 뜯어 준비 했답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7362dbe343229c28d34dcce0a18da11c1.jpg',
        recipeId: 58,
    },
    {
        mNum: 407,
        mContent:
            '백오이는 링으로 약간 도톰하게 썰어 주시구요 방울토마토는 반으로 갈라 준비 합니다 잘 익은 아보카도는 반으로 가르고 껍질을 제거해서 그래도 얇게 슬라이스 해서 준비 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8ef63512f6e2fd57049696c503c7695d1.jpg',
        recipeId: 58,
    },
    {
        mNum: 408,
        mContent: '본격적으로 투명한 유리볼에 샐러드 그리고 요거트 드레싱 담아 볼께요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fc9155877e2ca98eab59abb2066b7f521.jpg',
        recipeId: 58,
    },
    {
        mNum: 409,
        mContent: '맨 밑에 요거트 드레싱 2큰술 정도 넣어 주고 시리얼 1/3컵 넣어 주고 그 위에 양상추 어린잎 채소 올려 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b547a33efe7b04d8901007a29052fe8a1.jpg',
        recipeId: 58,
    },
    {
        mNum: 410,
        mContent: '요거트 드레싱 1큰술 올려 주고 오이 방울토마토 그리고 요거트 드레싱 1큰술 그 위에 다시 어린잎 채소 올려 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/47665b77839742f4ba9ca8abb28ed03c1.jpg',
        recipeId: 58,
    },
    {
        mNum: 411,
        mContent:
            '그 위에 얇게 슬라이스한 아보카도 1/4개 비스듬하게 올려 주고 살짝 드레싱 곁들이고 시리얼 올려 주면 섞지 않고 그대로 즐기기 좋은 아보카도 요거트 볼 샐러드 완성 입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b663243763637c975101f465f8db5a411.jpg',
        recipeId: 58,
    },
    {
        mNum: 412,
        mContent: '든든함 고소함 그리고 상큼함 까지 더한 아침식사로 또는 다이어트식으로 한끼식사로 충분히 즐기기 좋은 샐러드 만들어 봤어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0261db98632a47ec529ded1d8a94115f1.jpg',
        recipeId: 58,
    },
    {
        mNum: 413,
        mContent:
            '사이사이 요거트드레싱이 들어가서 고루 섞지 않고 그대로 위에서 천천히 먹어도 맛있구요 중간 부분부터 고루 잘 섞으면 시리얼이 넉넉하게 들어가서 조금 더 든든하게 영양 가득한 샐러드 맛있게 즐기기 좋답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/371e96ca7e02d1f0c219f1846c40c3ae1.jpg',
        recipeId: 58,
    },
    {
        mNum: 414,
        mContent:
            '저는 우유를 그닥 좋아하는 편이 아니라 샐러드 즐길때 시리얼을 곁들여서 먹는 편이에요 특히나 요거트 드레싱과 사르르 큐브 현미 그래놀라 잘 어울리네요 이 샐러드 한볼에 영양까지 채워져 있어서 다이어트 한다고 저녁을 샐러드로 드시는 분들에게는 든든함과 영양까지 챙긴 샐러드 레시피 랍니다 필수 5대 영양소가 있는 시리얼 레시피 어떠하신가요 ~ 맛있고 영양이 풍부한 시리얼 샐러드로 한끼 든든함 챙겨 보세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b0bb1d5f69550bd5eae7b6440c2b61971.jpg',
        recipeId: 58,
    },
    {
        mNum: 415,
        mContent: '담는 방법은 1번과 2번 두 가지 방법 중 택하시면 됩니다 전 1번 방법으로 담았어요 설탕과 식초는 식성에 따라 가감하시면 됩니다~!!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7383a8089b9482f6268d45fb8ac462461.jpg',
        recipeId: 59,
    },
    {
        mNum: 416,
        mContent: '마지막으로 다시 한번 헹구어 체에 밭쳐서 물기를 빼줍니다~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4923a9cb5800de00e7bd81004c0b18751.jpg',
        recipeId: 59,
    },
    {
        mNum: 417,
        mContent: '육수를 끓여서 체에 밭쳐 놓았어요 짜지 않게 담기 위해 육수와 간장을 반반 사용했어요~!!~~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c395e69ab689a980c3165a5f7df5c9771.jpg',
        recipeId: 59,
    },
    {
        mNum: 418,
        mContent:
            '간장과 육수와 설탕을 끓여줍니다 식초는 마지막에 불을 끈 다음 넣어줍니다 소독한 용기에 명이나물을 차곡차곡 담아준 다음 팔팔 끓은 간장을 바로 부어주었어요~!!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b2faf6bac49025e49986456417001ffa1.jpg',
        recipeId: 59,
    },
    {
        mNum: 419,
        mContent:
            '간장을 부어준 다음 누름돌이나 무거운 그릇을 올려줍니다 담은지 일주일 정도 지난 다음 국물을 따라내오 끓인 다음 식혀서 부어줍니다 2~3회 반복해주면 변하지 않고 맛있는 장아찌를 드실 수 있어요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cfbf3fb50d414a4172af97d091e9825d1.jpg',
        recipeId: 59,
    },
    {
        mNum: 420,
        mContent: '담은지 이틀 정도 지났기에 아직 제대로 간장 국물이 베어들지 않았어요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bd2efae07386e6a0155bb91e11ba7f151.jpg',
        recipeId: 59,
    },
    {
        mNum: 421,
        mContent: '명이나물을 팔팔 끓는 물에 소금을 넣고 데쳐줍니다 줄기를 만져보아 줄기가 부드러울 때 꺼내서 찬물에 헹구어 물기를 빼줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4583ff91f879100c6f19041f5e69cf231.jpg',
        recipeId: 59,
    },
    {
        mNum: 422,
        mContent: '밥에 마요네즈와 참치를 넣고 잘 섞어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4a6dbcd8c89672793ebfb382d7adab891.jpg',
        recipeId: 59,
    },
    {
        mNum: 423,
        mContent: '명이나물에 돌돌 말아주면 맛있는 명이나물 쌈밥이 완성된답니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/44836d8095edcf1ba76c2f60640c16661.jpg',
        recipeId: 59,
    },
    {
        mNum: 424,
        mContent: '양념은 기호에 따라 가감해주시면 됩니다 감자는 껍질을 벗긴 다음 썰어주고 양파도 채 썰어 준비했어요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/38374f9f6cfb6107c653e484e7fad8991.jpg',
        recipeId: 60,
    },
    {
        mNum: 425,
        mContent: '햄은 팔팔 끓는 물에 한번 데쳐서 불순물을 제거해준 다음 비닐팩에 넣어 으깨줍니다~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/55b31e4bfaa859d7e7906ba9e203af8c1.jpg',
        recipeId: 60,
    },
    {
        mNum: 426,
        mContent:
            '냄비에 감자와 양파를 넣고 모든 양념과 스팸 으깬 것도 넣어준 다음 물을 부어 바글바글 끓여줍니다~!~ 감자가 익을 때쯤 대파와 청양고추를 넣어 한소끔 더 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/50bafc8c5fe3d569a5457ced2f48467b1.jpg',
        recipeId: 60,
    },
    {
        mNum: 427,
        mContent: '재료를 썰어서 끓여주면 되는 가난한 레시피입니다~!~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c2a88aed573e9d6c800e72440025fd351.jpg',
        recipeId: 60,
    },
    {
        mNum: 428,
        mContent:
            '요즘 감자가 아니라 금자라 하더라고요~!~~ 마트에서 감자 1개 3천 원까지 한다니 감자 사 먹을 수 있겠는지요 저도 비싼 감자 싹이 터서 버리게 될까 봐 얼마 전 만들어 먹은 감자짜글이 이제야 올려드립니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5d768659ef2897b0d18e34f21bcebf781.jpg',
        recipeId: 60,
    },
    {
        mNum: 429,
        mContent:
            '감자가 너무 비싸서 맛있는 감자짜글이 만들어 드셔보시라 하기가 좀 그렇지요~!~~ 조금 지나면 햇감자가 나오니까 그때는 햇감자로 맛있게 만들어 드셔보시라 하고 싶네요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/26cb0c1a12b1b57dae730916de47599b1.jpg',
        recipeId: 60,
    },
    {
        mNum: 430,
        mContent:
            '물이 팔팔 끓으면 소금 1T을 넣고 명이나물을 줄기부터 넣어서 삶아줍니다 줄기를 만져 보아서 말랑할 때 꺼내서 찬물에 헹구어 줍니다~!!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6cca482fa827c3ab6ee7a2634614b1861.jpg',
        recipeId: 61,
    },
    {
        mNum: 431,
        mContent: '물기를 꼭 짠 다음 먹기 좋게 듬성듬성 잘라줍니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e89fd431bd73ea34c8c30f62b37cf0b41.jpg',
        recipeId: 61,
    },
    {
        mNum: 432,
        mContent:
            '모든 양념을 잘 섞어 줍니다~!~ 잘 섞은 양념에 명이나물을 넣고 조물조물 무쳐줍니다~!~ 마지막에 참기름이나 들기름을 넣어 다시 한번 휘리릭 무쳐주면 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/38acf320a7cc35b9688535cb21c4bfb31.jpg',
        recipeId: 61,
    },
    {
        mNum: 433,
        mContent: '완성 접시에 담아준 후 통깨를 솔솔 뿌려줍니다~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a4c80d93778d1a3de64e80f1352ef9b31.jpg',
        recipeId: 61,
    },
    {
        mNum: 434,
        mContent: '아삭하면서 알싸한 맛도 조금 맛있는 명이나물 무침 완전 밥도둑 이지요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/236780c3531187ba53fad09ebe4cda981.jpg',
        recipeId: 61,
    },
    {
        mNum: 435,
        mContent: '김치는 송송 썰어놓고 베이컨도 김치와 비슷한 크기로 썰어놓고 대파도 송송 썰어 놓았어요~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bb48612b800c0f5a8cf013ff6f90025d1.jpg',
        recipeId: 62,
    },
    {
        mNum: 436,
        mContent: '팬에 식용유를 조금 둘러준 다음 대파를 볶아줍니다 파향이 솔솔 날 때쯤 베이컨도 넣고 볶아줍니다~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5c799ec1931f65a8d11aef74ac38599b1.jpg',
        recipeId: 62,
    },
    {
        mNum: 437,
        mContent: '김치 썰어놓은 것도 넣어 볶아주다가 한쪽으로 밀어놓고 밥을 볶아줍니다~!~~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/678f577e597143e6daa0968f166f662c1.jpg',
        recipeId: 62,
    },
    {
        mNum: 438,
        mContent:
            '볶아놓은 밥에 한쪽으로 밀어 놓았던 김치를 섞어준 다음 휘리릭 다시 한번 볶아줍니다~!~~ 계란 프라이도 살짝만 익히는 반숙으로 해주었지요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5276f5da27a224db6fb2b493ee85f0411.jpg',
        recipeId: 62,
    },
    {
        mNum: 439,
        mContent: '그릇에 밥을 담아서 살짝 눌러준 다음 접시에 엎어줍니다 낫또 올리고 계란 프라이도 올려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/35e6dc753a7848b0f836ebdee53707091.jpg',
        recipeId: 62,
    },
    {
        mNum: 440,
        mContent: '한 끼 식사로 혼밥 어떠신가요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/834d7cb24e671533d5970c39b49616101.jpg',
        recipeId: 62,
    },
    {
        mNum: 441,
        mContent: '참나물은 팔팔 끓는 물에 천일염 1T을 넣고 살짝 데쳐 놓았어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/232f8aa6a79b314b617c891b1e520ba71.jpg',
        recipeId: 63,
    },
    {
        mNum: 442,
        mContent: '살짝 데친 참나물에 모든 양념을 넣고 조물조물 무쳐줍니다~!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/71a05a66428b80e4cbe271ba16ba5b551.jpg',
        recipeId: 63,
    },
    {
        mNum: 443,
        mContent: '마지막에 깨소금과 참기름을 넣어 다시 한번 무쳐주면 맛있는 참나물 무침 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7834da11478c1a940995a469f09057b11.jpg',
        recipeId: 63,
    },
    {
        mNum: 444,
        mContent: '담백하면서 맛있는 봄나물 먹을수록 맛있답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6b2ec79473b0d984f882e45e7ebefe441.jpg',
        recipeId: 63,
    },
    {
        mNum: 445,
        mContent: '된장이나 고추장에 묻혀도 맛있지만 국간장과 참치 액만으로 무쳤더니 깔끔하고 담백하고 맛있는 참나물 무침이네요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a9d8fcfe9f190a4a532b59cbe310c19d1.jpg',
        recipeId: 63,
    },
    {
        mNum: 446,
        mContent: '마당에 조금밖에 없는 참나물 우리 집 텃밭엔 귀한 나물이라 그런지 더 맛있는 것 같아요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3d7569bf1941c9abaf34641600d3c9b11.jpg',
        recipeId: 63,
    },
    {
        mNum: 447,
        mContent: '참나물은 고추장이나 된장을 넣지 않아도 깔끔하게 무쳐서 먹을 수 있어 너무 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ec0a1e0d4005960cca51dcaa1b497c851.jpg',
        recipeId: 63,
    },
    {
        mNum: 448,
        mContent:
            '물이 팔팔 끓을 때 소금을 넣고 데쳐줍니다 시판용 방풍은 줄기까지 잘라서 판매를 하기에 줄기가 물러지도록(3분~4분 정도) 데쳐준 다음 먹기 좋은 크기로 썰어서 무치면 됩니다~~!~ 저는 연한 잎만 잘랐기에 살짝만 데쳐주었어요!~~ 방풍나물을 맛있게 무치려면 너무 꼭 짜지 말고 물기만 빼는 정도가 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/acf765c3eaf0b86330d2a55dd4d1b78b1.jpg',
        recipeId: 64,
    },
    {
        mNum: 449,
        mContent:
            '들기름을 제외한 모든 양념을 잘 섞어줍니다 섞어놓은 양념에 방풍나물을 조물조물 무쳐줍니다~!~ 식성에 따라 고춧가루 대신 고추장을 넣어도 좋아요 식성에 따라 고춧가루 대신 고추장을 넣어도 좋아요 식성에 따라 고춧가루 대신 고추장을 넣어도 좋아요 식성에 따라 고춧가루 대신 고추장을 넣어도 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/becf6ca590d30aa2db75274ddadeaf551.jpg',
        recipeId: 64,
    },
    {
        mNum: 450,
        mContent: '썰어놓은 대파를 넣고 다시 한번 무쳐줍니다~!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ddcec5bf64a170fafca477b8d89f43661.jpg',
        recipeId: 64,
    },
    {
        mNum: 451,
        mContent: '마지막에 들기름을 넣고 다시 한번 무쳐주면 완성입니다!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c0a05b85dbfea9a7a00373b0a0bc922e1.jpg',
        recipeId: 64,
    },
    {
        mNum: 452,
        mContent: '방풍나물 특유의 향이 있지만 봄철 건강식으로 드시면 좋은 방풍나물입니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b7778639daa1704c74483970e395bc371.jpg',
        recipeId: 64,
    },
    {
        mNum: 453,
        mContent: '달큼하면서 쌉싸름한 향이 나는 방풍나물 봄나물은 건강밥상의 선두주자라 불릴 만큼 영양 가득 보약인 것 같아요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fc490abcc1563ebb3a8e0041db4976331.jpg',
        recipeId: 64,
    },
    {
        mNum: 454,
        mContent: '요즘은 봄나물들이 풍부하기에 매일 식탁에 여러 가지 보약 봄나물이 올라오게 되네요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9808a3e561f806de43013a40a55095e71.jpg',
        recipeId: 64,
    },
    {
        mNum: 455,
        mContent: '멍게는 맑은물에 소금을 약간 넣고 깨끗하게 씻어서 체에 받쳐 놓았어요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0b5817d199791b7ff7d03853cb72ab371.jpg',
        recipeId: 65,
    },
    {
        mNum: 456,
        mContent: '당근 오이 양배추는 채 썰어 준비했어요~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6ca29e1b958dd16a2ff91bd6468290231.jpg',
        recipeId: 65,
    },
    {
        mNum: 457,
        mContent: '그릇에 밥을 담고 모든 야채를 올려줍니다 깨끗이 씻어 물기를 빼놓은 멍게도 올려줍니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5ec16faf7176723bf128491488a32dfc1.jpg',
        recipeId: 65,
    },
    {
        mNum: 458,
        mContent: '마지막에 초고추장을 올려준 다음 참기름과 깨소금을 뿌려주면 맛있는 멍게 비빔밥이 완성됩니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1267d1085aae55ddcb9b9f3e76963f4f1.jpg',
        recipeId: 65,
    },
    {
        mNum: 459,
        mContent: '오른손으로 비비고 왼손으로 비벼주면 멍게향 물씬 멍게비빔밥입니다~!~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fa0ca70182ab0f75c1e6a35700cabccd1.jpg',
        recipeId: 65,
    },
    {
        mNum: 460,
        mContent:
            '먼저 무는 사방 크기 2cm & 두께0.5cm로 나박나박하게 썰어주시고 대파와 고추는 0.2cm로 슬라이스 해 주세요. 오징어는 껍질그대로 사용해서 만들어볼게요. 그래야 감칠맛이 더욱 살아난답니다. 오징어는 몸통을 가로로 3등분하고 간격 2cm정도로 잘라 먹기 좋게 손질할게요. 들어가는 무와 비슷한 크기로 잘라 손질해 주셔도 좋아요. 나중에 끓여 놓고 보면 크기가 줄더라구요. 오징어 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/799c6daaf0e7a702c4c2478e952a1ae81.jpg',
        recipeId: 66,
    },
    {
        mNum: 461,
        mContent:
            '분량의 양념장 재료를 넣고 잘 섞어서 준비 해 두겠습니다. 고춧가루3T,간장1T,액젓1T, 다진마늘1T,후추1/3t,맛술1T 액젓을 조금 넣어주시면 국물 맛의 깊이가 더욱 깊어집니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/56d14aad687f9b8c2599479b9ea3c0201.jpg',
        recipeId: 66,
    },
    {
        mNum: 462,
        mContent:
            '냄비에 물을 붓고 멸치다시백을 넣어 10분정도 국물을 우려 낼게요. 멸치다시백구성은 멸치2마리, 파뿌리2개,다시마1조각입니다. 다시백을 건져 내고, 무를 넣고 8분간 우르르 끓이고 이제 손질한 오징어를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ee09375195c4e94c1b5b034129f2195c1.jpg',
        recipeId: 66,
    },
    {
        mNum: 463,
        mContent:
            '오징어를 넣고 한소끔 끓으면, 양념장을 이때 넣어주세요. 그리고 부족한 간을 소금으로 맞춘 뒤 고추와 파를 넣어 한소끔 더 우르르 끓여주시면 되어요. 밥 한그릇 말아 뚝딱 하기 좋겠죠? 얼큰한 국물이 시원하고 깊은 맛 나서, 자꾸만 손이 가는 오징어 무국이에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fd1f3ae61c20798219dc62705d74cf4e1.jpg',
        recipeId: 66,
    },
    {
        mNum: 464,
        mContent: '건크랜베리에 물을 넉넉하게 붓고 30분간 불려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1790ae8d95c9033aaa681b76ea0d24a31.jpg',
        recipeId: 67,
    },
    {
        mNum: 465,
        mContent: '30분 후 불린 건크랜베리를 키친타월로 꾹꾹 눌러 남은 물기를 없애주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/cfa0edc6ab4a7136b4282cf10c9f548f1.jpg',
        recipeId: 67,
    },
    {
        mNum: 466,
        mContent: '곱게 다져주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/82ed32539d36501056c68bac6643488b1.jpg',
        recipeId: 67,
    },
    {
        mNum: 467,
        mContent: '볼에 말랑한 버터를 넣고 부드럽게 풀어준 다음 설탕을 넣고 충분히 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/da808253833d33b270e5e412d93cafe71.jpg',
        recipeId: 67,
    },
    {
        mNum: 468,
        mContent: '노른자를 넣고 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b8ac8499c00a926f77d27c6d9af910d01.jpg',
        recipeId: 67,
    },
    {
        mNum: 469,
        mContent: '박력분, 녹차가루, 아몬드가루를 체에 내려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1bd8d67801613f1e6b30f2d6b38ca19c1.jpg',
        recipeId: 67,
    },
    {
        mNum: 470,
        mContent: '주걱으로 가르듯이 섞어 반죽이 보슬보슬해지면 다진 크랜베리를 넣고 대충 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/afb49aedb907708cffa1cf6e064e95dc1.jpg',
        recipeId: 67,
    },
    {
        mNum: 471,
        mContent: '반죽을 가볍게 한 덩어리로 뭉쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b17ffec463e01198f0a8840bafb3ff371.jpg',
        recipeId: 67,
    },
    {
        mNum: 472,
        mContent: '완성된 반죽은 랩 또는 비닐에 담아 냉장고에 30분간 휴지시켜주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/3df60e9dcd29848906df0f1e3d64ac241.jpg',
        recipeId: 67,
    },
    {
        mNum: 473,
        mContent:
            '휴지가 끝나면 반죽을 0.4cm 두께로 밀어주세요. 쿠키를 두개씩 겹치기 때문에 두껍게 밀면 먹기 불편해요! 반죽이 굳어서 밀때 부서지면 실온에 5~10분 정도 두었다가 밀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/f894c7c242dba21fd7d080defaedd1331.jpg',
        recipeId: 67,
    },
    {
        mNum: 474,
        mContent: '원하는 쿠키커터로 찍어주세요(전 지름 4.5cm 사용함).',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/1443795263f99e1f8fa447e1025cbc871.jpg',
        recipeId: 67,
    },
    {
        mNum: 475,
        mContent: '160℃로 예열한 오븐에 10~15분 정도 구워주세요. 오븐 구운 색이 진하게 나오지 않도록 조심해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/e948e9859951a96e2318bf15ba1cd54a1.jpg',
        recipeId: 67,
    },
    {
        mNum: 476,
        mContent: '쿠키는 따뜻할 때 만지면 부서지기 쉬우니깐 오븐팬 위에 그대로 식혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/f6578d949d3cd8fb62b28c72c61f08e51.jpg',
        recipeId: 67,
    },
    {
        mNum: 477,
        mContent: '열기가 좀 식었으면 식힘망에 올려 마저 식혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/408f449d4d49384c8e124fa5654199681.jpg',
        recipeId: 67,
    },
    {
        mNum: 478,
        mContent: '[크림] 볼에 말랑한 크림치즈를 넣고 부드럽게 풀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/3a98c664c98df624e46432a3d668b60f1.jpg',
        recipeId: 67,
    },
    {
        mNum: 479,
        mContent:
            '슈가파우더와 바닐라익스트랙(또는 럼)을 넣고 잘 섞어주세요. 설탕을 넣으면 입자가 씹혀서 식감이 안 좋을 수 있어요. 바닐라익스트랙이나 럼은 생략해도 됩니다(넣으면 풍미가 좋아요).',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/cbcec7ec715e0ec2f20ecdd6f0c4a7bb1.jpg',
        recipeId: 67,
    },
    {
        mNum: 480,
        mContent: '완성된 크림은 짤주머니에 담아서 사용하거나 잼나이프를 사용해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/34ccf247220ae9f293ca82a5f9e7e66d1.jpg',
        recipeId: 67,
    },
    {
        mNum: 481,
        mContent: '크림을 처음부터 넓게 바르지 말고 작고 도톰하게 채워서 쿠키로 지긋이 눌러주세요. 넓게 바를 경우 얇게 발라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/59ed36a02fd0313a47ac841910a190af1.jpg',
        recipeId: 67,
    },
    {
        mNum: 482,
        mContent: '크림을 채웠으면 냉장고에 넣어 차갑게 드세요~ 크림치즈 때문에 2~3일 안에 드세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/8c2c2b4d7a80f98f8e0b5d7d83afa2b01.jpg',
        recipeId: 67,
    },
    {
        mNum: 483,
        mContent:
            '당면은 미리 미지근한 물에 담가 불려둘게요. 넓적한 당면을 사용하면 더 좋은데, 한인마트에 항시 판매하지 않더라구요. 가능하시다면 넓적한 당면 넣어보세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/aeb0872aa69c92194da6b085ff4384641.jpg',
        recipeId: 68,
    },
    {
        mNum: 484,
        mContent:
            '감자는 너무 크기가 크지 않다면 모양 살려 1cm 정도 두께로 잘라주시고, 크기가 좀 큰 경우에는 2등분 한 다음 잘라주시면 좋아요. 또 감자가 너무 크면 익는데 시간이 많이 걸려서 좋지 않더라구요. 양파도 감자와 비슷하게 사방 1cm 정도로 깍뚝썰기 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b9b9e9b77fcdb91981ee453da4d34c221.jpg',
        recipeId: 68,
    },
    {
        mNum: 485,
        mContent:
            '오늘 레시피의 핵심 양념장! 간장100mL,맛술1T,설탕2T,꿀1T, 후추1/2t,다진마늘1T,깨1t,참기름1t, 다진생강1t,고춧가루1t,다진고추1개 위 재료를 넣고 섞어서 준비할게요. 예전에 건고추를 넣어 만들어 봤는데 생각보다 원하는 칼칼한 맛이 안나더라구요. 청양고추 하나 다져서 넣는게 훨씬 매콤하고 개운해요. 숨겨진 매운맛이 찜닭의 맛을 한층 깔끔하게 만들어 줄거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/866ace43aaf823bf3212b9acc8227d3d1.jpg',
        recipeId: 68,
    },
    {
        mNum: 486,
        mContent:
            '찜닭의 먹음직한 갈색때문에 간혹 색소를 사용하는 경우도 있죠? 오늘은 자연스럽게 색도 더하면서 닭고기 잡내도 잡아줄 수 있는 팁으로 인스턴트 커피 파우더를 사용해볼거에요. 반 스푼 정도 넣어 주시면 커피향을 타고 잡내는 날아가고 먹음직한 색감과 풍미가 더해집니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8b9cc8663c0c9c5e14cdd5c1c74b3c4e1.jpg',
        recipeId: 68,
    },
    {
        mNum: 487,
        mContent:
            '먼저 닭고기가 잠길만큼 불을 붓고 한번 우르르 끓여 삶아주세요. 저는 닭다리만 넣고 만들어봤어요. 절단 된 손질 닭도 좋고 저처럼 다리 부분만 사용하셔도 좋습니다. 한소끔 데친다는 느낌으로 조리해주세요. 이 과정을 통해 불순물이 좀 빠지고 나중에 완성했을 때 훨씬 국물맛이 깔끔하고 좋답니다. 기름기 없이 좀 담백한 것을 원하시면, 껍질을 벗겨 요리하시면 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/384952849df1e6e7ea314f8c34c1911a1.jpg',
        recipeId: 68,
    },
    {
        mNum: 488,
        mContent:
            '데친 닭을 다시 새로 냄비에 담고 물 300mL를 넣어주신 다음 강불에서 끓기시작하면 커피파우더 1/2스푼을 넣을게요. 이때는 뚜껑을 덮지 말고 10분간 삶을게요. 커피향과 함께 잡내가 자연스럽게 날아가요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ceb0728e5b041406f5c89559880c73c51.jpg',
        recipeId: 68,
    },
    {
        mNum: 489,
        mContent:
            '이제 양념장을 넣어 줄 차례에요. 사용하는 간장마다 염도도 다르고 또 사용하시는 가열기구 화력도 달라서 완성 후 간의 세기가 달라지기 쉽더라구요. 일단 양념의 70%정도만 넣고 조리를 시작할게요. 저는 이번 요리에 키코맨 저염 간장을 사용했습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d5ca26a1194fde2ee53f1b2f5ecbf17c1.jpg',
        recipeId: 68,
    },
    {
        mNum: 490,
        mContent: '양념장을 넣고 중불로 낮추고, 20분간 간이 배도록 뚜껑 덮고 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6691c71b6700e4b2df38fbfe537ea9371.jpg',
        recipeId: 68,
    },
    {
        mNum: 491,
        mContent:
            '20분 후 간을 한 번 보시고, 여전히 많이 싱겁다면 남은 양념장을 이때 더 넣어주시고 감자와 양파를 넣고 뚜껑을 덮어 5분간 더 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/92f11f46d6d59caddee047984fe8cc5c1.jpg',
        recipeId: 68,
    },
    {
        mNum: 492,
        mContent:
            '5분 후, 새우,낙지를 넣고 뚜껑을 덮어 8분 조리 해 주시고 마지막으로 불린 당면을 넣고 강불로 높여 저어가며 4분 조리 해 주시면 먹음직한 안동찜닭 황금레시피 완성이에요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/adf7fc6bb13c83b4052957281b7e2c9b1.jpg',
        recipeId: 68,
    },
    {
        mNum: 493,
        mContent:
            '먼저 달걀을 삶아주세요. 끓기 시작한 시점부터 4분, 그리고 불을 끄고 5분 여열로 익힐게요. 이렇게 조리하시면 반숙으로 익힐 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b16c1115366d2477cebe7d5be13ec2871.jpg',
        recipeId: 69,
    },
    {
        mNum: 494,
        mContent:
            '냄비에 물2L를 넣고 소면 삶을 준비를 할게요. 여분의 찬물 한컵도 따로 준비 해 두어요. 나중에 면을 넣고 끓기시작하면 이 차가운 물을 부어 가며 조리해 더욱 쫄깃하게 면을 삶아 볼거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5f2136fb4ed7182bbcc7d001ab13e0d41.jpg',
        recipeId: 69,
    },
    {
        mNum: 495,
        mContent: '고추는 1개정도 다져 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/547c6c867b6aad85804fe1a2d3bdb5841.jpg',
        recipeId: 69,
    },
    {
        mNum: 496,
        mContent: '재료란 분량의 양념장 재료를 넣고 맛깔스러운 간장 양념을 만들어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7cf30853ac0c2642347552e6aad42f271.jpg',
        recipeId: 69,
    },
    {
        mNum: 497,
        mContent:
            '물이 끓기 시작하면 면을 백원짜리 동전만한 만큼 집어 넣고 저어가면서 끓이기 시작할게요. 이때 우르르 한소끔 끓어오르면 찬물을 붓고 이 과정을 3번정도 반복할게요. 삶는 시간은 사용하시는 소면 제품의 조리권장시간을 따라주세요. 이제 차가운물에 충분히 헹구어 전분기가 없이 준비 해 주세요. 면을 그릇에 보기 좋게 담고 원하는 양만큼 간장양념을 곁들여 계란과 함께 넉넉히 담아내시면 간단한 요리 간장비빔국수 완성이에요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6510804129cd2eef8ecce33eb36032a71.jpg',
        recipeId: 69,
    },
    {
        mNum: 498,
        mContent:
            '저는 오늘 자반 민어를 사용했어요. 손질이 어느정도 마쳐져 있고 또 적당하게 간도 맞추어져 있습니다. 가운데 뼈를 칼끝으로 따라가 평평하게 민어를 포 떠 주신 다음 껍질부분에 듬성듬성 칼집을 서너군데 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/65bb209eb787247ee60093dc330ed2ad1.jpg',
        recipeId: 70,
    },
    {
        mNum: 499,
        mContent:
            '이제 생선을 굽기 전에 겉에 묻힐 파우더 믹스쳐를 만들게요. 밀가루6T,카레가루1t,후추1/3t 이렇게 넣고 가볍게 섞고 손질민어에 묻혀 덧가루를 털어 내고 중불에서 4분 예열한 팬에기름을 3T두르고 껍질 쪽이 먼저 닿게 해서 굽기 시작할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/949a59ecbd0e5f5efa46ab2e485537b31.jpg',
        recipeId: 70,
    },
    {
        mNum: 500,
        mContent:
            '4분 정도 구워주시다가, 겉면이 완전히 바삭하게 익으면 뒤집에서 4분동안 더 익혀주세요. 이렇게 간단한 반찬레시피, 먹음직한 민어구이 완성이에요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/57089c24c701f0367b71545dd999e3fd1.jpg',
        recipeId: 70,
    },
    {
        mNum: 501,
        mContent:
            '오늘 저는 손질 된 냉동 새우를 사용했어요. 카운트 넘버가 30미만으로, 좀 크기가 큰 것으로 준비했어요. 구입하실때, 31/40과 같은 숫자를 보신 적 있으신가요? 숫자가 작을 수록 들어있는 마릿수는 적지만 크기는 큰 제품이에요. 1파운드(약450g)당 대략 몇 마리가 들어있다는 의미랍니다. 그래도 흐르는 물에 한 번 세척 후, 체에 바쳐 물기를 잘 제거해서 준비할게요. 그리고 향긋함을 더해 줄 쪽파는 0.5cm 간격으로 송송 썰어 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/fc2ede5321fcbeb5ad54260bbf1b7cec1.jpg',
        recipeId: 71,
    },
    {
        mNum: 502,
        mContent: '팬을 강불에서 4분 예열 후, 살짝 코팅한다는 느낌으로 올리브유를 반큰술 둘러줄게요. 그리고 새우를 굽기 시작해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/158a83d5546910132832624aa2772f731.jpg',
        recipeId: 71,
    },
    {
        mNum: 503,
        mContent: '한쪽면을 4분정도 굽고, 뒤집어 주신다음 후추로 향을 더하고 잡내는 잡아볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a1233274ee57b22f9f569b0a32e79db71.jpg',
        recipeId: 71,
    },
    {
        mNum: 504,
        mContent:
            '그리고 가염버터2T에 다진마늘1T를 넣어 주신 다음 전체적으로 볶듯이 3분간 익혀주세요. 저는 오늘 가염버터를 사용해서 따로 추가 간을 하지 않았어요. 이렇게 해도 얼추 간이 맞더라구요. 준비한 쪽파를 솔솔 뿌려주시고, 칠리소스 함께 곁들여주시면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e0b320b0687bd21aab02d1eef9649a991.jpg',
        recipeId: 71,
    },
    {
        mNum: 505,
        mContent:
            '먼저 스팸과 양파는 사방0.5cm 정도 크기로 깍뚝썰기 해 주신 다음 양파는 식초1T,설탕1T로 절여주세요. 달걀은 소금1/3t,후추1/3t,바질가루1/3t, 이렇게 함께 넣고 섞어서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1cca40cf8b2387818918ee2ac74f1b181.jpg',
        recipeId: 72,
    },
    {
        mNum: 506,
        mContent: '강불에서 3분 예열한 팬에 버터1T두르고 준비 해 두었던 달걀믹스처를 넣고 스크램블 에그를 만들어서 한김 식혀 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6b24e0deb90674bf5c7e5d0d8f776def1.jpg',
        recipeId: 72,
    },
    {
        mNum: 507,
        mContent:
            '체반에 절여둔 양파와 참치,,콘옥수수는 물기를 빼 주시고 믹싱볼에 달걀스크램블과 스팸을 비롯해 모든 재료를 함께 넣고 마요네즈3T를 더해 샐러드 속을 만들어 주신 다음 식빵 속에 넉넉히 채워주시면 끝!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ea048b5094456f98ca7c1bceb2fdc5cb1.jpg',
        recipeId: 72,
    },
    {
        mNum: 508,
        mContent:
            '먼저 닭다리에 칼집을 서너개 넣어서 준비할게요. 미리 염지하거나 간해두고 다음날 조리하면 최상이지만, 그렇지 못한경우엔 칼집을 넣어 더욱 빠르게 간이 배게 할 수 있어요. 그리고 오븐은 185도로 예열해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/75de9fc6691400edde293720952041561.jpg',
        recipeId: 73,
    },
    {
        mNum: 509,
        mContent:
            '시즈닝은 간단하게 해 볼게요. 마늘1T,바질가루1t, 후추1t,소금1/2T,올리브유2T 이렇게 넣어주세요. 소금간이 이때 너무 강하면 나중에 간을 고칠 수 없기 때문에 차라리 조금 심심하게 만드시고 시판되는 칠리소스 같은 것을 나중에 곁들여 드시는게 더 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/58005715d990024966ec3056a31ee7c81.jpg',
        recipeId: 73,
    },
    {
        mNum: 510,
        mContent: '자 앞뒤로 잘 마사지 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d977146279a82eedf750704760777c061.jpg',
        recipeId: 73,
    },
    {
        mNum: 511,
        mContent: '양파1개 큼직하게 잘라 오븐트레이에 깔고 그 다음 양념한 닭다리를 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/00836f0b5c853208ec3a9bc635de2cbd1.jpg',
        recipeId: 73,
    },
    {
        mNum: 512,
        mContent: '이제 예열 된 오븐에 넣고, 앞으로 30분간 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cd29cb7ca0697d309e74130331980eeb1.jpg',
        recipeId: 73,
    },
    {
        mNum: 513,
        mContent: '30분 뒤에 한번 뒤집어 주시고, 20분 동안 더 구워주시기만 하면 먹음직한 닭다리 오븐구이 완성! 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9ab6e3e42f5777c1cbecacd4a36a44311.jpg',
        recipeId: 73,
    },
    {
        mNum: 514,
        mContent:
            '먼저 양파는 0.5cm 두께로 잘라주시고, 청경채는 깨끗하게 씻어 물기 제거 후 크기에 따라 세로 방향으로 2~4등분 할게요. 청경재를 넣으주시면 달큰한 맛도 더해지고 짬뽕탕의 식감도 더욱 다양해진답니다. 고춧가루3T,간장1T,굴소스1T, 다진마늘1T,맛술1T,후추1/3t,물4T 그리고 위 재료를 넣고 한데 섞어 양념다대기를 만들어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6527689774e9184f6fe515309e11eb9d1.jpg',
        recipeId: 74,
    },
    {
        mNum: 515,
        mContent:
            '오늘 맛의 핵심, 짬뽕국물만들기 시작해볼까요? 강불에서 4분 예열한 팬에 식용유를 넉넉히 2T정도 넣고 양파 끝이 살짝 타도록 볶아주세요. 슬쩍 탄 양파맛이 불향을 더해줘요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5bf4d0543a165cf5d1ad14142526f6b91.jpg',
        recipeId: 74,
    },
    {
        mNum: 516,
        mContent: '준비한 다대기를 넣고 바짝 타지않게 잘 저어가며 볶아주세요. 충분하게, 3분정도 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/83cdce82e1c76afceb97e93d3d54aa911.jpg',
        recipeId: 74,
    },
    {
        mNum: 517,
        mContent: '강불을 계속 유지 해 주시고, 오징어,새우,바지락살을 넣고 바짝 한 번 더 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c34bdb2c078567cf7ecf7efe887aa13f1.jpg',
        recipeId: 74,
    },
    {
        mNum: 518,
        mContent: '이제 물600mL를 붓고, 준비한 청경채를 넣어 4분동안 우르르 끓여주시면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c2b3b8fc9c7e9989f9cdb6f012de66981.jpg',
        recipeId: 74,
    },
    {
        mNum: 519,
        mContent:
            '먼저 등갈비는 한번 데쳐줄게요. 한소끔 끓어 고기 색이 변하면 건져 내시고 물은 버려주세요. 이 과정을 통해 분순물과 핏물이 한번 제거 되어 나중에 요리를 완성 하셨을 때 국물이 깔끔하고 지저분하지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/dd3cc34eaf1ce021d12e2b1e769f09f81.jpg',
        recipeId: 75,
    },
    {
        mNum: 520,
        mContent:
            '이제 냄비에 데친 등갈비와 갓김치250g,김칫국물6T,, 고춧가루2T,물400mL, 굴소스1T,맛술2T,다진마늘1T, 후추1/2T,참기름1T,깨1/2T 위 양념재료를 함께 넣어주세요. 저는 종갓집 갓김치 팩 구입했는데, 2~3인분 만들기 딱 좋더라구요. 요즘 제품에는 익힘 정도도 표시되어 있던데, 꼭 묵은지 제품으로 사용해주세요. 그래야 깊은 감칠맛이 살아난답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3af51448794ad2e8f76a9b25244b57fb1.jpg',
        recipeId: 75,
    },
    {
        mNum: 521,
        mContent:
            '설탕대신에 단맛 더해 줄, 양파는 채썰어 위에 함께 얹을게요. 자 이제 강불에서 조리를 시작해볼게요. 한소끔 끓어오르면 한번 불순물 걷어내고, 뚜껑을 덮어 중불에서 40분간 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9b554af334d170879ad20a0a406acf8f1.jpg',
        recipeId: 75,
    },
    {
        mNum: 522,
        mContent:
            '중간중간 기름기 한번씩 걷어주시고, 물이 너무 졸아 사라졌다면 조금 추가해 주시는 정도만 신경 써 주시면 오늘 요리는 정말 넣고 찌기만 하면 완성이 되는 간단한 요리에요. 마지막으로 상에 내기 직전에, 참기름 살짝, 참깨 조금 얹어 주시면 푸짐하게 즐기기 좋은 갓김치를 활용한 등갈비김치찜 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ee0675db320182016dd1ef2720e138f71.jpg',
        recipeId: 75,
    },
    {
        mNum: 523,
        mContent: '먼저 양파 반개는 2cm 두께로 자르고 나머지 남은 양파는 채썰어 주세요. 이따가 샐러드 용으로 사용할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ee8ae0b14c1d853fabe6afdf034c717e1.jpg',
        recipeId: 76,
    },
    {
        mNum: 524,
        mContent: '냄비에 통후추,월계수잎,양파를 넣고 그 위에 준비한 고기를 얹어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9af9e989e102e0c53b76c1fe0cd5552c1.jpg',
        recipeId: 76,
    },
    {
        mNum: 525,
        mContent: '물1.25L를 붓고 이제 조리를 시작할게요. 처음에는 강불을 유지해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/025df78f1145c336d7d61c297ee236a41.jpg',
        recipeId: 76,
    },
    {
        mNum: 526,
        mContent:
            '수육 맛있게 삶는 법 팁, 적당한 삶기 시간이 중요해요. 덜 삶으면 속이 익지 않거나 질기고, 너무 오래 삶으면 고기가 으스러져요. 300g미만의 고기의 경우 35~40분 사이로 삶고 불을 끈 다음 여열로 10분 더 익히고 한근, 약600g정도를 조리하실 때는 60분에서 70분 정도 조리 후 불을 끄고 10분 정도 여열로 익힐게요. 보통 수육의 경우 통고기를 사용하기 때문에 준비하시는 양에 따라 조리시간이 달라질 수 있습니다. 물이 한 번 끓어오르면, 불순물을 걷어 내 주시고 불은 중-강 사이에서 조리해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1b1cfc0e5b5ffa0aa423e144db32058e1.jpg',
        recipeId: 76,
    },
    {
        mNum: 527,
        mContent:
            '수육이 완성되어가는 사이, 부추겉절이를 준비할게요. 양념장 재료를 섞어 준비하고, 부추는 깨끗하게 씻은 다음 5cm 간격으로 잘라서 아까 남겨 둔 양파슬라이스와 같이 잘 섞어서 준비할게요. 드시기 직전에 양념장과 섞어서 고기와 함께 곁들이면 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/ae9f87bfda8fe2f0f385d3cfce956a8a1.jpg',
        recipeId: 76,
    },
    {
        mNum: 528,
        mContent:
            '40분정도 지나고 불을 끈 다음 10분더 익힐게요. 고기를 건져 5분정도 식히고 먹기 좋은 크기 0.7cm 정도의 두께로 슬라이스 해 주시고 접시에 넉넉히 부추겉절이와 담아주시면 완성! 목살 돼지수육 맛있게 삶는법 어렵지 않죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/81db97f3a1f2faf7c984462b158de1ad1.jpg',
        recipeId: 76,
    },
    {
        mNum: 529,
        mContent: '먼저 미역을 미지근한 물에 담가주세요. 잘 풀어지고 불려졌다면 한번 세척해서 준비 해 주세요. 이물질이 걸러져 국물이 더욱 깔끔해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bf2a4035c501d9cdde9e3156039fd32e1.jpg',
        recipeId: 77,
    },
    {
        mNum: 530,
        mContent:
            '물을 넉넉하게 1L정도 넣고 양지머리를 넣어 삶기 시작할게요. 한소끔 우르르 끓어오르면 불순물을 제거 해 주신 다음 중불 - 강불 사이에서 뚜껑을 덮어 한시간 동안 삶아줄게요. 중간중간 기름기와 불순물을 제거해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7977f0a5f5f10cb351dff1388e6dd9441.jpg',
        recipeId: 77,
    },
    {
        mNum: 531,
        mContent: '잘 삶은 고기는 건져내고, 손으로 찢거나 칼로 잘라 먹기 좋게 손질 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c88f4bb1bd2820e046c6ec106963dc851.jpg',
        recipeId: 77,
    },
    {
        mNum: 532,
        mContent:
            '자 이제 불린 미역을 넣고, 다진마늘1/2T,후추1/3t, 소금1/2T,국간장1T,참기름1t 이렇게 넣고 기호에 맞게 간을 맞춰주시면 완성! 오랫동안 삶아 국물에 소고기의 깊은 맛이 우러났어요. 별다른 조미료가 없어도 감칠맛이 자연스럽게 돌더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5763eab1bf783a326fcf02860f328efe1.jpg',
        recipeId: 77,
    },
    {
        mNum: 533,
        mContent:
            '오늘 필요한 재료를 한데 넣고 잘 섞어서 준비 해 주세요. 버터가 너무 딱딱한 상태라면 전자레인지에 30초정도 데워주세요. 가염버터가 아닌 일반버터 사용시, 소금을1/2T정도 추가해서 간을 맞출게요. 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/bcfb39b9450efda487de03300cb8eb541.jpg',
        recipeId: 78,
    },
    {
        mNum: 534,
        mContent: '강불에 4분 예열한 팬에 양념해둔 갈릭버터 오징어를 넣고 4분동안 열심히 볶아주시면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/995920c2457e521a5a2ffdd35b9195c01.jpg',
        recipeId: 78,
    },
    {
        mNum: 535,
        mContent:
            '마지막에 쪽파 송송 썰어 올려 그 풍미를 더해 완성해 볼게요. 정말 쉽고 간단하죠? 집에서 맥주안주 스낵보다 맛있게, 그렇지만 간단하게 준비하기 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/959531efb094696a28d1927c746f4dbc1.jpg',
        recipeId: 78,
    },
    {
        mNum: 536,
        mContent:
            '먼저 당면은 찬물에 담가 불려줄게요. 30분정도 불려 주시면 충분한데, 급하게 요리를 좀 빨리 진행하실 때는 미지근한 물을 사용 해 주시면 시간을 단축하실 수 있습니다. 단, 미지근한 물에 불리신 경우 삶는 시간을 짧게 해 주셔야 면이 퍼지는 것을 방지할 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/62d50728cb467aeee5ddae5805e8bdb11.jpg',
        recipeId: 79,
    },
    {
        mNum: 537,
        mContent:
            '피망과 양파는 모두 0.5cm 정도 두께로 채썰어 주시고 버섯은 먹기 좋게 손으로 찢어서 준비할게요. 간장4T,맛술1T,다진마늘1T, 설탕2.5T,물2T,후추1/3t,참기름1T 위 재료를 섞어 양념장을 만들어주세요. 양념장의 한큰술 정도를 소고기 채썬것에 넣고 버무려 살짝 밑간을 해서 준비할게요. 저는 살짝 기름기가 있는 살치살을 구입해서 채썰어 사용했어요. 잡채용으로 구입하신다고 하면 채썰어 주시는 매장도 많을 거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f89d50e36ddd7ee0ea61fc46b02d9a221.jpg',
        recipeId: 79,
    },
    {
        mNum: 538,
        mContent:
            '이제 채소를 볶아볼텐데요, 강불에서 4분간 예열한 팬에 각 채소(양파-버섯-피망 순)를 볶을 때 마다 식용유는1/2T,소금은1/2t씩 넣고 가볍게 간을 해서 볶아주세요. 밑간을 살짝 해 주셔야 나중에 잡채를 완성 했을 때 맛이 따로 놀지 않고 잘 어우러져요. 그리고 소고기 역시 볶아서 준비 해 보겠습니다. 채소는 너무 오래 볶지 않고, 특유의 아삭함을 살려 주세요. 3분 이내로 강불에 빨리 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5d5e0c7213bc24262e1965d8d0beaca61.jpg',
        recipeId: 79,
    },
    {
        mNum: 539,
        mContent:
            '채소를 볶을 때와 같은 의미에서 오늘 잡채 황금레시피 팁으로 드리는 방법 중 하나가 바로 면을 삶을 때 간장과 설탕을 넣어 밑간과 함께 색감도 살짝 더하는 방법인데요. 왜, 잡채를 완성해 두고 막상 밥상에 내어 두고 보면 간을 봤을 때 보다 싱거운 적 있으시죠? 당면을 그냥 물에 삶아 사용하시면 아무래도 완성한 다음에 잘 맞춰두었던 간이 면에 흡수되어 예상한 간과 다르게 싱거워 질 수 있어요. 이렇게 약간만 밑간을 해 주셔도 훨씬 요리의 밸런스가 잘 맞는답니다. 물1.5L,간장6T,설탕4T 위의 분량을 함께 넣고 불려 둔 당면이기 때문에 삶는 시간은 5분 이내로 끝내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5d4531bdbea4a70348bad1f2c77ab1111.jpg',
        recipeId: 79,
    },
    {
        mNum: 540,
        mContent: '채반에 바쳐 물기를 빼 주세요. 따로 헹구거나 하지 않겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c54acda41237ed1dfd3b09fd2662fbc61.jpg',
        recipeId: 79,
    },
    {
        mNum: 541,
        mContent:
            '넓직한 팬에 참기름을 2T정도 두르고 준비한 갖은 채소와 당면, 고기를 모두 한 데 넣고 양념장을 3번정도에 나누어가면서 볶아주시는데 이때 중간 중간 간을 보셔서 기호에 따라 가장 적합하게 맞추어주세요. 사용하시는 간장 제품에 따라 염도의 차이가 있을 수 있으니 한 번에 모두 넣어 완성하시기 보단 나누어 넣고 부족하거나 과할 수 있는 간을 적합하게 맞추어 주시길 권장합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/01a8485482b5032a87b3566a247c029b1.jpg',
        recipeId: 79,
    },
    {
        mNum: 542,
        mContent:
            '먼저 양파는 0.5cm 두께로 채썰고 고구마는 크기에 따라 긴방향으로 2등분 정도 해서 양파와 동일한 두께로 편썰기할게요. 파는 세로 방향으로 2등분 뒤, 5cm 간격으로 잘라줄게요. 홍고추는 어슷하게 슬라이스 해 주세요. 고구마색이 좀 달라서 궁금해 하시는 분들이 계실 것 같아요. 한국재래종이 아니라 이곳 북미지역에서 더 널리 사용되는 Yam 이라고 불리는 고구마에요. 그래서 평소 보시는 고구마와 다소 색깔차이가 있지만 맛은 우리내 고구마와 아주 비슷합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4989ece8ba6f03aecf75a2a6d982709a1.jpg',
        recipeId: 80,
    },
    {
        mNum: 543,
        mContent:
            '다음의 양념장을 사용해서 닭고기를 먼저 재워둘게요. 저는 닭다리살만을 사용했고 뼈없이 손질 된 것을 구입해서 2cm 간격으로 잘라 준비했어요. 고추장3T,굴소스1T,간장1T, 다진마늘1T,맛술2T,고춧가루3T, 물3T,후추1/3t,설탕1T,물엿1T,참기름1t 냉장고에 30분 정도 숙성할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/4fabdfcccf6c6f283c83a02f46df8a951.jpg',
        recipeId: 80,
    },
    {
        mNum: 544,
        mContent: '넓적한 웍팬을 4분 강불에서 예열 후 식용유1T를 두르고 양념한 닭고기를 먼저 익히기 시작 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/88e5fba964a4e4fabc095851b0fd75d61.jpg',
        recipeId: 80,
    },
    {
        mNum: 545,
        mContent:
            '닭고기가 60%정도 익었을 때, 겉면 색이 좀 변하기 시작한 다음에 준비한 채소 중 콩나물만 빼고 모두 넣고 물200mL를 함께 더해주시고 가볍게 뒤적거리며 익힐게요. 밑이 타지 않는 정도로만 2~3분에 한번씩 고루 섞어주세요. 너무 자주 섞으시면 들어간 고구마가 쉽게 깨질 수 있어요. 이렇게 총 6분간 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/eaa0fa3ba833437f845eb75f41612c881.jpg',
        recipeId: 80,
    },
    {
        mNum: 546,
        mContent:
            '이제 콩나물과 떡사리를 넣고 뚜껑을 덮고 8분동안 중불에서 익혀주세요.마지막으로 상에 내기 전 한번 더 뒤적거려 주신 다음 깨를 솔솔 뿌려 먹음직하게 마무리 해 주시면 맛있는 콩나물 닭갈비 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e33836f64af1bf01f347c894ea97620c1.jpg',
        recipeId: 80,
    },
    {
        mNum: 547,
        mContent:
            '오늘 저는 돼지고기 등심을 사용했어요. 적당히 부드러우면서 기름기가 적어 튀김을 해도 느끼하지 않게 즐길 수 있어요. 탕수육감으로 손질을 부탁하시거나 직접 손질을 하실 경우에는 2cm x 5cm 정도 크기로 잘라주시면 좋아요. 그리고 여기에, 간장1T,맛술1T,다진마늘1T,다진생강1t, 후추1/3t,전분200g,튀김가루200g,물200mL 이렇게 넣고 잘 버무려서 냉장고에 다른 재료를 준비하는 동안 숙성시켜줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9c44aa895aa6b800c73dd332cd99b26c1.jpg',
        recipeId: 81,
    },
    {
        mNum: 548,
        mContent:
            '소스에 들어가는 채소를 손질할게요. 당근은 어슷하게 0.4cm 두께로 잘라주시고 양파는 동일한 두께로 채썰고 고추역시 당근과 같이 어슷썰게요. 오늘 저는 소스에 할라피뇨를 넣었는데 튀김요리가 고소한 맛에 시작이 좋지만 뒤로 갈수록 느끼해지기 마련인데 숨어있는 고추의 칼칼한 풍미가 한결 요리 자체를 깔끔하게 만들어줘요. 아이들을 위해 준비하실 경우에는 피망과 같은것으로 대체 해 주시면 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/3369f19220522af33fdc20a3d733c8ec1.jpg',
        recipeId: 81,
    },
    {
        mNum: 549,
        mContent:
            '새콤달콤한 맛으로 탕수육의 맛을 크게 좌우하는 소스. 식초150mL,물100mL,설탕8T, 꿀2T,간장2T,소금1t 위의 재료를 넣고 섞어주세요. 물녹말도 1:1비율로 미리 섞어서 준비 해 두겠습니다. 단맛은 설탕으로 기호에 맞게 조절해주시거나 꿀을 더 넣어주시면 소스의 풍미가 한결 고급스럽습니다. 물론 물엿으로 대체하셔도 좋아요. 그렇지만 그 작은 차이, 꿀자체가 갖고 있는 풍미가 한결 고급스러운 맛을 더해줄거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2d0e0a703a7276aa6465c742c2f6149c1.jpg',
        recipeId: 81,
    },
    {
        mNum: 550,
        mContent:
            '자 이제 불에 식용유 채운 냄비를 올려 주시고 약 5분정도 강불에서 예열 한 다음 굵은 소금을 한두조각 떨어뜨려 보셨을 때, 타다닥~ 하고 바로 튀어오르면 이제 튀길 준비가 다 되었어요. 양념반죽에 재운 고기를 튀기기 전에 한번 잘 뒤적거리시고 하나씩 떼 넣고 튀기기 시작해주세요. 한 번에 너무 많은 양을 넣으시면 고기가 고르익지 않을 뿐더러 집에서 소량튀길때 기름 양도 적기 때문에 기름온도가 쉽게 내려가게 되고 이때문에 튀김옷이 눅눅해질 수 있어요. 서너번에 나누어 튀기는 것이 물론 번거로우실 수 있지만 바삭함을 위해 한 번에 너무 많은 양을 튀기는 것은 피해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e7b19f48e68663171f284e99d288e8191.jpg',
        recipeId: 81,
    },
    {
        mNum: 551,
        mContent:
            '튀기기 시작한지 1분정도 후부터 나무젓가락을 사용해 가볍게 저어 고기가 서로 붙는 것을 방지 해 주시고 4분정도 튀기신 다음에 키친타올을 바쳐 고기를 건져주세요. 그리고, 강불에서 기름을 다시 2분정도 예열해 온도를 높이고 여기에 초벌튀김한 고기를 다시한번 넣고 2분동안 바짝 튀길게요. 겉면이 확실히 바삭해 지는게 느껴지실거에요. 그리고 다시 키친타올을 바쳐 불필요한 기름기를 제거할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/65fbabdb696df6d7683a2fedad8957c11.jpg',
        recipeId: 81,
    },
    {
        mNum: 552,
        mContent:
            '이제 소스만 곁들이면 완성이에요! 강불에서 4분 예열한 팬에 식용유1T를 두르고 채소를 2분간 볶다가 준비해 둔 소스재료를 붓고 한소끔 끓어오르면 물녹말을 두세번에 나누어 부어 원하시는 농도로 맞추어 주시면 탕수육 소스도 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0fb23119469c0be8436ac3757db510a21.jpg',
        recipeId: 81,
    },
    {
        mNum: 553,
        mContent: '먼저 멸치 다시백과 물600mL를 넣고 끓이기 시작할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5c6b1084df971532c9a1afa6cbc7fb7f1.jpg',
        recipeId: 82,
    },
    {
        mNum: 554,
        mContent:
            '육수가 우러나는 동안, 채소와 어묵을 손질할게요. 무는 사방 2x2cm 정도 크기로 잘라주시고 양파는 0.5cm 두께로 채썰어주세요. 매콤함 더해 줄 고추는 1cm 두께로 어슷썰어주세요. 판어묵은 2x5cm정도 크기로 자를게요. 어묵 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/8d645c5dfa5f85af159ed44041684f981.jpg',
        recipeId: 82,
    },
    {
        mNum: 555,
        mContent: '다시백을 빼 주시고, 준비한 순무를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e177520c0e45d9beab416c53ace552121.jpg',
        recipeId: 82,
    },
    {
        mNum: 556,
        mContent: '단맛이 우러나게 5분정도 끓이고, 이제 어묵과 양파를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/47e9dbc34e4fb77c7f115f8b7b9c30121.jpg',
        recipeId: 82,
    },
    {
        mNum: 557,
        mContent: '쯔유와 소금,후추로 기호에 맞게 간을 맞춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d91a9ae311f9ac2de1af9539054405151.jpg',
        recipeId: 82,
    },
    {
        mNum: 558,
        mContent: '고추와 쪽파를 넣어 한소끔 더 끓여주시면 어묵국 끓이는법 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f279f4f20961f79e4abdf1c2103921511.jpg',
        recipeId: 82,
    },
    {
        mNum: 559,
        mContent: '먼저 채소는 사방2cm크기로 자르고 대파는 0.5cm정도로 어슷썰어 고명용으로 준비 해 두겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d0e20bbc561a9b7a0a81d91a1d32dc361.jpg',
        recipeId: 83,
    },
    {
        mNum: 560,
        mContent:
            '먼저 냄비를 4분간 강불에 예열 후, 기름2T를 두르고 다진소고기, 마늘을 넣고 볶기 시작해주세요. 아래쪽이 살짝 눌게 되어야 나중에 찌개에 풍미가 더해집니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7ef07fe5c7532ee8847ce28def8b78151.jpg',
        recipeId: 83,
    },
    {
        mNum: 561,
        mContent:
            '이제 양념장을 넣어줄게요. 고춧가루3T,간장2T,굴소스1T, 맛술1T,다진마늘1T,후추1/3t 위의 재료를 넣고 이제 불을 중불로 줄이고 이 단계에서 4분간 충분하게 볶아요. 오늘 순두부찌개황금레시피 팁, 이 과정을 통해 깊은 구수한 맛과 순두부찌개 고유 풍미가 만들어질거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5a0dbe0bb4b30e0d4987111430cca0d21.jpg',
        recipeId: 83,
    },
    {
        mNum: 562,
        mContent: '이제 물을 더해 주시고, 불은 강불로 올려 주신 다음 한소끔 끓도록 몇 분 더 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/e970cad04c7d84c0c6b834279f18b1f41.jpg',
        recipeId: 83,
    },
    {
        mNum: 563,
        mContent: '한소끔 끓어오르면, 준비한 모든 채소를 넣고 4분간 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/b95fbe3aa4871defa5d834963b449fa11.jpg',
        recipeId: 83,
    },
    {
        mNum: 564,
        mContent:
            '이제 순두부를 넣어주시고 살짝 휘저어가면서 큰 덩어리를 먹기 좋게 잘라주세요. 마지막으로 상에 내기 전, 계란 하나 깨 넣어 주시고, 어슷썬 파와 깨,참기름 이렇게 넣어 마무리 해 주시면 끝!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/7dd6c53d8ab93b2e587f8969d1b3fbb01.jpg',
        recipeId: 83,
    },
    {
        mNum: 565,
        mContent:
            '열무와 얼갈이의 뿌리는 잘라내고, 시든 잎을 떼어내 버려주면 된답니다. 씻지 말고 그대로! 손이 많이 가면 풋내 난다더라고요~ 나중에 절이고 나서 씻어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/227ac752428dc05169932670b17954ba1.jpg',
        recipeId: 84,
    },
    {
        mNum: 566,
        mContent: '소금물(물 5L+천일염 400g)을 넣고 섞어준 다음, 그 위로 천일염 200g을 뿌려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/18f5a84958e091ff8c695517c07e934c1.jpg',
        recipeId: 84,
    },
    {
        mNum: 567,
        mContent: '그리고 비닐봉지로 덮어 1시간 정도 절여주세요. 30분 후에 위아래 위치 바꿔서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/b88b6cc644e58a5d3128489d98c9c4711.jpg',
        recipeId: 84,
    },
    {
        mNum: 568,
        mContent: '그 다음에 흐르는 물에 씻은 다음, 체에 밭쳐 물기를 빼주세요. (최소 10분 이상 가만히 놔두면 된답니다.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/81ccfda61fa5ee69e3158ed1ef9d875f1.jpg',
        recipeId: 84,
    },
    {
        mNum: 569,
        mContent:
            '냄비에 육수 재료들을 넣고 (다시마만 빼고) 중불에서 20분 끓인 다음, 다시마를 넣고 10분 더 끓여주세요. 그리고 체에 밭쳐 건더기를 버려주면 육수 완성.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/5575eca62461f28b6fa89d7d5c992eb51.jpg',
        recipeId: 84,
    },
    {
        mNum: 570,
        mContent: '양파, 배, 파프리카, 홍고추, 딸기는 믹서기에 갈아주세요. (밀가루풀국은 물 120cc + 밀가루 1.5T를 넣고 끓여주세요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/06c46b635f671875188ad1123627bd091.jpg',
        recipeId: 84,
    },
    {
        mNum: 571,
        mContent: '식혀 놓은 육수에 고춧가루를 넣고 곱게 풀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/807de0bac3a32b2e76aabcf6e667d48b1.jpg',
        recipeId: 84,
    },
    {
        mNum: 572,
        mContent:
            '그 다음 여기에 밀가루풀국 → 멸치 액젓 → 다진 마늘&생강 → 천일염 → 간 양파&배 → 간 파프리카 → 간 홍고추 → 매실액 & 간 딸기를 순서대로 넣고 잘 섞어주면 된답니다. 각 재료를 넣을 때마다 잘 섞이도록 저어가며!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d9c1a3b3cc69ba5556428f335f48b3301.jpg',
        recipeId: 84,
    },
    {
        mNum: 573,
        mContent: '이제 절인 열무&얼갈이와 손질된 쪽파를 넣고,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/0f05b814a3d0d379fcd941e326bdca951.jpg',
        recipeId: 84,
    },
    {
        mNum: 574,
        mContent: '쪽파만 먼저 양념에 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/d35e1441a53b119e7d1e7626535b8f001.jpg',
        recipeId: 84,
    },
    {
        mNum: 575,
        mContent: '여기에 고명 재료들을 넣은 다음,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/687df8c4541d70c73f96f3b91727aa6d1.jpg',
        recipeId: 84,
    },
    {
        mNum: 576,
        mContent: '모두 다 같이 살살살 버무려주면 끝. 너무 세게 버무리면 풋내 날 수 있으니. 살살살~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/e37457a4b18d3c6725144e2884526a541.jpg',
        recipeId: 84,
    },
    {
        mNum: 577,
        mContent: '익을 때까지 밖에 놔뒀다가 (대략 가쪽에 거품이 올라오고 익은 냄새가 날 때까지), 냉장고에 넣어 보관해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/29/3a0a6086f39ade5e0fa103d73cba134a1.jpg',
        recipeId: 84,
    },
    {
        mNum: 578,
        mContent:
            '떡국떡을 그릇에 담아 팔팔 끓는 물을 부어 5분간 불려줍니다. 이때 한번 붓고 5분 뒤 버린 후 다시 새로운 뜨거운 물을 또 부어 불리시면 더 쫄깃하게 불려진답니다. 떡국떡, 뜨거운 물 큰 볼 불리지 않고 삶아주시면 더 제대로 쫄깃한 떡국떡이 되겠지만 시간도 없고 냄비 하나 더 쓰기 귀찮으실 땐 이 방법을 쓰셔도 좋아요.^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/a753ef33e15db45d4c3ca62ccf692efa1.jpg',
        recipeId: 85,
    },
    {
        mNum: 579,
        mContent:
            '떡국떡을 불리는 동안 어묵을 먹기 좋은 크기로 썰어줍니다. 어묵이 다양한 크기가 있으면 좋지만 사각 어묵만 있다면 사각 어묵 2~3장 정도를 한 입 크기로 썰어 주시면 되요.^^ 어묵 도마 , 칼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/44a6fd250cff075411be3f97724cfa331.jpg',
        recipeId: 85,
    },
    {
        mNum: 580,
        mContent:
            '양념장을 만들어 놓습니다. 다진 마늘 1개 + 케첩 3스푼 + 고추장 1.5스푼 + 설탕 1.5스푼 + 진간장 1스푼 + 깨소금 2스푼 다진 마늘, 케첩, 고추장, 설탕, 진간장, 깨소금 그릇 , 스푼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/347e7cfd0d3f60437c100ffc1b90c3801.jpg',
        recipeId: 85,
    },
    {
        mNum: 581,
        mContent:
            '물렁해진 떡국떡은 건져내어 물기를 최대한 없애고 달구어진 팬에 식용유 1큰술을 둘러 어묵과 떡국떡을 같이 넣어 볶아줍니다. (중불) 식용유 후라이팬 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d0013ecdfadee23a5593a0bd5c747de11.jpg',
        recipeId: 85,
    },
    {
        mNum: 582,
        mContent: '어묵이 노릇해지고 두루두루 볶아지면 양념장을 넣어 줍니다. (약불) 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2dc20be96d918a128faf3a05310697861.jpg',
        recipeId: 85,
    },
    {
        mNum: 583,
        mContent: '3분정도 볶으신 후 그릇에 옮겨담아 깨소금을 슝슝 뿌려주시면 끝 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/84de35ebc3cfada36199a382163dc94d1.jpg',
        recipeId: 85,
    },
    {
        mNum: 584,
        mContent: '가위로 아랫부분을 돌려서 힘줄을 잘라줘요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5cbce17d38daa8a54bb2e4eb8af1ffe91.jpg',
        recipeId: 86,
    },
    {
        mNum: 585,
        mContent: '칼을 넣어서 최대한 펴준 후에 .. 소금과 후추를 샤샤샤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1ce9671a62c9d415b23cc265e21167081.jpg',
        recipeId: 86,
    },
    {
        mNum: 586,
        mContent:
            '실험적으로 바카스를 넣어봤지요~ 전혀 문제 없네요 ^^고추장 1 토마토케챱 뿌지직 2 다진마늘 1 바카스 졸졸졸 요리당 주르륵 1 식초 5방울',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d4581871c8b4134360155af3956d86fe1.jpg',
        recipeId: 86,
    },
    {
        mNum: 587,
        mContent: '다진양파 1, 청양고추 1, 대파줄기 1',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7652b7c21cde1185b880975370e180ca1.jpg',
        recipeId: 86,
    },
    {
        mNum: 588,
        mContent: '닭다리 노르스름하게 구워서 준비~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/739de0bde73e4f319dd70d36a9f6b4471.jpg',
        recipeId: 86,
    },
    {
        mNum: 589,
        mContent: '양파랑 청양고추 볶아주다가~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a67a4a2252dadfe1155298fd401d377e1.jpg',
        recipeId: 86,
    },
    {
        mNum: 590,
        mContent: '칠리소스 투하~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/de68a9ecbd59b5fa16e3d85308f4c7f31.jpg',
        recipeId: 86,
    },
    {
        mNum: 591,
        mContent: '졸여주기~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bf5dd2557d767297874ee3a7c1908ef61.jpg',
        recipeId: 86,
    },
    {
        mNum: 592,
        mContent: '거의다 쫄았을 때 ... 대파를 길죽하게 가위로 잘라서...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c0a1a15c55423bec039dcd92180fe7731.jpg',
        recipeId: 86,
    },
    {
        mNum: 593,
        mContent: '즉석밥을 데운후에 후라이팬 한켠에 쫙 펼쳐주기~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d0cc254f75149e5aa8678e420d0c8bb81.jpg',
        recipeId: 86,
    },
    {
        mNum: 594,
        mContent: '애호박 1개를 채썰어 준비합니다. 애호박 도마 , 칼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/2711280976b001e4a0b2993877d1377c1.jpg',
        recipeId: 87,
    },
    {
        mNum: 595,
        mContent:
            '달구어진 팬에 들기름 혹은 참기름을 1큰술 두르고 약불에서 채 썬 애호박을 80-90%정도 물러질 정도까지 볶아줍니다. 들기름 혹은 참기름 후라이팬 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/0d7b52f7f08b7b9bc9f28aacb3a582eb1.jpg',
        recipeId: 87,
    },
    {
        mNum: 596,
        mContent:
            '다진 마늘 1개와 소금 1티스푼을 넣어 볶아줍니다. 저는 맛소금 : 천일염(함초소금)= 1:1 비율로 1티스푼을 만들어 넣어주었어요. 천일염이 있으시면 1 : 1 비율로 넣어주시면 좋답니다.^^ 다진 마늘, 소금 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9b2d6e6e78c22980627a03e8525e5bf11.jpg',
        recipeId: 87,
    },
    {
        mNum: 597,
        mContent: '깨소금을 넣고 볶아 마무리하면 끝! 깨소금',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/696202013f63e045846709a70e19c4d81.jpg',
        recipeId: 87,
    },
    {
        mNum: 598,
        mContent: '버섯.양파.대파를 썰어 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/03a0a561a3df9be4ce9d37e9602e70ff1.jpg',
        recipeId: 88,
    },
    {
        mNum: 599,
        mContent: '쌈채소는 베이킹소다 뿌려 깨끗하게 씻어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/da49bfc3e170c007c1186d703eabcb081.jpg',
        recipeId: 88,
    },
    {
        mNum: 600,
        mContent: '고추장삼겹살을 400g넣고 팬에 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/385980c59f5715c0eadb5e72ed3b29031.jpg',
        recipeId: 88,
    },
    {
        mNum: 601,
        mContent: '채소를 넣은 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e2df18278482e35c41831d027cc11bdc1.jpg',
        recipeId: 88,
    },
    {
        mNum: 602,
        mContent: '두루치기양념을 고추장1.5t .간장1t.다진마늘1t.다진생강1t.매실액1t.맛술1t.올리고당1t넣어 만들엇니',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c0ee675e3b70c2bd7ce88f90262624831.jpg',
        recipeId: 88,
    },
    {
        mNum: 603,
        mContent: '센불에 양념넣고 통깨뿌려 고기를 볶습니다 .고기가 익으면 적당크기로자르고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/111b69a1f007c42300b81663cb7022141.jpg',
        recipeId: 88,
    },
    {
        mNum: 604,
        mContent: '접시에 담은후 파채썰어 올려줍니다 . 쌈채소에 싸서드시면 맛나요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d2b8b628dbc5c4f3ad92cd334a06e88e1.jpg',
        recipeId: 88,
    },
    {
        mNum: 605,
        mContent: '물 1100ml 냄비에 붓고 다시멸치 한줌 넣고 다시육수가 우러나도록 팔팔 끓여주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/97c99a3b233eefaad5d9c6fc027d20bb1.jpg',
        recipeId: 89,
    },
    {
        mNum: 606,
        mContent: '다시 육수를 끓이는 동안 야채,두부 썰어 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d87ebd919e59632acdf5d34fb1645e711.jpg',
        recipeId: 89,
    },
    {
        mNum: 607,
        mContent: '육수가 우러나면 모두 건져내어 주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/45044c4bf394b5572be988867707545b1.jpg',
        recipeId: 89,
    },
    {
        mNum: 608,
        mContent: '된장 3큰술 풀어주시고 천연조미료 반큰술 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5fceafd8289d1598ba1f7c09d147ac011.jpg',
        recipeId: 89,
    },
    {
        mNum: 609,
        mContent: '팔팔 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9e338607e180ff7baa134c2863a45bf01.jpg',
        recipeId: 89,
    },
    {
        mNum: 610,
        mContent: '호박,양파,홍고추 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/36c33d0dc7030612ac97c2637acaff541.jpg',
        recipeId: 89,
    },
    {
        mNum: 611,
        mContent: '뽀글 뽀글 끓여주다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/92ad9b68ff355eda975943f84606426b1.jpg',
        recipeId: 89,
    },
    {
        mNum: 612,
        mContent: '두부,대파 넣고 끓여주시면 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/de5c08d0bc99676b45711a8fbf140b151.jpg',
        recipeId: 89,
    },
    {
        mNum: 613,
        mContent: '물오어어는 껍질벗겨 손질해 먹기 좋은 크기로 썰고 통마늘은 편썬어 준비했어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/640c111c3d0290462666b901df59f53e1.jpg',
        recipeId: 90,
    },
    {
        mNum: 614,
        mContent: '팬에 기름 두르고 편썬 마늘 오징어 넣고 볶다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/46b8b3645f344d571df215f614977ba81.jpg',
        recipeId: 90,
    },
    {
        mNum: 615,
        mContent: '오징어가 반정도 볶아 졌을때 궇소스 간장 훗춧가루 넣고 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/1119e251fbbe12bf0aafa10c4ad993f91.jpg',
        recipeId: 90,
    },
    {
        mNum: 616,
        mContent: '굵직하게 썬 햇양파 넣고 볶다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/d1a682bcbdcab775c5356e61ba266b3a1.jpg',
        recipeId: 90,
    },
    {
        mNum: 617,
        mContent: '먹기 좋은 크기로 썬 마늘쫑 넣고 같이 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/aa778b9df0ad914c352e4666162f083f1.jpg',
        recipeId: 90,
    },
    {
        mNum: 618,
        mContent: '마늘쫑이 파릇하게 익으면 고춧갸 넣어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/088c2ed690f00470c5d4c7e4ede08ef21.jpg',
        recipeId: 90,
    },
    {
        mNum: 619,
        mContent: '오징어와 마늘쫑이 졸이듯이 걸죽하게 볶아 마지막에 참기름 넣어 마무리~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/5d914ab6593356b1d7e4a9c0a8c70d051.jpg',
        recipeId: 90,
    },
    {
        mNum: 620,
        mContent: '칼칼한 양념이 어울리늗 오징어 마늘쫑 볶음 메인 반찬으로도 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/4060d0959fe228da4d5f3630e5553a8b1.jpg',
        recipeId: 90,
    },
    {
        mNum: 621,
        mContent: '먼저 적색 파프리카와 파는 사방 0.5cm 정도 크기로 잘라주세요. 살짝 칼칼하게 완성하고 싶으시면, 고추를 조금 다져 넣으셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0a62a6ac093664773780694f18d364ae1.jpg',
        recipeId: 91,
    },
    {
        mNum: 622,
        mContent: '달걀3개와 다진 채소재료를 넣고 한번 잘 섞어서 준비해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b4dfaf6957254eb3e831983c856de1fe1.jpg',
        recipeId: 91,
    },
    {
        mNum: 623,
        mContent:
            '이제 육수를 만들어 볼게요. 냄비에 물400mL를 붓고 한소끔 끓기 시작하면 이때 쯔유1T,소금1t 이렇게 넣고 간을 맞추어 주세요. 이제 물이 한소끔 끓어오르면, 준비한 달걀 믹스처를 넣고 거품기로 잘 저어주세요. 약간 처음보다 점성이 생길 때 까지 충분히 잘 저어주셔야 해요. 이때 불은 강불을 유지할게요. 가스불로 강한 불에서 조리시, 이렇게 만드시면 화산계란찜이 된답니다. 저는 전기 스토브를 가정에서 사용해서 화산계란찜을 만들지는 못했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9e569e96dd65d330ad26a89743b9c02b1.jpg',
        recipeId: 91,
    },
    {
        mNum: 624,
        mContent:
            '어느정도 점성이 생기면, 이제 살짝 무게감 있는 뚜껑을 덮고 불을 끄고 남은 열로 앞으로 4분간 더 조리해 주시면 완성! 그 다음 참기름,참깨,후추로 가볍게 마무리 해 주세요. 계란찜만드는법 어렵지 않죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a07646159db90086315fe2c9d3563f9d1.jpg',
        recipeId: 91,
    },
    {
        mNum: 625,
        mContent:
            '먼저채소를 손질할게요. 사방2cm정도로 맞춰 잘라주시고, 느타리버섯은 그대로 사용하시거나 손으로 찢어 손질해주시면 좋습니다. 고추는 매운것으로 하나 넣어주시면 국물맛이 더욱 개운하고 좋더라구요. 파는 어슷하게 썰어 준비 해 둘게요. 버섯 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/35ae2861943a1894c05c381c7093fef81.jpg',
        recipeId: 92,
    },
    {
        mNum: 626,
        mContent:
            '이제 육수를 만들어볼게요. 홍합을 넣어 만들거지만, 기본적으로 베이스 육수가 있으면 찌개 맛이 확실히 살아나겠죠? 멸치다시백을 활용할텐데, 구성은 멸치2마리,다시마2조각입니다. 한소끔 끓어오른 후 8분정도 조리해주시고 멸치다시백은 건져 내 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d3ba486350cc968edf8756b5bf8a63221.jpg',
        recipeId: 92,
    },
    {
        mNum: 627,
        mContent:
            '이제 준비한 채소와 홍합 살을 넣고 끓여주세요. 두부와 파를 빼고 모든 채소를 넣어주시면 되어요. 채소에서 단맛이 나올 수 있도록, 이때 5분정도 충분히 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/88e7d3ad3f8fb8545f903d2312ce2e0c1.jpg',
        recipeId: 92,
    },
    {
        mNum: 628,
        mContent:
            '이제 체를 사용해서 된장을 넣어 풀어줄게요. 오늘 레시피에 1.5T정도 사용했는데 사용하시는 제품마다 염도가 다르기 때문에 간을 된장을 사용해서 기호에 맞게 조절 해 주시면 좋습니다. 체가 없으시다면 된장 그 채로 넣고 잘 저어 풀어주시는데 신경 써 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/086182c5b30680f332e026ce0dc6da561.jpg',
        recipeId: 92,
    },
    {
        mNum: 629,
        mContent: '이제 찌개가 거의 완성 되었어요. 두부,파를 넣어 한소끔 더 끓여주세요. 구수한 맛 그대로 담긴, 된장찌개 맛있게 끓이는법 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/99d667a5ed9b213033b521cee9dd76b31.jpg',
        recipeId: 92,
    },
    {
        mNum: 630,
        mContent:
            '먼저 고기와 채소는 먹기 좋은 크기로 사방2cm 정도로 잘라 손질할게요. 사용한 미니당근이 친숙한 식재료가 아니라면 일반 당근으로 사용하셔도 좋아요. 미니당근이 살짝 달콤한 맛이 있어서 음식에 적당한 양을 사용하면 풍미를 더해줘서 좋더라구요. 고기는 기름기 적으면서 이런 끓이는 요리에 꽤 잘어울리는 돼지고기 등심 부위를 사용했습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f678508fbaee0705eedcb634fdee67811.jpg',
        recipeId: 93,
    },
    {
        mNum: 631,
        mContent:
            '냄비를 강불에서 4분 예열 후, 식용유1T를 두르고 고기를 볶기 시작할게요. 오늘 카레 맛있게 만드는법 팁은 바로 고기를 충분히 볶아 주시는 거에요. 전면이 고르게 노릇할 때 까지, 냄비 바닥이 좀 눌어도 상관없어요. 이때 맛있는 풍미가 더해집니다. 그리고 채소를 모두 넣고 살짝 볶고 물 350mL를 부어 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d3cb808acc1ad02506ab5ddb37b2ebca1.jpg',
        recipeId: 93,
    },
    {
        mNum: 632,
        mContent:
            '채소가 잘 익을 수 있도록 뚜껑을 덮어 앞으로 8분간 끓여주세요. 이때는 불을 중불로 줄여줄게요. 만약, 코팅 냄비가 아니라 잘 눌러붙는 냄비인 경우에는 중간중간 한 번씩 저어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7dafca28397b651c63a94ca508041ec01.jpg',
        recipeId: 93,
    },
    {
        mNum: 633,
        mContent:
            '자, 이제 카레 블록을 넣어주세요. 저는 골든커리 일본 제품을 사용했고, 물350mL정도 당 한개의 블록이 적당한 간과 농도 맞추기 좋은 양이에요. 블록을 넣은 후에는 더욱 눌러 붙기 쉽기 때문에 잘 저어주시는 것이 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/405ec3342388df43d75b10ddcbd0a9c51.jpg',
        recipeId: 93,
    },
    {
        mNum: 634,
        mContent: '카레 블록을 넣어주신 다음, 전체적으로 맛이 배이도록 잘 저어 주시면서 3분간 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f8a3b4d44bcd71f111bdcc38f3a4e93d1.jpg',
        recipeId: 93,
    },
    {
        mNum: 635,
        mContent: '이제 따뜻한 밥을 그릇에 담고, 맛있게 완성 된 카레를 넉넉하게 얹어주시면 맛있는 카레라이스 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4d3305f88db7365e8df76c97fc65a4721.jpg',
        recipeId: 93,
    },
    {
        mNum: 636,
        mContent:
            '먼저 참치캔 기름 제거 후, 달걀1개,다진청양고추1개,참기름1t 이렇게 넣고 잘 섞어주세요. 참치기름에 맛성분이 있어 찌개등에 활용할 때 좋지만 오늘은 팬케익으로 만들거라서 기름과수분이 많으면 모양 성형하기가 꽤 까다롭고 완성했을 때 안쪽의 식감이 축축할 수 있거든요. 체에바쳐 꾹꾹 눌러서 캔의 기름과 수분을 최대한 제거할게요. 그리고 쪽파는 송송 썰어서 고명으로 미리 준비 해 둘게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b013b7d06021293d6a8d399abdda73881.jpg',
        recipeId: 94,
    },
    {
        mNum: 637,
        mContent:
            '냄비에 물550mL를 넣고 끓기시작하면 먼저 스프를 넣을게요. 불은 강불을 유지 해 주세요. 면을 넣기 전에 한쪽에 프라이팬을 미리 올려주세요. 지금 예열해놔야 면이 불기 전에 참치팬케익을 완성할 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98d48e884612d26005e622b709ea63b81.jpg',
        recipeId: 94,
    },
    {
        mNum: 638,
        mContent: '그리고 이제 면을 넣고 살짝 풀리면 서너번 들었다 놨다 해 주세요. 앞으로 4분간 더 끓여볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/be91aefacf54eaf68637911d1111d0971.jpg',
        recipeId: 94,
    },
    {
        mNum: 639,
        mContent:
            '면이 익는 사이, 예열 된 팬 위에 식용유1T를 두르고 참치팬케익 믹스처를 도구를 이용하시거나 혹은 스푼등으로 모양을잡아 둥글게 앞뒤로 노릇하게 부칠게요. 마지막에 완성 된 라면위에 가볍게 얹어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/66cf227f46be5532c777ebe3ddde25351.jpg',
        recipeId: 94,
    },
    {
        mNum: 640,
        mContent: '송송썬 파와 참기름1t를 가볍게 끼얹어 주시면 끝! 라면 맛있게 끓이는법, 색다른 라면 요리로 좋겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2d87aec8991f355ff092bbbb8658d89e1.jpg',
        recipeId: 94,
    },
    {
        mNum: 641,
        mContent: '먼저 소세지는 어슷하게 0.7cm정도 두께로 잘라주시고 마늘은 깨끗히 씻어 물기를 잘 제거 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e32f422dc4ee25c224d54283e6bba4be1.jpg',
        recipeId: 95,
    },
    {
        mNum: 642,
        mContent:
            '팬을 중불에서 3분 예열 후 올리브유 3T를 두르고 마늘을 노릇하게 충분히 익힐게요. 그리고 올리브유는 1T 정도만 남기고 두 스푼을 따라 내 주세요. 남은 기름은 다른 요리에 충분히 활용 가능해요! 볶음요리 등에 사용하시면 더욱 풍미가 깊고 고급스럽답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7d92fb2c61f751c698c0a721333c192c1.jpg',
        recipeId: 95,
    },
    {
        mNum: 643,
        mContent: '이제 준비한 소세지를 넣고 강불에서 3분간 충분히 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ad1f92e765e9d5acb9114f0988ca5e9a1.jpg',
        recipeId: 95,
    },
    {
        mNum: 644,
        mContent:
            '이제 불을 약불로 줄여주시고 바베큐소스 150g을 넣고 한번 더 볶아주시면 간단한 밑반찬 만들기 갈릭소세지볶음 완성입니다! 바질가루 살짝 뿌려주시면 한결 풍미가 살아나요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1e4e32890338b20736d7ae88d1657ad81.jpg',
        recipeId: 95,
    },
    {
        mNum: 645,
        mContent: '먼저 쪽파는 송송썰어 고명으로 얹어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4f062a3f7d868b6d6bc77df223542a711.jpg',
        recipeId: 96,
    },
    {
        mNum: 646,
        mContent: '냄비에 물을 붓고 멸치다시백을 넣어 육수를 만들게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c3e3b20928ff6e2ee768f722b98d46571.jpg',
        recipeId: 96,
    },
    {
        mNum: 647,
        mContent:
            '물이 끓기 시작하면 김치와 모듬어묵을 넣고 쯔유,후추로 간해주세요. 어묵은 한입크기로 먹기 좋게 어묵탕 전용으로 나온 제품이 이런 요리에 활용하기 편하더라구요. 쯔유로 간을 맞추면 풍미가 좋은데, 간장이나 소금으로 대체 가능합니다. 김치는 묵은지를 사용 해 주셔야 그 깊이 있는 맛이 국물에 배어들어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/dfcd17b5939302fa67c198dc366f768b1.jpg',
        recipeId: 96,
    },
    {
        mNum: 648,
        mContent: '우동 면은 흐르는 따뜻한 물에 뭉친 부분만 잘 풀어주시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f652a79560e9445334f32c248a2bdb5b1.jpg',
        recipeId: 96,
    },
    {
        mNum: 649,
        mContent: '한소끔 끓어오른 김치어묵국물을 우동면 위에 넉넉히 담아주시면 간단하면서 먹음직한 저녁메뉴 추천, 김치어묵우동 만들기 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/84d510bef2dd7a20de57c6478d7cff6b1.jpg',
        recipeId: 96,
    },
    {
        mNum: 650,
        mContent:
            '먼저 마늘과 고추는 두께 0.5cm 정도로 편썰고 쪽파는 어슷하게 0.3cm로 슬라이스할게요. 나중에 파는 고명으로 사용해서 향긋함을 더해 완성 해 볼거에요. 저는 청양고추 구하기 어려워서 할라피뇨를 대신 사용했는데 매운고추 아무거나 대체 사용 가능해요. 또는 매운 맛을 원하지 않으시면 생략하여 만드실 수도 있습니다. 참치는 일반 마일드 참치, 우리가 흔히 사용하는 대중적인 제품 사용했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/af193366789059e96101145d901fd4661.jpg',
        recipeId: 97,
    },
    {
        mNum: 651,
        mContent:
            '냄비에 물을 붓고 한 번 끓기 시작하면 이때 파스타 면을 넣어주세요. 밑간 해 준다는 생각으로 소금은 반큰술 정도 넣어줄게요. 손으로 잡아 백원동전 크기 정도면 1인분으로 적합한 양이랍니다. 그램수로 재료양 따지기 힘드실 때 이렇게 한 번 계산 해 보세요. 8분 정도 삶아 주신다음, 체에 바쳐 물기를 빼 주시고 올리브유1T를 넣어 잘 섞어주세요. 이렇게 해 주시면 면이 서로 붙는 것을 방지할 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ded3cc9c42973007db065f794c35e7631.jpg',
        recipeId: 97,
    },
    {
        mNum: 652,
        mContent: '팬을 중불에서 3분 예열 후, 올리브유1T를 넣고 마늘을 볶아 향을 낼게요. 2분정도 가볍게 볶아서 겉면이 살짝 노릇하게 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e0512bdd33d8699aa98a6ed70fed1c8a1.jpg',
        recipeId: 97,
    },
    {
        mNum: 653,
        mContent: '이제 고추를 넣고 매운 향이 나게 30초간 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/35c9e54311f01214632df5ad8255d7d01.jpg',
        recipeId: 97,
    },
    {
        mNum: 654,
        mContent:
            '참치캔을 이제 넣어줄게요. 함께 들어있는 기름도 넣어주세요. 살짝 느끼할 수 있는데, 그래서 마늘과 고추를 넣으면 조금 개운하게 즐기실 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0f721d583465d18f6ac2ea2e036abd0a1.jpg',
        recipeId: 97,
    },
    {
        mNum: 655,
        mContent:
            '이제 면을 넣고 강불에서 2분간 잘 볶아주세요. 보통 간이 참치 캔 때문에 어느정도 자연스럽게 맞춰지는데 취향에 따라 간장이나 소금으로 추가간을 해 주시고 후추와 파로 마무리 해 주시면 먹음직한 참치 캔 요리, 캔 참치 파스타가 완성 되었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/be8b3d0bcf04d28711c0483599111a701.jpg',
        recipeId: 97,
    },
    {
        mNum: 656,
        mContent:
            '먼저 두부는 큼직하게 1.5cm두께로 자르고 양파,파,호박,버섯은 먹기 좋게 손질해서 준비 해 둘게요. 버섯은 얼마든지 구하기 쉬운것으로 또 선호하시는 종류로 준비해서 활용하실 수 있답니다. 양파 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/cd1adbfc5e82d06ba1f93f246a64e6bc1.jpg',
        recipeId: 98,
    },
    {
        mNum: 657,
        mContent:
            '간단하게 육수를 만들어볼게요. 멸치다시백(멸치2마리,다시마2조각), 쯔유1.5T,물500mL,고추1개 위의 재료를 활용해서 만들어주세요. 저는 칼칼한 맛을 위해서 육수에 고추를 하나 사용했어요. 쯔유가 없으시다면 우동소스로, 혹은 간장으로 대체 가능합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2f5ab6a3f6b0449f452dd2d26cdbd2c51.jpg',
        recipeId: 98,
    },
    {
        mNum: 658,
        mContent: '냄비에 갖은 해산물재료와 함께 양파와 육수를 넣고 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a99747d8242f3fea493a95ab6658779b1.jpg',
        recipeId: 98,
    },
    {
        mNum: 659,
        mContent:
            '한소끔 끓어오르도록 강불에서 조리 해 주시고 떠오르는 불순물을 잘 걷어 내 주세요. 그래야 나중에 완성했을 때 국물맛이 한결 깔끔하고 좋답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98b27c707ba6e0ebe1224af2b16724341.jpg',
        recipeId: 98,
    },
    {
        mNum: 660,
        mContent: '이제 간을 맞춰 볼 차례에요. 고춧가루1T,후추1/3t,소금1/2T,다진마늘1T 위의 재료로 기호에 맞게 두부찌개의 간을 맞출게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bebad24baebab47757be6fd5edd8bace1.jpg',
        recipeId: 98,
    },
    {
        mNum: 661,
        mContent:
            '이제 두부와 파, 호박을 넣고 한소끔 4분동안 끓여주세요. 혹시라도 부족한 간을 추가로 소금으로 채워주시면 좋습니다. 얼큰하게 즐기기 좋은 두부요리, 얼큰두부찌개가 완성되었습니다. 집밥상차림에 곁들이기 좋겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2f4f767f6cef5f184d39bcf088abf1971.jpg',
        recipeId: 98,
    },
    {
        mNum: 662,
        mContent:
            '김치전 반죽을 먼저 만들어볼게요. 김치가 너무 크지 않다면 그대로 사용 해 주셔도 좋습니다. 혹은 먹기 좋게 다지듯 준비하시면 아이들 간식으로 준비하실 때 좋아요. 그리고 김칫국물을 4스푼 정도 같이 반죽에 넣어볼거에요. 간도 더 잘 맞춰지고 또 숙성김치의 감칠맛이 부침개에 그대로 더해진답니다. 여기에 매운고추 하나 썰어 넣고, 저는 오늘 홍합살을 좀 넣어봤어요. 오징어나 새우 등 선호하시는 해산물 넣어 주시면 더 맛있어요. 여기에 부침가루250g(약한컵), 물150mL,달걀1개 함께 넣고 잘 섞어서 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/392ccd4c247e700c7c30fead7503455c1.jpg',
        recipeId: 99,
    },
    {
        mNum: 663,
        mContent:
            '반죽이 너무 묽으면 부칠 때 어렵고 또 바삭하게 만들기 쉽지 않더라구요. 반대로 반죽이 너무 되직하면, 오늘 부침가루를 사용했기 때문에 맛이 짤 수 있고 또 밀가루 냄새가 나요. 살짝 흐르는 반죽농도로 적당한 되직함이 반죽에서 느껴지는게 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2cd0b5752cb46aff372be6e4b35356951.jpg',
        recipeId: 99,
    },
    {
        mNum: 664,
        mContent:
            '한 번 부치 실 때, 총 3스푼 정도의 식용유를 써요. 가장 처음 강불에 팬을 3분 예열 후, 식용유 2T정도 넉넉히 두르고 반죽 한국자 떠서 잘 넓게 펴 주세요. 오늘 사용한 프라이팬은 26cm 사이즈입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9dc23c54d2a15970f7f26809ceaaa40f1.jpg',
        recipeId: 99,
    },
    {
        mNum: 665,
        mContent:
            '김치전 표면이 좀 마르기 시작할 때, 약 3~4분 정도 경과 후 부침개를 잘 뒤집어 주세요. 그리고 뒤집고 1분 뒤에 식용유 1T를 추가로 더 둘러주시면 양쪽 모두 바삭해요. 그리고 3분 더 익혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2f2c6e7065083b36b99a34ce308905621.jpg',
        recipeId: 99,
    },
    {
        mNum: 666,
        mContent:
            '치즈는 원하시는 만큼 양껏올려주시면 좋은데 바삭함이 사라질 수 있어요. 저는 반줌정도 되는 양을 올려 오븐윗불에 5분정도 구웠습니다. 전자레인지 1분 정도 돌려주셔도 되는데 전자레인지 사용하실 경우에 바삭함은 보장할 수 없답니다. 전자레인지 , 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7cb64c6a99ab0c54f7bb00d7f0d736df1.jpg',
        recipeId: 99,
    },
    {
        mNum: 667,
        mContent:
            '오늘은 들어가는 재료가 정말 간단해요. 토마토 소스 특유의 신맛을 잡아주기 좋은 양파는 0.5cm 두께로 슬라이스 해서 준비 해 주시고 향긋한 고명으로 활용한 쪽파는 0.5cm두께로 송송 썰어 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1fe0f18b915603edc0204d4e8e7b8af71.jpg',
        recipeId: 100,
    },
    {
        mNum: 668,
        mContent:
            '저는 오늘 체다치즈가 들어가있는 소세지를 사용 해 볼거에요. 파스타 자체의 풍미도 더해주고 따로 번거롭게 치즈를 올려 완성하지 않아도 치즈풍미가 은은하게 느껴져서 간편한 요리인데도 퀄리티를 높여주더라구요. 두툼하게, 0.7cm 정도로 살짝 어슷하게 잘라 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4ffb13e6898de760fee05320044cb9071.jpg',
        recipeId: 100,
    },
    {
        mNum: 669,
        mContent:
            '간단한 재료손질이 완료되었다면, 이제 파스타 면을 삶아볼게요. 120g정도면 넉넉한 1인분이에요. 물2L에 소금1T를 넣고 7~8분정도 삶아서 준비할게요. 사용하시는 파스타 제품의 뒷면 조리시간을 꼭 참고 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9c35cba12daf6064c7c505ba702b0c2d1.jpg',
        recipeId: 100,
    },
    {
        mNum: 670,
        mContent: '팬을 강불에서 2분 예열 후, 올리브유1T를 두르고 양파를 1분간 볶다가 소세지를 넣고 같이 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d5e6c60c040459cd8e9f678c960eabf31.jpg',
        recipeId: 100,
    },
    {
        mNum: 671,
        mContent: '이제 불을 약불로 낮추고 토마토소스350mL를 넣어주세요. 소스가 농도가 있기 때문에 강불을 유지하시면 사방으로 튈 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/de15124c968517e787fbbb8f3d1bf4241.jpg',
        recipeId: 100,
    },
    {
        mNum: 672,
        mContent:
            '잘 저어가면서 끓여주시고, 삶은 파스타 면을 넣고 같이 2분정도 더 조리해 주시면 오늘의 저녁메뉴로 추천하는 맛있는 소세지 파스타만들기 완성! 추가적인 간이 필요하시다면, 면수나 소금을 활용해 간을 맞춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2d4a78c0bca792fa29bb940e1e1886b51.jpg',
        recipeId: 100,
    },
    {
        mNum: 673,
        mContent:
            '양파는 0.5cm 두께로 잘라주세요. 신김치를 활용해야 맛이 좋은데 신맛을 좀 덜어주는데 양파를 볶아서 사용해 주시면 좋아요. 김치가 너무 시어진 경우에는 설탕이나 꿀을 양념장에 조금 추가 해 주시면 좋습니다. 쪽파는 송송 썰어서 고명으로 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/212a384454883da055c3be5067d608c91.jpg',
        recipeId: 101,
    },
    {
        mNum: 674,
        mContent:
            '김치담은 그릇에서 국물을 4T정도 떠서 양념장에 넣어주세요. 김칫국물4T,맛술1T,다진마늘1t,굴소스1T 위의 재료를 섞어 따로 양념을 준비할게요. 색감도 더 먹음직하고, 굴소스때문에 감칠맛도 더해져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/eadcc54f49068cc33f780192bb66ba1d1.jpg',
        recipeId: 101,
    },
    {
        mNum: 675,
        mContent:
            '중불에서 3분간 예열한 팬에, 식용유1T를 두르고 양파를 먼저 볶기 시작 해 주세요. 3분정도 충분하게 볶아 단맛이 나올 수 있게 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/81eaa212943626dc3fd55887a7afe3141.jpg',
        recipeId: 101,
    },
    {
        mNum: 676,
        mContent: '자 이제 준비한 김치를 넣고 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6c66f1a2410878fd34c69a5f7edbe76d1.jpg',
        recipeId: 101,
    },
    {
        mNum: 677,
        mContent:
            '볶는 시간에 따라 완성했을 때 식감이 달라지는데요. 좀 아삭한 감이 살아있는게 좋으시다면 여기서 3분간 볶아주시고 좀 더 부드럽게 즐기고 싶으시면 5분~8분정도 충분하게 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8c6e30fe3cdd28758b8d7af161af33f91.jpg',
        recipeId: 101,
    },
    {
        mNum: 678,
        mContent: '이제 볶아진 김치 위에 양념장을 넣고 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/507ade313de4668354262217912606721.jpg',
        recipeId: 101,
    },
    {
        mNum: 679,
        mContent:
            '가장 마지막으로 참치를 넣고 가볍게 섞어 주시기만 하면 먹음직한 참치김치볶음 완성입니다! 마지막에 참기름1T둘러 더욱 깊은 풍미를 더해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/459b4ffa0d478b32f5db4198222df3ee1.jpg',
        recipeId: 101,
    },
    {
        mNum: 680,
        mContent:
            '시중에 다양한 오트밀 제품이 있는데요. Costco에 주로 많이 준비되어 있고 또 인터넷에서도 쉽게 구하실 수 있어요. 대중적으로 한국에서도 쉽게 구할 수 있는 퀘이커 오트밀 제품도 괜찮습니다. 그리고 워낙 맛이 심심한 오트밀이라, 견과류나 건조과일이 첨가 된 제품이 있는데 개인적으로 이런 제품을 더 추천해요. 식감도 좀 더 풍성하고 풍미도 일반 플레인 제품보다 좋더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7de39270ee44abcfb0201ca9d86610ac1.jpg',
        recipeId: 102,
    },
    {
        mNum: 681,
        mContent:
            '특히 호텔 조식에 꼭 등장하는 오트밀. 그 사이드에는 늘 메이플 시럽이 있는데요. 메이플시럽과 오트밀의 조화가 아주 좋은 편이에요. 간편하게 먹을 수 있는 오트밀, 이제 준비 해 볼까요?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c04e78938c7545223ae5eb211219226d1.jpg',
        recipeId: 102,
    },
    {
        mNum: 682,
        mContent: '먼저 물200mL 정도를 끓여주세요. 보통 끓는 물만 부어도 2분이면 바로 먹을 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6daec9cd364a223cebd0cf3c0644497e1.jpg',
        recipeId: 102,
    },
    {
        mNum: 683,
        mContent: '물이 끓는 사이 그릇에 오트밀을 담을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/83b52a8fc4707b08b6358b46b5a2391f1.jpg',
        recipeId: 102,
    },
    {
        mNum: 684,
        mContent: '끓는 물을 오트밀이 담긴 그릇에 담아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c7d8299c9157ed9bdddaa8777a57ed321.jpg',
        recipeId: 102,
    },
    {
        mNum: 685,
        mContent:
            '한번 가볍게 저어주시고 2분간 기다릴게요. 정말 쉽고 간단한 아침메뉴, 오트밀이 이렇게 준비되었습니다. 맛이 심심한 편이라, 좀 더 든든하게 먹을 수 있는 방법을 알려드릴게요. 크림(커피에 타는 테이블크림)을 한 두스푼 정도 넣어주시면 훨씬 맛이 고소하고 든든해요. 여기에 취향에 따라 꿀이나 메이플시럽을 넣고 잘 저어서 드시면 훨씬 맛이 좋아요. 오트밀에는 특히 메이플시럽이 아주 잘 어울리는 편 이랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9925322158fd10ad833cdca514f980f31.jpg',
        recipeId: 102,
    },
    {
        mNum: 686,
        mContent:
            '먼저 채소부터 손질 해 볼게요. 양파는 0.5cm 간격으로 채썰고 호박은 같은 두께로 어슷하게 잘라주세요. 양송이버섯역시 같은 두께로 슬라이스할게요. 나중에 고명으로 올려 향긋한 향과 먹음직함을 더해 줄 쪽파는 쫑쫑 썰어 준비 해 두겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a341e3f9c5700aaae34952b14cfa6a701.jpg',
        recipeId: 103,
    },
    {
        mNum: 687,
        mContent:
            '오늘 저는 메인 프로틴 재료로 닭가슴살을 사용 해 볼거에요. 기름기도 적고 담백한데 또 요리에 활용하면 깊은 맛을 더해줘서 활용도 높은 고기 식재료랍니다. 먹기 좋게 0.5cm 두께로 어슷하게 채썰듯 잘라 준비할게요. 군데군데 부담스러운 껍질이나 기름기는 제거 해 주시면 더욱 깔끔해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/65215a1dd00767766a611198704d0e031.jpg',
        recipeId: 103,
    },
    {
        mNum: 688,
        mContent:
            '이제 재료 손질이 마쳐졌다면, 끓는 물에 라멘사리를 삶아 체에바쳐 준비 해 주세요. 이때 완전히 익히지 않고 면의 80%정도만 조리되게 해 주세요. 권장 조리시간이 5분인 제품을 쓰신다면 3분30~4분에서 조리를 끝내고 체에 바쳐 카레가 준비되는 동안 물기가 좀 빠지게 해 주세요. 오늘 카레 재료에 조리시간이 오래 걸리는 재료가 없기때문에 이 순서로 요리 해 주셔도 좋습니다. 혹시, 감자와 같은 재료를 넣으신다면 카레를 완성하신 다음에 그때 면을 조리 해 주셔야 쫄깃한 면을 요리 완성 후 즐기실 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b797d362690387a7ac0c123a08a4db611.jpg',
        recipeId: 103,
    },
    {
        mNum: 689,
        mContent: '강불에서 3분 예열한 팬에 식용유1T를 두르고 먼저 손질한 닭가슴살 부터 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a6642fe9c1d54963d1032f009f0c09981.jpg',
        recipeId: 103,
    },
    {
        mNum: 690,
        mContent: '노릇하게 잘 볶아지도록 3분정도 충분히 조리 후 준비한 갖은 채소를 넣고 가볍게 한번 더 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/423939f7a2db904247c7a465962775e71.jpg',
        recipeId: 103,
    },
    {
        mNum: 691,
        mContent: '이제 물 150mL를 부어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7a1f6d1359c6d452e1b0e573fa90777f1.jpg',
        recipeId: 103,
    },
    {
        mNum: 692,
        mContent: '카레 블록을 넣고 한소끔 끓게 잘 저어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d1fff0298bfc4cf60d404531a2fa7b031.jpg',
        recipeId: 103,
    },
    {
        mNum: 693,
        mContent: '이제 삶아 둔 면을 넣고 카레와 잘 맛이 섞이도록 1분정도 함께 불을 켠채로 조리할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5c8bc3c93cb966bd58413eef334d0c651.jpg',
        recipeId: 103,
    },
    {
        mNum: 694,
        mContent:
            '맛이 잘 밸런스 있게 맞춰졌다면, 이제 불에서 내려 그릇에 넉넉히 담고 아까 준비 해 둔 쪽파를 올려주시면 맛있는 일본카레만들기 완성입니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/27eec8024a7392af1dc221ac5daf0c491.jpg',
        recipeId: 103,
    },
    {
        mNum: 695,
        mContent:
            '훠궈만들기의 큰 장점 중 하나는 바로 원하는 재료는 어떤 것이라도 준비해서 넉넉히 즐길 수 있다는 점인데요. 주로 채소를 넉넉히 준비해서 먼저 가볍게 데쳐서 먹고 맛있게 만들어진 채소육수에 메인재료인 고기재료나 해물을 넣어 본격적으로 즐기다가 식사로 이어질 수 있는 면류나 밥을 곁들여 배불리 마무리하게 되는 것 같아요. 오늘 저는 채소로는 청경채를 좀 넉넉히 준비하고 팽이버섯도 같이 곁들여볼거에요. 청경채는 깨끗하게 씻어서 3~4등분하여 먹기 좋게 자를게요. 팽이버섯은 밑동을 1cm정도 잘라내고 적당하게 찢어서 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/22ea6411a239577672282693fb6a12271.jpg',
        recipeId: 104,
    },
    {
        mNum: 696,
        mContent:
            '소고기는 담백한 등심이 좋더라구요. 중국훠궈집에 가 보면 스팸을 같이 곁들여 주시더라구요. 조금 색다르면서도 또 친숙한 맛이라 훠궈를 집에서 만들어 먹을 때 저도 종종 준비해서 같이 즐긴답니다. 스팸은 0.5~0.7cm 정도 두께로 슬라이스 해 주시고 소고기도 보기 좋게 함께 잘 담아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e73676159c7e4d0ff282a23c44bc03861.jpg',
        recipeId: 104,
    },
    {
        mNum: 697,
        mContent:
            '넉넉한 재료에 마무리는 역시 면이 좋더라구요. 저는 오늘 손질 오징어도 준비했는데요. 고기까지 맛있게 즐긴 다음에 오징어와 생 라멘 사리를 넣어 한결 국물맛을 개운하게 해 식사를 마무리 지어 볼 예정입니다. 면사리는 취향에 따라 일반 라면 및 우동사리 등 다양하게 준비하실 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/087d38653b83d4c4c3210d16986815171.jpg',
        recipeId: 104,
    },
    {
        mNum: 698,
        mContent:
            '대형마트나 중국마트에 가면 핫팟(훠궈)전용 육수를 팔더라구요. 오늘 저는 마일드한 버전을 구입했는데 아주 매운 버전도 준비되어있답니다. 1.5L의 물을 넣고 끓으면 동봉된 액상 & 유상 믹스쳐를 넣어주세요. 향신료재료가 넉넉히 들어가 있는데 드시다가 혹시 씹히는게 염려되면 7분정도 우려내신 다음에 깔끔하게 건져 주셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8ba3dddc9061c17e57a0be86196af32c1.jpg',
        recipeId: 104,
    },
    {
        mNum: 699,
        mContent:
            '찍어먹는 소스로는 취향에 따라 정말 다양하게 준비 해 주실 수 있는데요. 저는 그래도 모든 재료에 참 잘 어울리는 소스로 와사비간장과 초장을 추천하고 싶어요. 종지그릇을 한자리에 하나 준비하고 간장과 초장은 취향껏 덜어 먹도록 식탁에 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/949349994977595465d8c63c7f4edb1a1.jpg',
        recipeId: 104,
    },
    {
        mNum: 700,
        mContent:
            '자, 이렇게 재료 준비가 마쳐졌습니다. 이제 맛있는 집들이 음식 메뉴추천 요리, 훠궈를 즐겨볼까요? 휴대용 쿡탑이 있다면 식탁에 올려 끓여가며 즐기면 좋고 그렇지 않다면 전골처럼 조리 해서 상에 넉넉히 차리신 다음 면을 나중에 추가해 조리해 주셔도 좋아요. 채소와 고기를 먼저 넣고 소고기의 경우 오래 조리하면 식감도 질겨지고 맛있는 맛도 국물이 다 빠지기 때문에 먼저 소고기를 익자마자 즐길 수 있도록 게스트 분들에게 잘 안내 해 주세요. 마무리는 오징어와 라멘사리로 깔끔하고 푸짐하게. 여느 식당에서 즐기는 것 못지 않게 아주 맛있게 즐길 수 있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d1eb828e2dd0d13c49e4c4a601c1d82c1.jpg',
        recipeId: 104,
    },
    {
        mNum: 701,
        mContent:
            '먼저 양파는 사방0.7cm 크기로 깍뚝썰고, 양송이도 같은 두께로 슬라이스할게요. 고명으로 올려 향을 더할 쪽파는 어슷하게 0.3cm두께로 슬라이스 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/354cd876eb268c2db8f51e336efe220e1.jpg',
        recipeId: 105,
    },
    {
        mNum: 702,
        mContent:
            '냄비에 물1.5L와 소금1T를 넣고 끓기시작하면 푸실리 면을 넣어 7분정도 삶아 체에 바쳐 물기를 빼 준비 해 주세요. 면수는 4T정도 남겨 두었다가 이따 소스에 넣어 농도를 맞출 때 활용할거랍니다. 면을 삶으실 때 밑간을 하지 않으시는 분들이 많은데 나중에 완성했을 때 가끔 소스맛과 면이 따로 노는 것 같을 때가 있죠? 바로 밑간을 하지 않아서 그런데요, 작은 과정이지만 요리의 완성도를 높여주는 맛있는 팁이 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/33d5d133614d1edd9a9a270cf02fc02e1.jpg',
        recipeId: 105,
    },
    {
        mNum: 703,
        mContent: '강불에서 3분간 예열한 팬에 올리브유1T를 두르고 깍뚝 썬 양파와 다진마늘1T를 넣고 향이 나게 볶을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6d8f30f00f714828319ffc1ac2de006c1.jpg',
        recipeId: 105,
    },
    {
        mNum: 704,
        mContent: '양파가 살짝 투명 해 지면 다진소고기를 넣고 이 때 소금1t,후추1/3t를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/31becbfb65ad975b90d3f4fa9f8b05241.jpg',
        recipeId: 105,
    },
    {
        mNum: 705,
        mContent: '고기가 잘 볶아졌다면 양송이 버섯을 넣고 2분간 더 같이 강불에서 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3d4e3e188627d12644ca0de599b6f2501.jpg',
        recipeId: 105,
    },
    {
        mNum: 706,
        mContent: '이제 토마토소스300mL를 넣고 면수4T정도를 넣어 농도를 맞추고 삶은 푸실리파스타를 넣고 2분동안 중불에서 같이 조리 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/de69e934e41659b37e2c4c3e1d13a2ee1.jpg',
        recipeId: 105,
    },
    {
        mNum: 707,
        mContent:
            '맛이 어느정도 어우러졌다면, 내열용기에 파스타를 담고 치즈와 올리브를 올려 오븐윗불에서 치즈가 녹도로 7분간 구워주시거나 전자레인지에 1분간 조리 해 주시면 집에서 간단한 요리 푸실리파스타 완성입니다! 전자레인지 , 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f9d212bfb5e093376fd367629a704cb71.jpg',
        recipeId: 105,
    },
    {
        mNum: 708,
        mContent: '먼저 부추는 흐르는 찬물에 깨끗하게 씻어 주신 다음 체에 바쳐 물기를 좀 빼 주시고 4~5cm 간격으로 잘라 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ad1b0157aa0ad7e5624b06baa15dc3df1.jpg',
        recipeId: 106,
    },
    {
        mNum: 709,
        mContent:
            '식감을 더욱 풍성하게 만들기 위해 저는 오늘 부추말이에 팽이버섯도 사용했어요. 팽이버섯은 밑동을 제거 후 대략 1cm 간격으로 좋은 크기로 떼어 준비 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c17f1523a3aa8c055ba5843ab036f0301.jpg',
        recipeId: 106,
    },
    {
        mNum: 710,
        mContent: '재료란의 겨자장만들기 재료를 참고하셔서 미리 소스를 만들어 둘게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/457a8837ad84bb122df3286b19ac9eeb1.jpg',
        recipeId: 106,
    },
    {
        mNum: 711,
        mContent:
            '차돌박이 위에 부추와 팽이버섯을 적당히 얹고 빈틈 없이 단단하게 말아주세요. 혹시 차돌박이가 너무 얇게 손질되어 있는 경우에는 두장 정도 겹쳐 사용하셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bd6da8f72482cdc976e47559a92f5c411.jpg',
        recipeId: 106,
    },
    {
        mNum: 712,
        mContent: '이제 찜기에 쪄 줄 차례에요. 남은 부추와 팽이버섯도 한켠에 같이 올려 쪄 줄거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/13ea1671b9313c01eccdfb2a38f4766c1.jpg',
        recipeId: 106,
    },
    {
        mNum: 713,
        mContent: '김이 한 번 오른 시점에서 10분 정도 조리 해 주시면 알맞습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b1eff8302cf8479ba64ca96def3bc3991.jpg',
        recipeId: 106,
    },
    {
        mNum: 714,
        mContent:
            '이렇게 촉촉하게 잘 완성 된 소고기 요리 차돌박이부추말이찜 완성입니다! 찜기 채로 내셔도 좋고 먹기 좋게 그릇에 담아 주셔도 좋답니다. 저는 마지막에 소금, 후추 살짝 그리고 깨를 얹어 완성했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a51f840529cf8061e7949ac92f7971601.jpg',
        recipeId: 106,
    },
    {
        mNum: 715,
        mContent:
            '그리고 사용 된 티백은 건져주시고, 기호에 따라 단맛을 더해 주시면 되는데요. 저는 꿀3스푼 정도 넣어 주면 적당히 달콤하면서 풍미도 좋아져서 좋더라구요. 따뜻한 때 미리 녹여주셔야지 나중에 차가울 때 넣어서 섞으면 꿀이 완전히 녹지 않아 드실 때 이물감이 들 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5a3fbc5afadc268b526ba2f7a5d61fa51.jpg',
        recipeId: 107,
    },
    {
        mNum: 716,
        mContent:
            '그리고 사용 된 티백은 건져주시고, 기호에 따라 단맛을 더해 주시면 되는데요. 저는 꿀3스푼 정도 넣어 주면 적당히 달콤하면서 풍미도 좋아져서 좋더라구요. 따뜻한 때 미리 녹여주셔야지 나중에 차가울 때 넣어서 섞으면 꿀이 완전히 녹지 않아 드실 때 이물감이 들 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f9d10db039de3a9707f7a93c3b8651621.jpg',
        recipeId: 107,
    },
    {
        mNum: 717,
        mContent:
            '이제 컵(Pint, 500mL 글래스잔)에 얼음과 민트잎을 번갈아가며 채울게요. 민트 향을 진하게 느끼시려면 얼음을 채우고 스푼으로 저어 잎이 살짝 으깨지도록 도와주시거나 잎은 칼로 거칠게 다져 넣으시면 한결 민트 향이 진하게 나요. 은은하게 즐기시려면 잎을 넣고 스푼으로 가볍게 몇 번 얼음과 저어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/31405cff29f95a2487988729bb68f2f91.jpg',
        recipeId: 107,
    },
    {
        mNum: 718,
        mContent: '그리고 준비한 홍차를 넣고 잘 저어주시기만 하면 홈카페 요리 레시피 민트아이스티 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/dea0b72577da1a4b38aa88bc699e527a1.gif',
        recipeId: 107,
    },
    {
        mNum: 719,
        mContent:
            '다양한 좋은 기능을 가진 홍차효능을 제대로 즐기기 좋겠죠? 향긋하면서 진한 맛, 집에서 만들어 더욱 색다르고 맛있어요. 오늘은 홍차 효능을 직접 느낄 수 있는 민트 아이스티를 함께 만들어봤습니다. 홈카페 요리 레시피 찾는 분들께 추천 해 드리고 싶은 메뉴랍니다. 간단한 다과 상차림에 곁들여 내면 더욱 근사하겠죠? 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d25c6ed9c10898b03afbdf961a6160fa1.jpg',
        recipeId: 107,
    },
    {
        mNum: 720,
        mContent: '먼저 바나나는 0.5cm 두께로 다소 얇게 슬라이스 해 주세요. 너무 두껍게 손질하시면 나중에 식빵위에 잘 붙지 않고 떨어지기 쉽더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3dd530547d28413ed7355f50d372b1961.jpg',
        recipeId: 108,
    },
    {
        mNum: 721,
        mContent: '식빵은 토스터에 굽거나, 기름 없이 팬에 앞뒤로 노릇하게 구워서 준비 해 둘게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/38decd8b928c912d074d3e7b3aa874cc1.jpg',
        recipeId: 108,
    },
    {
        mNum: 722,
        mContent: '식빵 위에 딸기잼1t씩 먼저 바를게요. 이따가 꿀을 뿌려 마무리 할 거라서 잼을 많이 사용하시면 나중에 너무 달아 질 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6dc6b0f78301b942d66bacc2d20ca3f71.jpg',
        recipeId: 108,
    },
    {
        mNum: 723,
        mContent: '이제 탕콩버터를 1T씩 발라줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5c6a252da89866f14440ae3e750e2bc41.jpg',
        recipeId: 108,
    },
    {
        mNum: 724,
        mContent: '그리고 준비 해 두었던 자른 바나나를 촘촘하게 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c3fe3c25bc9f0a2a514b9534b216fad31.jpg',
        recipeId: 108,
    },
    {
        mNum: 725,
        mContent:
            '여기에 꿀을 1스푼 정도 토스트 위에 넓게 뿌려주시고 마지막으로 향을 더해 줄 시나몬파우더를 살짝 뿌리고 민트잎을 올려 먹음직하게 완성 해 볼게요. 달콤한 토스트만들기, 디저트로 정말 즐기기 좋겠죠? 어렵지 않게 집에서 누구나 따라하기 쉬워서 간단한 디저트 만들기 레시피로 추천해요. 딸기쨈,땅콩버터,바나나 와 꿀, 이 재료들의 맛의 밸런스가 참 좋아요. 식빵과 바나나가 포만감을 줘서 주말 브런치로 즐겨도 좋겠더라구요. 토스트 자체가 달콤하기 때문에 홍차나 아메리카노와 잘 어울려요. 오늘도 맛있게 즐기세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a3c379748ff38373832dab993a7c9ae01.jpg',
        recipeId: 108,
    },
    {
        mNum: 726,
        mContent:
            '먼저 감자는 껍질을 벗기고 1~1.5cm 두께로 잘라 80%정도 잠기게 물을 350mL 넣어줄게요. 감자의 면적이 너무 크다면 세로 방향으로 2등분 해 주신 다음 잘라서 사용해 주시고 그렇지 않다면 그냥 잘라주셔도 괜찮아요. 그리고 쪽파는 0.7cm 간격으로 송송썰어 고명으로 준비 해 둘게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3919a1d02847078574b22f8dbb4f91de1.jpg',
        recipeId: 109,
    },
    {
        mNum: 727,
        mContent: '그리고 다시마와 양념장을 넣고 강불에서 조리를 시작 해 주세요. [양념장은 재료란을 참고해 주세요!]',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9157ea5ecf5eff74e5ef156b6e57b67a1.jpg',
        recipeId: 109,
    },
    {
        mNum: 728,
        mContent:
            '한소끔 끓어 오르면, 불을 중불로 낮추어 주시고 나무스푼이나 실리콘주걱으로 가볍게 저어주신 다음에 떠오른 불순물을 걷어 내 주세요. 그리고 뚜껑을 덮어 주시고 5분정도 조리 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/50a8d5df5b2cedee5bc6bc02910a590a1.jpg',
        recipeId: 109,
    },
    {
        mNum: 729,
        mContent: '이제 소고기 살치살을 넣고 가볍게 한번 섞어 주신 다음 다시 뚜껑을 덮어 8분 조리 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/51f9c5a56028074b83904a6557cfeaca1.jpg',
        recipeId: 109,
    },
    {
        mNum: 730,
        mContent:
            '이제 마지막으로 참기름과 송송 썬 쪽파, 참깨를 올려 마무리 해 주시면 먹음직한 고추장감자조림 완성이에요! 오늘은 먹음직한 밑반찬으로 좋은 고추장 감자조림 황금레시피로 여러분과 함께 했습니다. 고기를 조금 넣었더니 심심 할 수 있는 감자조림이 더욱 맛깔스럽게 완성되었죠? 구하기 쉽고 부담없는 식재료지만 우리에게 참 친숙한 맛이라 언제 먹어도 어색하지 않더라구요. 부담없이 한 번 준비 해 보시면 어떨까요? 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c7135a1fbfb3762fde666a1887e4876c1.jpg',
        recipeId: 109,
    },
    {
        mNum: 731,
        mContent:
            '먼저 채소 재료를 손질 해 줄게요. 양파, 감자와 호박은 사방 2cm 정도 크기로 손질하고 팽이버섯과 부추는 5cm 간격으로 잘라주세요. 칼칼하고 개운한 맛을 더해 줄 고추는 0.7cm두께로 슬라이스 해 주세요. 감자 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/638772833441d237efe797aa6136ee2c1.jpg',
        recipeId: 110,
    },
    {
        mNum: 732,
        mContent: '두부 역시 큼직하게 사방2cm 정도 크기로 손질 해 볼게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f3a17dc5302cdd6d77b124716611e41b1.jpg',
        recipeId: 110,
    },
    {
        mNum: 733,
        mContent:
            '먼저 기본 육수를 만들어볼게요. 멸치다시백 재료를 물400mL에 넣고 한소끔 펄펄 끓인 다음에 중불로 낮추어 7분간 끓여주시고 다시백은 건져 육수만 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3c8c926ac1e99b6b7574d6821acbdaeb1.jpg',
        recipeId: 110,
    },
    {
        mNum: 734,
        mContent: '이 육수에 갖은 채소재료를 모두 한데 넣고 5분 동안 끓여주세요. 이 때 불의 세기는 강불로 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/559099de3978d4055fb7d5486af1fba11.jpg',
        recipeId: 110,
    },
    {
        mNum: 735,
        mContent:
            '그리고 된장2T를 풀어 맛을낼게요. 된장마다 염도의 차이가 있으니, 간이 부족하다 싶으면 된장을 좀 더 추가 해 주시고 사용하시는 된장이 다소 짠 편이라면 처음부터 많은 양을 넣지 마시고 조금씩 더해 기호에 맞게 간을 맞춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a149401c6fa4f025071408911018b2241.jpg',
        recipeId: 110,
    },
    {
        mNum: 736,
        mContent: '이제 차돌박이를 넣고 가볍게 한 번 익혀 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/502b8ae8eb7a78ed41ab735987656eab1.gif',
        recipeId: 110,
    },
    {
        mNum: 737,
        mContent: '고기를 넣고 다진마늘1T를 넣을게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/415e04e2b47fc5836d667701ff15537b1.jpg',
        recipeId: 110,
    },
    {
        mNum: 738,
        mContent: '두부를 넣고 한소끔 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8310d8daf526740bfeb3cdd4da08d1311.jpg',
        recipeId: 110,
    },
    {
        mNum: 739,
        mContent:
            '마지막으로 고춧가루1/2T를 넣고 개운하게 마무리 해 주시면 차돌박이 된장찌개 완성! 오늘은 한국인의 밥상에 가장 자주 오르는 찌개 중 하나인 된장찌개 맛있게 끓이는법 레시피로 여러분과 함께 했습니다. 고기전문점에서 내 주던 별미 메뉴 차돌박이된장찌개를 이제 집에서 푸짐하고 맛있게 즐겨보세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bbbe81a26c7fc95d9b6972c0385795481.jpg',
        recipeId: 110,
    },
    {
        mNum: 740,
        mContent:
            '먼저 채소를 먹기 좋게 손질할게요. 양파,감자,호박은 큼직하게 사방1.5cm정도 크기로 잘라주시고 파는 5cm 길이 간격으로 잘라줄게요. 그리고 느타리버섯과 팽이버섯은 크기에따라 손으로 먹기 좋게 찢어서 준비 해 보겠습니다. 나중에 칼칼하고 개운한 맛을 더해 줄 고추는 다지듯이 잘라 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9a3c093ec860dfb77024a12deb20ad901.jpg',
        recipeId: 111,
    },
    {
        mNum: 741,
        mContent: '채소크기와 비슷하게 스팸과 두부도 사방 1.5cm정도 크기 되게 깍뚝썰기 해서 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/90f991953162ff3da14c92d71143281d1.jpg',
        recipeId: 111,
    },
    {
        mNum: 742,
        mContent: '재료정보란의 양념장을 섞어 미리 양념장을 만들어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d7792aa5d29db095e78d8949cabc3a331.jpg',
        recipeId: 111,
    },
    {
        mNum: 743,
        mContent: '먼저 물500mL와 멸치다시백을 넣고 강불에서 한소끔 끓어오르면 중불로 줄여 5분간 끓여 기본 육수를 만들어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7800fde3a21a85c0a4b4a1c6cb07b9fb1.jpg',
        recipeId: 111,
    },
    {
        mNum: 744,
        mContent: '이제 양념장을 넣고 한소끔 더 끓여줄게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/554f676d8817f0fe2997a13a2ab8baa91.jpg',
        recipeId: 111,
    },
    {
        mNum: 745,
        mContent: '스팸을 먼저 넣고 고기 풍미와 짠 맛이 국물에 우러나오도록 3분간 먼저 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/771367639f1099df5fbfb3d6d65dd5c51.jpg',
        recipeId: 111,
    },
    {
        mNum: 746,
        mContent: '고추와 두부를 제외한 갖은 채소를 한데 넣고 6분간 중불에서 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/68b999dcc03e5b6a5a1375f4ca61d7ce1.jpg',
        recipeId: 111,
    },
    {
        mNum: 747,
        mContent: '이제 두부를 넣고 이때 간이 아직 부족하다 싶으시면 소금으로 기호에따라 간을 더할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/84a40705c92a43113e50f1989de1607c1.jpg',
        recipeId: 111,
    },
    {
        mNum: 748,
        mContent:
            '마지막으로 다진고추를 넣고 한소끔 더 끓여주시면 얼큰한 고추장찌개 완성이에요! 오늘은 누구나 완성하기 쉬운 스팸요리 고추장찌개 만들어봤어요. 얼큰한 비쥬얼에 정말 군침도시죠? 밥한그릇 뚝딱하게 만들어주는 그야말로 밥도둑 메뉴가 따로 없답니다. 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1d4bdab4f27fb42408771950e3351df71.jpg',
        recipeId: 111,
    },
    {
        mNum: 749,
        mContent: '먼저 배추는 0.7cm간격으로 채썰듯 자르고 양송이버섯은 비슷한 두께로 슬라이스 해 주세요.쪽파는 송송 썰어 고명으로 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f18bc9f2b29871cad8877032086031e81.jpg',
        recipeId: 112,
    },
    {
        mNum: 750,
        mContent:
            '새우는 껍질제거 후 살부분을 2~3등분 할게요.가급적 냉동새우를 사용하시더라도 칵테일새우와 같이 한번 조리 된 자숙제품보다 생새우 제품을 사용하시길 권장해요. 그 고유의 맛 성분과 영양성분이 아무래도 한번 조리를 거친 제품은 현저히 떨어질 수 밖에 없더라구요.맛과 영양을 모두 챙기기위해 조금 번거롭더라도 생새우를 구입해 껍질 제거 후 사용해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/49a52fd6deb62403f1d6ace0ce3e8aae1.jpg',
        recipeId: 112,
    },
    {
        mNum: 751,
        mContent: '멸치다시백과 물700mL를 넣고 강불에서 조리 시작 후 한번 끓어오르면 중불로 낮춰 8분간 육수를 우려 내 준비할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/01455ce623481022121230eda9d139361.jpg',
        recipeId: 112,
    },
    {
        mNum: 752,
        mContent: '냄비를 중불에서 3분 예열 후, 새우를 먼저 볶아주시다가 맛술1T를 넣고 잡내를 날려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/580cedcb79b74a5cb1673d0cd797aeb01.jpg',
        recipeId: 112,
    },
    {
        mNum: 753,
        mContent: '세척하여 불려 둔 쌀을 넣고 새우의 맛이 잘 배이도록 7분정도 충분하게 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/16e1d80e223c422062f5ae39a6800b261.jpg',
        recipeId: 112,
    },
    {
        mNum: 754,
        mContent:
            '쌀을 넣고 나서는 밑이 눌러 붙기 정말 쉬워요.이때 불은 중불이상 넘기지 않고 중약불을 유지하며 여유를 가지고 쌀이 반투명해질 때 까지 열심히 잘 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/dc47a0bcf89a5c3eb124cae6338f7fa71.jpg',
        recipeId: 112,
    },
    {
        mNum: 755,
        mContent: '준비한 육수를 절반만 붓고 한소끔 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f6ae0e6e3eb90324cbd5c93f209670471.jpg',
        recipeId: 112,
    },
    {
        mNum: 756,
        mContent: '한번 끓어오른 다음 채소재료를 모두 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7ce6e66b4e9720a4c887b19ae5acb5451.jpg',
        recipeId: 112,
    },
    {
        mNum: 757,
        mContent: '채소에서도 수분이 배어나오는데 이렇게 한번 더 끓여주시고 남은 육수를 더 부어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/af4af2daf9dac23d4a568f6650b49aa01.jpg',
        recipeId: 112,
    },
    {
        mNum: 758,
        mContent: '불은 중약불로 유지 한 채로 20분 정도 잘 저어가며 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8ebd50e15a46e0e832809cbc82d4eaff1.jpg',
        recipeId: 112,
    },
    {
        mNum: 759,
        mContent:
            '어느정도 농도가 맞추어지고 쌀이 부드럽게 잘 익었다면 이제 후추약간과 소금으로 간을 심심하게 맞추어주세요.그리고 고명으로 준비 한 쪽파를 넣고 한번 더 끓여주시면 끝! 오늘은 속 편하게 부담없이 별미로 즐기기도 좋은 소화잘되는음식 죽 끓이는법 레시피로 여러분과 함께했습니다.새우의 깊은 맛과 식감, 버섯의 향과 또 다른 식감,배추의 부드러움과 단맛.죽이지만 이렇게 맛있게 한 번 만들어보시면 어떨까요? 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/227349578123dbe22c958e877e6f9b1d1.jpg',
        recipeId: 112,
    },
    {
        mNum: 760,
        mContent: '재료를 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/947c40610c1ba9bae4645aa0e9471cf11.jpg',
        recipeId: 113,
    },
    {
        mNum: 761,
        mContent: '당근과 돌미나리는 잘게 다져 주세요~ 당근 대신 빨강 파프리카 넣어줘도 색감이 이쁘답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0fe345c41b56e40c0502ad914a165b6d1.jpg',
        recipeId: 113,
    },
    {
        mNum: 762,
        mContent: '계란은 깨 알끈은 제거하고 잘 풀어 다진 당근과 돌미나리 넣고 소금간 약간해 잘 섞어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0fa33c34b50ea5ef5548af1bfab160541.jpg',
        recipeId: 113,
    },
    {
        mNum: 763,
        mContent: '팬에 기름칠 약간 해주고 계란물을 부어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2b6fa90184a62814de59ac1e5174a2d71.jpg',
        recipeId: 113,
    },
    {
        mNum: 764,
        mContent: '가장자리 부터 익혀가며 말아 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5709556fbc4065ab3c07965140d066b31.jpg',
        recipeId: 113,
    },
    {
        mNum: 765,
        mContent: '말은 계란말이는 한쪽 끝에 갖다 놓고 다시 계란물 부어 말아 주고 하는 과정을 반복해 주면 미나리 계란말이가 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/88fa2becd367ead70d1974c81555bbfc1.jpg',
        recipeId: 113,
    },
    {
        mNum: 766,
        mContent: '센불에서 만들면 쉽게 타 버리고 말기 힘드니 약불에서 천천히 말아 주면 실패할 확률이 없답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ebfa4ce4282f37a5320da88361b9bf161.jpg',
        recipeId: 113,
    },
    {
        mNum: 767,
        mContent: '완성된 계란말이는 한김 식힌 후 먹기 좋은 크기로 썰어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4cf328da9450dbeb3d4ee03d2fe6800a1.jpg',
        recipeId: 113,
    },
    {
        mNum: 768,
        mContent: '우리밀 팬컥이크 믹스',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/22d33d0a6949ee277b030b97fefac97d1.jpg',
        recipeId: 114,
    },
    {
        mNum: 769,
        mContent: '밀싱볼에 우유110ml 계란1개 준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/eb75e28ad7115bab88b6c152ae0826c91.jpg',
        recipeId: 114,
    },
    {
        mNum: 770,
        mContent: '계란과 우유가 잘 섞이게 풀어주에요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/43b5e84575de4f3f956482230f52a7fb1.jpg',
        recipeId: 114,
    },
    {
        mNum: 771,
        mContent: '케잌믹스 1봉지 (215g) 을 넣고 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/a27f41c13ec8b3627f9acd169a190e211.jpg',
        recipeId: 114,
    },
    {
        mNum: 772,
        mContent: '후라이팬은 예열시키지 말고 식용유로 한번 닦아내고 불은 최대한 약하게하고 버터 1스픈 넣어 버터가 녹으면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/6187308770fbacfca754a4c6440acfcb1.jpg',
        recipeId: 114,
    },
    {
        mNum: 773,
        mContent: '국자를 이용해 반죽을 살포시 내려주고 약불에서 구우면 기포가 보글보글 올라오면 잘 익고 있다는 신호~한쪽 면이 어느 정도 익으면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/da4f23c075200aaca10b935c46f6dd3c1.jpg',
        recipeId: 114,
    },
    {
        mNum: 774,
        mContent: '뒤집어서 구워주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/79b3fee31972c6284aeb28b2b6d29fbb1.jpg',
        recipeId: 114,
    },
    {
        mNum: 775,
        mContent: '꿀 과일 쵸콜릿 시럽 등 다양하게 드시면 더 맛나게 먹을 수 있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/18/e3f0f571a0904f64f32935bbcc1740101.jpg',
        recipeId: 114,
    },
    {
        mNum: 776,
        mContent: '재료를 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/36d4f79e6ffc16b93b4035c9d82a0db01.jpg',
        recipeId: 115,
    },
    {
        mNum: 777,
        mContent:
            '바지락은 물 l리터에 굵은 소금 2스푼 넣고 바지락 넣어 검은 비닐봉지 씌워 3~5시간 정도 그대로 두면 해감이 되요~ 해감된 바지락은 모래와 불순물이 하나도 남지 않게 깨끗이 씻어 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7c69643c120d5dbe740d8579fbaf3d711.jpg',
        recipeId: 115,
    },
    {
        mNum: 778,
        mContent: '깨끗이 씻은 레몬은 껍질째 반달모양으로 썰어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d63eb4925999b0390aa277bb97b888171.jpg',
        recipeId: 115,
    },
    {
        mNum: 779,
        mContent: '청양고추는 동글 동글하게 모양 그대로 썰어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/756aefb39eababaf6ba517d6a84acf251.jpg',
        recipeId: 115,
    },
    {
        mNum: 780,
        mContent: '올리브유 넣고 살짝 한번 바지락을 볶아 주세요~ 편마늘이나 다진마늘 볶아 준 다음 바지락 넣어 볶아도 좋아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bec7a323fb7ee1e89477ba8f5ec681d51.jpg',
        recipeId: 115,
    },
    {
        mNum: 781,
        mContent: '썰은 레몬을 바지락 사이 군데 군데 꽂아 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/518fd376d2cc7b0d4eff031cc65d2fbf1.jpg',
        recipeId: 115,
    },
    {
        mNum: 782,
        mContent: '맥주 한캔 부어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/24be75f1e2239a15aeae1030b730d9121.jpg',
        recipeId: 115,
    },
    {
        mNum: 783,
        mContent: '바지락양에 따라 맥주양은 조절해 주고 맥주 대신 청주, 소주, 화이트와인등 집에 있는 주류 선택해 사용하시면 되요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a6e5b10527405060c67a81141485a77f1.jpg',
        recipeId: 115,
    },
    {
        mNum: 784,
        mContent: '뚜껑을 닫고 바글바글 끓여 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/884fe7deb1d5c994e22aa7286e66a99b1.jpg',
        recipeId: 115,
    },
    {
        mNum: 785,
        mContent: '바지락이 입을 쩌...억 벌리면 뚜껑을 열고 불순물인 거품을 걷어내 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c8f4c5eb1d8b42518a7f51ba25464dcb1.jpg',
        recipeId: 115,
    },
    {
        mNum: 786,
        mContent: '허브솔트 약간 넣어 주세요~ 바지락이 짭조롬해 따로 간은 안해도 되는데 기호에 따라 소금이나 국간장으로 간 해도 되요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ed1e7d1fe0226f1f53a650fd85fe81341.jpg',
        recipeId: 115,
    },
    {
        mNum: 787,
        mContent: '청양고추 넣고 한번 후루룩 끓여 내면 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/75c4df6e69c9e3307a5baa8f570c1a721.jpg',
        recipeId: 115,
    },
    {
        mNum: 788,
        mContent: '한 봉지 담아놓은 거 천원주고 사 왔어요. 적은 양이라서 사 왔는데 삶아놓으니 너무 적더라고요. 딱 한 접시 양만 나왔어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6b25813ce09219141e7584c2570ac8951.jpg',
        recipeId: 116,
    },
    {
        mNum: 789,
        mContent: '끓는 물에 약간을 소금을 넣어줍니다. 소금을 넣으면 채소의 색이 더 진해진다고 하죠.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7d5c2864017cd6491322199ecaf61bed1.jpg',
        recipeId: 116,
    },
    {
        mNum: 790,
        mContent: '취나물을 데쳐내는 시간은? 저는 줄기를 만져봐서 익었다 싶으면 건져냈어요. 시금치보다는 좀 더 삶았던 거 같아요. 3~4분쯤 되는 듯',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ad4139db9085d5f759efc613a8bb453a1.jpg',
        recipeId: 116,
    },
    {
        mNum: 791,
        mContent: '찬물에 바로 넣어야 색이 변하지 않아요. 혹시 모를 벌레나 흙이 들어가지 않게 몇 번을 헹궈주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8ec0ad9ddc86e1dfc67c3503d84d23751.jpg',
        recipeId: 116,
    },
    {
        mNum: 792,
        mContent: '물기를 꼭 짜서 3등분으로 잘랐어요. 그래야 먹기에 편하겠죠',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3aab372e402acc90eb993ae8e7813f851.jpg',
        recipeId: 116,
    },
    {
        mNum: 793,
        mContent: '양념의 양을 보시면 아시겠지만 취나물이 적어서 그래요. ^^;;;간장, 마늘, 소금, 참기름, 깨소금을 넣어줬답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a3710421f9df39497ba063ed3fade84c1.jpg',
        recipeId: 116,
    },
    {
        mNum: 794,
        mContent: '간을 보니 싱거워서 소금이랑 참기름을 추가했어요. 나물을 무칠 때 간장이랑 소금 두 가지로 간을 해줘야 맛있더라고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/272b0dcfd171c3182d2217cacd00ec9c1.jpg',
        recipeId: 116,
    },
    {
        mNum: 795,
        mContent: '재료를 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4a1ed312855b427795c66b6c63e4fcfa1.jpg',
        recipeId: 117,
    },
    {
        mNum: 796,
        mContent: '겉절이에 넣을 당근은 채 썰어 주고 나머지 당근과 청양고추는 잘게 다져 주세요~ 청양고추는 고추씨 빼는게 깔끔하더라구요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/986a50cc327a827facc3099982c8e8121.jpg',
        recipeId: 117,
    },
    {
        mNum: 797,
        mContent: '고기는 매실청, 맛술, 허브솔트 약간 뿌려 밑간해 잠시 재워 두세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1cb123b040a0767d4f905a67ea549be21.jpg',
        recipeId: 117,
    },
    {
        mNum: 798,
        mContent:
            '잘 풀어 둔 계란에 다진 당근과 청양고추를 넣고 잘 섞어 두세요~ 돼지고기 육전의 신의 한수는 바로 요 청양고추랍니다 청양고추 넣어줘야 고기의 느끼함을 잡아주고 깔끔한 맛이 나요!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3e3214d0554704da522c58e4d1cde8711.jpg',
        recipeId: 117,
    },
    {
        mNum: 799,
        mContent: '찹쌀가루를 뿌려 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0585426095fcd35a3fb892d09e4182691.jpg',
        recipeId: 117,
    },
    {
        mNum: 800,
        mContent: '찹쌀가루를 살짝만 옷을 얇게 입혀 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/90f328c3e4f2a62a5a50d567b297fb3b1.jpg',
        recipeId: 117,
    },
    {
        mNum: 801,
        mContent: '계란옷을 입혀 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d2b86f5eaba02694269d47c409f2ccb51.jpg',
        recipeId: 117,
    },
    {
        mNum: 802,
        mContent:
            '달군 팬에 기름을 약간 두르고 계란옷 입은 고기를 하나씩 올려 주세요~ 계란옷을 입힌거라 중약불에서 천천히 부쳐야 타지 않고 속까지 잘 익어요!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3a6b013b5cfc3baa78295f5f80828a8c1.jpg',
        recipeId: 117,
    },
    {
        mNum: 803,
        mContent: '앞, 뒤 뒤집어 가며 노릇하게 부쳐 주면 돼지고기 육전이 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f678573b0502d88a530271097d5ed0371.jpg',
        recipeId: 117,
    },
    {
        mNum: 804,
        mContent: '적힌 상추 겉절이 양념을 모두 넣고 잘 섞어 겉절이 양념을 만들어 주세요~ 기호에 따라 양념 분량은 가감해 주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/53c873d78e8ac1d6bba05fc64de121f61.jpg',
        recipeId: 117,
    },
    {
        mNum: 805,
        mContent: '상추와 쑥갓은 먹기 좋게 듬성 듬성 썰어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4ebd544c8f5495a5370ff6fe629cd0751.jpg',
        recipeId: 117,
    },
    {
        mNum: 806,
        mContent: '상추, 쑥갓, 당근을 그릇에 담고 겉절이 양념을 넣어 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ab6152e068a700d37bf1696adc7034771.jpg',
        recipeId: 117,
    },
    {
        mNum: 807,
        mContent: '살 살 버무려 주기만 하면 상추 겉절이도 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bbab722f63236a8cc2930cd74b1610071.jpg',
        recipeId: 117,
    },
    {
        mNum: 808,
        mContent: '팬에 기름을 두르고 노릇노릇하게 구워 줍니다. 구우실때에 눌러 가면서 구워 주셔야 속까지 깔끔하게 익을 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/53f67b381863567acb3661ee3e94ee891.jpg',
        recipeId: 118,
    },
    {
        mNum: 809,
        mContent:
            '보통 반미에 들어가는 야채는 다양한데 음식점에 따라서 다르고요. 저는 토마토, 고수대신으로 샐러리잎, 그리고 오이를 선택했어요. 샐러리는 잎만 따서는 준비해 놓습니다. 토마토와 오이는 슬라이스로 썰어서 준비해 놓으시고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/29a3d14c184f322f1b15b7b5278770051.jpg',
        recipeId: 118,
    },
    {
        mNum: 810,
        mContent: '긴 바게트는 빵집에서 3등분을 해달라고 해서 사왔습니다. 그리고 반으로 속을 갈라 주세요. 끌부분은 붙어 있도록 썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c5d2ac9ea339f9be56d8e1920d1e58de1.jpg',
        recipeId: 118,
    },
    {
        mNum: 811,
        mContent:
            '속의 부드러운 빵부분에 마요네즈를 발라 줍니다. 양쪽면에 골고루 발라 주세요. 반미의 특징이 바로 빵에 이 마요네즈를 발라 주는 것이라고 하네요. 그래서 겉은 딱딱하고 바삭한 바게트이지만 씹으면 씹을수록 마요네즈로 인해서 부드럽게 느껴지게 된다고 해요. 물론 베트남의 반미는 쌀을 가지고 만든 바게트이지요. 하지만 국내에서는 쌀로 만든 바게트를 구하기는 쉽지가 않으니 그냥 빵집의 밀가루로 만든 바게트를 이용하시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e3c28ac636b113c5a3aacc6f03ac76271.jpg',
        recipeId: 118,
    },
    {
        mNum: 812,
        mContent: '마요네즈를 발라 준 바게트에 샐러리잎을 듬뿍 넣어 줍니다. 고수를 좋아하시면 고수를 넣어 주셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6f5db58b2c6c9c8e0a7c1ba2ed4208d91.jpg',
        recipeId: 118,
    },
    {
        mNum: 813,
        mContent: '그리고 슬라이스한 토마토를 넣어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c07af8a8adf063a0cb96096d897e074a1.jpg',
        recipeId: 118,
    },
    {
        mNum: 814,
        mContent:
            '역시 오이도 넣어 주시고 구운 고기완자를 넣어 줍니다. 고기완자로 통째로 넣어 주셔도 되고요. 요렇게 완자를 풀어서 타코에 넣는 고기처럼 넣어 주셔도 좋아요. 아니면 불고기용 소고기를 액젓과 굴소스를 넣고는 재워 놓은 후에 불고기 상태의 길쭉한 고기를 구워서 넣어 주셔도 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d881d402cb6cc55f8da8818786c9813c1.jpg',
        recipeId: 118,
    },
    {
        mNum: 815,
        mContent:
            '그리고 바게트빵주머니에 넣어서 들고 드시면 되는 것이 바로 반미입니다. 고기와 샐러리, 오이, 토마토가 들어간 푸짐한 베트남 반미 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ec02d12783fcb6d73038ad9f055ec1cf1.jpg',
        recipeId: 118,
    },
    {
        mNum: 816,
        mContent:
            '바게트가 딱딱하고 질긴 식감을 좋아하지 않으시는 분들은 또띠아에 말아서 드시는 방법도 좋아요. 단 또띠아는 한번 살짝 겉면을 구워서 준비해 놓으시고요. 살짝 구운 또띠에 위에 마요네즈를 발라 주고 샐러리잎, 양상추, 오이, 토마토를 올려 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1805b88c6b0ad588072d4f6909d2b0ce1.jpg',
        recipeId: 118,
    },
    {
        mNum: 817,
        mContent: '그리고 고기를 올려 주시면 되고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/833a7591a3d7ef0375ef984d8c33b40c1.jpg',
        recipeId: 118,
    },
    {
        mNum: 818,
        mContent:
            '취향에 따라 스위트칠리소스나 핫칠리소스를 뿌려서 돌돌 말아 주시면 됩니다. 아니면 또띠아를 바삭바삭하게 구운 후에 반으로 살짝 접어 주고는 위의 재료들을 올려서 타코처럼 드셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6f34bbb077f8a9b312cf3fc96d5027771.jpg',
        recipeId: 118,
    },
    {
        mNum: 819,
        mContent:
            '유산지에 싸서 드시면 깔끔하고 소풍나갈때에도 좋지요. 아니면 도시락으로도 좋고요. 사실 도시락용으로는 바게트를 더 추천합니다. 왜냐하면 또띠아를 살짝 구웠더라고 해도 바로 먹지 않는 이상에는 눅눅해 지거든요. 바게트는 눅눅해지지 않고 오히려 조금 더 부드러워진다고 할 수 있겠네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0c77b5a9c0812e7771b7d0692f4255251.jpg',
        recipeId: 118,
    },
    {
        mNum: 820,
        mContent: '황태포 물에 살짝 적신후 물끼를 꾹~ 짜고 가위로 먹기좋은 크기로 잘라주세요 이때 가시도 제거해 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e5fb01a2c3664974ac4cb091d8a4f3bf1.jpg',
        recipeId: 119,
    },
    {
        mNum: 821,
        mContent: '일회용 비닐팩에 황태포를 담고 전분 넣은 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9d865e7d2cc82135039bc5bf3ef732e41.jpg',
        recipeId: 119,
    },
    {
        mNum: 822,
        mContent: '흔들어 고루 섞어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/11faa6128a0c820c90c0684c14fc7b271.jpg',
        recipeId: 119,
    },
    {
        mNum: 823,
        mContent: '팬에 기름 붓고 적당한 온도로 끓어오르면 하나식 조심히 넣고 노릇하게 튀겨',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3a39a6900aba286e07c77c4ef8f026981.jpg',
        recipeId: 119,
    },
    {
        mNum: 824,
        mContent: '채에 받쳐 건져 내어 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/fa39ea91914e9e614f17395a0b293e5b1.jpg',
        recipeId: 119,
    },
    {
        mNum: 825,
        mContent: '팬에 위 양념 모두넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a57852488f0cbf9de2e817ffdfcb7f941.jpg',
        recipeId: 119,
    },
    {
        mNum: 826,
        mContent: '약한불에서 저어가며 걸쭉하게 끓여준 후 불을 끄고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/cf820f7bd58728280f1925338c6021c81.jpg',
        recipeId: 119,
    },
    {
        mNum: 827,
        mContent: '준비한 황태포를 양념에 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/474e0e47b93486843ee48c0fd23b72831.jpg',
        recipeId: 119,
    },
    {
        mNum: 828,
        mContent: '고루 버무려 주면 끝입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7acc2d8f14f76ad712bcfba42db87edc1.jpg',
        recipeId: 119,
    },
    {
        mNum: 829,
        mContent: '냉동 만두는 미리 꺼내 해동해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bd3f7666decbde32e32cb3bb053ee9801.jpg',
        recipeId: 120,
    },
    {
        mNum: 830,
        mContent:
            '피망 파프리카 양파는 큼직하게 썰어주세요 탕수 소스는 작은 볼에 만들어 놓으면 좋아요 녹말가루 1t+물 1T을 넣고 섞어 물 전분을 만들어 놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2bea53ae2f343b44680c81fd8ca3f07d1.jpg',
        recipeId: 120,
    },
    {
        mNum: 831,
        mContent: '달군 팬에 기름 두르고 해동한 만두를 노릇하게 구운 후 기름 제거하고 완성 접시에 담아주고요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3ac0505751382bcf1006daaf12d614d41.jpg',
        recipeId: 120,
    },
    {
        mNum: 832,
        mContent: '팬에 기름 약간 두르고 마늘과 양파를 살짝 볶다가 소스+피망+파프리카 넣어 끓이고 마지막에 물 전분 1t을 넣고 빠르게 섞어 불 끄고~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d0aae04756fdf74147a8f14293adde5c1.jpg',
        recipeId: 120,
    },
    {
        mNum: 833,
        mContent: '만두 담긴 접시에 소스를 끼얹어 주면 만두 탕수 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6d6c266c6c8f6fc7491fe6c317ab38941.jpg',
        recipeId: 120,
    },
    {
        mNum: 834,
        mContent:
            '시리얼 또는 그래놀라를 준비해주세요 (저는 켈로그 리얼 그래놀라를 사용했는 데, 과일칩이나 건과일도 들어있어서 따로 다른 재료를 넣을 필요 없이 다양하게 씹히는 식감이 좋았어요 )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/55ebf864c15d9201ed8a1b6818f83f221.jpg',
        recipeId: 121,
    },
    {
        mNum: 835,
        mContent: '딸기는 깨끗하게 씻어서 꼭지를 제거 후 잘게 잘라서 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/f1ea2db30c1ba44b3eaf53527c31e7941.jpg',
        recipeId: 121,
    },
    {
        mNum: 836,
        mContent: '준비된 컵에 켈로그 리얼 그래놀라 3스푼을 깔아주세요 용기에 따라 재료의 양은 원하는 만큼 조절해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1b5e6e9de5fe9ec3e97f6f49ed53bed71.jpg',
        recipeId: 121,
    },
    {
        mNum: 837,
        mContent: '그 위에 플레인 요거트를 담아주세요 요거트의 단맛이 부족하다면 꿀을 약간 첨가하셔도 맛있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/d9e9cc0a14b0ffda3df55a2b0eebce351.jpg',
        recipeId: 121,
    },
    {
        mNum: 838,
        mContent: '잘게 잘라준 딸기들을 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1f4657dfe549756cf18e5aa6c0eec8481.jpg',
        recipeId: 121,
    },
    {
        mNum: 839,
        mContent: '마무리로 요거트를 올려주고 딸기와 그래놀라로 장식해주면 요거트 파르페 완성입니다 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/36cad4f88696dbb8ef491adf757d27bb1.jpg',
        recipeId: 121,
    },
    {
        mNum: 840,
        mContent: '큰 그릇에 튀김가루 1컵, 차가운 생수 1+1/4컵 을 붓고 덩어리 없도록 잘 풀어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6abcf39864c829ddb94a40ea0a451eb31.jpg',
        recipeId: 122,
    },
    {
        mNum: 841,
        mContent: '그리고 여기에 깻잎 5장, 양파 1/4개를 곱게 채썰어 넣고 대파 1대를 곱게 어슷썰어 넣어 고루 잘 섞어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/496c1cec8d7739f7754f822cc5a8e44d1.jpg',
        recipeId: 122,
    },
    {
        mNum: 842,
        mContent: '그리고 숙주 2줌을 넣고 가위로 대충 잘라 주시고...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d6387f79b0052dbba0c6bce36d617eed1.jpg',
        recipeId: 122,
    },
    {
        mNum: 843,
        mContent: '대패목살 100g을 넣고 가위로 잘라 준 후...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/795daa0626faf8c836bf030b8ed1cc991.jpg',
        recipeId: 122,
    },
    {
        mNum: 844,
        mContent: '소금 1/4작은술, 후추약간을 넣고 고루 섞어 반죽을 만들어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2f799c660d9bdba75323b7e6487f8baf1.jpg',
        recipeId: 122,
    },
    {
        mNum: 845,
        mContent: '달군 팬에 기름을 넉넉하게 두르고 반죽을 얇게 떠 올려 앞,뒤 노릇하니 바삭하게 부쳐 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9b1e21442535953b97e61b09741b6ab91.jpg',
        recipeId: 122,
    },
    {
        mNum: 846,
        mContent: '닭 다리살은 기름 제거하고 작은 크기로 자른 후 밑간 재료 넣고 버무려 잠시 재웁니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/efdf84956460d2eb8f39ea5c7796a2411.jpg',
        recipeId: 123,
    },
    {
        mNum: 847,
        mContent: '모든 채소는 닭고기 크기에 맞게 썰어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8ea48ace8f979f26bdeadf864b604d561.jpg',
        recipeId: 123,
    },
    {
        mNum: 848,
        mContent: '분량의 양념소스를 만들고,녹말가루1t+물1T을 넣어 물 전분을 만들어 놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98fb7b86e7e13f1c34095fd8d4f68b441.jpg',
        recipeId: 123,
    },
    {
        mNum: 849,
        mContent: '달군 팬에 기름 약간 두르고 밑간한 닭고기 넣고 노릇하게 완전히 익혀 덜어놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a7683b20ec1e58aad137cb4a41b0f5901.jpg',
        recipeId: 123,
    },
    {
        mNum: 850,
        mContent: '닭고기 구운 팬에 기름 약간 두르고 마늘과 양파 볶다가 구운 닭고기,피망,파프리카 넣고 볶다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8468d4ec7b6f5ab022f5ad9990869f751.jpg',
        recipeId: 123,
    },
    {
        mNum: 851,
        mContent: '만들어 놓은 소스를 부어 볶아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a30e96a4fa568ec56a8e5811fbbfad9d1.jpg',
        recipeId: 123,
    },
    {
        mNum: 852,
        mContent: '보글보글 소스를 끓이고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98f5e19902056a2308a1c169437d12811.jpg',
        recipeId: 123,
    },
    {
        mNum: 853,
        mContent: '마지막에 물 전분 1t넣고 빠르게 볶아 섞어 불 끄고 마무리합니다 볶은 재료를 밥위에 부어 내면 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e30029d66258e22fc35b1a81eb93da9a1.jpg',
        recipeId: 123,
    },
    {
        mNum: 854,
        mContent: '해물을 준비합니다',
        mPicture: '',
        recipeId: 124,
    },
    {
        mNum: 855,
        mContent: '야채를 손질해서 썰어놓습니다',
        mPicture: '',
        recipeId: 124,
    },
    {
        mNum: 856,
        mContent: '그릇에 밥을 올립니다',
        mPicture: '',
        recipeId: 124,
    },
    {
        mNum: 857,
        mContent: '그위에 모든재료들을 이쁘게 셋팅합니다',
        mPicture: '',
        recipeId: 124,
    },
    {
        mNum: 858,
        mContent: '참기름 통깨를 뿌립니다',
        mPicture: '',
        recipeId: 124,
    },
    {
        mNum: 859,
        mContent:
            '1. 시래기 삶는법 마른 시래기는 잘못 보관하면 다 부스러져서 삶아두는 것이 더 좋은 것 같아요. 먼저 시래기는 물에 한번 세척해서 물기를 빼줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e19ebcf754e707d91ff7b1364c7687301.jpg',
        recipeId: 125,
    },
    {
        mNum: 860,
        mContent: '찬물에 끓는 물을 섞어서 따끈한 물을 만들고 ( 40도 정도 ) 시래기를 30분 정도 불려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ca396166e84fbc42b00dec09c52020a21.jpg',
        recipeId: 125,
    },
    {
        mNum: 861,
        mContent: '시래기가 불려지면서 파란 물이 나옵니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5db514f40bd42508c240723746299f921.jpg',
        recipeId: 125,
    },
    {
        mNum: 862,
        mContent:
            '아주 큰 냄비를 사용하는 것이 좋아요. 시래기가 푹 잠길 정도의 찬물을 붓고 설탕 4큰술을 넣어 잘 녹여줍니다. 시래기를 40분간 삶아줍니다. 설탕을 약간 넣어주면 삼투압 작용으로 삶는 시간이 줄고 잡내도 없어집니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/15bc1b43f773afc03f098ff3f9cdeaa61.jpg',
        recipeId: 125,
    },
    {
        mNum: 863,
        mContent: '잘 삶아진 시래기.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0022d581c55588c7066aa27129fa87131.jpg',
        recipeId: 125,
    },
    {
        mNum: 864,
        mContent: '이대로 뚜껑을 닫고 물이 다 식을 때까지 뜸을 들이듯 불려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/de8f780959408bacaf24a688c00ace681.jpg',
        recipeId: 125,
    },
    {
        mNum: 865,
        mContent: '찬물에 시래기를 담가서 특유의 시래기 냄새를 없애줍니다. 3-4시간 정도 담궈줍니다. 물도 중간에 한번 갈아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/84fc27d25c80a15bac3a4903b97ac69d1.jpg',
        recipeId: 125,
    },
    {
        mNum: 866,
        mContent:
            '2. 시래기 보관법 시래기의 물기를 살짝만 제거합니다. 그 이유는 냉동실에 보관하려면 약간의 물기가 있는 상태로 보관하는 것이 더 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/30c0a095694c33e2715a6b61c71b61181.jpg',
        recipeId: 125,
    },
    {
        mNum: 867,
        mContent: '시래기는 질긴 섬유질을 제거해야 요리했을 때 부드러우므로 줄기 부분을 꺾어서 섬유질을 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a358e6d6babb04e619a6f23347a0499c1.jpg',
        recipeId: 125,
    },
    {
        mNum: 868,
        mContent: '섬유질을 벗긴 것들이구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2ec5edf20281b876fcf9cbf5ca020ceb1.jpg',
        recipeId: 125,
    },
    {
        mNum: 869,
        mContent: '먹기 좋게 4-5cm 길이로 잘라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/34ca2f1a0d98da2bc3a87270491d6aa31.jpg',
        recipeId: 125,
    },
    {
        mNum: 870,
        mContent: '소분하여 지퍼백에 담아서 냉동 보관합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a2a120796765585e35e5aa556d5dfd371.jpg',
        recipeId: 125,
    },
    {
        mNum: 871,
        mContent:
            '준비한 모든재료인 간장,맛술,생수,양파,설탕,봉지에넣은 가스오브시를 불위에 올려서 팔팔 끓어오르면 정확히 4분뒤에 불을끄고 식힙니다. (※시간 꼭 지켜주세요~가스오브시는 반드시 망에넣어야 간장속양파를 먹을수 있어요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7d4d05d65548bb26c986a890addd311a1.jpg',
        recipeId: 126,
    },
    {
        mNum: 872,
        mContent: '신선한 연어로 준비했습니다 V마켓 문열자마자 사왔어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7d3ece3916e32d5d046f58896fefd3831.jpg',
        recipeId: 126,
    },
    {
        mNum: 873,
        mContent: '깨끗한 도마에 모양 그대로 올리고 5cm 간격으로 썰어줍니다( 연어를 손질하는 과정을 잘해야 나중에 가지런하게 예쁘게 나옵니다)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5963901b6fd473c67bc3b53fc0a4c2cc1.jpg',
        recipeId: 126,
    },
    {
        mNum: 874,
        mContent: '2번 과정을 하셨으면 한토막씩 가져다가 90°C 각도로 직각으로 0.7cm 두께로 도톰하게썰어줍니다(얇게하면 식감이 별로 좋지않아요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ab7d28edd610be163832f7424860e36a1.jpg',
        recipeId: 126,
    },
    {
        mNum: 875,
        mContent: '준비한 용기에 채친 대파를 한겹깔고 자른 연어를 가지런하게 놓고 그위에 채친대파를 한켭 깔고 다시 연어를 가지런히 담습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2b3a7069add011c921d6cefbcdd57cdf1.jpg',
        recipeId: 126,
    },
    {
        mNum: 876,
        mContent: '미리 준비한 식힌 양념간장을 연어위에 붓고 뚜껑을 닫아 냉장고에 넣습니다(누르는 속뚜껑이 있는 용기면 더 빨리 절여집니다)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/104d14f9db96605fec6de1f5b8c208b41.jpg',
        recipeId: 126,
    },
    {
        mNum: 877,
        mContent:
            '*드디어 완성~^^~ 이침에 만들면 저녁에 근사한 식탁을 만들수 있어요 젤 맛있을 때는 만하루가 지날때임을 꼭 기억 하세용^^ ※가운데 올린 고추냉이와 함께 먹으면 더 맛있습니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6acfd766ea7987693472b8ffec56720d1.jpg',
        recipeId: 126,
    },
    {
        mNum: 878,
        mContent: '두릅준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7c8d24703af76a1a2eb66f9f0ee8744f1.jpg',
        recipeId: 127,
    },
    {
        mNum: 879,
        mContent: '껍질째 끓는 물에 소금을 약간 넣고 살짝 데쳐낸다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c2e4401db10b37626900ba2dcc5449451.jpg',
        recipeId: 127,
    },
    {
        mNum: 880,
        mContent: '찬물에 바로 헹구면서 껍질은 벗겨 낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7c086b52031d40a5e6e2f4f1806531421.jpg',
        recipeId: 127,
    },
    {
        mNum: 881,
        mContent: '체반에 건져 물기를 뺀다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2a813f2a19302d15ae5e41c86f17e2af1.jpg',
        recipeId: 127,
    },
    {
        mNum: 882,
        mContent: '볼에 손으로 물기를 꼭 짠 두릅과 양념을 넣고 조물조물 무쳐낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/fc19c4e413058d42649bc8ddd3c543e01.jpg',
        recipeId: 127,
    },
    {
        mNum: 883,
        mContent:
            '알배추 속 작은 부분들을 한 입 크기로 썰어 준비해 둡니다. 많을 수록 더 개운하겠죠? 알배추 속 도마 , 칼 알배추 속 양이 많으면 좋은데 저는 주먹 두개 정도의 양으로 해주었어요.^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f92c5de4a456a2ec30dc0039075c18fb1.jpg',
        recipeId: 128,
    },
    {
        mNum: 884,
        mContent: '냄비에 멸치다시국물 800ml정도를 부어 강불에 팔팔 끓여 줍니다. 멸치다시국물 냄비 강불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ba372001e60830cfbf17a77603a4d83e1.jpg',
        recipeId: 128,
    },
    {
        mNum: 885,
        mContent:
            '육수가 끓으면 된장 1큰술을 풀어줍니다. 저는 시판 된장 : 집된장 = 1: 1 로 섞어서 1큰술을 넣어 주었어요! 참고로 저희 집된장 색이 진해서 국이 좀 진해졌어요.^^ 된장 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/79cba366f98bd3e3064f65a580ab78011.jpg',
        recipeId: 128,
    },
    {
        mNum: 886,
        mContent: '된장국이 끓으면 다진 마늘 1개를 넣어 줍니다. 다진 마늘 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5667543980f6a5a1ab358e319e7395641.jpg',
        recipeId: 128,
    },
    {
        mNum: 887,
        mContent:
            '잘라 놓은 알배추 속을 모두 넣어 중불에서 5-10분 정도 푸욱 끓여 줍니다. 거품이 생기면 제거해주세요! 그래야 더 깔끔한 맛이 나겠죠?^^ 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/be12ef089afd3a1e7a919acec1950a071.jpg',
        recipeId: 128,
    },
    {
        mNum: 888,
        mContent: '파 1줌을 넣어 끓입니다. 파 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4c3e9c6aafa07bbcf43226a9780b96881.jpg',
        recipeId: 128,
    },
    {
        mNum: 889,
        mContent: '고춧 가루 1큰술도 넣어 좀 더 팔팔 끓여주면 끄읕! 고춧가루 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1f8277d41258b6ce8d906cc0a43efdda1.jpg',
        recipeId: 128,
    },
    {
        mNum: 890,
        mContent: '쌉쌀하고 아삭한 식감이 좋은 돌나물 무침 만들기 ♬♪',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/223e197988ad8bdaa83fdc7b954d16531.jpg',
        recipeId: 129,
    },
    {
        mNum: 891,
        mContent: '· 돌나물은 깨끗이 씻어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d30ffbe65eda88ebd99bb38d88995ffe1.jpg',
        recipeId: 129,
    },
    {
        mNum: 892,
        mContent: '체에 밭쳐 물기를 빼 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/021edce9435e0515ba71e00c0d76139c1.jpg',
        recipeId: 129,
    },
    {
        mNum: 893,
        mContent: '· 양파 1/2개는 얇게 채 썰고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bdcc7389c5fca3aec0dd8d85a8a3e6a91.jpg',
        recipeId: 129,
    },
    {
        mNum: 894,
        mContent:
            '· 돌나물과 양파에 양념을 넣고 조물조물 무쳐주면 완성!! ※ 돌나물무침 양념 【 고추장 1 큰 술, 고춧가루 1 큰 술, 설탕 1/2 큰 술, 다진 마늘 1 큰 술, 식초 1 큰 술, 매실청 2 큰 술, 참기름 1/2 큰 술, 통깨 1/2 큰 술 】 -밥숟가락 계량 (입맛에 따라 원하는 양념을 가감해주세요 :D)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8679f018bc9b4785ca2b4871f736c5c11.jpg',
        recipeId: 129,
    },
    {
        mNum: 895,
        mContent: '아삭한 식감과 새콤달콤한 양념의 제철 봄나물 돌나물 무침',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/20ad7504ba72548a0ba23bb427adfcce1.jpg',
        recipeId: 129,
    },
    {
        mNum: 896,
        mContent: '다시멸치 한줌 된장3큰술 풀어주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a18f324c8a6821121423b4d91d90e79e1.jpg',
        recipeId: 130,
    },
    {
        mNum: 897,
        mContent: '다시 육수가 우러나도록 10분정도 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f0132a5367f508d3832963369f5481d51.jpg',
        recipeId: 130,
    },
    {
        mNum: 898,
        mContent: '멸치 채에 받쳐 모두 건져내어 주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ae422a593ee9e5ef8b820b678d83a1861.jpg',
        recipeId: 130,
    },
    {
        mNum: 899,
        mContent: '깨끗히 싯어 준비한 시금치 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6626583b0442397c4920940c79f3deeb1.jpg',
        recipeId: 130,
    },
    {
        mNum: 900,
        mContent: '팔팔 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c8faf63adf79ac27c714d3dba26197141.jpg',
        recipeId: 130,
    },
    {
        mNum: 901,
        mContent: '대파 숑숑 썰어 넣어주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ca856878401b9243ee2a1c356f30aa191.jpg',
        recipeId: 130,
    },
    {
        mNum: 902,
        mContent: '천연조미료 한큰술 들깨가루 3큰술넣고 간을 보신후 액젓으로 마무리 간을 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e9985cef1adf5142cb1f11aa731e29b31.jpg',
        recipeId: 130,
    },
    {
        mNum: 903,
        mContent: '뽀글 뽀글 끓여 내심 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a8c8077ce33a16fffa268797616898db1.jpg',
        recipeId: 130,
    },
    {
        mNum: 904,
        mContent: '4종의 쿠키 생지를 해동 없이 팬 위에 일정 간격을 두고 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/739a123b22e4ebb7b4e7fe77dc935e541.jpg',
        recipeId: 131,
    },
    {
        mNum: 905,
        mContent:
            '180~185℃로 10분 예열한 오븐에서 15~18분 정도 구워주세요. 180~185℃로 10분 예열한 오븐 180~185℃ 안내드린 분수만큼 구울 경우 말랑한 츄잉 타입의 쿠키가 구워지며 딱딱한 하드 타입의 쿠키를 원하실 경우 2분정도 더 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a9d665b6054bdb1e4e97231738b631961.jpg',
        recipeId: 131,
    },
    {
        mNum: 906,
        mContent:
            '다 구운 쿠키를 식힘망 위에 올려 완전히 식혀준 후 드세요. 뜨거울 때 쿠키를 만지면 모양이 변할 수 있으니 반드시 완전하게 식혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/13c51f627ac2a98a1cf7a012cf7426b41.jpg',
        recipeId: 131,
    },
    {
        mNum: 907,
        mContent: '당근,양파,대파,송이버섯,백고동 먹기 좋은 크기로 다져 팬에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7571abdcf31f08f59d1758ee732d44fc1.jpg',
        recipeId: 132,
    },
    {
        mNum: 908,
        mContent: '후추톡톡~ 굴소스 1큰술 카놀라유 적당량 두르고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/feb85dc0cb26c5846a03a5e6df922eae1.jpg',
        recipeId: 132,
    },
    {
        mNum: 909,
        mContent: '슥슥슥~ 볶아 줍니다 야채에 숨이 죽으면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8c0e317de75f8f9bc341444f914836351.jpg',
        recipeId: 132,
    },
    {
        mNum: 910,
        mContent: '2인분량 밥 투하~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/cb0fb641cc3ea4f8004e0480b77926dc1.jpg',
        recipeId: 132,
    },
    {
        mNum: 911,
        mContent: '스윽~ 스윽~~ 볶아주심 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/84caae1eab4a9c00038c2333fb1787541.jpg',
        recipeId: 132,
    },
    {
        mNum: 912,
        mContent: '소고기 먹기좋은 크기로 썰어 주시고 위 고기 밑간 양념을 모두넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/33cda7f9ad35d2dc7ca8582f3ff602cb1.jpg',
        recipeId: 133,
    },
    {
        mNum: 913,
        mContent: '조물 조물 버무려 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d20836f0fafd814f0bd1cfe13226c4561.jpg',
        recipeId: 133,
    },
    {
        mNum: 914,
        mContent: '버섯,야채 썰어주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b4987f77a02f5211d2a730dcf0b875ea1.jpg',
        recipeId: 133,
    },
    {
        mNum: 915,
        mContent: '준비한 소고기 팬에 담고 약한불에서 슥슥 볶아줍니다 고기가 익으면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/24d9bd1687350ae798c7e422c93df5ec1.jpg',
        recipeId: 133,
    },
    {
        mNum: 916,
        mContent: '준비한 버섯과 야채 넣고 카놀라유 적당량을 두르고 볶아주시다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/62b1f1dba685996d7aacbc7887384c2a1.jpg',
        recipeId: 133,
    },
    {
        mNum: 917,
        mContent: '굴소스 취향껏 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0f029c6f92d7664376ac1173da5cc5b21.jpg',
        recipeId: 133,
    },
    {
        mNum: 918,
        mContent: '볶아주시면 끝입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a6edcd8ff15b538a7711c1050159e0c71.jpg',
        recipeId: 133,
    },
    {
        mNum: 919,
        mContent: '우선 양념장부터 만들어 주는데요. 분량의 양념을 넣고 수분이 날라갈때까지 졸여줍니다. 10분 정도 졸여주면 될듯...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/12254cabff6b6a00929f3d35432438401.jpg',
        recipeId: 134,
    },
    {
        mNum: 920,
        mContent: '떡볶이떡은 딱딱하기 때문에 끓는물에 말랑해질때까지 데쳐주고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/acad18fb2595ec4dee9507f0084ae26b1.jpg',
        recipeId: 134,
    },
    {
        mNum: 921,
        mContent: '비엔나 소세지도 칼집을 넣어 끓는물에 데쳐줍니다. 이러면 소세지의 분순물이 날라가요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/47a6f13fe742b6396d5126cede249c281.jpg',
        recipeId: 134,
    },
    {
        mNum: 922,
        mContent:
            '떡과 소세지를 먼저 꼬지에 끼워서 구워줘도 되구요. 저는 따로따로 구워주었어요. 떡을 먼저 식용유 두른 후라이팬에서 구워줍니다. 떡이 서로 붙기 때문에 떼어가며 구워줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/14ffb93c089717e1552f73dc268ea4a21.jpg',
        recipeId: 134,
    },
    {
        mNum: 923,
        mContent: '데쳐낸 비엔나 소세지도 기름 두른 후라이팬에서 굴려가며 구워줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/64266213047c277c201ac16d9698a49c1.jpg',
        recipeId: 134,
    },
    {
        mNum: 924,
        mContent: '이제 떡 - 소세지 순으로 끼워주면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/bee447c22435952e02f931ca8fb615881.jpg',
        recipeId: 134,
    },
    {
        mNum: 925,
        mContent: '그런다음 졸여놓은 소스를 앞뒤로 발라주면 소떡소떡 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/542202fb407033a89978021398fbe5ad1.jpg',
        recipeId: 134,
    },
    {
        mNum: 926,
        mContent: '다시마와 멸치로 육수를 내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/96d8b6254afc20ee28b2414fb2dafa161.jpg',
        recipeId: 135,
    },
    {
        mNum: 927,
        mContent: '배추는 넣을만큼 준비해주시고, 배추와 대파를 먹기 좋게 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e7c3aec9603b6e392f125dd315ee6db41.jpg',
        recipeId: 135,
    },
    {
        mNum: 928,
        mContent:
            '된장 2큰술을 넣고 잘 풀어 팔팔 끓여주세요. (저는 찌개용 된장 넣었는데 그냥 된장도 넣으셔도 상관없어요. 소금으로 간 맞추시면 됩니당)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2154de2013496c3abb301c9dc155ce231.jpg',
        recipeId: 135,
    },
    {
        mNum: 929,
        mContent: '된장 넣고 팔팔 끓으면 배추와 다진마늘을 넣어 팔팔 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2cec48f138b2ef3a555a786e7ba5fb461.jpg',
        recipeId: 135,
    },
    {
        mNum: 930,
        mContent: '고춧가루 1큰술도 넣어 끓여주세요. 반큰술만 넣어도 되는데 1큰술 넣으니 더 칼칼하니 맛나더라구용.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/97f88d2f2f962edfed6639296b468b5a1.jpg',
        recipeId: 135,
    },
    {
        mNum: 931,
        mContent: '마지막으로 대파도 넣어 끓여주시면 끝 ! 배추가 투명해지고 흐물거리면 다 익은거니 완성입니당 ^^.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4d1322f94083bd1591e3de0f7fc652e71.jpg',
        recipeId: 135,
    },
    {
        mNum: 932,
        mContent: '맛나게 드시면 끝입니당ㅎㅎ.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1a6ac9b9d0d5fbf640fdf79417e9c7c01.jpg',
        recipeId: 135,
    },
    {
        mNum: 933,
        mContent:
            '비빔국수다 진 양념 숙성이 필요없는 버전 때아닌 직장생활의 문턱을 넘은 후 제대로 식탁을 차리지 못하는 중 ㅠㅠㅠ 주말 점심 간단한 식탁을 차려내고 싶을 때 입맛이 사라지고 있을 때 이렇게 간단한 비빔국수 양념장 만들어 국수 비벼드시면 입맛이 확 살아나질것입니다~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ede24c0937ea7db670138b20f0faf3ea1.jpg',
        recipeId: 136,
    },
    {
        mNum: 934,
        mContent: '아이고 제가 지키지 못하고 있던 약속에 대한 댓글이 올라와 있네요~~~ 남편과 약속도 지키고 급조 비빔국수 다대기 비법도 공유하기로',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/884c981f67b08b513576ad061a20bbc41.jpg',
        recipeId: 136,
    },
    {
        mNum: 935,
        mContent:
            '오늘은 숙성시키지 않고 아주 간단한 버전의 비빔국수 다대기 비율입니다 재료 고추장 4T, 고춧가루 4 T 식초5 T, 설탕 4T, 참기름3T, 통깨 2T,마늘 1T, 간장4T',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6202dde0afd87aa85202df2775779b051.jpg',
        recipeId: 136,
    },
    {
        mNum: 936,
        mContent: '일단 청정원 푸드 에디터 티도 좀 내고 ㅋㅋㅋㅋㅋㅋ 며칠 전 살림을 놀이처럼에서 소개된 맛선생마늘가루도 넣어주고~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/679c52a0e396144922085fd655d3c8811.jpg',
        recipeId: 136,
    },
    {
        mNum: 937,
        mContent:
            '준비된 비빔국수 다대기 양념을 잘 섞어줍니다 오늘은 국수 삶는 비법은 생략 주인공은 비빔국수 다대기 양념이기 때문이기도 하지만 원래 메뉴 닭꼬치 준비도 해야 하므로',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6f34c407772bd26958d2a07365f9e3701.jpg',
        recipeId: 136,
    },
    {
        mNum: 938,
        mContent: '집에 있는 야채 다 나오거라 했더니 오이와 당근 그리고 사과',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4fd25655464e5762cd9cf193f7ab79811.jpg',
        recipeId: 136,
    },
    {
        mNum: 939,
        mContent: '채 잘 썬다고 하셔서 한번 더 자랑질~~ 채칼 수준이죠? ㅋㅋㅋㅋ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/68560ee0eb5317fbc2537c27c599c14b1.jpg',
        recipeId: 136,
    },
    {
        mNum: 940,
        mContent: '냉면 국수를 워낙 사랑하는 집안이라 늘 냉장고를 열면 냉면 무가 준비 완료 상태~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f7931f183fc5f5d297c2bff3c641b5481.jpg',
        recipeId: 136,
    },
    {
        mNum: 941,
        mContent: '오늘의 국수는 소면이 아니라 중면입니다. 비빔다대기 와 국수 그리고 야채 넣고 잘 비벼줍니다~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/483fbd6126b10981e2b5e353fce536b71.jpg',
        recipeId: 136,
    },
    {
        mNum: 942,
        mContent:
            '손에 모터 달아서 손의 움직임이 보이지 않습니다 ㅋㅋㅋ 새콤다롬매콤한 다대기 맛에 잘 삶아져 쫄깃하면서 탱탱한 국수 발에 아삭아삭 씹히는 야채와 냉면무 굿입니다~~~ 엄청 많은 비빔국수다대기 황금레시피가 여기저기 난무~~ 제 입맛에는 제 것이 딱 좋아요~~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ebbc7514f6464ca318adce3fa3766c2a1.jpg',
        recipeId: 136,
    },
    {
        mNum: 943,
        mContent: '미니새송이를 큰 것은 반으로 갈라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1beebe4b93f3e543c53179658f1c5e311.jpg',
        recipeId: 137,
    },
    {
        mNum: 944,
        mContent: '뜨거운물에 살짝데쳐주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/dfe8a77b6858096baee929c34764fa3d1.jpg',
        recipeId: 137,
    },
    {
        mNum: 945,
        mContent: '들기름을 약간두르고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/219ccc18f0415b1bf3345743f00ca2961.jpg',
        recipeId: 137,
    },
    {
        mNum: 946,
        mContent: '새송이버섯을 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/042174d91cc9d1e73be5d7a595fea1581.jpg',
        recipeId: 137,
    },
    {
        mNum: 947,
        mContent: '야채를 모두넣고 볶고 소금 0.5T를 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/21ab572e9946a126e0cc86ef2f1d6f9b1.jpg',
        recipeId: 137,
    },
    {
        mNum: 948,
        mContent: '그릇에넣고 깨소금을 뿌리면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/63fea3a1a488a2dca0aa4cf8b1ded7a21.jpg',
        recipeId: 137,
    },
    {
        mNum: 949,
        mContent: '당면은 요리 최소 30분전에 찬물에 담궈 미리 불려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7530d1d831d1ba418e1e0a44aabfdef71.jpg',
        recipeId: 138,
    },
    {
        mNum: 950,
        mContent:
            '콩나물은 물에 헹궈 체에 받쳐 준비해주시구요, 양파도 채썰어주세요. 당근이나 파프리카 등등 원하시는 재료 넣으셔도됩니다^^ 고추도 넣으면 좋았겠지만 다 떨어져서 있는 재료로만 했어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0e321454d28af92e1ce69a6d24ff90b81.jpg',
        recipeId: 138,
    },
    {
        mNum: 951,
        mContent:
            '양념재료들을 미리 섞어서 양념장을 만들어주세요. (고추장 1큰술, 고춧가루 2큰술반, 다진마늘 1큰술, 설탕 1큰술, 올리고당 1큰술, 간장 3큰술, 물 종이컵 2컵)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d4eefc35b5f0af561b2ec5969bfed84d1.jpg',
        recipeId: 138,
    },
    {
        mNum: 952,
        mContent: '콩나물과 양파, 양념장을 넣어 볶아주세요. 콩나물은 미리 데쳐서 하셔도되는데 전 그냥 귀찮아서 바로 했어요^^.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9cc59600370cfeb3e77656a04b67bf7f1.jpg',
        recipeId: 138,
    },
    {
        mNum: 953,
        mContent: '콩나물이 다 익으면 이때 간을 봐주세요! 전 조~금 강하게 먹는 편이라서 맛소금 반큰술 조금 안 되게 더 넣어주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98c2eadd6bd6af30f5ba161f180aa3521.jpg',
        recipeId: 138,
    },
    {
        mNum: 954,
        mContent: '불려놓은 당면도 넣어 잘 섞으며 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4e6929d6de83bf6442c498b6fb19d5961.jpg',
        recipeId: 138,
    },
    {
        mNum: 955,
        mContent: '양념이 잘 버무려지면 완성 !!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/43b5079f412c38d65d80189b71c721d61.jpg',
        recipeId: 138,
    },
    {
        mNum: 956,
        mContent: '먹기 좋게 그릇에 담고 드시면 끝 ! 전 보기 좋게 통깨도 뿌려주었어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/0c8b77ce1070806c1a9fcd7028bda0631.jpg',
        recipeId: 138,
    },
    {
        mNum: 957,
        mContent: '새송이버섯을 정리하여 흐르는 물에 헹궈 썰어 반으로 잘라 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1e0c3f0816596718b84841aeb282fee21.jpg',
        recipeId: 139,
    },
    {
        mNum: 958,
        mContent: '팬에 들기름을 붓고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ebdafa3f193a643f050589b73fb94abb1.jpg',
        recipeId: 139,
    },
    {
        mNum: 959,
        mContent: '새송이버섯을 펼쳐 소금과 후추를 뿌려',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/3e59f6af7714323196b154a6990281291.jpg',
        recipeId: 139,
    },
    {
        mNum: 960,
        mContent: '앞뒤로 노릇노릇하게 구워요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/be48d777f233bd37564a8e4883f757121.jpg',
        recipeId: 139,
    },
    {
        mNum: 961,
        mContent:
            '고구마순은 삶은걸 준비하는데요. 생거일경우에는 껍질을 깐후에 끓는물에 소금을 넣고 줄기가 손으로 말캉하고 눌러질때까지 삶아줍니다. (3~5분정도)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/133578ce709c19d9d208d9eab9cbe3b71.jpg',
        recipeId: 140,
    },
    {
        mNum: 962,
        mContent: '양파는 채썰고 대파는 송송 썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/25075af56a7dd61d3a80820efbc88dc61.jpg',
        recipeId: 140,
    },
    {
        mNum: 963,
        mContent: '팬에 들기름과 마늘을 넣고 중불에서 향을 내어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/06160d479a9edd64cb193d58c1f20aa41.jpg',
        recipeId: 140,
    },
    {
        mNum: 964,
        mContent: '물기를 제거한 고구마순을 넣어 고루 섞일정도로 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2d2b0694787ce4b67f20fc160673ab5f1.jpg',
        recipeId: 140,
    },
    {
        mNum: 965,
        mContent: '채썬양파를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1434c3dc43ac851c70cb27ff83d4402c1.jpg',
        recipeId: 140,
    },
    {
        mNum: 966,
        mContent: '고춧가루와 국간장을 넣고 중불에서 볶아줍니다. 국물이 자작한게 좋으면 물늘 1/2컵정도 넣어주셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5a903f8584141eae6197332bf3f6ae851.jpg',
        recipeId: 140,
    },
    {
        mNum: 967,
        mContent: '양념과 재료가 잘 어우러지게 볶아지면 썬 파를 넣고 볶아주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/1c73d33ff740fbc2bc919b1e9e72ad391.jpg',
        recipeId: 140,
    },
    {
        mNum: 968,
        mContent: '불에서 내려 참기름과 통깨로 마무리합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d37a83a9f31a10319445beff7aedd6aa1.jpg',
        recipeId: 140,
    },
    {
        mNum: 969,
        mContent:
            '갈릭브레드는 시판에 팔고있는 제품을 이용하여 해동해줍니다. 없을경우 5cm정도로 썬 통식빵위에 9등분으로 칼집을 내주고(잘리지않게) 다진마늘1: 설탕 2; 버터 3 정도의 비율로 맞춰서 듬뿍 발라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ab75f830c170ff2707e50d094a02b1da1.jpg',
        recipeId: 141,
    },
    {
        mNum: 970,
        mContent: '180도에서 8~10분정도 노릇하게 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a48cfad4b6a0b1b81594187773a85a511.jpg',
        recipeId: 141,
    },
    {
        mNum: 971,
        mContent: '우유에 슬라이스치즈를 넣고 잘 저어가며 끓여주세요. 보통 두께의 치즈라면 3장까지 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/97cedecc9deb17014155b385fde26f2a1.jpg',
        recipeId: 141,
    },
    {
        mNum: 972,
        mContent:
            '치즈가 잘 녹으면 설탕과 파마산치즈가루를 넣어서 잘 저어가며 끓여줍니다. 오래 끓일필요는 없고 농도가 살짜기 걸쭉해질정도로만 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/76d01a8969b347a2927793e924f08c7b1.jpg',
        recipeId: 141,
    },
    {
        mNum: 973,
        mContent: '구운 갈릭브레드위에 소스를 듬뿍 얹어준뒤 파슬리가루를 뿌려서 내면 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ef66f6877e4b5fe3ad285218ec34278b1.jpg',
        recipeId: 141,
    },
    {
        mNum: 974,
        mContent: '찹쌀가루와 물을 고루 섞어주고 중불에서 끓여 풀을 쑤고 식혀줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/103e8720e2dd05856f8dadac34859c891.jpg',
        recipeId: 142,
    },
    {
        mNum: 975,
        mContent: '쪽파는 다듬고 깨끗이 씻어서 절임용의 액젓을 흰부분에 뿌려서 절여줍니다. 30분정도후에 뒤집어주고 총 1시간정도 절여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4e5d3b7c8134e15ae245e8f6ed9f8c741.jpg',
        recipeId: 142,
    },
    {
        mNum: 976,
        mContent: '물과 소금을 제외한 양념과 식혀둔 찹쌀풀을 섞어둡니다. 고춧가루가 부는 시간을 주면 김치가 더욱 맛있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9dabac18c6bd2c6b1da6432d46c115671.jpg',
        recipeId: 142,
    },
    {
        mNum: 977,
        mContent: '쪽파가 절여지면 만든 양념을 그대로 부어주고 *절인 액젓도 버리지않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/ce88acec2466fc5e6dd33742c7fd71491.jpg',
        recipeId: 142,
    },
    {
        mNum: 978,
        mContent: '양념이 고루 묻을수있게 잘 묻혀주듯이 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b13f7795f302140def3bc2ecc9a61d411.jpg',
        recipeId: 142,
    },
    {
        mNum: 979,
        mContent: '15~20가닥씩 잡아 또아리를 틀어서 담아주고 (그냥 담아도 상관없어요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7feb626ab88c19099f46466009f3035f1.jpg',
        recipeId: 142,
    },
    {
        mNum: 980,
        mContent: '볼에 남은 양념에 물을 조금 넣어서 잘 훑어준뒤 소금을 약간만 넣어 파김치 위에 뿌려주어 하루정도 실온에 두어 익혀줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5871bd50b45c8a2bd58484a8e74ce5b61.jpg',
        recipeId: 142,
    },
    {
        mNum: 981,
        mContent: '시판타르틀렛은 제과 재료상이나 베이킹쇼핑몰에서 쉽게 구할수있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/92dbd5215974e298a7b0c20454a414d11.jpg',
        recipeId: 143,
    },
    {
        mNum: 982,
        mContent: '필링재료는 한데 넣어 중탕으로 고루 저어가며 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8964e4b264faee887d258354f2e0428d1.jpg',
        recipeId: 143,
    },
    {
        mNum: 983,
        mContent: '거품이 나지않게 천천히 섞어주고 큰거품이 많으면 체에 걸러주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/014b64c34b12da8c0f12ee25197209d51.jpg',
        recipeId: 143,
    },
    {
        mNum: 984,
        mContent: '타르틀렛에 호두를 적당히 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e022ea01f165a832d6a5fbda7c020c4b1.jpg',
        recipeId: 143,
    },
    {
        mNum: 985,
        mContent: '필링을 부어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f2523a3ba355c1393690b0c9e59e0d3b1.jpg',
        recipeId: 143,
    },
    {
        mNum: 986,
        mContent: '7개정도로 나눠서 만들었는데 호불호가 갈려요. 필링이 더 많은게 좋으면 6개에 찰랑할정도로 부어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d610005a4635d667ed733b817aafbda71.jpg',
        recipeId: 143,
    },
    {
        mNum: 987,
        mContent: '170도에서 13~15분정도 구워줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/e50ac9815b6ef187ba20d4e65413a8ba1.jpg',
        recipeId: 143,
    },
    {
        mNum: 988,
        mContent: '재료준비 햄버그 스테이크 만들기는 여기 ☞ @6887635 참고해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5765f90f4083d4ce7c7f5cbc680d13ab1.jpg',
        recipeId: 144,
    },
    {
        mNum: 989,
        mContent: '- 마른 팬에 파인애플 앞뒤 노릇하게 굽기 - 햄버그 스테이크 기름 두른 팬에 굽기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a18b4d71be6ff521cf678b055641d46b1.jpg',
        recipeId: 144,
    },
    {
        mNum: 990,
        mContent: '- 반숙 달걀 프라이 하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/dc4fbf41bb7ff0e2e1dba7c03ed8cb201.jpg',
        recipeId: 144,
    },
    {
        mNum: 991,
        mContent: '소스 만들기 - 적당한 팬에 올리브유 조금 두른 후 반 썰어 어슷썰기 한 새송이버섯 넣어 볶기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f6390452fa10ab4f348d79df1ae691011.jpg',
        recipeId: 144,
    },
    {
        mNum: 992,
        mContent:
            '- 버섯 숨이 죽으면 소금과 후춧가루를 제외 한 모든 재료 넣어 끓이기 - 소스가 걸쭉해지면 간을 본 후 신맛은 설탕 추가, 부족한 간은 소금 추가하기 - 후춧가루로 마무리하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f005e0850656e35982a10b2fb3f53d041.jpg',
        recipeId: 144,
    },
    {
        mNum: 993,
        mContent: '- 준비한 그릇에 밥 깔고 햄버스 스테이크 올리고 소스 얹고 달걀 프라이 올리고 구운 파인애플을 담으면 하와이식 함박스테이크 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d2db59f99b7ad8f0ebec01bf984babda1.jpg',
        recipeId: 144,
    },
    {
        mNum: 994,
        mContent: '백김치는 새콤한 정도로 익혀줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9892e5e291b2a29199ddbc2aaa11077e1.jpg',
        recipeId: 145,
    },
    {
        mNum: 995,
        mContent: '시판냉면육수에 동량의 백김치국물을 섞어주세요. 새콤달콤한 맛이 필요하면 설탕과 식초로 맞춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d809ff67636073cb437e8439c13f3c151.jpg',
        recipeId: 145,
    },
    {
        mNum: 996,
        mContent: '백김치는 먹기좋은 크기로 자르고 오이는 어슷썰어 소금에 살짝 절여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/8e85171c926dbfcd1f327de75a53bc811.jpg',
        recipeId: 145,
    },
    {
        mNum: 997,
        mContent: '면은 끓는물에 찬물을 넣어가며 삶아주고 찬물에 헹궈줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a7bf8672f960713f6c3f4f0e482088991.jpg',
        recipeId: 145,
    },
    {
        mNum: 998,
        mContent: '그릇에 면과 육수, 고명, 달걀을 얹어내면 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/aebc12690bfb8819a055769c668cfba91.jpg',
        recipeId: 145,
    },
    {
        mNum: 999,
        mContent:
            '1.살치살을 말이에 좋은 크기로 준비해주고 살치살에 남아있는 지방과 스킨들을 제거해주세요 2.말수있도록 길게 슬라이스 해주세요 되도록이면 슬라이스된 고기를 준비하는것이 편해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/060cccef07d936c9bbcbbaf4d067bc721.jpg',
        recipeId: 146,
    },
    {
        mNum: 1000,
        mContent: '1.슬라이스된 고기에 앞뒤로 밑간을 해주세요 저는 스테이크 시즈닝을 사용하였는데 없다면 소금과 후추로 간을 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7bcb01d08ac48409ff03b24e1da8887f1.jpg',
        recipeId: 146,
    },
    {
        mNum: 1001,
        mContent: '1.간이 잘 배이도록 앞뒤로 오일을 골고루 발라주세요 오일은 엑스트라 버진을 이용하는게 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9232d46ae4e294bf670aaafdfe43c8831.jpg',
        recipeId: 146,
    },
    {
        mNum: 1002,
        mContent:
            '1.파프리카(색감을 위해 여러 색을 사용해주세요) 더덕,팽이버섯을 크기가 균일하게 채썰어 손질해주세요 더덕말고 두릅을 이용해도 아삭한 식감과 맛이 좋고 영양도 좋아요 더덕 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f89300c349465110d20e11271b01ac751.jpg',
        recipeId: 146,
    },
    {
        mNum: 1003,
        mContent: '1.손질한 채소를 색감이 골고루 있도록 놓아주세요 밖으로 삐져나와도 나중에 재단하면 되니까 걱정마세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/77ea3f41fc9a9d5e8da296679d1bcc371.jpg',
        recipeId: 146,
    },
    {
        mNum: 1004,
        mContent: '1.말이가 풀어지지않게 김밥을 말듯이 꼼꼼하게 말아주세요 길이에 맞는 이쑤시게가 있다면 사용하시면 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/a2ef69f749cb12a28b40d41b2fdf08ec1.jpg',
        recipeId: 146,
    },
    {
        mNum: 1005,
        mContent:
            '1.말은 소고기를 뚜껑이있는 팬에 올려서 육즙이 빠지지 않게 센불로 겉을 골고루 익혀주세요 노릇한 색을 좀 더 내주려면 오일을 조금 넣고 굽는것도 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/df241773be7703b9dab9d77652f7d6871.jpg',
        recipeId: 146,
    },
    {
        mNum: 1006,
        mContent:
            '1.겉을 골고루 익혔다면 약불로 줄이고 뚜껑을 덮어서 속이 익을 때까지 익혀주세요 2.원하는 굽기의 소고기가 됬다면 빼주세요 (저는 미디움이 좋아서 그때 뺐어요) 너무 익힌다면 소고기가 질겨지니 유의해 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c62700c07465d4ce77af4170311763131.jpg',
        recipeId: 146,
    },
    {
        mNum: 1007,
        mContent:
            '1.매실액2큰술,간마늘2/1큰술,참기름2/1큰술,소금 조금 꺠3/1큰술을 넣고 섞어 주세요 깨를 넣을 때 부셔서 넣어주시면 더욱 고소한 맛이나요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2f55acf4cb3cc7690a23d2f42a79dbc91.jpg',
        recipeId: 146,
    },
    {
        mNum: 1008,
        mContent: '완성된 음식을 취향에 맞게 플레이팅 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/4b407b0eefa5c69a0f03319b24e68bc71.jpg',
        recipeId: 146,
    },
    {
        mNum: 1009,
        mContent:
            '1.살치살을 말이에 좋은 크기로 준비해주시고 살치살에 남아있는 지방과 스킨들을 제거해주세요 되도록이면슬라이스된 고기를 준비하는것이 편해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/50a4dc6512071bdfc2506106d1f18c481.jpg',
        recipeId: 147,
    },
    {
        mNum: 1010,
        mContent: '1.슬라이스된 고기에 앞뒤로 밑간을 해주세요 저는 스테이크 시즈닝을 사용하였는데 없다면 소금과 후추로 간을 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/cecba7873c1863bb282a257410a6b2e11.jpg',
        recipeId: 147,
    },
    {
        mNum: 1011,
        mContent: '1.간이 잘 스며들도록 앞뒤로 오일을 골고루 발라주세요 오일은 엑스트라 버진을 이용하는게 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/19d4ab779c659bfee138693f9809ba751.jpg',
        recipeId: 147,
    },
    {
        mNum: 1012,
        mContent:
            '1.파프리카(색갈을 위해 여러 색을 사용해주세요) 더덕,팽이버섯을 크기가 균일하게 채썰어 손질해주세요 더덕말고 두릅을 이용해도 아삭한 식감과 맛이 좋고 영양도 좋아요 더덕 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/286a0c276386551e6531a12dd690dce91.jpg',
        recipeId: 147,
    },
    {
        mNum: 1013,
        mContent: '1.손질한 채소를 색감이 골고루 있도록 놓아주세요 밖으로 삐져나와도 나중에 재단하면 되니까 걱정마세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/52d11cb0271b34c874a5bb10c38b98f01.jpg',
        recipeId: 147,
    },
    {
        mNum: 1014,
        mContent: '1.말이가 풀어지지않게 김밥을 말듯이 꼼꼼하게 말아주세요 길이에 맞는 이쑤시개가 있다면 사용하시면 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/c835f54111454f9b25b6549c1735b2621.jpg',
        recipeId: 147,
    },
    {
        mNum: 1015,
        mContent:
            '1.말은 소고기를 뚜껑이 있는 팬에 올려서 육즙이 빠지지 않게 센불로 겉을 골고루 익혀주세요 노릇한 색을 좀 더 내주시려면 오일을 조금 넣고 굽는것도 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b657e9785d440c7128bd2587ae7119ae1.jpg',
        recipeId: 147,
    },
    {
        mNum: 1016,
        mContent:
            '1.겉을 골고루 익혔다면 약불로 줄이고 뚜껑을 덮어서 속이 익을 때까지 익혀주세요. 2.원하는 굽기의 소고기가 됬다면 빼주세요(저는 미디움이 좋아서 그때 뺐어요) 너무 익힌다면 소고기가 질겨지니 유의해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/785a4c96159320b91e7dc7a3aecc3c781.jpg',
        recipeId: 147,
    },
    {
        mNum: 1017,
        mContent:
            '1.매실액2큰술,간마늘2/1큰술,참기름2/1큰술,소금 조금,깨3/1큰술을 넣고 섞어주세요 깨를 넣을 때 부셔서 넣어주시면 더욱 고소한 맛이나요. 레몬즙 1큰술을 추가하셔도 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/76d698474c7adcc21c8c055b73a3820c1.jpg',
        recipeId: 147,
    },
    {
        mNum: 1018,
        mContent: '완성된 음식을 취향에 맞게 플레이팅 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f24a788578d1b3b81e01598fe49370ef1.jpg',
        recipeId: 147,
    },
    {
        mNum: 1019,
        mContent: '먼저 열무는 뿌리부분을 칼날로 긁어서 깨끗이 다듬고 5센치길이로 썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/34cca45004a73d5b6c180101736529271.jpg',
        recipeId: 148,
    },
    {
        mNum: 1020,
        mContent: '열무도 비슷한 크기로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/98c846c4a93c0a0e38af2d97f9de68b91.jpg',
        recipeId: 148,
    },
    {
        mNum: 1021,
        mContent: '이제 두가지를 섞어서 물15컵에 굵은소금한컵을 넣고 2시간 절여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/20ba7a5f58a878b72effea62637d789a1.jpg',
        recipeId: 148,
    },
    {
        mNum: 1022,
        mContent: '중간에 뒤섞어줘야 골고루 절여지니깐 시간 체크해서 해주세요. 이제 깨끗한 물로 3번정도 씻어주고 체에 물기를 빼줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b3a6d6a52ffc634eddb1a6678567108d1.jpg',
        recipeId: 148,
    },
    {
        mNum: 1023,
        mContent:
            '이제 믹서기에 밥반공기와 물한컵을 넣고 잘 믹스해주세요. 아니면 찹쌀풀한컵을 준비해주세요. 여기에 분량의 양념을 같이 넣어 양념장을 만들어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/7d0536266aa09a3a3d13bd1cae8d0a981.jpg',
        recipeId: 148,
    },
    {
        mNum: 1024,
        mContent:
            '붉은고추간것(2컵)/다진마늘(4)/다진생강(1)/고춧가루(1컵)/새우젓(3)/멸치액젓(반컵)/설탕(2) 이제 골고루 버무리고 드시기 직전에 깨소금을 넣어서 버무려주면 열무얼갈이김치 완성이에요~ 하루정도 숙성시키고 냉장고에 넣으면 좋아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/5cfbc07dfaca8c3682a7b5a0270a40401.jpg',
        recipeId: 148,
    },
    {
        mNum: 1025,
        mContent:
            '양파 1/2개는 다져서, 프랑크 소시지와 방울토마토는 적당한 크기로 잘라주세요. 계란 3개와 체다치즈 2장, 켈로그 그래놀라 1/2컵, 생크림 1컵도 준비해주시고요. 토핑은 취향껏 준비해주시면 되겠슴당 ~ ** 생크림 없으신 분들은 휘핑크림이나 우유로 대신하셔도 좋아요. **',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/f05a42003ffebb71644d5767cea9576f1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1026,
        mContent:
            '현미와 검정 약콩 분말이 함유되어 있는 오곡 푸레이크와 통곡물에 달콤한 꿀을 넣어 바삭하게 구운 그래놀라 거기다 베리 믹스 두유를 동결건조하여 만든 사르르 큐브까지 - 영양도 만점, 맛도 만점인 켈로그 현미 그래놀라 사르르 큐브 ♥ 자 그럼 본격적으로 요리를 시작해보도록 하죠!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d2c3f98e4601d9cf712212e1d480a97f1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1027,
        mContent:
            '먼저 볼에 계란 3개를 깨서 넣어주고요. 생크림 200ml와 소금 2-3 꼬집, 설탕 1 작은 술, 후춧가루 약간, 체다치즈 2장을 잘게 찢어 넣어준 뒤 잘 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/d222f00cde0a2509934f3f1772b284021.jpg',
        recipeId: 149,
    },
    {
        mNum: 1028,
        mContent: '달콤하고 고소한 시리얼도 1/2컵 투척해서 가볍게 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/259250e3d64346da39c725f283e942cd1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1029,
        mContent:
            '중약 불로 예열한 팬에 버터 한 조각 넣고 녹여주시고요. 다진 양파와 프랑크 소시지를 넣고 볶아요. 양파가 투명해지면 방울토마토를 넣고 한 번 더 가볍게 볶아줍니다. 냄비를 바꿔서 ~ (볶은 재료를 담기 전 냄비 구석구석 식용유를 얇게 발라놓으시면 눌어붙지 않아서 좋더라고요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/b2e640a0b1a50dcb4ad4f4b1c8f19d4f1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1030,
        mContent:
            '그리고 나서 시리얼 반죽물을 부어 뚜껑을 닫은 상태로 약불에서 10분 이상 은근하게 구워주기! 보통 프리타타는 오븐으로 많이들 하시지만, 저는 오븐이 없기 때문에 가스레인지로 만들었고요. 마지막에 윗부분을 토치로 한 번 가볍게 그을려주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/195c8a0bdb44a0390d0dcf9d94cae36e1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1031,
        mContent: '완성된 프리타타 위에 토핑은 취향껏 올려주세요 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/2ccc8c8108c68f43f62c2d970ae817ef1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1032,
        mContent:
            '시리얼에 부족한 칼슘은 우유와 치즈가 채워주고, 비타민은 야채와 과일이 채워주니까 한 끼 식사로도 good - 아이들 영양간식으로도 참 좋아요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/9e04c96355edd1bbb2df921bf772514f1.jpg',
        recipeId: 149,
    },
    {
        mNum: 1033,
        mContent: '영양과 맛, 비주얼 삼박자를 고루 갖춘 시리얼 프리타타 ~ 홈 브런치로 강추드려요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/01/6f8831bbe250a6fe2d5452dd5fc712511.jpg',
        recipeId: 149,
    },
    {
        mNum: 1034,
        mContent: '양파,파프리카,브로컬리,오이를 준비하여 적당한 크기로 잘라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bcdbb56a2edac836df4489f8b14ba8da1.jpg',
        recipeId: 150,
    },
    {
        mNum: 1035,
        mContent: '적은양파는 통으로 담고 중간사이즈는 반을 자르고 바로 드실것은 먹기 적당한 크기로 잘라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/34ecfe38e8dfc81ac458739440fccdbd1.jpg',
        recipeId: 150,
    },
    {
        mNum: 1036,
        mContent: '파프리카도 씨를 빼고 적당한 크기로 잘라주시구요~ 보기좋은것이 맛도 있고 영양도 있겠지요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7821bdd10b3334cb0a517d197bcf27c71.jpg',
        recipeId: 150,
    },
    {
        mNum: 1037,
        mContent: '건강을 생각하여 브로컬리도 준비하였네요 바로 드시는것은 적게 오래두고 드실것은 큼직하게 썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7604012e4577ee189999745f8a45d5811.jpg',
        recipeId: 150,
    },
    {
        mNum: 1038,
        mContent: '오이는 바로 먹으려고 조금 적게 썰어 주었어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/af975712cb5feb4b428847fc73e616e11.jpg',
        recipeId: 150,
    },
    {
        mNum: 1039,
        mContent: '준비한 모든 재료를 골고루 혼합하여 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/feadb5855dd73d75ee42345989b0ff351.jpg',
        recipeId: 150,
    },
    {
        mNum: 1040,
        mContent: '적당한 크기로 자른것은 장아찌원액을 조금 적게 부어주시고 통으로 담는것은 오래두고 먹을것이기에 약간은 더 원액을 부어줄것이랍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/30726318b2717f0ce9b082d54c023ef21.jpg',
        recipeId: 150,
    },
    {
        mNum: 1041,
        mContent: '2키로 통 3을 원액 1병으로 담았네요 조금 오래두고 먹을것과 바로 먹을것 장아찌원액을 조금씩 다르게 부어주어야해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a1c3035e5d50ca0a59cf94e5f14bca0d1.jpg',
        recipeId: 150,
    },
    {
        mNum: 1042,
        mContent: '원액을 붓고 몇시간이 지나면 뚜껑이 닫을 수 없었던것이 닫을수가 있네요~~ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3f132b92268b9e6577a6287ab48d8b7f1.jpg',
        recipeId: 150,
    },
    {
        mNum: 1043,
        mContent: '이제는 뚜껑을 닫고 원액이 야채에 고루 묻을수 있도록흔들어 주세요~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/554ba122738d6bbafc9a3ce3ea8e13a31.jpg',
        recipeId: 150,
    },
    {
        mNum: 1044,
        mContent: '밤에 담아 아침이 되니 이렇게 숨이 죽고 맛이 들어 먹을수가 있게 되었어요`',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9756d385422a73a2de56c2e1a03c05401.jpg',
        recipeId: 150,
    },
    {
        mNum: 1045,
        mContent: '노각이 너무 익은 것보다 만져보았을 때 단단하고 푸른 기가 있는 것이 맛이 더 좋습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/22596b3d15664dda8911b3f34a99bebd1.jpg',
        recipeId: 151,
    },
    {
        mNum: 1046,
        mContent:
            '준비한 노각은 껍질을 벗겨주기 전에 꼭지 부분을 먼저 잘라내어 쓴맛을 확인합니다 이때 쓴맛이 많이 나는 노각도 있기에 쓴맛이 나면 꼭지 부분을 조금 더 잘라내고는 잘라주었던 칼은 한번 세척하고 썰어주셔야 노각에 다른 부분까지 쓴맛이 없어요 확인하지 않고 그냥 썰어 준비하다 보면 낭패를 볼 수 있기에 꼭 먼저 쓴맛을 확인',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d844ec6c7b1e73f70e73f73241e746e01.jpg',
        recipeId: 151,
    },
    {
        mNum: 1047,
        mContent: '수저로 속씨를 긁어 내어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b2408234359552073856a0259c8ac1241.jpg',
        recipeId: 151,
    },
    {
        mNum: 1048,
        mContent:
            '다음으로는 썰어주는데요 길게 채를 썰듯 썰기도 하고 편하게 둥근 모양 그대로 썰어줍니다 이때 너무 얇게 썰기보다는 0.3cm 정도의 두께로 썰어주면 식감이 더 좋아요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d73563f0d71cde73cefc9cb851cbb7f41.jpg',
        recipeId: 151,
    },
    {
        mNum: 1049,
        mContent: '썰은 노각은 가는 소금을 넣어 절여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/52a32b72ba4166b588815a0587977c1e1.jpg',
        recipeId: 151,
    },
    {
        mNum: 1050,
        mContent: '꼭 어느 시간 정도 절인다 하기보다는 오이가 어느 정도 절여져 수분이 많이 빠졌으면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/748ac681e760a94cc6a1c56081d005321.jpg',
        recipeId: 151,
    },
    {
        mNum: 1051,
        mContent: '찬물에 한번 가볍게 헹군 후 물기를 최대한 꼭 짜줍니다 오이는 수분이 많기에 꼭 짜서 무침을 하여도 금방 수분이 생겨요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d7e38c7c48d33f1450dd9e2846dda48c1.jpg',
        recipeId: 151,
    },
    {
        mNum: 1052,
        mContent: '있는 힘껏 짜주었습니다 ㅋ 이때 늘 생각하는 것이 야채 탈수기인데 야채 탈수기가 있음 참 수월할 것 같아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/943e2f8f49f6b4fda652f8a01924b2b81.jpg',
        recipeId: 151,
    },
    {
        mNum: 1053,
        mContent: '준비한 양념을 넣어 조물조물 무쳐주면 오독오독 씹는 식감이 좋은 노각무침 완성^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/db55e65d03b4519a95a11389915cf6e81.jpg',
        recipeId: 151,
    },
    {
        mNum: 1054,
        mContent: '집고추장을 넣었는데 시판 고추장일 경우 단맛을 덜 넣는 것이 좋습니다^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1df528fccd84dd69925f4e3568171bc81.jpg',
        recipeId: 151,
    },
    {
        mNum: 1055,
        mContent: '국내산은 비싸니 호주산으로~ ^^ 키친타월로 핏물을 제거하고 사용했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/21dbc7735f27870e72a60a45e72f0d691.jpg',
        recipeId: 152,
    },
    {
        mNum: 1056,
        mContent:
            '세일해서 사온 시판용 소불고기양념장입니다. 500ml인데 1,900원에 팔더라고요. 이렇게 세일을 하면 안 살수가 없죠. (내가 양념하기 싫어서 이걸 사온건 아니라는 점... 다만, 이게 더 맛있는 거 인정은 함)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/eca16eb4edd161ab6a62439d730e34871.jpg',
        recipeId: 152,
    },
    {
        mNum: 1057,
        mContent:
            '밥숟가락으로 계랑을 해야 했는데 그냥 넣었네요. 블로그 원데이 투데이도 아닌데 하다 보면 이래요~ 양념장을 너무 많이 넣으면 나중에 수습이 힘들어지니 많이는 넣지 않았어요 고기에 양념이 잘 스며들게 잠시 재워둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/97744837d2cb75641eb16720f42ce3581.jpg',
        recipeId: 152,
    },
    {
        mNum: 1058,
        mContent: '양파, 당근, 파는 썰어서 준비를 해놓고 숙주는 씻어서 물기를 빼놓았어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/64dbc2a2360722d167173698ae15cbca1.jpg',
        recipeId: 152,
    },
    {
        mNum: 1059,
        mContent: '궁중팬에 불고기, 양파, 당근을 넣고 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/666a219c299736063aef8c6afb6e0da31.jpg',
        recipeId: 152,
    },
    {
        mNum: 1060,
        mContent:
            '불고기가 80% 정도 익으면 숙주와 파를 넣어주세요. 숙주를 많이 넣어나? 싶을 정도로 넣어주세요. 숨이 죽으면 숙주가 왜 이리 없지? 하고 느끼실 거예요. 그리고 숙주를 넣고 나서는 센 불에 재빨리 볶아야 물이 많이 생기지 않아요!!! 센 불에 스피드 하게!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/33f80a64841168e82f9d86d9aea796fa1.jpg',
        recipeId: 152,
    },
    {
        mNum: 1061,
        mContent:
            '전 숙주에 후추 넣는 거 좋아해서 후추도 넣고 간을 보고 싱거우면 간장이나 양념장을 좀 더 넣어주세요. 아삭한 식감의 숙주를 좋아하신다면 고기를 다 익힌 후에 숙주를 넣어서 숨만 죽여서(?) 드셔도 되겠죠? 숙주불고기 대단하지는 않지만 먹던 불고기에 재료 한두가지만 바꿔도 새로운 요리 느낌이 들어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2c2234fd03048ebb7539ae8186caced01.jpg',
        recipeId: 152,
    },
    {
        mNum: 1062,
        mContent: '풋마늘은 하나하나 깨끗히 씻어줍니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1063,
        mContent: '6cm로 썰은후 체에 받칩니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1064,
        mContent: '통에 잎은 아래 대는 위로 가게 담습니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1065,
        mContent: '간장소스를 비율대로 끓입니다 (기호에 맞게 식초 첨가)',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1066,
        mContent: '팔팔 끓으면 풋마늘에 붓습니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1067,
        mContent: '식인후 냉장숙성 시킵니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1068,
        mContent: '3일후 간장만 부어 다시 끓인후 식혀 붓습니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1069,
        mContent: '냉장숙성 시킵니다',
        mPicture: '',
        recipeId: 153,
    },
    {
        mNum: 1070,
        mContent: '돌 미나리는 팔팔 끓는 물에 천일염을 넣고 살짝 데쳐줍니다~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/fd1eb83e3d125a749f6939b483c773531.jpg',
        recipeId: 154,
    },
    {
        mNum: 1071,
        mContent: '참기름을 제외한 모든 양념을 잘 섞어준 다음 돌미나리를 넣어 조물조물 무쳐 줍니다~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0d3a0a7caae0e81c90774d17381252721.jpg',
        recipeId: 154,
    },
    {
        mNum: 1072,
        mContent: '마지막에 대파와 참기름을 넣어 휘리릭 무쳐주면 완성입니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a1de8f532964584288e6516ac0570ecf1.jpg',
        recipeId: 154,
    },
    {
        mNum: 1073,
        mContent: '한재 미나리는 연하고 부드럽지만 돌미나리 역시 조금은 억세 보여도 아주 연하고 맛있답니다~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d8f954ddde214c6bcb80befaf93ae85f1.jpg',
        recipeId: 154,
    },
    {
        mNum: 1074,
        mContent: '저는 된장이나 간장에 묻혀도 맛있지만 초고추장에 묻힌 것을 더 좋아한답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/952b2b0fdf292cc2c39cad0e6952f40f1.jpg',
        recipeId: 154,
    },
    {
        mNum: 1075,
        mContent: '저는 돌미나리 특유의 맛 때문에 더 좋아한답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f1480681503c5df49adaaf5ddc7c49091.jpg',
        recipeId: 154,
    },
    {
        mNum: 1076,
        mContent:
            '작년까지만 해도 많이 자랐었는데 거름이나 비료 등을 주지 않아서 점점 줄어든다고 하네요!~~ 완전 유기농 무공해로 키워 먹고 싶기에 양이 적으면 어떤가요 대신 지인들에게 보내주고 싶은데 그걸 못하네요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/41141249c39408be83942278b8b41aca1.jpg',
        recipeId: 154,
    },
    {
        mNum: 1077,
        mContent:
            '미역줄기는 염장을 했기 때문에 소금이 엄청 많이 묻어있어요~!~ 물에 담가서 주물러 준 다음 물에 담가 놓았어요~!~ 짠 기를 모두 빼주어야 하기에 중간에 먹어보고 짠 기가 빠졌으면 헹구어 물기를 빼줍니다~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/acb784150b01f0c847770dc386fc19471.jpg',
        recipeId: 155,
    },
    {
        mNum: 1078,
        mContent: '줄기를 그냥 볶으면 너무 길어서 먹기 불편하지요 먹기 좋은 크기로 잘라줍니다 당근도 조금 가늘게 채 썰어 놓았어요~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/32eabc6e0734aed779d14df5182926f31.jpg',
        recipeId: 155,
    },
    {
        mNum: 1079,
        mContent:
            '먹기 좋게 썰어놓은 미역줄기에 청주나 소주를 넣고 밑간을 해줍니다 맛술은 달착지근해서 전 청주를 사용해서 미역 비린내를 잡아주었어요~!!~ 식용유를 두른 팬에 미역줄기와 당근을 섞어준 다음 참치 액과 다진 마늘을 넣고 조물조물 무쳐준 다음 볶아줍니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f01405debb55969e0525b5496247a65b1.jpg',
        recipeId: 155,
    },
    {
        mNum: 1080,
        mContent: '줄기를 볶다가 깨소금도 넣고 대파도 넣어 볶아줍니다~!~ 마지막에 참기름을 넣고 다시 한번 휘리릭 볶아주면 끝입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2edb99cbc025045d3bae2b3fc26c2fc41.jpg',
        recipeId: 155,
    },
    {
        mNum: 1081,
        mContent:
            '소고기는 2cm 정도의 큐브형으로 썰어서 키친타월로 핏물을 빼줍니다~!~ 핏물 뺀 소고기에 배즙과 간장 설탕을 넣고 밑간을 해놓았어요~!~ 밑간해놓은 사진이 없네요~!~ 야채들도 소고기와 비슷한 크기로 썰어 놓았어요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a011bdd1b078170b95915cb9ee3c8a671.jpg',
        recipeId: 156,
    },
    {
        mNum: 1082,
        mContent:
            '버터 1조각을 팬에 넣고 소고기를 볶아줍니다~!~ 고기를 볶으면서 다진 마늘과 생강즙을 넣어줍니다~!~ 센 불에서 빨리 볶아야 육즙이 그대로 맛있게 드실 수 있어요~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/eade8f3d645c583e8dc45820a84277a41.jpg',
        recipeId: 156,
    },
    {
        mNum: 1083,
        mContent: '고기가 거의 익었을 때 모든 야채를 넣고 만들어놓은 소스를 부어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e2c4e36d6d8f022accbf6de56272d0ef1.jpg',
        recipeId: 156,
    },
    {
        mNum: 1084,
        mContent: '소스를 넣고 빠르게 휘리릭 볶아주고 마지막으로 참기름도 조금 넣고 마무리해줍니다~!~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/643dd55552b929293c306ae459f604e61.jpg',
        recipeId: 156,
    },
    {
        mNum: 1085,
        mContent: '접시에 치커리와 어린 새싹채소를 깔아준 다음 만들어놓은 찹스테이크를 올려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/93ac49171667db4f3c1fbe485deec2051.jpg',
        recipeId: 156,
    },
    {
        mNum: 1086,
        mContent: '참치캔 150g 한개 를 준비해 비닐 장갑을 낀 손으로 참치를 조금씩 잡아 기름을 최대한 꼭 짜 없애 준비해 그릇에 담아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1030f26e838ba2d40cc21371f273a5d21.jpg',
        recipeId: 157,
    },
    {
        mNum: 1087,
        mContent:
            '그리고 여기에 1/4통으로 잘린 적양배추 1장을 굵직하게 네모나게 잘라 담고 피망 1/2개는 씨를 빼고 굵직하게 다지고 양파 1/4개는 곱게 다져 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/948c9826b9e9d745e2760231b79c398c1.jpg',
        recipeId: 157,
    },
    {
        mNum: 1088,
        mContent: '그리고 마요네즈 5큰술, 씨겨자 1큰술, 올리고당 1/2큰술을 넣고 고루 버무려 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1ab0fc2ab4cd85779f545c2d054d2cd71.jpg',
        recipeId: 157,
    },
    {
        mNum: 1089,
        mContent: '작은 크기 감자 4개를 껍질벗겨 사방 1cm 정도로 깍뚝썰기해서 찬물에 소금 1/2큰술을 넣고 함께 삶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a09946beeb785699ea0c2f94a27b6ba31.jpg',
        recipeId: 157,
    },
    {
        mNum: 1090,
        mContent: '물이 고르게 팔팔 끓으면 불을 줄여 2~3분정도를 더 끓여 감자가 익으면 건져 물기를 빼 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7d3aca53ce66fff2e003b9f7997e25851.jpg',
        recipeId: 157,
    },
    {
        mNum: 1091,
        mContent: '그리고 참치마요에 넣고 고루 섞어 주시면 되겠습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/90d9211bb90e1cc89e04fc5b2f322ef51.jpg',
        recipeId: 157,
    },
    {
        mNum: 1092,
        mContent:
            '반세오에 들어가는 재료들은 간단합니다. 중요한 것은 새우이니까요. 그리고 숙주이고요. 그밖에 저는 고수대신으로 샐러리잎과 양파를 준비했습니다. 애기새송이도 준비하고요. 애기새송이는 2~3등분으로 찢어서 준비해 놓으시면 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f39dfea2417d0f733fd1fa0c3aa2b6f91.jpg',
        recipeId: 158,
    },
    {
        mNum: 1093,
        mContent: '숙주도 씻어서 물기를 빼고 준비해 놓았습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f1caa7e7d71f57ff7715e93a388ab0211.jpg',
        recipeId: 158,
    },
    {
        mNum: 1094,
        mContent: '지금부터는 반세오 안에 들어가는 새우숙주볶음을 준비하기 위함입니다. 달궈진 팬에 기름을 넣고 편마늘, 파를 넣고 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0e5173818912ebad85a25375c95e8df51.jpg',
        recipeId: 158,
    },
    {
        mNum: 1095,
        mContent: '냉동새우를 준비했어요. 찬물에 해동시켜 놓았고요. 그리고 물기를 빼 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ac0b1a38076b9f0432ecf0f1b21b88571.jpg',
        recipeId: 158,
    },
    {
        mNum: 1096,
        mContent: '마늘과 파를 볶아다면 이젠 다른 부재료들을 넣어 볶아 줍니다. 애기새송이버섯, 양파, 샐러리잎을 넣고 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/fe2db39fc33d69c82bd5c264bab9efcb1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1097,
        mContent: '그리고 중요한 새우도 넣어서 같이 볶아 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/892d4c60f7138b390f9e670ab82decc41.jpg',
        recipeId: 158,
    },
    {
        mNum: 1098,
        mContent: '이제부터는 간을 해주는데요. 후추, 소금으로만 간을 해 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b87ee3850d3fc29b5a3382386b2c45af1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1099,
        mContent: '새우의 비린맛을 제거 하기 위해서 청주나 맛술 조금만 넣어 주시고요. 소금말고 피쉬소스를 넣으셔도 좋아요. 액젓이나요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a95d9e565c0eb9ce9eeb2048a7ce6c481.jpg',
        recipeId: 158,
    },
    {
        mNum: 1100,
        mContent: '그리고 불을 끄고는 숙주를 넣고 잔열을 이용해서 볶아 줍니다. 그럼 자연스럽게 숙주가 익게 되거든요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/84f3f28efcc1599c1f6e9d7945d7b9cf1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1101,
        mContent:
            '이렇게 완성된 반세오 속에 들어가는 재료를 준비하시면 됩니다. 그리고 반세오반죽을 이용해서 빈대떡 같은 반세오를 만들어 주시면 끝이예요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/df5e76eab9b14555a1485a4e7b81787d1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1102,
        mContent: '베트남 하노이에서 구입한 반세오 가루입니다. 오뚜기에서도 반세오가루가 나오는 것으로 알고 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/555bbfca6317ebb8c5c3b174a3c681dd1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1103,
        mContent: '그래서 반세오가루에 물, 달걀과 소금을 넣고는 잘 풀어서 섞어 줍니다. 거품기를 이용하시면 쉽게 잘 반죽될 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/271b72e77639b1f47bd6639c84c9bb541.jpg',
        recipeId: 158,
    },
    {
        mNum: 1104,
        mContent: '반죽은 걸쭉하다기보다는 묽은 느낌의 상태가 되어야 합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/02677bfb64b5a3748cf0144ed858214e1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1105,
        mContent: '반세오와 함께 먹는 얇은 라이스페이퍼입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4f28672da06bb9caeaf515f61208637b1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1106,
        mContent: '달걀지단을 부치듯이 반세오반죽을 퍼서는 팬에 쭉 둘러 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ad82254e5a19869163e170ee2a52f3bf1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1107,
        mContent: '달걀하나를 더 터트려서는 노른자를 풀어주면서 쭈욱 펴 주었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b334ad662476b4877ead9676a6a21aa11.jpg',
        recipeId: 158,
    },
    {
        mNum: 1108,
        mContent: '그리고 그 위에 만들어 놓았던 반세오속재료인 숙주새우볶음을 가운데에 올려 놓아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/285af0de354f5e4be1e8a5b03428e0871.jpg',
        recipeId: 158,
    },
    {
        mNum: 1109,
        mContent: '그런 다음에 반으로 접어 주세요. 그리고는 앞뒤로 노릇노릇하게 부쳐 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/feb9488a58da9f5f5e57eca3ce1830ac1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1110,
        mContent:
            '반세오를 드실때에 필요한 재료는 각종 야채들인데 저는 쌈채소랑 함께 샐러드를 준비했어요. 집에 있는 채소들을 사용하시면 됩니다. 특히 고수를 좋아하시는 분들은 고수도 준비해 넣어 주시면 좋겠죠.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/793b3e1b9296f0b7581fb069ee5a39021.jpg',
        recipeId: 158,
    },
    {
        mNum: 1111,
        mContent: '각종 야채들과 함께 라이스페이퍼도 준비해 놓고요. 그리고 부친 반세오를 옆에 놓아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/bd52941cb07b74e1bbfe4b4a56d335d31.jpg',
        recipeId: 158,
    },
    {
        mNum: 1112,
        mContent: '그리고 가위를 이용해서 피자처럼 먹기 좋게 등분을 해서 잘라 주시면 반세오 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b6c40766dbc91cf30793bbfc2bf3601f1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1113,
        mContent: '반세오 먹는 방법!! 먼저 라이스페이퍼를 깔아 주고요. 거기에 반세오를 올려 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/cb44573c4ce9e1224a55f2096509cd931.jpg',
        recipeId: 158,
    },
    {
        mNum: 1114,
        mContent:
            '원하는 각종 야채들을 넣어 줍니다. 여기에서 소스를 뿌려 주어도 좋고요. 소스는 스위트칠리소스나 핫칠리소스를 넣어 주시면 되고요. 보통 월남쌈소스라고 파는 것을 사용하시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d16341b9fb70e62ce7d7354f7c42031b1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1115,
        mContent:
            '그리고 라이스페이퍼를 돌돌 말아주세요. 라이스페이퍼가 너무 딱딱하지 않을까 싶게 생각하시겠지만 뜨거운 반세오의 열기로 충분히 부드러워지고요. 또 쌈채소의 수분으로도 부드러워 집니다. 그리고 은근히 찔깃찔깃한 라이스페이퍼의 맛도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/807a1f446398323d6de9fe4b7768da7d1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1116,
        mContent:
            '스위트칠리소스와 핫칠리소스를 섞어서 만든 소스에 찍어서 드시면 더욱 맛있습니다. 취향에 따라 소스는 선택하셔서 찍어 드시면 되어요. 월남쌈소스에 찍어 드셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c88a74aa3e167ce09a2df94544f3faeb1.jpg',
        recipeId: 158,
    },
    {
        mNum: 1117,
        mContent: '먼저 달큰한 맛과 시원한 맛을 더해 줄 배추는 배추의 크기에 따라 세로 방향으로 2~4등분 후 2cm 간격으로 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/46d3034f9c67a587c4aef4541b45d5461.jpg',
        recipeId: 159,
    },
    {
        mNum: 1118,
        mContent: '향긋한 대파는 어슷하게 2cm정도 두께로 자를게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8e19e57db1dc7c7ef16492f5aadedb5d1.jpg',
        recipeId: 159,
    },
    {
        mNum: 1119,
        mContent:
            '독특한 식감과 향으로 더욱 맛의 풍미를 더할 팽이버섯은 붙은 부분을 적당히 떼어 먹기 좋게 준비 해 주세요.표고버섯등 다른 버섯도 함께 준비해서 곁들여주시면 더욱 푸짐하게 즐길 수 있겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5ed0bee52065b29e8578e3321af7c0701.jpg',
        recipeId: 159,
    },
    {
        mNum: 1120,
        mContent:
            '이제 기본 육수를 만들어볼게요.멸치8마리,파뿌리3개,다시마2조각,고추1개,물500mL이렇게 넣고 강불에서 한소끔 끓어오르면 중불로 낮추고 8분동안 끓여 육수를 만들어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/dddf0324d6ad7adda1ad058bd84532941.jpg',
        recipeId: 159,
    },
    {
        mNum: 1121,
        mContent: '준비한 채소와 소고기를 냄비에 넉넉히 잘 담아 주시고 준비 된 육수를 부어 이제 조리를 시작 해 주세요. 강불에서 끓이기 시작할게요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6ad09e295dad2f4ac048c13be50545c11.jpg',
        recipeId: 159,
    },
    {
        mNum: 1122,
        mContent: '한소끔 끓어오르면, 쯔유2T,소금1t 을 넣고 기호에 맞게 간을 맞추어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b50f93d7a554458bbf09d5e8d16dbae41.jpg',
        recipeId: 159,
    },
    {
        mNum: 1123,
        mContent:
            '마지막으로 맛술1T,후추1/2t이렇게 넣고 한소끔 더 끓여주시면 완성!전골 요리 레시피 스키야키 만들기,생각보다 어렵지 않죠?달걀노른자와 깨를 1/2t정도 살짝 얹어 더욱 먹음직하게 담아 내 볼게요. 전골냄비에 담아 상에 낼 때 노른자를 가운데 곁들여봤어요.남은 흰자는 나중에 국물에 면사리를 넣거나 죽을 만들어 드실 때 같이 곁들여 주시면 더욱 고소해요. 오늘은 생각보다 어렵지 않게 누구나 준비할 수 있는 집들이 음식 스키야키 만들기 전골 요리 레시피로 여러분과 함께 했습니다.넉넉하게 만들어 귀한분들 맛있게 대접해 보시면 어떨까요? 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f89cfa3b88c38276642a6587e374fd141.jpg',
        recipeId: 159,
    },
    {
        mNum: 1124,
        mContent: '등심은 한 입 크기로 잘라 허브솔트, 후추, 올리브유를 넣어 버무린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/28a2e18b00103b47aeeafc95e89255cf1.png',
        recipeId: 160,
    },
    {
        mNum: 1125,
        mContent: '예열된 팬에 버터를 넣고 준비한 등심을 넣어 노릇하게 굽는다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b2662b17e414bde33e98aec883edeed91.png',
        recipeId: 160,
    },
    {
        mNum: 1126,
        mContent: '고기 표면이 노릇하게 익으면 다진 마늘, 다진 양파, 한 입크기로 썰어놓은 채소를 넣어 가볍게 볶는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/42195404057584b279f5f535d15a80271.png',
        recipeId: 160,
    },
    {
        mNum: 1127,
        mContent: '양파가 살짝 투명해 지면 스테이크 소스, 올리고당을 넣어 졸여 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c3ce8aec75034e74fde8cabb87082fcb1.png',
        recipeId: 160,
    },
    {
        mNum: 1128,
        mContent: '쇠고기 육포를 가위로 가로 3cm, 세로 3cm로 잘라 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b93095b5bd5bff2a09a651878566b9351.jpg',
        recipeId: 161,
    },
    {
        mNum: 1129,
        mContent:
            '양파와 적양파는 반으로 자른 후 굵게 썰고 마늘쫑은 4cm 길이로 잘라 주세요. 다양한 색깔의 파프리카들은 반으로 갈라 굵게 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c8be8ef05f8a386bd922fe57096db9581.jpg',
        recipeId: 161,
    },
    {
        mNum: 1130,
        mContent: '팬에 올리브유를 두른 후 팬이 살짝 달궈지면 호두, 땅콩을 넣고 볶아 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/711864c3dd7c16a2095cfebae25b884e1.jpg',
        recipeId: 161,
    },
    {
        mNum: 1131,
        mContent:
            '볶아진 호두와 땅콩에 고추기름을 두르고 쇠고기 육포를 함께 넣어 3분 정도 볶아 주세요. 마지막으로 후추와 소금으로 간을 한 뒤 살짝 더 볶아주면 완성!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6d34eb78858a63aac1766c8846506bef1.jpg',
        recipeId: 161,
    },
    {
        mNum: 1132,
        mContent: '야채와 햄, 두부는 먹기 좋은 크기로 썰고 신김치는 설탕을 살짝 뿌려 신맛을 중화시켜주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2b3c45ad9dbd8f74a0c82e1b144871241.jpg',
        recipeId: 162,
    },
    {
        mNum: 1133,
        mContent: '고춧가루 1스푼, 고추장1스푼, 간장 1스푼, 설탕 1스푼, 다진마늘 1스푼 넣고 양념장을 만들어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/135aa3d4c92adfa26672d7fd6af0fa481.jpg',
        recipeId: 162,
    },
    {
        mNum: 1134,
        mContent: '냄비에 김치,양파, 파를 깔고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3e1e4daa42445ccc2627b6628005d4391.jpg',
        recipeId: 162,
    },
    {
        mNum: 1135,
        mContent: '햄과 두부를 올려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/05e747c226e9c1c5411ad8a452bebf261.jpg',
        recipeId: 162,
    },
    {
        mNum: 1136,
        mContent: '사골육수를 자작하게 부어주고 양념을 위에 올려주세요 양념은 넉넉하게 만들어 사골육수 간에 맞춰 조절해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/653013021f30045736403e90b6d2c9bc1.jpg',
        recipeId: 162,
    },
    {
        mNum: 1137,
        mContent:
            '뚜껑을 덮고 15-20분 동안 충분히 끓여줍니다 야채와 김치에서 맛이 우러나도록 천천히 오래 끓여주세요 중간에 양념을 잘 풀어 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ebebbed78447eb7f3cedbb823706bddf1.jpg',
        recipeId: 162,
    },
    {
        mNum: 1138,
        mContent: '김치와 양파가 충분히 익도록 끓여주면 완성! 취향에 따라 라면사리, 만두 등등을 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/164887114e3ffb1cb5fdf9500e74f1511.jpg',
        recipeId: 162,
    },
    {
        mNum: 1139,
        mContent: '오리가슴살은 2~3mm 두께로 얇게 썰어 주시고 새송이 버섯은 밑둥을 칼로 다듬어 씻은 후 모양대로 얇게 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/388e71e8aba115d2817ebd14233240231.jpg',
        recipeId: 163,
    },
    {
        mNum: 1140,
        mContent: '고추는 꼭지를 떼고 반을 갈라 씨를 제거한 다음 3~4등분으로 어슷 썰어 주시고 양파도 같은 크기로 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/71a20e31c55caa97ca26f728d5cf5dee1.jpg',
        recipeId: 163,
    },
    {
        mNum: 1141,
        mContent:
            '다진파 2큰술, 다진마늘 2큰술, 간장 5큰술, 물엿 5큰술, 참기름 2큰술, 갠겨자 1큰술, 레몬즙 1큰술, 깨소금 1큰술, 후추 1/3작은술을 혼합해 주시고 양념장에 얇게 썬 오리고기와 새송이버섯, 고추, 양파를 넣고 고루 섞어 재워 주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/883d9ca4b63743bbfcb353438e18596f1.jpg',
        recipeId: 163,
    },
    {
        mNum: 1142,
        mContent: '오리 버섯 불고기를 달궈진 팬에 구워 접시에 내면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/cec583b0fe6f2a208b31130be20bba8b1.jpg',
        recipeId: 163,
    },
    {
        mNum: 1143,
        mContent:
            '춘권피는 하나씩 떼어낸 다음 젖은 수건으로 덮어 주세요. 햄은 0.3*4cm 길이로 채썰고 샐러리와 피망도 같은 길이로 채썰어 주세요. 숙주는 물에 헹궈 물기를 빼주시고 춘권피는 하나씩 떼어서 젖은 수건으로 덮어 놓아야 마르지 않아서 재료를 올려 말아줄 때 찢어지지 않아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b366d8ec599f415542c57d422d4932d21.jpg',
        recipeId: 164,
    },
    {
        mNum: 1144,
        mContent:
            '팬에 식용유 1큰술을 두른 다음 햄과 숙주를 넣어 볶다가 샐러리, 피망을 넣어서 함께 볶아 주세요. 여기에 소금, 후춧가루를 넣어 간을 맞춰 주세요. 햄과 숙주를 볶다가 숙주의 숨이 죽으면 샐러리와 피망을 넣어주세요! 샐러리와 피망은 살짝만 볶아 주셔야 아삭거리고 향기도 살아난답니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/16f3e613862b757d3eee8763a44ed7721.jpg',
        recipeId: 164,
    },
    {
        mNum: 1145,
        mContent: '춘권피에 볶은 재료를 적당량 올려서 돌돌 말고 170도씨의 식용유에 노릇하게 튀겨서 접시에 담아주시면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4ea679d62b409dce8401f30ce21515071.jpg',
        recipeId: 164,
    },
    {
        mNum: 1146,
        mContent: '감자 2개는 얇게 채썰고 감자 6개는 믹서기에 갈아준 후 체에 밭쳐 물기를 뺀다. 체 , 믹서기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/86cf52190cc41278066eff37d46a13c91.png',
        recipeId: 165,
    },
    {
        mNum: 1147,
        mContent: '물은 버리고 남은 하얀색 전분과 채썬 감자를 갈은 감자에 넣어 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/59fedfcb2da29dd79aeec04c7fa46e9a1.png',
        recipeId: 165,
    },
    {
        mNum: 1148,
        mContent: '튀김가루, 전분가루, 소금을 넣어 반죽을 만든다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5f45793fd7e23304fef83ef53b974c881.png',
        recipeId: 165,
    },
    {
        mNum: 1149,
        mContent:
            '팬에 식용유를 두르고 종이컵 가장자리에 반죽을 부은 후 노릇하게 부쳐 완성한다. 팬 - 전을 부칠 때 기름을 뜨겁게 달궈 사용하면 전이 기름을 많이 먹지 않으면서도 바삭하게 부칠 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8158191f8ca6cc8cb4de3a9458a19aaa1.png',
        recipeId: 165,
    },
    {
        mNum: 1150,
        mContent: '손질한 꽃게는 맛술을 넣고 버무려둔다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2f07643ffc62a624c83e7821c23d43811.png',
        recipeId: 166,
    },
    {
        mNum: 1151,
        mContent: '양파는 채썰고, 청양고추와 대파는 송송 썬다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7769717c0a3fc7ffaabc54441732e8881.png',
        recipeId: 166,
    },
    {
        mNum: 1152,
        mContent: '양념재료는 버무려 5분간 두고 고춧가루를 불린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7937041bce5b6934f1cbd8fe1be7f9081.png',
        recipeId: 166,
    },
    {
        mNum: 1153,
        mContent: '꽃게에 양념재료, 썰어 놓은 채소를 넣고 버무려 완성한다. - 냉장고에 하루 보관 후 먹으면 더욱 맛있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/59f86a9cefc18838816fedb67665c73c1.png',
        recipeId: 166,
    },
    {
        mNum: 1154,
        mContent: '고기먹고 남은 쌈채소',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b6731ab386e39ecff21f4baa0ca5c03d1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1155,
        mContent: '냉동고 남아있는 부채살한팩',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a0c283e98ac8e167198001cd6c504dc21.jpg',
        recipeId: 167,
    },
    {
        mNum: 1156,
        mContent: '우선 채소를 잘라 양푼에 넣어주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8466c5821a5c73466e5699b593cc78381.jpg',
        recipeId: 167,
    },
    {
        mNum: 1157,
        mContent: '고기는 팩을 물에담궈 해동후 팩을뜯어 팬에넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/1abc111e5ec571ffab1005993c2eb32b1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1158,
        mContent: '대파.버섯.양파등 냉장고 남은 채소넣어주고 볶습니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4adfaa45ee0d7f2405d2aad0a76a5edc1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1159,
        mContent: '양념이 안된고기면 간장.맛술.올리고당.다진마늘한수저씩 넣고 센불로 볶습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0f8b938a2742ec14927615cae8bb488d1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1160,
        mContent: '고기가 익으면 잘게 잘라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/fad93656a7b432dcf509adcc0ea97db81.jpg',
        recipeId: 167,
    },
    {
        mNum: 1161,
        mContent: '오이도 남아있어 볼에 썰어넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b4af188187d3935ed57023644cd7831b1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1162,
        mContent: '고기도 담습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/893ca80bddd2436ea69985aa8ef026291.jpg',
        recipeId: 167,
    },
    {
        mNum: 1163,
        mContent: '달걀은 흰자.노른자분리해서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7ec61d64bba95675394309ffb05c17ac1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1164,
        mContent: '노른자는 볼에 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/08144a4370cf4c31249017de966c62581.jpg',
        recipeId: 167,
    },
    {
        mNum: 1165,
        mContent: '흰자는 풀어서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/10def82a080a0fd05bdda9c171d974e31.jpg',
        recipeId: 167,
    },
    {
        mNum: 1166,
        mContent: '팬에 오일두르고 부어 굽습니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/21a593e1e1e0d65189be073cb4e3422d1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1167,
        mContent: '흰지단을 채썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c7760a779b0c7d60c3801c93de1158da1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1168,
        mContent: '지단까지 볼에넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5bdc7762009e000c09821e9397f3e5d21.jpg',
        recipeId: 167,
    },
    {
        mNum: 1169,
        mContent: '고추장1.5t.참기름1t.올리고당1t.통깨넣어서 양념장을 만듭니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/855f5ff4187e757c65212918bc72d30c1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1170,
        mContent: '양념장을 양푼에 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e2e760ee2aaed2bfe4e4a3d2ce9d136e1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1171,
        mContent: '밥을 넣고 비비는데 양념장넣어도 싱거우심 고기볶았던 국물을 넣어줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e98ebe2e1d2a64cce5b3a4254881cf3f1.jpg',
        recipeId: 167,
    },
    {
        mNum: 1172,
        mContent: '파르팔레면과 파스타소스준비하세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/449725de5759b28c3b49aa1e49c131161.jpg',
        recipeId: 168,
    },
    {
        mNum: 1173,
        mContent: '통마늘을 슬라이스 썰고 버섯 잘게썰어 두고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2864fd0bb864efad80b9daae6b5ec3091.jpg',
        recipeId: 168,
    },
    {
        mNum: 1174,
        mContent: '냄비에 소금한수저넣고 물을 끓입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5d38e680ff3ae73ed94ec1b12ef59dd91.jpg',
        recipeId: 168,
    },
    {
        mNum: 1175,
        mContent: '파르팔레면을 삶아12분정도후 체에받쳐 줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/516fb934a8e28091eb126cea2ba0de531.jpg',
        recipeId: 168,
    },
    {
        mNum: 1176,
        mContent: '팬에 오일두르고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/32f215c8c06be4bb7a85ea2b5da7547b1.jpg',
        recipeId: 168,
    },
    {
        mNum: 1177,
        mContent: '마늘먼저넣고 볶다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/49f542db88811c04c38f666ee3d081e71.jpg',
        recipeId: 168,
    },
    {
        mNum: 1178,
        mContent: '버섯넣고 볶은 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3403955b580b8633df4be78f71dd54c81.jpg',
        recipeId: 168,
    },
    {
        mNum: 1179,
        mContent: '시판용 토마토소스를',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c73921e7881953e6cbe486f002d6b4a11.jpg',
        recipeId: 168,
    },
    {
        mNum: 1180,
        mContent: '면에 두배로 넣어줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a3b15f1da390632d4ebc170dc535a5ca1.jpg',
        recipeId: 168,
    },
    {
        mNum: 1181,
        mContent: '미트볼이 있어 해동해서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8d4a7493f1d552207a5447f06f0c1c4c1.jpg',
        recipeId: 168,
    },
    {
        mNum: 1182,
        mContent: '같이 넣어서 볶아주었어요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d067d5a77ad16ff3a72fabe61f146f911.jpg',
        recipeId: 168,
    },
    {
        mNum: 1183,
        mContent: '접시에 담아서 샐러드와 곁들이니 좋더군요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/aea53d251483201ddbaf688de25cf6a71.jpg',
        recipeId: 168,
    },
    {
        mNum: 1184,
        mContent: '오이는 얇게 썰어서 준비해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c20c2eb01baa2a2bcc3ef9778a3899f41.jpg',
        recipeId: 169,
    },
    {
        mNum: 1185,
        mContent: '납작한 그릇(쟁반)에 빵가루를 가득 부어주세요 그리고 중심을 약간 오목하게 파줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8a27f664dcd9d982d6c4fce3807df0f01.jpg',
        recipeId: 169,
    },
    {
        mNum: 1186,
        mContent:
            '오목하게 판 빵가루위에 달걀을 깨서 넣어주세요 그리고 다시 한 번 빵가루를 덮어줍니다 그리고 조심히 들어주세요 달걀이 노른자가 정말 쉽게 터지고 흰자는 잘흘러내리기 때문에 빵가루로 최대한 감싼후 최대한 같이 들어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/422be99865b850524b331d501ea3aefc1.jpg',
        recipeId: 169,
    },
    {
        mNum: 1187,
        mContent:
            '빵가루옷을 입은 달걀을 조심히 들고 미리 예열해둔 식용유에 넣고 갈색빛이 돌때까지만 튀겨주세요 튀기실때는 무조건 식용유 가득하셔서 한꺼번에 튀겨질수 있도록 해주세요! 빵가루옷을 입은 달걀을 망설이지말고 기름에 넣어주셔야합니다! 달걀이 정말 쉽게 터지기 때문에 빵가루 가득과 함께 바로 넣어주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e7d2a55de97c99537fcc7006bbd4d11c1.jpg',
        recipeId: 169,
    },
    {
        mNum: 1188,
        mContent: '밑에 오이를 깔고 위에 달걀카츠를 올린 후 원하는 소스를 취향껏 뿌려 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e35fe2f658e2421792fbd68815e99c451.jpg',
        recipeId: 169,
    },
    {
        mNum: 1189,
        mContent: '한살림엔 깻단이라고 이름되어있어요. 총 사용한 깻단은 350g입니다. 저 뒤에것이 100g이어요~^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4a0d088bd53ec59783b23181069ac3f41.jpg',
        recipeId: 170,
    },
    {
        mNum: 1190,
        mContent: '깻잎순 깨끗히 씻어주세요. 은근히 흙이 많이 묻어납니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/175a21498820bb68cc8c910ef91c20351.jpg',
        recipeId: 170,
    },
    {
        mNum: 1191,
        mContent: '너무 굵은 줄기는 잘라내주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3c18c29e4d0adba5838d94f6ffbed9d61.jpg',
        recipeId: 170,
    },
    {
        mNum: 1192,
        mContent: '팔팔 끓는물에 소금 1큰술 넣어 깻잎순을 데쳐내줍니다. 여리여리해서...아주 잠깐만 데쳐내주면 되어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/479e82b4baca6d4586898c755705769c1.jpg',
        recipeId: 170,
    },
    {
        mNum: 1193,
        mContent: '찬물샤워~~ 깻잎향이 짙게 올라와요~좋아요좋아~ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a8feed9eb9cb04a7654ac6aaebdb46481.jpg',
        recipeId: 170,
    },
    {
        mNum: 1194,
        mContent: '물기 꼭 짜서 먹기 좋게 잘라준후~~ 시금치 무침같이 너무 꼭~~짜주진 마셔요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2f8c4198cfec36b938aeff477d8da00e1.jpg',
        recipeId: 170,
    },
    {
        mNum: 1195,
        mContent: '멸치육수 준비해주세요. 전..미리 내어준 멸치육수가 있었어요. 없으심 물로 대체!! 오늘의 깻잎순볶음 포인트는 이거예요~ 멸치육수!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f67896c2d54f98209c89b4ea0c2fbd0a1.jpg',
        recipeId: 170,
    },
    {
        mNum: 1196,
        mContent:
            '분량의 양념을 넣어줍니다. 국간장의 짠기에 따라서 양 조절하시구요. 들기름이나 참기름을 넣지 않은건 깻잎순의 향을 그대로 남기기 위해서. 볶을때 기름을 넣을거라서...무칠때 미리 넣어주었어요. 조물조물 무쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a8181a6d5e486f87112b676bb51c4ec61.jpg',
        recipeId: 170,
    },
    {
        mNum: 1197,
        mContent: '불에 올려 볶아 줍니다. 중불에서 은근하게 볶아내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2e836c3edd5bed35cd6c0988b3a341a31.jpg',
        recipeId: 170,
    },
    {
        mNum: 1198,
        mContent:
            '볶으면서 멸치육수 조금씩 넣어가며 볶아줍니다. 총 2큰술 넣었어요. 멸치육수를 넣는 이유는. 깻잎순이 너무 수분이 없이 볶아지면...냉장고에 들어갔다 나왔을때.. 그만큼 맛없는게 없지요. 부드러운 깻잎순 바~짝 말라서 맛없음...속상하잖아요? 멸치육수로 감칠맛도 더해주고..수분가득 깻잎순볶음 됩니다. 촉촉이 깻잎순볶음~~ㅎㅎ 마지막에 통깨 솔솔 뿌려서 끝~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3ad1eec821bc40827f7813cf3defc5cc1.jpg',
        recipeId: 170,
    },
    {
        mNum: 1199,
        mContent: '닭가슴살 하나준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b2e69dc242318aec7a8442c852ec04e71.jpg',
        recipeId: 171,
    },
    {
        mNum: 1200,
        mContent: '당근을 채썰고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/83730e860d904ca1bc891ec95cd3bc1a1.jpg',
        recipeId: 171,
    },
    {
        mNum: 1201,
        mContent: '양상추를 씻어 체에받쳐 물기를 제거해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/aee07b46b3136ef76412e3ce6c942af01.jpg',
        recipeId: 171,
    },
    {
        mNum: 1202,
        mContent: '물기를 완죤히 빼주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/b9d28f1071e3819dc3a6417e27ccb6f31.jpg',
        recipeId: 171,
    },
    {
        mNum: 1203,
        mContent: '오이는 소금으로 씻어 둥글게 썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/445b7de9a17437f103bf8e55983cf7cd1.jpg',
        recipeId: 171,
    },
    {
        mNum: 1204,
        mContent: '콘샐러드가 남아있어 더해줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ed44fb81cd34756c807dbea6a25bbcdd1.jpg',
        recipeId: 171,
    },
    {
        mNum: 1205,
        mContent: '닭가슴살과 계란하나 같이 삶아줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7beb0c84771a0149aa355491cdf53cc21.jpg',
        recipeId: 171,
    },
    {
        mNum: 1206,
        mContent: '발사믹소스에 레몬즙 한수저넣습니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c42ca9b5e7f21952730e37d1570d76501.jpg',
        recipeId: 171,
    },
    {
        mNum: 1207,
        mContent: '삶은 닭가슴살은 팬에 오일두르고 굽습니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/cc6584a248587152f8ce6ce3498af1e21.jpg',
        recipeId: 171,
    },
    {
        mNum: 1208,
        mContent: '뒤집어서 바싹 구워주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d1dc1f38ec066c80b878558cf0f98c531.jpg',
        recipeId: 171,
    },
    {
        mNum: 1209,
        mContent: '달걀은 찬물에 담궈 까줍니다 .13분정도 삶으면 완숙이 됩니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e46471d13bf099a0176f60fadd37d8681.jpg',
        recipeId: 171,
    },
    {
        mNum: 1210,
        mContent: '접시에 채소올리고 닭고기 올리고 소스를 뿌려주세요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/123216e0580936ef71eebb5079a628c61.jpg',
        recipeId: 171,
    },
    {
        mNum: 1211,
        mContent:
            '연어를 손바닥 보다 약간 작은 크기로, 양파(1개)는 링 모양으로 썰어줍니다. 허브솔트(1Ts)와 레몬즙(2Ts)을 이용하여 생선의 비린내를 잡고 생선이 부서지지 않게 밑간을 해줍니다. ** 많이 두꺼운 부분은 한 번 저며서 두께를 일정하게 하면 연어를 골고루 익히실 수 있습니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3cf5df2a914abd5775e3dd42095ae5f21.jpg',
        recipeId: 172,
    },
    {
        mNum: 1212,
        mContent:
            '에어프라이어를 200도에서 3분간 예열한 뒤 타이머가 울리면, 준비한 밑간을 해둔 연어와 양파를 넣습니다. 에어프라이어를 180도로 맞추어 15분간 익혀줍니다. 에어프라이어 ** 양파를 밑에 깔아두면 연어의 기름이 양파에도 스며들어서 양파의 풍미가 더욱 좋아집니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a8a52c55ed53639fbc5f4630dd0c3d551.jpg',
        recipeId: 172,
    },
    {
        mNum: 1213,
        mContent:
            '타이머가 울리면, 연어를 뒤집어서 다시 한번 180도에서 10분간 익혀줍니다. 한 번 뒤집어서 익히셔야 앞뒤 골고루 바삭바삭한 연어를 즐기실 수 있습니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9facdd59c82bec74cb55a15025cb102f1.jpg',
        recipeId: 172,
    },
    {
        mNum: 1214,
        mContent:
            '타이머가 울려서 꺼내면! 드디어 집에서도 간단히, 생선 비린내 없이 즐길 수 있는 연어스테이크가 완성됩니다~ 취향에 따라 유자 등 다양한 소스를 곁들여 드시면 좋습니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a41067ecb1a667a88dd17d361e6861c81.jpg',
        recipeId: 172,
    },
    {
        mNum: 1215,
        mContent: '친환경 설성한우와 피터루거 스테이크소스로 만든 찹스테이크',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/64af8fc6880fddc60d1127fc029cd1f01.png',
        recipeId: 173,
    },
    {
        mNum: 1216,
        mContent: '재료를 모두 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6c696cff626b6469ac1684e5ccb531e31.png',
        recipeId: 173,
    },
    {
        mNum: 1217,
        mContent: '등심은 한 입 크기로 잘라 허브솔트, 후추, 올리브유를 넣어 버무리고, 양파, 피망, 파프리카, 양송이는 한 입 크기로 썰어 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/48dde29841d723852576bed68cfcc3c61.png',
        recipeId: 173,
    },
    {
        mNum: 1218,
        mContent: '예열된 팬에 버터를 넣고 준비한 등심을 넣어 노릇하게 굽는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d3ebcce05cda6070b3a9726ad4c1f8551.png',
        recipeId: 173,
    },
    {
        mNum: 1219,
        mContent: '고기 표면이 노릇하게 익으면 다진 마늘, 다진 양파, 썰어놓은 채소를 넣어 가볍게 볶는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/dd3aa26633a810ebd58f5f90a3b14e261.png',
        recipeId: 173,
    },
    {
        mNum: 1220,
        mContent: '양파가 살짝 투명해 지면 스테이크 소스, 올리고당을 넣어 졸여 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f78446ed51312e97e9937dc6a8fb000e1.png',
        recipeId: 173,
    },
    {
        mNum: 1221,
        mContent: '홈파티, 손님접대용으로도 손색이 없는 찹스테이크 완성!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c5d7e23eadb1f1d6c6b644056d135ba81.png',
        recipeId: 173,
    },
    {
        mNum: 1222,
        mContent: '영롱한 빛깔, 풍부한 육즙이 살아있는 한우 등심 찹스테이크를 맛있게 촵촵~^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/42b94a710b356e0873a518ff1ab25b341.png',
        recipeId: 173,
    },
    {
        mNum: 1223,
        mContent:
            '적당한 크기로 자른 두부는 키친 페이퍼로 수분을 제거해 달군 팬에 한번 튀기듯 구워줍니다 그냥 조리는 거보다 훨씬 식감도 좋고 고소함이 느껴져 맛있는 두부조림이 만들어지는듯해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/64dfbb88559921164080741b19d0f1a51.jpg',
        recipeId: 174,
    },
    {
        mNum: 1224,
        mContent:
            '앞뒤로 노릇노릇~~ 이대로 양념장을 올려주어도 맛있지만 남편이 좋아하는 조림... 시간이 조금 더 걸리지만 그만큼 맛있는 두부요리이기도 해요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0deb576298357653c54fe540b56c09f91.jpg',
        recipeId: 174,
    },
    {
        mNum: 1225,
        mContent:
            '남은 기름은 제거해주고 분량의 양념과 양파를 올려 쌀뜨물을 1컵 정도 자작하게 부어 조려주기 시작해요 끓기 시작하면 중약 불로 줄여 좋아하는 만큼 조려주심 되는 거죠 양념은 따로 만들어도 좋고요 매콤한걸 좋아하는 식구들 입맛에 고춧가루는 넉넉하게~ 위아래 국물을 얹어가며 간이 잘 배이게 졸여지면 백종원 두부조림 완성이에요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a690bcdeb79fa13c12751f6e41503a681.jpg',
        recipeId: 174,
    },
    {
        mNum: 1226,
        mContent:
            '남편도 오랜만이라며 맛있게 드셔주시니 뿌듯 참치를 넣어 주어도 좋고요 마침 파가 다 떨어져 부추를 다져 올려주었더니 먹음직~ 보기에도 밥 한 그릇은 뚝딱 비워버릴 두부조림 비주얼... bb..!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/1601bc4c1bc8d098fac2c0c38017d90e1.jpg',
        recipeId: 174,
    },
    {
        mNum: 1227,
        mContent:
            '다음날 국물이 조금 자작하게 만들어서 올렸더니 꿀맛이었어요 남편은 다 맛있다는데 저는 어제 먹었던 두부조림이 자꾸 생각나더라는~ 국민반찬 두부조림 실패 없는 백종원 레시피로 맛있게 만들어드세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2678b9867e0881be86c361cc085210bf1.jpg',
        recipeId: 174,
    },
    {
        mNum: 1228,
        mContent: '재료를 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7b327034e213dab513178819e97e69781.jpg',
        recipeId: 175,
    },
    {
        mNum: 1229,
        mContent: '마트에서 산 닭은 흐르는 물에 깨끗하게 씻어서 준비해 주세요. 닭갈비 부분 내장은 더욱 꼼꼼하게 씻어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c69b3c43cf955bd661f4da95dc516fe41.jpg',
        recipeId: 175,
    },
    {
        mNum: 1230,
        mContent: '감자, 당근, 양파는 큼직하게 썰어서 준비하시고 고추는 어슷 썰어서 준비해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7c6f7b467307aaa1a4022d33732f4d4c1.jpg',
        recipeId: 175,
    },
    {
        mNum: 1231,
        mContent: '닭은 청주를 넣고 5분 정도 데쳐 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/28116f618f0f30848d60484e9a3e6c931.jpg',
        recipeId: 175,
    },
    {
        mNum: 1232,
        mContent:
            '양념장 재료를 넣고 양념장을 미리 만들어 준비해주세요. 고춧가루가 들어간 양념장을 미리 만들어 두면 고춧가루의 풋내가 나지 않아 더욱 맛있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/70befc447c8da54ecd980cd1674aa3061.jpg',
        recipeId: 175,
    },
    {
        mNum: 1233,
        mContent:
            '데쳐둔 닭과 큼직하게 썰어둔 감자와 당근을 넣고 물을 1리터 정도 붓고 양념장과 함께 끓여주세요. 센불에서 끓이다 물이 끓으면 중불로 불을 낮춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7a0ff754e789ddf83204a7bd56ba12711.jpg',
        recipeId: 175,
    },
    {
        mNum: 1234,
        mContent: '감자가 다 익을 때쯤 마무리로 양파와 청양고추를 넣고 5분 정도 더 끓여 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/95e39ec3552f2b88a43048ca1ff25a511.jpg',
        recipeId: 175,
    },
    {
        mNum: 1235,
        mContent:
            '리프 애플 앤 커스터드 페이스트리 생지를 팬 위에 일정 간격을 두고 놓아주세요. 리프 애플 앤 커스터드 페이스트리 생지는 해동 및 발효가 필요하지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9136890019ec657799f55d2bbdfe0efa1.jpg',
        recipeId: 176,
    },
    {
        mNum: 1236,
        mContent: '175℃로 10분 예열된 오븐에서 18~20분 구워주세요. 오븐 예쁜 빵 색을 내고싶다면 노른자물(노른자:물=1:1)을 발라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8a9a748f56a3b9ae29c4243db190376a1.jpg',
        recipeId: 176,
    },
    {
        mNum: 1237,
        mContent: '구워진 리프 애플 앤 커스터드 페이스트리는 식힘망 위에 올려 한김 식힌 후 맛있게 드세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4b9ad48f374c291f449903da6a8051e21.jpg',
        recipeId: 176,
    },
    {
        mNum: 1238,
        mContent: '소고기는 홍두께살로 준비해 물에 담궈 핏물을 제거해 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/03a148c36a3e7280859b72720f3d1eef1.jpg',
        recipeId: 177,
    },
    {
        mNum: 1239,
        mContent: '물을 넉넉히 넣고 팔팔 끓을때 핏물 제거한 소고기를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/5cd06fca9da803ba78fbafc9c555e6d91.jpg',
        recipeId: 177,
    },
    {
        mNum: 1240,
        mContent:
            '소고기 누린내를 잡아줄 통후추 생강 양파 대파 넣고 뚜껑을 열어 잡냄새를 잡아가며 끓여줍니다 간장을 미리 넣으면 질겨지니 고기는 먼저 삶고 간장은 나중에 넣어서 조려 주는게 비법~!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/6bf3edb6a5d3dc50745ec5e1ce61c0f91.jpg',
        recipeId: 177,
    },
    {
        mNum: 1241,
        mContent: '고기 삶은 육수는 채반에 걸러 버리지 말고 육수로 받아',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/40bb90c144275dc7775e05792e3140701.jpg',
        recipeId: 177,
    },
    {
        mNum: 1242,
        mContent: '간장 맛술 올리고당 설탕을 넣고 끓이다 소고기가 알맞게 익으면 결방향으로 먹기 좋은 크기로 찢어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/1fc0292d953b0b93bd4cc591d9b40b231.jpg',
        recipeId: 177,
    },
    {
        mNum: 1243,
        mContent: '삶은 계란을 넣고 계란에 양념이 적당히 베이면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/c6b0e1c69cff1021ca1baae2d4b379471.jpg',
        recipeId: 177,
    },
    {
        mNum: 1244,
        mContent: '통마늘 넣어 같이 조려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/9adf1b591bbaa53fe7323384cb56c41b1.jpg',
        recipeId: 177,
    },
    {
        mNum: 1245,
        mContent: '국물이 반정도 남았을때 간을 보고 국물 넉넉하게 조려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/30/cc1c1436cc6f9072e4350a2a9c8b99d51.jpg',
        recipeId: 177,
    },
    {
        mNum: 1246,
        mContent: '질기지않고 국물이 자박자박한 소고기 장조림 맛있게 하는법',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/be4f8737f335058e113a93c9d4b36f671.jpg',
        recipeId: 177,
    },
    {
        mNum: 1247,
        mContent: '쪽파는 깨끗하게 손질한 물기빼주신후 반으로 잘라주세요 (흰부분 크면 십자로 내주시구여) 쪽파 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c9b2e5429a58df38059d69de51e60fdb1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1248,
        mContent: '부침가루 한컵넣고 잘 풀어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/876a22b97bd662c04b73413f4d492cdf1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1249,
        mContent: '①번 쪽파를 넣고 살짝 부쳐주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c8eb945293d7d43b2d3afd6028a3194d1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1250,
        mContent: '가열한 팬에 쪽파를 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/bd727a712d04e156d5935521b936d2b71.jpg',
        recipeId: 178,
    },
    {
        mNum: 1251,
        mContent: '주의에 살짝살짝 반죽을 뿌려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3f6453c34d26ca5db25d35fa9546f25f1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1252,
        mContent: '손으로 꾹꾹 눌러주신후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e460d7db7ef261f9f20476c54c07e4bd1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1253,
        mContent: '반죽이 남은것에 오징어를 버무려주세요 (오징어 손질후 아주살짝 데체주세요) 오징어 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/656b3d65a6f5ceaf9482c1614ab8d4c61.jpg',
        recipeId: 178,
    },
    {
        mNum: 1254,
        mContent: '⑥에 오징어를 올린후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/62ce255b4ab5d8173c79162db8615c641.jpg',
        recipeId: 178,
    },
    {
        mNum: 1255,
        mContent: '계란물을 풀어 올려주세요 어느정도 되면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/51baa15b71f1dbec337cc16c71cfd2d41.jpg',
        recipeId: 178,
    },
    {
        mNum: 1256,
        mContent: '뒤집은후 잘 구워주시면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/559478b4e5cdfe42d18a6723eb1422091.jpg',
        recipeId: 178,
    },
    {
        mNum: 1257,
        mContent: '오징어파전 완성^^ 양념장소스 간장 식초 깨소금',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/11e9aad0bbe648ac5d245c0d430c09cd1.jpg',
        recipeId: 178,
    },
    {
        mNum: 1258,
        mContent: '미나리가 잠길만큼의 물을 냄비에 받아 소금 1큰술을 넣고 먼저 팔팔 끓여주세요. 소금을 넣어주면 푸른빛이 더 선명해져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5f42bed39343a39dd51946e3208479201.jpg',
        recipeId: 179,
    },
    {
        mNum: 1259,
        mContent:
            '미나리는 각자 취량에 따라 손질해주면 되는데요 저는 깔끔하게 먹기 위해 이런 잔 잎들을 모두 제거해주고 줄기만 이용하는 편이에요. 물론 이대로 데쳐 무쳐먹어도 상관 없답니다. 미나리 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/772f5e2b89854dcf1a769dc1a343f7091.jpg',
        recipeId: 179,
    },
    {
        mNum: 1260,
        mContent: '손질이 끝나면 흐르는 물에 깨끗하게 헹궈내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ec98cca4d0f1a2cd88aab742020ae6931.jpg',
        recipeId: 179,
    },
    {
        mNum: 1261,
        mContent: '먹기좋은 크기로 4-5cm정도로 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a76242fb6a7502e718fba8664328dacf1.jpg',
        recipeId: 179,
    },
    {
        mNum: 1262,
        mContent:
            '물이 팔팔 끓으면 손질한 미나리를 모두 넣고 약 10초에서 20초 사이로 살짝 데쳐주세요. 미나리무침 만드는 법 포인트 중 한가지는 데치는 시간으로 너무 오래 데치면 질겨지니 짧게 데쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/233ea504d25a39dabfbfb222e2f2845f1.jpg',
        recipeId: 179,
    },
    {
        mNum: 1263,
        mContent: '짧게 데친 미나리는 찬물에 샤워해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f596645bd2f42496777469d29e482fea1.jpg',
        recipeId: 179,
    },
    {
        mNum: 1264,
        mContent: '물기를 아주 꼬옥 제거해주세요. 물기를 잘 제거해야 간을 한 후에 싱거워지지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/56105fd73b87f71024471f63c4f3ca2a1.jpg',
        recipeId: 179,
    },
    {
        mNum: 1265,
        mContent:
            '미나리 본연의 맛을 사라지지 않게 하기 위해 간은 최소한으로 해주는데요 소금 1/2작은술 그리고 참기름 1작은술 다진마늘 1/2작은술과 통깨 1작은술 솔솔 뿌려 조물조물 무쳐주세요. 소금이 한곳에 뭉치지 않도록 잘 무쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6d75363bf30394f788cccd12511990d21.jpg',
        recipeId: 179,
    },
    {
        mNum: 1266,
        mContent:
            '먼저 오이 세척하기 겉에 오돌오도한 부분을 제거하기 위해 굵은소금으로 문질러서 닦아 줍니다 저는 과일세척제에 부추랑 오이 담구어서 세척 했답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/792e72b9785b4bbc2c8ae9d5de2c91981.jpg',
        recipeId: 180,
    },
    {
        mNum: 1267,
        mContent: '양배추 1/2통 백오이 6개 부추 약간 준비 했답니다 부추가 없다면 안 넣으셔도 되구요 대파를 약간 더해도 괜찮습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/344c1f7598ebed976371dddf87aa18191.jpg',
        recipeId: 180,
    },
    {
        mNum: 1268,
        mContent:
            '양배추는 깍둑 모양으로 썰어 주시는데요 자를때 먼저 심을 제거하고 속을 따로 분리해 주신다음 3-4센티로 깍뚝썰기를 해 주셔야 길이가 맞더라구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/63bd7a61e3bea9d28244962ce81381561.jpg',
        recipeId: 180,
    },
    {
        mNum: 1269,
        mContent:
            '먼저 볼에 물 4컵 굵은 소금 2/3컵을 넣고 휘핑기로 저어서 소금은 완전히 녹인 다음 썰은 양배추를 넣어 주고 실온에서 1시간 정도 절여 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/439149a61615caf64131e7faaeac88951.jpg',
        recipeId: 180,
    },
    {
        mNum: 1270,
        mContent:
            '양배추 절이는 동안 백오이 손질하기 소금으로 씻은 오이는 꼭지를 제거하고 길게 4등분 하고 도마위에 올리 놓은 다음 다시 4등분해서 잘라 줍니다 오이 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/42421f9a595fc0839ce3817e8256a9861.jpg',
        recipeId: 180,
    },
    {
        mNum: 1271,
        mContent: '볼에 썰은 오이를 담고 굵은 소금 2큰술 넣고 고루 잘 버무려 줍니다 그런 다음 15분 정도 절입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ee25ae1320d4b49f48999b25a5d161241.jpg',
        recipeId: 180,
    },
    {
        mNum: 1272,
        mContent: '부추도 오이와 비슷하게 썰어서 준비 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/dbf33b8b096e6ed9ea27b1b65b46b0251.jpg',
        recipeId: 180,
    },
    {
        mNum: 1273,
        mContent: '양배추의 경우 중간에 한번 뒤집어 주고 무거운 그릇을 이용해서 눌러서 절여 주심 고루 간이 배여요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d0476f6da3149da5a7e2627dffe645b71.jpg',
        recipeId: 180,
    },
    {
        mNum: 1274,
        mContent: '1시간 정도 절인 양배추는 물에 헹구어 짠기를 빼 준 다음 체에 받혀 물기를 제거해 줍니다 손으로 꼭 꼭 눌러 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a89afcf1cc3f053982a89a6e5ae3b96f1.jpg',
        recipeId: 180,
    },
    {
        mNum: 1275,
        mContent: '오이는 적당히 잘 절구어져서 따로 물에 헹구지 않고 그대로 체에 받혀서 물기를 제거 했답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a63d910ffde6d2e7a34079b6de7f096e1.jpg',
        recipeId: 180,
    },
    {
        mNum: 1276,
        mContent: '본격적으로 오이양배추김치 버무려 볼께요 볼에 물기를 쪼옥 뺀 절인 양배추와 오이를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d489d814a85924a686b9b141cab180761.jpg',
        recipeId: 180,
    },
    {
        mNum: 1277,
        mContent: '먼저 굵은 고춧가루 1/2컵을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/42e51e07b096681316dda07d37c130721.jpg',
        recipeId: 180,
    },
    {
        mNum: 1278,
        mContent: '고루 잘 버무려 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/be99c3288275b3b427df38244320d83d1.jpg',
        recipeId: 180,
    },
    {
        mNum: 1279,
        mContent: '먼저 고춧가루를 넣어서 색을 입힌 다음에 간을 맞추어 주세요 고루 잘 버무려서 어느정도 원하는 색이 나오면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d177ae79b9c470909619dc12e1ef4ffc1.jpg',
        recipeId: 180,
    },
    {
        mNum: 1280,
        mContent: '다진마늘 3큰술 다진생강 1작은술 새우젓2큰술 넣어 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b642225502ea2e27f7d478144d4941441.jpg',
        recipeId: 180,
    },
    {
        mNum: 1281,
        mContent: '고루 잘 버무려 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a809ea654eda749e110547bd88d282471.jpg',
        recipeId: 180,
    },
    {
        mNum: 1282,
        mContent:
            '설탕 2-3큰술 넣어 줍니다 설탕 2큰술 정도 넣어 보고 간을 보신다음에 추가해 주세요 구입 하신 오이나 양배추의 당도가 조금씩은 다르니 그때 그때 마다 맞추어 주심 됩니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c7965ee28cf78dbc08d8828dd3c6c86a1.jpg',
        recipeId: 180,
    },
    {
        mNum: 1283,
        mContent: '마지막 부추를 넣어 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/52062f50e73ef51da19fa617668044f51.jpg',
        recipeId: 180,
    },
    {
        mNum: 1284,
        mContent: '고루 잘 버무려 주면 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b07fd09ff0890af3d7fdc0dffe7d63231.jpg',
        recipeId: 180,
    },
    {
        mNum: 1285,
        mContent: '부추는 너무 많이 버무리면 풋내가 나기 때문에 마지막에 넣어서 섞어 주시기만 하면 됩니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3c02eec9bb12408589f10807c42d77d81.jpg',
        recipeId: 180,
    },
    {
        mNum: 1286,
        mContent: '알맞은 크기로 썰어주세요. 한입크기로 원하는 모양으로 해주시면 되요 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/01a16f63cc7faa903757b275240e723a1.jpg',
        recipeId: 181,
    },
    {
        mNum: 1287,
        mContent: '찬물에 10분이상 담궈 전분기를 빼주세요. 채반에 걸쳐 물기를 빼주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9de75b9a7ff2a8f02a471681d0284b901.jpg',
        recipeId: 181,
    },
    {
        mNum: 1288,
        mContent: '넉넉한 기름에 열이오르면 고구마를 굽듯이 튀겨주세요~ tip 완전 쎈불보단 약불이나 중불로 서서히 익혀주는게 겉이 더 바삭바삭해요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/47e42f58edaf301046d94a0b661feb501.jpg',
        recipeId: 181,
    },
    {
        mNum: 1289,
        mContent: '튀겨진 고구마를 키친타올에 기름을 빼주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ca41a9f0dd45085d2ee0c245f12811c01.jpg',
        recipeId: 181,
    },
    {
        mNum: 1290,
        mContent: '물3 설탕3 올리고당2 절대 섞지말고 약불로 끓여',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3633f66f60760cf8990ce428d372719d1.jpg',
        recipeId: 181,
    },
    {
        mNum: 1291,
        mContent: '보글보글 끓고 색이 변하기 시작하면 고구마를 넣어 골고루 달달한소스를 입혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/14e22b33d8eeeae5611ab75d36eaa7071.jpg',
        recipeId: 181,
    },
    {
        mNum: 1292,
        mContent: '깨도 솔솔 뿌려 ~ 완성된 고구마맛탕 ~ 달달하니 ~ 맛있는 맛탕 이대로만하면 실패없이 만들 수 있답니다 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/364ab86949ace4b656f594d0573f4b681.jpg',
        recipeId: 181,
    },
    {
        mNum: 1293,
        mContent: '깻잎은 무침이랑 깻잎장아찌를 하기위해 저는 10봉 준비했어요. 그중 5봉만 해줄꺼랍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4364dac37381d9bc6bfe15410a0b4d411.jpg',
        recipeId: 182,
    },
    {
        mNum: 1294,
        mContent: '채소는 양파와 당근 그리고 깻잎무침양념장 준비하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/286ccf498486a4168b14df4d5964fa4b1.jpg',
        recipeId: 182,
    },
    {
        mNum: 1295,
        mContent: '먼저 깻잎에 농약제거제에 담궈서 깨끗이 씻은후에 물기 쏙빼기~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/608126830f25de25bc10f67447c3e25e1.jpg',
        recipeId: 182,
    },
    {
        mNum: 1296,
        mContent: '깻잎꼭지 부분은 모두 자르면 한장씩 떼어내기 힘들어서 가위로 0.5cm정도 남긴후에 싹뚝!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f95c096e7021d622de9fa3cdf6754a221.jpg',
        recipeId: 182,
    },
    {
        mNum: 1297,
        mContent: '간장100ml+설탕50ml(비정제설탕)l+통깨한큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/35fdf25100755bb5cf55f9cc7bab94761.jpg',
        recipeId: 182,
    },
    {
        mNum: 1298,
        mContent: '다진마늘1큰술+고춧가루1큰술+다시육수100ml',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c98871457aebcb855899b3c4d36b94df1.jpg',
        recipeId: 182,
    },
    {
        mNum: 1299,
        mContent:
            '매운걸 좋아하시면 청량고추 하나 또는 고춧가루 1큰술 더 넣어주시면 좋아요. 전 아이들도 먹일꺼라서 고춧가루는 1큰술! 양파와 당근은 채썰구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f83caf557d71ee601981dafcb8e5f5e81.jpg',
        recipeId: 182,
    },
    {
        mNum: 1300,
        mContent: '양념장은 설탕이 섞일때까지 섞어주면 되어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/89e2c4e0fd90928a621fa557f17aaca51.jpg',
        recipeId: 182,
    },
    {
        mNum: 1301,
        mContent:
            '살짝 맛본후에 개인차에 따라 간장이나 설탕 가감하시면 되구요. 젓갈향을 좋아하시면 요기에 액젓을 한큰술 넣고 간장을 조금 줄이셔도 감칠맛이나서 또다른 맛이 완성이되어요. 깻잎무침은 재료 준비는 간단한데 은근 정성이 쏟는 과정이 있죠.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a95a96f35114ee0e6ba43aecce82400c1.jpg',
        recipeId: 182,
    },
    {
        mNum: 1302,
        mContent:
            '한겹한겹 양념장을 켜켜이 바르는게 좋은데요. 친정은 양념장 만들어서 친정엄마가 아버지께 토스~~하시더라구요. ㅋㅋ 저는 어여 아들에게 토스할날을 바라며 제가 정성껏 하나하나 묻혀봅니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1dc49594f3c0afeeb181ef1c44e3ab8a1.jpg',
        recipeId: 182,
    },
    {
        mNum: 1303,
        mContent:
            '생깻잎이 향긋해서 저는 좋아하는 편인데 깻잎향을 싫어하시는 분들 계시더라구요. 그러시면 깻잎을 살짝 데쳐서 묻히시면 되어요. 단,데친깻잎은 한장한장 펴야해서 조금 힘들긴해도 또 생깻잎으로 무친거랑 맛이 달라서 좋더라구요. 양념장은 같으니까 반반하셔도 좋구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8402f3f1b71e5c1c1809083c54132fe31.jpg',
        recipeId: 182,
    },
    {
        mNum: 1304,
        mContent: '믹서기에 갈아도 되지만 저는 곱게 다져주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/130dd8aceb42a55a46015c665e25e11d1.jpg',
        recipeId: 183,
    },
    {
        mNum: 1305,
        mContent: '불린쌀을 믹서기에 갈아서 물150ml와 다진 양배추를 함께 넣고 끓여주기!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8ef99b987df95505aa47ecd60c37b9811.jpg',
        recipeId: 183,
    },
    {
        mNum: 1306,
        mContent: '처음에 강불로 해서 끓어오르면 약불로 낮춘후에 5분정도 끓여주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4238e5140c47e1898af7ac2368ffba291.jpg',
        recipeId: 183,
    },
    {
        mNum: 1307,
        mContent: '불의 세기에 따라 수분증발이 다르니 농도에 따라 물은 가감해주셔도 되어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7cc709725087ff6bcfcc0f47fedddb1d1.jpg',
        recipeId: 183,
    },
    {
        mNum: 1308,
        mContent: '쌀의 갈림정도에 따라 초기 이유식도 조그 나뉘는데요. 쌀을 불려서 할 경우에는 곱게 갈아서 체에 내리면 완전 초기에!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/49dc2fe916fd56eafd4aeff7c419e2ca1.jpg',
        recipeId: 183,
    },
    {
        mNum: 1309,
        mContent:
            '요렇게 되직하면 초기에서 중기로 넘어가는 시기로 보시면 되어요. 요즘은 쌀가루로도 많이 하시더라구요. 그럼 체에 내리지 않아도 되구요. 대신 채소는 믹서기에 갈아 곱게 만드시는게 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1775f3117e7504b1ec328f690d9153251.jpg',
        recipeId: 183,
    },
    {
        mNum: 1310,
        mContent: '저는 체에 내렸더니 10배미음정도로 묽게 완성이 되었답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bb7c880d3f83f31c263cd5fba2d849921.jpg',
        recipeId: 183,
    },
    {
        mNum: 1311,
        mContent: '저도 쌀을 갈아서도 해보고 쌀가루도 써보았는데 쌀가루보다는 체에 내리니 더 곱고 묽게 되더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ef3ab4d46f8d290cd722a191b3c29f1f1.jpg',
        recipeId: 183,
    },
    {
        mNum: 1312,
        mContent: '당면을 물에 불린다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/9bc83fb80df240f1eafcca35576241e01.jpg',
        recipeId: 184,
    },
    {
        mNum: 1313,
        mContent: '재료를 썰어서준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/0c6fbe774ef35ea5150b30be6dd1bee91.jpg',
        recipeId: 184,
    },
    {
        mNum: 1314,
        mContent: '불린당면은 4등분해서 자른다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/7a3ed89b08a22fc1e0c6b38bbc47467b1.jpg',
        recipeId: 184,
    },
    {
        mNum: 1315,
        mContent: '물에 식용유와소금을 넣고 11분 삶는다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/ac0a92a45ad1bda1f73ff80bac5f39941.jpg',
        recipeId: 184,
    },
    {
        mNum: 1316,
        mContent: '야채를 볶아준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/c3f65b876fae48c11843fdeb14f27d501.jpg',
        recipeId: 184,
    },
    {
        mNum: 1317,
        mContent: '볶은 재료를 볼에담고 삶아서 물에 씻은 당면도 볼에 담는다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/dc8961a13b829caf13662ce455b3cdaa1.jpg',
        recipeId: 184,
    },
    {
        mNum: 1318,
        mContent: '양념을 넣고 섞어주면 끝 싱거우면 간장을 추가하세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/25/036be2244bcdf0242a43d1ed32bb7a061.jpg',
        recipeId: 184,
    },
    {
        mNum: 1319,
        mContent: '돼지고기를 한입크기로 잘라준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f7d56827e61766aef90db52cd79d593b1.jpg',
        recipeId: 185,
    },
    {
        mNum: 1320,
        mContent: '우유와후추를 넣고 30분 담궈준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3088d5b05cba0d5f52d176570dfbc2b11.jpg',
        recipeId: 185,
    },
    {
        mNum: 1321,
        mContent: '30분뒤 튀김가루',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/60b827c9292e289381fcf4eb82635f7f1.jpg',
        recipeId: 185,
    },
    {
        mNum: 1322,
        mContent: '달걀',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/30216f44928896c244d8049d3c99c01a1.jpg',
        recipeId: 185,
    },
    {
        mNum: 1323,
        mContent: '빵가루 순서대로 옷을입힌후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7236db6e4ebee5353542aa085bfa86e01.jpg',
        recipeId: 185,
    },
    {
        mNum: 1324,
        mContent: '튀겨주세요 이정도양이세번정도 나오더라고요 나머지는 냉동보관',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7f80639ee5809df67bf1fa89f52f50e11.jpg',
        recipeId: 185,
    },
    {
        mNum: 1325,
        mContent: '이쁘게 그릇에 담아서 아이들과 맛있게 먹으세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/987816b751c708eaab3bcd55549d22c31.jpg',
        recipeId: 185,
    },
    {
        mNum: 1326,
        mContent: '분량의 재료를 준비해주세요. 당근은 잘게 썰어주세요. 달걀 1알, 당근 1/6개, 다진파 1-2T',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/54cb797fba8f9c92e92e265f8e47ba331.jpg',
        recipeId: 186,
    },
    {
        mNum: 1327,
        mContent: '그릇에 달걀 1개를 넣고 소금과 후추를 한꼬집 정도 넣어 잘 풀어주세요. 달걀 1개, 소금, 후추',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3082419c0a5b5686151a0c6af7a2de151.jpg',
        recipeId: 186,
    },
    {
        mNum: 1328,
        mContent:
            '그 다음 밥을 넣어 달걀물과 잘 섞어주세요. 밥 고슬고슬한 볶음밥을 만들려면 식은 밥을 사용하시는게 좋아요. 아니면 즉석밥을 데우지 않은 상태로 넣어주셔도 좋아요:)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/661aea108a16622f6132bf36978c4da01.jpg',
        recipeId: 186,
    },
    {
        mNum: 1329,
        mContent: '달군 팬에 기름 1T 두르고 대파를 넣어 파기름을 만들어 주세요. 기름 1T, 대파 1-2T 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2f02d6ee04a48c76850d14d3d137fc571.jpg',
        recipeId: 186,
    },
    {
        mNum: 1330,
        mContent: '파향이 올라오면 센불로 올려 밥을 넣어 볶아주세요. 밥 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/68323ea5f735633fc1066a0ac0f6cb101.jpg',
        recipeId: 186,
    },
    {
        mNum: 1331,
        mContent: '달걀이 반정도 익으면 다진 당근도 넣어 약 2분간 볶아주세요. 다진 당근 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/22998fe3382173b195ca57929c0753081.jpg',
        recipeId: 186,
    },
    {
        mNum: 1332,
        mContent: '그 다음 굴소스 0.5T 넣어서 한번 더 볶으면 완성입니다. 부족한 간은 굴소스를 조금 더 넣거나 소금으로 맞춰주세요:) 굴소스 0.5T 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/153ceda455144d1d0d29c960f6f41bf61.jpg',
        recipeId: 186,
    },
    {
        mNum: 1333,
        mContent: '냄비에 물을 올리고 소금과 식초를 1T씩 넣고 물이 끓으면 계란을 넣고 취향껏 익혀주세요',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1334,
        mContent: '계란을 삶는 동안 골뱅이를 먹기 좋은 크기로 썰어줍니다',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1335,
        mContent: '상추도 먹기 좋게 뜯어두고 깻잎, 양파, 당근 등 취향에 맞게 고른 야채들도 채썰어 준비합니다',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1336,
        mContent:
            '골뱅이 국물 3 : 초고추장 3 : 고춧가루 1 : 다진마늘 1의 비율로 섞어 소스를 만듭니다. 취향에 따라 참기름을 첨가합니다 (맛보다 다이어트가 중요하면 참기름 패스)',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1337,
        mContent: '골뱅이, 양파, 당근을 소스에 비벼놓습니다',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1338,
        mContent: '실곤약은 보존수를 따라버리고 곤약냄새가 빠지도록 헹궈서 그릇에 담습니다',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1339,
        mContent: '그릇에 골뱅이와 야채와 소스와 삶은 계란을 얹으면 끝입니다',
        mPicture: '',
        recipeId: 187,
    },
    {
        mNum: 1340,
        mContent:
            '먼저 무는 먹기좋게 깍뚝썰기 한 후소금을 뿌려 30분정도 절여두고 쪽파는 먹기좋게 썰어 준비합니다. (저는 일부러 작게 먹고싶어 작게 썰었어요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d9c79914f78edbf14d047ccdf93b796f1.jpg',
        recipeId: 188,
    },
    {
        mNum: 1341,
        mContent: '잘 절여진 무는 따로 헹구지 않고 채반에 올려 물을 빼주고 볼에 담아 고춧가루 5스푼을 넣어버무려 색을 먼저 입혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1b6cc7a6e30b47061d646803e4cc916b1.jpg',
        recipeId: 188,
    },
    {
        mNum: 1342,
        mContent:
            '그리고 나머지 양념 넣어 비닐장갑 끼고 조물조물 버무려줍니다. 다진마늘 2스푼, 설탕 3스푼, 다진생강 1티스푼, 멸치액젓 2~3스푼, 새우젓 1스푼 참고로 멸치액젓만 사용하려 했으나 깊은맛이 부족해 새우젓을 추가했어요. 확실히 깍두기는 새우젓이 들어가야 맛있더라구요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/88da8db1d5b55d61dde934cdc1ab9ac61.jpg',
        recipeId: 188,
    },
    {
        mNum: 1343,
        mContent: '고루고루 잘 버무려 졌으면쪽파 넣어 한번더 버무려주기!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/73af77dd3325a79cb03ccfa665e2c6111.jpg',
        recipeId: 188,
    },
    {
        mNum: 1344,
        mContent: '잘 담궈진 깍두기는 하루정도 실온에 보관후다음날 냉장고에 넣어주면 되는데요. 이틀정도 지나야 제맛을 내더라구요 ^^ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a1e7361d6f37d2f2bea6f3a41241de761.jpg',
        recipeId: 188,
    },
    {
        mNum: 1345,
        mContent: '새송이버섯은 먹기 좋은 크기로 썰어 놓고 대파는 송송 썰어 준비합니다. 모든 버섯을 고루 넣어 만들어도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9b00935386fa201ee30acbbaf1810a1c1.jpg',
        recipeId: 189,
    },
    {
        mNum: 1346,
        mContent: '팬에 식용유를 두르고 다진 마늘 0.5를 넣고 달달 볶아주세요. 그러다 준비해 놓은 새송이버섯을 넣고 함께 볶아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/219b06239813c270dc97bc30902f7f1d1.jpg',
        recipeId: 189,
    },
    {
        mNum: 1347,
        mContent: '대파도 넣어주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5b4879057dd707c2d1d36b86d32c38cc1.jpg',
        recipeId: 189,
    },
    {
        mNum: 1348,
        mContent:
            '버섯이 숨이 죽으면 불은 중약 불로 줄이고 양념재료인 간장 3, 올리고 당 1, 맛술 2, 후춧가루를 약간 넣고 전체적으로 볶아 양념이 배도록 합니다. 이때 불은 중불로 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/29c04758013750b23ec198382ae52b1a1.jpg',
        recipeId: 189,
    },
    {
        mNum: 1349,
        mContent: '참기름, 통깨를 넣어 마무리해줍니다. 버섯에서 수분이 나오 전체적으로 촉촉해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6ab361c8d6433dfb5bf5b0f7b8a9e8451.jpg',
        recipeId: 189,
    },
    {
        mNum: 1350,
        mContent: '함께 올린 달걀도 2개 부쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0da041afe1f85630a14593efea717e211.jpg',
        recipeId: 189,
    },
    {
        mNum: 1351,
        mContent: '그릇에 밥을 나눠 담고 그 위에 버섯볶음을 올리고 달걀 프라이를 얹어주면 새송이버섯덮밥 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e9807c9ea3df5a732e69e82ac136d6701.jpg',
        recipeId: 189,
    },
    {
        mNum: 1352,
        mContent:
            '두부는 납작하게 썰고, 양파는 동글게 썰어주거나 채 썰고, 대파, 청양고추, 홍고추는 어슷 썰어 준비해 주세요. * 묵은지, 돼지고기는 한 입 크기로 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c9b5d86a4a44f53c5de72181b4c1f31c1.jpg',
        recipeId: 190,
    },
    {
        mNum: 1353,
        mContent:
            '두부는 납작하게 썰고, 양파는 동글게 썰어주거나 채 썰고, 대파, 청양고추, 홍고추는 어슷 썰어 준비해 주세요. * 묵은지, 돼지고기는 한 입 크기로 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0371ef4ff733c4ef01a808e565c0c4771.jpg',
        recipeId: 190,
    },
    {
        mNum: 1354,
        mContent: '냄비에 돼지고기와',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ce32b48a580b2449ecc2a82ba79428b31.jpg',
        recipeId: 190,
    },
    {
        mNum: 1355,
        mContent: '양념한 김치를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9e21d455464add59d420e87ec17150a51.jpg',
        recipeId: 190,
    },
    {
        mNum: 1356,
        mContent: '중간불에서 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ba198f6ea8774c0a64a474fe8cdecc7c1.jpg',
        recipeId: 190,
    },
    {
        mNum: 1357,
        mContent:
            '볶아 놓은 김치는 살짝 식혀 위생 비닐장갑을 끼고 김치를 돌돌 말아 모양을 잡고 냄비 그릇에 담아 주었습니다. 미리 준비해 놓은 두부, 양파, 가래떡, 홍고추, 청양고추를 모두 담아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ef1e1c89c5c31b4750bb3ee00e93b3541.jpg',
        recipeId: 190,
    },
    {
        mNum: 1358,
        mContent:
            '쌀뜨물 3컵, 김칫 국물 1컵을 붓고 15~20분 정도 보글보글 끓여 마무리합니다. * 조금 번거롭게 냄비를 바꿔가면 끓였지만 사실 김치 볶고 난 다음 쌀뜨물 또는 생수 그리고 김칫 국물을 넣고 10분간 끓이고 양파와, 두부, 대파, 고추를 넣고 더 끓여 완성하심 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/be39bbfc97695bf7aef4dff01179cc151.jpg',
        recipeId: 190,
    },
    {
        mNum: 1359,
        mContent: '돼지고기 김치찌개 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6dc40d256875ab25c332541e86b94f191.jpg',
        recipeId: 190,
    },
    {
        mNum: 1360,
        mContent: '닭똥집 == 닭모레집 == 근위 한번 삶아내고 붙어있는 더러운 것들을 가위로 정리...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/93294bcdfcac39d6b53d1adec8b7e03d1.jpg',
        recipeId: 191,
    },
    {
        mNum: 1361,
        mContent: '떡은 물에 좀 담궈두고... 냉동실에 있던거라 더욱 더 .. 이렇게 해야함.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7e78371a2c4f270c0758f0f5ee3c5ae01.jpg',
        recipeId: 191,
    },
    {
        mNum: 1362,
        mContent: '양념 잘 베어들라고~ 비엔나소시지 칼집내듯~ 칼집을 내주었고..',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3141532270250b89328d27eac06392ab1.jpg',
        recipeId: 191,
    },
    {
        mNum: 1363,
        mContent: '간장 3스푼 + 카레가루 조금 + 후추 아차차 마늘을 빼먹었구먼 ..',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/24b553350ae4f6a10e9762870bcab2e51.jpg',
        recipeId: 191,
    },
    {
        mNum: 1364,
        mContent: '기름을 두른 후 볶아줌~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/751567e52c79f92b513632e9b2f8ac271.jpg',
        recipeId: 191,
    },
    {
        mNum: 1365,
        mContent: '어느정도 익었다 싶었을때 야채랑 떡을 넣어줌~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e60bb532b2a75acbca4b501fb90b75e01.jpg',
        recipeId: 191,
    },
    {
        mNum: 1366,
        mContent: '푹 익으라고 몇분정도 뚜껑덮어서 익혀줌~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/633b6338221cf705dae82d4a6e6abaa81.jpg',
        recipeId: 191,
    },
    {
        mNum: 1367,
        mContent: '번쩍번쩍 빛나라고 요리당 넣어줌~ 확실히 요리당 넣으니 윤기가 좔좔거리고~ 단맛도 있으니 단짠단짠...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8a2263a06cd18f3cac994314e04d75d51.jpg',
        recipeId: 191,
    },
    {
        mNum: 1368,
        mContent: '닭똥집만 조금더 익혀주기 위해...구분을 하고 후라이팬을 세워서~ ... 똥집들만 집중해서 익혀줌 EXP +1',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/752752960353449ce5d46602d18b1f901.jpg',
        recipeId: 191,
    },
    {
        mNum: 1369,
        mContent:
            '미니 새송이버섯 사이즈가 큼지막하면 2등분 해주고 작은 사이즈는 그냥 사용하고 양파는 채 썰고, 부추는 3cm 정도 길이로 썰어 준비해 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/1cb120bf2175b55104919394b350242b1.jpg',
        recipeId: 192,
    },
    {
        mNum: 1370,
        mContent: '팬에 식용유 1을 두르고 다진 마늘 1을 넣고 달달 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c4adf6d783831264b7008f45e56eace11.jpg',
        recipeId: 192,
    },
    {
        mNum: 1371,
        mContent: '마늘향이 올라오면 준비해 놓은 양파, 부추, 미니 새송이버섯을 모두 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/31f1850fcb7afe9764f370ad02f9e8fa1.jpg',
        recipeId: 192,
    },
    {
        mNum: 1372,
        mContent: '양념재료인 굴 소스 1, 맛술 1을 넣고 센 불에서 달달 볶아 줍니다 대략 3분 정도~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/480d027265496e1070f327cf419b1cd01.jpg',
        recipeId: 192,
    },
    {
        mNum: 1373,
        mContent:
            '이제 불의 세기를 중불로 줄여주고 참기름 0.5, 통깨 0.5, 후춧가루 적당량을 넣어 고루 볶아줍니다. 드셔보시고 부족한 간을 소금으로 해주심 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d667a5dffab1b33908a6c6fd523743391.jpg',
        recipeId: 192,
    },
    {
        mNum: 1374,
        mContent: '간단 반찬 미니 새송이버섯볶음 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/73984bfea83c8801dbbfa763cc07a4341.jpg',
        recipeId: 192,
    },
    {
        mNum: 1375,
        mContent:
            '볶음 우동에 넣을 콩나물은 물에 씻어 준비하고 베이컨 또는 슬라이스 햄을 먹기 좋은 크기로 썰어 준비합니다. 그리고 양파 1/4를 채 썰어 주세요. 대파도 송송 썰어 준비하고요. *콩나물 대신 숙주나물 넣어 주심 더 좋아요. 저는 없어서 콩나물로 대신했습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/d577641506e3d8f43509c8f80afd62871.jpg',
        recipeId: 193,
    },
    {
        mNum: 1376,
        mContent: '냄비에 물을 끓여 우동을 살짝 데쳐주세요 데친 우동은 체에 밭쳐 물기를 제거해 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4cb10c1b7445d3ad3bf1ea7e496aa8a01.jpg',
        recipeId: 193,
    },
    {
        mNum: 1377,
        mContent: '팬에 식용유 2를 두르고 다진 마늘 1을 넣고 달달 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e6f253ff66a09039b273a2b4766c965f1.jpg',
        recipeId: 193,
    },
    {
        mNum: 1378,
        mContent: '마늘이 노릇하게 볶아지면 준비해 놓은 햄 또는 베이컨 그리고 양파를 넣고 충분히 볶아 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7e622643c793bc2d91d73d693d89d0c01.jpg',
        recipeId: 193,
    },
    {
        mNum: 1379,
        mContent:
            '양념재료이니 맛술 3, 굴 소스 3, 간장 2, 올리고 당 1.5를 넣어 재료와 함께 볶아주세요. 갖고 있는 굴 소스마다 염도가 다르니 양을 늘리거나 줄여서 만들어 주심 좋을 것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ae78fe3491e9a37dde632ed084f83cd11.jpg',
        recipeId: 193,
    },
    {
        mNum: 1380,
        mContent:
            '데친 우동은 넣기 전에 미지근한 물에 한번 헹궈 물기를 탈탈 털어 넣어주세요. 그래야지 뭉쳐있던 우동이 풀어지면서 양념과 재료가 잘 어우러진답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2c0a9a6fdd30234c9f3257ce0400ac871.jpg',
        recipeId: 193,
    },
    {
        mNum: 1381,
        mContent: '준비한 콩나물도 함께 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a43cf57d3f9476705460688540c46d9a1.jpg',
        recipeId: 193,
    },
    {
        mNum: 1382,
        mContent:
            '* 숙주 경우 살짝 볶아주면 바로 익지만 콩나물은 익히는 시간이 숙주보단 조금 더 길어요. 제가 사용한 우동면은 오랫동안 볶아도 불지 않아 콩나물을 그냥 넣었는데요. 숙주 대신 콩나물을 넣어 조리하시려면 살짝 데쳐서 넣어 주심 조리시간도 짧고 아삭하게 드실 수 있답니다. 참고하여 조리해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7978c5596a29f448b2ca717b7f20d1311.jpg',
        recipeId: 193,
    },
    {
        mNum: 1383,
        mContent: '전체적으로 잘 볶아주고 콩나물이 익으면 준비한 대파를 넣고 마지막에 참기름 0.5 그리고 후춧가루를 적당량 넣어 마무리합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/850fc94a7a320f977cffb703bd55d8c31.jpg',
        recipeId: 193,
    },
    {
        mNum: 1384,
        mContent: '볶음우동완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/3a8c5434d6574296de2d370fe500d7291.jpg',
        recipeId: 193,
    },
    {
        mNum: 1385,
        mContent: '콩나물을 깨끗하게 씻어 준비하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/7bbb529ea3573ea0730c43b3d0cdbdaf1.jpg',
        recipeId: 194,
    },
    {
        mNum: 1386,
        mContent:
            '냄비에 콩나물이 잠길 만큼 물을 준비하고 소금 0.5를 넣고 물이 끓기 시작하면 콩나물을 넣어 데쳐주세요. 데친 콩나물은 찬물에 헹궈 물기를 빼고 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/73d077aef243c8a271bbaa34941b47231.jpg',
        recipeId: 194,
    },
    {
        mNum: 1387,
        mContent:
            '국수를 비빌 수 있는 넓은 그릇에 양념장을 만들어 주세요. 고춧가루 2, 간장 4, 맛술 1, 설탕 0.5, 올리고 당 2, 참기름 2, 통깨 1, 식초 1을 한데 넣어 비빔양념장을 만들고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/5a5831e24f68e13888a19035a51a85801.jpg',
        recipeId: 194,
    },
    {
        mNum: 1388,
        mContent: '부추는 4cm 간격으로 썰고, 양파는 채 썰고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/98d73013c41062e3362a63628e75d77c1.jpg',
        recipeId: 194,
    },
    {
        mNum: 1389,
        mContent: '미리 삶아 놓은 콩나물도 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8d912186543f57c11819c812c9cac8421.jpg',
        recipeId: 194,
    },
    {
        mNum: 1390,
        mContent: '냄비에 물을 넣고 물이 끓기 시작하면 소면을 넣어 삶아내고 삶은 소면은 찬물에 헹궈 물기를 빼서 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/deda4ec4d7f731bd5782e16cd7e411ec1.jpg',
        recipeId: 194,
    },
    {
        mNum: 1391,
        mContent: '양념장에 부추, 양파를 먼저 넣어 버무리고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2e23bddb67902d28918e1a033a0f1d4f1.jpg',
        recipeId: 194,
    },
    {
        mNum: 1392,
        mContent: '삶아 놓은 국수를 넣어 섞어 마무리해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a22143e32fe473a11dfe2fa85bf0dda01.jpg',
        recipeId: 194,
    },
    {
        mNum: 1393,
        mContent: '콩나물 비빔국수 완성 ^^ 아삭하고 매콤하니 꿀맛입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e8380774d6c10bd64bc1ceb596438f7b1.jpg',
        recipeId: 194,
    },
    {
        mNum: 1394,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9633a4e64dcc9910fa369a2ac3c542011.jpg',
        recipeId: 195,
    },
    {
        mNum: 1395,
        mContent:
            '- 단촛물 재료 모두 섞기 냄비에 바글바글 끓여야 하지만 간단하게 하기 위해 생략했어요. 전 갈색 설탕을 사용해 색이 갈색을 띠네요. - 간을 보면서 단촛물 밥에 넣어 섞기 단촛물이 한두 큰 술 남을 거예요. - 섞은 후 완전히 식히기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ea2e706b37471ce1168faa82ff64a0531.jpg',
        recipeId: 195,
    },
    {
        mNum: 1396,
        mContent: '- 양파 다진 후 아린 맛 제거를 위해 찬물에 10분정도 담가놓기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/cc7060ca048d5f85917284790fa2d6a21.jpg',
        recipeId: 195,
    },
    {
        mNum: 1397,
        mContent: '- 참치는 기름을 빼고 나머지 재료는 다지기 - 피망, 파프리카, 양파는 키친타올로 꽉 짜서 물기 제거하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/2231fdf413493c33eb4439a18e02eed91.jpg',
        recipeId: 195,
    },
    {
        mNum: 1398,
        mContent: '- 기름 뺀 참치, 물기 제거한 채소, 단무지 볼에 넣은 후 마요네즈, 소금 넣어 버무리기 고추냉이는 기호에 맞게 넣어 같이 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/cce8b5fddd2dd2fda13899fb58fe8fba1.jpg',
        recipeId: 195,
    },
    {
        mNum: 1399,
        mContent: '- 김보다 크게 랩 깔기 - 랩 위에 김 올리기 - 김 전체에 밥 고르게 펼치기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/59c73d5e6413ec96a9a9db980e317c241.jpg',
        recipeId: 195,
    },
    {
        mNum: 1400,
        mContent: '- 뒤집어서 깻잎 3장 올리기 김발사용시 김밥 위에 랩을 깔아주면 돼요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/ddb7ce0898e5fe5c1159e4175e3efc8b1.jpg',
        recipeId: 195,
    },
    {
        mNum: 1401,
        mContent: '- 깻잎 위에 참치샐러드 듬뿍 3큰술 올리기 - 올린 후 가지런히 정리해줘요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/fc6e7b7640b536d9ff5c624bebe701e81.jpg',
        recipeId: 195,
    },
    {
        mNum: 1402,
        mContent: '- 랩을 김발처럼 단단하게 말기 - 양쪽 사탕 모양으로 꼬기 Tip. 단단하게 말아야 자르기도 쉽고 모양도 잘 잡혀요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8b335cab72a1489f2784877ae99d95911.jpg',
        recipeId: 195,
    },
    {
        mNum: 1403,
        mContent: '4줄 완성 되었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9b44454a4a0f3a899199089a1767d2d51.jpg',
        recipeId: 195,
    },
    {
        mNum: 1404,
        mContent: '- 이쁘게 썰기 Tip. 자르고 난 후 랩을 벗겨야 모양이 흐트러지지 않아요. 빵 칼로 썰면 더 잘 썰 수 있으니 있으면 사용해보세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/bd51f3440ed6dc43d8e5703da831de2d1.jpg',
        recipeId: 195,
    },
    {
        mNum: 1405,
        mContent: '참치샐러드가 듬뿍 들어간 캘리포니아롤 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e80bf97859b7edbba9e0f64e591b14941.jpg',
        recipeId: 195,
    },
    {
        mNum: 1406,
        mContent: '오이는 반을 갈라서 속을 파내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/32f5702e9c7995166f904a9274a664921.jpg',
        recipeId: 196,
    },
    {
        mNum: 1407,
        mContent: '오이를 어슷썰기를 해주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8bbfd171bb4d6a81873cbf4adeeeaaf31.jpg',
        recipeId: 196,
    },
    {
        mNum: 1408,
        mContent: '소금(2/3)을 넣고 15분간 절여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4c887ab41d13b32acc006ad15c309acf1.jpg',
        recipeId: 196,
    },
    {
        mNum: 1409,
        mContent: '절인 오이는 물에 헹궈서 살짝 짜주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/68ec3f17b7f08168c0b47213a0c78b311.jpg',
        recipeId: 196,
    },
    {
        mNum: 1410,
        mContent: '달래는 끝부분을 다듬고 겉껍질을 벗기고 깨끗이 씻어서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/f5cf20b0ae9964ecf78188b4b3cc6b161.jpg',
        recipeId: 196,
    },
    {
        mNum: 1411,
        mContent: '머리부분을 칼등으로 살짝 으깨고 4~5센치 길이로 썰어주세요. 으깨는것은 향을 더 나게 하기 위함이에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/91a49970c48f9be5daa59c5e276e5ad81.jpg',
        recipeId: 196,
    },
    {
        mNum: 1412,
        mContent: '양파는 채썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0c0a9104f59480e8560ebab5969bafc21.jpg',
        recipeId: 196,
    },
    {
        mNum: 1413,
        mContent: '이제 고춧가루(3)/간장(2)/설탕(2/3)/식초(1)/깨소금(1)/참기름(1/2)을 잘 섞어서 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/9441acfd03ec06bc9408f8fdce655e551.jpg',
        recipeId: 196,
    },
    {
        mNum: 1414,
        mContent: '달래와 양파 오이를 한데 섞어서 양념장을 넣고 살살 버무려주세요. 풋내가 나기 쉬우니 손끝에 힘을 주지말고 살살 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c898613821a95f9c9e0e2dcbfe1e8cf11.jpg',
        recipeId: 196,
    },
    {
        mNum: 1415,
        mContent: '줄기가 억센 부분을 자르고 여러번 헹궈 물기 제거하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6019855d96b5e7689280ae3bb331184b1.jpg',
        recipeId: 197,
    },
    {
        mNum: 1416,
        mContent: '청양고추 홍고추 씨 제거하고 채썰어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/e95268b3fe9ae11f83fbf872bf18bdaf1.jpg',
        recipeId: 197,
    },
    {
        mNum: 1417,
        mContent: '볼에 튀김반죽과 쌀가루 소금약간 넣고 차가운 물을 부에 젓가락으로 대충 섞어줍니다 반죽의 농도는 약간 묽은 정도로~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c3bee8b9fea779512c404c410afba5f91.jpg',
        recipeId: 197,
    },
    {
        mNum: 1418,
        mContent: '반죽에 쑥과 고추 넣어 섞고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a64c025eb6a39b81aa64b07443d9d1861.jpg',
        recipeId: 197,
    },
    {
        mNum: 1419,
        mContent: '쑥에 반죽이 묻은 정도로 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/a481177d5a24ee216add7a1d271918751.jpg',
        recipeId: 197,
    },
    {
        mNum: 1420,
        mContent:
            '달군 팬에 기름 넉넉히 두르고 반죽 (쑥)을 넣는데요 바삭함을 위해 젓가락으로 반죽을 넣고 쑥의 모양이 보이는 정도로만 반죽을 넣어 익혀줍니다 쑥의 형태가 보이는 정도로 반죽을 넣고 익히게 되면 쑥 전이 바삭하게 돼요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/8a266ff9944033f372becfc090989a491.jpg',
        recipeId: 197,
    },
    {
        mNum: 1421,
        mContent: '바삭하니 향이 좋은 맛있는 쑥 전 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/828b5daece2c0a481d8106daf79cf60f1.jpg',
        recipeId: 197,
    },
    {
        mNum: 1422,
        mContent: '과일을준비합니다. 딸기.레몬.설탕.식초',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/745dea6e9de43e24296843993f7dca641.jpg',
        recipeId: 198,
    },
    {
        mNum: 1423,
        mContent: '설탕을 마지막에 부어주구요.. 잘희석해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6825547f0609bbd69709a4e25f9758b11.jpg',
        recipeId: 198,
    },
    {
        mNum: 1424,
        mContent: '마지막으로 효모가 있다면 몇개만 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/0b020853ab056d8e48e09e89e6b1abeb1.jpg',
        recipeId: 198,
    },
    {
        mNum: 1425,
        mContent: '1:6 과일식초:물 비율로 차갑게 드시면 맛있어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/4a12c1da8b1014ef28821cc02caba72b1.jpg',
        recipeId: 198,
    },
    {
        mNum: 1426,
        mContent:
            '우선 사온 대구포는 녹혀야 하는데요. 녹으면 키친타월에 올려 물기를 빼주고 키친타월로 위에도 물기를 닦아서 완전히 제거해줍니다. 그런다음 소금과 후추를 뿌려 간을 해주면 됩니다. 그러고 10분 정도 놔두면 됩니다. 허브솔트를 사용하면 더 맛있어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f0bfb982f5be6ff979ed4173616f663c1.jpg',
        recipeId: 199,
    },
    {
        mNum: 1427,
        mContent: '이제 생선가스 만들차롄대요. 밀가루 → 계란 → 빵가루 순으로 대구포 하나씩 입혀주면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/227f7a8e900922f8ec5c3faf30fb01d11.jpg',
        recipeId: 199,
    },
    {
        mNum: 1428,
        mContent: '한팩을 하니 저는 이만큼 나왔네요. 양이 많아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/058773cb58cf49e66ecb092a447d92cb1.jpg',
        recipeId: 199,
    },
    {
        mNum: 1429,
        mContent:
            '생선가스 다 만들었으니 이제 소스 만들어야죠. 분량의 양념을 넣고 섞어줍니다. 타르타르소스는 입맛에 맞게 소금 간하시면 되는데요.. 먹어보고 적당히 넣으시면 됩니다~ 아니면 시판소스로도 대체 가능 합니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7fd242df675cdbe866bf7fdbf65575401.jpg',
        recipeId: 199,
    },
    {
        mNum: 1430,
        mContent: '섞어주면 이렇게 타르타르소스 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/055d23823ca2dc4b3757b27f5ae322921.jpg',
        recipeId: 199,
    },
    {
        mNum: 1431,
        mContent: '이제 생선가스 튀겨주는데요. 저는 작은 팬에 기름 적게 넣고 튀겼어요~ 기름 달군 다음 중불로 튀겨줘야 안 타요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/063cfc2b03b951c02d018e28ba07a7261.jpg',
        recipeId: 199,
    },
    {
        mNum: 1432,
        mContent: '잘 튀겨졌어요~ 이제 셋팅하면 생선가스 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/68c5751304a2389e2f5c74ecd936941a1.jpg',
        recipeId: 199,
    },
    {
        mNum: 1433,
        mContent:
            '1. 시금치 나물 끓는 물에 손질한 시금치를 데쳐준 후 먹기 좋은 크기로 썰어준다. 양념을 넣고 조물조물 무쳐주면 완성된다. 시금치 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7ba095f4cf2aa2ca791baa3e203e54a31.jpg',
        recipeId: 200,
    },
    {
        mNum: 1434,
        mContent: '2. 굴전 굴은 손질하여 밀가루, 계란, 부추를 넣고 반죽한다. 굴 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/99b13da12cddb167e797bf449bfa293d1.jpg',
        recipeId: 200,
    },
    {
        mNum: 1435,
        mContent: '프라이팬에 콩기름을 두르고 하나씩 올려 노릇노릇 구워주면 완성된다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c5cec72f7bb28e878aa34f3a2235dfb01.jpg',
        recipeId: 200,
    },
    {
        mNum: 1436,
        mContent: '3. 고등어 구이 프라이팬에 노릇노릇 구워준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/385da05738d919dff005ed4e4764d8991.jpg',
        recipeId: 200,
    },
    {
        mNum: 1437,
        mContent: '4. 오이고추 무침 고춧가루, 매실진액, 마늘, 깨소금, 참기름, 된장을 넣고 양념장을 만들어 준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7f2164b7220df79c5df9e9c06fb272a41.jpg',
        recipeId: 200,
    },
    {
        mNum: 1438,
        mContent: '오이고추는 먹기 좋게 썰어주고, 양념장을 넣고 버무려주면 완성된다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e65d6bcc2419731f3f06e0b88b81a9b91.jpg',
        recipeId: 200,
    },
    {
        mNum: 1439,
        mContent: '닭봉은 소금 후추를 뿌려 조물조물 주물러준 후 에어플라이어기에 넣어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4c1b06db66546dc9d40e3b0bbdafe1531.jpg',
        recipeId: 201,
    },
    {
        mNum: 1440,
        mContent: '180도에서 10분 돌린 후 뒤집어 주고, 10분을 한 번 더 돌려 노릇노릇 구워준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c1136e92f7466c3fa6089be0615dcf951.jpg',
        recipeId: 201,
    },
    {
        mNum: 1441,
        mContent: '접시에 담고 송송 썬 대파와 머스터드소스를 뿌려주면 완성된다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/122bc2a5e7c6c0aff2f7ea87439b32e41.jpg',
        recipeId: 201,
    },
    {
        mNum: 1442,
        mContent: '새송이버섯은 먹기 좋은 크기로 썰어준 후 프라이팬에 노릇노릇 구워준다. 은행도 함께 볶아준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/82611bd3af1708c409d2e1e275c2331d1.jpg',
        recipeId: 202,
    },
    {
        mNum: 1443,
        mContent: '연어도 프라이팬에 구워주고 밥도 그릇에 담아 꾹꾹 눌러준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/144cc27db02d0cd1bae34f9685eac4ef1.jpg',
        recipeId: 202,
    },
    {
        mNum: 1444,
        mContent: '접시에 정갈하게 담아낸 후 온천 계란을 올려준 후 파슬리가루를 뿌려 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0c15fb033e89eb7949ddecf2d52b38d31.jpg',
        recipeId: 202,
    },
    {
        mNum: 1445,
        mContent: '1. 팥밥 쌀, 찹쌀, 삶은 팥, 밤, 대추, 소금을 약간 넣고 밥을 지어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b489657a21698e215631e414738d7cc21.jpg',
        recipeId: 203,
    },
    {
        mNum: 1446,
        mContent: '2. 동그랑땡 동그랑땡에 밀가루, 계란을 입혀 노릇노릇 구워준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5b138e193b54036c14f56064cf5bf2961.jpg',
        recipeId: 203,
    },
    {
        mNum: 1447,
        mContent: '3. 뱅어 구이 손질한 뱅어는 콩기름을 두르고 노릇노릇 구워낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bf48b3de725ce3a383c3cda2df8e6da61.jpg',
        recipeId: 203,
    },
    {
        mNum: 1448,
        mContent:
            '4. 시래기 된장 볶음 삶은 시래기는 먹기 좋은 크기로 잘라 된장을 넣고 조물조물 무쳐준다. 멸치육수, 마늘을 넣고 볶다가 깨소금, 참기름을 넣고 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/090134ea2495619af11868c7063d9ed21.jpg',
        recipeId: 203,
    },
    {
        mNum: 1449,
        mContent:
            '5. 조갯살 미역국 미역은 물에 불러 먹기 좋은 크기로 잘라준다. 불린 미역, 손질한 조갯살, 참기름을 넣고 볶아준 후 멸치 육수를 부어준다. 마지막에 멸치 액젓으로 간하여 마무리한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5aae88f9dd3c655c4208ee4e470d4d981.jpg',
        recipeId: 203,
    },
    {
        mNum: 1450,
        mContent: '랍스터는 삼발이를 놓고 쪄낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/39180b9e600b62b8f4ddb36425d335761.jpg',
        recipeId: 204,
    },
    {
        mNum: 1451,
        mContent: '양파, 토마토, 호박은 먹기 좋은 크기로 썰어 프라이팬에 노릇노릇 구워준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c6910f986ad3ce1f9bc4060963a6272a1.jpg',
        recipeId: 204,
    },
    {
        mNum: 1452,
        mContent: '완성된 모습',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/444efe00c0c7f06e5449edc55d3f81dd1.jpg',
        recipeId: 204,
    },
    {
        mNum: 1453,
        mContent:
            '계란을 삶을 때는 소금과 식초를 넣고 15분간 삶아줍니다. 소금은 껍질이 잘 벗겨지라고... 식초는 삶다가 깨져서 흘러나오면 응고되라고 넣어준답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/69f31b80203443c6b744cb926f8a57561.jpg',
        recipeId: 205,
    },
    {
        mNum: 1454,
        mContent:
            '꽈리고추 큰 거는 반으로 잘랐어요. 반으로 자르면 매운맛이 간장 양념에 스며들겠지요. 그냥 통째로 넣을 땐 구멍을 뚫어준 후 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ac87eaa7bbe0819549fa51d9893171291.jpg',
        recipeId: 205,
    },
    {
        mNum: 1455,
        mContent:
            '한개도 안깨지고 잘 삶아졌네요. 2개는 삶은 달걀로 소금 찍어서 먹고 꽈리고추 장조림은 10개만 할 거랍니다. 찬물에 잠시 담았다가 껍질은 벗겨줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f2178d65397c360ea5c0dba8b240f6ac1.jpg',
        recipeId: 205,
    },
    {
        mNum: 1456,
        mContent: '간장 10, 맛술 2, 설탕 2, 생강 1조각, 다시마 2개, 물은 계란이 잠기지 않을 정도만 넣었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/cabeccd822b54f8e82df7614583397401.jpg',
        recipeId: 205,
    },
    {
        mNum: 1457,
        mContent: '끓어오르면 다시마는 건져냈어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8a2a9fb4de40b8a7e53904e228ca5bbb1.jpg',
        recipeId: 205,
    },
    {
        mNum: 1458,
        mContent: '계란에 간장색이 스며들면 꽈리고추를 넣어주세요. 냄비가 작아서 계란이 달라붙어서 궁중팬으로 옮겼어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/42a967e726bb56beb8dede74537917a41.jpg',
        recipeId: 205,
    },
    {
        mNum: 1459,
        mContent: '계란이 옆구리 터지고 난리네요. 처음부터 넓은 곳에 했어야 했는데... 힝~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0825e1cc3c4fbe257055cebf2489b58d1.jpg',
        recipeId: 205,
    },
    {
        mNum: 1460,
        mContent: '잘 익은 아보카도 두개를 골라서 반으로 가르고 (초록껍질이 전체가 다 보라색으로 되면 잘 익은거예요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d18fc809d78019c918f527eba961ed991.jpg',
        recipeId: 206,
    },
    {
        mNum: 1461,
        mContent: '씨를 제거하고 껍질을 벗긴 후에 얇게 썰어 빙르르르~~돌려 모양을 잡아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7b6e95565c46396ba6f0d1b1c259d83e1.jpg',
        recipeId: 206,
    },
    {
        mNum: 1462,
        mContent: '뜨끈한 밥에 참기름과 소금으로 간하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ef8f1923fd5187eb7eff9dc22e22fcdc1.jpg',
        recipeId: 206,
    },
    {
        mNum: 1463,
        mContent: '밥이 체온과 비슷한 온도로 식혀지면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/706e21ab82ee61a901b17c2aac566be01.jpg',
        recipeId: 206,
    },
    {
        mNum: 1464,
        mContent: '연어를 덮어주고요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f1e7bc6624313d0dba5628c91e382ff51.jpg',
        recipeId: 206,
    },
    {
        mNum: 1465,
        mContent: '그 위에 아보카도 올리고 날치알 올리고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6e9d04b764ce27422cacc77c43bed2181.jpg',
        recipeId: 206,
    },
    {
        mNum: 1466,
        mContent: '[2인분 양념장] 간장 2큰술 겨자2작은술 참기름 2큰술 (참기름이 연어의 비린맛을 잡아주어요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4bf87b782cf38e94ad7b4b670484eff01.jpg',
        recipeId: 206,
    },
    {
        mNum: 1467,
        mContent: '양념간장 입맛에 맞게 끼얹은 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/48b0b9e5c5c2d436700e0f5de8622fb31.jpg',
        recipeId: 206,
    },
    {
        mNum: 1468,
        mContent: '잘 섞어서 냠냠냠~~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9e679cfcbd582e144a4b977c3a782ce01.jpg',
        recipeId: 206,
    },
    {
        mNum: 1469,
        mContent: '찐고구마는 잘 으깨서 생크림, 레몬즙과 함께 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/721464005657312830b972f9027331eb1.jpg',
        recipeId: 207,
    },
    {
        mNum: 1470,
        mContent: '실온의 버터를 부드럽게 푼 후, 설탕을 넣고 충분히 휘핑해주세요. 여기에 레몬즙과 생크림을 섞은 고구마를 넣고 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ace250c03c2bb3e826f9c153f53add941.jpg',
        recipeId: 207,
    },
    {
        mNum: 1471,
        mContent:
            '바닐라 익스트랙과 푼 달걀을 조금씩 넣어가면서 충분히 휘핑해주세요~ 반죽의 설탕 입자가 아주 살짝만 만져지는 정도까지 휘핑하면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/39dd48d352dfe0494400bc696866a26c1.jpg',
        recipeId: 207,
    },
    {
        mNum: 1472,
        mContent: '체친 박력분과 베이킹파우더를 넣고 잘 섞은 후,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/97928babdd7b8c7b34c75836dfe1328d1.jpg',
        recipeId: 207,
    },
    {
        mNum: 1473,
        mContent:
            '유산지나 오일을 바른 팬에 팬닝하고, 양끝을 올려 보트 모양으로 만들어주세요. 여기에 정육면체로 자른 크림치즈를 올려주세요. 170~180도로 예열된 오븐에서 25~30분 정도 구워주세요. 노릇하게 익으면 꼬치를 찔러보아 깨끗하면 다 구워진거에요~ 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/641d4e8c4f8a4eedf102032d8b0f4bb11.jpg',
        recipeId: 207,
    },
    {
        mNum: 1474,
        mContent: '홍게는 다리를 먹기 좋게 자르고 몸통도 스펀지 같은 아가미 제거하고 2등분합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6d6a8d641c06f8c78b5e167e8d41733e1.jpg',
        recipeId: 208,
    },
    {
        mNum: 1475,
        mContent: '다리에 뾰족한 부분은 잘라줍니다. 먹을 때 찔려요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/668f3667043a8d0b48d304c2a2a9e1a61.jpg',
        recipeId: 208,
    },
    {
        mNum: 1476,
        mContent: '소금물에 세척해주고 물기를 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/37adb3279f7aff478a242a6030fe0d921.jpg',
        recipeId: 208,
    },
    {
        mNum: 1477,
        mContent: '라면도 같은 해물라면으로 준비했어요. 콩나물을 넣어주어도 좋을 것 같아요. 홍고추와 풋고추, 대파는 어슷썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/927878a9eafb1880a646d041211ae3fd1.jpg',
        recipeId: 208,
    },
    {
        mNum: 1478,
        mContent:
            '물은 1,100ml 를 넣어주고 홍게를 삶아서 육수를 먼저 내줍니다. 10분이면 충분합니다. 뽀얀 육수가 나와서 더욱 맛있죠. 거품은 걷어내고 라면사리와 스프를 모두 넣어줍니다. 계란은 라면 국물맛을 살리기 위해 풀어넣지 않고 두 개를 다른 위치에 하나씩 살포시 넣어줍니다. 젓지 말고 그대로 익혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c762e34fb692f762b5b015835d1885121.jpg',
        recipeId: 208,
    },
    {
        mNum: 1479,
        mContent: '홍게가 들어가서 국물 향이 너무 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/99e25306f64b6e222d1d73e591eb98d01.jpg',
        recipeId: 208,
    },
    {
        mNum: 1480,
        mContent: '마지막에 고추와 대파를 넣어 완성합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/39d92745fd05a54e5b6149cc349465bf1.jpg',
        recipeId: 208,
    },
    {
        mNum: 1481,
        mContent:
            '목우촌 비엔나 소시지는 1cm 간격으로 어슷하게 칼집을 2번 앞뒤로 낸 다음 팬에 볶아 주세요. 브로콜리는 소시지와 같은 크기로 썰어서 끓는물에 소금을 약간 넣고 살짝 데친 다음 찬물에 식혀 식용유 두른 팬에서 볶아 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/90ede48072c6a5b11103764152ee4db81.jpg',
        recipeId: 209,
    },
    {
        mNum: 1482,
        mContent:
            '브로콜리는 적당한 크기로 떼어낸 후에 끓는 물에 데친 뒤 살짝 볶아 주세요. 브로콜리를 볶으면 더 고소하고 색감도 이뻐 진답니다. 대파는 3cm 크기로 잘라서 팬에 식용유를 약간 둘러 볶아 주세요. 대파는 기름에 볶으면 매운맛이 사라지고 숨이 죽으면서 단맛이 나기 때문에 더욱 맛있어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ecbc70cca0c4878c691aa7af90e228e91.jpg',
        recipeId: 209,
    },
    {
        mNum: 1483,
        mContent: '꼬치에 소시지, 브로콜리, 대파, 소시지, 브로콜리, 소시지 순으로 꽂고 소스를 곁들여 내면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1369e1c080ce0bb258d31836104bbc901.jpg',
        recipeId: 209,
    },
    {
        mNum: 1484,
        mContent: '1.꽃게를 큰 솔로 씻어 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bc5469a3e47094527db993c49b5dcfa11.jpg',
        recipeId: 210,
    },
    {
        mNum: 1485,
        mContent: '2.게 딱지를 분리해요.(숟가락 사용)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/42100c16d01c883f8914c155f305445a1.jpg',
        recipeId: 210,
    },
    {
        mNum: 1486,
        mContent: '3.아가미 부분을 숟가락으로 긁어 내요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/339bc89e1a2e3532a87de0c09b01dbf21.jpg',
        recipeId: 210,
    },
    {
        mNum: 1487,
        mContent: '4.생식기를 제거하고 몸통을 2조각으로 잘라요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/520a25c1d227a1e6c09958671fc957541.jpg',
        recipeId: 210,
    },
    {
        mNum: 1488,
        mContent:
            '5.양념장을 만들어요. 개인적으로 ...식초를 넣으면 게살의 달큰한 향이 사라지는것 같았어요. 빨리 먹는 양념장에는 식초를 넣지 않았어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/78736d7d935fb8f9945fb0eeb3666d861.jpg',
        recipeId: 210,
    },
    {
        mNum: 1489,
        mContent:
            '6.야채 손질 하기. 마늘은 편으로 썰어요.청,홍고추는 쏭쏭쏭 썰기.흰파는 다져주기.생강은 얇게 채썰어 5분간 찬물에 담궜다가 (전분제거) 체망에 건져서 물기 제거하고 사용해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c9ea81cc4c1e24b59306993b528c63451.jpg',
        recipeId: 210,
    },
    {
        mNum: 1490,
        mContent: '7.양푼이에 비닐 장갑을 끼고 몸통을 꾸욱 눌러 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/17db282ae945c2f658f494aa4c2737e61.jpg',
        recipeId: 210,
    },
    {
        mNum: 1491,
        mContent: '8.살만 발라 내요. 집게발,몸통은 밀대로 밀어요 내장도 살과 함께 섞어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8e78c240cde09a60c8a077297a8f10631.jpg',
        recipeId: 210,
    },
    {
        mNum: 1492,
        mContent: '10.양념장과 야채를 먼저 섞어 주고 꽃게살을 살살 섞어 주어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/78d786c9f939f57668de950d6fd6405b1.jpg',
        recipeId: 210,
    },
    {
        mNum: 1493,
        mContent: '11.만능꽃게살양념장 완성 (장기간 보관시 식초를 넣어 주세요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6cbbc3f22df3f3c1a0ec3f75e5e416d91.jpg',
        recipeId: 210,
    },
    {
        mNum: 1494,
        mContent: '12.밥한공기,노른자,쪽파,깻잎(새싹채소),깨소금약간,만능꽃게살양념장 듬뿍1T,참기름 한방울',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/561a51eaa279ff96bd4688998b34b0961.jpg',
        recipeId: 210,
    },
    {
        mNum: 1495,
        mContent:
            '13.잘~~섞어서 드셔요. 개인적으로 깻잎향이 강하고 거친 느낌이 있어서 양념장,노른자,쪽파만 넣어서 먹으면 꽃게살양념장에 더 집중이 되는것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/eae062963c3d81b8b3aad68312887f541.jpg',
        recipeId: 210,
    },
    {
        mNum: 1496,
        mContent: '오이를 절이고 절여지면 물에 헹궈 꼭 짭니다',
        mPicture: '',
        recipeId: 211,
    },
    {
        mNum: 1497,
        mContent: '느타리버섯도 손질하고 씻어 꼭 짭니다 버섯 손질법 레시피',
        mPicture: '',
        recipeId: 211,
    },
    {
        mNum: 1498,
        mContent: '웍에 버섯을 볶습니다',
        mPicture: '',
        recipeId: 211,
    },
    {
        mNum: 1499,
        mContent: '버섯이 익으면 오이를 넣고 순서에 따라 빨리 볶아냅니다',
        mPicture: '',
        recipeId: 211,
    },
    {
        mNum: 1500,
        mContent:
            '목우촌 비엔나 소시지는 x자로 칼집을 넣고 옥수수는 통조림에서 꺼내 체에 받쳐 물기를 빼 주세요. 피망은 씻어서 옥수수 알갱이와 같은 크기로 네모지게 썰고 1의 재료인 옥수수와 섞은 뒤 설탕, 마요네즈를 넣어서 골고루 버무려 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/262538595be93c6a1560c7744ff02a591.jpg',
        recipeId: 212,
    },
    {
        mNum: 1501,
        mContent:
            '단맛이 너무 많이 나는 것이 싫으신 분들은 설탕의 양을 조금 적게 넣어 주세요. 시럽을 대신 넣어도 좋아요! 팬에 버터를 바른 뒤에 재료를 올릴 때에도 팬 보다는 철판이 더 뜨겁게 먹는데 좋아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/dec64978fa507c544dc02f28e5ff3b751.jpg',
        recipeId: 212,
    },
    {
        mNum: 1502,
        mContent:
            '철판에 버터를 고루 펴바른 다음 재료를 올리고 소시지를 얹은 다음에 파슬리 가루를 뿌려서 200도씨의 예열한 오븐에서 10분간 구워주면 완성!! 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/26bd6aca111716e71fd4a01fb8eb8b2a1.jpg',
        recipeId: 212,
    },
    {
        mNum: 1503,
        mContent:
            '햄은 0.3cm * 5cm의 길이로 채썰어 끓는 물에 살짝 데친다음 물기를 제거해 주세요. 콜라 플라워는 2cm의 크기로 잘라 끓는물에 소금을 약간 넣어 데친 뒤 채에 받쳐 식혀 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4b245b84ff975bef8890c90be65ccb1d1.jpg',
        recipeId: 213,
    },
    {
        mNum: 1504,
        mContent:
            '적채는 흐르는 물에 씻은 뒤 물기를 털고 곱게 채썰어 물에 담가 놓아주세요. 완두콩은 물기를 완전히 빼주시고 드레싱 재료들을 고루 섞어서 드레싱을 만들어 주세요! 발사믹드레싱(올리브오일 2큰술, 발사믹식초, 설탕 1큰술씩, 소금, 후춧가루 1작은줄씩)을 골고루 섞을 때 드레싱의 맛이 더욱 산뜻해지기 위해서는 양파나 마늘을 곱게 다져서 넣어주시면 됩니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/455ecf990b4cfd9eec09556b8e7d58e51.jpg',
        recipeId: 213,
    },
    {
        mNum: 1505,
        mContent: '접시에 재료를 돌려담고 드레싱을 끼얹으면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/dfec21c7dc4768e6990d8f1cfce523241.jpg',
        recipeId: 213,
    },
    {
        mNum: 1506,
        mContent: '건조오징어 몸통만 2마리 를 준비했습니다. 냉동실에 있는 재료를 사용했지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6a039e41d60cec731fbccb3ad1e0ee3e1.jpg',
        recipeId: 214,
    },
    {
        mNum: 1507,
        mContent: '물에 24시간 이상을 불리는게 일이지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/81e25851173dcbf05e8c3cf29e9c8d4e1.jpg',
        recipeId: 214,
    },
    {
        mNum: 1508,
        mContent:
            '불린 오징어는 깨끗하게 씻어 준 후 파채칼을 이용해 몸통 안쪽으로 사선으로 교차로 칼집을 넣어 줍니다. 아무래도 건조 오징어라 질긴감이 있어 칼집을 넣어 주었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fe725c10c10d6e4543aedc226e2e5cb81.jpg',
        recipeId: 214,
    },
    {
        mNum: 1509,
        mContent: '그리고 삼각형 지느러미를 자르고 몸통은 길게 반으로 잘라 곱게 채썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d2c33212d5ee486b83b08e9ba39b85cf1.jpg',
        recipeId: 214,
    },
    {
        mNum: 1510,
        mContent: '삼각형지느러미도 곱게 채썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/38a1f831b0105f0deca27a373e530b661.jpg',
        recipeId: 214,
    },
    {
        mNum: 1511,
        mContent: '냄비에 물이 팔팔 끓으면 채썬 오징어를 넣고.....',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c5a6ee040ea3c35c192aded490ca98421.jpg',
        recipeId: 214,
    },
    {
        mNum: 1512,
        mContent: '고루 한번 휘~ 저어 준 후 바로 건져 물기를 충분히 빼 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a9b84b35e15f508d7a99de291915b0ca1.jpg',
        recipeId: 214,
    },
    {
        mNum: 1513,
        mContent: '무말랭이 1컵을 소금 1큰술을 넣은 소금물에 40분이상 불려 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ac152cfa3f4714b2be240b77024a92f91.jpg',
        recipeId: 214,
    },
    {
        mNum: 1514,
        mContent: '소금물에 불린 무말랭이는 빡빡 문질러 씻어 흐르는 물에 헹군 뒤 물기를 꼭 짜 준비한 오징어와 함께 그릇에 담아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/cd4481c563f812e750cc8572fe0023791.jpg',
        recipeId: 214,
    },
    {
        mNum: 1515,
        mContent:
            '고추장 1큰술, 고추가루 2+1/2큰술, 식초 2큰술, 매실청 1큰술,올리고당 1/2큰술, 참기름 1/2큰술, 통깨 1/2큰술, 다진마늘 1/2큰술, 대파 1대를 다져 넣고 조물조물 무쳐 오징어 무말랭이 초무침을 만들어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d942bfd273b4c655ef457d7d0e49fdf91.jpg',
        recipeId: 214,
    },
    {
        mNum: 1516,
        mContent: '김밥에 들어갈 깻잎 15장을 준비해 채썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6d11aa4843d8736e7d0482d74ff3cd071.jpg',
        recipeId: 214,
    },
    {
        mNum: 1517,
        mContent: '밥 2공기, 소금 1/4작은술, 참기름 1큰술, 통깨 1큰술을 넣고 고루 섞어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8459e00687b61ecc829e05356cf52e431.jpg',
        recipeId: 214,
    },
    {
        mNum: 1518,
        mContent:
            '구운 김밥감 위에 준비한 밥 1/3을 덜어 김 3/4위에 고르게 펴 준 후 준비한 깻잎 1/3을 덜어 고루 펴 올리고 오징어 무말랭이 초무침을 올려 단단히 돌~ 말아 줍니다. 요렇게 김밥 3줄을 말아 주었습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/68674ccdda2c91ea703ddbd6871e4ff31.jpg',
        recipeId: 214,
    },
    {
        mNum: 1519,
        mContent: '냄비에 버섯 데칠 물을 끓여 두고 버섯은 가볍게 씻어 두고 파는 송송 썰어 둔다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/29156767e5cea274fe6588278abf4b0f1.jpg',
        recipeId: 215,
    },
    {
        mNum: 1520,
        mContent: '물이 끓으면 버섯을 넣어 살짝 데쳐서 찬물에 헹군다. 약 10초 정도 담갔다가 건졌다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7f6f667509a794b2e39194da4ad5026c1.jpg',
        recipeId: 215,
    },
    {
        mNum: 1521,
        mContent: '헹군 버섯을 얇게 썰어 준 후에 물기를 꼭 짠다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/553614c980bf7924717f3741566386a01.jpg',
        recipeId: 215,
    },
    {
        mNum: 1522,
        mContent: '달군 팬에 식용유를 약간 두르고 버섯과 다진 마늘을 넣어 볶다가 숨이 살짝 죽은 듯 하면 간장을 넣어 계속 볶는다.',
        mPicture: '',
        recipeId: 215,
    },
    {
        mNum: 1523,
        mContent: '버섯이 다 볶아지면 맛을 보고 소금으로 마지막 간을 하고 파, 참기름, 통깨와 후추를 약간씩 넣고 섞은 후 불에서 내린다.',
        mPicture: '',
        recipeId: 215,
    },
    {
        mNum: 1524,
        mContent: '양상추, 브로콜리는 한 입 크기로 뜯고 당근, 파프리카는 얇게 채 썰어 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/dc0a0d9589556752fc6009a9a7a1fb7b1.png',
        recipeId: 216,
    },
    {
        mNum: 1525,
        mContent: '닭가슴살은 소금, 후추, 맛술로 잠시 재운다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f56d20032b4ca1535a61457af20d25351.png',
        recipeId: 216,
    },
    {
        mNum: 1526,
        mContent: '한 김 오른 찜기에 닭가슴살, 브로콜리를 쪄서 준비한다. 찜기 – 브로콜리는 5분, 닭가슴살은 15분이상 쪄주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ee321681f0aba2c2082ceaebcd4341871.png',
        recipeId: 216,
    },
    {
        mNum: 1527,
        mContent: '볼에 소스 재료는 넣어 소스를 만든다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4a70549c4d1b69c14de48d70e8511b761.png',
        recipeId: 216,
    },
    {
        mNum: 1528,
        mContent: '그릇에 채소, 한입크기로 준비한 닭가슴살을 담고 소스를 뿌려 완성한다. 그릇',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4d7f10194858a28b10c81714848324841.png',
        recipeId: 216,
    },
    {
        mNum: 1529,
        mContent: '순심Time☆',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1f8e9a96e48b54cb6a196c6e55a71f911.png',
        recipeId: 216,
    },
    {
        mNum: 1530,
        mContent: '닭가슴살을 토막 낸 후 볼에 넣고 물을 잠길 정도 넣은 후 식초를 넣어 약 20~30분 정도 소독하여 헹군다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/11d067d3fa028e0319eb8b53a21da56c1.png',
        recipeId: 216,
    },
    {
        mNum: 1531,
        mContent: '닭가슴살, 당근, 브로콜리는 곱게 다져서 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4a9f724ec41c3c61d3d979ec39aea1961.png',
        recipeId: 216,
    },
    {
        mNum: 1532,
        mContent: '다진 재료와 밀가루를 볼에 넣어 버무린 후 소세지 모양으로 만든다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e650930800a22ca19effef2b07ecaa811.png',
        recipeId: 216,
    },
    {
        mNum: 1533,
        mContent: '종이 호일에 감싸 한김 오른 찜기에 약 20분간 쪄내 완성한다. 찜기 , 종이호일',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6ca994262d4852e97ccb6d577a2fa1b31.png',
        recipeId: 216,
    },
    {
        mNum: 1534,
        mContent: '양파 반개, 샐러리, 당근, 치킨스톡큐브를 넣고 물 700ml를 부어 20분간 끓여 육수를 내주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1535,
        mContent: '나머지 양파 반개는 채썰어주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1536,
        mContent: '고구마는 납작하게 썰어주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1537,
        mContent:
            '팬에 버터를 녹이고, 고구마, 양파를 넣어 5분간 중간불에서 볶다가 끓여둔 육수를 부어주세요. 고구마가 무를 때까지 뚜껑을 덮고 중간불에서 약 25분간 끓여주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1538,
        mContent: '고구마가 익으면 4를 믹서기에 넣고 곱게 간 다음 냄비에 부어주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1539,
        mContent: '황설탕을 넣어주세요. 고구마의 단맛에 따라 설탕의 양은 가감해주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1540,
        mContent: '마지막으로 코코넛 밀크를 넣고 약한 불에서 한소끔만 끓여주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1541,
        mContent: '스프볼에 담고 코코넛 밀크와 시나몬가루를 약간 뿌려주세요.',
        mPicture: '',
        recipeId: 217,
    },
    {
        mNum: 1542,
        mContent:
            '아침에 파프리카 계란찜에 들어 간 시리얼은 켈로그 리얼 그래놀라 입니다 고소한 그래놀라와 더불어 다섯 가지 진짜 과일이 들어간 시리얼 제품이에요 켈로그 리얼 그래놀라는 10대 슈퍼푸드로 잘 알려진 귀리를 포함 쌀 밀 옥수수 등 네가지 곡물을 꿀에 섞어 오븐에 구운 제품으로 달콤함과 고소함을 동시에 느낄수 있는 시리얼 이랍니다 거기에 사과 딸기 크랜베리 바나나 건포도 등 진짜 과일도 담겨져 있어요 저는 개인적으로 바삭한 식감 때문에 요거 좋아라 하는데 우유에 그대로 말아서 먹어도 맛있지만 필수 5대 영양소가 다 들어 있는 시리얼 요리에 더하면 영양도 업up~ 특히나 다이어트 할때 칼로리는 줄이는 대신 놓치기 쉬운게 바로 영양소거든요 시리얼을 더하면 영양소를 챙길 수 있으니 칼로리 낮은 요리를 만들때 종종 사용하게 됩니다 저는 파프리카 계란찜 할때 종종 식사대용으로 만들때 밥을 넣었다가 요즘은 시리얼로 대신 하고 있어요 칼로리는 낮추면서 든든함과 영양까지 더하니 넘 괜찮더라구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/eb6b47572bbb6198df9205084abe8e5b1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1543,
        mContent: '본격적으로 만들어 볼께요 파프리카는 깨끗이 씻어 준비 했습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7cd0c9295fcbecd88afd511b8ffff71b1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1544,
        mContent: '윗둥을 자르고 가운데 씨를 과도를 이용해서 제거해 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f535ce9d72355ffb42f9be23592138c91.jpg',
        recipeId: 218,
    },
    {
        mNum: 1545,
        mContent:
            '계란물 만들기 저는 계란 작은거 초란 3개 넣으니 딱 알맞더라구요 계란 3개 (작은것) 다진양파 다진당근 다진대파 버섯 등등 원하시는 야채넣어 주세요 그런 다음 약간의 계란 비린내를 잡기 위해 미림 1큰술 소금 2꼬집 후추가루 약간 더했습니다 그리고 고루 잘 저어 주세요 여기에 참기름 2-3방울 더해 주면 더 맛있답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/aa266069c999dde7035f2bb0e503397a1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1546,
        mContent: '속을 파낸 파프리카 안에',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/cc14964b011d03dbf3e7e01598aa5fff1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1547,
        mContent: '리얼 그래놀라 2큰술 넣어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/76f4eb6039c22426e8e8381939d6f63e1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1548,
        mContent:
            '그런 다음 계란물을 2/3정도 채워 줍니다 절반만 채우면 안정적이긴 한데 속이 좀 비는 느낌의 계란찜이 되어서 2/3정도 채우시는게 가장 좋구요 근데 욕심 내에서 가득 채우시면 완전히 넘쳐서 이쁘게 안나와요 이정도로만 채우 주심 딱 적당하더라구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bc0b4764e947828a7ef7210b2b2cef901.jpg',
        recipeId: 218,
    },
    {
        mNum: 1549,
        mContent: '파프리카 오목한 접시에 담고 하나씩 전자렌지에 4분 30초 데우면 됩니다 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f530d3160d1d27e03b9fde0cf57ddf991.jpg',
        recipeId: 218,
    },
    {
        mNum: 1550,
        mContent:
            '랩을 씨우지 않고 그대로 넣어서 돌려 주세요 저는 2분 돌린 다음 젓가락으로 콕콕 눌러 주고 다시 2분 30초 돌리니 넘치지 않고 봉긋하게 파프리카 계란찜이 완성 되었답니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0574dd29afd92f54dc1889b4a04254be1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1551,
        mContent: '먼저 2분 돌리면 이런 상태 안에는 덜 있었어요 젓가락으로 콕콕 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f74f6f1261214378ccd11cd89cc619bd1.jpg',
        recipeId: 218,
    },
    {
        mNum: 1552,
        mContent:
            '다시 2분 30초 돌려주면 계란물이 넘치지 않고 속까지 아주 잘 익은 파프리카의 단맛과 더불어 부드러운 계란찜 까지 맛 볼수 있는 파프리카 계란찜 완성 입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6da90171287f032eaf89cc4e1a2f46031.jpg',
        recipeId: 218,
    },
    {
        mNum: 1553,
        mContent: '식사대용으로 종종 만들어 봤던 요리인데 시리얼 더해도 괜찮네요 먼가 조금더 든든한 느낌이랄까요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1bc0d8d72cf4c9decc9386769aafe7f31.jpg',
        recipeId: 218,
    },
    {
        mNum: 1554,
        mContent: '말 안하면 시리얼이 들어갔다고 생각이 안 들어요 ^^ 그 만큼 동화 되어서 잘 어울렸던 요리',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c6ee1d7f3b4e0fcc600b9c2ed21a1e201.jpg',
        recipeId: 218,
    },
    {
        mNum: 1555,
        mContent:
            '먹는 방법 궁금하시죠 ~ 잘라서 드심 됩니다 ^^ 요렇게 저는 4등분 잘라서 접시에 내어 놓아요 영양까지 생각한 파프리카 요리 한끼식사로 정말 든든 하답니다 아이간식으로도 좋구요 아침으로 어른들 식사로도 참 괜찮은 레시피 에요 5대 필수 영양소가 골고루 들어 있는 시리얼 조금 색다르게 즐겨 보세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/382c70a85ca0e5940a68e0ec56c6a0d91.jpg',
        recipeId: 218,
    },
    {
        mNum: 1556,
        mContent: '닭가슴살은 굵게 채 썰어 양념재료에 버무린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/27f729450ab38fba32c61a89a3dcab191.png',
        recipeId: 219,
    },
    {
        mNum: 1557,
        mContent: '버섯은 굵게 채 썰어 양념재료에 버무린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/700b92172d47c7c0bc6461afa47d18231.png',
        recipeId: 219,
    },
    {
        mNum: 1558,
        mContent: '팬에 식용유를 두르고 닭가슴살을 넣고 익혀서 빼둔다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/30162eda2b68511b178b67aca4c056451.png',
        recipeId: 219,
    },
    {
        mNum: 1559,
        mContent: '팬에 식용유를 두르고 양파, 대파, 당근, 버섯을 넣고 센불에 볶는다. 팬 - 약불로 볶으면 버섯에서 물이 많이 나와요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/569db1eafc7a0e866a1eadc91829657e1.png',
        recipeId: 219,
    },
    {
        mNum: 1560,
        mContent: '볶아둔 닭가슴살을 넣고 굴소스, 설탕, 참기름을 넣고 양념한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3c4b6a63de3022b7f2dd00b69e53ba691.png',
        recipeId: 219,
    },
    {
        mNum: 1561,
        mContent: '접시에 담고 깨를 뿌려 완성한다. 접시',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5b81b15152c2a9b09688d22ffd17a56c1.png',
        recipeId: 219,
    },
    {
        mNum: 1562,
        mContent: '식빵을 2등분 한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6dee312edfc90d236ad7ff4656a284ec1.png',
        recipeId: 220,
    },
    {
        mNum: 1563,
        mContent: '버터를 전자레인지에 40초간 돌려 녹인 후 설탕, 다진 마늘, 파슬리가루를 넣어 섞는다. 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ab27680702e96a50b1d691fd9e61e4131.png',
        recipeId: 220,
    },
    {
        mNum: 1564,
        mContent: '식빵에 마늘 소스를 바른다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b56dcbdfce92230dc4bd1bf76a5e85221.png',
        recipeId: 220,
    },
    {
        mNum: 1565,
        mContent: '200도 예열된 오븐에 10~12분간 구워 완성한다. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/26307841db065d9d8c03633d69a5a53f1.png',
        recipeId: 220,
    },
    {
        mNum: 1566,
        mContent: '실온에 둔 버터를 풀어 준 후 설탕을 넣고 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/acf28432198140b372691d68cda3e08c1.png',
        recipeId: 221,
    },
    {
        mNum: 1567,
        mContent: '달걀을 2번 나눠 넣고 바닐라익스트랙을 넣는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9b78936f69a2d7244c0f1e29889553241.png',
        recipeId: 221,
    },
    {
        mNum: 1568,
        mContent: '박력분, 코코넛파우더, 베이킹파우더를 체쳐 넣어 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8c14d0dce6ccc28211ec84cd906c149a1.png',
        recipeId: 221,
    },
    {
        mNum: 1569,
        mContent: '어느 정도 섞이면 소금, 우유를 넣어 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/08e39bcb93a4ff9c7ab6af4f2151569e1.png',
        recipeId: 221,
    },
    {
        mNum: 1570,
        mContent: '파인애플 60g을 작게 썰어 넣는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/205e52a5bc4557edaa68372a07f05b9d1.png',
        recipeId: 221,
    },
    {
        mNum: 1571,
        mContent: '유산지를 깐 머핀 틀에 반죽을 80% 정도 채우고 파인애플 조각 40g을 올린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/620e1ed7bbc2ddf9859742013b246d7f1.png',
        recipeId: 221,
    },
    {
        mNum: 1572,
        mContent: '180도로 예열된 오븐에 30분 정도 구운 후 파인애플잼을 발라 코팅해 완성한다. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7348c0e85a806aaa8a093477319a24de1.png',
        recipeId: 221,
    },
    {
        mNum: 1573,
        mContent: '냄비에 물을 넣고 잠시 끓인 뒤 말린 꽃을 넣고 끓어 오르면 불을 끈다. 냄비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0111af948220b2a7fd9a2653be5d96d11.png',
        recipeId: 222,
    },
    {
        mNum: 1574,
        mContent: '1을 식힌 후 얼음틀에 붓고 냉동실에 얼린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/26e97f684da5961cf11732e1b77559971.png',
        recipeId: 222,
    },
    {
        mNum: 1575,
        mContent: '레몬 1개는 슬라이스해 장식용으로 쓰고 4개는 즙을 짠다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/eab90bb245b61dc1fd270ef90548738e1.png',
        recipeId: 222,
    },
    {
        mNum: 1576,
        mContent: '믹서기에 각각 얼음과 파란 얼음을 살짝 간 후 잠시 얼린다. 믹서기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2bf16957f382a5468a7b37f2a0ee94121.png',
        recipeId: 222,
    },
    {
        mNum: 1577,
        mContent: '컵에 분쇄한 투명 얼음, 레몬즙, 파란 얼음을 넣고 탄산수를 부은 후 레몬으로 장식해 완성한다. 컵',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/14fbac764a8bf3fbc4230995cb73ae6b1.png',
        recipeId: 222,
    },
    {
        mNum: 1578,
        mContent: '볼에 달걀을 풀고 우유를 넣는다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/205ddfd172bd62850de8acd2830831ae1.png',
        recipeId: 223,
    },
    {
        mNum: 1579,
        mContent: '초코핫케이크가루, 초코칩을 넣어 섞는다. - 너무 많이 섞으면 질겨지니 가볍게만 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/15757bfd158cea2171f7182494899e191.png',
        recipeId: 223,
    },
    {
        mNum: 1580,
        mContent: '밥솥에 포도씨유를 골고루 바른 후 반죽을 붓고 밥통에 찜기능으로 취사해 완성한다. 밥솥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5dcebca2d5e922be300817debb7de4371.png',
        recipeId: 223,
    },
    {
        mNum: 1581,
        mContent: '냄비에 올리고당, 설탕을 넣고 약불로 끓인다. 냄비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9f7253dbca8d822a970d37928c20db8b1.png',
        recipeId: 224,
    },
    {
        mNum: 1582,
        mContent: '설탕이 녹으면 죠리퐁에 부어 잘 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2ea081e61c3671b178ca0c84f5fc289c1.png',
        recipeId: 224,
    },
    {
        mNum: 1583,
        mContent: '틀에 죠리퐁을 넣은 후 냉장고에 30분 정도 굳혀 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/adeec701548da91808490562e788dbf51.png',
        recipeId: 224,
    },
    {
        mNum: 1584,
        mContent: '핫케잌가루에 물,계란넣어 반죽해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/86c54026faf7e4025322be0915ea86941.jpg',
        recipeId: 225,
    },
    {
        mNum: 1585,
        mContent: '반죽에 비엔나소세지를 퐁당퐁당 넣어주세요.(소세지에 적당히 묻게 농도 조절)',
        mPicture: '',
        recipeId: 225,
    },
    {
        mNum: 1586,
        mContent: '반죽묻은 소세지를 빵가루에 굴려주세요.',
        mPicture: '',
        recipeId: 225,
    },
    {
        mNum: 1587,
        mContent: '예열한 기름에 바삭하게 튀겨 취향에 따라 설탕뿌리고 케찹 뿌려 드시면 꿀맛^^',
        mPicture: '',
        recipeId: 225,
    },
    {
        mNum: 1588,
        mContent: '찹쌀은 씻어 3시간쯤 불린 다음 찜통에 넣어 20분 동안 쪄주세요.',
        mPicture: '',
        recipeId: 226,
    },
    {
        mNum: 1589,
        mContent: '냄비에 망고를 제외한 나머지 재료를 넣고 끓여 코코넛 소스를 완성해주세요.',
        mPicture: '',
        recipeId: 226,
    },
    {
        mNum: 1590,
        mContent: '찐 찹쌀밥에 ②의 소스를 절반만 넣고 버무려주세요.',
        mPicture: '',
        recipeId: 226,
    },
    {
        mNum: 1591,
        mContent: '망고를 반으로 잘라 한쪽의 속을 파낸 뒤 ③을 담고 남은 소스를 뿌려 주세요.',
        mPicture: '',
        recipeId: 226,
    },
    {
        mNum: 1592,
        mContent: '닭은 칼집을 낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/71356bb243c1acdf21cfde5805cfeaf31.png',
        recipeId: 227,
    },
    {
        mNum: 1593,
        mContent: '소금, 후추, 술을 넣고 30분간 밑간한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e4425c2f838a19d41b8e6bbfbb22da321.png',
        recipeId: 227,
    },
    {
        mNum: 1594,
        mContent: '지퍼팩에 밑간한 닭, 감자전분을 넣고 흔들어 옷을 입힌다. 지퍼팩',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/be86a46eb1cce5642021c87998308b731.png',
        recipeId: 227,
    },
    {
        mNum: 1595,
        mContent: '예열된 기름에 노릇하게 2번 튀긴다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/27c50d0b812b0af5c0046f47d72a3f1b1.png',
        recipeId: 227,
    },
    {
        mNum: 1596,
        mContent: '팬에 간장양념 재료를 넣고 살짝 끓인다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0297ef38460bbc1dbaced8aab5f3c6c61.png',
        recipeId: 227,
    },
    {
        mNum: 1597,
        mContent: '튀긴 닭고기에 끓인 간장양념을 발라 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a420ac028b15e1926159d6be55c148841.png',
        recipeId: 227,
    },
    {
        mNum: 1598,
        mContent:
            '먼저 청포도 조림부터 만들어볼게요. 청포도는 알알이 떼어준 뒤 볼에 담고, 물을 충분히 부어준 뒤 베이킹소다 1 큰 술을 넣고 잘 풀어줍니다. 이대로 5-10분 정도 담갔다가 흐르는 물에 깨끗이 씻어 체에 밭쳐 물기를 빼주시고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/824a1b16547f9b92b73ebe876f7cfbb91.jpg',
        recipeId: 228,
    },
    {
        mNum: 1599,
        mContent:
            '소스팬에 청포도와 설탕 4 - 5 큰 술, 발사믹 식초 1 큰 술, 미림 1/2 컵을 넣고 중불에서 끓여주다가 중약불에서 은근하게 졸여주세요. (잼이 되기 전까지만 졸여줍니다.) 청포도 조림 만들기 귀찮으신 분들은 잼으로 대신하셔도 좋아요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e6250009e1fc902fd9f0b0d4f88f01c01.jpg',
        recipeId: 228,
    },
    {
        mNum: 1600,
        mContent: '식빵은 노릇노릇하게 구워주고, 과일은 취향껏 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c83a4c8f88c9e7fcfd63049ba6013fef1.jpg',
        recipeId: 228,
    },
    {
        mNum: 1601,
        mContent:
            '식빵은 4등분 해주고요. 크림치즈를 듬뿍 발라줍니다. 그리고 그 위에 청포도 조림(또는 잼)을 살짝 바르고, 내가 좋아하는 과일들도 조금씩 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/97640db66b17a09b7b84216a7ea203471.jpg',
        recipeId: 228,
    },
    {
        mNum: 1602,
        mContent:
            '그리고 그 위에 켈로그 리얼 그래놀라를 솔솔 뿌려 마무리! 넘 먹음직스러워서 만들자마자 하나 입에 쏘옥 넣고 맛을 봤는데요. 어머어머 뭐 이리 맛있어 +_+',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4fd8b55273159677a5d811f6b602cfd31.jpg',
        recipeId: 228,
    },
    {
        mNum: 1603,
        mContent:
            '부드러운 크림치즈와 새콤달콤한 청포도 조림, 상큼한 방울토마토, 바삭하고 고소한 켈로그 리얼 그래놀라가 묘한 조화를 이루며 입맛을 up 시키는 느낌 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/aa4635665ddc35862e1469363323d5471.jpg',
        recipeId: 228,
    },
    {
        mNum: 1604,
        mContent:
            '거기다 딸기, 바나나, 크랜베리 등 5가지 진짜 과일이 들어가 있어 더욱 달콤하고, 귀리와 쌀, 밀, 등을 코코넛과 섞어 바삭하게 구운 그래놀라가 70%나 함유되어 있어 더욱 고소한 켈로그 리얼 그래놀라 시리얼에 함유되어 있는 필수 5대 영양소가 영양을 한층 더 높여주니까 아이들 영양간식으로도 참 좋을 것 같아요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/344344c8c4bd230ba25ae5ea96e4ca431.jpg',
        recipeId: 228,
    },
    {
        mNum: 1605,
        mContent: '비주얼도 너무 예뻐서 홈파티메뉴로 손색없는 오픈샌드위치 ♥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/dda54ec0463d133495f6313cca9a9c901.jpg',
        recipeId: 228,
    },
    {
        mNum: 1606,
        mContent:
            '시리얼, 이제 우유에만 먹지 말고 요렇게 간단한 요리로 부족한 영양소도 올리고, 입맛도 올리고, 기분까지 up 시켜보시는 건 어떠세요? ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b759e04ff9326f6b6180b7fb943e4c081.jpg',
        recipeId: 228,
    },
    {
        mNum: 1607,
        mContent: '먼저 재료를 준비해요. 애호박 1/2개와 부추 한 줌, 어슷 썬 청양고추 1개와 홍고추 1개',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0e0356ae7977db07f5057aa3b0ac9c981.jpg',
        recipeId: 229,
    },
    {
        mNum: 1608,
        mContent: '그리고 손질 후 먹기 좋은 크기로 썰어놓은 오징어 1마리와 새우 4마리',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f671fd455f92ea68d85b5691fcaff9461.jpg',
        recipeId: 229,
    },
    {
        mNum: 1609,
        mContent: '부추도 적당한 길이로 잘라주시고요. 애호박은 채쳐서 준비해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/10896409f32d42143072efd3a8fdc35b1.jpg',
        recipeId: 229,
    },
    {
        mNum: 1610,
        mContent: '볼에 부침가루 5 큰 술(수북이)과 물 2/3컵을 넣고 잘 섞어줍니다. (조금 되다 싶으시면 물을 조금 더 넣어주세요.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d3f6dc3a7ace74509b49f8c5d53b40801.jpg',
        recipeId: 229,
    },
    {
        mNum: 1611,
        mContent: '홍고추와 청양고추를 제외한 나머지 재료를 모두 넣은 뒤 재료의 숨이 죽지 않도록 조심스레 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b9702f2bbbf44e061e800d3cbffd27e91.jpg',
        recipeId: 229,
    },
    {
        mNum: 1612,
        mContent:
            '중불로 예열한 팬에 기름을 넉넉히 두르고 반죽을 적당히 올려주세요. 그리고 그 위에 어슷 썬 홍고추와 청양고추를 몇 개 올려 앞뒤로 노릇하게 부쳐줍니다. (이때 전을 너무 자주 뒤집으면 재료들이 마구 떨어져 나가니 주의해서 뒤집어주세요 ^^)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e7831be5a35ac7d0ed429c460740579e1.jpg',
        recipeId: 229,
    },
    {
        mNum: 1613,
        mContent: '그러면 요렇게 노릇노릇 맛있는 해물부추전이 완성돼요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c94fa515f51388cfade0001b5cd67c211.jpg',
        recipeId: 229,
    },
    {
        mNum: 1614,
        mContent: '오징어와 새우가 듬뿍 들어가 더욱 맛있는 해물부추전 ♥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9cd6459fe7f8606e0fdacb2e3e8254ea1.jpg',
        recipeId: 229,
    },
    {
        mNum: 1615,
        mContent: '오늘이 평일만 아니었어도 벌써 막걸리 한 병은 비웠을 텐데, 넘 아쉬워요 ㅎㅎㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/31e63a2954a4cb8b2de5976eca22748c1.jpg',
        recipeId: 229,
    },
    {
        mNum: 1616,
        mContent: '비가 와도 맛있고, 안 와도 맛있는 해물부침개 ♥ 다음에 또 만들어 먹어야지 ♬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d6f893639a4db84a0117b471987e28051.jpg',
        recipeId: 229,
    },
    {
        mNum: 1617,
        mContent:
            '먼저 돼지고기 밑간부터 할게요. 돼지고기 목살은 먹기 좋은 크기로 썰어준 다음 약간의 소금과 후춧가루, 생강가루, 미림 2 큰 술을 넣고 조물조물해주시고요. 이 상태로 10분 정도 재어 둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d8af7e6bb04927d7bea7411bf37627cd1.jpg',
        recipeId: 230,
    },
    {
        mNum: 1618,
        mContent:
            '고기를 잴 동안 야채를 손질하도록 해요. 양파와 애호박은 큼직하게 썰고, 표고버섯은 슬라이스로 준비합니다. 쪽파 또는 대파는 송송 썰어주시고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/c3da9d9e2ff4a28ab691125f49cff81a1.jpg',
        recipeId: 230,
    },
    {
        mNum: 1619,
        mContent: '감자도 큼직하게 썰어주세요. (저는 알감자로 준비했어요 ^^)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/931a6a76b10e58d302d29bc0fb63982f1.jpg',
        recipeId: 230,
    },
    {
        mNum: 1620,
        mContent: '중약 불로 예열한 냄비에 식용유 2 큰 술과 밑간한 돼지고기와 설탕 1/2 작은 술을 넣고 익을 때까지 충분히 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/eb6fd2eb0e17e6d2bbf353671776b0d21.jpg',
        recipeId: 230,
    },
    {
        mNum: 1621,
        mContent:
            '약불로 줄여서 고춧가루 2 큰 술과 고추장 1.5 큰 술을 넣고 5분가량 볶아줍니다. 이때 센 불에서 볶으시면 양념이 탈 수 있으니 약한 불에서 볶아주시고요. 물 1400ml를 넣고 끓어오르면,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7b02c1cb8a02ac606aa6c7e3fd6c9f061.jpg',
        recipeId: 230,
    },
    {
        mNum: 1622,
        mContent: '감자를 넣어주세요. 이어서 멸치 액젓 1 큰 술과 국간장 1 큰 술, 다진 마늘 1 큰 술, 미림 1 큰 술을 넣고 한소끔 끓여주시고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3103000b9022655b34c30ffa12b592641.jpg',
        recipeId: 230,
    },
    {
        mNum: 1623,
        mContent: '양파와 애호박, 표고버섯을 넣고 약불에서 25분 이상 푹 끓여주세요. 그래야 맛이 더욱 깊어지거든요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d11ff81887bab9b278dc711a8770b0f51.jpg',
        recipeId: 230,
    },
    {
        mNum: 1624,
        mContent:
            '30분 정도를 푹 끓여낸 돼지고기 고추장찌개의 비주얼 좀 보세요 +_+ 정말 먹음직스러워 보이지 않나요? 자 이제 맛을 한 번 보시고 부족한 간은 소금으로 채워주도록 해요. 그러면 칼칼한 고추장찌개 만드는 법은 요렇게 끝이 나요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/28c429605c7a4c5c0915199dbb9864681.jpg',
        recipeId: 230,
    },
    {
        mNum: 1625,
        mContent: '은근한 불에서 푹 끓여내서 그런지 국물도 진하고, 돼지고기와 채소도 야들야들하니 넘 맛있어요!!! +_+',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/32eefb0d7a84009a3fcf75e5915121ff1.jpg',
        recipeId: 230,
    },
    {
        mNum: 1626,
        mContent: '새하얀 쌀밥 위에 고추장찌개 한 숟가락 푹 퍼 담아 대충 비벼 조미김에 딱 싸 먹으면 꿀맛도 요런 꿀맛이 없다는 거 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d1c0e1855a731ee531ae5b167f6debac1.jpg',
        recipeId: 230,
    },
    {
        mNum: 1627,
        mContent: '집 나간 입맛도 돌아오게 만드는 칼칼한 돼지고기 고추장찌개 ~ 효자 레시피가 따로 없네요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d538f3bd405ff41955f2d8ffd13bade61.jpg',
        recipeId: 230,
    },
    {
        mNum: 1628,
        mContent:
            '통오징어는 내장과 껍질 제거 후 먹기 좋은 크기로 썰어주세요. (몸통은 링 모양, 다리는 손가락 길이 정도로) 새우는 몸통 껍질과 내장을 제거해주시고요. 바지락은 해감해서 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ce4a2e88c9011756ed910d235da183a21.jpg',
        recipeId: 231,
    },
    {
        mNum: 1629,
        mContent:
            '쌀은 요리 30분 전 미리 불려놔주시고요. 불린 쌀은 체에 밭쳐 물기를 빼주세요. 양파와 파프리카는 다져서, 방울토마토는 입자감 있게 썰어주세요. 로즈마리와 슬라이스 레몬은 데코 용이니 생략 가능합니다 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3f08fb243436863746bdf5369d264c881.jpg',
        recipeId: 231,
    },
    {
        mNum: 1630,
        mContent: '미지근한 물 700ml에 카레 3 큰 술을 넣고 잘 섞어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/0b6d7319679a994ff10cb2b8f67de24c1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1631,
        mContent: '이제 본격적으로 조리를 시작해 볼게요. 소스팬에 올리브유 3 큰 술과 슬라이스 마늘 한 줌, 양파 3 큰 술을 넣고 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/40deac946858a8ecce6a2b82d083acf51.jpg',
        recipeId: 231,
    },
    {
        mNum: 1632,
        mContent: '양파가 투명해지면 손질한 오징어와 새우, 바지락, 미림 3 큰 술을 넣고 중불에서 재료를 적당히 익혀주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a816f0d691d5898610b0343c28e684781.jpg',
        recipeId: 231,
    },
    {
        mNum: 1633,
        mContent: '해산물이 어느 정도 익었다 싶으면 불을 꺼주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3220da7b9860777684e0fc76161968271.jpg',
        recipeId: 231,
    },
    {
        mNum: 1634,
        mContent:
            '이번에는 프라이팬에 올리브유 3 큰 술과 마늘 한 줌, 다진 양파 3 큰 술을 넣고 양파가 투명해질 때까지 볶아주다가 다진 파프리카, 방울토마토, 미림 1 큰 술을 넣고 가볍게 한 번 볶아줘요. 그리고 나서 불린 쌀을 투척 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5a85e964c8cffb45dd15f43e78a0225b1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1635,
        mContent: '쌀이 투명해질 때까지 잘 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e668d9a9400b12a822993f40781e01da1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1636,
        mContent:
            '쌀이 어느 정도 투명해졌다 싶으면 카레+미지근한 물을 붓고 중약불에서 은근하게 끓여주세요. 그러다 보면 어느새 밥알이 탱글탱글해지는데요. 이때 소금을 적당량 넣고 간을 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/96aba8b917d135d1cb2931a26bf8628c1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1637,
        mContent: '소스팬에 있는 해산물을 넣고 한 번 더 볶아준 뒤 후추를 적당량 뿌리고 마무리!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4c62972653e3627e1fea8b6014c38fb01.jpg',
        recipeId: 231,
    },
    {
        mNum: 1638,
        mContent: '요렇게 해물 빠에야가 완성되었답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d10b7c680ee2c0271001dcd3fe1e79df1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1639,
        mContent: '밥알이 뭉개지지 않고 탱글탱글하니 넘 맛있었던 해물빠에야 ♥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/846eb6bf8de59b73b422a8d9c0d0fc771.jpg',
        recipeId: 231,
    },
    {
        mNum: 1640,
        mContent: '매운 양념이 들어가지 않아 아이들 먹이기에도 넘 좋아요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/43938120944b4d20f44cbaa2c10802aa1.jpg',
        recipeId: 231,
    },
    {
        mNum: 1641,
        mContent: '손님 초대요리로도 good ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ff69aaecb5b0971109a530550636f1e81.jpg',
        recipeId: 231,
    },
    {
        mNum: 1642,
        mContent: '분량의 재료를 준비해주세요. 느타리버섯은 밑동을 자르고 먹기 좋게 찢고 양파는 채 썰어주세요. 느타리버섯 1줌, 양파 1/4개',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/29f3a132840241a82e80156b3561b97c1.jpg',
        recipeId: 232,
    },
    {
        mNum: 1643,
        mContent:
            '분량의 재료를 넣어 양념장을 만들어 주세요. 다진마늘 1t, 고춧가루 1t, 간장 3t, 물 3t, 후추 톡톡 양념장은 입맛에 따라 가감해주세요. 양념재료는 모두 티스푼을 사용했답니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e44855517e99ea1e2917b19516a2275c1.jpg',
        recipeId: 232,
    },
    {
        mNum: 1644,
        mContent:
            '팬에 고추기름 3T, 다진파 1줌 넣어서 약불에서 파기름을 만들어주세요. 고추기름 3T, 다진파 한줌 약불 고추기름 대신 그냥 기름을 사용하셔도 좋아요:)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/27ec41457f15efa92f7b087ec9f29af21.jpg',
        recipeId: 232,
    },
    {
        mNum: 1645,
        mContent: '파향이 올라오면 센불로 올리고 양파를 넣어 약 30초간 볶아주세요. 양파 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ee8540352647da4d76548d3fc451745e1.jpg',
        recipeId: 232,
    },
    {
        mNum: 1646,
        mContent: '그 다음 느타리버섯을 넣어 약 30초간 볶아주세요. 느타리버섯 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3c52e451accae4540231beead184c8121.jpg',
        recipeId: 232,
    },
    {
        mNum: 1647,
        mContent: '그 다음 양념장을 넣어 약 2분간 볶아주세요. 양념장 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8eaca3b0cc85d548273bc914a315a7d41.jpg',
        recipeId: 232,
    },
    {
        mNum: 1648,
        mContent: '마무리로 불을 끄고 참기름 넣어 한번 더 섞으면 완성입니다. 참기름 1t 참기름 넣기 전에 간을 보고 싱거우면 소금으로 맞춰주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3df0c0cbb69afc91627fb6537864eb851.jpg',
        recipeId: 232,
    },
    {
        mNum: 1649,
        mContent: '접시에 밥을 담고 그 위에 볶아진 느타리버섯을 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5013f575d1ad4b9ae4369a30f3c0a62f1.jpg',
        recipeId: 232,
    },
    {
        mNum: 1650,
        mContent: '라면을 세개를 준비해주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/048c73191a5e5e2488ed7492afcd8b9f1.jpg',
        recipeId: 233,
    },
    {
        mNum: 1651,
        mContent: '물을 끓이는 동안 라면 세개를 다뜯어주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f283aab9df58c951783ef6e7e76e6f141.jpg',
        recipeId: 233,
    },
    {
        mNum: 1652,
        mContent: '물이 다 끓으면 라면 세개를 다 넣어줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/fd77c49abdf177390f71483b045c38f01.jpg',
        recipeId: 233,
    },
    {
        mNum: 1653,
        mContent: '면을 끓일동안 스프를 다 뜯어줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/78dc96db34ffc1ed56fa8b21de069a461.jpg',
        recipeId: 233,
    },
    {
        mNum: 1654,
        mContent: '스프는 라면이 요정도로 꼬들꼬들하게 익었을때 넣어줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bf6c55bd759f97574478aa33c7a7a31d1.jpg',
        recipeId: 233,
    },
    {
        mNum: 1655,
        mContent: '요렇게끓으면 취향에따라 계란을 두개넣어주세요! 절대 노른자를 터뜨리지 마시고 계란을 넣은후 1분뒤에 불을 꺼줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2307bde7068f8929f74baa562f2808001.jpg',
        recipeId: 233,
    },
    {
        mNum: 1656,
        mContent: '그러면 이렇게 맛있는 라면이 짠!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8efa6f3b9cbef2337ce97df9d14f043f1.jpg',
        recipeId: 233,
    },
    {
        mNum: 1657,
        mContent: '슬라이스한 오이를 소금에 10분간 절여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/81a71718ec56e7c45c3bde723b4f6dad1.jpg',
        recipeId: 234,
    },
    {
        mNum: 1658,
        mContent: '잘 절여진 오이를 면보에 넣고 짜주세요. 이렇게 짜줘야 아삭하고 맛나더라고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6457f7d3895356cb98a2f865e4a00d671.jpg',
        recipeId: 234,
    },
    {
        mNum: 1659,
        mContent: '짠 오이를 들기름을 넣고 1분간 강불에서 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/6c2c103168c5a5d75c27deb37b9ded621.jpg',
        recipeId: 234,
    },
    {
        mNum: 1660,
        mContent: '그리고 다진마늘을 넣고 1분 더 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/dc899cf1a2ab175944578333697e40501.jpg',
        recipeId: 234,
    },
    {
        mNum: 1661,
        mContent: '후추가루와 통깨를 뿌려서 마무리!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/02/c6c1f1e9c166111e21749b40c96003f51.jpg',
        recipeId: 234,
    },
    {
        mNum: 1662,
        mContent:
            '분량의 간장, 물엿, 설탕, 물을 잘 섞은 후 간을 봅니다 달콤짭조름한 정도면 딱 적당해요, 너무 짜거나 달지않게 해주세요. 너무 짜다면 물을 조금더 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1916f7f8292ef49a903bcf7f257562a31.jpg',
        recipeId: 235,
    },
    {
        mNum: 1663,
        mContent: '보이는것처럼 양파, 대파, 다시마와 함께 넣어줍니다. 메츄리알도 한번에 같이 넣어주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3e291f6190b6f543c32157c30a1b01bf1.jpg',
        recipeId: 235,
    },
    {
        mNum: 1664,
        mContent: '어느정도 3-5분정도 중불에서 끓인 후 다시마를 빼고 조려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0cece8fc7f99cfb49231b876a41aeab31.jpg',
        recipeId: 235,
    },
    {
        mNum: 1665,
        mContent:
            '메추리알의 색상을 보면 대략 완성정도를 가늠할 수 있는데요 간을 보면서 간장과 물엿은 가감해주새요. 저는 이 단계에서 청량고추를 넣었어요.청량고추가 가장 포인트! 이걸 넣어야 약간의 느끼한 달걀맛을 깔끔하게 잡아줄 수 있어요. 이 단계에서 통마늘을 넣어주어야 더 질감이 살아있고 깨끗한것 같아요. 미미네코는 좀 귀찮아서 첨에 넣었는데 으깨지니 여러분은 중간단계에서 넣어주세요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a745768c854b18266eaba0292e90fc4a1.jpg',
        recipeId: 235,
    },
    {
        mNum: 1666,
        mContent:
            '지저분한 건더기야채는 빼버리고 자작하게 국물이 있을 정도로만 조려준 후 참기름 약간과 깨소금을 뿌리면 완성~! 완성시 국물이 어느정도 있어야 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/83009f080d33bad5124807a4071be1771.jpg',
        recipeId: 235,
    },
    {
        mNum: 1667,
        mContent:
            '하지만 무엇보다 사천식 마파두부의 핵심은 화조가 아닐까 생각합니다. 입이 얼얼해지는 맛을 내는 이 알갱이를 비닐로 저렇게 포장해서 2000원 정도에 판매하니 참고하세요 ^^ 냄새를 맡아보고 강하게 나는 것을 사시면 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/370c45817551d3add69dfb864b10d3b61.jpg',
        recipeId: 236,
    },
    {
        mNum: 1668,
        mContent:
            '저는 얼싸하고 혀가 마비되는듯한 이 맛에 중독이 되서..^^ 호불호가 갈리는 맛입니다. 참고하셔서 안맞으시면 약간만 넣으세요.. 하지만 이것이 들어가야 중국사천식 마파두부라고 할 수 있겠네요..',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/814353a91feead312a8c1af3574b2d341.jpg',
        recipeId: 236,
    },
    {
        mNum: 1669,
        mContent: '두부 1모를 조금 먹음직한 크기로 잘라주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/c6d396e6902723306bf735efa4421ac91.jpg',
        recipeId: 236,
    },
    {
        mNum: 1670,
        mContent: '끓는물에',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/e17f7133efd3d26de9fb7f5ef3dc685b1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1671,
        mContent: '잠깐만 데쳐주었습니다. 단단해지라고. 30초정도 데친후 건져냅니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/6f113fb20a3d25de997ca2b2875159c11.jpg',
        recipeId: 236,
    },
    {
        mNum: 1672,
        mContent:
            '갈은 돼지고기는 한팩의 1/3정도 사용했어요. 취향에 따라 가감하여 사용하시면 되요. 돼지고기를 많이 넣으면 상대적으로 마파두부의 전체 고소함이 강해지고, 줄이면 매운맛이 더 강해지지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/7abdf5d75851c5025cd2d65eff042fe01.jpg',
        recipeId: 236,
    },
    {
        mNum: 1673,
        mContent:
            '시중에 파기름이 나와있어 궁금해서 샀는데 중식을 하기에는 꽤 괜찮습니다. 없는분은 그냥 기름을 넣어도 상관없구요, 약불로 조리할 겁니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/e529dc680d9374bb0fd87a41034f17f01.jpg',
        recipeId: 236,
    },
    {
        mNum: 1674,
        mContent:
            '저는 그동안 꽤 많이 사용했네요, 또 사올예정이랍니다. 중식 매운맛을 내는데는 최고인듯~! 이렇게 고추씨와 빨간고추 다진살이 굵직하게 들어있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/cfc752df7c1bed05a2fc31bb376c125e1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1675,
        mContent:
            '약한불에서 양념(파기름2큰술, 고추씨소스 2큰술, 고추기름 2~3큰술, 두반장소스 2큰술) 섞으며 볶아주세요. 불이 강하면 다 탈수 있으니 주의! 고추기름의 양은 넉넉히 해주셔야 해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/2b09f02dba7cec99ed94e4cdcabf5db21.jpg',
        recipeId: 236,
    },
    {
        mNum: 1676,
        mContent: '돼지고기를 넣고 중,약불에 볶아줍니다.타지않게 불조절이 중요합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/fc1eef0fb438e429c1398a034cfdaddc1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1677,
        mContent: '이렇게 기름에 잘 볶아서 돼지고기가 다 익은것 같으면, 간장을 2큰술정도 넣어주세요. 두부가 들어가므로 간을 해야 합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/edcba225b87e02e113eb8f7a22e797731.jpg',
        recipeId: 236,
    },
    {
        mNum: 1678,
        mContent: '대파를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/aca8cf4e9a80c09f0999e6ee803506e11.jpg',
        recipeId: 236,
    },
    {
        mNum: 1679,
        mContent:
            '물기를 뺀 두부를 넣어줍니다. 으깨지지않게 살살 저어가며 양념맛이 두부에 잘 스밀 수 있도록 합니다. 기름이 너무 졸아들면 물을 종이컵 반컵정도 부어가며 중약불로 조려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/5fe8a7e0dcdb7e9c3f2cf976e1b27bb41.jpg',
        recipeId: 236,
    },
    {
        mNum: 1680,
        mContent: '저는 화조의 맛을 더 살리기위해 약간 마무리단계에서 넣었는데요, 약간 으깨거나 빻아서 넣으면 화조의 향과 맛이 더 살아나요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/7e621f27c238e6405ca58928b5a9035a1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1681,
        mContent:
            '바로 먹는것보다 조금 은은하게 조려주면 양념맛이 스며들어 더욱 맛있게 되는것 같아요. 마무리로 전분을 물에 개어서 조금만 넣어주세요. 저는 굳이 안넣어도 좋더라구요. 중국식 마파두부에는 전분이 많이 들어가지 않았던것 같아요. 약간 끈적한 정도.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/4e2cb4721f51036000aa58f4d60d737e1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1682,
        mContent: '이제 거의 완성된듯 합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/a0c148ba4f19ba31038076493736fcef1.jpg',
        recipeId: 236,
    },
    {
        mNum: 1683,
        mContent: '모닝빵은 안에를 잘 파서 준비해 둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/44b58e5dc04e42d64ea879085bd8df561.jpg',
        recipeId: 237,
    },
    {
        mNum: 1684,
        mContent: '햄이 있으심 약간 넣어주면 더 맛있답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/68a6f0a1553bec33e2ae89579d1d92921.jpg',
        recipeId: 237,
    },
    {
        mNum: 1685,
        mContent: '모닝빵에 계란을 잘 넣어주고 그 위에 햄을 얹어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/45c50d5f6dd4bc8feb850506b3a0b2591.jpg',
        recipeId: 237,
    },
    {
        mNum: 1686,
        mContent: '햄 위에 치즈를 얹어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/e59f995912a96137b8bdc5a46b02b1631.jpg',
        recipeId: 237,
    },
    {
        mNum: 1687,
        mContent: '마지막으로 파슬리가루를 뿌려 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5e9c08ef1fd79b83252892565dd1c1ed1.jpg',
        recipeId: 237,
    },
    {
        mNum: 1688,
        mContent: '렌지에 3분정도 돌려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/156389517786aca9e506bf02a2c256a21.jpg',
        recipeId: 237,
    },
    {
        mNum: 1689,
        mContent:
            '팬 위에 쿠키슈 생지를 올리고 실온에 약 15분정도 해동해주세요. 쿠키슈 생지 생지를 손으로 꾹 눌러보았을 때 쏙 하고 들어갈정도로 말랑해지면 해동이 완료된거에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/25fec4bd140be832b9b7d679d1c978b21.jpg',
        recipeId: 238,
    },
    {
        mNum: 1690,
        mContent: '155~160℃로 10분 예열된 오븐에서 40~45분 정도 구워주세요. 155~160℃로 10분 예열된 오븐 155~160℃',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3c8ba5a6946f11cee8db98348f3431001.jpg',
        recipeId: 238,
    },
    {
        mNum: 1691,
        mContent: '다 구운 쿠키슈 생지는 식힘망 위에 올려 완전히 식혀주세요. 완전히 식지 않으면 생크림을 넣을 때 모양이 망가질 수가 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d2f7371a454f795c0d2eaf70d0444ad71.jpg',
        recipeId: 238,
    },
    {
        mNum: 1692,
        mContent: '완전히 식힌 후 슈깍지를 넣은 짤주머니에 생크림을 담아 쿠키슈 바닥부터 크림을 가득 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/11c38d69950119316248b8c6e56b760d1.jpg',
        recipeId: 238,
    },
    {
        mNum: 1693,
        mContent: '혹은 쿠키슈를 반으로 갈라주세요. 빵칼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f9215374fe901e17b21a885c3c85a26e1.jpg',
        recipeId: 238,
    },
    {
        mNum: 1694,
        mContent: '바닥면부터 생크림을 동그랗게 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/89793691f766310a49597832472b53831.jpg',
        recipeId: 238,
    },
    {
        mNum: 1695,
        mContent: '데코펜으로 귀엽게 꾸며주세요. 데코펜',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/53ffcdf4147d0e1cfe17ac96104bd5361.jpg',
        recipeId: 238,
    },
    {
        mNum: 1696,
        mContent: '계란은 그릇에 깨준 후 우유가 있으면 우유를 미리 넣어 설렁설렁 대충 섞어주세요. 우유를 넣으면 훨씬 부드러워요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f324884ff3f24730c7bf27b79ae5683f1.jpg',
        recipeId: 239,
    },
    {
        mNum: 1697,
        mContent: '기름은 두르지 않고 버터 1/2큰술을 팬에 넣어준 후 녹여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d58e8b6bd9d81d7cd004be98a33c791d1.jpg',
        recipeId: 239,
    },
    {
        mNum: 1698,
        mContent: '버터가 녹으면 준비한 우유+계란을 전부 부어주세요. 면적이 작은 팬을 사용하면 만들기가 훨씬 수월하답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/70e6c04eee8ec35d8d60472f987a107c1.jpg',
        recipeId: 239,
    },
    {
        mNum: 1699,
        mContent: '소금은 1/2작은술정도로 한 꼬집정도를 넣어주세요. 손으로 솔솔 골고루 뿌려줘야 한곳이 뭉치지 않아 짜지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b74633b682e0fe1b1d834c53e8accfa71.jpg',
        recipeId: 239,
    },
    {
        mNum: 1700,
        mContent:
            '밑면이 서서히 익기 시작하면 여기서 위쪽부터 지그재그로 Z자를 그려주면서 휘휘 휘저어주세요. 나무도구나 실리콘도구를 사용해야 팬이 망가지지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/3fbe9e40cdef415b6e930ed118d1bfde1.jpg',
        recipeId: 239,
    },
    {
        mNum: 1701,
        mContent: '밑면이 한번 익기 시작하면 1분도 안되어 이렇게 몽글몽글 완성돼요. 완전히 익기보다는 살짝 반숙상태가 부드럽고 맛이 좋답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/07bc9d205bd20db9acadb16b3656b46b1.jpg',
        recipeId: 239,
    },
    {
        mNum: 1702,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d334f02ee0092ba68caf361e8dfa92ef1.jpg',
        recipeId: 240,
    },
    {
        mNum: 1703,
        mContent: '- 김치 양념 재료 모두 넣어 섞기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a06efb32ca3205af85f3c4b6e9eff4221.jpg',
        recipeId: 240,
    },
    {
        mNum: 1704,
        mContent: '- 김치 건더기 넣어 버무리기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/b16f0944745561e9840418b6a343e8af1.jpg',
        recipeId: 240,
    },
    {
        mNum: 1705,
        mContent: '맛을 보고 간이 부족하면 소금 추가, 국수를 넣으면 싱거워지니 전체적으로 간은 좀 쎄게 해주세요. - 오이는 채 썰어 준비하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/718276443e56a065a33b71aa659307ed1.jpg',
        recipeId: 240,
    },
    {
        mNum: 1706,
        mContent: '- 끓은 물에 소면 삶기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/6ea66ceaa70c4686ad14aefc332213241.jpg',
        recipeId: 240,
    },
    {
        mNum: 1707,
        mContent:
            '끓어넘치기 직전에 찬물을 넣어주세요. 과정을 2~3번 정도 반복하면 쫄깃한 면을 맛볼 수 있어요. - 삶은 소면 찬물에 빨래하듯 빨면서 헹궈주기 Tip. 뿌연 전분 물이 안 나올 때까지 헹궈주세요. 그래야 면이 불지 않아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8bfe95a84b83adc7e62b6e2d580e06c21.jpg',
        recipeId: 240,
    },
    {
        mNum: 1708,
        mContent: '- 그릇에 삶은 소면, 무친 열무김치, 채 썬 오이 순으로 올리고 주변으로 김치 국물 부어주면 열무 김치말이국수 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/9b2ec3f0d8af166a3b12593213efed331.jpg',
        recipeId: 240,
    },
    {
        mNum: 1709,
        mContent: '민들레 잎을 깨끗이 씻어 물기를 뺀다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8b72c32a8d6c9d47c89a2e6788f92ff01.jpg',
        recipeId: 241,
    },
    {
        mNum: 1710,
        mContent: '멸치액젓 다진 마늘 고춧가루 설탕을 넣어 양념을 만든다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/2be3a39ea93860f0f2a847ee6d4779841.jpg',
        recipeId: 241,
    },
    {
        mNum: 1711,
        mContent: '만들어둔 양념에 민들레 리플로 맛있게 무쳐 준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/aa4c691ba5e34773e9c1dd6b647445581.jpg',
        recipeId: 241,
    },
    {
        mNum: 1712,
        mContent: '먼저 양파는 얇게 채썰어서 매운맛이 빠지도록 찬물에 잠시 담궈줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/2574ea2d4cac39acfd907b3037d7b74a1.jpg',
        recipeId: 242,
    },
    {
        mNum: 1713,
        mContent: '맛살과 오이는 먹기좋게 썰어줍니다. 맛살대신 크래미를 사용하면 더 맛있구요.오이는 돌려깎기를 해 씨를 제거후 채썰어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bfb4b87b1a169bde435b00e22ed3900e1.jpg',
        recipeId: 242,
    },
    {
        mNum: 1714,
        mContent: '볼에 모든 재료를 담은 뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/9a5b76190949679cc4f857a41504b58a1.jpg',
        recipeId: 242,
    },
    {
        mNum: 1715,
        mContent: '분량의 양념을 넣어비닐장갑을 끼고 조물조물 해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/9bd9d609d270acc2f581081c7d57819f1.jpg',
        recipeId: 242,
    },
    {
        mNum: 1716,
        mContent: '간을 보고 혹시라도 모자란 간은소금을 좀 더 넣어주면 될듯해요~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/a67333eb9e9c51a254f193aa81fdf5071.jpg',
        recipeId: 242,
    },
    {
        mNum: 1717,
        mContent: '담가놓은 마늘쫑 장아찌가 맛있게 익었어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/816e6a564e254545b91637d7ea6ced661.jpg',
        recipeId: 243,
    },
    {
        mNum: 1718,
        mContent: '아주 조금 3큰술 정도만 꺼내줍니다. 이때 국물없이 마늘쫑만 건져내줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/57c485b484e9c974f7085c14bb8f9e3f1.jpg',
        recipeId: 243,
    },
    {
        mNum: 1719,
        mContent: '고추장 1큰술, 요리당 2큰술, 참기름 1큰술, 통깨 1작은술 넣고 조물조물 무쳐줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1ac05ecf3f9b4328353be577b087e37c1.jpg',
        recipeId: 243,
    },
    {
        mNum: 1720,
        mContent: '이렇게 조물조물 무쳐주고 잠시 놔둡니다. 그럼 마늘쫑 장아찌 고추장 무침 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/925b844bc2ee3b20d1150a946ec17bce1.jpg',
        recipeId: 243,
    },
    {
        mNum: 1721,
        mContent: '해산물(조개또는 피조개) 를준비해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/a6416cabf54a9876249ad0cb44ee57ff1.jpg',
        recipeId: 244,
    },
    {
        mNum: 1722,
        mContent: '고추장양념을 미리준비합니다. (고추장2.식초2. 설탕1.다진마늘1)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/5899e37caea3a90d48f73264e6d6f9c91.jpg',
        recipeId: 244,
    },
    {
        mNum: 1723,
        mContent: '김치(설탕1.참기름1) 비율로 미리만들어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ed876689774e59ab0a18962ea3cb2e751.jpg',
        recipeId: 244,
    },
    {
        mNum: 1724,
        mContent: '국수를3~4분삶아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ad8992872f15aed3fc9dc80a8b9f67321.jpg',
        recipeId: 244,
    },
    {
        mNum: 1725,
        mContent: '재료를넣고 비벼줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/f5df40607795b7db5f9b058cece612f41.jpg',
        recipeId: 244,
    },
    {
        mNum: 1726,
        mContent: '접시에 덜어서 맛있게 먹어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bb7b1fc03ee1317f3be62f6956a2b52e1.jpg',
        recipeId: 244,
    },
    {
        mNum: 1727,
        mContent:
            '좀 색다르게 하고 싶은데 어떻게 할까 하다가 호박에 모양을 줘봤어요. 도토리묵칼이지만 난 호박을 썰어보고 싶을 뿐이고 썰어보니 물결 모양이 들어가 기존에 해 먹던 애호박볶음이랑 좀 달라 보이고 양념이 같아서 맛은 같지만 모양이 다르니 새로운 반찬처럼 느껴지고....^^;;(내 생각일 뿐)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1fd8824bc439a9ea26d05f4179bedadc1.jpg',
        recipeId: 245,
    },
    {
        mNum: 1728,
        mContent:
            '감자도 썰어보고 싶네요. ㅋㅋ 비싸서 감자 안사먹은지가 언제인지....팬에 기름을 두르고 썰어놓은 호박을 넣어줍니다. 2개를 썰어서 양이 많긴 하네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/460137cbd72b9d9f6843f1ae5e0648271.jpg',
        recipeId: 245,
    },
    {
        mNum: 1729,
        mContent: '양파 반개와 당근을 채 썰어서 함께 넣어줍니다. 당근이 들어가야 색감이 이쁘겠죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/2382f49dede66c04f92b28176f7fd78b1.jpg',
        recipeId: 245,
    },
    {
        mNum: 1730,
        mContent:
            '다진 마늘 0.5, 소금 0.3, 새우젓 0.5를 넣어줍니다. (사진상으로 소금이 많아 보이고 새우젓이 적어 보이지만 새우젓이 밑으로 떨어졌어요) 새우젓을 넣으면 감칠맛이 난답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/464abeecf8aea60a354a2962a6c1171e1.jpg',
        recipeId: 245,
    },
    {
        mNum: 1731,
        mContent: '애호박이 익으면 들기름 1큰술과 통깨를 뿌려서 고소한 맛을 내줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/75b6c418d25be165634910357d39cefa1.jpg',
        recipeId: 245,
    },
    {
        mNum: 1732,
        mContent:
            '호박이 익었어도 물결 모양이 유지되고 있네요. 이렇게 썰어보긴 했어도 익으면 모양이 흐물해질거 같았거든요. 접시에 담고 검은깨를 뿌려주면 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/89db3230ae4c6c94f796c01d47e4ade81.jpg',
        recipeId: 245,
    },
    {
        mNum: 1733,
        mContent: '엷은 소금물을 만들어 전복을 넣어주고 칫솔이나 솔로 닦아주고 헹군 다음 물기를 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/d1474754721005b2745fbef3418bef3e1.jpg',
        recipeId: 246,
    },
    {
        mNum: 1734,
        mContent: '전복 껍질의 얇은 부분 쪽으로 숟가락을 넣어 전복살을 분리합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/60c7df458238260e506dd63845a183fe1.jpg',
        recipeId: 246,
    },
    {
        mNum: 1735,
        mContent:
            '노란 내장과 초록 내장은 암수 구별이 되는 것이구요. 내장도 제거하시구요. 내장을 드시는 분들도 계시긴 해요. 전복회에서 내장을 안 먹으면 전복회를 먹는 게 아니라고...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b4295d101cf5d5de5edce26c8088e65b1.jpg',
        recipeId: 246,
    },
    {
        mNum: 1736,
        mContent: '전복 윗부분의 검정 부분에 칼집을 내면 빨간색의 전복 이빨이 보이는데, 이 전복이빨은 제거해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ca222f913c41fae116faae54d8bcfb131.jpg',
        recipeId: 246,
    },
    {
        mNum: 1737,
        mContent: '전복이빨이 요렇게 제거되었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/3c5712a09d466a4e192b6a61f33d6cb41.jpg',
        recipeId: 246,
    },
    {
        mNum: 1738,
        mContent: '몸통의 흰부분에 칼집을 낸 후 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/777a39ad7c94d4f02c168a5f710fc1b81.jpg',
        recipeId: 246,
    },
    {
        mNum: 1739,
        mContent: '두릅 밑둥잘라 껍질을 벗깁니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/915abcba558227d81afd58ce84d805d21.jpg',
        recipeId: 247,
    },
    {
        mNum: 1740,
        mContent: '잎 시커멓게 변한건 떼어냅니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0cb00b59db7a5d54a76c686fd86b10a21.jpg',
        recipeId: 247,
    },
    {
        mNum: 1741,
        mContent: '십자로 밑둥을내서 나중 찍기좋게 해줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/62cc60fbdf8cd6f61df947a5f50ad4ea1.jpg',
        recipeId: 247,
    },
    {
        mNum: 1742,
        mContent: '흐르는 물에 씻어주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dd85e3af33fde7e79f20220ab9a5016d1.jpg',
        recipeId: 247,
    },
    {
        mNum: 1743,
        mContent: '냄비에 소금한수저',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3c565ba7308456354b925a547ae15eee1.jpg',
        recipeId: 247,
    },
    {
        mNum: 1744,
        mContent: '식초한수저 넣고 끓여서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0a76a925b371282867f2af04f22396681.jpg',
        recipeId: 247,
    },
    {
        mNum: 1745,
        mContent: '밑둥을 들고 밑둥먼저 1분정도 데칩니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6a6f42e8422865764c5446ca946a86521.jpg',
        recipeId: 247,
    },
    {
        mNum: 1746,
        mContent: '그후 두릅을 다 넣고 2분간 데칩니다 .ㅡ두릅이 작고얇으면 1분만 데치세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4a89061410c53f6935634358440ecd281.jpg',
        recipeId: 247,
    },
    {
        mNum: 1747,
        mContent: '데친 두릅은 찬물로 한번 헹구고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a8fea873dc4ef850f592843c051c99911.jpg',
        recipeId: 247,
    },
    {
        mNum: 1748,
        mContent: '한번짜서 물기를 제거해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/68ae6222174e991158cd60f252ea1b2f1.jpg',
        recipeId: 247,
    },
    {
        mNum: 1749,
        mContent: '데친두릅은 접시담고 초고추장에 찍어드세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bb6ec65612181cf4b85f922061a972b91.jpg',
        recipeId: 247,
    },
    {
        mNum: 1750,
        mContent: '데치지않은 남은 두릅은 손진후 물기제거후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c123be8b0a7f4424d59f6a1e7f9c2d981.jpg',
        recipeId: 247,
    },
    {
        mNum: 1751,
        mContent: '크린백에 넣고 지퍼팩에 담아 냉장보관하면 오래보관할 수 있어요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5c5466b73b02f7d0557afbd9c90c9e231.jpg',
        recipeId: 247,
    },
    {
        mNum: 1752,
        mContent: '깻잎을 씻어 물기를 충분히 빼고 젓가락으로 잡을 만큼의 꼭지를 남기고 가위로 잘라 주었습니다. 깻잎 70장.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b868c7c389e5ae49a8f36d8676624e931.jpg',
        recipeId: 248,
    },
    {
        mNum: 1753,
        mContent: '볼에 다진마늘 1큰술, 양파 1/2개, 당근 1/4개를 곱게 채 썰어 담아 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/6feeec3a9ed2989baf95b06b499b4d871.jpg',
        recipeId: 248,
    },
    {
        mNum: 1754,
        mContent: '그리고 멸치액젓 7큰술, 고추가루 3큰술, 갈은깨 1큰술, 매실청 1큰술 다시마 멸치육수 1컵을 붓고 고루 잘 섞어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/12540bb44b3ab1bde7d1d2f9619a9af51.jpg',
        recipeId: 248,
    },
    {
        mNum: 1755,
        mContent: '깻잎 자체에 수분이 없어 다시물로 양념을 흥근하니 만들어 깻잎이 촉촉하니 잠기도록 김치국물처럼 양념을 만들어 주었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/684b616fc536c39a4f205dc67a56dc191.jpg',
        recipeId: 248,
    },
    {
        mNum: 1756,
        mContent:
            '깻잎을 담을 밀폐용기에 깻잎 2장을 겹쳐 담고 준비한 양념국물을 건더기와 함께 떠서 위에 골고루 얹어 줍니다. 그리고 다시 깻잎 2장을 겹쳐 올리고 양념 얹기를 반복해 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/e5d2a80ca5c8c70c56ac938f446c0ae21.jpg',
        recipeId: 248,
    },
    {
        mNum: 1757,
        mContent: '양념을 만든 그릇에 다시마 멸치육수 1/4컵 붓고 여분의 양념을 씻어 깻잎김치에 고루 뿌려 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/8834506c7827830bdd95d5af4a1901d01.jpg',
        recipeId: 248,
    },
    {
        mNum: 1758,
        mContent: '냉장고에 하루 정도 두었다가 드세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/83d997e973eb7973ce8e8cfa42c670dd1.jpg',
        recipeId: 248,
    },
    {
        mNum: 1759,
        mContent: '[부추페스토] 부추는 씻은 후 물기를 닦아내고 갈기 좋은 크기로 잘라 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fc11e69dd90f78a0d209c7978e87a17d1.jpg',
        recipeId: 249,
    },
    {
        mNum: 1760,
        mContent: '[부추페스토] 잣은 고깔을 떼어낸 후 마른 팬에 갈색빛이 나도록 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/63f991a61acc7d02a2c68da719c84f901.jpg',
        recipeId: 249,
    },
    {
        mNum: 1761,
        mContent: "[부추페스토] 모든 재료를 넣고 곱게 갈아주면 '부추 페스토'를 완성해주세요.",
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/280b0f448cb208b505cade14268de1011.jpg',
        recipeId: 249,
    },
    {
        mNum: 1762,
        mContent:
            '[부추페스토 부르스케타] 마늘은 0.5cm 두께로 편 썰고 부추는 송송 썰어 준비해주세요. 마늘을 너무 얇게 썰면 조리 시 탈 수 있으니 두께 감 있게 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c3001e69cb2b5ea958a533c5bd0bf7101.jpg',
        recipeId: 249,
    },
    {
        mNum: 1763,
        mContent: '[부추페스토 부르스케타] 바게트 빵을 1.5cm 두께로 자른 후 달군 팬에 기름을 두르지 않고 노릇하게 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1c637438fa9bd47388968f428591e13b1.jpg',
        recipeId: 249,
    },
    {
        mNum: 1764,
        mContent:
            '[부추페스토 부르스케타] 새우는 등에 있는 내장을 제거해 준비해주세요. 팬에 분량의 오일과 마늘을 넣고 볶은 뒤 마늘이 갈색빛이 나면 새우를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e48c941bd94c53782d6180c67db03df91.jpg',
        recipeId: 249,
    },
    {
        mNum: 1765,
        mContent:
            '[부추페스토 부르스케타] 새우가 다 익으면 불을 끄고 부추 페스토를 넣어 부추의 향을 더해주세요. 페스토를 섞을 때는 불을 끈 상태에서 섞어야 부추의 향이 날아가지 않습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/595d6a7dfc23d765c8db665a78d48ac31.jpg',
        recipeId: 249,
    },
    {
        mNum: 1766,
        mContent:
            "[부추페스토 부르스케타] 구운 빵에 페스토 1스푼을 바르고 새우, 마늘을 올려준 후 팬에 남아 있는 부추 오일과 송송 썰은 부추를 뿌려 '부추 페스토 부르스케타'를 완성해주세요.",
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/261e635fa7c9a7858d6d730d94e435101.jpg',
        recipeId: 249,
    },
    {
        mNum: 1767,
        mContent: '[부추페스토 파스타] 양파는 곱게 다지고 베이컨은 1.5cm, 방울토마토는 1/2 크기로 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2fd9fc9056afde6654d8edbb3b3702111.jpg',
        recipeId: 249,
    },
    {
        mNum: 1768,
        mContent:
            '[부추페스토 파스타] 물 2L에 소금 10g을 넣고 물을 끓여 면을 8분간 삶아주세요. 삶은 면은 채에 건져 올리브오일을 고르게 발라주세요. 면을 건진 후 오일을 발라주면 달라붙지 않습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6afdd5ee0de581be355b88f48e9386fa1.jpg',
        recipeId: 249,
    },
    {
        mNum: 1769,
        mContent:
            '[부추페스토 파스타] 달군 팬에 올리브오일을 두르고 손질한 양파와 베이컨을 볶은 뒤 방울토마토와 면을 넣고 살짝 볶아주세요. 연두와 물을 넣고 면에 물이 흡수될 때까지 볶아주세요. 방울토마토는 오래 볶으면 식감이 좋지 않으니 마지막에 살짝 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3906b3d988b192a2db1017064dca98971.jpg',
        recipeId: 249,
    },
    {
        mNum: 1770,
        mContent: "[부추페스토 파스타] 불을 끄고 부추 페스토를 넣은 후 잘 섞어 '부추 페스토 파스타'를 완성해주세요.",
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/72d123a756fc956a7328bed4e228d9701.jpg',
        recipeId: 249,
    },
    {
        mNum: 1771,
        mContent: '소고기는 물에 담가 핏물을 뺍니다',
        mPicture: '',
        recipeId: 250,
    },
    {
        mNum: 1772,
        mContent: '냄비에 고기 쌀뜸물을 넣고 끓입니다',
        mPicture: '',
        recipeId: 250,
    },
    {
        mNum: 1773,
        mContent: '무를 도톰하게 채를 썰어놓습니다',
        mPicture: '',
        recipeId: 250,
    },
    {
        mNum: 1774,
        mContent: '고기가 거의 익으면 무를 넣습니다',
        mPicture: '',
        recipeId: 250,
    },
    {
        mNum: 1775,
        mContent: '기호에 맞게 양념을 합니다',
        mPicture: '',
        recipeId: 250,
    },
    {
        mNum: 1776,
        mContent: '소금,식초 넣고 메추리알 10분정도 삶아주세요 다 삶은 메추리알은 찬물에 잠시 담궈놓았다가 껍질을 벗겨 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6864ef40e3155a9ef1c3f42d84c090951.jpg',
        recipeId: 251,
    },
    {
        mNum: 1777,
        mContent: '양파,대파,맛술,후추넣고 소고기 삶아 결따라 찢어 준비해 주세요 이때 소고기 삶은 물은 버리지 않아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f9cc5c6735916c571c28caf7e18d2b751.jpg',
        recipeId: 251,
    },
    {
        mNum: 1778,
        mContent: '준비한 메추리알,소고기,청량초 넣고 메추리알이 잠길정도로 고기 삶은 물을 부어줍니다 양념은 간장5큰술 올리고당3큰술 맛술1 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fe3b9fe0ea9619821a5f5f1287c147711.jpg',
        recipeId: 251,
    },
    {
        mNum: 1779,
        mContent: '메추리알에 색이 베이도록 뽀글 뽀글 끓여주시면 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2801bf74eeb07dbdd3c2566fcfef2fe51.jpg',
        recipeId: 251,
    },
    {
        mNum: 1780,
        mContent: '01.묵은장아찌 묵은 마늘쫑장아찌와 마늘장아찌 준비 "1년묵은 마늘쫑과 마늘"',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8424ac8ab64e4376f8ba578299e2634b1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1781,
        mContent: '넓은볼에 마늘쫑장아찌 넣고,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/74fe370e86b201fa30f70a3cce7e20cf1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1782,
        mContent: '마늘장아찌 넣어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ab95425772a35f229ac2fa54f5d4709f1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1783,
        mContent: '02.양념장만들기 고추장/고춧가루/물엿/참기름 통깨넣고 조물조물 무쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c7d54d7866a442d357261af117a30a5f1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1784,
        mContent:
            '난이도는 下 랍니다. 무치는데 걸리는시간도 10분남짓, 냉장고속에 오래 묵혀뒀던 마늘쫑과 마늘장아찌로 고추장에 무쳐서 먹으니 새로운 밑반찬이 뚝딱~! 완성 되었지요 >.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c3edde938196df20ee57060249e57f741.jpg',
        recipeId: 252,
    },
    {
        mNum: 1785,
        mContent: '와..이맛난걸 그동안 묵혀만 두고 있었다뇨 새로운 마늘쫑이 오고나서야 오래된마늘쫑 어쩌지 하고 생각이 나더라고요~ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2fd25517e546a8b590199fc28ea3e7b51.jpg',
        recipeId: 252,
    },
    {
        mNum: 1786,
        mContent: '조물조물 맛있게 무쳐 반찬통에 담았어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fce4de0c2c8e62ce207c3757aa20a3fd1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1787,
        mContent: '반창통 두통분량정도 나오더라고요 마늘쫑 제철일때 장아찌로 담가서 요리조리 다양한 요리로 활용해서 드셔보세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bb1a411e81c812505cbe5757eae2d39d1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1788,
        mContent: '묵은 마늘쫑장아찌와 마늘장아찌가 있어 둘의 조합이 잘 어울리고, 맛있어요. ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/53266be2c9a4fe4b0d2c7e41765ab2ca1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1789,
        mContent: '저 매운거 잘 못먹거든요~ 마늘장아찌로 고추장양념에 무쳐먹으니 매운맛은 전혀 모르겠고, 맛있게 맵다고 하면 이해가 되실까용~ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/cc43fb28ad521c85ee79dcf39470b4481.jpg',
        recipeId: 252,
    },
    {
        mNum: 1790,
        mContent: '봄철, 입맛 없을때 마늘쫑고추장장아찌로 없던 입맛도 살립니다. ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/459be3d2bf9f0e3414c0845b3cfc42cc1.jpg',
        recipeId: 252,
    },
    {
        mNum: 1791,
        mContent:
            '분량의 재료를 준비해주세요. 어묵은 먹기 좋은 크기로 썰고 느타리버섯은 밑동을 떼고 먹기 좋게 찢어주세요. 무는 0.5mm정도로 얇게 썰어주세요. 어묵 1장, 느타리버섯 1줌, 무 1/8개',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dca6971b415b1a571f3efe7dd57522cf1.jpg',
        recipeId: 253,
    },
    {
        mNum: 1792,
        mContent:
            '냄비에 물 500-600ml를 넣고 다시마, 멸치, 청양고추, 무를 넣어 센불에서 끓이다 끓어오르면 약불로 줄여 약 10분 정도 더 끓여주세요. 물 500-600ml, 다시마 1장, 멸치 10마리, 청양고추 2개, 무 센불-약불 기호에 따라 청양고추는 생략하셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0d47b2fd3701cc884d6f9f940e8df7a41.jpg',
        recipeId: 253,
    },
    {
        mNum: 1793,
        mContent:
            '약 10분 후, 청양고추와 다시마는 건져내고 다시 센불로 올려 무가 2/3정도 다 익을때까지 끓여주세요. 센불 저는 멸치는 꺼내지 않았어요. 이 단계에서 멸치도 함께 꺼내셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/73e5391fc909548ab2f5801a387952c41.jpg',
        recipeId: 253,
    },
    {
        mNum: 1794,
        mContent: '무가 얼추 익으면 느타리버섯과 어묵을 넣고 느타리버섯, 어묵 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2374525aab972a1f93cf1aa359709c2b1.jpg',
        recipeId: 253,
    },
    {
        mNum: 1795,
        mContent: '간장 1T를 넣어 약 4-5분간 더 끓여주세요. 간장 1T 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fea3cf02416d6e4b944f33b1040fa0281.jpg',
        recipeId: 253,
    },
    {
        mNum: 1796,
        mContent:
            '그 다음 다진파 1T, 후추 톡톡하고 부족한 간은 소금으로 맞추면 완성입니다:) 다진파 1T, 후추, 소금 센불 다진파 대신 대파를 어슷썰어 넣으셔도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/08cd2099e37e89d9784c2a0dcda548051.jpg',
        recipeId: 253,
    },
    {
        mNum: 1797,
        mContent: '두릅은 밑동을 감싼 껍질부분을 제거한다. - 바짝 자르면 잎이 가닥가닥 떨어질 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8134ff4c4766c4c448bcc68d32ce66221.png',
        recipeId: 254,
    },
    {
        mNum: 1798,
        mContent: '식초물에 3분간 담가둔다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d86307117b18663b9c2d2a9b432532231.png',
        recipeId: 254,
    },
    {
        mNum: 1799,
        mContent: '두릅을 흔들어 씻고 흐르는 물에 다시한번 세척한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1523d37488387dbc60146b2f0438afb21.png',
        recipeId: 254,
    },
    {
        mNum: 1800,
        mContent:
            '끓는 물에 소금을 넣고 두릅을 1분간 데쳐 찬물에 담가 물기를 제거한다. - 봄나물에는 약간의 독성이 있어 요리할 때는 데쳐서 사용해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5ebbe4a6c528c06abb42631b92d8c6111.png',
        recipeId: 254,
    },
    {
        mNum: 1801,
        mContent: '손질한 두릅은 끓는 물에 소금을 약간 넣고 30초간 데친다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4c39b6f8acbb227e5279d735a51e8aab1.png',
        recipeId: 255,
    },
    {
        mNum: 1802,
        mContent: '찬물에 담가 식힌다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/79a54bdc1baed4725c7dee2fd7ccabf11.png',
        recipeId: 255,
    },
    {
        mNum: 1803,
        mContent:
            '지퍼팩에 데친 두릅을 담고 물을 채워 냉동실에 얼린다. 지퍼팩 - 물기가 없으면 얼면서 나물이 질겨지고 부서져요. - 녹여서 물기를 짜내고 요리해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c32c8d0d84b98e682aed472f3a6b827a1.png',
        recipeId: 255,
    },
    {
        mNum: 1804,
        mContent: '[셔츠모양] 세모모양으로 반 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a217b9176abbaa3e6a083a5f31c96fd51.png',
        recipeId: 256,
    },
    {
        mNum: 1805,
        mContent: '양 끝 모서리를 하단 중앙 모서리에 맞춰 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c722f424fc9d429786bf6e616a2701551.png',
        recipeId: 256,
    },
    {
        mNum: 1806,
        mContent: '상단을 셔츠 깃 모양으로 잡아준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4c6574dc4dafe72688dcb00444d2050e1.png',
        recipeId: 256,
    },
    {
        mNum: 1807,
        mContent: '뒤집어서 양 끝을 중앙에 맞춰 접어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2127b49b3f4798ebf8fbe3369f87f40a1.png',
        recipeId: 256,
    },
    {
        mNum: 1808,
        mContent: '위로 접어올리고 뒤집어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/31dd04fe4e76ddb14061e3f24d6df9801.png',
        recipeId: 256,
    },
    {
        mNum: 1809,
        mContent: '완성 : )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bc4c220903d2c3f0921d25dd42d355921.png',
        recipeId: 256,
    },
    {
        mNum: 1810,
        mContent: '[명함세팅] 세모모양으로 두 번 접어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2dc57d4de56b72ccb6444296d116519b1.png',
        recipeId: 256,
    },
    {
        mNum: 1811,
        mContent: '하단을 한 번 접어올린다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0cc69fec75ab6f200eb31f2be35090861.png',
        recipeId: 256,
    },
    {
        mNum: 1812,
        mContent: '가운데로 양 끝을 접어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1dce6c9908f856bfd0aa429fa440cb721.png',
        recipeId: 256,
    },
    {
        mNum: 1813,
        mContent: '완성 : )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/383320bb573f448180fc67bdaaebcbb11.png',
        recipeId: 256,
    },
    {
        mNum: 1814,
        mContent: '아직 김장김치가 남아 있어요. 잘 익은 김치 1/2 포기 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f02799bbd5195c9b25c3e54e684727231.jpg',
        recipeId: 257,
    },
    {
        mNum: 1815,
        mContent: '먹기 좋은 크기로 썰어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bd1d44639b90b8f1f752dbc32817681b1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1816,
        mContent:
            '새송이버섯 1개, 두부 1모, 대파 1대, 청양고추 2개를 사진과 같이 먹기 좋은 크기로 썰어 주세요. 들큰한 맛이 날 까봐 양파는 넣지 않았습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/887616d038189e9ac7490d2112c86f841.jpg',
        recipeId: 257,
    },
    {
        mNum: 1817,
        mContent: '큰 냄비에 썰어 놓은 김치를 넣어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/da9f1773023ebd9667af16885ddf969c1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1818,
        mContent: '그 위로 두부, 버섯, 대파, 청양고추 등 준비한 재료도 넣어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a09d6db647baf3fc8e1a0de0c39829ff1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1819,
        mContent:
            '쌀뜬물 1.5리터 정도 넉넉하게 넣어 주세요. 쌀뜬물을 미리 준비하시면 멸치육수로 안하셔도 그럭저럭 맛이 납니다. 가장 좋은 것은 멸치육수로 하는거겠지만요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fa90aa1b915e38c87a20fbef53b488851.jpg',
        recipeId: 257,
    },
    {
        mNum: 1820,
        mContent: '한참 졸여야 더 맛이 나므로 재료 위까지 물을 넣어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/26df42e5ac62e290c0108474d9a28bd91.jpg',
        recipeId: 257,
    },
    {
        mNum: 1821,
        mContent: '청양고추를 넣었지만 더 칼칼한 맛을 원하시면 고춧가루 2스푼 정도 넣어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1754a6cfd6023e22ebf88142b2a8c5c91.jpg',
        recipeId: 257,
    },
    {
        mNum: 1822,
        mContent: '국간장도 1스푼 정도 넣어주세요. 혹시 입맛에 따라 짤 수도 있으니 간은 조절해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1bb83da22e17b54376543bceaf00a75d1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1823,
        mContent: '이제 센불로 팔팔 끓여 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/82d13f39db32a44b8f43d0446b77d5a21.jpg',
        recipeId: 257,
    },
    {
        mNum: 1824,
        mContent: '설탕도 1스푼 넣어 주면 감칠 맛이 더욱 풍성해집니다. 간 마늘 1스푼도 넣어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d89661f027f78911972c446f2840aa311.jpg',
        recipeId: 257,
    },
    {
        mNum: 1825,
        mContent: '어느 정도 팔팔 끓으면 약불로 낮추어 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/cefacfb30338852ba3e4b89cf6ffb74d1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1826,
        mContent: '약불로 국물이 자작자작해질 때까지 졸여 주면 더욱 맛있는 두부김치찌개가 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/26ca94e91221473af3f0d2fe45c68d781.jpg',
        recipeId: 257,
    },
    {
        mNum: 1827,
        mContent: '드디어 다 되었네요. 그릇에 담아 줍니다. 돼지고기 못지 않은 두부김치찌개입니다. 개운하고 고소한 맛이 나요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/39a14bd3e0b52b3cc848529658bedd071.jpg',
        recipeId: 257,
    },
    {
        mNum: 1828,
        mContent: '돌아가신 어머니 생각도 나고 옛 기억을 소환하며 맛있게 먹었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ad09e9fe6bd93eccbda596ed37f671db1.jpg',
        recipeId: 257,
    },
    {
        mNum: 1829,
        mContent: '[장미모양] 세모 모양으로 반 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6d29ff3f41cfc0f34f72b06b9c2e27111.png',
        recipeId: 258,
    },
    {
        mNum: 1830,
        mContent: '접힌 부분을 적당한 두께로 두 번 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9461269db7762e4366abb5e0f94f880e1.png',
        recipeId: 258,
    },
    {
        mNum: 1831,
        mContent: '끝에서부터 돌돌 말아준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/079a4903567a9ded263b3e2cbb3321b21.png',
        recipeId: 258,
    },
    {
        mNum: 1832,
        mContent: '끝부분을 말린 천 틈 사이로 끼워 넣는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f8769a77b2bffecd7f5c60b345e700831.png',
        recipeId: 258,
    },
    {
        mNum: 1833,
        mContent: '두 갈래로 나눠진 천을 양쪽으로 잡아당긴다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0c643beaeb4c210d4c7eb36d3c1938e71.png',
        recipeId: 258,
    },
    {
        mNum: 1834,
        mContent: '양을 다듬어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9e10c33426000c00e3c239bdaf1d4abb1.png',
        recipeId: 258,
    },
    {
        mNum: 1835,
        mContent: '완성 : )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c2900687bb44c3a40a821ade1517c8441.png',
        recipeId: 258,
    },
    {
        mNum: 1836,
        mContent: '네모 모양으로 두 번 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/187cc2d9cb1ee020419939addeb4feb91.png',
        recipeId: 258,
    },
    {
        mNum: 1837,
        mContent: '일정한 간격을 두고 삼각형으로 세 번 접어 넣는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/73158f32955f9d1e43e3fd2a545d7d081.png',
        recipeId: 258,
    },
    {
        mNum: 1838,
        mContent: '뒤집어서 삼등분으로 접는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1f1db9bee4fb5c7bde2e18ad90b1ccb11.png',
        recipeId: 258,
    },
    {
        mNum: 1839,
        mContent: '완성 : )',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2cfa581acea96c75fa64eaf44e20df8d1.png',
        recipeId: 258,
    },
    {
        mNum: 1840,
        mContent: '커트러리를 세팅해준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f48cccd9a522a29018af0f02901b91f91.png',
        recipeId: 258,
    },
    {
        mNum: 1841,
        mContent: '껍질을 벗긴 마는 한 입 크기로 썬다. - 마는 맨손으로 만지면 가려움증이 있을 수 있으니 장갑을 끼고 껍질을 벗겨주는 것이 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/50e66efbdef24175a5f023da6cc5fbea1.png',
        recipeId: 259,
    },
    {
        mNum: 1842,
        mContent: '바나나를 한 입 크기로 썬다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6ad66272553f12dd1a6315ae39a6b2261.png',
        recipeId: 259,
    },
    {
        mNum: 1843,
        mContent: '믹서기에 모든 재료를 넣고 갈아 완성한다. 믹서기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ce57273401ea35bc85ed30be3f3df7831.png',
        recipeId: 259,
    },
    {
        mNum: 1844,
        mContent: '양상추는 깨끗이 씻어 준비하고 방울 토마토는 반 잘라 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2b0fbcedac74b8da0eae6244847c81471.png',
        recipeId: 260,
    },
    {
        mNum: 1845,
        mContent: '푸실리 면은 소금을 조금 넣어 끓는 물에 면을 약 10분 정도 삶아낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/388bd79c826e28982dc238fc81022ba61.png',
        recipeId: 260,
    },
    {
        mNum: 1846,
        mContent: '볼에 소스 재료를 넣어 섞어 소스를 만든다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d0e219d2c67d30af246f4487288287ba1.png',
        recipeId: 260,
    },
    {
        mNum: 1847,
        mContent: '볼에 푸실리, 양상추, 메추리알, 방울토마토를 넣고 소스를 넣어 버무려 완성한다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a5c9f871b356f174193d89a66c5b050a1.png',
        recipeId: 260,
    },
    {
        mNum: 1848,
        mContent: '양파는 채 썰고 판어묵은 한입 크기로 썰고 대파는 어슷 썰어 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/52a0c40253e398fd3f96c81d53dc6f371.png',
        recipeId: 261,
    },
    {
        mNum: 1849,
        mContent: '끓는 물에 라면, 라면 후레이크를 넣어 한소끔 끓인다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/35d1995235a11d812291bb1b0acb63271.png',
        recipeId: 261,
    },
    {
        mNum: 1850,
        mContent: '면이 풀리기 시작 하면 양파, 어묵, 양념을 넣어 한소끔 끓인 후 대파를 넣어 완성한다.',
        mPicture: '',
        recipeId: 261,
    },
    {
        mNum: 1851,
        mContent: '분홍 소시지는 한입 크기로 잘라 달걀 물에 담근다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/639a0789e5a42d7083d064e031ce9df61.png',
        recipeId: 262,
    },
    {
        mNum: 1852,
        mContent: '예열된 팬에 기름을 두르고 달걀 후라이를 한다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/711a3217e4158d3602e04d1fc287c53b1.png',
        recipeId: 262,
    },
    {
        mNum: 1853,
        mContent: '후라이 한 팬에 기름을 두르고 분홍 소시지를 앞 뒤로 노릇하게 굽는다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/deff4738ae4f0e7bd955ab1fe62b053b1.png',
        recipeId: 262,
    },
    {
        mNum: 1854,
        mContent: '소시지 구운 팬에 김치를 넣어 볶다가 설탕, 통깨, 참기름을 넣어 볶아낸다. 팬',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b369e69da14f42f893e0beb957f09a521.png',
        recipeId: 262,
    },
    {
        mNum: 1855,
        mContent: '도시락에 밥을 담고 김가루를 뿌리고 소시지, 김치, 달걀을 올린 후 참기름을 뿌려 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d13e16b3fd69bd9988a2b8243c71d5501.png',
        recipeId: 262,
    },
    {
        mNum: 1856,
        mContent: '볼에 달걀을 풀고 슈가파우더, 올리고당을 넣고 섞는다. 볼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1ec210521e57d3dc63e6cf6fda082d6d1.png',
        recipeId: 263,
    },
    {
        mNum: 1857,
        mContent: '박력분, 베이킹파우더, 녹차가루를 체쳐 넣는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/704191a86485041e6075e0d884fc95511.png',
        recipeId: 263,
    },
    {
        mNum: 1858,
        mContent: '녹인 무염버터를 넣고 가볍게 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7488354e4550390f159defc9c0c929201.png',
        recipeId: 263,
    },
    {
        mNum: 1859,
        mContent: '틀에 포도씨유를 약간 바른 후 틀의 80% 정도 반죽을 넣고 180도로 예열된 오븐에 10~13분 구워 완성한다. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5bcbf8d0d27db9e7dcee8c2da4ea5a161.png',
        recipeId: 263,
    },
    {
        mNum: 1860,
        mContent: '바나나는 한 입 크기로 썬다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/14bfe8ef7ca2888de0352a55fe073ad81.png',
        recipeId: 264,
    },
    {
        mNum: 1861,
        mContent: '믹서기에 모든 재료를 넣고 간다. 믹서기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d28ccee57c8f90770326bed53aad32251.png',
        recipeId: 264,
    },
    {
        mNum: 1862,
        mContent: '컵에 따라 완성한다. 컵',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9b9e16a6adf9296cef247bc12686051d1.png',
        recipeId: 264,
    },
    {
        mNum: 1863,
        mContent: '닭가슴살과 쌈무는 물을 빼 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dca66cb1a64b8b90c9d9c4a64be34df81.png',
        recipeId: 265,
    },
    {
        mNum: 1864,
        mContent: '파프리카와 양파는 채썰고 양파는 물에 담가 아린맛을 제거한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f5cc7cc4ff3a683a12acd92a68eb11e81.png',
        recipeId: 265,
    },
    {
        mNum: 1865,
        mContent: '소스를 만든다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/76868fd6a29bff876fb6413e8436437e1.png',
        recipeId: 265,
    },
    {
        mNum: 1866,
        mContent: '무쌈에 닭가슴살, 파프리카, 양파, 무순을 넣고 돌돌 말아 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3afd4a9fd8dd050b2fbe2024a4b45b901.png',
        recipeId: 265,
    },
    {
        mNum: 1867,
        mContent: '저는 2인 기준으로 만들어서 양념을 2배로 했는데요 1인기준으로 만드실때 절반씩만 넣어주시면 되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/34f77f98e1eec375ad0913c4ada9d9c81.jpg',
        recipeId: 266,
    },
    {
        mNum: 1868,
        mContent:
            '초간단 백종원 양파덮밥 만드는 법 어렵지 않은데요 요리 초보라도 누구라도 맛있게 만들어 드실수 있어요 계란은 미리 풀어서 준비해주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/88f5101d10a0810115a38c747e7842d91.jpg',
        recipeId: 266,
    },
    {
        mNum: 1869,
        mContent: '양파도 얇게 썰어 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dc266c887529c855384fe83ffddb13c31.jpg',
        recipeId: 266,
    },
    {
        mNum: 1870,
        mContent: '양념도 분량대로 미리 섞어서 준비해주시면 요리가 훨씬 더 편하답니다 ~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d44519c4f951de3f0a5c00d5c2539e681.jpg',
        recipeId: 266,
    },
    {
        mNum: 1871,
        mContent: '후라이팬에 양파를 넣어준뒤 미리 섞어준 양념도 같이 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c06dfabbbb92d83816fc822fbd6437301.jpg',
        recipeId: 266,
    },
    {
        mNum: 1872,
        mContent: '양파가 익을때까지 약한불로 끓여주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e1e64e84efd1b0e81181809934b446011.jpg',
        recipeId: 266,
    },
    {
        mNum: 1873,
        mContent: '어느정도 양파가 익으면서 양념이 베이면 미리 풀어준 계란물을 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dbec83bb3f8a06b3715c01947ec721a51.jpg',
        recipeId: 266,
    },
    {
        mNum: 1874,
        mContent:
            '백종원 양파덮밥에는 대파가 들어갔지만 저는 대파가 없어서 쪽파를 같이 넣어줬어요 계란이 살짝 덜 익어야 밥 비벼먹을때 더 맛있으니깐 완전히 익지 않도록 살짝만 익혀주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/52b60ad5d0581981d1988a15ba48cbf01.jpg',
        recipeId: 266,
    },
    {
        mNum: 1875,
        mContent:
            '계란을 살짝 익혀 밥위에 올려주면 맛있는 한그릇요리 백종원 양파덮밥 완성이예요 :) 백선생님은 위에 가쓰오부시도 올려주셨는데 전 없어서 패쓰~ 안올려도 맛있긴 한데 담엔 좀 사다 올려먹어봐야겠어요 ~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/36d0ceea02cc232c5dd1ef1281089f331.jpg',
        recipeId: 266,
    },
    {
        mNum: 1876,
        mContent:
            '마땅히 큰 재료가 들어가지 않고 양파와 계란만 있어도 맛있는 한끼식사가 금방 만들어 지는데요 혼밥하기도 좋고 입맛없을때 한그릇 만들어 먹어도 좋을것 같아요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/77c124f198b22752fa16ad446c9a3c651.jpg',
        recipeId: 266,
    },
    {
        mNum: 1877,
        mContent:
            '적앙금은 볼에 담고 호두 분태, 땅콩 분태, 해바라기 씨는 각각 그릇에 담아주세요. 적앙금, 호두 분태, 땅콩 분태, 해바라기 씨 볼 , 그릇',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/52a5c92b99dcdbe9fd9f3d1c456a05e61.jpg',
        recipeId: 267,
    },
    {
        mNum: 1878,
        mContent: '적앙금이 담긴 볼에도 호두 분태, 땅콩 분태, 해바라기 씨를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/028398b6999b7ac39b923563c38961c71.jpg',
        recipeId: 267,
    },
    {
        mNum: 1879,
        mContent: '앙금과 건더기가 잘 섞이도록 골고루 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/97b0ba04ee6b0bed83cb94cd0a4b2e771.jpg',
        recipeId: 267,
    },
    {
        mNum: 1880,
        mContent: '잘 뭉친 앙금을 30~40g씩 동글려 모나카 깍지 위에 얹어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d00217b957449c91ce34339edcf625381.jpg',
        recipeId: 267,
    },
    {
        mNum: 1881,
        mContent: '나머지 반쪽 깍지로 앙금을 꾹 눌러서 예쁜 모양을 맞춰주면 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bef5f088a6e5acf3f72fa057c88ee6641.jpg',
        recipeId: 267,
    },
    {
        mNum: 1882,
        mContent:
            '백앙금도 똑같이 해주시면 백앙금이 들어간 모나카도 만들 수 있어요. 백앙금에 들어가는 완두배기는 사용 전 미지근한 물에 담갔다가 사용해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7944dabb35af3985321c4e632f1490a41.jpg',
        recipeId: 267,
    },
    {
        mNum: 1883,
        mContent: '박력분과 소금, 베이킹파우더를 체쳐서 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/7315678d21a0b3e6734fff1b9b768a261.jpg',
        recipeId: 268,
    },
    {
        mNum: 1884,
        mContent: '캘로그 고소한 현미 그래놀라를 믹서기나 푸드프로세서로 잘게 부숴주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/38af2688fee12f46042a34dee4c1046c1.jpg',
        recipeId: 268,
    },
    {
        mNum: 1885,
        mContent: '체친 가루류와 캘로그 고소한 현미 그래놀라를 같이 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/bbbd40014114538a8facb4ebd15261f21.jpg',
        recipeId: 268,
    },
    {
        mNum: 1886,
        mContent: '차가운 버터를 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/530fc72f2aea225746700f37bc781b871.jpg',
        recipeId: 268,
    },
    {
        mNum: 1887,
        mContent: '스크랩퍼로 버터를 잘게 으깨주면서 가루와 잘 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/d99f99a4cdf104acfab50202c4c4f1a91.jpg',
        recipeId: 268,
    },
    {
        mNum: 1888,
        mContent: '물을 넣고 손으로 반죽을 뭉쳐주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/8e8160f881677e2ebd40dfc1e0e2cc6e1.jpg',
        recipeId: 268,
    },
    {
        mNum: 1889,
        mContent: '크랜베리를 넣고 반죽을 하나로 뭉쳐주세요 반죽을 비닐에 넣고 냉장고에서 30분이상 휴지시켜주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/ecd207eb5a505a5a29900d5710d08ebf1.jpg',
        recipeId: 268,
    },
    {
        mNum: 1890,
        mContent: '냉장고에 넣어놨던 반죽을 사각으로 만들어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/4cd79798dca8880a9542a96306a2c8f41.jpg',
        recipeId: 268,
    },
    {
        mNum: 1891,
        mContent:
            '반죽을 칼로 분할한 다음 쿠키팬에 팬닝해주세요 반죽 윗면에 우유나 계란물을 살짝 바른 다음 180도로 예열한 오븐에서 15~20분간 구워주세요 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/03/1b80492035091ab2c8bdc9e3d627a71f1.jpg',
        recipeId: 268,
    },
    {
        mNum: 1892,
        mContent:
            '만두는 해동한 뒤 달군팬에 식용유를 두르고 앞뒤로 노릇하게 구워 주세요. 상추는 흐르는 물에 깨끗이 씻어 물기를 턴 다음 1cm 폭으로 썰어 주세요. 양파, 오이, 당근은 씻어서 0.3cm 두께로 채썰어 준 뒤 찬물에 담갔다가 꺼내서 물기를 빼 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c487071b7ec37cf4517bfaa82f038c7b1.jpg',
        recipeId: 269,
    },
    {
        mNum: 1893,
        mContent:
            '넓은 접시에 구운 만두를 올려담고 야채를 고루 섞어 가운데에 담아 주세요. 먹기 직전에 야채에 초고추장과 참기름을 끼얹거나 곁들여 내어주면 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1f48164c8dd3843c817642d0fe7868311.jpg',
        recipeId: 269,
    },
    {
        mNum: 1894,
        mContent:
            '쟁반만두를 더 맛있게 즐기는 방법! 야채를 채썰어서 한데 고루 담아 섞어줄 때 풋내가 나지 않게 젓가락으로 섞어 주시고 목우촌 햄을 함께 채썰어서 넣어 주세요! 햄과 야채를 초고추장과 참기름을 끼얹어서 먹는 것도 아주 일품!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6620f01b484557c42297cd4e5009c77e1.jpg',
        recipeId: 269,
    },
    {
        mNum: 1895,
        mContent: '목우촌 프랑크소시지를 x자 모양으로 칼집을 내주시고 그릴팬에 구워 주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8e5835cce7d587ca8b6e00a036daf73b1.jpg',
        recipeId: 270,
    },
    {
        mNum: 1896,
        mContent:
            '마늘, 양파, 샐러리는 각각 잘게 다져 주세요! 팬에 식용유, 마늘, 양파를 넣어서 볶다가 매운향이 올라오면 샐러리를 넣어서 좀 더 볶아 주세요. 여기에 우스터소스, 토마토케첩, 핫소스를 넣어서 끓인 다음 물, 소금, 후춧가루를 넣어서 바비큐 소스를 만들어 주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/130566be58d0c8f5594c471be6d4c1eb1.jpg',
        recipeId: 270,
    },
    {
        mNum: 1897,
        mContent: '완성! 벌써 완성이에요! 아주 간단하죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/91117acf5207508a52e816a4499a29441.jpg',
        recipeId: 270,
    },
    {
        mNum: 1898,
        mContent: '목우촌 비엔나소시지는 어슷하게 칼집을 넣은 뒤 달군팬에 식용유를 둘러서 노릇하게 구워 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/522588ef4b65383afe710afb9f772f801.jpg',
        recipeId: 271,
    },
    {
        mNum: 1899,
        mContent: '파인애플은 8등분으로 하고 완두콩은 체에 받쳐 물기를 빼 주세요. 키위는 껍질을 벗겨 0.5cm 두께로 반달썰기를 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/19a6df80102a19b5bf6bdef4b0da16ac1.jpg',
        recipeId: 271,
    },
    {
        mNum: 1900,
        mContent: '탕수소스를 만들고 팬에 넣어서 끓으면 재료를 넣고 끓이다가 녹말물을 넣어서 걸쭉하게 농도를 맞춰 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ec8985b47d5683b1586151837c7757281.jpg',
        recipeId: 271,
    },
    {
        mNum: 1901,
        mContent: '목우촌 비엔나소시지 구운것을 넣어 고루 버무린 다음, 불을 끄고 참기를을 둘러서 고소한 맛을 내주시면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c33018b002a50cee1454c769fddc2bfa1.jpg',
        recipeId: 271,
    },
    {
        mNum: 1902,
        mContent: '맛있는 목우촌 소시지 과일탕수 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0b00479aba4428b581785b98891e29b41.jpg',
        recipeId: 271,
    },
    {
        mNum: 1903,
        mContent: '달래, 애호박, 양파, 두부는 한입 크기로 자르고 대파 청양고추는 송송 썰어 준비한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6784d9d76e52d79dcf9c77f3cbc50f321.png',
        recipeId: 272,
    },
    {
        mNum: 1904,
        mContent: '냄비에 멸치, 다시마를 넣고 물 500ml 약 10분간 끓인 후 건진다. 냄비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/474401574f1d40052b26a456d20782a11.png',
        recipeId: 272,
    },
    {
        mNum: 1905,
        mContent: '육수에 된장을 풀고 양파, 애호박을 넣어 한소끔 끓인다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/32435928adb8e3f159638882556d716a1.png',
        recipeId: 272,
    },
    {
        mNum: 1906,
        mContent: '두부, 고춧가루, 청양고추, 다진 마늘, 대파를 넣어 한소끔 더 끓인다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7eb8070dc5dbdabb5adf573e2c4a76ee1.png',
        recipeId: 272,
    },
    {
        mNum: 1907,
        mContent: '달래를 올려 1분만 더 끓여 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/295e2f03967d1a0c7db0fe86863a9c291.png',
        recipeId: 272,
    },
    {
        mNum: 1908,
        mContent:
            '두릅은 손질해서 끓는 소금물에 굵은 줄기부터 넣어준 후 살짝 데쳐낸 후 찬물에 씻어줍니다. 찬물에 10여분정도 담궈두면 두릅 특유의 쌉싸름한 맛이 빠져나와 더욱 맛있게 즐길 수 있어요. 물기를 꼭 짠 두릅은 작은 것은 그대로 사용하고 굵은 것은 1/2등분 시켜줬어요. 소금, 깨소금, 참기름을 둘러 조물조물 무쳐줍니다. 두릅 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c854656adf6b1f7243a5dd72b988f9fb1.jpg',
        recipeId: 273,
    },
    {
        mNum: 1909,
        mContent:
            '분량의 단촛물을 배합 후 전자레인지에 30여초 돌려 설탕과 소금을 녹여줍니다. 고슬하게 갓 지은 뜨거운 밥에 단촛물을 넣고 비벼주어야 단촛물이 밥알 사이사이에 맛이 베어 더욱 맛좋아요. 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/088b69eca37cae9e8b39c47b540427581.jpg',
        recipeId: 273,
    },
    {
        mNum: 1910,
        mContent: '살치살은 키친타올에 핏물을 제거한 후 올리브유와 소금, 통후추를 갈아 마리네이드합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b477efbd76f72c4bd114d0e07a1f4ead1.jpg',
        recipeId: 273,
    },
    {
        mNum: 1911,
        mContent: '올리브유 살짝 두른 팬에 마리네이드한 소고기를 구워주는데요.. 한 면당 3분 정도 앞뒤로 겉면이 바삭한 느낌이 들도록 시어링합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/87fd18fda7a5f02d603600e90646cf121.jpg',
        recipeId: 273,
    },
    {
        mNum: 1912,
        mContent: '준비된 초밥을 적당 크기로 뭉쳐준 후 연겨자를 발라줘요..',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a3439bf2e1eeb0592396143f59227cfa1.jpg',
        recipeId: 273,
    },
    {
        mNum: 1913,
        mContent:
            '적당히 레스팅된 스테이크용 소고기는 길이로 도톰하게 잘라줍니다. 준비된 초밥 위로 소고기를 하나씩 올려준 후 스테이크소스나 데리야끼소스를 발라주고 밑간된 두릅을 하나씩 올려서 초밥을 완성합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/31732ba271c4b6c93ea715475e4cdc751.jpg',
        recipeId: 273,
    },
    {
        mNum: 1914,
        mContent: '소고기는 키친타올로 핏물을 제거한 후 소고기 밑간 양념에 10여분 재워둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/32c220f2889854a835c0cda87ece3bfb1.jpg',
        recipeId: 274,
    },
    {
        mNum: 1915,
        mContent: '분량의 양념장 밑간된 소고기를 넣고 조물조물 잘 버무려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5908bba4ab0cebf231fa0ceb5f85d7e91.jpg',
        recipeId: 274,
    },
    {
        mNum: 1916,
        mContent: '양념된 고기는 공기가 통하지않도록 랩으로 밀착하여 냉장고에서 30분이상 재워둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e37ee6409ba2274db5ab22c547bc70d21.jpg',
        recipeId: 274,
    },
    {
        mNum: 1917,
        mContent:
            '야채는 봄나물 외에 그때그때 집에 있는 재료들 다양하게 응용해요~ 봄나물로는 참나물, 돌나물, 세발나물을 준비했습니다. 이밖에 월남쌈에 과일 조금 추가해주면 더욱 좋아서요.. 나중에 사과랑 오렌지도 추가했었네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f7e00ebe65773643ea2def1c1596ceb81.jpg',
        recipeId: 274,
    },
    {
        mNum: 1918,
        mContent:
            '세발나물과 돌나물은 씻어서 그대로 준비하고 참나물은 대략 10cm가량 길이로 잘라줍니다. 오이는 돌려깍기해서 가늘게 채썰고 나머지 당근, 파프리카, 사과도 전체적으로 비슷한 길이로 채썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7b6e3c90dcc233304e9506741d9cc2de1.jpg',
        recipeId: 274,
    },
    {
        mNum: 1919,
        mContent: '넓은 접시에 준비된 채소, 과일을 빙 둘러담습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fdc553a17e48087b411ef5d2d012b95d1.jpg',
        recipeId: 274,
    },
    {
        mNum: 1920,
        mContent: '월남쌈 소스는 개인적으로 땅콩소스보다는 피쉬소스를 더 좋아하는지라 제 입맛대로 피쉬소스도 만들어서 준비했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/40df63f25849902a904045ec81dc6eb91.jpg',
        recipeId: 274,
    },
    {
        mNum: 1921,
        mContent: '재워두었던 소불고기를 물기없이 볶아준 후 한 김 식혀서 가운데 접시에 담아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5ab922db1f213ba3f691190eb04040f41.jpg',
        recipeId: 274,
    },
    {
        mNum: 1922,
        mContent: '라이스페이퍼를 뜨거운 물에 살짝 담궜다빼서 접시 위에 펼치고 그 위로 봄나물과 채소, 불고기를 얹어 돌돌 말아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8c219553a53ecdc12d424ea7311c7e9d1.jpg',
        recipeId: 274,
    },
    {
        mNum: 1923,
        mContent: '다이어트와 몸속 독소 제거에 도움이 되는 레몬디톡스 재료들을 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/52e170867c5e0ce5a52113365139cc181.jpg',
        recipeId: 275,
    },
    {
        mNum: 1924,
        mContent: '레몬을 반으로 잘라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5c024f1fa58202cb54c0cd068da55a3d1.jpg',
        recipeId: 275,
    },
    {
        mNum: 1925,
        mContent: '레몬스퀴져에 힘껏 짜주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b3ec50efb7b102e741762f9dafa881301.jpg',
        recipeId: 275,
    },
    {
        mNum: 1926,
        mContent: '이렇게 레몬즙이 나옵니다~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ce4e7ba602e621ab101107f5b7744c831.jpg',
        recipeId: 275,
    },
    {
        mNum: 1927,
        mContent: '물통에 레몬즙을 붓고 물을 1리터 부워줍니다~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/279b103bf45102fd0765f99c6df91e1d1.jpg',
        recipeId: 275,
    },
    {
        mNum: 1928,
        mContent: '완성된 레몬디톡스를 수시로 마셔주시면 붓기걱정 끝입니당^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9683f2fbc773db240e916f4eaa8072e61.jpg',
        recipeId: 275,
    },
    {
        mNum: 1929,
        mContent: '만두를 노릇하게 구워 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a4de7a6d4b69b51e8a97d3a682c714bf1.jpg',
        recipeId: 276,
    },
    {
        mNum: 1930,
        mContent: '물 1t를 넣고 뚜껑 덮어 구워주면 더 빨리 맛나게 구울 수 있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7e88dbc3b9265bec8ce405f73aed72cf1.jpg',
        recipeId: 276,
    },
    {
        mNum: 1931,
        mContent: '노릇노릇 맛나게 구워진 만두는 떠먹는피자 만들 수 있는 그릇에 담아 줍니다, 쪼로록~~ ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4289ba54d10c08d78db019a71dd605bf1.jpg',
        recipeId: 276,
    },
    {
        mNum: 1932,
        mContent: '시판 토마토소스를 넉넉하게 발라주고.. 모짜렐라 치즈도 듬뿍 올려요 저는 모짜렐라 블럭치즈 사용 했어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0b0a6b4de60bce8dd596a63e1a686c171.jpg',
        recipeId: 276,
    },
    {
        mNum: 1933,
        mContent:
            '전자렌지에 2분 돌려주었는데요 뚜껑덮어야 사방으로 튀는 것 방지 할 수 있어요 맛있는 냄새 솔솔 풍기며 떠먹는 만두피자 완성입니다 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/beb5da0bdddd5489ac81e2eb2d0df9191.jpg',
        recipeId: 276,
    },
    {
        mNum: 1934,
        mContent: '팬에 양념육을 넣고 센불로 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/dfb8c5409f1464c47cbfa9ce2db589971.jpg',
        recipeId: 277,
    },
    {
        mNum: 1935,
        mContent: '수분없이 바짝 볶을텐데요 80%정도 익혀 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e6b9075f44b1ef5b56b5224d6cdd73491.jpg',
        recipeId: 277,
    },
    {
        mNum: 1936,
        mContent: '양파, 당근을 넣고 국물없이 바짝 볶아 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/93baa3a79bcc20c0e70fa20adddab97a1.jpg',
        recipeId: 277,
    },
    {
        mNum: 1937,
        mContent: '맛있게 완성된 순살닭갈비 입니다 참기름 둘러 마무리해요 쉽고 간편하게 만드는 순살닭갈비 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6df314d1681a8285d0c1fd277c8ce7451.jpg',
        recipeId: 277,
    },
    {
        mNum: 1938,
        mContent: '깨순 억센 줄기는 제거하고 손질해서 씻어 건져 놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0459ff9548bb5a5a359c5f6c90cc2b8c1.jpg',
        recipeId: 278,
    },
    {
        mNum: 1939,
        mContent: '궁중팬같이 높이감이 있는 팬 사용해요 오일둘러 대파부터 볶아 파기름을 냅니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/47bf08d6143d6af8a985bd2c635f3b001.jpg',
        recipeId: 278,
    },
    {
        mNum: 1940,
        mContent: '간장, 매실액, 생강술을 넣고 바글바글 끓여요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/30fae9bbf76ef988c24fd1d4dc6e9fc01.jpg',
        recipeId: 278,
    },
    {
        mNum: 1941,
        mContent:
            '깨순을 넣고 뒤젹이며 깨순이 숨 죽도록 볶아 줍니다 깨순 양이 많으면 살짝 데쳐서 사용하면 되는데요 저는 양이 많지 않아서 바로 볶아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8222e110c286567cd572640f5b7166f31.jpg',
        recipeId: 278,
    },
    {
        mNum: 1942,
        mContent: '멸치 넣고 잘 섞어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2ffb0b0a8f87d6506c0290091c6aae721.jpg',
        recipeId: 278,
    },
    {
        mNum: 1943,
        mContent: '고춧가루, 다진마늘 넣고 잘 섞어 마무리 합니다 참기름 둘렀어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/66467529f7c61d45d85b93faf0266b301.jpg',
        recipeId: 278,
    },
    {
        mNum: 1944,
        mContent:
            '요즘 봄철딸기는 유난히 달고 맛있는것 같아요. 가격도 싸구요. 진빨강을 띄고 이왕이면 싱싱한 것을 골라서 1팩 분량을 준비해주세요. 딸기는 깨끗하게 씻어 건져서 꼭지를 제거하고 물기를 말려주세요. 물기가 어느정도 제거되면 조림용 냄비로 옮겨주세요. 딸기색상이 밝은것을 구입하면 자칫 신맛이 강할 수 있어요. 딸기는 진하게 잘 익은것으로 구입해주세요. 조리기전에 물기는 가능한 마른후 진행해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/25dffc408c3dbe855955d8e419d6c4781.jpg',
        recipeId: 279,
    },
    {
        mNum: 1945,
        mContent:
            '꿀을 5-6큰술정고 넣고 버무린후 잠시 5~10분정도 그대로 두세요~ 꿀의 양은 중간에 맛을 보며 더 넣을 수 있으니 처음부터 너무 많이 넣으면 달아질 수 있어요. 적절히 가감해주세요. 5큰술을 넣고 조려가며 더 추가하는것이 좋은것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6b09ea5d2c1f3cbda91252db143570281.jpg',
        recipeId: 279,
    },
    {
        mNum: 1946,
        mContent:
            '레몬 또는 라임은 1/4조각을 짜서 딸기위에 뿌려주세요. 딸기꿀잼의 새콤한 맛을 조절할 수 있고 색이 좀더 변색이 안되고 빨갛게 나오도록 도와준다고 하네요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/63a7c814456158ae2ee4ea1c111e4a661.jpg',
        recipeId: 279,
    },
    {
        mNum: 1947,
        mContent: '불은 끓기 시작하면 강하지 않게 중약불로 줄여서 저어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ef0e47ae3102442ea0ad600ab275cedd1.jpg',
        recipeId: 279,
    },
    {
        mNum: 1948,
        mContent: '중간중간에 저어주면서 올라오는 거품은 걷어내주세요. 수분이 꽤 나오기 때문에 잼으로 조리기까지 이 과정이 15분정도 걸리는것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/844d496fabea8f5c3292213568cd9b2b1.jpg',
        recipeId: 279,
    },
    {
        mNum: 1949,
        mContent:
            '20분 이상 좀더 조려지면서 딸기꿀잼의 색상이 점점 진빨강으로 변해요~ 이때 즈음 꿀의 양을 취향에 맞게 추가해주셔도 되요. 딸기의 수분도 증발되면서 나중에 잼의 양도 처음 딸기양의 1/2이하로 줄어드니 병도 그 사이즈에 맞게 준비해주시면 되요~ 이 상태에서 저어가며 중약불로10~15분정도 더 조려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/92bd0d1bace40ea876e48337b72ccf121.jpg',
        recipeId: 279,
    },
    {
        mNum: 1950,
        mContent:
            '이렇게 약간 진득한 느낌이 되면 거의 다 된거랍니다. 조금 무르다 싶으면 약불로 5분정도 더 조려주시면 됩니다. 불을 끄고 식히고 나면 좀더 굳어지면서 딱 알맞더라구요. 딸기는 굳이 으깨지 않아도 많이 뭉개지고 줄어들기때문에 그대로 조려주세요. 나중에 딸기도 씹히고 더 맛있어요.^^ 작은딸기는 이 단계에서 형태가 거의 사라지게 되요. 전체 딸기양에서 큰딸기가 1/3정도로 줄어들어 형태가 남아있는 정도면 충분합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c31fcb57cdb9c78ddf10db8afc32c7c51.jpg',
        recipeId: 279,
    },
    {
        mNum: 1951,
        mContent:
            '주걱에 딸기잼이 어느정도 붙어있는 점도로 있으면 완성! 불을 끄고 10분정도 식힌후 병에 담아주세요. 딸기가 덩어리째 씹히는 맛있는 딸기꿀잼 완성~! 하루정도 시원한곳에 식혔다가 드셔보세요, 봄철딸기가 그대로 씹히면서 너무 상큼달콤해서 맛있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/fad8dd318765f02946452677696628bc1.jpg',
        recipeId: 279,
    },
    {
        mNum: 1952,
        mContent:
            '꿀을 넣어 만든 딸기잼은 설탕으로 만드는것보다 굳는정도가 덜한것 같아요. 하지만 훨씬 식감이 부드럽고 단맛이 강하지 않고 건강해서 좋아요~ 빵에 발라먹으면 딱이지요~ 딸기꿀잼이 너무 맛있어서 빵을 많이 먹게 되서 큰일이네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/ba8a13c41c67fb1612baa819b32c877c1.jpg',
        recipeId: 279,
    },
    {
        mNum: 1953,
        mContent:
            '보시다시피 딸기가 통째로 살아있는 느낌으로 나오기 때문에 너무 먹음직하고 맛도 좋아요, 저는 너무 단것을 좋아하지 않아서 꿀도 많이 안넣었지만, 보관성이나 취향에 따라 꿀을 더 추가해도 조리면 좋을듯해요. 봄철 딸기로 딸기가 통째로 씹히는 딸기꿀잼 한번 만들어보세요~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/662e46217564eaaa9b48fba86f2a5a5f1.jpg',
        recipeId: 279,
    },
    {
        mNum: 1954,
        mContent: '깨끗한 볼에 분량의 돼지고기 간 것, 맛술, 굴소스, 후추, 소금을 넣고 밑간을 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1d27154b419581224059c65f9d49b6b51.jpg',
        recipeId: 280,
    },
    {
        mNum: 1955,
        mContent: '대파는 잘게 송송 잘라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a7079d438a2c4d363851b207884652821.jpg',
        recipeId: 280,
    },
    {
        mNum: 1956,
        mContent: '양파도 잘게 잘라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/82dd94976d867c94adbe0aa5d7152df91.jpg',
        recipeId: 280,
    },
    {
        mNum: 1957,
        mContent: '청고추,홍고추도 다져주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5be597ac8053281eba7d96f6684d2f521.jpg',
        recipeId: 280,
    },
    {
        mNum: 1958,
        mContent: '새로운 볼에 분량의 대파, 양파, 청홍고추, 두반장, 고추기름, 고춧가루를 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/cb1ba85bac17d9b93344890a6cd78b2a1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1959,
        mContent: 'Step1과 Step5를 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/37e117753995f8348e4c3cbb07b612261.jpg',
        recipeId: 280,
    },
    {
        mNum: 1960,
        mContent: '분량의 물과 전분으로 전분물을 만들어 넣고 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8ca70df4a5f6d3ce5eeac8495ea205ac1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1961,
        mContent: '두부는 사방 1cm정도의 크기로 잘라주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f443c15110a5b389fb97851d325b31fa1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1962,
        mContent: '내솥에 준비한 양념을 반정도 깔아주고,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f12c3869d1b17aad21be71477bf02eed1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1963,
        mContent: '그 위에 두부를 넣어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b52647f8cf94f551bdb92ed3ff8f70601.jpg',
        recipeId: 280,
    },
    {
        mNum: 1964,
        mContent: '두부 위에 나머지 양념을 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3b4d8f47b77663502dab75e9b06df7cf1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1965,
        mContent:
            '뚜껑을 닫아 오쿠에 안치고 찜 메뉴를 선택한 후 시작취소 버튼을 눌러 조리를 시작합니다. 1. 가열판에 가열물 600ml를 부어주세요. 2. 압력뚜껑에 압력패킹이 잘 끼워져있는지 확인해주세요. 3. 압력뚜껑 결합 후 압력추를 정 위치에 세워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1b70f58cb990a11c46cfaa148a1e9dfd1.jpg',
        recipeId: 280,
    },
    {
        mNum: 1966,
        mContent: '2시간 뒤에 마파두부가 완성되었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2b920c0d17f087767ca21d5569ea41951.jpg',
        recipeId: 280,
    },
    {
        mNum: 1967,
        mContent: '파의 흰 부분을 적당한 크기로 다지고, 방울 토마토는 반으로 썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/694a8a2e5074012447aee2e7d67acadf1.jpg',
        recipeId: 281,
    },
    {
        mNum: 1968,
        mContent: '달걀에 소금을 넣고 잘 풀어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/04c7e52ccbfdf1ef6093568bd0c1b4ec1.jpg',
        recipeId: 281,
    },
    {
        mNum: 1969,
        mContent: '팬에 올리브 오일 2T을 넣고 중약불로 가열. 풀어둔 달걀을 넣고 80% 정도만 스크램블로 익힌 뒤, 그릇에 담아 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/dea666f47cf1bafe43a89af87ebba5b41.jpg',
        recipeId: 281,
    },
    {
        mNum: 1970,
        mContent: '올리브 오일 1T을 다시 두르고 중약불에서 다진 파를 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/85b46503da2352299bd0125f9fc49c401.jpg',
        recipeId: 281,
    },
    {
        mNum: 1971,
        mContent: ')파 향이 나면 썰어 둔 방울 토마토에 후추를 살짝 뿌린 뒤 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/293b3e77d5cafcc2f1ee6b6f897958ef1.jpg',
        recipeId: 281,
    },
    {
        mNum: 1972,
        mContent: '방울 토마토를 살짝 볶다가 달걀을 넣고 중약불로 같이 볶아주세요 *오래 볶을 필요 없어요! 달걀이 살짝 더 익을 정도로만~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/9ceeeae41c1606c031457c2634fe3e5d1.jpg',
        recipeId: 281,
    },
    {
        mNum: 1973,
        mContent: '파슬리를 살짝 뿌리고~ 완성♡',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/d54fc1baec62a2e8db05f73423eb70221.jpg',
        recipeId: 281,
    },
    {
        mNum: 1974,
        mContent: '제일 먼저 물에 떡을 10분 정도 불려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6f246885bb608fb931e1db22663904d21.jpg',
        recipeId: 282,
    },
    {
        mNum: 1975,
        mContent: '다음은 양파 1개를 채썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/892e9d5b76e17806a5d24aa4e11c8f601.jpg',
        recipeId: 282,
    },
    {
        mNum: 1976,
        mContent: '대파 1단은 어슷썰기 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0d4a158348efa19d42c55c4ef46a4c751.jpg',
        recipeId: 282,
    },
    {
        mNum: 1977,
        mContent: '이 정도 두께면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0e91426b061aefa5a123e2b663d4fbb51.jpg',
        recipeId: 282,
    },
    {
        mNum: 1978,
        mContent: '냄비를 약불에 올려주시고 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e64fddb0cbf22f9ef5c64799c62dc0601.jpg',
        recipeId: 282,
    },
    {
        mNum: 1979,
        mContent: '물 300ml를 부어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/858615df629e7bd628c27476923d976e1.jpg',
        recipeId: 282,
    },
    {
        mNum: 1980,
        mContent:
            '*소떡소떡 양념 소스*를 넣고 소떡소떡 양념소스 : 설탕 3큰술(45g), 다진마늘 1/2큰술, 고추장 1큰술, 케찹 2큰술, 간장 2/3큰술, 딸기잼 1큰술(생략가능), 물 1큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f4e3db5190c6d942abc942dc508e56531.jpg',
        recipeId: 282,
    },
    {
        mNum: 1981,
        mContent: '잘 풀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6862954f68840712aa4e385f2ba2d23c1.jpg',
        recipeId: 282,
    },
    {
        mNum: 1982,
        mContent: '소떡소떡 양념은 많이 달기 때문에 고추장 1큰술과',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8667d9d995cd4425ce0c7579696f497f1.jpg',
        recipeId: 282,
    },
    {
        mNum: 1983,
        mContent: '간장 1큰술을 추가해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2c569b40f2ee641b02691b554905d2ba1.jpg',
        recipeId: 282,
    },
    {
        mNum: 1984,
        mContent: '물이 끓어오르면 만두를 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/da22b8cd3d72be7915833f761f67a7411.jpg',
        recipeId: 282,
    },
    {
        mNum: 1985,
        mContent: '떡도 함께 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c27413ca14c20e60ba7be3b894da9c961.jpg',
        recipeId: 282,
    },
    {
        mNum: 1986,
        mContent: '그리고 양파도 넣어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8357ea00e5cdaab2a0a3bc6ae1429ed11.jpg',
        recipeId: 282,
    },
    {
        mNum: 1987,
        mContent: '양파, 떡, 만두를 잘 섞어주시고 바글바글 끓어오르면',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/807edbf21b0ce92854a61a5e9fca859d1.jpg',
        recipeId: 282,
    },
    {
        mNum: 1988,
        mContent: '마지막으로 대파를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/924a6437d03a7c1d8b3973a674a800d11.jpg',
        recipeId: 282,
    },
    {
        mNum: 1989,
        mContent: '모든 재료가 익었으면 그릇에 담아주시고 깨를 뿌려주시면 완성이에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/38917db16a24cb3beea623bb1b030b431.jpg',
        recipeId: 282,
    },
    {
        mNum: 1990,
        mContent: '우선 등뼈는 냄비에 담아 된장 한큰술 넣어 30분간 초벌로 삶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e06ee244f6f486eb4123fdd574c227401.jpg',
        recipeId: 283,
    },
    {
        mNum: 1991,
        mContent:
            '그사이 들어갈 부재료들 손질하는데요. 감자 2개는 큼직하게 썰고요. 양파 반개 채썰어 주고요. 팽이버섯은 1개 다 사용하고, 깻잎 2묶음도 깨끗이 씻어 놔둡니다. 청양고추 2개, 홍고추 1개도 썰어두고, 대파 2대도 어슷썰어 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/62513366f9718648468c38a52cd969ae1.jpg',
        recipeId: 283,
    },
    {
        mNum: 1992,
        mContent: '우거지는 된장 4큰술, 고추장 1큰술, 고춧가루 2큰술, 국간장 2큰술, 다진마늘 1큰술 넣어 조물조물 무쳐줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/18e0dfc6c2228a8b17041ac48944054b1.jpg',
        recipeId: 283,
    },
    {
        mNum: 1993,
        mContent:
            '초벌로 삶은 등뼈는 찬물에 뼈 하나씩 깨끗하게 씻어주고, 냄비도 깨끗이 씻은 다음 등뼈 넣고 물 가득 담아 된장 1큰술 넣고 팔팔 끓여 줍니다. 팔팔 끓으면 무쳐 놓은 우거지랑 고추 넣고 들깨가루 5큰술도 넣고 같이 끓여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b6ff4cf3563c89abf5f37d695346ba5e1.jpg',
        recipeId: 283,
    },
    {
        mNum: 1994,
        mContent:
            '1시간 정도 중불에서 뭉글하게 끓여주다가 감자, 양파를 넣고 더 끓여줍니다. 이때 간은 소금으로 맞춰줍니다. 그런다음 감자가 익을때까지 끓여주고 대파를 넣어 더 끓입니다. 된장을 넣어서 소금 아주 조금만 넣으면 얼추 맞더라구요. 간은 입맛에 맞게 넣어주면 됩니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0c5f0c00a9789a96a804ea54b96dff281.jpg',
        recipeId: 283,
    },
    {
        mNum: 1995,
        mContent: '다 끓었으면 깻잎과 팽이버섯을 넣어주면 우거지 감자탕 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/49ebcd6b606112e537f9444cdfe7852b1.jpg',
        recipeId: 283,
    },
    {
        mNum: 1996,
        mContent: '바지락 한 움큼은 흐르는물에 씻어서 준비해주세요. - 마트에서 파는 바지락은 해감이 어느정도 되어있어서 씻어내기만 해도 괜찮아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/691ca3aa9cac1ad85d72a4e10370b35e1.jpg',
        recipeId: 284,
    },
    {
        mNum: 1997,
        mContent:
            "순두부 1봉지(400g)는 표면을 물에 한번 씻어서 둡니다. - 순두부 포장을 자르자 마자 '팍' 하고 터지듯 물이 나오기 때문에, 먼지나 불순물을 미리 씻어내는게 좋아요. - 1인분을 만들땐, 절반만 사용하면 딱 좋아요.",
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3aa382ef82f289c5a3483b38c97a70321.jpg',
        recipeId: 284,
    },
    {
        mNum: 1998,
        mContent: '파는 어슷썰어 준비하고, 계란도 1개 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/48fb19c82395b971f714e8afbc1a9e171.jpg',
        recipeId: 284,
    },
    {
        mNum: 1999,
        mContent:
            '뚝배기에 식용유 1큰술, 참기름 1/2큰술, 고춧가루 1큰술을 넣고 섞어주세요. - 참기름만 사용하게 되면, 기름이 빨리 타버려서 쓴맛이 나게되고, 식용유만 사용하게 되면, 고소한맛이 나지 않기 때문에 1:1이나, 2:1로 섞어서 사용해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7ae33270c551f2b4330415d7444e515b1.jpg',
        recipeId: 284,
    },
    {
        mNum: 2000,
        mContent:
            '아주 약한 불에서 거품이 날 때까지 볶아 고추기름을 만들어 줍니다. 아주 약한불 - 너무 오래볶거나, 센불에서 볶게되면, 고추가루나, 기름이 타버리면서 까맣고 쓴맛이 나게 되니 주의해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bcb67f84b33ff81997228fd54174ebd31.jpg',
        recipeId: 284,
    },
    {
        mNum: 2001,
        mContent: '거품이 나면 물200~300ml을 넣어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/bf52a9a756f000a0584c578f885135a01.jpg',
        recipeId: 284,
    },
    {
        mNum: 2002,
        mContent: '준비한 바지락을 넣고 센불에서 끓여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e00e053879ca427d22947b1b45bb91b91.jpg',
        recipeId: 284,
    },
    {
        mNum: 2003,
        mContent: '끓으면 다진마늘 1/2작은술을 넣고 잘 섞어서 끓여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2d85643ec8e9e9fc4740b856f12281731.jpg',
        recipeId: 284,
    },
    {
        mNum: 2004,
        mContent: '순두부는 칼을 이용해 반으로 잘라 간수까지 넣고 끓여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/1b55622f35e142d3a5569d1f977af7301.jpg',
        recipeId: 284,
    },
    {
        mNum: 2005,
        mContent: '소금으로 간을 맞춘 뒤에 달걀과 파를 넣고 달걀이 익을 때까지 끓여준면 완성! - 소금은 생각보다 넉넉히 들어가니 참고해주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/aa01593e4753451b3b55aae97d50f5ef1.jpg',
        recipeId: 284,
    },
    {
        mNum: 2006,
        mContent: '가장먼저 숙주를 깨끗히 씻은 후 채에 올려 물기를 빼주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/2d8ead3e1d2d07955e30d075cca40b5a1.jpg',
        recipeId: 285,
    },
    {
        mNum: 2007,
        mContent: '양파 2/1개,파 요정도 마늘 5개를 썰어준비합니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/36c183d58e0609112f907413c997692a1.jpg',
        recipeId: 285,
    },
    {
        mNum: 2008,
        mContent: '고기는 400g정도 준비해주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5b76a1d46449528a8caabd52dbec07b41.jpg',
        recipeId: 285,
    },
    {
        mNum: 2009,
        mContent: '간장은 한숫가락반!(굴소스가 들어갈꺼라서 많이 필요없어요^^)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/72d6c52d380e80e44bdcae688b349c9f1.jpg',
        recipeId: 285,
    },
    {
        mNum: 2010,
        mContent: '다진마늘도 반숫가락 넣어주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9310fa09c0ee6d29a59dfa4fa360632f1.jpg',
        recipeId: 285,
    },
    {
        mNum: 2011,
        mContent: '그 다음 식용유를 가열해주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4d379a251658bb70360a36dc120726f61.jpg',
        recipeId: 285,
    },
    {
        mNum: 2012,
        mContent: '마늘을 넣고 마늘기름을 내줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/e8bc987829a219c73d489871fd97b6441.jpg',
        recipeId: 285,
    },
    {
        mNum: 2013,
        mContent: '조금 노릇노릇해지면 양파.파.고추를 넣어줍니다!(볶다가 중간에 기름이 너무 많으면 2국자정도 빼주세요!)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/c7f55464dd0d7a0dd8d029345b009ef81.jpg',
        recipeId: 285,
    },
    {
        mNum: 2014,
        mContent: '야채가 조금 죽으면 고기를 넣어줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/10d2a1eeb16cd75b1d37f6c9362a96c21.jpg',
        recipeId: 285,
    },
    {
        mNum: 2015,
        mContent: '고기가 요정도 익었을때 설탕 반스푼과 굴소스 1스푼을 넣어주세요!(고기가 너무 많이 익었을때 넣으시면 질겨집니다!)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/15a217855fee820521ad1353cbd956601.jpg',
        recipeId: 285,
    },
    {
        mNum: 2016,
        mContent: '물기를 뺀 숙주를 넣어줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/353666955744a53201e506902a55d9bc1.jpg',
        recipeId: 285,
    },
    {
        mNum: 2017,
        mContent: '뚜껑을 꼭 닫고 5분~7분정도 기다려줍니다!(뚜껑을 열지마세요!)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/08ae1dc4b5a8faaea3d0d9d2851c33021.jpg',
        recipeId: 285,
    },
    {
        mNum: 2018,
        mContent: '그러면 이렇게 맛있는 차돌박이 숙주볶음이 짠!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b28fff5b4c6182615ef2eedcd39ddee21.jpg',
        recipeId: 285,
    },
    {
        mNum: 2019,
        mContent: '재료준비는 소주컵 개량 입니다. 멥쌀 없이 전분이 많은 팥과 율무로만 밥을 하면 식감이 푸들푸들 해서 맛이 없어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/5d11b85fc0c39ac7b01a2a3ecc3f0f5e1.jpg',
        recipeId: 286,
    },
    {
        mNum: 2020,
        mContent:
            '팥을 삶아요 첫번째 끓인 팥물은 버리구요 팥양에 6배정도 물을 넣어서 삶아요 30~50분 소요 됩니다. 팥이 익을때 까지 삶아요 율무쌀은 4시간 이상 불립니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/0e2026ba5a2d44a893f2a9910a1abf421.jpg',
        recipeId: 286,
    },
    {
        mNum: 2021,
        mContent:
            '멥쌀은 씻고, 삶은 팥과 불린 율무쌀을 넣고 평상시 밥하는대로 밥물을 잡으시고요 소주컵 한컵 물을 더 넣어줍니다. 율무쌀이 많이 들어갔기때문에. 율무쌀은 물을 많이 먹어요. 압력밥솥에 잡곡 취사 누릅니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/98449de9e57629a5fc6bd067a9325b991.jpg',
        recipeId: 286,
    },
    {
        mNum: 2022,
        mContent: '멥쌀은 흔적없어졌구요 율무쌀은 존득함이 그대로 있구요 식감도 참 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/185580e19eac48fc4b738a9bcda34ae61.jpg',
        recipeId: 286,
    },
    {
        mNum: 2023,
        mContent:
            '팥. 팥도 구수한 잡곡 이구요 율무는 엄청 구수한맛이 있는 잡곡 이에요. 그냥 밥만 먹어도 맛있습니다. 율무가 단백질함량이 많아서요 포만감이 오래갑니다. 다이어트에 도움이 되어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/079c0071495c816117f08e1fcdae38af1.jpg',
        recipeId: 286,
    },
    {
        mNum: 2024,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/27b33be529c90f011d1c4cdbf075cf0f1.jpg',
        recipeId: 287,
    },
    {
        mNum: 2025,
        mContent: '- 식빵 엄지손톱 크기로 깍둑썰기 - 준비한 초콜릿, 건과일들 한대 섞어 준비하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/90621e96a6b5d1772b354ee366286b9c1.jpg',
        recipeId: 287,
    },
    {
        mNum: 2026,
        mContent: '- 볼에 식빵과 초콜릿, 건과일을 제외한 모든 재료 넣어 섞기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/a002be6574a81095bf46d981bc43d1f31.jpg',
        recipeId: 287,
    },
    {
        mNum: 2027,
        mContent: '거품기로 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9a6ccb91efcde393bd3775f96e1c55901.jpg',
        recipeId: 287,
    },
    {
        mNum: 2028,
        mContent:
            '- 식빵 넣어 10~15분간 실온 보관 Tip. 빵이 수분을 흡수할 수 있게 잠시 기다려요. 약간 건조한 빵일수록 더 좋아요. 냉동보관한 빵 실온해동해서 써도 좋고요. - 오븐 사용 시 200도 예열해주세요. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d11299efd41ee7d9a07ca34183162d491.jpg',
        recipeId: 287,
    },
    {
        mNum: 2029,
        mContent: '- 준비한 용기 절반 식빵 눌러 담기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/d3ad36b50b43413d51ba716551e01e991.jpg',
        recipeId: 287,
    },
    {
        mNum: 2030,
        mContent: '- 중간에 섞어놓은 초콜릿, 건과일 넣기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f3cea948737b34c0bc64594acaa299c91.jpg',
        recipeId: 287,
    },
    {
        mNum: 2031,
        mContent: '- 다시 식빵 올린 후 남은 초콜릿과 건과일 올리기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/6ffe85401cfa98923fcc81b23c0464341.jpg',
        recipeId: 287,
    },
    {
        mNum: 2032,
        mContent:
            '- 예열된 오븐에 굽기 Tip. 전자레인지 사용 시 중간중간 확인하면서 익히기. 오븐보다 시간이 덜 걸릴 거예요. 달걀이 익었는지만 확인하면돼요. 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8b532bbfc56a640e616c02e51b1020821.jpg',
        recipeId: 287,
    },
    {
        mNum: 2033,
        mContent: '- 슈가파우더나 데코스노우로 솔솔 뿌려주면 더 근사하게 완성할 수 있어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3c608a65fd45796ece004aec980fc3381.jpg',
        recipeId: 287,
    },
    {
        mNum: 2034,
        mContent: '식힐 필요도 없이 바로 먹으면 브레드푸딩 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/38eb2237e7b51d5c63974c6958dd65371.jpg',
        recipeId: 287,
    },
    {
        mNum: 2035,
        mContent: '오징어랑 새우가 들어있는 햄 (소세지) ~ 오징어짬뽕라면 맛이 나요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bc0535c038655d8783a756e3a588d3bd1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2036,
        mContent: '과일을 구워먹으면 육즙과 단맛이 더 강해져서~엄청 맛이 좋아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/2139841bc6de44f6cfff80381d3b56891.jpg',
        recipeId: 288,
    },
    {
        mNum: 2037,
        mContent: '베이컨~ 남은걸로는 베이컨볶음밥도 가능하고 피자한판 더 해먹어도 되공~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/fde13abaea3dcc24c4826eadcb2194481.jpg',
        recipeId: 288,
    },
    {
        mNum: 2038,
        mContent:
            '파인애플, 소세지(햄), 베이컨을 구워서 준비 이유는 ? 오븐이 없기때문에 ..미리 ... 웬만큼 구워놓고 전자렌지에서는 모짜렐라 치즈정도 녹여주는데 중점~ 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/17df2b72aad04ba76cf0b0405cf0983b1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2039,
        mContent: '버섯 구워줄때 소금 샤샤샤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0a8c7a868a1c9bf571eb3fc58e4e60d21.jpg',
        recipeId: 288,
    },
    {
        mNum: 2040,
        mContent: '피자토핑 준비완료~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/f3d58bfd147bcfd12899b99dbfe5aaa31.jpg',
        recipeId: 288,
    },
    {
        mNum: 2041,
        mContent: '눌러붙지 말라고 기름 따르고 바닥에 깔아주기~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/45f0dfcde6075929e1d070ab70e8da0f1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2042,
        mContent:
            '상상해 봤어요... 마구마구 이런 식빵을 ... 잘게 조각내어 바닥에 깔고 ... 촘촘하게 하면~ 마치 피자도우처럼 마치 또띠아처럼 토마토소스를 발라줄 수 있을 것 같았어요~결론은 가능은 해요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/80985d93ff4c252129da1077d95ef1191.jpg',
        recipeId: 288,
    },
    {
        mNum: 2043,
        mContent: '요거 바르고 나서~ 흥분!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/acef7e87432798e5362dcc02acf00c291.jpg',
        recipeId: 288,
    },
    {
        mNum: 2044,
        mContent: '토핑올리고 심장박동수 증가~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7bbf558a1c3c7fdafb9200db90ccd69d1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2045,
        mContent: '치즈를 올려준후 기대감 UP',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/967eff9117383adee7f775951ae37e5f1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2046,
        mContent: '전자렌지 에 들어간 수제피자 약 6~7분 돌려줬네요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/9daf9dd0b5b1fa68713fd363107b4d0d1.jpg',
        recipeId: 288,
    },
    {
        mNum: 2047,
        mContent:
            '오이는 씨 제거하고 굵게 썰어 소금 1티스푼 과 물 약간 넣고 절여요 재료 준비하는동안 절이면 됩니다 시금치 무침이 조금 있어 오이로 대체 했어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f009b881c76ef9faf2804d18c86004811.jpg',
        recipeId: 289,
    },
    {
        mNum: 2048,
        mContent:
            '단무지와 우엉조림 팩을 사용했어요~ 단무지와 우엉조림은 키친타월로 물기 제거해 준비하고 절인오이는 물기 제거 후 팬에 살짝 볶아 주고 밥은 참기름과 소금 약간 넣고 섞어 식혀요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b3cdb7b45cf97ef0b1fdad50ca0171571.jpg',
        recipeId: 289,
    },
    {
        mNum: 2049,
        mContent: '계란은 소금과 맛술 약간 넣고 풀어 지단 부쳐 식혀요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/25e628f4a00558cdd5a082d6aa09bca81.jpg',
        recipeId: 289,
    },
    {
        mNum: 2050,
        mContent: '스팸은 슬라이스해 구운 후 적당한 길이로 자르고 지단 채 진미채 준비하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c63ea3e8848b726cb590cf09cbb79d251.jpg',
        recipeId: 289,
    },
    {
        mNum: 2051,
        mContent: '김 위에 밥과 재료 골고루 올리고 돌돌 말아주세요 먹고남은 파프리카가 있어 넣어 주었어요~^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/a09438601bd842dff423124a0e651cfa1.jpg',
        recipeId: 289,
    },
    {
        mNum: 2052,
        mContent: '말은 김밥에 고소한 참기름 바르고요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/50bbd57f158cceb7c715adc904c4b1791.jpg',
        recipeId: 289,
    },
    {
        mNum: 2053,
        mContent: '오이의 아삭함이 진미채와도 잘 어울리네요~ 봄 나들이 도시각 김밥 완성~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/13b8030bf8f3d90676aef9f0333182521.jpg',
        recipeId: 289,
    },
    {
        mNum: 2054,
        mContent: '양파껍질을 벗긴 후, 얇게 썰어주세요. 양파1개',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e003b9a368f33b8e735b32bebe61db741.jpg',
        recipeId: 290,
    },
    {
        mNum: 2055,
        mContent: '대파의 아랫부분을 사용하여 파채를 만들듯 썰어주세요. 대파',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ac0586cb082424a44abdd2c1e9707c2d1.jpg',
        recipeId: 290,
    },
    {
        mNum: 2056,
        mContent: '양파와 대파를 함께 찬물에 넣어주세요. 찬물에 넣어서 매운맛도 빼고 식감을 살려주는 단계입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cbf05dd11f4901737bb042e5e57268231.jpg',
        recipeId: 290,
    },
    {
        mNum: 2057,
        mContent: '영양부추를 깨끗하게 씻은 후, 먹기좋은 사이즈로 잘라줍니다. (5~6cm가 적당합니다) 영양부추 1/2단',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9422179a9fcd86e389ba711348ca008b1.jpg',
        recipeId: 290,
    },
    {
        mNum: 2058,
        mContent:
            '영양부추 무침의 양념장을 만들 차례입니다. 고추장 1+1/2큰술 매실청 4큰술 식초 1큰술 고추가루 1/2티스푼 고추장, 매실청, 식초, 고추가루',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f058e824822e8bebcf1e45ad337fd6b31.jpg',
        recipeId: 290,
    },
    {
        mNum: 2059,
        mContent: '다진마늘 1/2티스푼 파쉬소스 1티스푼 참기름 1큰술 깨소금 듬뿍! 다진마늘, 피쉬소스, 참기름, 깨소금',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d2d3ce59ff29d495f6f58d32c4ed052c1.jpg',
        recipeId: 290,
    },
    {
        mNum: 2060,
        mContent: '프라이팬에 기름을 살짝 뿌려준 후 편마늘을 구워서 마늘향이 나게 해주세요. 기름, 편마늘',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b520063337c83498347fcf7ab2cd2f2f1.jpg',
        recipeId: 290,
    },
    {
        mNum: 2061,
        mContent: '차돌박이를 마늘과 함께 볶아주세요. (마늘향이 풍부한 차돌박이, 기가막힙니다) 차돌박이 300g',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/54cdb42e2d10ed9ee13de21c0e3cd4101.jpg',
        recipeId: 290,
    },
    {
        mNum: 2062,
        mContent: '처음에 준비했던 양파, 대파, 영양부추를 함께 섞어주고 양념과 함께 버무려주세요. 손질된 영양부추, 양파슬라이스, 대파채, 무침양념',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/74704cc17e1b7af415a78b66d8f716511.jpg',
        recipeId: 290,
    },
    {
        mNum: 2063,
        mContent: '플레이팅에 들어갑니다. 그릇 주변으로 영양부추무침을 둘러주세요. 잘 버무려진 영양부추무침',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/eb499df482420a243bc349f37eef08941.jpg',
        recipeId: 290,
    },
    {
        mNum: 2064,
        mContent: '그리고 잘 구워진 마늘과 차돌박이를 가운데 올려주면 요리가 완성이 됩니다. 마늘과 함께 구운 차돌박이, 영양부추무침',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/84eedeee3d1a06f085e5114b7c1e89431.jpg',
        recipeId: 290,
    },
    {
        mNum: 2065,
        mContent: '큰감자6개를준비해주시고 칼로감자껍질을 벗겨주시고 깨끗히씻어 강판에갈아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/4cee8b04c507502bb871b523de48d8d21.jpg',
        recipeId: 291,
    },
    {
        mNum: 2066,
        mContent: '부침가루2T를넣고섞어주시고 소금도약간넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7e9b372ac5fc51751b36e2728d74a8f11.jpg',
        recipeId: 291,
    },
    {
        mNum: 2067,
        mContent: '양파는다져서 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/7c7d351326906cea25d09e19e1b846e81.jpg',
        recipeId: 291,
    },
    {
        mNum: 2068,
        mContent: '당근도다져서 넣어주시고요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/b50965170674b4b4f0e58fce8ace101b1.jpg',
        recipeId: 291,
    },
    {
        mNum: 2069,
        mContent: '애호박,청양고추도다져서넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/8493f455e87dc405d77e6ed02fa2c69c1.jpg',
        recipeId: 291,
    },
    {
        mNum: 2070,
        mContent: '갈아진감자와야채를 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/f7b22d0ff4e0279226bc69f1ae0de50d1.jpg',
        recipeId: 291,
    },
    {
        mNum: 2071,
        mContent: '팬에기름을두르고달궈지믄 적당히한국자씩 얇게 부쳐주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/3458e99b4177c4f9f3780de8767b33e81.jpg',
        recipeId: 291,
    },
    {
        mNum: 2072,
        mContent: '맛있고담백 감자전 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/442fc22b508a3b8a0ab82997559ce0511.jpg',
        recipeId: 291,
    },
    {
        mNum: 2073,
        mContent: '아이도좋아해서 자주먹게되는 감자전 ~~★',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/04/9ca571c301b224403a56c7dbf0937d7d1.jpg',
        recipeId: 291,
    },
    {
        mNum: 2074,
        mContent: '통조림골뱅이 한캔은 깨끗히씻어 준비하세요 (적당하게먹기좋은크기로잘라주세요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3668a55f830582da34422342bf068de01.jpg',
        recipeId: 292,
    },
    {
        mNum: 2075,
        mContent: '냉장고 짜투리채소를 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ce44dc363cbb66ac25d4f3a6a9cc1f731.jpg',
        recipeId: 292,
    },
    {
        mNum: 2076,
        mContent: '참기름과통깨만빼고위의분량대로 양념장을 만들어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3be1d9484f7a8fce8678a43b2d0b41231.jpg',
        recipeId: 292,
    },
    {
        mNum: 2077,
        mContent:
            '소면삶는방법은 끓는물에넣어주고 한번더끓어오르면찬물을부어주세요 익었다싶으면불을꺼주세요 소면은 끓는물에대략1분정도면 삶아진답니다 소면은 (동전크기가1인분정도양이예요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/37158b8da0d5706d6fc3de9beee0f5ed1.jpg',
        recipeId: 292,
    },
    {
        mNum: 2078,
        mContent: '소면은재빨리찬물에헹궈주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/52ffc68d77743a2c2996ea8945e1c3f21.jpg',
        recipeId: 292,
    },
    {
        mNum: 2079,
        mContent: '골뱅이와야채 양념장을 넣어주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/620967eabe0f7a14db04f8ee465d0c681.jpg',
        recipeId: 292,
    },
    {
        mNum: 2080,
        mContent: '같이섞어서무쳐주세요 마지막으로통깨와참기름살짝넣어주고 한번더무쳐주면완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f9278e227def01a32338efb0026d7ff01.jpg',
        recipeId: 292,
    },
    {
        mNum: 2081,
        mContent: '백종원양념장으로만든골뱅이무침은언제나맛있어요~~^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/bbcf8ee617e0db4357aec2b04b2961a31.jpg',
        recipeId: 292,
    },
    {
        mNum: 2082,
        mContent: '어묵과양배추는적당한크기로자르고당근은채썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/05db104d4aa863576bcd8bc92a44fd1f1.jpg',
        recipeId: 293,
    },
    {
        mNum: 2083,
        mContent: '팬에기름을두르고 양배추를먼저넣고살짝볶다가 당근 어묵도같이넣고볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/044fe1e990a083c944f8cac6b1bfbf441.jpg',
        recipeId: 293,
    },
    {
        mNum: 2084,
        mContent:
            '굴소스,간장,설탕,맛술,올리고당,다진마늘넣고볶아주다가 대파넣고 참기름,통깨넣고한번휘릭볶아주믄 어묵볶음 완성 아이가먹을꺼면 그대로하시고 어른이먹을꺼면 청양고추 한개추가해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/551ba768555591b3d84c077517301c6a1.jpg',
        recipeId: 293,
    },
    {
        mNum: 2085,
        mContent: '굴소스 어묵볶음 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/47b46151ff52af6d53433a43c53d0c061.jpg',
        recipeId: 293,
    },
    {
        mNum: 2086,
        mContent:
            '찌개를 끓일 뚝배기에 쌀뜰물을 반만큼 채워주세요. (저는 800ml정도 부었습니다.) *쌀뜰물은 쌀 씻은 2번째 물이 가장 맛있다고 해요. 쌀뜰물 뚝배기 아직 불은 키지 말아주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4075356696431642bcf65015276c57c61.jpg',
        recipeId: 294,
    },
    {
        mNum: 2087,
        mContent:
            '찌개용 돼지고기 200g정도 쌀뜰물에 넣어 센불에 끓여줍니다. 백종원 선생님의 팁 주요 포인트! 쌀뜰물이 차가울 때 고기를 넣어주시는 겁니다. 찌개용 돼지고기 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/efed82ed8e2220c0eeaa188e249728621.jpg',
        recipeId: 294,
    },
    {
        mNum: 2088,
        mContent: '팔팔 끓기 시작하면 된장 1/2스푼을 넣어 풀어줍니다. 된장 스푼 중-강불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/8c0cde735298625c293de1c5cc0124281.jpg',
        recipeId: 294,
    },
    {
        mNum: 2089,
        mContent:
            '신김치 2~2.5컵을 송송 썰어 넣어주세요. 이때 새우젓 1티스푼도 같이 넣어 끓여줍니다. 신김치, 새우젓 도마 , 칼 중불 김치찌개는 새우젓이 작은 양이지만 맛에 한 몫 한다는 것 잊지 마세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/dec94fd547bd0df1a9f9dcb95ac2426d1.jpg',
        recipeId: 294,
    },
    {
        mNum: 2090,
        mContent: '다진 마늘 1개를 넣어 끓여 주세요. 다진 마늘 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9e9b990402d54575a83b1a9806c4e12d1.jpg',
        recipeId: 294,
    },
    {
        mNum: 2091,
        mContent:
            '신김치는 시다보니 찌개가 많이 실 수 있어요. 그렇기 때문에 설탕 1큰술도 넣어주세요. 집집마다 신김치의 신 정도가 다르기 때문에 간을 보시고 설탕을 더 넣어주셔도 됩니다. 설탕 중불 만약 김치가 좀 싱거워 적당량을 넣었는데도 간이 뭔가 부족한가 싶으면 국간장 1스푼을 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/69538e3b30f5350a799216f89ae924401.jpg',
        recipeId: 294,
    },
    {
        mNum: 2092,
        mContent: '고춧가루 1큰술을 넣어줍니다. 고춧가루 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/600ec8a4d1526a72edde39fd554c40261.jpg',
        recipeId: 294,
    },
    {
        mNum: 2093,
        mContent:
            '두부 1/2모를 정육면체로 썰어 넣어주세요. 두부 도마 , 칼 중불 이 단계는 원하시는 분들만 넣어주시면 됩니다. 저는 두부를 좋아해서 넣어주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/1727ed1e259ca9dc55f76417f3da517f1.jpg',
        recipeId: 294,
    },
    {
        mNum: 2094,
        mContent: '청양고추와 홍고추 각 1개씩 어슷썰어 넣어 주시고 파도 1줌 넣어 팔팔 끓여 줍니다. 청양고추, 홍고추, 파 도마 , 칼 중-강불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4bc66366540693ecc700b0fcb199caad1.jpg',
        recipeId: 294,
    },
    {
        mNum: 2095,
        mContent: '달구어진 팬에 들기름 1큰술을 부어 김치 1컵을 송송 잘게 썰어 중불에 볶아 줍니다. 들기름, 김치 도마 , 칼 , 후라이팬 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/2f262fff0a80e81f4ad5bea36d8619e71.jpg',
        recipeId: 295,
    },
    {
        mNum: 2096,
        mContent: '멸치다시육수 4큰술을 부어주세요. 멸치다시육수 중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cdcfe18c32ffb0a9630d6793d3d873571.jpg',
        recipeId: 295,
    },
    {
        mNum: 2097,
        mContent: '설탕 1스푼을 넣어 자박하게 끓이듯 볶아주세요. 설탕 중-강불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/6ffa9072789559ac139fb086bb0650111.jpg',
        recipeId: 295,
    },
    {
        mNum: 2098,
        mContent: '국물이 많이 날아가면 스팸 1개를 깍둑썰어 넣어 볶아줍니다. 스팸 도마 , 칼 약-중불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b06d14aa8a019137b92c8f47e05b7dfa1.jpg',
        recipeId: 295,
    },
    {
        mNum: 2099,
        mContent: '접시에 옮겨 담아 깨소금 1스푼으로 마무리하면 끝! 깨소금',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4fa65933349648437c0402d54745378f1.jpg',
        recipeId: 295,
    },
    {
        mNum: 2100,
        mContent: '두부가 들어가기 적당한 용기에 남은 두부를 넣습니다. 두부 용기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ace283de0dc5502a84f9cd9cba1746dd1.jpg',
        recipeId: 296,
    },
    {
        mNum: 2101,
        mContent: '간수 효과를 내기 위해 두부가 놓인 곳 옆 빈 공간에 소금을 1스푼 넣어 줍니다. 소금(맛소금, 굵은 소금 다 됨.)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f224efcb5121db4623bdde5d6813fe491.jpg',
        recipeId: 296,
    },
    {
        mNum: 2102,
        mContent: '정수기물 혹은 생수를 두부가 가득 차도록 채워줍니다. ** 수돗물 절대 안되요! 정수기물 혹은 생수',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ddb0b71f10e4476b1cbbd50c9831f2cf1.jpg',
        recipeId: 296,
    },
    {
        mNum: 2103,
        mContent:
            '뚜껑을 꼬옥 닫고 냉장보관합니다. 시간이 되신다면 매일 혹은 이틀에 한번은 이 물을 버리고 다시 생수를 넣어 주시면 더 오래 신선하게 두부를 보관하실 수 있답니다. 뚜껑',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fc0f5a6dc33dd95e29d96c6073b38cae1.jpg',
        recipeId: 296,
    },
    {
        mNum: 2104,
        mContent:
            '비빔국수에 넣을 야채들(파프리카 빨강1/6개 노랑1/6개, 오이 1/4개, 깻잎 5장, 상추 혹은 쌈배추 2장)을 얇고 길게 썰어 준비합니다. 파프리카(빨/노), 오이, 깻잎, 상추 혹은 쌈배추 도마 , 칼',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e277776fc748b8fe289b183863555fcb1.jpg',
        recipeId: 297,
    },
    {
        mNum: 2105,
        mContent:
            '달구어진 후라이팬에 식용유를 두르고 계란 1개(소금 간 살짝)를 굽고 마늘햄 1/4개, 사각 어묵 1/3개는 얇고 길게 썰어 볶듯이구워줍니다. 식용유, 계란, 마늘햄, 사각 어묵 후라이팬 , 도마 , 칼 약불 고명은 타면 안되니까 약불에서 천천히 굽기!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cb4c5fe2245effc412288c45a2fc4a0b1.jpg',
        recipeId: 297,
    },
    {
        mNum: 2106,
        mContent:
            '넓은 냄비에 물을 반 이상 채워 끓으면 국수면을 넣어 5분 정도 삶아 줍니다. 국수면, 물 넓은 냄비 중불 - 물을 많이 넣어주시면 국수면이 냄비에 하나도 들러붙지 않고 삶으실 수 있습니다. - 면을 삶을 때 물이 너무 많으면 넘칠 수 있어서 중불에서 젓가락으로 계속 면을 저어주고 들어올렸다 내렸다 해주시면 넘치지 않아요. - 국수 면 2인분은 엄지와 검지를 동그랗게 했을 때 500원짜리 동전크기보다 더 많이 넣어 주었습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/1d216644bcba688af6aee774105b29e91.jpg',
        recipeId: 297,
    },
    {
        mNum: 2107,
        mContent: '채를 준비하여 다 삶아진 면을 채에 걸러 찬물에 3번 정도 헹궈 찹찹하게 해주세요. 채',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e2c50a3b5537a0e45bcfee1339ddfbeb1.jpg',
        recipeId: 297,
    },
    {
        mNum: 2108,
        mContent:
            '채에 거른 면을 다시 큰 냄비에 넣어 준비해둔 모든 고명들을 넣어 양념장을 넣어 비닐 장갑을 착용하여 손으로 야무지게 비벼줍니다. (양념장: 초고추장 4큰술 + 고추장 1스푼 + 설탕 2.5스푼 + 참기름 1.5스푼 + 깨소금 1큰술) STEP1,2 고명들, 양념장(초고추장, 고추장, 설탕, 참기름, 깨소금) 비닐 장갑',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c61d494a259c2734fcbbeaec22e9d4dc1.jpg',
        recipeId: 297,
    },
    {
        mNum: 2109,
        mContent: '깻잎 조금 남겨두고 위에 얹어 주시면 더 이쁘게 보인답니다! 남은 깻잎',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4c34fe0b856d247b715c7d0edc5742ee1.jpg',
        recipeId: 297,
    },
    {
        mNum: 2110,
        mContent: '훈제연어, 혹은 생 연어를 얇게 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/bf17f85780035089e503f210cc59e7861.png',
        recipeId: 298,
    },
    {
        mNum: 2111,
        mContent: '양파를 얇게 썰어서 차가운 물에 담궈 아린맛을 빼주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f9e49b5463600689fac41a5e6fd2186c1.png',
        recipeId: 298,
    },
    {
        mNum: 2112,
        mContent: '케이퍼나 케이퍼가 없으실 경우엔 피클을 얇게 썰어 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/591eb2a26050eb52cb8d129174997cd31.png',
        recipeId: 298,
    },
    {
        mNum: 2113,
        mContent: '소스 재료 *머스타드, 크림치즈, 마요네즈를 함께 섞어서 빵 위에 발라주세요 듬뿍~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c1e137109f27c2cd14178028eed924cc1.png',
        recipeId: 298,
    },
    {
        mNum: 2114,
        mContent: '연어, 양파, 피클 함께 듬뿍 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4327f5a378c0daa0c2faeeea38c7df321.png',
        recipeId: 298,
    },
    {
        mNum: 2115,
        mContent: '허브를 키우고 계시다면 썰어서 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/5905096d485bf3f4210d963d659a94861.png',
        recipeId: 298,
    },
    {
        mNum: 2116,
        mContent: '저는 파슬리를 조금 뿌려줬어요. 생 허브(딜, 파슬리)가 있으시면 더 좋을 거에요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f93768e1b59a8bbd6f51df65bf8e2d3b1.png',
        recipeId: 298,
    },
    {
        mNum: 2117,
        mContent: '달걀과 설탕을 함께 휘핑 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e2488f50fe3d6c8b8a7448370c38b93b1.png',
        recipeId: 299,
    },
    {
        mNum: 2118,
        mContent: '뽀얗게 될 때까지 해주시면 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ed84f051dd0afa3386f7268af86b509b1.png',
        recipeId: 299,
    },
    {
        mNum: 2119,
        mContent: '체쳐둔 가루류(밀가루, 베이킹 파우더)를 함께 넣어주세요 .거품이 꺼지지 않도록 주의하며 살살 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/0d7b6235c667b4db184ca3699c5f9fd31.png',
        recipeId: 299,
    },
    {
        mNum: 2120,
        mContent: '우유와 녹인 버터를 함께 반죽에 섞어주세요. 밑에서 들어올리는 느낌으로 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/48bd7a62c8b7b84b8ac66f601ac4b5b61.png',
        recipeId: 299,
    },
    {
        mNum: 2121,
        mContent: '유산지를 깔아둔 팬에 패닝하고 바닥에 탕탕 내리쳐주세요. 180도에서 15-20분 정도 구워주시면 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/8d42cce2608b64871eed71ca1e3958f61.png',
        recipeId: 299,
    },
    {
        mNum: 2122,
        mContent: '초콜릿을 중탕해서 식용색소를 사용해 원하는 색을 만들어 주세요. 혹은 원하시는 색의 초콜릿을 구입하여 사용해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c89d0d2c863c332106f5208fb87c94051.png',
        recipeId: 299,
    },
    {
        mNum: 2123,
        mContent: '유산지 위에 초콜릿을 얇게 펴주세요. 스페츌러를 사용하여 얇게 펴주시고 굳혀주시면 되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/28c046d99bc3f479c1aac5025ce9f7ca1.png',
        recipeId: 299,
    },
    {
        mNum: 2124,
        mContent: '굳혀진 초콜릿을 스페츌러를 사용해 일정한 길이로 잘라내주세요. 길이만 비슷하게 해주시면 되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fa06256e72f5b53c83ccb152d2a7a80b1.png',
        recipeId: 299,
    },
    {
        mNum: 2125,
        mContent: '이제 케익을 쌓아올릴께요! 구워둔 케익 시트를 잘라서, 원하시는 과일을 올리고 아이싱해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fbfe35aa410e0908abc79d7117f98ff81.png',
        recipeId: 299,
    },
    {
        mNum: 2126,
        mContent: '아까 잘라둔 초콜릿을 겹겹이 쌓아주세요. 가쪽부터 차곡차곡 쌓아주시면 되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4e1d94ee65e50ffab4d6a9358ea68b1a1.png',
        recipeId: 299,
    },
    {
        mNum: 2127,
        mContent: '촘촘히 꽃아주셔야 예뻐요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4919e3eedd8b1ceef2c6d7083e4d7b231.png',
        recipeId: 299,
    },
    {
        mNum: 2128,
        mContent: '더 이상 틈이 없다 싶을 때까지 꽃아주시면 됩니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/385ffd56439aa0878e258654658536ba1.png',
        recipeId: 299,
    },
    {
        mNum: 2129,
        mContent: '먼저 양파는 채썰어 준비하고애호박은 반달모양으로 먹기 좋게 썰어 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/5e0a5b66cac4ef9c655b5bb42a7f94fb1.jpg',
        recipeId: 300,
    },
    {
        mNum: 2130,
        mContent:
            '애호박은 물기가 생기지 않도록소금을 뿌려 10분정도 절여줍니다. 이때 이과정을 해줘야간도 잘 베이고, 물도 생기지 않아더 맛있게 먹을수 있어요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b2046d2458741fc514f01c60755990921.jpg',
        recipeId: 300,
    },
    {
        mNum: 2131,
        mContent: '10분 후, 팬에 참기름이나 들기름 반 스푼을 두르고 양파를 먼저 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/16875ecf5728ebd24d360dece00c1c4a1.jpg',
        recipeId: 300,
    },
    {
        mNum: 2132,
        mContent: '양파가 투명해지면 호박도 넣어 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/e658ad0d2491cfaf1e6077341140f9f81.jpg',
        recipeId: 300,
    },
    {
        mNum: 2133,
        mContent:
            '그리고 다진마늘 반 스푼과 새우젓도 1/3스푼 넣어 볶아줍니다. 새우젓은 첨부터 많이 넣지 마시구 1/31스푼 먼저 넣은 후 부족하면 그때 더 추가하심 될것 같아요 참고로 소금에 한번 절여서 그런지간이 딱 맞아 추가 안해도 되더라구요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c75ddedc449238e1ff7ea9c046720e551.jpg',
        recipeId: 300,
    },
    {
        mNum: 2134,
        mContent: '마지막으로 송송썰은 대파와통깨 넣어 한번더 휘리릭- 해주면 끝!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/508f1165ff81d0f576e05c1583a490681.jpg',
        recipeId: 300,
    },
    {
        mNum: 2135,
        mContent:
            '오레오 부순것을 곱게 갈아 토핑용으로 준비합니다. 저는 오레오 분태를 사용했는데요, 크림까지 같이 들어간 제품을 사용했어요. 일반 오레오 사용하실 분은 크림까지 같아 갈아주심 좋을것 같네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e72e50ed9a6251d397c8160d09d0da001.jpg',
        recipeId: 301,
    },
    {
        mNum: 2136,
        mContent: '볼에 실온의 버터와 크림치즈를 부드럽게 풀고, 설탕을 넣고 잘 섞은 후, 바닐라 익스트랙을 넣고 잘 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/1144f9893d986ac04a1bb7e82a8f7c1f1.jpg',
        recipeId: 301,
    },
    {
        mNum: 2137,
        mContent: '체친 박력분을 넣고 섞다가,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/0496ca06e0db0334a49d8ea70ee884a11.jpg',
        recipeId: 301,
    },
    {
        mNum: 2138,
        mContent: '초코칩을 넣고 잘 섞어주세요. 저는 오레오 분태가 조금 남아 20g 정도 넣어주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b02794f3549ddfd72836830fb77d058a1.jpg',
        recipeId: 301,
    },
    {
        mNum: 2139,
        mContent:
            '스쿱으로 한스쿱씩 떠서 동그랗게 모양을 만든후, 만들어둔 오레오 가루를 고루고루 잘 묻혀 팬닝해주세요. 170~180도로 예열된 오븐에서 12~15분 정도 바닥이 노릇해질 정도로 구워줍니다. 굽기 시작한지 8~9분쯤 지났을때 살짝 눌러준 후 나머지를 구워주세요. 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3e4ec020175072e1c19770a58758523d1.jpg',
        recipeId: 301,
    },
    {
        mNum: 2140,
        mContent: '멸치는 프라이팬에 바삭하게 볶아 비린맛을 없애주고 멸치가루는 털어낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1cacc39ffb1d76baf200ec67f02b4e851.jpg',
        recipeId: 302,
    },
    {
        mNum: 2141,
        mContent: '당근, 대파도 썰어주고 양념을 넣고 잘 섞어준 후 2~3장 깻잎위에 켜켜이 올려준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/4c0126ab9c58911b660403e4fe8c62741.jpg',
        recipeId: 302,
    },
    {
        mNum: 2142,
        mContent: '물, 맛술, 간장, 조청을 넣고 졸여준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7c93ca1640b22f6471c32ace005166261.jpg',
        recipeId: 302,
    },
    {
        mNum: 2143,
        mContent: '조림장에 손질해 둔 멸치, 청양초를 넣고 끓여준 후 통마늘, 새송이버섯, 꽈리고추를 넣어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/27c0c43dac7589429019af989e3db32a1.jpg',
        recipeId: 302,
    },
    {
        mNum: 2144,
        mContent: '양념해 둔 깻잎을 돌려가며 담아준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/cf39c6508238a928291c94a816e96eb11.jpg',
        recipeId: 302,
    },
    {
        mNum: 2145,
        mContent: '깻잎 위에 끓는 육수를 끼얹어준 후 뚜껑을 닫고 살짝 익혀주면 완성된다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/f4ea5b4e0b2495b40233aa15996040381.jpg',
        recipeId: 302,
    },
    {
        mNum: 2146,
        mContent: '계란은 풀어 지단을 부쳐주고 청양초, 대파도 먹기 좋은 크기로 썰어둔다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/cd4bc6bf3110156b70fe1a6073dee03a1.jpg',
        recipeId: 303,
    },
    {
        mNum: 2147,
        mContent: '국수는 끓어오르면 깜짝 물 3번을 해 주고 삶아준 후 얼른 찬물에 담가 싹싹 비벼가며 씻어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/dd179c4ca93b8e63cfad096b5d111eeb1.jpg',
        recipeId: 303,
    },
    {
        mNum: 2148,
        mContent: '물 6컵 정도 붓고 다시마 멸치로 육수를 내준 후 멸치 액젓으로 간하고 애송이 버섯을 넣어 끓여준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/5e06bcd87f22a010f7cd6a79410e63421.jpg',
        recipeId: 303,
    },
    {
        mNum: 2149,
        mContent: '삶아둔 국수를 접시에 담고 계란 지단, 대파, 청양초, 고춧가루를 올린 후 육수를 부어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/cf8e6a56274034ca2d156b22a6ec77681.jpg',
        recipeId: 303,
    },
    {
        mNum: 2150,
        mContent: '김가루, 깨소금, 참기름을 뿌려 완성한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/4fe9015f2438b8700445587fc04bc7a61.jpg',
        recipeId: 303,
    },
    {
        mNum: 2151,
        mContent: '찹쌀풀을 만듭니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2152,
        mContent: '돌나물을 손질해서 깨끗히 씻어 체에 받칩니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2153,
        mContent: '무를 나박썰기를 합니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2154,
        mContent: '오이도 썰어 놓습니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2155,
        mContent: '통에 무를 넣고 소금t로 절입니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2156,
        mContent: '소금1t로 오이도 절입니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2157,
        mContent: '파를 길게 채로 썰고 고추도 썰어 물에 헹궈 씨를 제거 합니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2158,
        mContent: '돌나물 파 고추를 통에 담습니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2159,
        mContent: '찹쌀풀에 모든양념을 하고 통에 담습니다',
        mPicture: '',
        recipeId: 304,
    },
    {
        mNum: 2160,
        mContent: '닭가슴살햄을 준비해주세요 많이드시고싶으면 닭가슴살햄을좀더추가로준비해주시구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b6759702e9fc4c9e58e49c85bd202f841.jpg',
        recipeId: 305,
    },
    {
        mNum: 2161,
        mContent: '노랑파프리카 빨강파프리카 오이를 적당한크기로채썰어준비하세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/446901db570293695a79e3e2b0f10b3a1.jpg',
        recipeId: 305,
    },
    {
        mNum: 2162,
        mContent: '닭가슴살햄위에 야채들을 넣고 돌돌말아주세요 야채는 꼭파프리카아니어도냉장고짜투리채소로활용하셔도되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d53d152d66d398faaa4abed2cc9bc5a01.jpg',
        recipeId: 305,
    },
    {
        mNum: 2163,
        mContent: '머스터드소스에찍어서먹으면 넘맛있어요 초간단 닭가슴살햄 파프리카말이완성~~♥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4468061a1cfbad514cef61bfd1839d8a1.jpg',
        recipeId: 305,
    },
    {
        mNum: 2164,
        mContent: '곰취는 줄기와 잎을 분리해 줍니다. 줄기를 잡고 가위로 싹뚝.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c705e448d4b62f36cf391be5f7ab5b051.jpg',
        recipeId: 306,
    },
    {
        mNum: 2165,
        mContent:
            '줄기는 장아찌에 사용하구요 잎만 나물무침 할꺼예요. 끓는물에 소금 1스푼 넣고, 2분정도 데칩니다. 줄기까지 나물무침 할꺼면 줄기는 30초정도 더 데쳐줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ac85d262e56d081a5151846b21543edf1.jpg',
        recipeId: 306,
    },
    {
        mNum: 2166,
        mContent: '잎을 통째로 무침하면 입술에 양념이 막 뭍어서요. 곰취1잎을 3~4등분으로 잘라줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ae52736f32111b4d0c286106ad37f6a51.jpg',
        recipeId: 306,
    },
    {
        mNum: 2167,
        mContent: '한손으로 꼭 짠양이 50그람정도 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d46bef2527e893ec4a386c148a825ee71.jpg',
        recipeId: 306,
    },
    {
        mNum: 2168,
        mContent: '맛소금1t',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d8fcec7807346b3363652c0b73eafc2f1.jpg',
        recipeId: 306,
    },
    {
        mNum: 2169,
        mContent: '들기름 1t',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/20321f96a55db7aad55287454e21e17a1.jpg',
        recipeId: 306,
    },
    {
        mNum: 2170,
        mContent: '깨소금 1t 넣고 조물조물~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/148ff661c3b6a18778e24291a97646791.jpg',
        recipeId: 306,
    },
    {
        mNum: 2171,
        mContent: '1인분 양으로 딱 좋구요. 입안가득 곰취향이 참 오래갑니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e65ede8805ebdf41005d4b2a53e676c01.jpg',
        recipeId: 306,
    },
    {
        mNum: 2172,
        mContent:
            '쌀은 씻어 물기를 뺀 상태에서 30분 정도 불려 동량의 물을 넣어 고슬고슬하게 밥을 지어 밥 양념을 해줍니다. 그냥 저처럼 아침에 잡곡밥을 사용하셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/216ec6be3893a26fc8d4f27c009262521.jpg',
        recipeId: 307,
    },
    {
        mNum: 2173,
        mContent:
            '오이소박이는 속을빼고 4-5개를 잘라놓는다. 김밤 한줄에 3쪽 들어갈것을 계산하시면 됩니다 오이 소박이가 없을경우, 오이는 길게 잘라주고 소금을 뿌려 준 후 물기를 꼭 짜서 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/be1c337ec1549bdfc937c8e3feea2ec41.jpg',
        recipeId: 307,
    },
    {
        mNum: 2174,
        mContent:
            '당근은 곱게 채 썰어준다. 식용유를 두른 팬에 채 썬 당근을 소금을 약간 넣고 볶아줍니다. 계란을 풀고 소금오을 약간 넣어 간을 해준 후 식용유를 두른 팬에 부쳐준다. 길게 썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9e51ff5f4cdfc84c304cf30f4cd564cf1.jpg',
        recipeId: 307,
    },
    {
        mNum: 2175,
        mContent:
            '김밥밥준비하기 저는 김밥밥을 만들때 올리고당 반스푼을 먼저 넣습니다. 설탕하고는 미묘하게 단맛이 다르고 설탕의 단맛이나 소금맛을 더 끌어내주죠. 분량의 설탕, 소금 넣어줍니다. 참기름도 한스푼 넣어 고르게 사알살 비벼줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/5e7f8fc2da2fc32dae1f05018d5f0e411.jpg',
        recipeId: 307,
    },
    {
        mNum: 2176,
        mContent: '김발 위에 구은 김을 깔고 밥을 고르게 펴 준 다음 야채부터 계란지단까지 골고루 올려놓구요. 깨소금 뿌려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/529400df5811bb7be7e12969e251f47e1.jpg',
        recipeId: 307,
    },
    {
        mNum: 2177,
        mContent:
            '끝부분을 당기면서 사알살 밥알을 다스려가며서 눌러주면 사실 김발도 필요없어요. 마는게 힘드시면 김밥틀 권장합니다. ^^속재료를 너무 많이넣거나 특정부분에 힘을 가하지 않으면 김밥 옆구리 잘 터지지 않습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fee3c522144b3b46ef4044598dce52ef1.jpg',
        recipeId: 307,
    },
    {
        mNum: 2178,
        mContent: '먹기 좋은 크기로 썰어 완성합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ad044ac331d3f2c535e91a21c531b7221.jpg',
        recipeId: 307,
    },
    {
        mNum: 2179,
        mContent: '양파를 후추만 넣고 탱클하게 볶아주다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/512bfdf02fd0be9b95ea0ed9083ca8cf1.jpg',
        recipeId: 308,
    },
    {
        mNum: 2180,
        mContent: '베이컨을 두동강 내서 구워서 준비...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bbb4d03f9286779e61a2cadafbbb05911.jpg',
        recipeId: 308,
    },
    {
        mNum: 2181,
        mContent: '샌드위치라고 생각할 지 모르겠지만 ...잼을 바른 피자 잼피자를 만들어 봤어요...결론은 역시나 샌드위치맛 ㅋㅋ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/33cbb45f2c9fb12835b7fcdbba856b4f1.jpg',
        recipeId: 308,
    },
    {
        mNum: 2182,
        mContent: '위의 사진은 전자렌지에서 약 4분 돌려준 것 ...너무 많이 돌렸나 보다... 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c8431f6f03b6340ad44ba0b2811e41111.jpg',
        recipeId: 308,
    },
    {
        mNum: 2183,
        mContent:
            '식빵피자 두번째 시도...식빵을 좀 구워주고 자연스레 피자가 녹아들길 ...결론은 실패다 ...버터등을 안발라서 인지 식빵이 타기만 할 것 같아서~ 좀 굽다가 꺼내어 전자렌지로 1분 30초 마무리...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0b94bca63248cf99bbd4fc9156c5b0a71.jpg',
        recipeId: 308,
    },
    {
        mNum: 2184,
        mContent: '후라이팬에서 꺼내어 렌지로 돌리기로 했다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0027b210a01533486abf5728c092df081.jpg',
        recipeId: 308,
    },
    {
        mNum: 2185,
        mContent: '오오 제법 모양이 좋다. 이번에는 토마토 소스를 발라줬다. 피자맛이 났다. 모양도 나쁘진 않다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/2eddc3b44a67d86d7b95f7b788ab7f851.jpg',
        recipeId: 308,
    },
    {
        mNum: 2186,
        mContent: '끓는 물 2L(+소금 1/2T)에 깨끗하게 씻은 콩나물을 넣고 뚜껑을 덮어 센불에서 3,4분 데쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9eb685d00a00a249c7a7558b88c378ee1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2187,
        mContent: '찬물에 여러 번 씻어, 체에 밭쳐 물기를 빼주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/76293fc5d0ad838a0aa08134522146231.jpg',
        recipeId: 309,
    },
    {
        mNum: 2188,
        mContent: '펄펄 끓는 물(+소금 1/2T)에 미나리를 넣고 센불에서 1분 30초 정도 데쳐주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/537c673b3f158c41b835236a18b21b7a1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2189,
        mContent: '또 찬물에 여러번 씻은 다음, 물기를 빼주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9be00d0c45cb511570d6d015e759356d1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2190,
        mContent: '미나리를 손으로 꼭 짠 후, 먹기 좋은 크기로 썰어주세요. (가로로 한 번 / 세로로 2번 정도?)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d08d6eb63d568fcded28180d67db5d231.jpg',
        recipeId: 309,
    },
    {
        mNum: 2191,
        mContent: '그릇에 콩나물, 미나리, 액젓 1/2T를 넣고 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ee7d5a46b5596cb319a41603b464a5ee1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2192,
        mContent: '그릇을 기울어 보면, 물기가 나와있죠. 이 물은 버려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cdae28c837675d1140d3897353f78dcc1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2193,
        mContent: '여기에 액젓 1/2T, 고춧가루, 다진 마늘을 넣고 조물조물 섞어주면 된답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f04127b26893a8561648fa3ffb7ff92d1.jpg',
        recipeId: 309,
    },
    {
        mNum: 2194,
        mContent: '이제 부순 깨, 참기름을 넣고 휘리릭 섞어주면 끝. 간이 좀 심심하면, 액젓을 살짝만 넣어주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3a63467075e3b17a60d09c81361de7431.jpg',
        recipeId: 309,
    },
    {
        mNum: 2195,
        mContent: '아~~~ 왜 이렇게 찍힌 건지... 쑥을 찍은 6장이 전부 흔들렸네요. 깨끗하게 씻어서 물기는 툭툭 털어줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/746a39456cb4fc3fe0a0643dd045fcb31.jpg',
        recipeId: 310,
    },
    {
        mNum: 2196,
        mContent: '물기가 너무 마르면 안 돼요~ 전분가루를 묻혀줄 거거든요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/327afbc746bb88694b42a4a2cf3be5aa1.jpg',
        recipeId: 310,
    },
    {
        mNum: 2197,
        mContent: '전분가루를 골고루 묻혀줘야 튀김옷을 입혔을 때 떨어지지 않겠죠.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c69ed636d685f3b9922e7a70fd60d61f1.jpg',
        recipeId: 310,
    },
    {
        mNum: 2198,
        mContent:
            '튀김가루에 탄산수로 반죽물을 사용했어요. 물을 넣어도 되지만 탄산수로 쓰면 더욱 바삭해진다고 하잖아요. ^^ 각얼음 3개를 넣고 묽게 반죽을 만들었답니다. 튀김 반죽이 차가울수록 튀김과 기름의 온도 차이가 커서 더욱 바삭하게 되지요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/a329412da1966f0977dd4923a6aa5a341.jpg',
        recipeId: 310,
    },
    {
        mNum: 2199,
        mContent: '전분가루를 묻혀놓은 쑥을 반죽에 담갔다가 꺼내주세요. 튀김옷이 살짝 입혀져야 튀김이 바삭하니 더 맛있는 거 아시죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/f2aeae716e6e9b7ab31f33c09e757ed31.jpg',
        recipeId: 310,
    },
    {
        mNum: 2200,
        mContent:
            '얼마 되지 않는 양이지만 한 번에 다 넣으면 달라붙을까 싶어서 나눠서 튀겼어요. 바스켓 고정틀에 끼워서 기름을 빼준 후 두번을 튀기면 더 바삭하고 고소해지니 2번을 튀겼어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/d6db2493808b0c8b464bd0dc00fe28b11.jpg',
        recipeId: 310,
    },
    {
        mNum: 2201,
        mContent:
            '두부 1/2모는 약 1.5cm정도로 두툼~하게 썰어줘야 부칠 때 수월해요. 원하는 크기로 네모지게 썰어주세요. 키친타월로 물기를 살짝 닦아줘야 후에 계란물이 잘 묻어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/514db9f4765dcf52d968e31493677c821.jpg',
        recipeId: 311,
    },
    {
        mNum: 2202,
        mContent: '저는 당근을 데코용으로 준비했는데요 잘게 썰어 계란물에 넣어 사용해도 좋아요. 저는 모양틀로 예쁘게 잘라줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/56adfeada399cd55437ba897893a378f1.jpg',
        recipeId: 311,
    },
    {
        mNum: 2203,
        mContent: '대파나 쪽파는 잘게 다져서 준비해주세요. 여기에 홍고추가 있으면 함께 잘게 썰어줘도 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/86fbb2d93eda424f94bfaeb486b4c8521.jpg',
        recipeId: 311,
    },
    {
        mNum: 2204,
        mContent: '계란물은 계란을 약간 넓은 볼에 깨준 후 소금 한 꼬집(1/2작은술) 그리고 후추를 톡톡 뿌려 잘 풀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cd44a0805e195600eb4ac6fe446137f91.jpg',
        recipeId: 311,
    },
    {
        mNum: 2205,
        mContent:
            '기름 3큰술을 넉넉히 두른 팬을 달구고 두부를 계란물에 넣어 모든 면에 골고루 묻혀주세요. 이 때 두부가 부서지는 경우가 많은데요 단단한 부침용 두부를 사용해 숟가락과 젓가락으로 조심히 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/09b5c905d987961b00fd17556d6f3e3b1.jpg',
        recipeId: 311,
    },
    {
        mNum: 2206,
        mContent: '그리고 중-약불에 세지 않은 불로 천천히 익혀줘야 계란물이 타지 않아요. 앞뒤로 노릇하게 익혀주세요. 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/7836ddf944df2932549de72d60c3abe91.jpg',
        recipeId: 311,
    },
    {
        mNum: 2207,
        mContent:
            '지글지글 뒤집어주면서 잘 익혀주다가 한번 뒤집었을 때 당근을 올려줘야 하는데요 남은 계란물을 두부 한 면에 조금씩 올려 그 위에 당근을 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/2ca3a544d5e4f7cbb51d81760f50bba61.jpg',
        recipeId: 311,
    },
    {
        mNum: 2208,
        mContent: '그리고 한번 다시 뒤집어 당근면을 익혀줘 당근이 달라붙으면서 익으면 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/a887bf0bf4c6506550be08bd1839f46d1.jpg',
        recipeId: 311,
    },
    {
        mNum: 2209,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ed5e44023220f346b96a0794423e537e1.jpg',
        recipeId: 312,
    },
    {
        mNum: 2210,
        mContent: '- 크래미 잘게 찢은 후 작은 크기로 썰어주기 Tip. 동그랗게 부칠 때 모양이 이쁘게 나올 수 있도록 작게 썰어줘요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ea6890a01e6d8c3a15319dee6a72796a1.jpg',
        recipeId: 312,
    },
    {
        mNum: 2211,
        mContent: '- 파는 다져서 준비 - 볼에 모든 재료 넣어 섞어주기 후춧가루 톡톡 두 번이면 돼요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/0610699b32184809a4bf19df2adcab981.jpg',
        recipeId: 312,
    },
    {
        mNum: 2212,
        mContent: '전 원래 소금도 안 넣는데 싱겁다고 하실 수 있으니 한꼬집 넣어줬어요. 아이가 먹을거면 소금은 생략해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/cde0a3ba5c5672e4a0c5d646b3d9d0a91.jpg',
        recipeId: 312,
    },
    {
        mNum: 2213,
        mContent: '계란이 잘 풀리고 소금이 녹을 정도로만 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/5dfcfb759609da45709a5c29385f3ca31.jpg',
        recipeId: 312,
    },
    {
        mNum: 2214,
        mContent: '- 기름 두른 팬에 한 숟가락씩 떠 넣어 노릇하게 굽기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/2c1d695014c600091c25ecf69cee67a81.jpg',
        recipeId: 312,
    },
    {
        mNum: 2215,
        mContent: '가운데가 봉긋 올라오고 눌렀을 때 단단하면 익은 거예요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fcc1b7a721fcb61d51f3ce4779cb7ba11.jpg',
        recipeId: 312,
    },
    {
        mNum: 2216,
        mContent: '하나씩 부치기엔 시간이 없다면 크게 부쳐서 썰어주세요. 남는 부분이 덜하게 미리 네모로 만들어주면 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/99e6cec80015916c00072a7ca30ebd8a1.jpg',
        recipeId: 312,
    },
    {
        mNum: 2217,
        mContent: '담아낼 때 못생긴 테두리는 약간 잘라내고 사각형으로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9b27c9356cd76918cfafb0b0aea14b711.jpg',
        recipeId: 312,
    },
    {
        mNum: 2218,
        mContent: '그럼 크래미전 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9f60cf2290dc023d6869b5580c8413ab1.jpg',
        recipeId: 312,
    },
    {
        mNum: 2219,
        mContent: '돼지안심은 긴형태에서 먹기좋은크기로썬다 2cm정도',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2220,
        mContent: '파프리카는 큐브형태나 먹기좋게썬다',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2221,
        mContent: '양송이를다져놓는다',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2222,
        mContent: '안심에 소금과후추로 간을해주고 예열된 팬에 식용유를 둘러굽는다 앞뒤 1분30초정도 옆면30초정도',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2223,
        mContent: '레스팅은 5분에서 8분 그사이에 고기구운팬에 파프리카를볶는다 소금후추간은약간만',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2224,
        mContent: '다진양송이에 생크림을넣고 농도가나올때까지 끓인다 후추간만살짝한다',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2225,
        mContent: '맘대로 플레이팅',
        mPicture: '',
        recipeId: 313,
    },
    {
        mNum: 2226,
        mContent: '망고 껍질을 깍아 듬성 듬성 썰어 망고 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/5b94028bde3e272a94b5b5b0492f59761.jpg',
        recipeId: 314,
    },
    {
        mNum: 2227,
        mContent: '믹서기 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/56cf94e2dc41788037e22c71105357391.jpg',
        recipeId: 314,
    },
    {
        mNum: 2228,
        mContent: '애플망고 드링킹 요거트 하나를',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ecca97c28e6589c8bc1832e99427503d1.jpg',
        recipeId: 314,
    },
    {
        mNum: 2229,
        mContent: '부어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/a76c1777ef65bff350f5cfbc06e2f7301.jpg',
        recipeId: 314,
    },
    {
        mNum: 2230,
        mContent: '믹서기로 윙~~~ 갈아 주시면 끝입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3baf5ed63247095a6d867bbcc7df0eb51.jpg',
        recipeId: 314,
    },
    {
        mNum: 2231,
        mContent: '재료를 손질하고 계량해 준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3ee9fa3ec7a3c1c4c25133eb3614a8c21.jpg',
        recipeId: 315,
    },
    {
        mNum: 2232,
        mContent: '찹쌀가루에 물과 소금, 석류청을 넣어서 반죽해준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/4a26b50047797e7691b6085fd677babe1.jpg',
        recipeId: 315,
    },
    {
        mNum: 2233,
        mContent: '달궈진 후라이팬에 반죽을 모양잡아 올려주고 한 번 뒤집고 난 후 쑥을 올려준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/242a33ebc61bfd311d08d4cbbf737c5a1.jpg',
        recipeId: 315,
    },
    {
        mNum: 2234,
        mContent: '약불에서 5분정도 구워준 후 꿀과 석류차와 함께 곁들여 먹는다',
        mPicture: '',
        recipeId: 315,
    },
    {
        mNum: 2235,
        mContent: '비엔나소세지 반으로 잘라주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/578a78835e8f0360c85e22ab907cbff51.jpg',
        recipeId: 316,
    },
    {
        mNum: 2236,
        mContent: '십자로 칼집을 넣어 주신후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f640f16c30e68dbbf7413f4f4e61b3301.jpg',
        recipeId: 316,
    },
    {
        mNum: 2237,
        mContent: '사이 사이 칼집을 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/9121869ca8c7c0c8f01ffebad7524bba1.jpg',
        recipeId: 316,
    },
    {
        mNum: 2238,
        mContent: '끓는 물에 살짝 데쳐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3a993275f170849c1f56bccc5aa670e61.jpg',
        recipeId: 316,
    },
    {
        mNum: 2239,
        mContent: '채에 받쳐 물기를 제거해 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/7b9ab74b3b33269b5fd4c6b398b3a5c31.jpg',
        recipeId: 316,
    },
    {
        mNum: 2240,
        mContent: '위 야채 모두 다져 팬에 담고 후추톡톡,굴소스 반큰술 카놀라유 적당량을 두른후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/59764c34b6a7145804ca669a838e10f31.jpg',
        recipeId: 316,
    },
    {
        mNum: 2241,
        mContent: '야채가 익을 동안 슥슥~ 볶아 주시다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b88bafaa7437772d60067e366dccdb251.jpg',
        recipeId: 316,
    },
    {
        mNum: 2242,
        mContent: '밥 1인분량을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b970fa7fda6577999d367f46fdf4630d1.jpg',
        recipeId: 316,
    },
    {
        mNum: 2243,
        mContent: '볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/e8cb30dd01b22f4557661ce0ca3322931.jpg',
        recipeId: 316,
    },
    {
        mNum: 2244,
        mContent: '볶음밥을 동글 납작하게 편후 준비한 소세지를 올리고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/ae4112a3b68e94ad6e7e5718b13bd07a1.jpg',
        recipeId: 316,
    },
    {
        mNum: 2245,
        mContent: '주먹밥을 만들어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/02112250533b3c7e9e5528bcc5ca41f11.jpg',
        recipeId: 316,
    },
    {
        mNum: 2246,
        mContent: '기호에 따라 마요네즈 케챱 뿌려주시면 끝이예용~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d7d8cf0531d4362882111f15aeb635631.jpg',
        recipeId: 316,
    },
    {
        mNum: 2247,
        mContent: '대패삼겹살은 잡내를 빼주기 위해 맛술을 골고루 뿌려둡니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/45748b7657b774f44a093b2ae7a3e6b31.jpg',
        recipeId: 317,
    },
    {
        mNum: 2248,
        mContent: '콩나물도 깨끗히 씻어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b0bb02f754f9521b0c3fa041feef991e1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2249,
        mContent: '고기 잡내를 빼는 동안 양념장을 만들어줍니다. 설탕 1큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f742b93b22ad00cd8e74bdb290513dd01.jpg',
        recipeId: 317,
    },
    {
        mNum: 2250,
        mContent: '고춧가루 5큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3e2cd62168ee963b45305f97b5f7129e1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2251,
        mContent: '다진마늘 2큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/7c8a659b41f53f1fb8a03c2acc9f65bb1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2252,
        mContent: '고추장 5큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/f42b09eb95e63f5c735506939f0810ef1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2253,
        mContent: '간장 2큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/19da5eecdf74ff1fe3ddf3086c1f2d6f1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2254,
        mContent: '고소한 맛을 내주기 위해 들기름 1큰술 (생략가능)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b147a74713c545d8d0dfc8742b0c09e31.jpg',
        recipeId: 317,
    },
    {
        mNum: 2255,
        mContent: '맛술을 뿌려둔 고기에 만든 양념장으로 버무려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/0f56d70fa21fa3ace579321c7908e9681.jpg',
        recipeId: 317,
    },
    {
        mNum: 2256,
        mContent: '양념을 골고루 고기에 무쳐서 양념이 고기 맛에 밸 수 있도록 적당시간 숙성을 시켜줍니다. (생략가능)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/17b0864b2e065f8b654a9d2f3c2dc4581.jpg',
        recipeId: 317,
    },
    {
        mNum: 2257,
        mContent: '저는 양념해둔 고기를 하루 정도 뒤에 조리했어요. 궁중팬 밑에 콩나물 먼저 깔고 양념한 고기를 그 위에 올려줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/5f194ab76bd3fb75eb0f6426cbaf0c431.jpg',
        recipeId: 317,
    },
    {
        mNum: 2258,
        mContent:
            '중불로 볶으면서 콩나물의 숨이 죽어가면 올리고당 2스푼 투척~ 올리고당은 음식을 더 맛깔나게 해주고 부담스럽지 않는 단 맛을 내줍니다~^^ 올리고당이 없으면 설탕을 조금 더 넣어주시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/8f370e3129010232ca40e0376df8cbda1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2259,
        mContent: '고기가 거의 익어가면 깨끗히 손질한 팽이버섯과 깻잎을 넣고 조금 더 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/bbe300ddda6a715e7e21212a91af986d1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2260,
        mContent: '마지막으로 쪽파를 넣고 불을 불을 꺼주시면 끝!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b4ed53d0f233193e2a5912a29ab1cffb1.jpg',
        recipeId: 317,
    },
    {
        mNum: 2261,
        mContent: '흰쌀밥을 안친다. 백미 전기밥솥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/c7502205b45035fc71f02011e7ba11111.jpg',
        recipeId: 318,
    },
    {
        mNum: 2262,
        mContent:
            '큰 냄비에 물을 반쯤 넣고 된장 1T, 마늘 10개, 양파껍질 1줌, 월계수 잎 5개, 파뿌리 3개를 넣고 푹 고와준다. 된장 1T, 마늘 10개, 양파껍질 1줌, 월계수 잎 5개, 파뿌리 3개 큰 냄비 센불 잡내가 완전히 없어져요!ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/b034833fa9948e23120a520b4998c8ee1.jpg',
        recipeId: 318,
    },
    {
        mNum: 2263,
        mContent:
            '끓는 물에 소금을 넣고 곰취, 청경채, 호박잎, 깻잎 순을 각각 1분씩 데쳐준 후 차가운 물에 헹궈 물기를 짜준다. 소금, 곰취, 청경채, 호박잎, 깻잎 냄비 중불 소금을 넣으면 채소의 색이 선명해 져요! 데칠 때 너무 오래 데치면 영양소가 파괴돼요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/0d56ba20f354df7d041df6838a14a9cb1.jpg',
        recipeId: 318,
    },
    {
        mNum: 2264,
        mContent: '40~50분 후에 젓가락으로 돼지고기를 찔러본 후 푹 들어간다 싶으면 꺼낸다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/64c506935f900e8a2638fbee464357641.jpg',
        recipeId: 318,
    },
    {
        mNum: 2265,
        mContent:
            '깻잎순에 다진 마늘 1/2T, 국간장 1/2T, 들기름 1/2T를 고루 버무리고 프라이팬에 볶아준다. 다진 마늘 1/2T, 국간장 1/2T, 들기름 1/2T 프라이팬 , 나무젓가락 중약불 다진 마늘이 익을 때까지 볶아줍니다!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/33e13c735e57d5de77c3067ba23035531.jpg',
        recipeId: 318,
    },
    {
        mNum: 2266,
        mContent:
            '볶은 깻잎 순을 가위로 잘게 자르고 밥이랑 잘 섞어준 후 참깨를 뿌린다 밥, 참깨 가위 , 나무젓가락 주걱이나 숟가락보다 젓가락으로 비벼줘야 꼬들꼬들 해요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/3d9991e7ad99ebac23abf71985d717fe1.jpg',
        recipeId: 318,
    },
    {
        mNum: 2267,
        mContent: '삶은 수육을 먹기 좋은 크기로 자르고 소 불고기를 볶는다.',
        mPicture: '',
        recipeId: 318,
    },
    {
        mNum: 2268,
        mContent: '데친 채소를 펴주고 그 위에 밥과 고기를 넣고 보기 좋게 말아준다.',
        mPicture: '',
        recipeId: 318,
    },
    {
        mNum: 2269,
        mContent: '비계를 조금 덜 먹기 위해 목살을...월계수 이파리를 못챙겼다 --; 재료는 된장, 다진마늘, 양파, 후추 요정도..',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b73022ac919d2c945a6a005620df5e211.jpg',
        recipeId: 319,
    },
    {
        mNum: 2270,
        mContent: '쌈싸먹기 좋은 알배추 배추의 안쪽에서 추출한 알배추~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/189038317d1b5a21c0a215cbba6261081.jpg',
        recipeId: 319,
    },
    {
        mNum: 2271,
        mContent: '배추 꽁다리는 도움이 될까 해서 보쌈삶는 냄비속에...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/89b3c90980acb09e9da3b302a375738a1.jpg',
        recipeId: 319,
    },
    {
        mNum: 2272,
        mContent: '알배추를 한쌈 한쌈 뜯어서 흐르는 물에 씻어주기.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0fade6b6499c22cdc4bab2a97d8f8ef61.jpg',
        recipeId: 319,
    },
    {
        mNum: 2273,
        mContent: '어느새 보쌈이 완성되었다. 너무 뜨거워서 칼질하는데 어려움이 있었다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/72b4eb3897db0a2d0bd526edac5f43bf1.jpg',
        recipeId: 319,
    },
    {
        mNum: 2274,
        mContent:
            '어디서 본건 있으니까. 이렇게 모양을 내주고 중앙에 김치속은 아니지만, 김치를 거시기 해주었다. 아 플레이팅 / 데코레이션 ... = 거시기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1780fc9b83756cb91b5d0e54bfa5fdd01.jpg',
        recipeId: 319,
    },
    {
        mNum: 2275,
        mContent: '남은 배추들을 가위로 마구마구 잘라주고 양파도 마구 잘라주고 파도 조금 마구 잘라주고 된장이랑 마늘이랑',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/f81c56fb2f56670321ee8e6d2debf39d1.jpg',
        recipeId: 320,
    },
    {
        mNum: 2276,
        mContent: '들깨가루가 핵심',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/8b3774b63ccf2887e02a8eaf36e23f551.jpg',
        recipeId: 320,
    },
    {
        mNum: 2277,
        mContent: '말린버섯 도 좀 넣어주고~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/0222f0184a31a37c2f177ed38bba80c01.jpg',
        recipeId: 320,
    },
    {
        mNum: 2278,
        mContent: '배추된장국 만들기 끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/08/284af22496b7caaaaff91c76aaeefb4d1.jpg',
        recipeId: 320,
    },
    {
        mNum: 2279,
        mContent:
            '뚝배기에 쌀뜨물을 넉넉히 붓고, 집된장을 풀어준다 여기에 양념 재료를 모두 넣어준다 냉이는 잘 다듬어 깨끗이 씻은후 적당한 크기로 썰어 준비한다 뚝배기는 불에 올려 끓여주다가 끓으면 냉이를 넣어준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/41f260d5035751905db50dfa78ba57141.jpg',
        recipeId: 321,
    },
    {
        mNum: 2280,
        mContent:
            '생표고버섯은 흐르는 물에 문질러 씻은후 얇게 슬라이스로 썰고 같이 넣어준다 대파도 어슷썰어 같이 넣어준다 끓이다가 거품이 생기면 걷어내고, 약불로 끓인다 생콩가루 한큰술 정도 넣어 조금 더 끓인후 불을 끈다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/41ee774d318d1a3d10833831b8320e9c1.jpg',
        recipeId: 321,
    },
    {
        mNum: 2281,
        mContent:
            '온 국물에 냉이향이 가득 배어서 국물만 먹어도 봄내음이 물씬 풍기네요 냉이를 오래 끓였는데도 많이 흐물거리지 않고 딱 먹기 좋은 질감이예요 여기에 버섯을 넣어 씹는 맛도 이구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eeda6755a8d0b931a4f736a52907a6421.jpg',
        recipeId: 321,
    },
    {
        mNum: 2282,
        mContent: '달리 반찬없어도 밥 말아 한그릇 뚝딱 하겠는걸요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b4afc1f92b1d8dd58a2d9f705a6fda651.jpg',
        recipeId: 321,
    },
    {
        mNum: 2283,
        mContent: '달래는 잘 다듬어 깨끗이 씻은후 잘게 썰어준후 볼에 담는다 여기에 양념장재료를 모두 넣어 양념장을 만들어둔다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/50fb6eb3c9acbf0ae54e1743b88bfea71.jpg',
        recipeId: 321,
    },
    {
        mNum: 2284,
        mContent:
            '식용유를 종이호일에 살짝 뿌려 주었어요 손질하여 씻은 고등어를 올리고 다시 식용유를 살짝 뿌려준다 210도로 예열된 오븐에서 10분정도 구워준다 구워진 고등어 위에 양념장을 듬뿍 올린후 다시 10분정도 구워준다 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/3f65fbb33244a613fe77254107eaa4a71.jpg',
        recipeId: 321,
    },
    {
        mNum: 2285,
        mContent: '양념을 올린 생선을 타지 않게 자주자주 보아야 한답니다 양념을 생선에 살짝 베었고, 달래도 살짝 익어서 냄새가 정말 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/e0b644183a1b0f0f32ed5e5efccd0d771.jpg',
        recipeId: 321,
    },
    {
        mNum: 2286,
        mContent:
            '달래를 넣어서 인지 살짝살짝 씹히는 맛이 좋고, 그냥 고등어구이보다 훨씬 촉촉한 생선살맛이 느껴져요 고추장이 매콤하면서 올리고당의 달콤함이 잘 어우러져서 참 맛있는것 같아요 식용유를 뿌려 구웠더니 전혀 타지 않고 고루 잘 익었고, 느끼함 없이 담백한 맛이예요 그냥 생선구이만 드셨다면 이렇게 양념장을 만들어 얹은후 다시 살짝 구워서 먹어 보세요 오븐에 굽지 않아도 후라이팬에 뚜껑 덮어 구우시면 될것 같아요 양념을 위에 얹어서인지 생선살이 딱딱하지 않고 부드러워요 양념을 하여서인지 훨씬 맛이 좋아요!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d7b83a396eaed7d66f2f2c7a338c5c241.jpg',
        recipeId: 321,
    },
    {
        mNum: 2287,
        mContent:
            '쌀은 깨끗이 씻어 밥솥에 담아준다 사골국물을 채망에 걸러서 사골국물만 밥솥에 부어준다 (미리 만들어 얼려둔 사골국물을 해동하여 사용하시면 되지요 사골국물향이 넘 진하다면 사골국물:물을 반반 부어주세요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b8a6516f57aa20cc143519e008afbb981.jpg',
        recipeId: 322,
    },
    {
        mNum: 2288,
        mContent: '잘 지어진 밥에 고기를 얹어 뜸을 살짝 들인다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a0eaf7274818f8ff5edb1adc3e195a321.jpg',
        recipeId: 322,
    },
    {
        mNum: 2289,
        mContent: '그릇에 먹기 좋은 만큼 담아낸다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/257f75b8bc0be685e8669316984b5f3d1.jpg',
        recipeId: 322,
    },
    {
        mNum: 2290,
        mContent:
            '미나리는 잎을 떼어내고, 깨끗이 씻어서 송송 썰어 그릇에 담는다 여기에 고춧가루, 간장, 참기름, 참깨를 넣어 고루 섞어서 양념장을 만든다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/011a41525a753e498c2dd88110b264271.jpg',
        recipeId: 322,
    },
    {
        mNum: 2291,
        mContent: '생김은 후라이팬에 살짝 구워서 적당한 크기로 잘라 준비한다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0f37c273b50a4801933c9901d6e5dd881.jpg',
        recipeId: 322,
    },
    {
        mNum: 2292,
        mContent: '사골국물의 향이 진하고, 밥만 먹어도 감칠맛이 아주 좋아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6f165af7da3f3dda4d46c7d8ca39d4c81.jpg',
        recipeId: 322,
    },
    {
        mNum: 2293,
        mContent: '여기에 미나리양념장 넣어 고루 슥슥 비벼서 먹으면 그냥 솔솔 넘어가지요^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/45eb80fea9d4355334241cf26966088c1.jpg',
        recipeId: 322,
    },
    {
        mNum: 2294,
        mContent:
            '생김에 깻잎장아찌 올리고 이렇게 싸서 먹어도 정말 맛있답니다 달리 반찬 없이도 밥 하나만으로 영양보충 충분히 할 수 있을만큼 좋아요~~ 이런게 밥이 보약이다라는 말이 나오는 거지요!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/79c434437ec2f4cdde2ad6c43eecbc801.jpg',
        recipeId: 322,
    },
    {
        mNum: 2295,
        mContent:
            '미나리는 잎을 떼어냐고 다듬어서 깨끗이 씻는다 생표고버섯과 새송이 버섯은 흐르는 물에 살살 문질러 씻어준다 미나리는 손가락길이만큼 썰어서 볼에 담는다 버섯도 채썰어 미나리와 같이 넣어준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/35e0e5b66a4fae75f867feb76ec930f71.jpg',
        recipeId: 322,
    },
    {
        mNum: 2296,
        mContent: '여기에 소금 간을 살짝 하고, 달걀을 풀어 부어준다 부침가루와 밀가루를 넣어 물을 조금씩 넣어가며 반죽한다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c359df65b9cd8cb5a31f5c24e260398b1.jpg',
        recipeId: 322,
    },
    {
        mNum: 2297,
        mContent: '후라이팬에 들기름과 올리브유를 반반 부어주고, 미나리버섯반죽을 얇게 펴서 올려준다 앞뒤로 노릇하게 부쳐준다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5e3bb356824b213b31fa0dee56e50e411.jpg',
        recipeId: 322,
    },
    {
        mNum: 2298,
        mContent: '미나리의 아삭한 맛과 향긋함이 아주 좋구요 버섯의 졸깃함도 아주 잘 어울려요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5e13a3d0c329a788f86600f59f9020391.jpg',
        recipeId: 322,
    },
    {
        mNum: 2299,
        mContent: '비가 내리거나, 혹은 술안주로도 아주 좋은 부침개랍니다 물론 아이들 간식으로도 그만이지요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/9c260d52f392f5bd2477bf55ab77f41d1.jpg',
        recipeId: 322,
    },
    {
        mNum: 2300,
        mContent:
            '왼쪽은 적겨자, 오른쪽은 청겨자입니다. 같은 겨자라는 이름을 쓰지만 색만 다른 것이 아니고 모양도 다르고 맛도 달라요. 소금물에 30분 정도 절여야 하는데 절여놓고 뼈해장국 먹으러 나갔다 와서 1시간 넘게 절여졌답니다. 소금을 많이 넣지 않아서 푹 절여지지는 않았더라고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/8f764cb43653657545e446ad723738001.jpg',
        recipeId: 323,
    },
    {
        mNum: 2301,
        mContent:
            '고춧가루, 다진 마늘, 새우젓, 멸치 액젓, 매실액을 넣었어요. 새우젓이 너무 조금이라서 멸치 액젓을 더 넣었고 겨자의 양에 따라서 양념은 조절을 해야 해서 개량은 안 하고 느낌대로 넣었어요. 찹쌀풀을 넣으시기도 하던데 전 풀이 들어가면 걸쭉해지는 것이 싫어서 패스~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/45f8b8760956f829f1d3a9e20647d31b1.jpg',
        recipeId: 323,
    },
    {
        mNum: 2302,
        mContent: '양념에 무채를 넣고 버무려줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/8f6493aeee927f75fa56323fd52a92821.jpg',
        recipeId: 323,
    },
    {
        mNum: 2303,
        mContent:
            '청겨자에 양념 넣고 파와 통깨를 넣고 무쳐줍니다. 양념이 뭉쳐있어서 펴주면서 살살 버무렸어요. 청겨자는 알싸하게 매운맛이 나기 때문에 매운 거 좋아하시는 분들이라면 잘 드실 듯.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/d464562f18faf6e41b31be97d38d60431.jpg',
        recipeId: 323,
    },
    {
        mNum: 2304,
        mContent: '겨자 두 가지를 섞어서 하려다가 씻으면서 보니 적겨자에서 보랏빛 물이 빠지더라고요. 그래서 따로 나눠서 해봤어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/15d9824d9793360bc4a25f1d861b2c111.jpg',
        recipeId: 323,
    },
    {
        mNum: 2305,
        mContent: '양념은 같은데 새우젓이 없는 관계로 여기에는 멸치 액젓만 넣었고 파를 양념에 같이 섞었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/8aa321fb85daa5c7445afba10f0144e41.jpg',
        recipeId: 323,
    },
    {
        mNum: 2306,
        mContent: '청겨자는 잎이 뻣뻣해서 몇 장을 깔고 양념을 중간에 넣으면서 켜켜이 쌓았답니다. 그래서 버무리지는 않았지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c8ca69322d81c6f134d191a5e0e40e431.jpg',
        recipeId: 323,
    },
    {
        mNum: 2307,
        mContent: '두가지 겨자김치 통에 담으니 양이 꽤 되네요. 적겨자는 그렇게 맵지는 않은데 적겨자는 맵더라고요. 생마늘의 알싸한 맛이랄까?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/09a1e7f63d6d33f7852c55eab43618741.jpg',
        recipeId: 323,
    },
    {
        mNum: 2308,
        mContent:
            '먼저 깨끗하게 씻어 물기를 체에 바쳐 뺀 미나리는 4cm 간격으로 잘라 주시고 양파는 0.5cm 두께로 채썰게요. 매콤한 고추는 다지듯이 손질해 준비하겠습니다. 미나리 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b64cc4bfcf15f9c2e441534e09e04d7d1.jpg',
        recipeId: 324,
    },
    {
        mNum: 2309,
        mContent:
            '다음의 재료를 사용해 미리 양념장을 만들어주세요.고추장1T,간장1/2T,고춧가루1/2T,설탕1T,식초1T,물3T,맛술1T,참기름1T,참깨1t,후추1/3t,다진마늘1/2T',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b70238ca11e78357092334175c3348091.jpg',
        recipeId: 324,
    },
    {
        mNum: 2310,
        mContent:
            '물을 500mL정도 냄비에 넣고 끓이다가 바지락 살을 넣고 3분간 데쳐서 준비해주세요. 저는 빠른 조리를 위해 냉동 바지락 손질 제품을 사용했어요. 흐르는 차가운물에 여러번 헹구고 체반에 바쳐 물기를 빼 주세요. 데치고 남은 국물은 국이나 찌개 등의 육수로 잘 활용해 보셔도 좋습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6e2a0b58a9bbeaafe1749f9ca878f7ea1.jpg',
        recipeId: 324,
    },
    {
        mNum: 2311,
        mContent:
            '이제 소면을 삶아볼게요. 물이 끓으면 소면을 넣고 찬물을 한컵 준비했다가 끓어오르면 찬물을 붓고 이 과정을 3~4번 반복해주세요.소면을 삶는 시간은 제품에 따라 다르지만 보통 4~5분을 넘지 않습니다.그렇게 해 주시면 소면이 잘 삶아졌을 거에요.차가운물에 잘 헹구어 완전하게 전분기를 빼 주시고 체반에 바쳐 물기를 제거 해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/76663f92c9a1e20f0b3dde861244a93d1.jpg',
        recipeId: 324,
    },
    {
        mNum: 2312,
        mContent: '준비한 채소와 바지락살에 양념장을 넣고 잘 버무린 다음 소면과 함께 곁들여 먹음직하게 담아주시면 맛깔스러운 바지락 요리 완성!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/e663f9b3663ad84fef79824aa73db4901.jpg',
        recipeId: 324,
    },
    {
        mNum: 2313,
        mContent:
            '구미가 당길만한 비쥬얼이죠? 집들이 음식 메뉴로도 좋고 안주로 내 놓기에도 참 좋아요.소면도 함께 곁들여서 더욱 맛있게 즐길 수 있는 매력적인 요리랍니다. 미나리의 향과 아삭함, 바지락의 쫄깃한 식감에 감칠맛까지 두루 어우러져 입맛 돋우기 참 좋아요. 오늘은 매콤한 양념장에 미나리와 바지락 살을 무쳐 소면을 곁들여 완성하는 푸짐한 바지락 요리 레시피로 여러분과 함께 했습니다.별미로 입맛 돋울 수 있는 먹음직한 메뉴가 필요할 때,이렇게 색다르게 준비 해 보시면 어떨까요? 오늘도 맛있게 즐기세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b772e2f43998f1798f904ff0a3c5f9071.jpg',
        recipeId: 324,
    },
    {
        mNum: 2314,
        mContent: '미리 끓여놓은 사골국을 준비합니다',
        mPicture: '',
        recipeId: 325,
    },
    {
        mNum: 2315,
        mContent: '삶아놓은 스지도 준비합니다',
        mPicture: '',
        recipeId: 325,
    },
    {
        mNum: 2316,
        mContent: '뚝배기에 스지 사골국을 넣고 끓입니다',
        mPicture: '',
        recipeId: 325,
    },
    {
        mNum: 2317,
        mContent: '팔팔 끓으면 파을 올립니다',
        mPicture: '',
        recipeId: 325,
    },
    {
        mNum: 2318,
        mContent: '식탁에 냅니다',
        mPicture: '',
        recipeId: 325,
    },
    {
        mNum: 2319,
        mContent: '아삭아삭 맛있는 열무김치 만들기 ♬♪',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/e1ac2c918f9b4e5e458771a2a40315b71.jpg',
        recipeId: 326,
    },
    {
        mNum: 2320,
        mContent: '· 열무는 깨끗이 씻어 손질해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2673b5db1f37e37d253b58339d0009851.jpg',
        recipeId: 326,
    },
    {
        mNum: 2321,
        mContent: '- 뿌리 부분은 필러로 껍질을 벗겨주고 뿌리와 줄기의 경계부분을 깨끗이 씻어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/cb748534ac17fd4fd5157b373c4433c61.jpg',
        recipeId: 326,
    },
    {
        mNum: 2322,
        mContent: '· 열무는 5cm 가량 잘라준 뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c90aa5c96f3d3e13c4175b8f2f8f56311.jpg',
        recipeId: 326,
    },
    {
        mNum: 2323,
        mContent: '· 굵은소금 1컵을 열무 넣고 소금 넣고 3~4번 정도 나눠서 넣어준 뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/8915fdc5bd4499942b3a823782940f8b1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2324,
        mContent: '열무에 1/3만큼 물을 넣고 30분씩 앞뒤로 2번 섞어주며 1시간 재워줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/af284dc77259c4140fb2494ffa224cab1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2325,
        mContent:
            '· 김치 양념을 위해 밀가루 풀을 만들어줍니다 팬이나 작은 냄비에 [ 밀가루 2 큰 술 + 물 2컵 ] 넣은 뒤 섞어 주면서 약불에서 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/473bd5ce80b4550dd3e52b2a586986791.jpg',
        recipeId: 326,
    },
    {
        mNum: 2326,
        mContent:
            '- 살짝 투명해지면 불을 끄고 식혀주세요 -봄에는 찹쌀 풀이 맛있다고 하던데 찹쌀가루 있으신 분들은 찹쌀 풀을 만들어서 사용하셔도 됩니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c41a767b69bfb5f0367af692179305501.jpg',
        recipeId: 326,
    },
    {
        mNum: 2327,
        mContent: '1시간 동안 절여진 열무는',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2ecc1e8f505902edc94889eb4adf8af81.jpg',
        recipeId: 326,
    },
    {
        mNum: 2328,
        mContent: '· 물에 2~3번 씻은 뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/3c9675c673c9a29d570f42b8c678e55a1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2329,
        mContent: '손으로 꽉꽉 짜서 물기를 빼 줍니다 - 시간이 넉넉하신 분들은 열무를 넓게 펴서 잘 말려주세요 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/25b1d1ab1d438fbf46a2c2f8049bc1cb1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2330,
        mContent: '· 열무김치 양념을 만들어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/1ead1b502347f1af344bf6e7b6006b5b1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2331,
        mContent:
            '※ 열무김치 양념 【 고춧가루 1컵, 액젓 1/4컵 (3 큰 술), 매실액 4 큰 술, 설탕 0.5 큰 술, 다진 마늘 2 큰 술, 다진 생강 0.5 큰 술 】 + 밀가루 풀 -밥숟가락 계량, 종이컵 계량 (입맛에 따라 원하는 양념을 가감해주세요 :D)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/48ef2ce2cf213e875f64b64a54837e451.jpg',
        recipeId: 326,
    },
    {
        mNum: 2332,
        mContent: '· 양파 1/2개도 채 썰어서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/03d87c8b8d6170521277247743ed4da41.jpg',
        recipeId: 326,
    },
    {
        mNum: 2333,
        mContent: '절여진 열무에 넣어준 뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7ff33dd0829a666579d28789e33915f51.jpg',
        recipeId: 326,
    },
    {
        mNum: 2334,
        mContent: '· 양념을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b130238052532f937691dc7c1e192e701.jpg',
        recipeId: 326,
    },
    {
        mNum: 2335,
        mContent: '잘 버무려주면 완성!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0295947e9e6d739a37860d50172d64751.jpg',
        recipeId: 326,
    },
    {
        mNum: 2336,
        mContent: '· 통에 담아놓고 실온에서 2~3일 숙성시킨 뒤 먹으면 됩니다 :)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/49f4b02f6f83dac162a4922cf335655c1.jpg',
        recipeId: 326,
    },
    {
        mNum: 2337,
        mContent: '요리재료로도 좋고 밑반찬으로 좋은 열무김치',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/9d58e07358e95f21190bb58895ad80721.jpg',
        recipeId: 326,
    },
    {
        mNum: 2338,
        mContent: '위에 재료를 준비 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/1a0d8564f1ffd6473bd04114e0432e0b1.jpg',
        recipeId: 327,
    },
    {
        mNum: 2339,
        mContent: '연근 당근 을 껍질을 벗깁니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/191247e31d418915e3a3d3b2a10e09451.jpg',
        recipeId: 327,
    },
    {
        mNum: 2340,
        mContent: '준비됀 당근 연근',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4012056c5d4be575b2ad7ae16bd6cece1.jpg',
        recipeId: 327,
    },
    {
        mNum: 2341,
        mContent: '3을 1cn로 썰어 놓는다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ebf5c5c4866f45b93d7e533f2fdb3f681.jpg',
        recipeId: 327,
    },
    {
        mNum: 2342,
        mContent: '식초 설탕 조청 소금 물로 초조림물을 만듭니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b58c5d94acbf0cb7afd72834d699d0121.jpg',
        recipeId: 327,
    },
    {
        mNum: 2343,
        mContent: '병에 당근연근 비트를 차곡차곡 넣습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/cc118cef3dfef8be75c63692c67add3d1.jpg',
        recipeId: 327,
    },
    {
        mNum: 2344,
        mContent: '6에 5를 넣습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/cf9e56562a5427a660b789c9047f52551.jpg',
        recipeId: 327,
    },
    {
        mNum: 2345,
        mContent: '7을 3일 상온에 숙성시키고냉장고에 보관 합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/218a9396cdc533cec2f0be46fe64323b1.jpg',
        recipeId: 327,
    },
    {
        mNum: 2346,
        mContent: '아삭 달콤 연근 피클이 완성 됐습니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c7f557064960a95dbdf3110b34012d0f1.jpg',
        recipeId: 327,
    },
    {
        mNum: 2347,
        mContent:
            '달걀말이에 넣을 재료인 당근, 파프리카, 피망을 잘게 다져 준비하고 크래미는 찢어 반으로 잘라 준비합니다. * 재료는 냉장고 사정에 따라 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7d08aa86900001d5031a8d7231fd687f1.jpg',
        recipeId: 328,
    },
    {
        mNum: 2348,
        mContent:
            '그릇에 달걀 5개와 다져놓은 재료를 모두 넣어주세요. 그리고 마요네즈 1, 파르마산 치즈가루 1, 맛술 2, 소금 0.2를 넣고 고루 섞어주세요. 생생정보통신 달걀말이 황금 레시피 비법인 마요네즈와 파르마산 치즈가루를 넣어주면 달걀이 휠씬 부드럽고 촉촉하니 맛있답니다. 그러니 달걀말이 만드실 때 꼭 넣어 보세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/08d611ba6d7e11ea7ba99c86f732521e1.jpg',
        recipeId: 328,
    },
    {
        mNum: 2349,
        mContent:
            '팬을 충분히 중불에서 달구고 팬이 달궈지면 불을 약불로 줄여주고 식용유를 두르고 준비해 놓은 달걀물 팬 전체적으로 부어주고 이때 달걀물을 한 번에 다 붓는 게 아니라 나눠서 사용합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/bdb536ae0b0c1f733a5c9b22a06d72ad1.jpg',
        recipeId: 328,
    },
    {
        mNum: 2350,
        mContent:
            '달걀 윗부분이 익기 시작하면 끝 쪽부터 돌돌 말아주세요. 달걀말이 할 때는 불 조절을 잘해야 하는데요. 너무 센 불로하면 타기 쉽고 코팅 팬을 사용해야지 만들기 휠씬 쉽답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/cabc78d3a746056380b8f18d390a271d1.jpg',
        recipeId: 328,
    },
    {
        mNum: 2351,
        mContent: '어느 정도 말다 남겨 놓았던 달걀물을 부어주고 다시 끝부분부터 말아주고 같은 방법으로 달걀물이 없어질 때까지 반복해 말아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/f6bff010ee6891fdb3b194068f58a0181.jpg',
        recipeId: 328,
    },
    {
        mNum: 2352,
        mContent:
            '달걀말이 완성되면 김밥 말이로 달걀을 말아주면 모양이 예쁜 달걀말이를 만드실 수 있답니다. 한 김 식힌 후 먹기 좋은 크기로 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2a1f5325cdd4454facdcc0027f3b513b1.jpg',
        recipeId: 328,
    },
    {
        mNum: 2353,
        mContent: '달걀말이 완성 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d6af5071d12e2816c7bcbd0c18a2f9771.jpg',
        recipeId: 328,
    },
    {
        mNum: 2354,
        mContent:
            '수제비 반죽을 만들어주세요. 넓은 그릇에 밀가루 4컵, 소금 0.2, 생수 1컵+1/2컵을 넣고 고루 잘 치대 밀가루를 뭉쳐주세요. 어느 정도 반죽이 뭉쳐지면 식용유 1을 넣고 치대 줍니다. 대략 3~5분 정도 반죽해 놓은 반죽은 바로 사용하지 마시고 일회용 비닐봉지에 넣어 냉장고에 1~2시간 정도 휴지해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/fe106197ecc7385a6b9ed529c4aa24cd1.jpg',
        recipeId: 329,
    },
    {
        mNum: 2355,
        mContent: '그다음 냄비에 멸치 다시마 육수를 끓여 주세요. 6~7컵 정도 만들어 주심 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/30d41b10435dcc285305af0974d9ddb01.jpg',
        recipeId: 329,
    },
    {
        mNum: 2356,
        mContent: '함께 넣을 감자는 먹기 좋은 크기로 썰고 청양고추와 대파는 송송 썰어 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a337cb423463a1ffaa28d96eca526c451.jpg',
        recipeId: 329,
    },
    {
        mNum: 2357,
        mContent: '멸치 다시마 육수 6~7컵에 고추장 2를 풀어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c9bdf729d21718cee97716e2a480a5581.jpg',
        recipeId: 329,
    },
    {
        mNum: 2358,
        mContent: '그다음 된장 1.5를 풀어 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/9e30a34eb3b3ecf5d95093891dc1ed0d1.jpg',
        recipeId: 329,
    },
    {
        mNum: 2359,
        mContent: '곧이어 감자를 넣고 보글보글 끓여주다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4d7a553b4991e970ca9dd32ae82427db1.jpg',
        recipeId: 329,
    },
    {
        mNum: 2360,
        mContent: '수제비를 얇게 떠 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/82941415150886ac422c4afb1c0095461.jpg',
        recipeId: 329,
    },
    {
        mNum: 2361,
        mContent: '서로 달라붙지 않게 숟가락으로 중간중간 저어가며 수제비를 떠 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/23cba222f00544a612db48075cfd82c41.jpg',
        recipeId: 329,
    },
    {
        mNum: 2362,
        mContent: '수제비가 익으면 청양고추와 대파를 넣고 한소끔 더 끓여 마무리합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5a03d51c956ee769e56aff223a5ae28d1.jpg',
        recipeId: 329,
    },
    {
        mNum: 2363,
        mContent: '고추장수제비완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a739759401800c7b96fa5d7bc1cf16041.jpg',
        recipeId: 329,
    },
    {
        mNum: 2364,
        mContent:
            '메추리알을 삶아주고 냉장고에 있던 찬 달걀을 바로 삶아버리면 터지기 쉬우니 실온에 미리 꺼내 놓았다 삶아주심 좋아요. 그리고 식초, 소금을 넣어주세요 메추리알 대신 달걀로 대체 가능합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/3727aa25f220493568fac427596ebd811.jpg',
        recipeId: 330,
    },
    {
        mNum: 2365,
        mContent: '꼬마 새송이버섯 중 큰 거는 반으로 잘라주고 작은 건 그냥 사용하세요 메추리알은 껍질을 까서 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ab4b5b5a62d28c0095a69c75c91b0cac1.jpg',
        recipeId: 330,
    },
    {
        mNum: 2366,
        mContent: '냄비에 물 1컵을 넣고 다시마를 넣어주세요. 물이 끓기 시작하면 다시마를 건져내어 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/163a281339502ce2e18462361149fa8b1.jpg',
        recipeId: 330,
    },
    {
        mNum: 2367,
        mContent:
            '다진 마늘 1, 생강가루 0.2를 넣고 간장 6, 올리고 당 1, 설탕 0.5, 맛술 2를 넣어 바글바글 끓여주세요. 저는 다진 마늘을 넣었는데 통마늘 있은 편 썰어 넣어주세요. 그게 깔끔합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eb99f0fbb87d356feb161e226728e1831.jpg',
        recipeId: 330,
    },
    {
        mNum: 2368,
        mContent: '준비해 놓은 메추리알, 꼬마 새송이버섯을 넣고 양념이 잘 배이도록 조려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/86191cdbe6f9e7ab1847711464bad5001.jpg',
        recipeId: 330,
    },
    {
        mNum: 2369,
        mContent: '버섯과 달걀에 간장 양념이 배고 국물이 자박자박하게 남으면 마무리해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7fec6f8bc69c954f2517aadec4bf69881.jpg',
        recipeId: 330,
    },
    {
        mNum: 2370,
        mContent: '버섯 달걀 장조림 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/810781a37018d09a2c535a5d8b5c77191.jpg',
        recipeId: 330,
    },
    {
        mNum: 2371,
        mContent: '양파 1개를 잘게 다져 주세요 (큰 사이즈 양파)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/098fdc290c024441e2d88df288e411e01.jpg',
        recipeId: 331,
    },
    {
        mNum: 2372,
        mContent:
            '팬에 버터 1을 두르고 다져 놓은 양파를 모두 넣고 달달 볶아주세요. 소금, 후춧가루 적당량을 넣어 간을 해주고 양파가 갈색빛이 돌 때까지 볶아 줍니다. 볶은 양파는 식혀주세요. * 양파를 볶아 사용하면 물이 생기지 않으니 꼭 볶아 사용하세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0f7161ef556dbe580418023ebe3258d61.jpg',
        recipeId: 331,
    },
    {
        mNum: 2373,
        mContent:
            '넓은 그릇에 다진 쇠고기 600g 준비하고 (돼지고기, 쇠고기를 반반으로 섞어 사용해도 됩니다.) 소고기에 햄버그스테이크 재료인 볶아서 식힌 양파를 모두 넣고 빵가루 1/2컵, 다진 마늘 1, 케첩 1/2컵, 설탕 1, 간장 1/4컵, 식초 1을 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/44a48d0cff4b2331dfd8f28a384ec5081.jpg',
        recipeId: 331,
    },
    {
        mNum: 2374,
        mContent: '위생장갑을 끼고 반죽을 찰기 있게 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/12a09a79ad58c30fb935128f0cc784231.jpg',
        recipeId: 331,
    },
    {
        mNum: 2375,
        mContent: '반죽을 적당하게 떼어 동글 넓적하게 만들어주고 가운데 부분을 움푹 파주세요. 6개 정도 만드실 수 있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/51f256c958fd1f49ded16adc67d06c941.jpg',
        recipeId: 331,
    },
    {
        mNum: 2376,
        mContent:
            '팬에 식용유를 두르고 햄버그스테이크를 중약불에서 노릇하게 구워주세요. 센 불로 구울 경우 겉만 타고 속은 익지 않으니 중약불에서 천천히 구워주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/502b96549edbcd242285d702b786964b1.jpg',
        recipeId: 331,
    },
    {
        mNum: 2377,
        mContent:
            '한쪽 면이 노릇하게 구워지면 뒤집어주고 물을 조금 넣고 뚜껑을 덮어 속까지 익혀줍니다. *함박스테이크를 구우면서 다른 팬에 소스를 만들어주면 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/05c78e3d1c64d6e8142ce7c7b76e7f981.jpg',
        recipeId: 331,
    },
    {
        mNum: 2378,
        mContent: '양파 1/2개를 채 썰어 주고 팬에 버터 1을 넣고 양파를 달달 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d5767593ec15c932393c606d08868a471.jpg',
        recipeId: 331,
    },
    {
        mNum: 2379,
        mContent:
            '여기에 물 1컵을 붓고 케첩 10, 간장 4, 식초 1, 설탕 2, 올리고 당 3을 넣고 바글바글 끓여주세요. 취향에 따라 마지막에 후춧가루를 넣어 마무리합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eef445f7e7192e40f0f57c3ddd61014a1.jpg',
        recipeId: 331,
    },
    {
        mNum: 2380,
        mContent: '햄버그스테이크에 올릴 달걀 프라이도 부쳐주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/dcec4958dcd62fad50047f3da90282371.jpg',
        recipeId: 331,
    },
    {
        mNum: 2381,
        mContent: '백종원 함박스테이크 완성',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/26c443ed472f7528877502d6a6cbe33d1.jpg',
        recipeId: 331,
    },
    {
        mNum: 2382,
        mContent: '양파, 당근 조금 넣어 채 썰어 준비하고 느타리버섯은 가닥가닥 떼어 주고 물에 헹궈 준비해 주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7ec01ab40dbbbd40cb53cde3356fc28c1.jpg',
        recipeId: 332,
    },
    {
        mNum: 2383,
        mContent: '달군 팬에 버터 1 또는 식용유를 두르고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/21ed5d1bf2232a1326938781ca9bdc751.jpg',
        recipeId: 332,
    },
    {
        mNum: 2384,
        mContent: '버섯과 양파를 넣고 달달 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b520fdaab08ecf9a34a50f0b3dc1c2ad1.jpg',
        recipeId: 332,
    },
    {
        mNum: 2385,
        mContent: '버섯과 양파를 넣고 달달 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a24243174ba1f8edfc2bbf269147e2aa1.jpg',
        recipeId: 332,
    },
    {
        mNum: 2386,
        mContent: '바글바글 끓기 시작하면 준비해 놓은 카레가루 1봉지를 모두 넣고 뭉치지 않게 고루 잘 풀어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/080d611739a4c6f4dc662b99e0f9b32d1.jpg',
        recipeId: 332,
    },
    {
        mNum: 2387,
        mContent: '카레가 거의 완성될 즘 우유 1/2컵을 넣어 한소끔 더 끓여 마무리해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6c17c82e176a7adfaae4703a4efba5681.jpg',
        recipeId: 332,
    },
    {
        mNum: 2388,
        mContent: '함께 드실 달걀 프라이도 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/10932ad6aa9ea61547ee47bf74148cf91.jpg',
        recipeId: 332,
    },
    {
        mNum: 2389,
        mContent: '그릇에 담을 담고 버섯 카레와 달걀 프라이 올려주면 버섯 카레라이스 완성 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d444303e2703bacba2884ffa6529796d1.jpg',
        recipeId: 332,
    },
    {
        mNum: 2390,
        mContent: '건표고, 멸치, 디포리, 보리새우',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/e9b724436192f689388b909a9adefa1e1.jpg',
        recipeId: 333,
    },
    {
        mNum: 2391,
        mContent: '무, 양파, 다시마',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/977c8f4c72841f9d04b3f1b2749190771.jpg',
        recipeId: 333,
    },
    {
        mNum: 2392,
        mContent:
            '큰 냄비에 재료를 다 같이 넣고 끓여요. 멸치와 디포리의 비린내를 없애기 위해 전자렌지에 1분 정도 돌려서 쓰세요. 팬에 볶는 것보다 훨씬 편해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/aa2bd03c50ad34492fc563ed4ff770021.jpg',
        recipeId: 333,
    },
    {
        mNum: 2393,
        mContent: '국물이 잘 우러나도록 1시간 이상 끓여요. 약한 중간불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/667d504d596bb92fb7ea2ad9fcffc6621.jpg',
        recipeId: 333,
    },
    {
        mNum: 2394,
        mContent: '고운 체에 밭쳐 건더기를 걸러내요. 각각의 재료를 눌러 짜서 최후의 한 방울까지 얻어내요. ^^*',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/f1e7a2a9b19094193eba6b8d3dd48a901.jpg',
        recipeId: 333,
    },
    {
        mNum: 2395,
        mContent: '건더기를 걸러낸 국물이에요. 여기에 국간장을 넣고 10분 정도 끓인 후, 식혀서 유리용기에 담아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/c122fcc92a98f5ad8e3af174d6346f501.jpg',
        recipeId: 333,
    },
    {
        mNum: 2396,
        mContent: '돌나물은 뿌리부분을 제거하고 이파리만 떼내요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/51ea00b206d0f1624282335dc97c4f291.jpg',
        recipeId: 334,
    },
    {
        mNum: 2397,
        mContent: '이파리를 깨끗이 씻어 체에 밭쳐 물기를 뺍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/73fc7bdc4592392ba0c16f7138c0f7961.jpg',
        recipeId: 334,
    },
    {
        mNum: 2398,
        mContent: '배, 콜라비, 파, 붉은 고추를 준비해요. 붉은 고추는 없어도 됩니다. 고춧가루가 있으니까요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/56c598df5f2e50a953e51b904b043aa41.jpg',
        recipeId: 334,
    },
    {
        mNum: 2399,
        mContent: '국물백에 넣은 다진 마늘과 고춧가루예요. 고춧가루와 마늘이 둥둥 떠다니면 보기 싫어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/4d6a234e0fde7c93a39823f0e3d8a8fd1.jpg',
        recipeId: 334,
    },
    {
        mNum: 2400,
        mContent: '밀가루를 개어 놓아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/4eaf5b85b4778265c9e56e6c581386431.jpg',
        recipeId: 334,
    },
    {
        mNum: 2401,
        mContent: '국물로 쓸 양의 생수에 밀가루물을 넣어 끓여서 식혀요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/ba535474863ebbec66d88e14209c18a21.jpg',
        recipeId: 334,
    },
    {
        mNum: 2402,
        mContent: '국물이 식는 동안 콜라비를 썰고~ 콜라비 대신 무를 넣어도 좋아요. 저는 마침 콜라비가 있어서... 콜라비의 단맛이 좋아서요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/2abb6e1e8d100f53b39c34d2bb53e28e1.jpg',
        recipeId: 334,
    },
    {
        mNum: 2403,
        mContent: '강판에 배를 갈아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/28efeaacb0e899f056ecf467c974ab111.jpg',
        recipeId: 334,
    },
    {
        mNum: 2404,
        mContent: '고운 망에 밭쳐 눌러 짜서 배물을 만들어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/7d5f3f57c1cce0b76babe9b18e1668051.jpg',
        recipeId: 334,
    },
    {
        mNum: 2405,
        mContent: '밀폐용기에 돌나물, 콜라비, 파 등 재료를 다 넣어요. 배물도 넣고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/b3e40fc52a7efb92e860e7f0c6e6e4a81.jpg',
        recipeId: 334,
    },
    {
        mNum: 2406,
        mContent: '만들어 놓은 국물을 부어 상온에서 하루 정도 익혀 냉장보관하세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/14/fdc96e70a9c7712a54fcdfb5b61304aa1.jpg',
        recipeId: 334,
    },
    {
        mNum: 2407,
        mContent:
            '소세지,파프리카,양파 썰어 팬에 담고 약불로 해서 살짝 야채에 숨이 죽도록 볶아주세요 기름은 쓰지않았어요 야채에 수분기가 있어 약불로 볶아주시면 됩니다 볶지않고 그냥하면 치즈는 녹아도 야채는 생인 느낌이 들드라구요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/3671db0cb7738071d286f68bd97256731.jpg',
        recipeId: 335,
    },
    {
        mNum: 2408,
        mContent: '볼에 밥 작은 1인분량 담고 계란 1 탁~ 고루 버무려 섞어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/285ec10ff6050bb5ce43e26d4d60e6631.jpg',
        recipeId: 335,
    },
    {
        mNum: 2409,
        mContent: '예열된 팬에 기름을 두르고 동글 납작하게 밥을 펴 앞,뒤로 노릇하게 구워주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/df41fe547849d93f6b4d140c60339a401.jpg',
        recipeId: 335,
    },
    {
        mNum: 2410,
        mContent: '구워진 계란밥에 케챱 한큰술 펴 발라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/acc16c7ce02193ba1d96b7a3619f28751.jpg',
        recipeId: 335,
    },
    {
        mNum: 2411,
        mContent: '볶아놓은 야채,햄 ,크래미 토핑해 주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4f800130d8e9bb84150058d33534fa1d1.jpg',
        recipeId: 335,
    },
    {
        mNum: 2412,
        mContent: '피자치즈 올려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/e344136606dcb9ecf46f9f3cc4dc436c1.jpg',
        recipeId: 335,
    },
    {
        mNum: 2413,
        mContent: '오븐에서 치즈가 녹을 동안 구워주시면 끝 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d78cdafa45992e263bd4a05f73f6a5bf1.jpg',
        recipeId: 335,
    },
    {
        mNum: 2414,
        mContent:
            '바쁜 현대인들을 위해 이렇게 서 판매하는것이 있어요 다오네도 깐 메추리알을 사용하였네요 그냥하기엔 좀 그래서 물에 담구어 둔뒤 끓는물에 살짝 삶아서 사용을 하였네요~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/25f5435fbd51b4573df60f78608201d61.jpg',
        recipeId: 336,
    },
    {
        mNum: 2415,
        mContent: '마늘도 살짝 삶아주시구요~ 아이들이 마늘을 잘 먹지 않으니 이렇게 만들어 먹으면 아마도 먹지 않을까요``ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0b959ff7eb379090f242fa9e0b6761461.jpg',
        recipeId: 336,
    },
    {
        mNum: 2416,
        mContent:
            '작년 저온냉장고에서 잠을 자고 있는 자색무우 적당한 크기로 잘라서 무우도 삶아 주었네요~~ 자른상태로 하면 모양이 좀 그래서 둥글게 돌려 주었네요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/41882aad5417715e041c2e51ffe270351.jpg',
        recipeId: 336,
    },
    {
        mNum: 2417,
        mContent:
            '무우도 삶아 주시구요~~ 여기서 잠간~무우효능에 대해 알고갈까요^^ 무우에는 체내독소 및 노폐물 배출효과가 있구요 기관지건강 증진 효과 면역력증진 효과 있다는것 다 아시지요 천연소화재인 무우 많이 드세요~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ae542025bb700ee43d782d2e0bea2ff81.jpg',
        recipeId: 336,
    },
    {
        mNum: 2418,
        mContent: '메추리알 장조림~~만능간장으로 간단하고 쉽게 메추리알 무우 마늘을 삶아서 준비하였네요 이제는 만능간장으로 졸여주면 끝이랍니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/5a7a14214e0ce43f10d06fa365381f191.jpg',
        recipeId: 336,
    },
    {
        mNum: 2419,
        mContent: '준비한 모든 재료에 만능간장 커피잔으로 2개를 넣고 끓여주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7573ead5712b2e931b70d21f4dea65101.jpg',
        recipeId: 336,
    },
    {
        mNum: 2420,
        mContent:
            '재료에 마능간장이 잠길듯말듯하지요~ 여기서 잠간 단것을 좋아하시는분은 만능간장으로만 하시고 조금 단것이 싫으신분들은 만능간장3에 진간장 1을 혼합하여 사용하세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7fd67aaf8589452f6d8fde7cd07068131.jpg',
        recipeId: 336,
    },
    {
        mNum: 2421,
        mContent: '메추리알이 끓기 시작하면 흔들어서 뒤집어주세요 잘못 수저등으로 저어주면 마늘이나 무우가 으스러질수가 있거든요~~ㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b2cc7490f04f9c924d3faeda6b689c771.jpg',
        recipeId: 336,
    },
    {
        mNum: 2422,
        mContent:
            '마지막으로 전분 반스푼을 만능간장에 풀어 어느정도 졸여졌다 생각할때 넣고 마무리해주세요~~ 음 맛있는 메추리알 장조림 완성이 되었습니다 오늘같은 날씨에 아이들과 함께 만들어 보세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/6b37f74c6aa1601b0b70a2e15825446e1.jpg',
        recipeId: 336,
    },
    {
        mNum: 2423,
        mContent: '유부 조미액을 살짝 짜고~ 뜨거운물에 넣어서 기름기를 빼주세요. 유부피를 찢어지지 않게 조심히 손으로 꼭 짜주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/3a3c599c14a00483274b902b1ca8cd471.jpg',
        recipeId: 337,
    },
    {
        mNum: 2424,
        mContent: '떡갈비를 다지듯 썰어주세요(씹는 식감이 좋도록! 원하는 크기로)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/4734ed63be1b7d15db690e74955998661.jpg',
        recipeId: 337,
    },
    {
        mNum: 2425,
        mContent: '식용유를 살짝 두른 팬에 구워서 익혀주세요 충분히 식혀주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/a6911dc7a6ba6906e18e48bfde0263041.jpg',
        recipeId: 337,
    },
    {
        mNum: 2426,
        mContent: '식혀 둔 밥에 볶음 조미깨, 초밥소스, 떡갈비를 넣고 잘 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/11335024c7d7d25372b4b085e2ae1cb61.jpg',
        recipeId: 337,
    },
    {
        mNum: 2427,
        mContent: '한덩이를 잡아서 유부피에 넣어주세요 (원하는 크기와 양으로!)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/133d072093c1994d6e5800044849b4121.jpg',
        recipeId: 337,
    },
    {
        mNum: 2428,
        mContent: '골드키위 껍질을 깍은 후 듬성 듬성 썰어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5de7ab33330488c119a369f253dad8b61.jpg',
        recipeId: 338,
    },
    {
        mNum: 2429,
        mContent: '믹서기에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4f584f62b7b8077cf4f7cb2cc3b4c4071.jpg',
        recipeId: 338,
    },
    {
        mNum: 2430,
        mContent: '매실청 4큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a9d85c815575f4f3e1e2606cd9c377051.jpg',
        recipeId: 338,
    },
    {
        mNum: 2431,
        mContent: '제로 칼로리 나트비아 스틱2 물170ml,얼음3-4조각 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b77ff7778a70c797b7c5edb8ef0664121.jpg',
        recipeId: 338,
    },
    {
        mNum: 2432,
        mContent: '윙~~~~ 갈아 주시면 끝입니당',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5f5a59ab31e4e8fab065eaa3878e88a41.jpg',
        recipeId: 338,
    },
    {
        mNum: 2433,
        mContent: '닭껍질과 지방을 제거한뒤 찬물에 깨끗이 헹궈 끓는물에 닭과 맛술을 넣고 한번 데쳐 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/76d18c48a6fb0ed8a7434ac345039a9f1.jpg',
        recipeId: 339,
    },
    {
        mNum: 2434,
        mContent: '데친닭은 찬물에 헹궈 준비해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6d1b37292ca4ac0c073c9a7682a7eacf1.jpg',
        recipeId: 339,
    },
    {
        mNum: 2435,
        mContent: '냄비에 묵은지와 닭을 넣고 센불에서 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c0ced8b86cd77c0baceba1c621daf99d1.jpg',
        recipeId: 339,
    },
    {
        mNum: 2436,
        mContent: '고추가루. 고추장. 간장. 설탕. 다진마늘을 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/90200ea6daea292fa7b8895ef4d6d72d1.jpg',
        recipeId: 339,
    },
    {
        mNum: 2437,
        mContent: '고기에 양념이 베이면 양파와 파를 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ec7bc22660f1ae6bc046d5298f13e9181.jpg',
        recipeId: 339,
    },
    {
        mNum: 2438,
        mContent: '고기가 완전히 익었을때 청양고추를 넣어줍니다 (매운걸 안좋아하시면 청양고추는 빼주세요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0b18ff5fdc1e745dcc514942075349c01.jpg',
        recipeId: 339,
    },
    {
        mNum: 2439,
        mContent: '저희는 냉장고에 버섯이 있어 넣어줬어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d7ef2f70d8fb89fcb22a6e60d37fb99c1.jpg',
        recipeId: 339,
    },
    {
        mNum: 2440,
        mContent: '고기와 김치에 양념이 베이도록 뒤적여준뒤 약불에서 10분정도 더 끓이면 완성~~~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c4b90bf435467c57a9847eda285838c71.jpg',
        recipeId: 339,
    },
    {
        mNum: 2441,
        mContent: '팬을 달군후 버터를 넣어 녹여쥽니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/2ba4f20ba77a68bd8067b9c042b9a24e1.jpg',
        recipeId: 340,
    },
    {
        mNum: 2442,
        mContent: '오빙어채를 넣어 살짝 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/13a25a2aba3cf48a2c20c828be26d5d71.jpg',
        recipeId: 340,
    },
    {
        mNum: 2443,
        mContent: '팬에 참기름과 마요네즈를 뺀 모든재료를 넣어 끓여줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/cf547d36df833d6929bf91b27289abc91.jpg',
        recipeId: 340,
    },
    {
        mNum: 2444,
        mContent: '양념이 끓으면 깨소금을 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/e2c0bc9f2d054d6ce8f69c3d76000e501.jpg',
        recipeId: 340,
    },
    {
        mNum: 2445,
        mContent: '볶아둔 오징어채를 넣고 약불에서 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/248a37cbb6ca37d9985c410ff965631a1.jpg',
        recipeId: 340,
    },
    {
        mNum: 2446,
        mContent: '오징어채에 양념이 골고루 베이면 마요네즈를 넣고 버무려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/7836cb3fef22dfbeaf61ca578454b2c71.jpg',
        recipeId: 340,
    },
    {
        mNum: 2447,
        mContent: '마무리로 참기름을 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/c7f132868f4051e7b001db09d52f933d1.jpg',
        recipeId: 340,
    },
    {
        mNum: 2448,
        mContent: '파는 불을 끄고 마지막에 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/d945f447ca9f45d23c1f4279e82912f41.jpg',
        recipeId: 340,
    },
    {
        mNum: 2449,
        mContent: '팬을 달군후 건새우를 살짝 볶아 비린내를 제거해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/a915c6ee4ff84a932504548f8a70ae3b1.jpg',
        recipeId: 341,
    },
    {
        mNum: 2450,
        mContent: '기름을 두르고 적당한 길이로 자른 마늘대를 낳고 다진마늘을 살짝만 넣어 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/c502537e80dbc0ca40422739c39935ea1.jpg',
        recipeId: 341,
    },
    {
        mNum: 2451,
        mContent: '볶아진 마늘대에 새우를 섞어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/9f203eef1ed8095d61fbf2fd57cc72a61.jpg',
        recipeId: 341,
    },
    {
        mNum: 2452,
        mContent: '간장을 먼저넣고 볶아 마늘대에 간이 베이게 해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/82331b8ced09eacabac3bb9671a1ca061.jpg',
        recipeId: 341,
    },
    {
        mNum: 2453,
        mContent: '설탕을 넣어주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/e8c0409f03c7d3c6d328ddeef0dc91971.jpg',
        recipeId: 341,
    },
    {
        mNum: 2454,
        mContent: '물엿을 넣어 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/5574770a0a7c380b01b595e104683ab01.jpg',
        recipeId: 341,
    },
    {
        mNum: 2455,
        mContent: '물이 조금 넣어 타지않게 볶다가 마무리로 참기름을 넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/ec0ec68a4afb6c59921dc72d5af41c4a1.jpg',
        recipeId: 341,
    },
    {
        mNum: 2456,
        mContent: '불을 끄고 뒤적거리며 양념이 골고루 섞이게 해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/24/3dfb0a3079d555d60c32e9c3a38394a71.jpg',
        recipeId: 341,
    },
    {
        mNum: 2457,
        mContent: '적당한 크기로 썬 어묵에 기름을 두르고 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d088ea2277cedfd170c049286c0357e61.jpg',
        recipeId: 342,
    },
    {
        mNum: 2458,
        mContent: '양파.파.다진마늘.(청양고추.파프리카)를 넣고 볶아줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/f4ced28fc351f8a3cc780e7c6ac8bcac1.jpg',
        recipeId: 342,
    },
    {
        mNum: 2459,
        mContent: '간장을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/fc2507fcdee73c104a1729b651b6f46e1.jpg',
        recipeId: 342,
    },
    {
        mNum: 2460,
        mContent: '매실을 넣어준뒤',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/f055fc7b2050897497ef15c47782e3381.jpg',
        recipeId: 342,
    },
    {
        mNum: 2461,
        mContent: '설탕',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6d2ac6931354c4c5eeb64c249423528f1.jpg',
        recipeId: 342,
    },
    {
        mNum: 2462,
        mContent: '올리고당을 순서대로 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/773d627bb23bbbd350d7bcb932112c061.jpg',
        recipeId: 342,
    },
    {
        mNum: 2463,
        mContent: '센불에서 휘리릭 볶은뒤 참기름을 살짝넣어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/f363e1e1e357751096ae54b441188a311.jpg',
        recipeId: 342,
    },
    {
        mNum: 2464,
        mContent: '자른 미역 물에 불려 헹군 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0758d390f91d9eac0b42c77492ddb0121.jpg',
        recipeId: 343,
    },
    {
        mNum: 2465,
        mContent: '물기를 꾹~ 짜서 볼에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ac67f1e5581fb7611eede9e48e648fce1.jpg',
        recipeId: 343,
    },
    {
        mNum: 2466,
        mContent: '오이 필러로 껍질을 벗긴 후 먹기 좋은 크기로 썰어 담고 파프리카,양파 썰어 담아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4d9e10c19eafe6a1f759e2922c9ff0d81.jpg',
        recipeId: 343,
    },
    {
        mNum: 2467,
        mContent: '위 양념 모두 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/22cb4c5bace7913f66250f993c8dcea01.jpg',
        recipeId: 343,
    },
    {
        mNum: 2468,
        mContent: '조물조물 무쳐 완성합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ddf88eb21882d83039ace43fe2de48481.jpg',
        recipeId: 343,
    },
    {
        mNum: 2469,
        mContent: '가문어 한봉지예요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a1e64c461697044765c34231e4f3073f1.jpg',
        recipeId: 344,
    },
    {
        mNum: 2470,
        mContent: '먹기 좋은 크기로 잘라줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/135cfc87f839cbc175d51595f8ac31a21.jpg',
        recipeId: 344,
    },
    {
        mNum: 2471,
        mContent: '딱딱하기도 하고 이물질 제거를 위해 물에 한번 헹궈 채망에 받쳐 물기를 빼줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eb2297c24c4ce01c67f58cb1db628a4f1.jpg',
        recipeId: 344,
    },
    {
        mNum: 2472,
        mContent: '분량의 양념을 넣고 바글바글 끓여줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eb069a7fafd9960a8eb021959f851b091.jpg',
        recipeId: 344,
    },
    {
        mNum: 2473,
        mContent: '바글바글 끓어오르면 가문어 모두 넣고 양념이 섞이게 저어주고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b9cff1cfca90e390428faa97dc972dde1.jpg',
        recipeId: 344,
    },
    {
        mNum: 2474,
        mContent: '고춧가루 1티스푼 넣고 다시 섞어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6dc3dcb0f484b7671a618c9d28841c3d1.jpg',
        recipeId: 344,
    },
    {
        mNum: 2475,
        mContent: '물엿 1큰술 넣고 불을 끕니다. 물엿을 넣으면 가문어에 코팅이 되서 반짝반짝 윤이나게 보이고요. 단맛을 더 낼 수 있어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c2925023bbf084906c52682ae441aa891.jpg',
        recipeId: 344,
    },
    {
        mNum: 2476,
        mContent: '마지막은 참기름 1큰술과 통깨뿌려주면 가문어 조림 완성입니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5469162534e98a1153013f030fa952a81.jpg',
        recipeId: 344,
    },
    {
        mNum: 2477,
        mContent: '참나물을 조금 연한것을 준비합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7f3195abc95c70a6c8ee10fa4fa2a0071.jpg',
        recipeId: 345,
    },
    {
        mNum: 2478,
        mContent: '끓는물에 살짝 데쳐 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/79533132725f62eab09deaeeea6f9efa1.jpg',
        recipeId: 345,
    },
    {
        mNum: 2479,
        mContent: '데쳐진 참나물을 물기를 적당히 짜고 용기에 담아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/e40fb3dd606b71e982737b91a7f86f7c1.jpg',
        recipeId: 345,
    },
    {
        mNum: 2480,
        mContent: '준비한 재료에 장아찌원액을 눌러서 잠길정도로 부어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/6d29d2d0c45f61913473247b5a12b4641.jpg',
        recipeId: 345,
    },
    {
        mNum: 2481,
        mContent: '하루가 지난 장아찌 모습입니다 냉장보관하시고 드시면 향긋하고 맛있는 장아찌를 드실수가 있읍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ef7abac7b67bcc4a58180a898e08cfd21.jpg',
        recipeId: 345,
    },
    {
        mNum: 2482,
        mContent: '토막닭을 물에 20분정도 담궈 불순물을 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/971ce8f829f38e507fee4bc17ffabce11.jpg',
        recipeId: 346,
    },
    {
        mNum: 2483,
        mContent: '닭을 여러번 흐르는물에 씻은후 체에받쳐물기를 제거하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/39855d099d38cf88e6e85909b92115e31.jpg',
        recipeId: 346,
    },
    {
        mNum: 2484,
        mContent: '레몬즙 세수저넣고 20분정도 닭누린내를 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b68b23adabc3286ee69c7d29610de0761.jpg',
        recipeId: 346,
    },
    {
        mNum: 2485,
        mContent: '치킨튀김가루 로 튀김옷을 만들었어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/91ba1a2d156717decc71759e9dd3638d1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2486,
        mContent: '치킨튀김가루3컵 .튀김가루2컵 넣어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/12232a90500a26cd2e5d7c3bf1ce42081.jpg',
        recipeId: 346,
    },
    {
        mNum: 2487,
        mContent: '물한컵넣어 걸쭉하게 반죽을 만들어주세요 .물을 조금씩 더 부어가며 농도를 맞춰주세요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d5f11e0a00f4bfc01852ee77f0cfca401.jpg',
        recipeId: 346,
    },
    {
        mNum: 2488,
        mContent: '닭을 반죽에 묻혀서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7dff0bb3f0fc09899e3de6adb5a2c7b21.jpg',
        recipeId: 346,
    },
    {
        mNum: 2489,
        mContent: '오븐 판에 놓고(오븐없으면 팬에 기름두르고 180도로 두번 튀겨주세요) 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7173e919f2706b88dbb0c84744cc5c921.jpg',
        recipeId: 346,
    },
    {
        mNum: 2490,
        mContent: '자동요리코스로 건강튀김코스로 20분돌린후 한번 뒤집어주고 15분 더 튀겨줍니다 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/08b988c7ba078c2cbd66bb55664fa3c01.jpg',
        recipeId: 346,
    },
    {
        mNum: 2491,
        mContent: '닭튀기는 동안 팬에 간장1.5t.다짐마늘3t.굴소스1.5t.올리브오일3t.올리고당3t.와인2t.참기름0.5t.식초2t흑설탕3t',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a2ab6becaa1031cb65aff6436d796a7d1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2492,
        mContent: '냄비에 물을붓고 다시멸치넣고 다시육수를 만들어',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/74af90475819ad99d2b48602077797b21.jpg',
        recipeId: 346,
    },
    {
        mNum: 2493,
        mContent: '팬에 두국자 다시육수 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b20f602d3a2ca54cff7ad06bbbae517c1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2494,
        mContent: '견과류 한줌 준비해서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/eece098bb2455dbc3e9387612ace14451.jpg',
        recipeId: 346,
    },
    {
        mNum: 2495,
        mContent: '믹서기에 갈아서',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a608470695e00740c1e52caa2efd4f9a1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2496,
        mContent: '견과류를 넣고 졸인 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/1700b3bb68cf50a2e94f82d88a2bf8061.jpg',
        recipeId: 346,
    },
    {
        mNum: 2497,
        mContent: '튀긴닭을 넣고 한번 볶은후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b309742feeef24ca448798b1673a0ced1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2498,
        mContent: '접시에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/bff1b0087cc84b8a1b0f0477487c67ea1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2499,
        mContent: '소스를 좀더 졸인후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2f430fd0075a515357f41107280bc00a1.jpg',
        recipeId: 346,
    },
    {
        mNum: 2500,
        mContent: '닭위에 뿌려 주세요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6d441eb8101cbf331b81ade6cea109071.jpg',
        recipeId: 346,
    },
    {
        mNum: 2501,
        mContent: '3분의1은 후라이드 그대로 접시에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f60039006cbcb83f1a442097da7f20111.jpg',
        recipeId: 346,
    },
    {
        mNum: 2502,
        mContent: '3분의2는 간장소스에 간장치킨을 만들어 주세요 .',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/4f2dbaafbebe0010836b92238c86f6e11.jpg',
        recipeId: 346,
    },
    {
        mNum: 2503,
        mContent:
            '족발은 차가운 물에 최소 1시간 이상 담궈서 핏물을 제거해주세요. 물은 수시로 갈아주면 더 좋아요. 저는 2시간 동안 담궈서 핏물을 제거했습니다. 2시간을 담궈도 핏물이 완벽히 제거가 되지는 않더라고요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d2d9184a5bc7055548bf572e8ed86fe81.jpg',
        recipeId: 347,
    },
    {
        mNum: 2504,
        mContent:
            '돼지의 발입니다. 짧은 부위라고 단족이라고 불리기도 하고 미니족발이라고 부르기도 합니다. 이 부위에는 털이 굉장히 많은 편이에요. 면도기를 이용해서 꼼꼼하게 면도를 시켜주세요. 저는 일회용 면도기로 깨끗하게 정리했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/847fb9fe5524b07c356c35a0f0619a1b1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2505,
        mContent:
            '족발이 잠길만큼의 물을 준비하고 팔팔 끓을 때 넣어서 다시 끓기 시작하는 시점부터 5분간 삶아주세요. 초벌로 삶아주는 겁니다. 족발 특유의 잡내를 잡아주는 역활을 하니 귀찮으시더라도 꼭 이렇게 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/bd3c1961c5419b9b8d504ab2b007ab601.jpg',
        recipeId: 347,
    },
    {
        mNum: 2506,
        mContent:
            '차가운 물에 담궈서 이물질들을 꼼꼼하게 씻어주세요. 핏물이 굳으면서 여기저기 엉겨있는 모습을 볼 수 있는데요. 손으로 문지르는 것보다 못쓰는 칫솔을 사용하시면 편해요. 칫솔로 족발 사이사이를 꼼꼼하게 청소했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2b8f17b76e97a9626f8e10288a8ad0f81.jpg',
        recipeId: 347,
    },
    {
        mNum: 2507,
        mContent:
            '족발은 꼼꼼하게 세척해서 준비한 다음 육수재료를 준비했어요. 이 때 양파, 청양고추, 통마늘, 파뿌리, 대파를 준비했어요. 파뿌리는 파를 한단 구입한 것이 있어서 조금 넉넉하게 사용했는데 상황에 따라 없으면 생략하셔도 괜찮을 것 같아요. 물론 넣으면 더 좋긴 하죠!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/484a5587f633536696ff7b0709710f981.jpg',
        recipeId: 347,
    },
    {
        mNum: 2508,
        mContent: '끓는 물에 족발을 넣어준 다음 화이트 와인 2잔(소주잔 기준)과 준비한 육수재료를 넣어주세요. 이 때 물은 족발이 잠길만큼 넣어줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/569af1a79538cc0afbfe8c48fee5a2da1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2509,
        mContent:
            '잡내제거에도 좋고 고기 색감에도 좋은 에스프레소 2샷, 통후추 1큰술 넣었어요. 에스프레소가 없다면 커피믹스 2개를 넣어주셔도 좋아요. 기호에 따라 한두개 더 추가하셔도 괜찮아요. 색감과 향이 더 진해질뿐 맛에는 큰 영향이 없더라고요. 다만 에스프레소를 넣어주니 특유의 한방냄새가 나서 한약재를 넣은 것과 비슷한 느낌이 나서 좋았어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7a34a0ff70d83a47671c13f5520e524d1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2510,
        mContent:
            '잡내제거에 좋고 맛에 큰 영향을 주는 된장을 2큰술 듬뿍 넣었어요. 간장은 2컵 반(종이컵 기준)을 넣었는데, 물의 양에 따라서 간이 조금씩 다를 수 있으니 심심하면 간장을 조금 더 넣어서 맞춰주세요. 부족한 간은 간장으로 맞추시는 거에요. 소금 간은 NONO~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/0e7634ef56681ef59df80cefa51581801.jpg',
        recipeId: 347,
    },
    {
        mNum: 2511,
        mContent:
            '물엿 1컵, 설탕 1컵 반 넣어주세요. 저는 단맛이 쎈 것을 좋아하지는 않아서 딱 적당히 넣었어요. 단짠 좋아하시면 설탕을 조금 더 넣으시면 될 것 같네요. 족발은 육수 맛을 보면 쉽게 간을 알 수 있으니 육수 맛 보시고요. 그래도 잘 모르겠다면 고가 살짝 잘라서 맛 보시고 판단하시면 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2bbfad98bf03e3137e318c5883a9225f1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2512,
        mContent: '뚜껑 닫고 중불에서 1시간 30분 동안 삶아줬어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/9c9458a6a1984a63f6b2b85d552cf31a1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2513,
        mContent:
            '족발을 건졌어요. 캐러멜을 사용하지 않았지만 색감이 아주 잘나왔죠? 모두 간장과 에스프레소 덕분입니다. 바로 먹고 싶은 충동이 컸지만 살짝 식혀서 먹는 것이 더 맛있다는 말이 기억나서 자연바람에 잠시 식혔습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a12d434d9c77e55a9d6c8cfd1fce3ded1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2514,
        mContent:
            '살짝 식어서 그런지 족발 써는 것도 그리 어렵지 않았어요. 족발집에 족발을 주문하면 함께 오는 겉절이나 막국수, 새우젓갈, 양파절임 같은 것이 없어서 약간 서운하긴 했지만 그래도 족발과 잘 어울릴만한 것들을 최대한 꺼내봤습니다. 냉장고에 있는 것들을 꺼내보니 상추쌈, 쌈장, 장아찌(양파, 마늘종, 깻잎, 호박잎 등), 부추 겉절이가 나왔네요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/67dbc109d87dc891577f5ff51cfc9f951.jpg',
        recipeId: 347,
    },
    {
        mNum: 2515,
        mContent:
            '어쨌든 먹고 싶었던, 꿈에 그리던 족발을 드디어 먹게 되었습니다. 맛은 아주아주 만족스러웠습니다. 이 곳에서 판매되는 족발이 그리 맛있지 않은데요. 맛있는 레서피 찾아서 직접 만드니 저희 입맛에 맞아서 더 좋았던 것 같아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/a96bb2ce284e70509f4e23cbc764f7df1.jpg',
        recipeId: 347,
    },
    {
        mNum: 2516,
        mContent: '오이는 깨끗이 세척 후 먹기좋은 크기로 썰어 볼에 담고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/aafc656476ac1692f732e4d71bdac5891.jpg',
        recipeId: 348,
    },
    {
        mNum: 2517,
        mContent:
            '냄비에 물4컵과 굵은소금 2T 넣고 팔팔 끓으면 오이 담긴 볼에 붓고 절여요 약 15분 절입니다 끓인 소금물을 뜨거운 채로 부어 절이게 되면 오이김치의 아삭함을 더 해줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/165c9a9abd9433895fec942688e23d231.jpg',
        recipeId: 348,
    },
    {
        mNum: 2518,
        mContent: '양파와 홍고추 채썰고 부추도 적당한 길이로 썰고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/8b6705240ab09baa1cd825d6c3d3df6a1.jpg',
        recipeId: 348,
    },
    {
        mNum: 2519,
        mContent: '15분 절인 오이는 물기 제거하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/3604f9810fbb5f926f12bb92d2f88a511.jpg',
        recipeId: 348,
    },
    {
        mNum: 2520,
        mContent: '양파와 고춧가루 양념을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/c8b07891e4dee6d1870753b406ad17491.jpg',
        recipeId: 348,
    },
    {
        mNum: 2521,
        mContent: '1차로 버무려줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2580623c795a86d39ef798d05028b6c71.jpg',
        recipeId: 348,
    },
    {
        mNum: 2522,
        mContent: '마지막에 부추와 홍고추 넣고 살살 버무려 마무리합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/af9921f2363625b9274839bac56b88b11.jpg',
        recipeId: 348,
    },
    {
        mNum: 2523,
        mContent: '묵은 비닐 제거하고 도마위에 뒤집 놓고 팩의 뒷면에 칼로 대각선으로 두군데에 조금씩 잘라 내면 공기가 빠져 쉽게 꺼낼 수 있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/d97ac843708d4c5656583230af64ea2d1.jpg',
        recipeId: 349,
    },
    {
        mNum: 2524,
        mContent: '세척한 묵은 먹기좋은 크기로 자릅니다 묵 써는 칼을 사용하면 모양이 예쁘게 나옵니다~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/69c4c8b8c8c68fa290f120ad37de345a1.jpg',
        recipeId: 349,
    },
    {
        mNum: 2525,
        mContent: '청양고추 홍고추는 잘게 썰어 볼에 담고 분량의 양념 넣고 섞어주고요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/fa8cdc74a1fa2429eb696514bb563ebc1.jpg',
        recipeId: 349,
    },
    {
        mNum: 2526,
        mContent: '완성 접시에 어린잎 채소를 올리고 위에 묵을 올려주었어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/141636b914af4ca781f17493555387ee1.jpg',
        recipeId: 349,
    },
    {
        mNum: 2527,
        mContent: '묵 위에 양념과 김가루 올리고 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/05/be91bf18709452e4681760d0c5a0ec771.jpg',
        recipeId: 349,
    },
    {
        mNum: 2528,
        mContent: '두릅을 찬물에 씻어주시고 아랫부분에 있는 껍질(?)부분과 가시를 제거해주세요. 두릅 15줄기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5962a86a9a3b248950760d417c493dd11.jpg',
        recipeId: 350,
    },
    {
        mNum: 2529,
        mContent:
            '아래 줄기부분을 열 십(十)자로 홈을 내어 주세요. 두릅을 데치는 시간이 짧기 때문에 속까지 잘 익게하기 위해서 이기도하고, 양념이 더 잘 밸 수 있도록 해주기 위해서에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/283373cdad2f7947c49b5c8e2c8ebd8a1.jpg',
        recipeId: 350,
    },
    {
        mNum: 2530,
        mContent:
            '두릅은 데치기 전, 양념을 만들어줍니다. 고추장 2큰술 + 식초 1큰술 + 다진마늘 1/3큰술 +매실청 4큰술 + 참기름 2큰술 + 깨소금 1큰술 왠만한 무침양념 (고추장베이스)는 이 비율을 사용하시면 맛이 좋더라구요. 고추장 2큰술 + 식초 1큰술 + 다진마늘 1/3큰술 +매실청 4큰술 + 참기름 2큰술 + 깨소금 1큰술',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/06fac8f1755d87b70243346cea4c77841.jpg',
        recipeId: 350,
    },
    {
        mNum: 2531,
        mContent:
            '끓는물에 소금 1Ts를 넣어주시고 데쳐줍니다. 팔팔 끓는물에 빠르게 데쳐야 식감이 더 좋구요. 데친 두릅은 빠르게 찬물로 헹궈줍니다. 소금을 넣는 이유는 밑간을 살짝 해주는 것과 같습니다. 또한 두름의 색을 더 진하게 해주죠. 찬물로 신속하게 행구면 더 아삭한 식감을 살릴 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d74afd53673eaf838b95c3fe493eec1c1.jpg',
        recipeId: 350,
    },
    {
        mNum: 2532,
        mContent: '찬물에 헹군 두릅의 물기를 제거하고 아까 만든 양념과 함께 버무려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/8e1260c0a982741ceaafecd619d23aa21.jpg',
        recipeId: 350,
    },
    {
        mNum: 2533,
        mContent: '잘 버무려진 두릅은 예쁜 그릇에 담아주면 끝이납니다. 새콤달콤한 맛 + 아삭아삭한 식감이 일품인 두릅무침! 맛있게 드세요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/93e75ae404e0d4dcccc786e3695483271.jpg',
        recipeId: 350,
    },
    {
        mNum: 2534,
        mContent: '재료를 준비한다. 계란은 풀어서 계란물을 만든다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/ee26ea4bb89fccd738d63c9495132cb91.jpg',
        recipeId: 351,
    },
    {
        mNum: 2535,
        mContent: '바나나를 3등분한다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/8b30263e6946800ca041aabcf1d001561.jpg',
        recipeId: 351,
    },
    {
        mNum: 2536,
        mContent: '만두피 위에 계란물을 발라주고 그 위에 바나나 한조각을 얹는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6029404bc0e4421ebfdc5b8e26cdbefa1.jpg',
        recipeId: 351,
    },
    {
        mNum: 2537,
        mContent: '만두피로 바나나를 감싼다. 감쌀 때 옆을 감싸고 돌돌 말듯이 감싸준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/e16b6d97208df9f058365be8e6589dd11.jpg',
        recipeId: 351,
    },
    {
        mNum: 2538,
        mContent: '기름에 튀긴다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/abfb73be7831cda37df2c3d662a3136d1.jpg',
        recipeId: 351,
    },
    {
        mNum: 2539,
        mContent: '다른 팬에 기름을 두르고 설탕3스푼과 물엿을 넣고 섞는다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2c73d228a4620ba925c16ba7524733e01.jpg',
        recipeId: 351,
    },
    {
        mNum: 2540,
        mContent: '바나나튀김이 다 익으면 설탕과 섞어준다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/146bb77a11b0d5d8a22b1082c0dc8ef91.jpg',
        recipeId: 351,
    },
    {
        mNum: 2541,
        mContent: '마무리',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/85a7411db1288181d7a7d6cd7ca96b4e1.jpg',
        recipeId: 351,
    },
    {
        mNum: 2542,
        mContent: '먼저 국물용 멸치의 머리, 내장, 뼈를 다 떼어내 버려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/4ca72aca1813397f22115ab7e0c18f491.jpg',
        recipeId: 352,
    },
    {
        mNum: 2543,
        mContent:
            '프라이팬에 멸치 몸통을 넣고 센불에서 3~4분 볶아주세요. (살짝 노르스름한 색감이 나올때까지) 다 볶고 나면 부스러기가 나오죠! 이건 쓴맛이 나니 버려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/640db6c6d3a0f54b0b84bce41e1ddcea1.jpg',
        recipeId: 352,
    },
    {
        mNum: 2544,
        mContent: '청양고추는 반으로 어슷 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/955db846bfc878d01229748a1ec30bc51.jpg',
        recipeId: 352,
    },
    {
        mNum: 2545,
        mContent: '그리고 깻잎 양념장 재료들을 다 넣고 섞어주세요. (설탕이 녹을 때까지) 홍고추, 청고추, 쪽파는 송송송 썰어서~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/152aad5feb2ee0c8c0bc278265c033fb1.jpg',
        recipeId: 352,
    },
    {
        mNum: 2546,
        mContent:
            '깻잎 2장을 겹친 다음, 위쪽 깻잎 중앙 부분에 양념장 1/2T을 발라주면 된답니다. 깻잎 2장 → 양념장 → 깻잎 2장 순서대로 켭켭이 쌓아올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2307fc43e3e2fde952d47ebdff1a40f51.jpg',
        recipeId: 352,
    },
    {
        mNum: 2547,
        mContent: '냄비에 조림장 재료와 멸치, 청양고추를 넣고 뚜껑을 열어 센불에서 5분 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/cc08fa2893c0b3304efa64d3aa57315d1.jpg',
        recipeId: 352,
    },
    {
        mNum: 2548,
        mContent: '조림장이 반 정도 졸아들었으면, 마늘을 넣고 4분 더 끓여주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2830771ded2b72fa2b1b459d2e1e1d231.jpg',
        recipeId: 352,
    },
    {
        mNum: 2549,
        mContent:
            '조림장 양이 1/3로 줄었을 무렵~ 깻잎을 넣고 뚜껑을 덮어 5분 정도 졸여주면 된답니다. 멸치랑 통마늘, 청양고추는 반찬으로 같이 먹어요. 절대 버리지 마세요!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/b5d281f100f0ab6e1eb4a798d00c950e1.jpg',
        recipeId: 352,
    },
    {
        mNum: 2550,
        mContent: '중간중간 깻잎 위에 조림장을 끼얹어주는면 골고루 잘 밴답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/1e5aacd72deb82bdc1bc96450f320b121.jpg',
        recipeId: 352,
    },
    {
        mNum: 2551,
        mContent: '완성된 깻잎찜은 냉장보관해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/7a4dadaa777102957b7100120bdd04281.jpg',
        recipeId: 352,
    },
    {
        mNum: 2552,
        mContent: '양파를 얇게 썰어 찬물에 담궈줍니다. 양파슬라이스를 찬물에 넣어주면 매운맛 감소와 아삭한 식감을 살려줘요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/5d16c779196574bdc3a1e3b176937e0c1.jpg',
        recipeId: 353,
    },
    {
        mNum: 2553,
        mContent: '대파도 얇게 썰어줍니다. (가니쉬용이에요) 얇게 손질한 대파를 찬물에 넣어주면 모양이 컬(curl)되어 더 예쁘게 장식할 수 있어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/469ed68a4e50dbe52f305348c77ba2711.jpg',
        recipeId: 353,
    },
    {
        mNum: 2554,
        mContent:
            '아보카도의 껍질을 벗겨내신 후에 얇게 슬라이스 해주세요 아보카도 껍질을 벗길 때에는, 가운데 씨를 제거한 후에 손으로 껍질을 벗기면 예쁘게 잘 벗겨져요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/d5d170ddb487f8c0f930a2ba9913267e1.jpg',
        recipeId: 353,
    },
    {
        mNum: 2555,
        mContent:
            '칼등을사용하여 명란 알맹이만 빼내어 주세요. (더 부드러운 식감과 밥과 더 잘 섞이게 하기 위해서에요) 명란 1팩에 4덩이가 들어있었습니다. 저는 그중 3덩이를 사용했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/6fd2a872eb6c56d7fda5ac9e7f2129b21.jpg',
        recipeId: 353,
    },
    {
        mNum: 2556,
        mContent: '알맹이만 모인 명란에 참기름 1큰술을 넣고 섞어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/750e501823a9542acde5754a7e7c9bf61.jpg',
        recipeId: 353,
    },
    {
        mNum: 2557,
        mContent: '재료 준비가 끝났습니다. 이제 예쁜 그릇에 1. 밥 2. 아보카도 3. 양파 4. 명란 5. 대파 순서대로 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/f46308ddba28282e13c5e222384398c71.jpg',
        recipeId: 353,
    },
    {
        mNum: 2558,
        mContent: '마지막으로 깨소금을 뿌려주고 참기름을 1큰술 둘러주면 완성입니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/06/2a6ca5cd67604c5b074042f8548066c91.jpg',
        recipeId: 353,
    },
    {
        mNum: 2559,
        mContent: '삼겹살에 칼집을 내주고 소금과 후추로 밑간을 해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/a03560049c8cea7c8bf4b4c3a3ea5ecf1.jpg',
        recipeId: 354,
    },
    {
        mNum: 2560,
        mContent: '야채는 집어먹기 쉽게 큼지막하게 손질하세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9dd71783fcd1050f7ad7e3995c0cacff1.jpg',
        recipeId: 354,
    },
    {
        mNum: 2561,
        mContent: '밑간이 된 삼겹살을 먹기좋은 크기로 썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/5783ab7f9f07f4f95c2c1e53ba92e9141.jpg',
        recipeId: 354,
    },
    {
        mNum: 2562,
        mContent: '웍에 기름을 붓고, 파와 마늘을 넣어 파기름을 내주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/2870c7eca207340c865e633aaf0b56521.jpg',
        recipeId: 354,
    },
    {
        mNum: 2563,
        mContent:
            '달궈진 파기름에 노추3큰술과 굴소스3큰술 그리고 설탕 1/2큰술을 넣어주세요. 노추 3큰술, 굴소스 3큰술, 설탕 1/2큰술 노추를 넣으면 색이 진한 갈색이 됩니다. 당황하지 마시고 계속 진행해주세요 ^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/06758a7b21e52cd4dae1af5d3a2f2db91.jpg',
        recipeId: 354,
    },
    {
        mNum: 2564,
        mContent:
            '노추를 넣은 파기름에 고기를 넣고 볶아주세요. 중국식 볶음요리의 특징은 야채의 식감이 그대로 살아있다는 것인데요. 그렇게 하기 위해서는 고기를 충분히 익혀준 후에 야채를 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/fd3279229876adc2045b305c63cf62221.jpg',
        recipeId: 354,
    },
    {
        mNum: 2565,
        mContent: '손질된 야채를 한번에 부어주세요. 야채가 너무 익어서 숨이 죽지 않고 아삭거림을 유지하기위해 센불에 신속하게 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/b0670ccf6d4c8ac59eb7dc2168a0ffe11.jpg',
        recipeId: 354,
    },
    {
        mNum: 2566,
        mContent: '양념이 야채에 살짝 배어들정도로만 볶아주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3412e7e9fd2cc844975b83fc2ca557101.jpg',
        recipeId: 354,
    },
    {
        mNum: 2567,
        mContent:
            '그릇에 담아주고 파채로 가니쉬를 해주면 완성이에요. 파채는 썰어서 찬물에 담궈놓으면 사진과 같이 예쁜 모양으로 가니쉬를 할 수 있습니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/57f1a86c9d393e6972853f28e67fcd0c1.jpg',
        recipeId: 354,
    },
    {
        mNum: 2568,
        mContent: '야식으로 딱인 골뱅이 무침 레시피예요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/04d81f65c05e404b55adb1e4556a6bb11.jpg',
        recipeId: 355,
    },
    {
        mNum: 2569,
        mContent: '오이와 양파,깻잎을 채썰고 냉장고에 있던 미삼도 넣었어요 미삼은 없으신분들은 패스',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/94eb35f5185268f9e6f931bfec641ccb1.jpg',
        recipeId: 355,
    },
    {
        mNum: 2570,
        mContent:
            '물이 끓기시작하면 소금을 1/3수저(밥수저)를 넣고 국수를 넣은다음 뚜껑을 덮었다가 끓어넘치면 물 한컵을 넣고 다시 끓이다가 넘치면 또 한컵을 넣고 끓이다가 끓어오르면 불을 꺼주세요 다 익은 거예요 삶은 국수를 찬물에 휑궈서 준비해주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/98689c22706584360a9717a5b35ed3861.jpg',
        recipeId: 355,
    },
    {
        mNum: 2571,
        mContent: '골뱅이는 국물을 따로 모아두고 먹기 좋은 크기로 잘라주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f4b03ed1fadea845aacbad2c5faf842b1.jpg',
        recipeId: 355,
    },
    {
        mNum: 2572,
        mContent: '야채와 국수,골뱅이까지 준비끝',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f4fcfcec5090bc2cfc5b06c5feb8230f1.jpg',
        recipeId: 355,
    },
    {
        mNum: 2573,
        mContent:
            '야채에 썰어둔 골뱅이를 넣은다음 고추장과 고춧가루,마늘다진것,간장,식초,골뱅이국물을 넣고 골고루 잘 섞어준다 입맛에 따라 올리고당을 넣으셔도 맛있어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9fd03ba31ac0bdf90c3ab3f0eefc53d31.jpg',
        recipeId: 355,
    },
    {
        mNum: 2574,
        mContent: '야식으로 딱! 시원한 생맥주를 부르는 새콤달콤 골뱅이무침 완료~언제 어디서나 먹어도 맛있는 골뱅이무침이예요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/6a67dad8e0267b7cdd523e06e2f7e9781.jpg',
        recipeId: 355,
    },
    {
        mNum: 2575,
        mContent: '재료를 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/386a89a1a44abfe9e456d570bb58ae0c1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2576,
        mContent: '떡볶이떡은 소시지 길이에 맞춰 썰어 두세요~ 소시지는 끓는 물에 샤워 시킨후 기름기 제거하고 사용하는게 좋아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ba3bb11ab4add96086feb08d27d5373b1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2577,
        mContent: '소시지 그냥 사용해도 되지만 소스가 잘 베일수 있게 사선으로 칼집한번 더 내 주었어요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/da8103241e9ee670227dfa34c56642861.jpg',
        recipeId: 356,
    },
    {
        mNum: 2578,
        mContent: '기름 넉넉히 두른 팬에 떡볶이떡 넣고 튀기듯이 바삭하게 구워 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/e717017f240cad237f2f32fb23b2d5981.jpg',
        recipeId: 356,
    },
    {
        mNum: 2579,
        mContent: '칼집낸 소시지도 노릇하게 구워 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/a9598a4e364765a56bbf5ab14957bbd11.jpg',
        recipeId: 356,
    },
    {
        mNum: 2580,
        mContent:
            '소시지와 떡 꼬치에 꽂아 구우면 간편하지만 떡과 소시지가 익는 속도가 약간 달라 꼬치에 꽂기전에 미리 구웠어요~ 떡은 최대한 바삭하게 구워야 하는데 떡 익는 속도 기다리다 소시지가 타 버릴수 있으니 좀 번거롭더라도 따로 구워 주는게 더 맛있는거 같아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/57505958c29ec3f5265a0404b6a9ca8a1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2581,
        mContent: '꼬치에 소시지-->떡-->소시지-->떡 순으로 번갈아 가며 꽂아 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/42b395caaefc570da5278afaa9deaa3f1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2582,
        mContent: '팬에 적힌 소스 양념을 모두 넣고 바글바글 한번 끓여 바르기 좋은 농도로 조려 양념 소스 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/1a46fc7da05930b53a7ca79df931992a1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2583,
        mContent: '솔이나 숟가락으로 소스를 듬쁙 발라 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f84babf6d02bdbe235d2fd2d51f5482d1.jpg',
        recipeId: 356,
    },
    {
        mNum: 2584,
        mContent: '머스타드소스와 케챂만 뿌려 먹어도 맛있지만 요 만든 양념소스 바른 다음 뿌리는게 더 맛있더라구요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9fe2e8f54a791723db2335ab4c84a5591.jpg',
        recipeId: 356,
    },
    {
        mNum: 2585,
        mContent: '머스타드소스 휘리릭 뿌려 주면 소떡소떡이 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/1ff2bf8d68495100b5696ad8a875d7a51.jpg',
        recipeId: 356,
    },
    {
        mNum: 2586,
        mContent: '재료를 준비해 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ad03daab018d658065a2d20ccc87fd301.jpg',
        recipeId: 357,
    },
    {
        mNum: 2587,
        mContent: '스팸은 끓는 물에 한번 데친 후 물기 제거하고 손가락 굵기로 길게 썰어 주세요~ 햄을 끓는 물에 데치면 염분과 기름을 제거할 수 있어요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/fb4eef35ad287a18afe14467a3e6236f1.jpg',
        recipeId: 357,
    },
    {
        mNum: 2588,
        mContent: '전분옷을 살짝 입혀 주세요~ 전분 대신 밀가루, 부침가루, 튀김가루등 마른가루는 다 좋아요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ded0c498b542e96eca31eee819cff5c11.jpg',
        recipeId: 357,
    },
    {
        mNum: 2589,
        mContent: '잘 풀어둔 계란물에 넣어 계란옷을 입혀 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/967d30e50cb909e003859ac8c459e8561.jpg',
        recipeId: 357,
    },
    {
        mNum: 2590,
        mContent: '꾹 꾹 눌러 가며 빵가루가 떨어지지 않게 빵가루옷을 입혀 주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/6e051c356045689498c737c082e6afa61.jpg',
        recipeId: 357,
    },
    {
        mNum: 2591,
        mContent: '빵가루 없으면 시리얼 사용해도 좋아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/41fcaa8e0f984d525b7950c425f97adb1.jpg',
        recipeId: 357,
    },
    {
        mNum: 2592,
        mContent: '끓는 기름에 넣어 노릇한 색이 나도록 튀겨내면 되요~ 끓는 물에 한번 데친거라 겉면만 익으면 건져 주세요!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3320c8aa0c8e6d9e747f09db84e406711.jpg',
        recipeId: 357,
    },
    {
        mNum: 2593,
        mContent: '키친타올에 올려 기름을 빼 주면 스팸튀김이 완성되요~ 스팸튀김에 꼬치 꽂아주면 스팸튀김 꼬치가 완성되요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/2737be159a41bf6ca0236b894c56344c1.jpg',
        recipeId: 357,
    },
    {
        mNum: 2594,
        mContent: '분량의 버터를 부드럽게 풀어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f5ccacad1ff7d89a1e66532d3af398801.jpg',
        recipeId: 358,
    },
    {
        mNum: 2595,
        mContent: '소금과 설탕을 넣고 살살 젛어주세요. 많이 휘핑할 필요 없이 사각거림이 많이 없어질 때까지 해주시면 되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/889382e9f56539a33dfb4bff4129af2e1.jpg',
        recipeId: 358,
    },
    {
        mNum: 2596,
        mContent: '달걀을 넣고 계속 휘핑 해주세요. (바닐라향 이따 같이 넣어주시면 되요. 저는 바닐라 설탕으로 대체했어요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0da30e2acc776d7d2dd4659a7912196e1.jpg',
        recipeId: 358,
    },
    {
        mNum: 2597,
        mContent: '코코아파우더를 먼저 넣고 조금 휩 해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/b2504d237653a99ebb5c17b6a805de611.jpg',
        recipeId: 358,
    },
    {
        mNum: 2598,
        mContent: '밀가루를 넣고 가볍게 섞어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ce30087f7da1b2babce946c055bfc36c1.jpg',
        recipeId: 358,
    },
    {
        mNum: 2599,
        mContent: '저는 토핑으로 초콜릿(100그람), 쿠키앤크림 과자 (8개)준비했어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/90451367676c134afe1b2e0b702246541.jpg',
        recipeId: 358,
    },
    {
        mNum: 2600,
        mContent: '초콜릿 반은 반죽에, 반은 위에 뿌려줬어요 180도에서 15-20분 구워주세요, 찔렀을 때 반죽이 조금 뭍어나올 때 어내주시면 되요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9b4fb09bcc8230bd255463493913a9f21.jpg',
        recipeId: 358,
    },
    {
        mNum: 2601,
        mContent: '참나물을 깨끗하게 헹궈 준비해요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/a7c49f6773d69db1297289eadf0842e81.jpg',
        recipeId: 359,
    },
    {
        mNum: 2602,
        mContent: '고추가루 1숟가락, 발효액 1숟가락, 집간장 1/2숟가락, 식초 1숟가락, 통깨, 후추, 들기름을 섞어 양념장을 만들어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/4abeaab2c188951c0758d205d33b9c1d1.jpg',
        recipeId: 359,
    },
    {
        mNum: 2603,
        mContent: '참나물과 양념장을 조물조물 무치면 끝이에요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8bbb89279e551adc9d387a873acdd55e1.jpg',
        recipeId: 359,
    },
    {
        mNum: 2604,
        mContent:
            '두부 한 모를 삼각형 모양으로 8등분을 해줍니다. 사각형으로 해볼까 아님 가운데를 파서 넣어볼까 이래저래 생각했는데 삼각형이 만들었을 때 비주얼이 제일 이쁠 듯. 보여주기식으로 요리를 하는 건 아니지만 그래도 모양이 예쁘면 더 맛있을 거 같잖아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/abf574a23dd7c408cf10efcc35ad29d11.jpg',
        recipeId: 360,
    },
    {
        mNum: 2605,
        mContent: '두부 가운데에 칼집을 중간 정도까지 내줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/84be1a531f8ac22f63f58ccaedf8ed7c1.jpg',
        recipeId: 360,
    },
    {
        mNum: 2606,
        mContent: '키친타월로 물기를 제거하고 소금으로 밑간을 해줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c97de54d2d669a0b42516f0f40cab71f1.jpg',
        recipeId: 360,
    },
    {
        mNum: 2607,
        mContent:
            '파프리카(빨강, 노랑), 피망은 채 썰어서 기름을 두룬 팬에 넣어줍니다. 버섯은 표고버섯, 새송이버섯, 팽이버섯 3가지가 있었는데 씹는 식감이 좋은 팽이버섯을 넣었어요. 두부소박이 재료가 소박하죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bae3fa814a4f61cf210d47e91f6103341.jpg',
        recipeId: 360,
    },
    {
        mNum: 2608,
        mContent: '전분가루를 두부에 골고루 묻혀줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c23ceef0bb662cdd4401ba6b77fe4dda1.jpg',
        recipeId: 360,
    },
    {
        mNum: 2609,
        mContent: '기름을 두른 팬에 두부를 부쳐줍니다, 5면이 골고루 부쳐질 수 있게 돌려가면서 노릇하게~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1b25128bdec7e74bd9ab078e555d71cd1.jpg',
        recipeId: 360,
    },
    {
        mNum: 2610,
        mContent: '가운데가 붙었더라고요. 칼로 자르니 뭉그러(?)져서 가위로 컷팅~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ef9afe3ebd6c4206c8f3c9c3eb6261051.jpg',
        recipeId: 360,
    },
    {
        mNum: 2611,
        mContent:
            '가운데에 팽이버섯을 넣고 피망과 파프리카를 넣어줍니다. 미나리가 있어서 묶어줄까? 생각은 했지만 그렇게까지는 ..... ^^;;두부소박이 좀 귀엽죠?',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/81cf8f578e9ac934cbda26b27d734aa01.jpg',
        recipeId: 360,
    },
    {
        mNum: 2612,
        mContent:
            '곁들여 먹을 양념장을 만들었어요. 간장 2, 고춧가루 0.5, 들기름 1, 통깨, 다진 당근, 다진 파를 넣고 걸쭉(?) 하게 했는데 그렇게 한 이유가 찍어 먹는 거보다 양념장을 위에 올려서 먹으려고 이렇게 해봤어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bc7d46551ddc332e63a36de634950fba1.jpg',
        recipeId: 360,
    },
    {
        mNum: 2613,
        mContent: '야채를 손질하고 썰어놓습니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2614,
        mContent: '물을 끓입니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2615,
        mContent: '순서에 따라 재료들을 볶습니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2616,
        mContent: '끓는물에 면을 조금 덜 익게 삶고 체에 받칩니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2617,
        mContent: '계란 반숙후라이를 만듭니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2618,
        mContent: '볶아놓은 재료에 면을 넣고 재빨리 볶아냅니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2619,
        mContent: '그릇에 담고 위에 반숙을 올립니다',
        mPicture: '',
        recipeId: 361,
    },
    {
        mNum: 2620,
        mContent: '감자는 껍질을 제거하고, 깍둑썰기로 잘라주세요. 브로콜리는 4등분으로 자르고, 삶은 달걀은 얇게 썰어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8bea6fd8dfa1a4f02f1ad2232e9e75481.jpg',
        recipeId: 362,
    },
    {
        mNum: 2621,
        mContent:
            '냄비에 우유를 넣고 중불로 끓이다가 끓어오르기 전에 약불로 줄여주세요. 브로콜리는 2분 30초간 익힌 후 건지고, 브로콜리 데치고 남은 우유에 감자를 넣어 15분간 삶은 후 건져내 주세요. 우유에 삶으면 우유의 고소함이 감자와 브로콜리에 배어들어 고소합니다. 브로콜리를 데쳤던 우유를 감자 삶을 때 그대로 사용해도 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/1a360528be27bd36ebac3ac5b79547ec1.jpg',
        recipeId: 362,
    },
    {
        mNum: 2622,
        mContent: '건져 낸 브로콜리는 다지고, 감자는 으깨주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/295cd48d5b9446ae8a6f17fd3273dc5e1.jpg',
        recipeId: 362,
    },
    {
        mNum: 2623,
        mContent: '연두우리콩과 함께 섞어 브로콜리 감자 샐러드를 완성해주세요. 샐러드를 샌드위치 또는 카나페와 함께 곁들여 드시면 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/33d64e6bdd77868979d6563c97b643cd1.jpg',
        recipeId: 362,
    },
    {
        mNum: 2624,
        mContent: '감자는 채썰어서 찬물에 담궈서 전분기를 제거합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b539a54c6f8b670ec4c2259d1cb7a3da1.jpg',
        recipeId: 363,
    },
    {
        mNum: 2625,
        mContent: '감자의 물기를 제거하세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bcb85437d8059597f36efe9653e59f231.jpg',
        recipeId: 363,
    },
    {
        mNum: 2626,
        mContent: '양파와 당근도 채썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/254f82c8dc2c7e064764292816c6baa91.jpg',
        recipeId: 363,
    },
    {
        mNum: 2627,
        mContent: '비트는 껍질을 벗겨서 채를 썰어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/36fc922f5b39db9a2eed9a70956152901.jpg',
        recipeId: 363,
    },
    {
        mNum: 2628,
        mContent: '끓는 물에 카놀라유 반 큰술을 넣고 감자채를 넣고 2분간 데쳐줍니다. 감자채를 건져내고 비트채도 같은 방법으로 데쳐줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/6b045b7c2aa48047579b5232402a33131.jpg',
        recipeId: 363,
    },
    {
        mNum: 2629,
        mContent: '데친 감자채와 비트채를 찬물에 헹궈서 물기를 제거합니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/4589c259ca66e2d1ff4f99b7a883d6981.jpg',
        recipeId: 363,
    },
    {
        mNum: 2630,
        mContent:
            '팬을 달군 다음 카놀라유 1큰술을 먼저 넣고 양파를 볶다가 당근채, 감자채, 비트채 순으로 넣고 볶아줍니다. 중간에 카놀라유 1큰술을 더 보충해가며 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/8bf4ee0df5d66ace57ac57c2c73d39081.jpg',
        recipeId: 363,
    },
    {
        mNum: 2631,
        mContent:
            '미리 데쳤기 때문에 볶는 시간도 단축되고 물에 감자를 헹궈서 전분기가 제거되어서 잘 늘어붙지도 않아요. 그리고 그냥 볶으면 감자가 잘 부숴지는데, 부서지지 않아 좋아요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/14eac690f1425a6e46ec1e7f193b03511.jpg',
        recipeId: 363,
    },
    {
        mNum: 2632,
        mContent: '소금은 위에서 고루 뿌려서 간을 해줍니다. 소금은 두 번에 나눠서 간을 해주면 좋아요. 한번에 다 넣으면 짤 수 있기 때문에...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/284a333dfca205aa664146230101ec2a1.jpg',
        recipeId: 363,
    },
    {
        mNum: 2633,
        mContent: '통깨를 넣어 마무리합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ad2ddc507c154bcc09550e34473734ad1.jpg',
        recipeId: 363,
    },
    {
        mNum: 2634,
        mContent:
            '두릅손질 할게요 끝 부분은 자르고 나뭇가지 같은 부분도 떼 줍니다 가시는 칼로 살살 긁어 줍니다 줄기가 굵은 건 1/2 칼집넣어 줍니다 두릅 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/637825776e4b89d49a3300b96bc0a24a1.jpg',
        recipeId: 364,
    },
    {
        mNum: 2635,
        mContent: '끓는물에 소금넣고 줄기부터 넣고 데쳐 냅니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/2cbf35ab22fe6378c0019e5a96c5c9461.jpg',
        recipeId: 364,
    },
    {
        mNum: 2636,
        mContent: '흐르는 물에 잘 씻어 물기짜고 소금, 참기름, 깨넣고 조물조물 무쳐 놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/d499cb45d0dae16879b78713832dc7e81.jpg',
        recipeId: 364,
    },
    {
        mNum: 2637,
        mContent:
            '채썬 당근은 끓는물에 소금넣고 살짝 데쳐서 물기없도록 기름 두르지 않은팬에 볶아 수분 날려 줍니다, 소금넣고 볶아요 넓게 펴서 식혀 두어요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f83825d0a52eb0f97d48949452d4f0d11.jpg',
        recipeId: 364,
    },
    {
        mNum: 2638,
        mContent: '알끈 제거한 달걀은 얇게 부쳐 한 김 식으면 돌돌말아 채 썰어 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ae043da9f2e54a30dc2201043b4951fe1.jpg',
        recipeId: 364,
    },
    {
        mNum: 2639,
        mContent: '밥은 다시마넣고 고슬고슬하게 지어서 소금, 깨 넣고 잘 섞어 한 김 식혀 둡니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/df5216ef961eaa85bdba4b9dc6141cfb1.jpg',
        recipeId: 364,
    },
    {
        mNum: 2640,
        mContent:
            '김 가장자리를 피해 밥 얇게 펴 놓고 절반으로 썬 김을 올려요 준비된 재료 쪼로록 담고 끝과 끝이 맞 닿도록 서로 붙여 줍니다 밥이 끝나는 부분은 눌러서 서로 붙도록 합니다 먹기좋게 썰어 접시에 담아 줍니다 꽃모양 김밥을 말았는데요, 모양이 살짝 2% 부족하네요 ㅠ ㅎ 그래도 맛은 굿입니다 살짝 쌉싸레한 맛이 전해지는 두릅이 있어서 더 맛있는 김밥이네요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8cbc0c2958162b697001ce86d878f3521.jpg',
        recipeId: 364,
    },
    {
        mNum: 2641,
        mContent: '두부는 칼등으로 으깨어 놓아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/cda5d6ae8d9705ad2b945c01a784c0251.jpg',
        recipeId: 365,
    },
    {
        mNum: 2642,
        mContent: '쑥갓은 뜬잎은 떼 주고 손질 합니다 쑥갓 손질법 레시피',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/c8ed4d60d7090bfb6f31d76703eed6f51.jpg',
        recipeId: 365,
    },
    {
        mNum: 2643,
        mContent: '쑥갓은 줄기부터 끓는물에 넣고 데쳐 줍니다, 소금넣고 데챠요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/78c785c1391fd1f4a19f3112345a1a0c1.jpg',
        recipeId: 365,
    },
    {
        mNum: 2644,
        mContent: '줄기가 살짝 데쳐지면 잎 부분을 넣고 데쳐요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8fbcf9b9d36091e81635133039b796ee1.jpg',
        recipeId: 365,
    },
    {
        mNum: 2645,
        mContent: '흐르는 물로 헹궈 식혀 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/bc643570c6de5455bda96c1a10b9a4941.jpg',
        recipeId: 365,
    },
    {
        mNum: 2646,
        mContent: '데친 쑥갓은 먹기좋게 썰어 볼에 담고 으깬 두부도 담아 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3193c344d1d6633584f982e8e2f70f5a1.jpg',
        recipeId: 365,
    },
    {
        mNum: 2647,
        mContent: '된장, 깨, 참기름넣고 조물조물 무쳐 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0f16e5259856fdeaf7409a803fcb1d111.jpg',
        recipeId: 365,
    },
    {
        mNum: 2648,
        mContent: '만들어 놓은 메추리알 장조림 활용해서 메추리알 주먹밥 만들어요 그냥 메추리알 삶아 하셔도ok',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/aa8dc490e4ad29a26d2e34010637b8ec1.jpg',
        recipeId: 366,
    },
    {
        mNum: 2649,
        mContent: '야채 잘게 다져 팬에 담고 맛간장 티스푼으로1 소금2꼬집 후추톡톡 넣고 카놀라유 적당히 두른 후',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/c57fc635a1ea5f9ca0b637ab9e0f8d981.jpg',
        recipeId: 366,
    },
    {
        mNum: 2650,
        mContent: '슥슥~~ 볶아 줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/03bf10b5d5e23eeaef5c7ba3a126c4dc1.jpg',
        recipeId: 366,
    },
    {
        mNum: 2651,
        mContent: '야채에 숨이 죽으면 밥 1인분량 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/be0472c1b1321b40d6240071c5e862de1.jpg',
        recipeId: 366,
    },
    {
        mNum: 2652,
        mContent: '볶아 주시고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0a34fb51b4f41db2922aa3957c67d9931.jpg',
        recipeId: 366,
    },
    {
        mNum: 2653,
        mContent: '밥이 적당히 식으면 동글 납작하게 비져',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/e111f8b227c1fcf103890eaa135f2f421.jpg',
        recipeId: 366,
    },
    {
        mNum: 2654,
        mContent: '메추리알을 올리고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0d399b2cdcb523b19812d246db25c8f11.jpg',
        recipeId: 366,
    },
    {
        mNum: 2655,
        mContent: '동글 동글 비져 주시면 됩니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/fe6af02db29a2c72b1a808f8b25a71841.jpg',
        recipeId: 366,
    },
    {
        mNum: 2656,
        mContent: '갈릭버터 치즈 병 두껑을 이용해 찍어 주먹밥 위 올려 주고 케찹,마요네즈 찌익~~~ 뿌려주시면 완성입니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/d1b416afb7655cbbc1614016e67dd4ae1.jpg',
        recipeId: 366,
    },
    {
        mNum: 2657,
        mContent: '버터를 부드럽게 풀어 준 뒤 슈가 파우더를 넣고 잘 섞어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b31b8f69826d09ac813dccd57ab7f3781.jpg',
        recipeId: 367,
    },
    {
        mNum: 2658,
        mContent: '계란을 2번 정도 나눠 넣어가며 섞어 주세요 바닐라 오일 5방울 정도 함께 넣어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/cd312d6820841886298e21398ea95b681.jpg',
        recipeId: 367,
    },
    {
        mNum: 2659,
        mContent: '체친 가루류를 넣고 자르듯 섞다가 한덩이가 되도록 만들어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/bdec4d5bb8a44b4359250efdb73e29881.jpg',
        recipeId: 367,
    },
    {
        mNum: 2660,
        mContent:
            '반죽을 비닐 봉지에 넣고 반죽을 4~5mm 두께로 밀어서 냉장고에서 30분~1시간 정도 휴지 시켜주세요 (비닐 봉지에 반죽을 대충 평평하게 누른 뒤 휴지 시킨 다음 덧밀가루를 써가며 밀어서 사용하셔도 돼요~)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/34936120917f7efd452300a8d5806afe1.jpg',
        recipeId: 367,
    },
    {
        mNum: 2661,
        mContent:
            '차가운 반죽 위에 스텐실을 올려서 붓에 가루(코코아 등)를 살짝 묻혀 톡톡톡!!!스텐실을 살짝 떼어내 주세요~크기에 맞는 원하는 틀로 꾹! (진반죽일때는 덧가루를 반죽 위에, 스텐실에도 한번 바른 뒤 만들어 보세요)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/0d5c0de8c5f6fba1779fa2eeae4e35df1.jpg',
        recipeId: 367,
    },
    {
        mNum: 2662,
        mContent: '엠보 쿠키는 반죽 위, 스텐실에 밀가루를 충분히 바른 후 글씨 근처를 꾹꾹 눌러서 반죽이 튀어나오도록 만들어 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/4ade4389d73c61d228e3d328e7d710d61.jpg',
        recipeId: 367,
    },
    {
        mNum: 2663,
        mContent: '팬닝 후 오븐 온도 180도에서 10~12분 정도 구워주세요 *오븐 마다 다릅니다. 노릇 노릇하니 맛있어 보이는 색이 되면 완성! 오븐',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1936825b2e864560025840edecdcda151.jpg',
        recipeId: 367,
    },
    {
        mNum: 2664,
        mContent: '쿠키를 식힘망에서 식혀 주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/2738d336a63a4932b257b4da440c20631.jpg',
        recipeId: 367,
    },
    {
        mNum: 2665,
        mContent: '식용유를 살짝 넣어서 달군 후 삼겹살을 올려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1fa4c8e79b9201b5ed986002fc3b65961.jpg',
        recipeId: 368,
    },
    {
        mNum: 2666,
        mContent: '후추를 적당량 뿌려주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/3b65f446235cca9e4e83bd277f29c34d1.jpg',
        recipeId: 368,
    },
    {
        mNum: 2667,
        mContent: '바삭하게 튀기듯 구워주세요 (저는 다른 향신료도 첨가해서 탄거 처럼 보이네요) 아주 작게 썰어주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/85fb91dfb26cde17578d528ba273c7a11.jpg',
        recipeId: 368,
    },
    {
        mNum: 2668,
        mContent: '고기를 구운 팬에 식용유를 조금 더 넣고, 다진 파와 슬라이스한 마늘을 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/80c50b08307c70c6ecb19f972c542d151.jpg',
        recipeId: 368,
    },
    {
        mNum: 2669,
        mContent: '파향이 솔솔 나면 삼겹살을 넣고 살짝 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b8c67d831d1a8475ab70301e24fb08341.jpg',
        recipeId: 368,
    },
    {
        mNum: 2670,
        mContent: '차게 식혀둔 밥과 쌈장을 넣고 빠르게 볶아주세요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1c4a48da72b0c9b7dde468b65597df711.jpg',
        recipeId: 368,
    },
    {
        mNum: 2671,
        mContent: '불을 끈 팬에 참기름 1/3큰술 정도 넣고 잔열로 섞어주세요(고소한 향을 첨가)',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/ecaec35d1c035c408f86f4986b8044831.jpg',
        recipeId: 368,
    },
    {
        mNum: 2672,
        mContent: '완성♡',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/1c0cba5faccd20ae45a3f9e5c95521f51.jpg',
        recipeId: 368,
    },
    {
        mNum: 2673,
        mContent: '또띠아 위에 피자소스를 발라 주세요~(끝까지 말고 겉면에서 5cm 정도로.) 또띠아, 스파게티 소스(피자소스)',
        mPicture: '',
        recipeId: 369,
    },
    {
        mNum: 2674,
        mContent: '그위에 파프리카랑 햄을 올려주세요~ 파프리카, 햄',
        mPicture: '',
        recipeId: 369,
    },
    {
        mNum: 2675,
        mContent: '그위에 피자치즈 듬뿍! 피자치즈',
        mPicture: '',
        recipeId: 369,
    },
    {
        mNum: 2676,
        mContent: '그위에 베이컨을 올린다. 베이컨',
        mPicture: '',
        recipeId: 369,
    },
    {
        mNum: 2677,
        mContent: '후라이팬에 12분동안 구워준다. 후라이팬 약불 두번째부터는 10분만!!!!',
        mPicture: '',
        recipeId: 369,
    },
    {
        mNum: 2678,
        mContent:
            '가래떡은 먹기좋은 크기로 자르고 끓는 물에 식용유 1 큰 술 넣고 말랑말랑하게 데치고, 소시지도 끓는물에 데칩니다 소시지에 칼집 넣어도 좋아요 데치기전에 칼집 넣어요~^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/4d8374bc19e198c4c57219c8854b97e01.jpg',
        recipeId: 370,
    },
    {
        mNum: 2679,
        mContent: '데친 떡에 참기름 1 큰 술 넣고 버무려요 데친 떡에 기름약간 넣어 버무리면 달라 붙는것을 방지해주지요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/a3ee4b45486dbcf0305ad21ee06f57f71.jpg',
        recipeId: 370,
    },
    {
        mNum: 2680,
        mContent: '양파,피망,파프리카는 썰어준비하고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/6a4a47a61a92be2132f996506652b3eb1.jpg',
        recipeId: 370,
    },
    {
        mNum: 2681,
        mContent: '팬에 양념 재료 모두 넣고 끓이고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/c76a54f1aff069b72a2d00258c7149991.jpg',
        recipeId: 370,
    },
    {
        mNum: 2682,
        mContent: '끓어 오르면 데친 떡과 양파 넣고 끓이다가',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/412470aeb2ffb762974e38d151744f5a1.jpg',
        recipeId: 370,
    },
    {
        mNum: 2683,
        mContent: '떡의 양념이 배면 데친 소시지와 파프리카 피망 넣고 볶아요',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0ef15b94e950e0285eadbd306f87f3461.jpg',
        recipeId: 370,
    },
    {
        mNum: 2684,
        mContent:
            '자박자박하게 볶아 국물이 1큰 술 정도 남도록 볶았어요 내열 그릇에 볶은 재료 담아 취향껏 치즈 뿌리고 전자레인지에 치즈가 녹을 정도만 돌려줍니다 마지막에 파슬리가루 뿌리고 완성~ 전자레인지',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/6e24d7ecd454ff3b7713ad143a3570231.jpg',
        recipeId: 370,
    },
    {
        mNum: 2685,
        mContent:
            '분량의 재료를 준비해주세요. 참치는 기름기 빼서 준비하고 양파는 2/3은 채 썰고 나머지는 잘게 다져주세요. 참치 작은거 1/2캔, 달걀 2알, 양파 작은거 1/2개 1인분이라고 적었지만 넉넉한 1인분이라 1.5인분으로 보셔도 좋을 것 같아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3193442f16df261851d60f48755e349a1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2686,
        mContent: '달걀은 소금 한꼬집 넣어 잘 풀어주세요. 달걀 2알, 소금 한꼬집',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/74f089ce31532e7c9cc8ca57c007f2ad1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2687,
        mContent: '팬에 기름 살짝 두르고 달걀물을 넣어 약불에서 스크럼블 에그를 만들어주세요. 기름 살짝, 달걀물 약불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/1560fcb016a803206e95f639a2d42dd91.jpg',
        recipeId: 371,
    },
    {
        mNum: 2688,
        mContent: '만든 스크럼블 에그는 접시에 덜어놓아주세요. 저는 살짝 덜 익혔어요. 잔열에 나머지가 익더라구요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3df053188382fb4fb27cdc8666fbbc2b1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2689,
        mContent: '팬에 기름 1T 두르고 채 썬 양파를 넣어 약 30초간 볶아주세요. 채 썬 양파, 기름 1T 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0b565388ca1343f5883a4746ba2af87a1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2690,
        mContent: '그 다음 물 1T 물 1T 센불',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8f1857f135f693c5b1e273b9121623b51.jpg',
        recipeId: 371,
    },
    {
        mNum: 2691,
        mContent: '간장 1T를 넣어 약 1분간 볶아주세요. 간장 1T 센불 양파 익힘 정도는 취향껏 조절해주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/75a784e0fb2475ae049055a400c844231.jpg',
        recipeId: 371,
    },
    {
        mNum: 2692,
        mContent:
            '그리고 기름 뺀 참치에 아까 다져놓은 양파와 마요네즈 0.5T, 후추 톡톡해서 잘 버무려주세요. 참치 1/2캔, 마요네즈 0.5T, 다진 양파, 후추',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3e83ea03fab060f5c20bab53c17aa51f1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2693,
        mContent: '전 와사비도 조금 추가했어요. 이건 기호에 따라 넣어주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/de5fd58a183d709c4b7f8c69042d1a101.jpg',
        recipeId: 371,
    },
    {
        mNum: 2694,
        mContent: '접시 가운데 밥 올리고 가장자리에 스크럼블 에그를 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/e945af4a118ff6de19747156d500c6ab1.jpg',
        recipeId: 371,
    },
    {
        mNum: 2695,
        mContent: '밥 위에 간장에 볶은 양파를 올리고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/11a36abf0ce01a427f1b72fd278e4fa51.jpg',
        recipeId: 371,
    },
    {
        mNum: 2696,
        mContent: '마요네즈에 버무린 참치를 올려주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/15afb2d77f55b54285707c97fcfe9ee11.jpg',
        recipeId: 371,
    },
    {
        mNum: 2697,
        mContent: '그리고 돈까스 소스와 마요네즈를 그 위에 뿌리면 완성입니다:) 전 부추가 있어서 부추를 다져서 위에 뿌려주었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/b5a1471ecfb48e510224e0a5de7de3311.jpg',
        recipeId: 371,
    },
    {
        mNum: 2698,
        mContent: '먼저 감자는 껍질을 벗겨 먹기좋게 썰어주고 전분기를 없애기 위해 찬물에 잠시 담궈줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/c55979a79a368f6ea5cd98e1497fde251.jpg',
        recipeId: 372,
    },
    {
        mNum: 2699,
        mContent: '양파와 청양고추도 먹기좋게 썰어 준비해주세요. 매운거 못드시거나 아이들이 먹을거라면 청양고추는 생략해도 좋아요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/66e016cb9e4c1a01d508307e7b8506f91.jpg',
        recipeId: 372,
    },
    {
        mNum: 2700,
        mContent: '그리고 분량의 양념장 제조!! 진간장 5스푼 / 설탕 2스푼다진마늘 1스푼 / 참기름 반스푼다진파 / 깨소금 / 후추',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/b77a26bdea98356b2a7365515220ad241.jpg',
        recipeId: 372,
    },
    {
        mNum: 2701,
        mContent: '냄비에 식용유를 살짝 두르고 감자를 넣어 감자의 겉면이 살짝 투명해질때까지충분히 볶아줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/d80b18d514c8028d3ad200f045dd5ce01.jpg',
        recipeId: 372,
    },
    {
        mNum: 2702,
        mContent: '감자의 겉면이 어느정도 투명해지면물 1컵과 만들어둔 양념장을 넣어감자가 익을때까지 뚜껑을 닫고 끓여 익혀줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/7fabd19637fb3997c671b57c44ffca481.jpg',
        recipeId: 372,
    },
    {
        mNum: 2703,
        mContent:
            '감자는 젓가락으로 찔렀을때 푹- 들어가면 익은거에요~감자가 익으면 썰어둔 양파를 넣어주고 조려주다가 청양고추 넣어 좀더 조려줍니다. 양념이 잘 베일수 있도록 중간중간 양념장을 끼얹어주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/09/998e7df86e7cd9d1e2849c2600e21eac1.jpg',
        recipeId: 372,
    },
    {
        mNum: 2704,
        mContent: '먼저, 통깨를 제외한~ 분량의 양념을 넣어~ 양념장을 만들어줍니다',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/72b40683550616024c028c4b0f032c051.jpg',
        recipeId: 373,
    },
    {
        mNum: 2705,
        mContent: '쉐킷쉐킷! 양념장을 잘 저어주세용~ 요건 냉장고에 넣어 숙성시켜두셨다가 만들어줘도 좋고~ 뭐, 바로 만들어도 상관은 없어요 !!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/553f99315955f3b2d2e82f1ef56833501.jpg',
        recipeId: 373,
    },
    {
        mNum: 2706,
        mContent: '그리고 계란지단만들기 !! 팬을달궈~ 식용유를 부어준뒤, 키친타올로 살짝 닦아 소량의 기름으로 지단을 부쳐주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/e899fee07d3a93c42b4413ae674fb6781.jpg',
        recipeId: 373,
    },
    {
        mNum: 2707,
        mContent: '만든 지단은~ 한김 식혀준뒤, 돌돌말아 채썰어 준비 해 줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/7ee46c37a938dab04ba8d047a2d4a93e1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2708,
        mContent:
            '고명으로 얹어줄 삶은계란도 준비 해줬어요~ 비빔국수에 요 삶은계란 안 얹어주면 서운하니께 ㅎㅎ 생각보다 덜익어서 모양이 별로라 아쉽네요..엉엉',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/81c045c25ca9bedb853a2ce3aac909e51.jpg',
        recipeId: 373,
    },
    {
        mNum: 2709,
        mContent: '다음은, 비빔면에 넣어줄 야채!! 상추나 치커리나~ 깻잎, 양파 등 집에 있는 야채를 채썰어 넣어주면 되용~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/a257641b01ca6358d701d42c1ced5a511.jpg',
        recipeId: 373,
    },
    {
        mNum: 2710,
        mContent:
            '이제 면을 삶아 줄 차례 !! 물을 넉넉히 넣고~ 물이 팔팔 끓으면 칼국수면을 넣어 줍니다. 밀가루가 묻어있는 면은 찬물로 한번 헹궈준뒤 넣어주세요~!! 끓어오를때 찬물 한컵 넣어주고~면이 익을때 동안 삶아주세요. 얼음물에 박박 씻어낼꺼라~ 너무 꼬들거리게 익히지말아야한다는거 !',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/44bc95b7c81be1a7ea15f10fa5b0b79c1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2711,
        mContent:
            '면이 익을때 동안 고명으로 얹어줄 삼겹살도 잽싸게 준비 해 줍니다. 삼겹살과 비빔칼국수의 만남이 궁금해져서 도전 해 봤어요~ ㅋㅋㅋㅋㅋ 삼겹살은 대패삼겹살로 준비 했는데~ 일반대패보다는 좀 두툼한 대패삼겹살이에요^^ 삼겹살은 팬을 달궈 구워주다가, 삼겹살기름에 다진마늘을 넣어주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/288045691fbac02dd53240afe65efab91.jpg',
        recipeId: 373,
    },
    {
        mNum: 2712,
        mContent: '소금 조금 넣고~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/5655f2bc8b634e1c7c7a8ff36f0f043d1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2713,
        mContent: '후추 톡톡!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/016308252bce62e23bd9fbfc4f8c649e1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2714,
        mContent:
            '노릇하게~ 맛있게 구워주시면 되요. 요거 소금후추뿌리고 구워서 그냥 먹어도 완전 맛있는데잉.. ㅋㅋㅋ 맛있는 비빔칼국수와 함께 해줄터이니~ 조금만 참기 ! ㅋㅋ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/48fcad57003c866178c5f6ab980c3c761.jpg',
        recipeId: 373,
    },
    {
        mNum: 2715,
        mContent: '그 사이 잘익은 면 !! 재빨리 찬물에 헹궈준뒤,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/afab9adae31325ada1b298baf9f0181d1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2716,
        mContent: '얼음물에 담가 박박 비벼주며 여러번 헹궈냅니다. 뽀~얀 물이 많이 헹구다보면 맑아져요 !!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/7719c49992738afecbf5e175e7b7efa01.jpg',
        recipeId: 373,
    },
    {
        mNum: 2717,
        mContent: '그리고 물기를 꼭 짜낸 뒤, 체에 담아 마져 물기를 제거 해 주지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/2774b0c266befecdddb0bd871e804bf41.jpg',
        recipeId: 373,
    },
    {
        mNum: 2718,
        mContent: '이제 면을 양념장에 비벼 줄 차례 !! 칼국수면에 양념장을 넣고,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3fbc0c762b1cbeeb64183407343a99da1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2719,
        mContent: '골고루 잘 비벼주세요~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f444ec72a205234561011586fb5b60591.jpg',
        recipeId: 373,
    },
    {
        mNum: 2720,
        mContent: '야채까지 팍팍! 때려넣은 뒤,',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/5cb919baa6f98d2423975f6e13be092b1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2721,
        mContent: '요로코롬 재료가 어우러지게 한번 더 비벼주면 완성 !!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/1b4585173bacfc184a69aead3be9da8a1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2722,
        mContent: '잘 비벼진 면을 그릇에 담아주고~',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/109cceb7962fa67f049e1572906bd3011.jpg',
        recipeId: 373,
    },
    {
        mNum: 2723,
        mContent: '면 위에, 야채올리고~ 계란지단 올리고 ! 구운 삼겹살 올려주고 !!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/428a4e06a20f13dc15c44ac0d93e3dcf1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2724,
        mContent: '마지막으로 삶은계란까지 올려주면 !!!!!!!!!!!!!!!!!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/15fcb5997974f02d64e21aea723a1bcb1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2725,
        mContent: '짜잔 !! 푸짐~하고 맛깔스러운 비주얼의, 칼비빔면 완성 ♡',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0c95c6080e661aff611f3713975396d31.jpg',
        recipeId: 373,
    },
    {
        mNum: 2726,
        mContent: '물론, 모든 면은 사랑입니다만, 소면과는 다르게~ 더욱 쫄깃하고 식감이 좋은 칼국수비빔면이랍니다.^^',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/6ade1e66c8bc57ad611cb38b5f9461bf1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2727,
        mContent: '요렇게 해놓으니 비주얼도~ 파는 비빔칼국수 부럽지 않죠? ㅎㅎㅎ',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/baa51162d3d38033070e97796e77efcd1.jpg',
        recipeId: 373,
    },
    {
        mNum: 2728,
        mContent:
            '이 비빔칼국수의 포인트는, 삼겹살 구이 !!!! 요고요고 대 to the 박 ! 이랍니다 ㅎㅎ 매콤~하니 맛있는 양념으로 비빈, 칼국수를 삼겹살에 싸먹으면... 크으~~~! 완전 존맛탱...',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0b7a0a12e99de814af59aca443e3ab311.jpg',
        recipeId: 373,
    },
    {
        mNum: 2729,
        mContent:
            '먹으면서 양이 줄어가는게 아까울지경의 맛이랄까? ㅎㅎㅎ 진짜 맛있답니다 ㅎㅎㅎㅎ 비빔칼국수에 삼겹살 ! 그냥 넣어봤는데~ 大 성 공 !!!!!!!!!!! 하아~ 이렇게 한번 해 봤는데 맛있으면 엄청 뿌듯하다는 ㅋㅋㅋㅋㅋㅋㅋㅋ앞으로도 자주 만들어 먹어야겠더라구요~ 이웃님들 ! 오늘하루도 즐거운하루 보내시구요~ 오늘도 식사 든든~하게 챙겨드세요 그럼 이만 마이쏭은 물러갑니다용~♥',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/30647b815b75dbd4be6b5775a1471fd31.jpg',
        recipeId: 373,
    },
    {
        mNum: 2730,
        mContent:
            '마이쏭은 장떡에 가죽나물과 매콤하게 청양고추만 넣고 가죽장떡을 만들었는데, 가죽나물이 아니어도 양파, 깻잎, 청양고추 등 집에있는 갖은 야채를 넣어 만들어도 되요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/f76f408513782e65d2f1f0472b2349ef1.jpg',
        recipeId: 374,
    },
    {
        mNum: 2731,
        mContent:
            '반죽은 밀가루와 부침가루를 섞어서 만드셔도 좋고,찰밀가루를 사용하셔도 좋고~ 다 없으시면 그냥 밀가루를 사용하셔도 됩니다. 물을 넣고 풀어준 뒤, 고추장과 된장을 넣고 잘 섞어줍니다. 고추장과 된장의 비율은 2 : 1이에요 !',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/4bedd334139ad95dba332308dc329de61.jpg',
        recipeId: 374,
    },
    {
        mNum: 2732,
        mContent: '반죽한데다가 가죽을 듬뿍~ 넣고 저어줍니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/97efc122fd46d732a54110ec537cc3de1.jpg',
        recipeId: 374,
    },
    {
        mNum: 2733,
        mContent: '오랜만에 가죽부침개를 해 먹으니, 부치기전부터 설렘설렘. ♡',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/fb346369fdf2912746b22fa8cfe1dbac1.jpg',
        recipeId: 374,
    },
    {
        mNum: 2734,
        mContent: '후라이팬을 달궈주고 기름을 넉넉히 두른 뒤, 얇고 동그랗게~ 반죽을 잘 깔아줍니다.납작하게 꾹~ 눌러 노릇노릇하게 부쳐주지요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/eca4b578591c52700aa060c9b2ba99b41.jpg',
        recipeId: 374,
    },
    {
        mNum: 2735,
        mContent:
            '혼자먹을게 아니라서 넉넉하게 부쳤어요. 여기저기 나눠주고 나니, 금새 동나고 말았답니다 ㅋㅋ 장떡은 식으면, 일반 부침개보다 쫀득~쫀득해서 너무 맛있더라구요. 고추장과 된장이 들어가, 짭쪼롬한 맛에 밥반찬으로도 좋고, 개인적으로는 뻑뻑주가 생각나지만. 대체 나이가 몇살이냐고 물어보실까봐, 동동주로 정정합니다. 아니 막걸리로? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        mPicture: '',
        recipeId: 374,
    },
    {
        mNum: 2736,
        mContent: '재료준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/07010ad6c391845fc6191778275d6da91.jpg',
        recipeId: 375,
    },
    {
        mNum: 2737,
        mContent:
            '- 표고버섯 밑둥 가위로 잘라내기 - 갓은 굵직하게 채썰기 Tip. 밑둥은 냉동 보관해뒀다가 육수 낼 때 사용해보세요. - 파는 송송 썰어서 준비',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/90b546d767f373b63c71751f0b919faa1.jpg',
        recipeId: 375,
    },
    {
        mNum: 2738,
        mContent:
            '육수 만들어 놓은 게 없어 만들었는데 이때 밑둥 2개만 넣어줬어요. 물 1리터에 디포리 2마리, 무 3cm 두께 한 조각, 나중에 다시마 2조각만 넣어 만들었어요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9c7275566f58a92b8ca8fdba511409911.jpg',
        recipeId: 375,
    },
    {
        mNum: 2739,
        mContent: '만약 고명으로 준비할 경우 얇게 채 썰어 채에 바쳐 끓는 육수에 데쳐준 후 소금만 조금 넣어 무쳐서 준비해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/52e89ca59cbfc4d30b3efc65cff6e5501.jpg',
        recipeId: 375,
    },
    {
        mNum: 2740,
        mContent: '- 육수 끓이기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/d8db6f3f824e5fbcc4bcb7f9d9a7f6861.jpg',
        recipeId: 375,
    },
    {
        mNum: 2741,
        mContent: '- 육수가 끓으면 썰어 놓은 표고버섯 넣어 끓이기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ae4f7a70ee2fa00d34f4b84ea6e02cfd1.jpg',
        recipeId: 375,
    },
    {
        mNum: 2742,
        mContent: '- 숨이 죽으면 들깨가루와 다진마늘 넣어 끓이기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/00ad88a9acd48cfd98480eb2f1bbbce91.jpg',
        recipeId: 375,
    },
    {
        mNum: 2743,
        mContent: '- 죽보다 조금 묽은 농도가 되면 다진 파',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/0a593b22d1eaaf7480d00860d895d8571.jpg',
        recipeId: 375,
    },
    {
        mNum: 2744,
        mContent: '조선간장을 넣고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/ca866395e45c526040d2c0d33de20bd01.jpg',
        recipeId: 375,
    },
    {
        mNum: 2745,
        mContent: '부족한 간은 소금으로 하기',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/127b527de7454b188c2c765bf5df7f1e1.jpg',
        recipeId: 375,
    },
    {
        mNum: 2746,
        mContent: '그럼 버섯들깨탕 완성~!',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/359cf2797388405725b6fc342cf0ae601.jpg',
        recipeId: 375,
    },
    {
        mNum: 2747,
        mContent:
            '브로콜리는 송이 송이 나눠 살짝 데쳐 준비해 줍니다. 전 찜기를 이용했어요. 물에 데칠 경우 물에 굵은소금 0.3 정도 넣고 물이 끓기 시작하면 브로콜리 넣어 30초 정도 데친 후 찬물에 헹궈 준비하심 됩니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/4b9961c5a975b32cbb0b4b2162022fef1.jpg',
        recipeId: 376,
    },
    {
        mNum: 2748,
        mContent: '양파는 잘게 다지고, 데친 브로콜리도 다져서 준비합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/3508255fa0a406640755380f1336aba51.jpg',
        recipeId: 376,
    },
    {
        mNum: 2749,
        mContent: '그릇에 부침가루 1/2컵과 찬물 1/2컵을 붓고 고루 섞어 반죽을 만들어 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/9d887be507b5b043dfce460b6e21b1b01.jpg',
        recipeId: 376,
    },
    {
        mNum: 2750,
        mContent: '준비해둔 옥수수, 브로콜리, 양파, 체더치즈를 넣어 주고',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/169c2e7feb65dc0d8c501388008a46fd1.jpg',
        recipeId: 376,
    },
    {
        mNum: 2751,
        mContent: '반죽을 고루 섞어 주세요. * 체더치즈를 적당한 크기로 잘라 넣어주거나 생략 가능합니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/8f6d7be15b1865fd0122243d1ab1d9351.jpg',
        recipeId: 376,
    },
    {
        mNum: 2752,
        mContent: '팬에 기름을 두르고 숟가락을 이용해 반죽을 적당하게 올려 둥글넙적하게 펴 주고 앞, 뒤로 노릇하게 부쳐주 마무리해주세요.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/db77114a220f0aed247ace8fbceb0e3d1.jpg',
        recipeId: 376,
    },
    {
        mNum: 2753,
        mContent: '브로콜리 옥수수 부침개 완성 평소 브로콜리를 잘 먹는다면 모양을 살려 넣어도 좋답니다.',
        mPicture: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/05/07/7c413494b09294c0e45eafc5a492531f1.jpg',
        recipeId: 376,
    },
];

export { recipeManuals };
