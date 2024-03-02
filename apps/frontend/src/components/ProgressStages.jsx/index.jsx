import SingleStage from './SingleStage';

/**
 * @typedef {{
 *   title: string,
 *   tooltip: string,
 *   status: 'completed' | 'in-progress' | 'to-do'
 * }} Stage
 */

/** @param {{stages: Array<Stage>}} props */
export default function ProgressStages({ stages }) {
  return (
    <ol className='flex items-stretch bg-transparent'>
      {stages.map((props, index) => (
        <SingleStage key={props.title} {...props} stageNumber={index + 1} isLastStage={index < stages.length - 1} />
      ))}
    </ol>
  );
}
