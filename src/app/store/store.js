import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 10,
  score: {
    woodwind: 0,
    brass: 0,
    string: 0,
    percussion: 0
  },
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (type, value) =>
    set((state) => ({
      score: {
        ...state.score,
        [type]: state.score[type] + value
      }
    }))
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "你最喜歡的氛圍是？",
      options: [
        {title: "悠揚細膩，像微風輕拂", value: 1, type: "woodwind"},
        {title: "豪邁有力，充滿張力", value: 1, type: "brass"},
        {title: "溫暖和諧，像擁抱", value: 1, type: "string"},
        {title: "節奏明快，自由奔放", value: 1, type: "percussion"}
      ]
    },
    "2":{
      title: "假日的你最可能去哪裡？",
      options: [
        {title: "森林小徑散步", value: 1 , type: "woodwind"},
        {title: "看運動賽事或演出", value: 1, type: "brass"},
        {title: "博物館或畫廊", value: 1, type: "string"},
        {title: "熱鬧市集或音樂節", value: 1, type: "percussion"}
      ]
    },
    "3":{
      title: "面對挑戰時，你會？",
      options: [
        {title: "靜下心來，找平衡", value: 1 , type: "woodwind"},
        {title: "直接正面迎戰", value: 1, type: "brass"},
        {title: "稳紮穩打，慢慢磨合", value: 1, type: "string"},
        {title: "即興發揮，轉換思路", value: 1, type: "percussion"}
      ]
    },
    "4":{
      title: "你最欣賞的特質？",
      options: [
        {title: "靈活變通", value: 1 , type: "woodwind"},
        {title: "熱情無懼", value: 1, type: "brass"},
        {title: "執著穩定", value: 1, type: "string"},
        {title: "創意無窮", value: 1, type: "percussion"}
      ]
    },
    "5":{
      title: "你最想要的生活節奏？",
      options: [
        {title: "優雅平靜，細水長流", value: 1 , type: "woodwind"},
        {title: "熱烈有力，帶動人心", value: 1, type: "brass"},
        {title: "緩慢踏實，與人共鳴", value: 1, type: "string"},
        {title: "跳躍奔放，驚喜不斷", value: 1, type: "percussion"}
      ]
    },
    "6":{
      title: "朋友遇到麻煩時，你會？",
      options: [
        {title: " 耐心傾聽，柔和陪伴", value: 1 , type: "woodwind"},
        {title: "給予力量，當後盾", value: 1, type: "brass"},
        {title: "一起面對，齊心協力", value: 1, type: "string"},
        {title: "幫忙想點子，解決問題", value: 1, type: "percussion"}
      ]
    },
    "7":{
      title: "你最喜歡的自然景色是？",
      options: [
        {title: "風中的樹林", value: 1 , type: "woodwind"},
        {title: "山巒壯麗", value: 1, type: "brass"},
        {title: "寧靜湖泊", value: 1, type: "string"},
        {title: "瀑布或潮水", value: 1, type: "percussion"}
      ]
    },
    "8":{
      title: "朋友怎麼形容你的存在？",
      options: [
        {title: "溫柔清新，細節控", value: 1 , type: "woodwind"},
        {title: "光芒四射，存在感強", value: 1, type: "brass"},
        {title: "安定踏實，讓人安心", value: 1, type: "string"},
        {title: "充滿驚喜，隨時冒出點子", value: 1, type: "percussion"}
      ]
    },
    "9":{
      title: "如果辦一場派對，你會是？",
      options: [
        {title: "營造氛圍，細節到位", value: 1 , type: "woodwind"},
        {title: "帶頭炒熱氣氛", value: 1, type: "brass"},
        {title: "安排音樂，顧全每個人", value: 1, type: "string"},
        {title: "負責驚喜橋段", value: 1, type: "percussion"}
      ]
    },
    "10":{
      title: "你對未來最期待的是？",
      options: [
        {title: "與世界有細膩連結", value: 1 , type: "woodwind"},
        {title: "讓世界記住你的聲音", value: 1, type: "brass"},
        {title: "穩健前進，合作無間", value: 1, type: "string"},
        {title: "自由自在，無拘無束", value: 1, type: "percussion"}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }