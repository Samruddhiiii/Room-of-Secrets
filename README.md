<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Room of Secrets</title>
</head>
<body>

  <h1>Room of Secrets</h1>

  <p><strong>Room of Secrets</strong> is an interactive virtual escape game where participants must solve puzzles across multiple levels to progress and win.  
  The game features six challenging levels and offers a 4–5 hour-long immersive experience for teams or individuals.</p>

  <h2>Built Using</h2>
  <ul>
    <li>React.js</li>
    <li>Material UI for styled components</li>
    <li>AI-generated assets for enhanced horror visuals</li>
  </ul>

  <h2>Scary Effects</h2>
  <p>The website incorporates a dark and suspenseful theme using visual effects such as flickering elements, eerie typography, and unpredictable animations.  
  Every design element — from fonts to sound — is crafted to maintain a haunting user experience.</p>

  <h2>About the Game</h2>
  <ul>
    <li>Utilizes <strong>Local Storage</strong> to preserve player health status.</li>
    <li>Employs <strong>React Context</strong> for global state management of <code>health</code>.</li>
    <li>Implements a <strong>custom useTimeout hook</strong> to reveal hints for 60 seconds.</li>
    <li>Includes <strong>URL protection</strong> to prevent players from manually skipping levels.</li>
  </ul>

  <h2>Scoring System</h2>
  <table>
    <tr>
      <th>Action</th>
      <th>Health Impact</th>
    </tr>
    <tr>
      <td>Initial Health</td>
      <td>500</td>
    </tr>
    <tr>
      <td>Incorrect Answer</td>
      <td>-50</td>
    </tr>
    <tr>
      <td>Hint Taken (60 seconds)</td>
      <td>-100</td>
    </tr>
    <tr>
      <td>Give Up (Warning Page)</td>
      <td>-500 (Game Over)</td>
    </tr>
  </table>

  <blockquote>
    <strong>Objective:</strong> Escape all rooms with remaining health greater than zero.
  </blockquote>

  <h2>Full Screen Mode</h2>
  <p>The game provides an option to toggle between full-screen and windowed view dynamically.</p>

  <code>
document.addEventListener('fullscreenchange',<br>
&nbsp;&nbsp;setIsFullScreen(document.fullscreenElement !== null));<br>
  </code>

  <p>React re-renders components based on this state, ensuring accurate button labeling and consistent behavior.</p>

  <h2>Sound Effects</h2>
  <p>Players can toggle background music during gameplay. The button dynamically updates its label based on the audio’s state.</p>

  <code>
&lt;audio ref="audioRef" loop&gt;<br>
&nbsp;&nbsp;&lt;source src="sound_effect" /&gt;<br>
&lt;/audio&gt;
  </code>

  <h2>Typewriter Effect</h2>
  <p>The game uses a typing animation to gradually render text on the screen, creating a suspenseful storytelling effect.</p>

  <h2>Authentication Check</h2>
  <ul>
    <li>Each route runs an <code>useEffect</code> authentication check on load.</li>
    <li>Unauthenticated users are automatically redirected to the homepage.</li>
    <li>Valid users with <code>auth: true</code> in their state can access subsequent levels.</li>
  </ul>

  <blockquote>
    This mechanism ensures only authenticated players can progress, maintaining game integrity and sequence.
  </blockquote>

  <h2>Mission</h2>
  <p>Survive the mansion by solving cryptic puzzles and maintaining your health.  
  Every action counts in the <strong>Room of Secrets</strong>.</p>

</body>
</html>


