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
      title: "你最喜歡哪種生活節奏？",
      options: [
        {title: "像快板樂章，我就急性子", value: 1, type: "brass"},
        {title: "像中板樂章，不疾不徐", value: 1, type: "string"},
        {title: "像慢板樂章，充滿細節", value: 1, type: "woodwind"},
        {title: "像行板樂章，固定節奏", value: 1, type: "percussion"}
      ]
    },
    "2":{
      title: "在上台表演前，你會如何調適心態？",
      options: [
        {title: "跟朋友互相加油打氣", value: 1, type: "string"},
        {title: "優雅地喝一口水，放鬆心情", value: 1 , type: "woodwind"},
        {title: "瘋狂練習等一下上台的內容", value: 1, type: "percussion"},
        {title: "緊張地到處走動", value: 1, type: "brass"}
      ]
    },
    "3":{
      title: "如果要和朋友競爭，你的心態如何？",
      options: [
        {title: "不考慮那麼多，正面迎戰", value: 1, type: "brass"},
        {title: "理性看待，用實力說話", value: 1, type: "string"},
        {title: "順其自然", value: 1, type: "percussion"},
        {title: "假裝和平，但其實內心超想贏", value: 1 , type: "woodwind"}
      ]
    },
    "4":{
      title: "你會怎麼表達自己的意見？",
      options: [
        {title: "和他人討論後理性提出", value: 1, type: "string"},
        {title: "配合他人的節奏，視情況", value: 1, type: "percussion"},
        {title: "直接大聲表達", value: 1, type: "brass"},
        {title: "自己思考很久後提出", value: 1 , type: "woodwind"}
      ]
    },
    "5":{
      title: "你希望別人如何形容你？",
      options: [
        {title: "優雅、細膩", value: 1 , type: "woodwind"},
        {title: "熱情、活潑", value: 1, type: "brass"},
        {title: "穩定、有條理", value: 1, type: "percussion"},
        {title: "隨和、好溝通", value: 1, type: "string"}
      ]
    },
    "6":{
      title: "你會如何規劃你的工作進度？",
      options: [
        {title: "排好行程，按部就班地執行", value: 1, type: "percussion"},
        {title: "慢慢地開始，不要影響我的生活品質", value: 1 , type: "woodwind"},
        {title: "配合同儕，一起規劃", value: 1, type: "string"},
        {title: "最後一刻再急起直追", value: 1, type: "brass"}
      ]
    },
    "7":{
      title: "如果要辦慶功宴，你會想去哪種場所？",
      options: [
        {title: "異國料理餐廳", value: 1, type: "string"},
        {title: "熱炒店", value: 1, type: "brass"},
        {title: "火鍋店", value: 1, type: "percussion"},
        {title: "咖啡廳", value: 1 , type: "woodwind"}
      ]
    },
    "8":{
      title: "你在團體中是怎樣的存在？",
      options: [
        {title: "喜歡出頭，超有存在感", value: 1, type: "brass"},
        {title: "引導大家走在正軌", value: 1, type: "percussion"},
        {title: "注意細節，默默付出", value: 1 , type: "woodwind"},
        {title: "乖乖配合", value: 1, type: "string"}
      ]
    },
    "9":{
      title: "如果要自己辦一場音樂會，你會最在意？",
      options: [
        {title: "觀眾都要嗨起來", value: 1, type: "brass"},
        {title: "當天流程都沒出問題", value: 1, type: "percussion"},
        {title: "親朋好友都有來", value: 1, type: "string"},
        {title: "場地一定要美美的，我也是", value: 1 , type: "woodwind"}
      ]
    },
    "10":{
      title: "你最大的生涯目標是什麼？",
      options: [
        {title: "過充滿質感的生活", value: 1 , type: "woodwind"},
        {title: "有良好的人際關係", value: 1, type: "string"},
        {title: "每天都很精彩", value: 1, type: "brass"},
        {title: "有穩定的生活", value: 1, type: "percussion"}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }