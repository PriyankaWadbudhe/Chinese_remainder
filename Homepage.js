import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { crtSolver } from '../backend/Calculation';
import EquationPreview from './formats/EquationPreview';
import Solution from './Solution';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false,
      equations: [{ a: 0, m: 0 }],
      arrayOfEquation: [],
      solutions: [],
      //   solution: [{moduloProduct:0, coefficients:[], inverses:[], sum:0, x:0}],
    };
  }

  handleEquationAChange = (idx) => (event) => {
    const newEquations = this.state.equations.map((equation, sidx) => {
      if (idx !== sidx) return equation;
      return { ...equation, a: event.target.value };
    });
    this.setState({ equations: newEquations });
  };

  handleEquationMChange = (idx) => (event) => {
    const newEquations = this.state.equations.map((equation, sidx) => {
      if (idx !== sidx) return equation;
      return { ...equation, m: event.target.value };
    });
    this.setState({ equations: newEquations });
  };

  handleSubmit = (event) => {
    const { equations } = this.state;
    // Validate input: harus bilangan bulat positif
    let i = 0;
    let notValid = false;
    while (i < equations.length) {
      if (this.state.equations[i].a <= 0 || this.state.equations[i].m <= 0) {
        notValid = true;
      }
      i++;
    }
    // Validate input
    if (notValid) {
      alert('The number entered is not valid');
    } else if (equations.length < 2) {
      alert('Enter the minimum two equations');
    } else {
      // Masukkan equation
      for (let i = 0; i < equations.length; i++) {
        this.state.arrayOfEquation.push([
          parseInt(this.state.equations[i].a),
          parseInt(this.state.equations[i].m),
        ]);
      }
      const solutionList = crtSolver(this.state.arrayOfEquation);
      this.setState({ solutions: solutionList });
      this.setState({ display: true });
    }
  };

  handleAddEquation = () => {
    this.setState({
      equations: this.state.equations.concat([{ a: 0, m: 0 }]),
    });
  };

  handleRemoveEquation = (idx) => () => {
    this.state.equations.splice(idx, 1);
    this.setState({
      equations: this.state.equations,
    });
  };

  handleReset = () => {
    this.setState({
      display: !this.state.display,
      equations: [{ a: 0, m: 0 }],
      arrayOfEquation: [],
      solutions: [],
    });
  };

  displayForm() {
    return (
      <div className="container-sm">
        <form onSubmit={this.handleSubmit}>
          <br></br>
        
          <br></br>
          <Typography variant="h6">Enter the equation</Typography><br></br>
          <Typography>
            Format: x &equiv; a<sub>i</sub> mod m<sub>i</sub>
          </Typography>
          <br></br>

          {this.state.equations.map((equation, idx) => (
            <Grid
              container
              item
              xs={12}
              direction="row"
              alignItems="center"
              justify="center"
              spacing={3}
              style={{ padding: 5 }}
            >
              <Grid item>
                <TextField
                  label={`a${idx + 1}`}
                  placeholder={`a${idx + 1}`}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleEquationAChange(idx)}
                  value={equation.a}
                  color="primary"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  label={`m${idx + 1}`}
                  placeholder={`m${idx + 1}`}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleEquationMChange(idx)}
                  value={equation.m}
                  color="primary"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={this.handleRemoveEquation(idx)}
                >
                  Delete
                </Button>
              </Grid>
              <br></br>
            </Grid>
          ))}

          <br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.handleAddEquation();
            }}
          >
            Add Congruence
          </Button>
          <br></br>
          <br></br>
          <Typography variant="h6">Equations are : </Typography>
          <EquationPreview equations={this.state.equations} />

          <br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.handleSubmit();
            }}
          >
           SOLVE
          </Button>
        </form>{' '}
      </div>
    );
  }

  render() {
    if (this.state.display) {
      return (
        <Solution
          arrayOfEquation={this.state.arrayOfEquation}
          solutions={this.state.solutions}
        />
      );
    } else {
      return this.displayForm();
    }
  }
}
export default Homepage;
