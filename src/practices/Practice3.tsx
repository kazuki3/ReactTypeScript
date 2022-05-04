export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total: number = num * 1.1;
    return total;
  };
  const onClickPlactice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPlactice}>練習問題3を実行</button>
    </div>
  );
};
