interface EmptySpaceProps {
  height: number
}

export default function EmptySpace(props: EmptySpaceProps) {
  const {
    height
  } = props;

  return (
    <div style={{ height: height }}></div>
  )
}