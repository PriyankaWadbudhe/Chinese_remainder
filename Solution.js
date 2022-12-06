import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { isAllCoprime } from '../backend/Calculation';
import Coefficient from './formats/Coefficient';
import InverseFormula from './formats/InverseFormula';
import ModuloProductFormula from './formats/ModuloProductFormula';
import ArrayOfEquation from './formats/ArrayOfEquation';
import Equation from './formats/Equation';
import Coprime from './formats/Coprime';
import Sum from './formats/Sum';

class Solution extends React.Component {
  render() {
    if (isAllCoprime(this.props.arrayOfEquation)) {
      return (
        <div className="container-sm">
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel0a-content"
              id="panel0a-header"
            >
              <Typography>Chinese Remainder Theorem Algorithm : </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>
                  For example, m<sub>1</sub>, m<sub>1</sub>, ..., m<sub>n</sub>{' '}
                   are co-prime to one another GCD(m
                  <sub>i</sub>,m
                  <sub>j</sub>) = 1 for i &ne; j.
                </Typography>
                <Typography>Then, the system of linear congruence: </Typography>
                <Typography>
                  x &equiv; a<sub>1</sub> (mod m<sub>1</sub>)
                </Typography>
                <Typography>
                  x &equiv; a<sub>2</sub> (mod m<sub>2</sub>)
                </Typography>
                <Typography>
                  x &equiv; a<sub>n</sub> (mod m<sub>n</sub>)
                </Typography>
                <Typography>
                 has a unique solution in modulus m = m<sub>1*</sub>m
                  <sub>2*</sub>...*m
                  <sub>n</sub>.
                </Typography>
                <Typography>
                  (that is, there exists a solution x with 0 &le; x &lt; m and all
                   another solution that is congruent in modulus m with this solution)
                </Typography>
                <br></br>
                <Typography>
                In general, the solution to the linear congruence system is
                   shaped
                </Typography>
                <Typography>
                  x = a<sub>1</sub>M<sub>1</sub>y<sub>1</sub> + a<sub>2</sub>M
                  <sub>2</sub>y<sub>2</sub> + ... + a<sub>n</sub>M<sub>n</sub>y
                  <sub>n</sub>
                </Typography>
                <Typography>which in this case,</Typography>
                <Typography>
                  {' '}
                  M<sub>k</sub> is the product of all moduli except m
                  <sub>k</sub>
                </Typography>
                <Typography>
                  y<sub>k</sub> is the inverse of M<sub>k</sub> in modulus m
                  <sub>k</sub>
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Step 1 :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>
                From the modulo equation above, it is known:
                </Typography>
                <Equation arrayOfEquation={this.props.arrayOfEquation} />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Step 2 :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>Check: </Typography>
                <Coprime arrayOfEquation={this.props.arrayOfEquation} />
                <Typography>
                Because all of them are coprime (GCD = 1), then the equation above
                   can be solved using the Chinese Reminder Theorem formula.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Step 3 : </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>Count:</Typography>
                <ModuloProductFormula
                  arrayOfEquation={this.props.arrayOfEquation}
                  solutions={this.props.solutions}
                />
                <Coefficient
                  arrayOfEquation={this.props.arrayOfEquation}
                  solutions={this.props.solutions}
                />
                <InverseFormula
                  arrayOfEquation={this.props.arrayOfEquation}
                  solutions={this.props.solutions}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>Step 4 : </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>
                Then, the solution of the congruence system is
                </Typography>
                <Sum
                  arrayOfEquation={this.props.arrayOfEquation}
                  solutions={this.props.solutions}
                />
                <Typography>
                  x = sum (mod M) = {this.props.solutions[3]} (mod{' '}
                  {this.props.solutions[0]}) = {this.props.solutions[4]}
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>Solution : </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>
                So, based on the Chinese Remainder Theorem, the smallest positive integer that satisfies is{' '}
                  {this.props.solutions[4]}.
                </Typography><br></br>
                <Typography><b> Therefore, x = {this.props.solutions[4]} </b></Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <br></br>
          <Button variant="contained" color="primary" href="/">
            Back
          </Button>
          <br></br>
        </div>
      );
    }
    // If it can't be solved with CRT
    else {
      return (
        <div className="container-sm bg-info">
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Step 0 :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>Review the modulo equation:</Typography>
                <ArrayOfEquation arrayOfEquation={this.props.arrayOfEquation} />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Step 1 :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>
                From the modulo equation above, it is known:
                </Typography>
                <Equation arrayOfEquation={this.props.arrayOfEquation} />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Step 2  :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography>Check:</Typography>
                <Coprime arrayOfEquation={this.props.arrayOfEquation} />
                <Typography>
                Because not all are coprime (GCD = 1), then the equation in
                   above cannot be calculated using Chinese Reminder
                   Theorem.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br></br>
          <Button variant="contained" color="primary" href="/">
            Back
          </Button>
          <br></br>          
        </div>
      );
    }
  }
}
export default Solution;

