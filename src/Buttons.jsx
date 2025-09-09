function Buttons({ changeCount, count }) {
  return (
    <>
      <button onClick={() => changeCount('increase')}>Increase</button>
      <button onClick={() => changeCount('decrease')}>Decrease</button>
      <button disabled={count == 0} onClick={() => changeCount('reset')}>
        Reset
      </button>
    </>
  );
}
export default Buttons;
