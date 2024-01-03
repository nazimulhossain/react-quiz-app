function Progress({index}) {
  return <progress value={index+1} max={15} />;
}

export default Progress;
