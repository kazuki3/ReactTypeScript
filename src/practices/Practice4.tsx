export const Practice4 = () => {
  const getTotalFee = (num) => {
    const total: number = num * 1.1;
    console.log(total);
  };
  const onClickPlactice = () => {
    getTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題:設定ファイルの変更</p>
      <button onClick={onClickPlactice}>練習問題4を実行</button>
    </div>
  );
};
