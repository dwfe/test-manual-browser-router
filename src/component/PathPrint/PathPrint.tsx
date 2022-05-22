import {Path} from '@do-while-for-each/browser-router'
import './PathPrint.css'

export function PathPrint() {

  return (
    <div className="PathPrint">
      {/*<p className="PathPrint_text">path:</p>*/}
      <p className="PathPrint_code"><code>{`${Path.of(window.location)}`}</code></p>
    </div>
  );
}
