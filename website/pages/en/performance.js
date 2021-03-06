/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const markdownStyle = {
    marginLeft: '3vw'
}

class PerfBlock extends React.Component {
        render () {
            return (
            <code
              dangerouslySetInnerHTML={{ __html:
            `                      RUNTIME PERFORMANCE
            <br>                      ===================
            <br>                      friends
            <br>                      dust » wait                      dust »      587 op/s
            <br>                     marko » wait                     marko »    3,867 op/s
            <br>                   ✓ marko »    3,867 op/s (fastest)
            <br>                    ✗ dust »      587 op/s (84.82% slower)
            <br>
            <br>                      if-expression
            <br>                      jade » wait                      jade »   62,415 op/s
            <br>                     marko » wait                     marko »  369,785 op/s
            <br>                       pug » wait                       pug »  477,592 op/s
            <br>                     ✓ pug »  477,592 op/s (fastest)
            <br>                   ✗ marko »  369,785 op/s (22.57% slower)
            <br>                    ✗ jade »   62,415 op/s (86.93% slower)
            <br>
            <br>                      projects-escaped
            <br>                      dust » wait                      dust »   20,804 op/s
            <br>                handlebars » wait                handlebars »   60,227 op/s
            <br>                     marko » wait                     marko »   69,526 op/s
            <br>        marko (native-for) » wait        marko (native-for) »   46,002 op/s
            <br>                   ✓ marko »   69,526 op/s (fastest)
            <br>              ✗ handlebars »   60,227 op/s (13.37% slower)
            <br>      ✗ marko (native-for) »   46,002 op/s (33.83% slower)
            <br>                    ✗ dust »   20,804 op/s (70.08% slower)
            <br>
            <br>                      projects-unescaped
            <br>                      dust » wait                      dust »   57,974 op/s
            <br>                handlebars » wait                handlebars »  177,306 op/s
            <br>                     marko » wait                     marko »  232,571 op/s
            <br>        marko (native-for) » wait        marko (native-for) »  291,787 op/s
            <br>      ✓ marko (native-for) »  291,787 op/s (fastest)
            <br>                   ✗ marko »  232,571 op/s (20.29% slower)
            <br>              ✗ handlebars »  177,306 op/s (39.23% slower)
            <br>                    ✗ dust »   57,974 op/s (80.13% slower)
            <br>
            <br>                      reverse-helper
            <br>                      dust » wait                      dust »  262,243 op/s
            <br>                     marko » wait                     marko »  309,083 op/s
            <br>                squirrelly » wait                squirrelly »  417,208 op/s
            <br>              ✓ squirrelly »  417,208 op/s (fastest)
            <br>                   ✗ marko »  309,083 op/s (25.92% slower)
            <br>                    ✗ dust »  262,243 op/s (37.14% slower)
            <br>
            <br>                      search-results
            <br>                      dust » wait                      dust »   11,513 op/s
            <br>                     marko » wait                     marko »   39,975 op/s
            <br>                   ✓ marko »   39,975 op/s (fastest)
            <br>                    ✗ dust »   11,513 op/s (71.20% slower)
            <br>
            <br>                      simple-0
            <br>                       dot » wait                       dot »  284,955 op/s
            <br>                      dust » wait                      dust »  199,097 op/s
            <br>                       es6 » wait                       es6 »  385,636 op/s
            <br>                handlebars » wait                handlebars »  299,253 op/s
            <br>                    lodash » wait                    lodash »  251,447 op/s
            <br>                     marko » wait                     marko »  300,733 op/s
            <br>                squirrelly » wait                squirrelly »  470,324 op/s
            <br>              ✓ squirrelly »  470,324 op/s (fastest)
            <br>                     ✗ es6 »  385,636 op/s (18.01% slower)
            <br>                   ✗ marko »  300,733 op/s (36.06% slower)
            <br>              ✗ handlebars »  299,253 op/s (36.37% slower)
            <br>                     ✗ dot »  284,955 op/s (39.41% slower)
            <br>                  ✗ lodash »  251,447 op/s (46.54% slower)
            <br>                    ✗ dust »  199,097 op/s (57.67% slower)
            <br>
            <br>                      simple-1
            <br>                       dot » wait                       dot »  272,704 op/s
            <br>                      dust » wait                      dust »  115,116 op/s
            <br>                handlebars » wait                handlebars »  146,052 op/s
            <br>                      jade » wait                      jade »   68,580 op/s
            <br>                     react » wait                     react »    3,643 op/s
            <br>                     marko » wait                     marko »  148,049 op/s
            <br>                  nunjucks » wait                  nunjucks »   30,399 op/s
            <br>                       pug » wait                       pug »  328,248 op/s
            <br>                      swig » wait                      swig »   44,952 op/s
            <br>                       vue » wait                       vue »   13,208 op/s
            <br>                     ✓ pug »  328,248 op/s (fastest)
            <br>                     ✗ dot »  272,704 op/s (16.92% slower)
            <br>                   ✗ marko »  148,049 op/s (54.90% slower)
            <br>              ✗ handlebars »  146,052 op/s (55.51% slower)
            <br>                    ✗ dust »  115,116 op/s (64.93% slower)
            <br>                    ✗ jade »   68,580 op/s (79.11% slower)
            <br>                    ✗ swig »   44,952 op/s (86.31% slower)
            <br>                ✗ nunjucks »   30,399 op/s (90.74% slower)
            <br>                     ✗ vue »   13,208 op/s (95.98% slower)
            <br>                   ✗ react »    3,643 op/s (98.89% slower)
            <br>
            <br>                      simple-2
            <br>                      dust » wait                      dust »  151,924 op/s
            <br>                     marko » wait                     marko »  226,394 op/s
            <br>                   ✓ marko »  226,394 op/s (fastest)
            <br>                    ✗ dust »  151,924 op/s (32.89% slower)
            <br>
            <br>                      simple-string
            <br>                       dot » wait                       dot »  758,657 op/s
            <br>                handlebars » wait                handlebars »  699,743 op/s
            <br>                       pug » wait                       pug »  789,758 op/s
            <br>                squirrelly » wait                squirrelly »  811,316 op/s
            <br>              ✓ squirrelly »  811,316 op/s (fastest)
            <br>                     ✗ pug »  789,758 op/s (2.66% slower)
            <br>                     ✗ dot »  758,657 op/s (6.49% slower)
            <br>              ✗ handlebars »  699,743 op/s (13.75% slower)
            <br>
            <br>                      ui-components
            <br>                     react » wait                     react »    2,876 op/s
            <br>                     marko » wait                     marko »   93,551 op/s
            <br>                   ✓ marko »   93,551 op/s (fastest)
            <br>                   ✗ react »    2,876 op/s (96.93% slower)
            <br>
            <br>
            <br>
            <br>                      COMPILED SIZE (gzipped/uncompressed)
            <br>                      ====================================
            <br>                      friends
            <br>                    ✓ dust »   488 bytes gzipped    1362 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   775 bytes gzipped    2307 bytes uncompressed
            <br>                                   37.03% larger              40.96% larger
            <br>
            <br>                      if-expression
            <br>                    ✓ jade »   387 bytes gzipped    1049 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   462 bytes gzipped    1104 bytes uncompressed
            <br>                                   16.23% larger               4.98% larger
            <br>                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
            <br>                                   57.24% larger              50.94% larger
            <br>
            <br>                      projects-escaped
            <br>                    ✓ dust »   261 bytes gzipped     547 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   554 bytes gzipped    1621 bytes uncompressed
            <br>                                   52.89% larger              66.26% larger
            <br>              ✗ handlebars »   567 bytes gzipped    1584 bytes uncompressed
            <br>                                   53.97% larger              65.47% larger
            <br>      ✗ marko (native-for) »   578 bytes gzipped    1649 bytes uncompressed
            <br>                                   54.84% larger              66.83% larger
            <br>
            <br>                      projects-unescaped
            <br>                    ✓ dust »   266 bytes gzipped     579 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   545 bytes gzipped    1568 bytes uncompressed
            <br>                                   51.19% larger              63.07% larger
            <br>              ✗ handlebars »   546 bytes gzipped    1616 bytes uncompressed
            <br>                                   51.28% larger              64.17% larger
            <br>      ✗ marko (native-for) »   567 bytes gzipped    1596 bytes uncompressed
            <br>                                   53.09% larger              63.72% larger
            <br>
            <br>                      reverse-helper
            <br>              ✓ squirrelly »   132 bytes gzipped     272 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                    ✗ dust »   147 bytes gzipped     311 bytes uncompressed
            <br>                                   10.20% larger              12.54% larger
            <br>                   ✗ marko »   361 bytes gzipped     950 bytes uncompressed
            <br>                                   63.43% larger              71.37% larger
            <br>
            <br>                      search-results
            <br>                    ✓ dust »   544 bytes gzipped    1501 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   711 bytes gzipped    1931 bytes uncompressed
            <br>                                   23.49% larger              22.27% larger
            <br>
            <br>                      simple-0
            <br>              ✓ squirrelly »   142 bytes gzipped     173 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                    ✗ dust »   172 bytes gzipped     233 bytes uncompressed
            <br>                                   17.44% larger              25.75% larger
            <br>                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
            <br>                                   45.80% larger              51.40% larger
            <br>              ✗ handlebars »   321 bytes gzipped     633 bytes uncompressed
            <br>                                   55.76% larger              72.67% larger
            <br>                   ✗ marko »   325 bytes gzipped     759 bytes uncompressed
            <br>                                   56.31% larger              77.21% larger
            <br>
            <br>                      simple-1
            <br>                   ✓ react »   392 bytes gzipped     842 bytes uncompressed
            <br>                                      (smallest)               7.01% larger
            <br>                    ✗ dust »   412 bytes gzipped     868 bytes uncompressed
            <br>                                    4.85% larger               9.79% larger
            <br>                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
            <br>                                   20.16% larger                 (smallest)
            <br>                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
            <br>                                   24.90% larger              29.84% larger
            <br>                   ✗ marko »   597 bytes gzipped    1370 bytes uncompressed
            <br>                                   34.34% larger              42.85% larger
            <br>                ✗ nunjucks »   608 bytes gzipped    1401 bytes uncompressed
            <br>                                   35.53% larger              44.11% larger
            <br>              ✗ handlebars »   624 bytes gzipped    1513 bytes uncompressed
            <br>                                   37.18% larger              48.25% larger
            <br>                    ✗ swig »   782 bytes gzipped    3334 bytes uncompressed
            <br>                                   49.87% larger              76.51% larger
            <br>                     ✗ pug »  1046 bytes gzipped    2303 bytes uncompressed
            <br>                                   62.52% larger              66.00% larger
            <br>
            <br>                      simple-2
            <br>                    ✓ dust »   267 bytes gzipped     635 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   437 bytes gzipped    1153 bytes uncompressed
            <br>                                   38.90% larger              44.93% larger
            <br>
            <br>                      simple-string
            <br>                     ✓ dot »   114 bytes gzipped     102 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>              ✗ squirrelly »   121 bytes gzipped     172 bytes uncompressed
            <br>                                    5.79% larger              40.70% larger
            <br>                     ✗ pug »   124 bytes gzipped     116 bytes uncompressed
            <br>                                    8.06% larger              12.07% larger
            <br>              ✗ handlebars »   196 bytes gzipped     246 bytes uncompressed
            <br>                                   41.84% larger              58.54% larger
            <br>
            <br>                      ui-components
            <br>                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
            <br>                                      (smallest)                 (smallest)
            <br>                   ✗ marko »   386 bytes gzipped     990 bytes uncompressed
            <br>                                   47.15% larger              68.69% larger
            <br>`
              }}>
            </code>
            )
        }
    }
class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <h2>Results from my benchmarks, based off of MarkoJS's, here: <a href="https://github.com/nebrelbug/squirrelly-benchmarks">https://github.com/nebrelbug/squirrelly-benchmarks</a></h2>
        <div  style={markdownStyle} className="mainContainer">
        <PerfBlock />
        </div>
      </div>
    );
  }
}

module.exports = Index;
