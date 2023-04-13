import { useState } from "react";
function Word_Paragraph() {
  const [text, setText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [renderMode, setRenderMode] = useState("none");

  function handleTextChange(event) {
    const text = event.target.value;
    const { wordCount, paragraphCount } = countWordsAndParagraphs(text);
    setLetterCount(text.length);
    setWordCount(wordCount);
    setParagraphCount(paragraphCount);
    setText(text);
  }
  function countWordsAndParagraphs(text) {
    let wordCount = 0;
    let paragraphCount = 0;

    if (text.trim() !== "") {
      wordCount = text.trim().split(/\s+/).length;
      paragraphCount = text.trim().split("\n").length;
    }

    return { wordCount, paragraphCount };
  }
  const handleRenderModeChange = (event) => {
    const mode = event.target.value;
    setRenderMode(mode);
    changeModText(mode);
  };
  const changeModText = (mode) => {
    if (mode === "lowercase") {
      const newText = text.toLowerCase();
      setText(newText);
    } else if (mode === "uppercase") {
      const newText = text.toUpperCase();
      setText(newText);
    } else {
    }
  };
  return (
    <div className="Container">
      <div className="OutputContainer">
        <div className="OutputBox">
          <div className="OutputItem">
            <div className="OutputItemTitle">Letter count:</div>
            <div className="OutputItemValue">{letterCount}</div>
          </div>
          <div className="OutputItem">
            <div className="OutputItemTitle">Word count:</div>
            <div className="OutputItemValue">{wordCount}</div>
          </div>
          <div className="OutputItem">
            <div className="OutputItemTitle">Paragraph count:</div>
            <div className="OutputItemValue">{paragraphCount}</div>
          </div>
        </div>
      </div>
      <div className="InputContainer">
        <textarea
          className="TextInput"
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here"
        />
        <div style={{ display: "flex" }}>
          <div className="RenderMode">
            <label>
              <input
                type="radio"
                name="renderMode"
                value="none"
                checked={renderMode === "none"}
                onChange={handleRenderModeChange}
              />
              none
            </label>
            <label>
              <input
                type="radio"
                name="renderMode"
                value="uppercase"
                checked={renderMode === "uppercase"}
                onChange={handleRenderModeChange}
              />
              Uppercase
            </label>
          </div>
          <label>
            <input
              type="radio"
              name="renderMode"
              value="lowercase"
              checked={renderMode === "lowercase"}
              onChange={handleRenderModeChange}
            />
            Lowercase
          </label>
        </div>
      </div>
    </div>
  );
}
export default Word_Paragraph;
