export const content = () => `
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
  <p><abbr title="attribute">attr</abbr></p>
  <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
  <blockquote class="blockquote">
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <blockquote class="blockquote">
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>

  <code>
      &lt;p&gt;Sample text here...&lt;/p&gt;
      &lt;p&gt;And another line of sample text here...&lt;/p&gt;
  </code>

  <pre>
      <code>
          &lt;p&gt;Sample text here...&lt;/p&gt;
          &lt;p&gt;And another line of sample text here...&lt;/p&gt;
      </code>
  </pre>

  <p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
  <p>
      To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
      To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
  </p>
  <p>
      <samp>This text is meant to be treated as sample output from a computer program.</samp>
  </p
`;

export default {
  title: 'HTML/Content',
  component: content
};
