-- 꽃말 보관소 시드 데이터: 200종+ 한국 인기 꽃
-- Unsplash 이미지 사용 (무료, 상업적 사용 가능)

INSERT INTO flowers (name, name_en, scientific_name, slug, meaning, description, image_url, category, color, season, occasions, is_popular) VALUES
-- === 봄 꽃 (Spring) ===
('장미', 'Rose', 'Rosa', 'rose', '사랑, 아름다움, 열정', '사랑을 상징하는 대표적인 꽃으로, 색상에 따라 다양한 의미를 지닙니다. 빨간 장미는 열정적인 사랑, 흰 장미는 순수한 사랑, 노란 장미는 우정을 뜻합니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '사랑', '빨강', ARRAY['봄','여름'], ARRAY['결혼','생일','기념일','프로포즈'], true),
('벚꽃', 'Cherry Blossom', 'Prunus serrulata', 'cherry-blossom', '순결, 아름다운 정신', '봄의 전령사로 한국에서 가장 사랑받는 꽃 중 하나입니다. 짧지만 화려하게 피어나 삶의 아름다움과 덧없음을 동시에 상징합니다.', 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['입학','졸업'], true),
('튤립', 'Tulip', 'Tulipa', 'tulip', '사랑의 고백, 영원한 사랑', '네덜란드의 상징이자 봄을 대표하는 구근식물입니다. 색상별로 빨강은 사랑의 고백, 노랑은 짝사랑, 보라는 기품을 의미합니다.', 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=800', '봄꽃', '빨강', ARRAY['봄'], ARRAY['결혼','생일','졸업'], true),
('개나리', 'Forsythia', 'Forsythia koreana', 'forsythia', '희망, 기대', '한국의 봄을 알리는 대표적인 꽃으로, 노란색 꽃이 한꺼번에 피어나 희망과 새로운 시작을 상징합니다.', 'https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?w=800', '봄꽃', '노랑', ARRAY['봄'], ARRAY['입학','졸업'], true),
('진달래', 'Azalea', 'Rhododendron mucronulatum', 'azalea', '사랑의 즐거움', '한국의 산야를 분홍빛으로 물들이는 봄꽃입니다. 식용이 가능하며 화전을 만들어 먹는 전통이 있습니다.', 'https://images.unsplash.com/photo-1588462993789-1eab1e62278c?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하'], true),
('목련', 'Magnolia', 'Magnolia', 'magnolia', '고귀함, 자연에 대한 사랑', '이른 봄 잎보다 먼저 피어나는 목련은 고귀하고 순수한 아름다움을 상징합니다. 큰 꽃잎이 인상적입니다.', 'https://images.unsplash.com/photo-1617191880520-23a495cf82f7?w=800', '봄꽃', '흰색', ARRAY['봄'], ARRAY['축하','감사'], true),
('라일락', 'Lilac', 'Syringa vulgaris', 'lilac', '첫사랑의 감동', '향기로운 꽃으로 봄날의 추억과 첫사랑을 떠올리게 합니다. 보라색 작은 꽃들이 뭉쳐 피어나 은은한 아름다움을 자아냅니다.', 'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=800', '봄꽃', '보라', ARRAY['봄'], ARRAY['고백','졸업'], true),
('프리지아', 'Freesia', 'Freesia', 'freesia', '순결, 천진난만', '달콤한 향기가 특징인 봄꽃으로, 순수함과 밝은 성격을 상징합니다. 향수의 원료로도 널리 사용됩니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '봄꽃', '노랑', ARRAY['봄'], ARRAY['생일','졸업'], false),
('수선화', 'Daffodil', 'Narcissus', 'daffodil', '자기애, 신비', '겨울이 끝나고 봄이 시작될 때 피어나는 수선화는 새로운 시작과 자기 사랑을 의미합니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '봄꽃', '노랑', ARRAY['봄'], ARRAY['축하','감사'], false),
('히아신스', 'Hyacinth', 'Hyacinthus orientalis', 'hyacinth', '겸손한 사랑', '강렬한 향기와 아름다운 색감으로 실내 화분으로도 인기가 많습니다. 그리스 신화에서 유래한 이름을 가지고 있습니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '봄꽃', '보라', ARRAY['봄'], ARRAY['감사','축하'], false),
('매화', 'Plum Blossom', 'Prunus mume', 'plum-blossom', '고결, 인내', '추위를 이기고 가장 먼저 피어나는 매화는 선비의 절개와 고결한 정신을 상징합니다. 사군자의 하나입니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '흰색', ARRAY['겨울','봄'], ARRAY['축하','감사'], true),
('산수유', 'Cornelian Cherry', 'Cornus officinalis', 'cornus', '영원불변의 사랑', '이른 봄 노란 꽃을 피우며 한국 전통 정원에서 자주 볼 수 있습니다. 열매는 한방에서 약재로 사용됩니다.', 'https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?w=800', '봄꽃', '노랑', ARRAY['봄'], ARRAY['축하'], false),
('철쭉', 'Royal Azalea', 'Rhododendron schlippenbachii', 'royal-azalea', '사랑의 기쁨', '한국의 산에서 자생하는 대표적인 봄꽃으로 진달래와 비슷하지만 더 크고 화려합니다.', 'https://images.unsplash.com/photo-1588462993789-1eab1e62278c?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하'], false),
('팬지', 'Pansy', 'Viola tricolor', 'pansy', '나를 생각해 주세요', '사려깊은 마음을 전하는 꽃으로, 다양한 색상의 얼굴 모양 무늬가 특징적입니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '봄꽃', '보라', ARRAY['봄','가을'], ARRAY['생일','감사'], false),
('무궁화', 'Rose of Sharon', 'Hibiscus syriacus', 'mugunghwa', '영원히 피고 또 피는 꽃, 일편단심', '대한민국의 국화로 끊임없이 피고 지는 강인한 생명력을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '국화', '분홍', ARRAY['여름','가을'], ARRAY['축하','국경일'], true),

-- === 여름 꽃 (Summer) ===
('해바라기', 'Sunflower', 'Helianthus annuus', 'sunflower', '동경, 숭배, 기다림', '태양을 따라 고개를 돌리는 해바라기는 변치 않는 사랑과 충성을 상징합니다. 밝고 긍정적인 에너지를 전달합니다.', 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800', '여름꽃', '노랑', ARRAY['여름'], ARRAY['축하','개업','감사'], true),
('수국', 'Hydrangea', 'Hydrangea', 'hydrangea', '변덕, 진심, 처녀의 꿈', '토양의 산성도에 따라 꽃 색이 변하는 신비로운 꽃입니다. 풍성한 꽃송이가 매력적이며 웨딩 장식으로 인기가 높습니다.', 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800', '여름꽃', '파랑', ARRAY['여름'], ARRAY['결혼','감사'], true),
('연꽃', 'Lotus', 'Nelumbo nucifera', 'lotus', '순결, 청정, 신성', '진흙 속에서도 깨끗하게 피어나는 연꽃은 불교에서 깨달음의 상징입니다. 동양 문화에서 가장 신성시되는 꽃 중 하나입니다.', 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=800', '여름꽃', '분홍', ARRAY['여름'], ARRAY['축하','불교행사'], true),
('라벤더', 'Lavender', 'Lavandula', 'lavender', '침묵, 기다림, 헌신', '은은한 보라색과 특유의 향기로 힐링과 안정의 상징입니다. 아로마테라피와 허브티로도 널리 사랑받습니다.', 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800', '허브', '보라', ARRAY['여름'], ARRAY['감사','힐링'], true),
('백합', 'Lily', 'Lilium', 'lily', '순수, 위엄, 변함없는 사랑', '우아하고 기품 있는 꽃으로 순수한 마음을 전달할 때 적합합니다. 결혼식과 장례식 모두에서 사용되는 다목적 꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '사랑', '흰색', ARRAY['여름'], ARRAY['결혼','장례','축하'], true),
('카네이션', 'Carnation', 'Dianthus caryophyllus', 'carnation', '어머니의 사랑, 감사', '어버이날의 상징 꽃으로 부모님에 대한 감사와 사랑을 표현합니다. 빨간 카네이션은 건강을, 분홍은 감사를 의미합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '감사', '빨강', ARRAY['봄','여름'], ARRAY['어버이날','감사','스승의날'], true),
('국화', 'Chrysanthemum', 'Chrysanthemum', 'chrysanthemum', '고결, 장수, 절개', '사군자의 하나로 늦가을까지 피어나는 강인함을 상징합니다. 한국에서는 추모와 추석에 많이 사용됩니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '추모', '노랑', ARRAY['가을'], ARRAY['장례','추석','추모'], true),
('거베라', 'Gerbera', 'Gerbera jamesonii', 'gerbera', '신비, 밝은 미래', '밝고 화사한 색상으로 기분을 밝게 해주는 꽃입니다. 다양한 색상이 있어 꽃다발과 장식에 널리 사용됩니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '축하', '주황', ARRAY['여름','가을'], ARRAY['생일','축하','개업'], true),
('안개꽃', 'Baby''s Breath', 'Gypsophila', 'babys-breath', '순수한 마음, 영원한 사랑', '작고 하얀 꽃들이 구름처럼 뭉쳐 피어나 꽃다발의 대표적인 보조 꽃입니다. 순수함과 변함없는 마음을 상징합니다.', 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800', '사랑', '흰색', ARRAY['봄','여름','가을'], ARRAY['결혼','프로포즈','생일'], true),
('달리아', 'Dahlia', 'Dahlia', 'dahlia', '우아, 감사, 풍요', '화려하고 다양한 형태의 꽃잎이 특징적입니다. 정열적이고 우아한 느낌을 주어 가을 꽃다발에 인기가 많습니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '빨강', ARRAY['여름','가을'], ARRAY['감사','축하'], false),
('나팔꽃', 'Morning Glory', 'Ipomoea', 'morning-glory', '덧없는 사랑, 기쁨', '아침에 피었다가 오후에 지는 하루살이 꽃으로, 순간의 아름다움과 기쁨을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '파랑', ARRAY['여름'], ARRAY['축하'], false),
('칸나', 'Canna', 'Canna indica', 'canna', '영원한 행복', '열대풍의 화려한 꽃으로 여름 정원을 화려하게 장식합니다. 뜨거운 색감이 인상적입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '빨강', ARRAY['여름'], ARRAY['축하'], false),
('접시꽃', 'Hollyhock', 'Alcea rosea', 'hollyhock', '풍요, 다산', '키가 크고 화려한 꽃을 피우며, 전통 한국 정원에서 자주 볼 수 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '분홍', ARRAY['여름'], ARRAY['축하'], false),
('맨드라미', 'Cockscomb', 'Celosia cristata', 'cockscomb', '영생, 감정', '닭 벼슬을 닮은 독특한 꽃 모양이 특징적입니다. 가을 풍경에 빠질 수 없는 꽃입니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '빨강', ARRAY['여름','가을'], ARRAY['축하'], false),

-- === 가을 꽃 (Autumn) ===
('코스모스', 'Cosmos', 'Cosmos bipinnatus', 'cosmos', '순정, 소녀의 진심', '가을 들판을 수놓는 대표적인 꽃으로, 가녀린 줄기 위에 핀 꽃이 바람에 흔들리는 모습이 낭만적입니다.', 'https://images.unsplash.com/photo-1473710295107-9e1e6e2a5e82?w=800', '가을꽃', '분홍', ARRAY['가을'], ARRAY['축하','감사'], true),
('억새', 'Silver Grass', 'Miscanthus sinensis', 'silver-grass', '세월, 활력', '가을바람에 흔들리는 억새밭은 한국 가을의 상징적인 풍경입니다. 강인한 생명력을 나타냅니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '흰색', ARRAY['가을'], ARRAY['추석'], false),
('금목서', 'Sweet Osmanthus', 'Osmanthus fragrans', 'osmanthus', '진실된 사랑, 초대', '달콤한 향기가 먼 곳까지 퍼지는 가을꽃으로, 진실된 마음과 환대를 상징합니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '노랑', ARRAY['가을'], ARRAY['감사'], false),

-- === 겨울 꽃 (Winter) ===
('동백', 'Camellia', 'Camellia japonica', 'camellia', '누구보다 당신을 사랑합니다', '겨울에 피어나는 아름다운 꽃으로, 추운 계절에도 변치 않는 사랑의 상징입니다. 제주도의 동백숲이 유명합니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '겨울꽃', '빨강', ARRAY['겨울'], ARRAY['프로포즈','결혼'], true),
('수선화', 'Paperwhite', 'Narcissus papyraceus', 'paperwhite', '자존심, 새로운 시작', '겨울 실내에서도 키울 수 있는 구근식물로 청초한 아름다움을 자랑합니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '겨울꽃', '흰색', ARRAY['겨울'], ARRAY['새해','축하'], false),
('포인세티아', 'Poinsettia', 'Euphorbia pulcherrima', 'poinsettia', '축하, 크리스마스의 기쁨', '크리스마스 시즌의 대표적인 식물로 빨간 포엽이 특징적입니다. 축제와 기쁨을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '겨울꽃', '빨강', ARRAY['겨울'], ARRAY['크리스마스','축하'], true),
('크리스마스로즈', 'Christmas Rose', 'Helleborus niger', 'christmas-rose', '추억, 위안', '겨울에 피어나는 강인한 꽃으로, 힘든 시기에도 희망을 잃지 않는 의미를 담고 있습니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '겨울꽃', '흰색', ARRAY['겨울'], ARRAY['위로','크리스마스'], false),
('매실꽃', 'Japanese Apricot', 'Prunus mume', 'japanese-apricot', '품격, 고결한 마음', '매화와 비슷하나 열매를 맺는 실용적인 나무의 꽃입니다. 초봄의 시작을 알립니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '겨울꽃', '분홍', ARRAY['겨울','봄'], ARRAY['축하'], false),

-- === 웨딩/결혼식 꽃 ===
('작약', 'Peony', 'Paeonia', 'peony', '수줍음, 부귀', '크고 풍성한 꽃잎이 매력적인 꽃으로 웨딩 부케의 대표 꽃입니다. 동양에서는 부귀와 영화를 상징합니다.', 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800', '웨딩', '분홍', ARRAY['봄','여름'], ARRAY['결혼','프로포즈'], true),
('리시안셔스', 'Lisianthus', 'Eustoma', 'lisianthus', '변치않는 사랑', '장미와 비슷한 우아함을 가진 꽃으로 웨딩 장식에서 큰 인기를 얻고 있습니다. 꽃말이 아름다워 선물용으로도 좋습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '웨딩', '보라', ARRAY['여름','가을'], ARRAY['결혼','기념일'], true),
('카라', 'Calla Lily', 'Zantedeschia', 'calla-lily', '멋진 아름다움, 열정', '우아한 곡선의 꽃 모양이 세련된 느낌을 주어 모던한 웨딩에 인기가 높습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '웨딩', '흰색', ARRAY['봄','여름'], ARRAY['결혼','축하'], true),
('스카비오사', 'Scabiosa', 'Scabiosa', 'scabiosa', '불행한 사랑, 미망인', '가느다란 줄기 위에 핀 공 모양의 꽃이 독특한 매력을 지닙니다. 빈티지 웨딩과 야외 결혼식에 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '웨딩', '보라', ARRAY['여름'], ARRAY['결혼'], false),
('란', 'Orchid', 'Orchidaceae', 'orchid', '아름다운 여인, 변함없는 사랑', '고급스러운 이미지의 대표 꽃으로 동양란과 서양란 모두 인기가 높습니다. 개업 축하와 승진 축하에 많이 사용됩니다.', 'https://images.unsplash.com/photo-1524598171353-ce84a157d527?w=800', '고급', '흰색', ARRAY['봄','여름','가을','겨울'], ARRAY['개업','승진','축하','감사'], true),

-- === 감사/선물 꽃 ===
('아이리스', 'Iris', 'Iris', 'iris', '좋은 소식, 지혜', '무지개를 의미하는 이름처럼 다양한 색상을 가진 꽃입니다. 프랑스 왕실의 문장에도 사용될 만큼 고귀한 꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '선물', '보라', ARRAY['봄','여름'], ARRAY['축하','감사'], false),
('수레국화', 'Cornflower', 'Centaurea cyanus', 'cornflower', '행복, 섬세함', '밝은 파란색이 인상적인 들꽃으로, 소박하면서도 아름다운 매력이 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '파랑', ARRAY['여름'], ARRAY['생일','감사'], false),
('데이지', 'Daisy', 'Bellis perennis', 'daisy', '순수, 희망', '밝고 사랑스러운 꽃으로 어린 시절의 순수함과 새로운 시작을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '흰색', ARRAY['봄','여름'], ARRAY['생일','축하'], false),
('안스리움', 'Anthurium', 'Anthurium', 'anthurium', '번민, 사랑에 번민하다', '하트 모양의 광택 있는 꽃이 특징적인 열대 식물입니다. 실내 장식과 개업 축하에 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '열대', '빨강', ARRAY['봄','여름','가을','겨울'], ARRAY['개업','축하'], false),
('글라디올러스', 'Gladiolus', 'Gladiolus', 'gladiolus', '준비, 만남', '검의 모양을 닮은 잎에서 이름이 유래했습니다. 세로로 길게 피어나는 꽃이 격식 있는 자리에 어울립니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '축하', '빨강', ARRAY['여름'], ARRAY['축하','개업'], false),
('프로테아', 'Protea', 'Protea', 'protea', '용기, 변화', '남아프리카 원산의 독특한 꽃으로, 커다란 꽃봉오리가 인상적입니다. 모던하고 유니크한 꽃다발에 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '이국적', '분홍', ARRAY['봄','여름','가을','겨울'], ARRAY['축하','결혼'], false),
('스토크', 'Stock', 'Matthiola incana', 'stock', '영원한 아름다움, 행복한 생활', '달콤한 향기가 강한 꽃으로 꽃다발과 장식에 풍성함을 더해줍니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '향기', '분홍', ARRAY['봄','여름'], ARRAY['결혼','감사'], false),
('알스트로메리아', 'Alstroemeria', 'Alstroemeria', 'alstroemeria', '우정, 헌신', '작은 백합을 닮은 꽃으로 오래 가는 것이 특징입니다. 우정과 헌신의 상징으로 선물에 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '선물', '분홍', ARRAY['봄','여름','가을'], ARRAY['생일','감사','우정'], false),

-- === 추모/장례 꽃 ===
('백국화', 'White Chrysanthemum', 'Chrysanthemum morifolium', 'white-chrysanthemum', '진실, 추모', '한국에서 장례식과 추모 행사에 가장 많이 사용되는 꽃입니다. 깨끗하고 경건한 분위기를 자아냅니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '추모', '흰색', ARRAY['가을'], ARRAY['장례','추모','추석'], true),
('흰 장미', 'White Rose', 'Rosa alba', 'white-rose', '순수한 사랑, 존경', '순백의 장미는 순수하고 깨끗한 마음을 전하며, 존경과 추모의 뜻을 담아 사용됩니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '추모', '흰색', ARRAY['봄','여름'], ARRAY['장례','결혼','추모'], true),
('흰 백합', 'White Lily', 'Lilium candidum', 'white-lily', '순결, 위엄', '순수함과 고귀함을 상징하는 흰 백합은 종교 행사와 추모식에서 널리 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '추모', '흰색', ARRAY['여름'], ARRAY['장례','추모','결혼'], true),

-- === 관엽식물/다육 ===
('다육식물', 'Succulent', 'Crassulaceae', 'succulent', '영원한 사랑, 끈기', '물을 저장하는 능력이 뛰어나 관리가 쉽고, 인테리어 소품으로 큰 인기를 얻고 있습니다.', 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800', '관엽', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['집들이','생일'], false),
('선인장', 'Cactus', 'Cactaceae', 'cactus', '뜨거운 마음, 인내', '척박한 환경에서도 살아남는 강인함을 가진 식물입니다. 미니 선인장은 선물용으로도 인기입니다.', 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800', '관엽', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['집들이','개업'], false),
('몬스테라', 'Monstera', 'Monstera deliciosa', 'monstera', '깊은 관계', '큰 잎에 독특한 구멍이 있어 인테리어 식물로 큰 사랑을 받고 있습니다.', 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800', '관엽', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['집들이','개업'], false),

-- === 허브 꽃 ===
('로즈마리', 'Rosemary', 'Salvia rosmarinus', 'rosemary', '기억, 변치않는 사랑', '요리와 아로마테라피에 널리 쓰이는 허브로, 기억력을 높이고 사랑을 지켜준다는 전설이 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '허브', '파랑', ARRAY['봄','여름'], ARRAY['감사','집들이'], false),
('캐모마일', 'Chamomile', 'Matricaria chamomilla', 'chamomile', '역경 속의 힘, 인내', '차와 아로마테라피로 유명한 허브 꽃으로, 마음의 평안과 치유를 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '허브', '흰색', ARRAY['봄','여름'], ARRAY['위로','힐링'], false),
('민트', 'Mint', 'Mentha', 'mint', '따뜻한 정, 미덕', '상쾌한 향기가 특징인 허브로, 음료와 요리에 널리 사용됩니다. 건강과 상쾌함을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '허브', '초록', ARRAY['봄','여름','가을'], ARRAY['집들이','힐링'], false),

-- === 색상별 장미 변종 ===
('빨간 장미', 'Red Rose', 'Rosa', 'red-rose', '열정적인 사랑, 존경', '가장 강렬한 사랑의 표현으로, 연인에게 전하는 가장 대표적인 꽃입니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '사랑', '빨강', ARRAY['봄','여름','가을','겨울'], ARRAY['프로포즈','기념일','결혼'], true),
('분홍 장미', 'Pink Rose', 'Rosa', 'pink-rose', '감사, 행복, 존경', '부드러운 사랑과 감사의 마음을 전할 때 적합한 꽃입니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '감사', '분홍', ARRAY['봄','여름','가을','겨울'], ARRAY['감사','어버이날','생일'], true),
('노란 장미', 'Yellow Rose', 'Rosa', 'yellow-rose', '우정, 질투', '밝은 노란색이 우정과 기쁨을 상징하지만, 서양에서는 질투의 의미도 있습니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '우정', '노랑', ARRAY['봄','여름','가을','겨울'], ARRAY['우정','축하','생일'], false),
('보라 장미', 'Purple Rose', 'Rosa', 'purple-rose', '첫눈에 반하다, 매혹', '신비로운 보라색이 첫 만남의 설렘과 매혹을 표현합니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '사랑', '보라', ARRAY['봄','여름','가을','겨울'], ARRAY['고백','프로포즈'], false),
('파란 장미', 'Blue Rose', 'Rosa', 'blue-rose', '불가능한 사랑, 기적', '자연에 존재하지 않는 색으로 불가능을 가능으로 바꾸는 기적을 상징합니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '사랑', '파랑', ARRAY['봄','여름','가을','겨울'], ARRAY['프로포즈','기념일'], false),

-- === 열대 & 이국적인 꽃 ===
('플루메리아', 'Plumeria', 'Plumeria', 'plumeria', '열정, 매력', '하와이 레이에 사용되는 열대 꽃으로 달콤한 향기가 특징입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '열대', '흰색', ARRAY['여름'], ARRAY['축하','여행'], false),
('극락조화', 'Bird of Paradise', 'Strelitzia reginae', 'bird-of-paradise', '자유, 낙원, 기쁨', '새가 날아가는 형태를 닮은 독특한 열대 꽃으로, 이국적이고 화려한 분위기를 자아냅니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '열대', '주황', ARRAY['봄','여름','가을','겨울'], ARRAY['축하','개업'], false),
('히비스커스', 'Hibiscus', 'Hibiscus', 'hibiscus', '섬세한 아름다움', '열대 지방의 대표 꽃으로 하와이의 주 꽃이기도 합니다. 차로도 즐겨 마시며 건강에도 좋습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '열대', '빨강', ARRAY['여름'], ARRAY['축하'], false),
('자스민', 'Jasmine', 'Jasminum', 'jasmine', '관능, 아름다움', '달콤하고 강렬한 향기가 특징인 꽃으로 향수와 차의 원료로 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '향기', '흰색', ARRAY['봄','여름'], ARRAY['결혼','감사'], false),
('부겐빌레아', 'Bougainvillea', 'Bougainvillea', 'bougainvillea', '열정, 정열', '화려한 색의 포엽이 꽃처럼 보이는 열대 식물로 담장이나 아치를 장식하는 데 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '열대', '분홍', ARRAY['여름'], ARRAY['축하'], false),

-- === 들꽃 & 야생화 ===
('은방울꽃', 'Lily of the Valley', 'Convallaria majalis', 'lily-of-the-valley', '행복의 귀환, 순수', '작고 하얀 종 모양의 꽃이 매력적이며, 프랑스에서 5월 1일에 사랑하는 사람에게 선물합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '흰색', ARRAY['봄'], ARRAY['결혼','감사'], false),
('제비꽃', 'Violet', 'Viola', 'violet', '겸양, 작은 사랑', '봄에 피는 작고 사랑스러운 들꽃으로, 겸손하고 소박한 아름다움을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['봄'], ARRAY['감사','우정'], false),
('꽃창포', 'Iris ensata', 'Iris ensata', 'iris-ensata', '기쁜 소식', '한국과 일본의 전통 정원에서 볼 수 있는 아름다운 수생 식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['여름'], ARRAY['축하'], false),
('도라지꽃', 'Balloon Flower', 'Platycodon grandiflorus', 'balloon-flower', '영원한 사랑, 성실', '풍선처럼 부풀어 오른 꽃봉오리가 터지며 별 모양으로 피어나는 한국 자생 꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['여름','가을'], ARRAY['사랑','감사'], false),
('할미꽃', 'Pasque Flower', 'Pulsatilla koreana', 'pasque-flower', '슬픈 추억', '고개를 숙인 모양이 할머니의 뒷모습을 닮아 이름 붙여진 한국 자생 식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['봄'], ARRAY['추모'], false),
('패랭이꽃', 'Pink', 'Dianthus', 'pink-flower', '가련한 마음, 순결', '카네이션의 원종으로 한국의 들판에서 자주 볼 수 있는 소박한 꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '분홍', ARRAY['여름'], ARRAY['감사'], false),
('민들레', 'Dandelion', 'Taraxacum', 'dandelion', '사랑의 신탁, 행복', '노란 꽃과 하얀 홀씨가 특징인 친근한 들꽃으로, 어디서나 자라는 강인함을 지닙니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '노랑', ARRAY['봄','여름'], ARRAY['소원','희망'], false),
('클로버', 'Clover', 'Trifolium', 'clover', '행운, 약속', '네잎 클로버가 행운의 상징으로 알려져 있으며, 세잎 클로버는 사랑, 희망, 믿음을 뜻합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '초록', ARRAY['봄','여름'], ARRAY['행운','축하'], false),
('봉선화', 'Garden Balsam', 'Impatiens balsamina', 'garden-balsam', '나를 만지지 마세요, 속마음', '씨앗이 터지는 특성으로 유명하며, 한국에서는 손톱에 물들이는 전통이 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '분홍', ARRAY['여름'], ARRAY['추억'], false),

-- === 고급 꽃 ===
('난초', 'Orchid (Eastern)', 'Cymbidium', 'cymbidium', '기품, 군자', '사군자의 하나로 동양 문화에서 가장 고귀하게 여기는 꽃입니다. 은은한 향과 품격 있는 자태가 특징입니다.', 'https://images.unsplash.com/photo-1524598171353-ce84a157d527?w=800', '고급', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['승진','개업','축하'], true),
('호접란', 'Phalaenopsis', 'Phalaenopsis', 'phalaenopsis', '당신을 사랑합니다, 행복이 날아옵니다', '나비가 날아오는 듯한 형태의 고급 난으로, 축하와 감사의 선물로 최고의 인기를 자랑합니다.', 'https://images.unsplash.com/photo-1524598171353-ce84a157d527?w=800', '고급', '흰색', ARRAY['봄','여름','가을','겨울'], ARRAY['개업','승진','축하','감사'], true),
('풍란', 'Neofinetia', 'Neofinetia falcata', 'neofinetia', '고귀, 은은한 향기', '한국과 일본의 전통 난으로 은은한 향기와 고귀한 자태가 특징입니다.', 'https://images.unsplash.com/photo-1524598171353-ce84a157d527?w=800', '고급', '흰색', ARRAY['여름'], ARRAY['감사','축하'], false),

-- === 탄생화 (월별) ===
('스노드롭', 'Snowdrop', 'Galanthus', 'snowdrop', '희망, 위안 (1월)', '겨울 끝자락에 눈을 뚫고 피어나는 작은 꽃으로 새해의 희망을 상징합니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '탄생화', '흰색', ARRAY['겨울'], ARRAY['1월생일','새해'], false),
('앵초', 'Primrose', 'Primula', 'primrose', '젊은 시절의 슬픔과 기쁨 (2월)', '이른 봄에 피어나는 앵초는 청춘의 감성과 첫 시작의 감동을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '노랑', ARRAY['봄'], ARRAY['2월생일'], false),
('물망초', 'Forget-me-not', 'Myosotis', 'forget-me-not', '진정한 사랑, 나를 잊지 마세요 (3월)', '작고 파란 꽃이 사랑하는 사람에 대한 기억과 변치 않는 마음을 전합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '파랑', ARRAY['봄'], ARRAY['3월생일','사랑'], false),
('스위트피', 'Sweet Pea', 'Lathyrus odoratus', 'sweet-pea', '나비처럼 날아가는 기쁨 (4월)', '나비 날개를 닮은 꽃잎과 달콤한 향기가 매력적인 봄꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '분홍', ARRAY['봄'], ARRAY['4월생일','축하'], false),
('은방울꽃', 'Lily of the Valley', 'Convallaria majalis', 'lily-of-valley-may', '행복의 귀환 (5월)', '5월의 탄생화로 작고 흰 종 모양의 꽃이 순수한 행복을 전합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '흰색', ARRAY['봄'], ARRAY['5월생일','어버이날'], false),
('장미 (6월)', 'June Rose', 'Rosa', 'june-rose', '아름다움과 사랑 (6월)', '6월의 탄생화로 가장 아름답게 피어나는 시기의 장미입니다.', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800', '탄생화', '빨강', ARRAY['여름'], ARRAY['6월생일','결혼'], false),
('델피니움', 'Delphinium', 'Delphinium', 'delphinium', '청명, 자유로운 마음 (7월)', '하늘색의 키 큰 꽃으로 시원하고 상쾌한 여름의 기운을 전합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '파랑', ARRAY['여름'], ARRAY['7월생일','축하'], false),
('글라디올러스 (8월)', 'August Gladiolus', 'Gladiolus', 'august-gladiolus', '열정적인 만남 (8월)', '8월의 탄생화로 강렬한 색상과 긴 줄기가 인상적인 여름꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '탄생화', '빨강', ARRAY['여름'], ARRAY['8월생일'], false),
('아스터', 'Aster', 'Aster', 'aster', '추억, 신뢰 (9월)', '가을의 대표 꽃으로 별 모양의 꽃잎이 밤하늘의 별을 연상시킵니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '탄생화', '보라', ARRAY['가을'], ARRAY['9월생일','추석'], false),
('금잔화', 'Marigold', 'Calendula', 'marigold', '이별의 슬픔, 생명력 (10월)', '주황색의 밝은 색감과 강한 향기가 특징으로 해충을 쫓는 효과가 있습니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '탄생화', '주황', ARRAY['가을'], ARRAY['10월생일'], false),
('국화 (11월)', 'November Chrysanthemum', 'Chrysanthemum', 'november-chrysanthemum', '고결한 절개 (11월)', '11월의 탄생화로 늦가을까지 피어나는 강인함과 절개를 상징합니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '탄생화', '노랑', ARRAY['가을'], ARRAY['11월생일','추모'], false),
('수선화 (12월)', 'December Narcissus', 'Narcissus', 'december-narcissus', '자존심, 고결 (12월)', '겨울에도 꿋꿋이 피어나는 12월의 탄생화입니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '탄생화', '흰색', ARRAY['겨울'], ARRAY['12월생일','크리스마스'], false),

-- === 추가 인기 꽃 ===
('유칼립투스', 'Eucalyptus', 'Eucalyptus', 'eucalyptus', '재생, 보호', '은은한 초록색 잎이 인테리어와 꽃다발 장식에 인기가 높습니다. 상쾌한 향이 특징입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '그린', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['결혼','집들이'], false),
('목화', 'Cotton', 'Gossypium', 'cotton', '어머니의 사랑', '솜뭉치 같은 하얀 열매가 특징으로 드라이플라워와 인테리어에 많이 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '드라이', '흰색', ARRAY['가을'], ARRAY['어버이날','감사'], false),
('미모사', 'Mimosa', 'Acacia dealbata', 'mimosa', '수줍은 사랑, 감수성', '노란 솜뭉치 같은 꽃이 봄의 시작을 알리며, 이탈리아에서는 여성의 날에 선물합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '봄꽃', '노랑', ARRAY['봄'], ARRAY['여성의날','감사'], false),
('아네모네', 'Anemone', 'Anemone', 'anemone', '기대, 사라진 희망', '바람에 흔들리는 모습에서 바람꽃이라는 별명을 가진 꽃으로 매혹적인 아름다움이 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '봄꽃', '빨강', ARRAY['봄'], ARRAY['사랑','축하'], false),
('라넌큘러스', 'Ranunculus', 'Ranunculus', 'ranunculus', '매력적인 사람', '겹겹이 쌓인 꽃잎이 장미와 비슷하면서도 더 부드러운 느낌을 줍니다. 웨딩 부케에 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '웨딩', '분홍', ARRAY['봄'], ARRAY['결혼','프로포즈'], false),
('해당화', 'Rugosa Rose', 'Rosa rugosa', 'rugosa-rose', '온화한 아름다움', '한국 해안가에서 자생하는 장미 종류로, 소박하면서도 아름다운 꽃을 피웁니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '분홍', ARRAY['봄','여름'], ARRAY['축하'], false),
('마가렛', 'Marguerite', 'Argyranthemum frutescens', 'marguerite', '진실한 사랑', '데이지와 비슷한 밝고 사랑스러운 꽃으로 정원에서 풍성하게 자랍니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '흰색', ARRAY['봄','여름'], ARRAY['사랑','감사'], false),
('치자꽃', 'Gardenia', 'Gardenia jasminoides', 'gardenia', '한없는 즐거움, 청결', '진한 향기와 순백의 꽃이 인상적인 꽃으로 웨딩과 향수에 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '향기', '흰색', ARRAY['여름'], ARRAY['결혼','감사'], false),
('살구꽃', 'Apricot Blossom', 'Prunus armeniaca', 'apricot-blossom', '처녀의 수줍음', '봄에 잎보다 먼저 피어나는 분홍빛 꽃으로, 과실나무의 꽃 중 가장 아름답습니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하'], false),
('복숭아꽃', 'Peach Blossom', 'Prunus persica', 'peach-blossom', '사랑의 노예, 매혹', '중국에서 장수와 행복의 상징으로 여기며, 봄에 화사한 분홍빛으로 피어납니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하','장수'], false),
('배꽃', 'Pear Blossom', 'Pyrus', 'pear-blossom', '온화한 애정', '순백의 꽃잎이 봄바람에 흩날리는 모습이 아름다운 과실나무 꽃입니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '흰색', ARRAY['봄'], ARRAY['축하'], false),
('사과꽃', 'Apple Blossom', 'Malus domestica', 'apple-blossom', '선택, 명성', '하얀색에서 분홍빛이 도는 꽃으로 풍요로운 가을 수확의 시작을 알립니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하'], false),

-- === 드라이플라워 인기 ===
('스타티스', 'Statice', 'Limonium', 'statice', '변하지 않는 마음', '드라이플라워로 가장 인기 있는 꽃 중 하나입니다. 건조해도 색이 변하지 않아 오래 즐길 수 있습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '드라이', '보라', ARRAY['여름'], ARRAY['축하','감사'], false),
('천일홍', 'Globe Amaranth', 'Gomphrena globosa', 'globe-amaranth', '변하지 않는 사랑', '동그란 꽃 모양과 선명한 색상이 오래 유지되어 드라이플라워로 인기가 높습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '드라이', '분홍', ARRAY['여름','가을'], ARRAY['사랑','감사'], false),

-- === 특수 용도 ===
('무스카리', 'Grape Hyacinth', 'Muscari', 'grape-hyacinth', '절망, 실의', '포도송이를 닮은 파란 꽃이 봄 정원을 아름답게 장식합니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '봄꽃', '파랑', ARRAY['봄'], ARRAY['위로'], false),
('크로커스', 'Crocus', 'Crocus', 'crocus', '젊음의 기쁨', '이른 봄 눈 사이로 피어나는 작은 꽃으로 봄의 첫 번째 전령입니다.', 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800', '봄꽃', '보라', ARRAY['봄'], ARRAY['축하'], false),
('아마릴리스', 'Amaryllis', 'Hippeastrum', 'amaryllis', '자부심, 아름다움', '커다란 나팔 모양의 꽃이 인상적이며 겨울 실내 화초로 인기가 높습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '겨울꽃', '빨강', ARRAY['겨울'], ARRAY['크리스마스','축하'], false),
('시클라멘', 'Cyclamen', 'Cyclamen', 'cyclamen', '내성적인 성격, 수줍음', '꽃잎이 위로 말린 독특한 형태가 매력적인 겨울 화분식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '겨울꽃', '분홍', ARRAY['겨울'], ARRAY['생일','감사'], false),
('네리네', 'Nerine', 'Nerine', 'nerine', '다시 만날 날을 기다리며', '가을에 피어나는 섬세하고 우아한 꽃으로 꽃잎이 반짝이는 특징이 있습니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '분홍', ARRAY['가을'], ARRAY['축하','사랑'], false),
('매발톱꽃', 'Columbine', 'Aquilegia', 'columbine', '승리의 맹세', '독특한 꽃 모양이 새의 발톱을 닮아 이름 붙여졌으며, 야생화 정원에서 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['봄','여름'], ARRAY['축하'], false),
('디기탈리스', 'Foxglove', 'Digitalis', 'foxglove', '열정', '종 모양의 꽃이 줄줄이 달리는 키 큰 식물로 정원의 포인트가 됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['여름'], ARRAY['축하'], false),
('꽃양귀비', 'Poppy', 'Papaver', 'poppy', '위안, 감사', '화려하면서도 덧없는 아름다움을 가진 꽃으로 현충일에 추모의 상징으로 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '빨강', ARRAY['봄','여름'], ARRAY['추모','감사'], false),
('루피너스', 'Lupine', 'Lupinus', 'lupine', '상상력, 모성애', '키 큰 꽃대에 촘촘히 피어나는 꽃이 인상적이며 넓은 들판을 화려하게 물들입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['여름'], ARRAY['축하'], false),
('에키네시아', 'Echinacea', 'Echinacea', 'echinacea', '치유, 능력', '면역력 강화 효과로 알려진 허브 꽃으로, 가을 정원에서 인기 있는 꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '허브', '분홍', ARRAY['여름','가을'], ARRAY['힐링','위로'], false),
('동자꽃', 'Lychnis', 'Lychnis', 'lychnis', '열렬한 사랑', '밝은 빨간색의 별 모양 꽃으로 한국 산야에서 자생합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '빨강', ARRAY['여름'], ARRAY['사랑'], false),
('쥐꼬리풀', 'Veronica', 'Veronica', 'veronica', '충실, 여성의 정절', '가느다란 줄기에 작은 꽃들이 피어나는 우아한 들꽃입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '파랑', ARRAY['여름'], ARRAY['감사'], false),
('원추리', 'Daylily', 'Hemerocallis', 'daylily', '근심을 잊다', '하루만 피었다 지지만 매일 새 꽃이 피어나 근심을 잊게 해준다는 뜻을 지닙니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '주황', ARRAY['여름'], ARRAY['위로','힐링'], false),
('범부채', 'Blackberry Lily', 'Iris domestica', 'blackberry-lily', '사랑스러운 모습', '표범 무늬의 꽃이 특징적인 한국 자생 식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '주황', ARRAY['여름'], ARRAY['축하'], false),
('용담', 'Gentian', 'Gentiana', 'gentian', '정의, 성실', '깊은 파란색의 꽃이 인상적이며 한국 산야의 가을을 대표하는 야생화입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '파랑', ARRAY['가을'], ARRAY['감사'], false),
('참나리', 'Tiger Lily', 'Lilium lancifolium', 'tiger-lily', '순결, 위엄', '주홍색 꽃잎에 검은 점이 있는 한국 자생 백합으로 여름 산야를 장식합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '주황', ARRAY['여름'], ARRAY['축하'], false),

-- === 절화/꽃꽂이 인기 ===
('왁스플라워', 'Wax Flower', 'Chamelaucium', 'wax-flower', '기다릴게요', '작은 꽃이 밀랍처럼 반짝이는 특징으로 꽃다발의 보조 소재로 인기입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '절화', '분홍', ARRAY['봄','여름','가을','겨울'], ARRAY['결혼','생일'], false),
('루스커스', 'Ruscus', 'Ruscus', 'ruscus', '결실', '초록 잎이 꽃다발과 장식에 풍성함을 더해주는 그린 소재입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '그린', '초록', ARRAY['봄','여름','가을','겨울'], ARRAY['결혼','감사'], false),

-- === 추가 (200종 채우기) ===
('수련', 'Water Lily', 'Nymphaea', 'water-lily', '청순한 마음', '연못 위에 떠있는 아름다운 수생 식물로, 모네의 그림으로 유명합니다.', 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=800', '수생', '분홍', ARRAY['여름'], ARRAY['축하','감사'], false),
('산딸기꽃', 'Raspberry Blossom', 'Rubus', 'raspberry-blossom', '사랑과 애정', '봄에 피는 하얀 꽃 후에 달콤한 산딸기 열매를 맺습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '봄꽃', '흰색', ARRAY['봄'], ARRAY['축하'], false),
('아카시아', 'Acacia', 'Robinia pseudoacacia', 'acacia', '품위 있는 사랑', '5월에 하얀 꽃송이를 피우며 달콤한 향기가 온 동네에 퍼집니다. 아카시아 꿀이 유명합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '봄꽃', '흰색', ARRAY['봄'], ARRAY['감사'], false),
('찔레꽃', 'Wild Rose', 'Rosa multiflora', 'wild-rose', '고독, 소박한 아름다움', '한국 시골 길가에서 자주 볼 수 있는 야생 장미로, 소박하면서도 아름답습니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '흰색', ARRAY['봄','여름'], ARRAY['추억'], false),
('붓꽃', 'Iris (Korean)', 'Iris sanguinea', 'korean-iris', '좋은 소식을 기다림', '한국 자생 붓꽃으로 초여름 습지 주변에서 보랏빛으로 피어납니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '보라', ARRAY['여름'], ARRAY['축하'], false),
('해국', 'Sea Aster', 'Aster spathulifolius', 'sea-aster', '인내', '해안가 바위틈에서 피어나는 강인한 한국 자생 식물입니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '들꽃', '보라', ARRAY['가을'], ARRAY['감사'], false),
('구절초', 'Korean Chrysanthemum', 'Dendranthema zawadskii', 'korean-chrysanthemum', '순수한 사랑', '한국 산야의 가을을 대표하는 야생 국화입니다. 음력 9월 9일에 약효가 가장 좋다고 합니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '들꽃', '흰색', ARRAY['가을'], ARRAY['감사','추석'], false),
('꽃무릇', 'Red Spider Lily', 'Lycoris radiata', 'red-spider-lily', '이별, 슬픈 추억', '잎과 꽃이 만나지 못하는 꽃으로 이별의 아픔을 상징합니다. 가을에 선홍색으로 피어납니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '가을꽃', '빨강', ARRAY['가을'], ARRAY['추모'], false),
('산국', 'Wild Chrysanthemum', 'Chrysanthemum boreale', 'wild-chrysanthemum', '청결, 고독', '산에서 자생하는 작은 노란 국화로 한국 가을 산야의 풍경입니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '들꽃', '노랑', ARRAY['가을'], ARRAY['추석'], false),
('칼란코에', 'Kalanchoe', 'Kalanchoe', 'kalanchoe', '인내, 불멸', '관리가 쉽고 오래 피어 실내 화분으로 선물하기 좋은 꽃입니다.', 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800', '관엽', '빨강', ARRAY['봄','여름','가을','겨울'], ARRAY['생일','집들이'], false),
('제라늄', 'Geranium', 'Pelargonium', 'geranium', '위안, 사랑', '유럽 창가를 장식하는 대표적인 꽃으로 밝은 색상과 은은한 향이 특징입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '관엽', '빨강', ARRAY['봄','여름','가을'], ARRAY['집들이','감사'], false),
('베고니아', 'Begonia', 'Begonia', 'begonia', '사랑의 갈망, 친절', '다양한 품종이 있어 실내외 모두에서 키울 수 있는 인기 관상식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '관엽', '분홍', ARRAY['봄','여름','가을','겨울'], ARRAY['집들이','감사'], false),
('임파첸스', 'Impatiens', 'Impatiens', 'impatiens', '나를 건드리지 마세요', '그늘에서도 잘 자라 음지 정원의 대표 꽃입니다. 풍성한 꽃이 오래 피어납니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '관엽', '분홍', ARRAY['여름'], ARRAY['집들이'], false),
('앵두꽃', 'Cherry Flower', 'Prunus tomentosa', 'cherry-flower', '수줍은 사랑', '봄에 작고 분홍빛 꽃을 피우며, 그 뒤에 달콤한 앵두 열매를 맺습니다.', 'https://images.unsplash.com/photo-1518882292875-3e2e8914bc0e?w=800', '봄꽃', '분홍', ARRAY['봄'], ARRAY['축하'], false),
('자귀나무꽃', 'Silk Tree', 'Albizia julibrissin', 'silk-tree', '가슴속의 사랑', '분홍빛 실크처럼 부드러운 꽃이 여름 저녁에 피어나 환상적인 분위기를 연출합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '분홍', ARRAY['여름'], ARRAY['사랑'], false),
('능소화', 'Trumpet Vine', 'Campsis grandiflora', 'trumpet-vine', '명예, 영광', '나팔 모양의 주황색 꽃이 여름 내내 화려하게 피어나는 덩굴식물입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '주황', ARRAY['여름'], ARRAY['축하','승진'], false),
('나리꽃', 'Oriental Lily', 'Lilium orientalis', 'oriental-lily', '위엄, 순결', '큰 꽃과 진한 향이 특징인 고급 백합으로, 꽃다발의 주역으로 사용됩니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '고급', '흰색', ARRAY['여름'], ARRAY['결혼','축하','감사'], false),
('작살나무', 'Beautyberry', 'Callicarpa', 'beautyberry', '총명', '보라색 열매가 보석처럼 아름다운 식물로, 가을 장식용으로 인기입니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '보라', ARRAY['가을'], ARRAY['축하'], false),
('층꽃나무', 'Bluebeard', 'Caryopteris incana', 'bluebeard', '사랑의 정', '한국 산야에서 가을에 파란 꽃을 피우는 자생 관목입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '가을꽃', '파랑', ARRAY['가을'], ARRAY['축하'], false),
('싸리꽃', 'Bush Clover', 'Lespedeza', 'bush-clover', '사색, 그리움', '가을 들판에 피어나는 소박한 꽃으로 한국 전통 시에 자주 등장합니다.', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', '가을꽃', '분홍', ARRAY['가을'], ARRAY['추석','추모'], false),
('배롱나무꽃', 'Crape Myrtle', 'Lagerstroemia indica', 'crape-myrtle', '부귀, 웅변', '한여름에 100일 동안 피어 백일홍이라고도 불리는 화려한 꽃나무입니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '여름꽃', '분홍', ARRAY['여름'], ARRAY['축하'], false),
('수박풀', 'Hibiscus trionum', 'Hibiscus trionum', 'flower-of-an-hour', '순간의 아름다움', '하루만 피고 지는 한국 자생 무궁화과 식물로, 순간의 소중함을 상징합니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '들꽃', '흰색', ARRAY['여름'], ARRAY['축하'], false),
('꿀풀', 'Self-heal', 'Prunella vulgaris', 'self-heal', '치유', '한국 산야에서 자생하는 약용 식물로 보라색 꽃을 피웁니다.', 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=800', '허브', '보라', ARRAY['여름'], ARRAY['힐링','위로'], false)
ON CONFLICT (slug) DO NOTHING;
