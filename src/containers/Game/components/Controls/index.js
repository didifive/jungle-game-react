import { ControlsStyled } from "./styled";

const Controls = () => {
  return (
    <ControlsStyled>
      <div>
        <p>Fuja dos inimigos:</p>
        <p>Pressione [Espaço]</p>
          <img 
            alt="tecla espaço"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAw0lEQVRoge3SMQ4BURhF4fMey2ANSnvQSPSiswAqS7EFsQM2oJJoMKEQ05KgGTPGswaj+PPifis4N7kgIiIiIiL/yq33xw4hTIGGdcyX0uAYuvXucCa+eAACnD2RxgM4aHrriF9pgDUNsBb/gGdeWDdUluUFPjmlZBGOyPKC5JRSv94erDZb657KPHC3jqjKwc0DS+uQHyx8WTIBLtYlFVzLUJv48aCXvMtXK8CMOO50dzB/h1p71O8erGNERERERMTOB9ntO3JOxqrPAAAAAElFTkSuQmCC"
          />
        <p>ou toque na tela</p>
          <img
            alt="toque" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADh0lEQVRoge2ZTUgVURTHf6ZFVoIPs4UfCWXpKtpFkpgLXRVZuI+oVoU7McFNCVZ7Q2jZJijNiAyshVFCWGAfG21RYWQF5cczS8LqtbhnnHnzZnxzZ+Z9ZO8Pl3nnzDnnnr/3nnvvXCGHHHL477AbuAUsALEsb1GgH6h2IjGbBQnqthk7mQF5cRcot7PMQlQAQ6icb1pfREVZkYGk/KISlfO8VWkM1b+GlbzXZTiR0LBmiBSEHC8CtABHgFrMmvsATAB3gNvAXMj9riBojRQCnajCS7ZkzgHngI0B+jOQkHcQImXAM0uMYeAUUANsllYruvsWu6fiGwShESkD3ovvJHDAg0+92MbENwiZUIgUYo7ECFAs+m1AN/AcWJQ2DlwASsWmGHgovmP4n2ahEOkUnwlMEq2sflaLAsfENgK8Fn2HLgO3vHWJRDAL25hOrcAf0Q0CDZg1chC1WsWA38BR8WnAXAAi+jyCEzmBWdigppMxEu2r+HVgHiu2iu6B6I5r9G8gMJFBsT8pcjfmSABsAC4DH4Fp4KLoQO0lMeC8yKdFHtBh4Ja3LhFjbteI/ELkBpEvWWIarUfeNYo8LnIt5qqni8BEjGlUZJO3iDwt8n6gTn5Py7sikRdcZB2s5O33iLJensvyfCkBF0U29oYnFh9D9w0YxfzD/ZJnKMcl3RGZBJZQe4mXeKvFL0atZG80+neNq0ukCtij0UGy+E3AXo3+XeOG/WGlSyRwP2vmeyTdRF4Bn4GzqeogXVPL2q4A7whGLGM1Yt1X3IjZTwI6/aS92L0Q6yE50k7kMfDIIo+Kzm7vdBLw1E+eRWGVddACHEIdxfuAtz7iGR9ZjZr5JNj5HZEu4qfDItAcIJ5uPgl2fq5MC4GfqPNWG3BNYixpJOI5QQdsF5u4K9N+UQ7hnUyV+Eyh9qM8oJf4EfKLZP6VwD2xuWF9sQt1Re+0etibUaR5mPXQK7KVzDL+4bRYOOXyBdhpd65GjUzUxclo1tWnHvjhQKYdOJNCIvPAdYLfi8WhCZPMVfytfHak6pCZFM0kjoxflEqc2RDy8oWwyLRKjJGQ8vIFK5k+IF/TPx91JxwjWI2FgmbMvWQYKPHoV4CqsRhqNdyUkuw0UQd8QiU1g1rFdrjYlqCuUcfE/juwLw05ekY5akS87E1Gm0IdHLMSh1H/F5nDOfmvqL2pDfdbmRxyyBT+AvDI8cnni8rmAAAAAElFTkSuQmCC"
          />
        <p>para pular.</p>
      </div>
    </ControlsStyled>
  )
};

export default Controls