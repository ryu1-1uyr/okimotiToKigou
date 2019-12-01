<template>
  <div>
    contentsだよ
    <InputField :inputText="inputText" @input="onInputAtChild" />
    変数やめる?<input type="checkbox" v-model="isVariable" />
    <OutputField :outputText="output" :isVariable="isVariable" />
    <TweetButton />
  </div>
</template>

<script>
  import InputField from './inputField.vue'
  import OutputField from './outputField'
  import TweetButton from './tweetButton'

  const blackConstructor = "[__,_]=[-~-~[-~[]],[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+[...{}+[]][-~[]]+([]['']+[])[-~[]]+(([]==[])+[])[(-~-~[-~[]])]+(-~[]/[]+[])[(-~-~[-~[]]+-~-~[-~[]])]+(!![]+[])[-~[]]+([]['']+[])[+[]]+[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]]];"

  const charTable = {
    " ": "' '",
    t: "(!![]+[])[-[]]",
    r: "(!![]+[])[-~[]]",
    u: "([]['']+[])[-[]]",
    e: "(!![]+[])[-~-~[-~[]]]",
    f: "(![]+[])[-[]]",
    a: "(![]+[])[-~[]]",
    l: "(![]+[])[-~[-~[]]]",
    s: "(![]+[])[-~[-~[-~[]]]]",
    n: "([]['']+[])[-~[]]",
    d: "([]['']+[])[-~[-~[]]]",
    i: "([]['']+[])[(-~[]<<-~[-~[]])+-~[]]",
    I: "(~[]/-[]+[])[-[]]",
    y: "(- -~[]/-[]+[])[(-~[]+[]+-~[]>>-~[])+(-~[]<<-~[])]",
    o: "([...{}+{}])[-~[]]",
    b: "([...{}+{}])[-~[]<<-~[]]",
    j: "([...{}+{}])[-~-~[-~[]]]",
    c: "([...{}+{}])[(-~[]+[]+-~[]>>-~[])]",
    N: "(''/''+[])[-[]-[]]",
    "0": "([]-[]+[])",
    "1": "(-~[]+[])",
    "2": "(-~[-~[]]+[])",
    "3": "(__+[])",
    "4": "(-~[__]+[])",
    "5": "((-~[]+[]+-~[]>>-~[])+[])",
    "6": "(__+__+[])",
    "7": "((-~[]+[]+-~[]>>-~[])+(-~[]<<-~[])+[])",
    "8": "(-~[__]*-~-~[]+[])",
    "9": "(__*__+[])",

  }
  
  export default {
    name: "contents",
    components: {
      InputField,
      OutputField,
      TweetButton
    },
    data() {
      return {
        inputText: 'input',
        outputText: 'output',
        isVariable: false
      }
    },
    computed: {
      output() {
        return blackConstructor + this.outputText
      },
    },
    methods: {
      onInputAtChild(_) {
        this.inputText = _
        this.ConvertingInput()
      },
      replaceBlackCode(string) {
        return string.replace(/./gsu, char => charTable[char] || char)
      },
      createReturnUTF(string) {
        return `(!![]+[])[-~[]]+(!![]+[])[__]+(!![]+[])[+[]]+(!![]+[])[-~[-~[]]]+(!![]+[])[-~[]]+([]['']+[])[-~[]]+' \"'+'\\\\' +([]['']+[])[[]-[]] +'{' +${string}+ '}'+'\"'`
      },
      wrapper(string) {
        return `[][_][_](${string})()`
      },
      ConvertingInput(){
        const processingData =[]

        for (const input of [...this.inputText+[]]) {

          //使える文字なら => 置き換える
          if (input in charTable) {
            processingData.push(charTable[input])
            continue;
          }

          // charCode単位でイテレートする
          for (let i = 0, l = input.length; i < l; ++i) {
            //使えない文字なら => utf8に変換して、数字を記号化する
            const parsedArr = [...(input.charCodeAt(i).toString(16) + [])]

            //ここで形成した配列をさらにreplaceBlackCodeしてまとめる
            const flamedArr = parsedArr.map(this.replaceBlackCode)

            const utf8code = this.wrapper(this.createReturnUTF(flamedArr.join("+")))
            processingData.push(utf8code)
          }
        }
        this.outputText = processingData.join('+')
      },
    },
  }
</script>

<style scoped>

</style>