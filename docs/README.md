# Getting Start

## Prerequisites

- Nodejs (version > 18.0.0)
- Nx (version > 17.0.0)

## Installation and initialise workspace

1. Install nodejs
2. Install nx `npm install -g nx`. This command install nx globally.
3. Create nx workspace
    - Run this command in terminal `npx create-nx-workspace@latest`
    - **Which stack do you want to use?**: `Configures a React application with your framework of choice.`
    - **What framework would you like to use?**: `None`
    - **Integrated monorepo, or standalone project?** `Integrated Monorepo:`
    - **Application name**: `resume-template`
    - **Which bundler would you like to use?**: `Webpack`
    - **Test runner to use for end to end (E2E) tests** `Cypress`
    - **Would you like to add Angular routing?**: `No`
    - **Default stylesheet format**: `emotion`
    - **Enable distributed caching to make your CI faster**: `No`

## Run project

1. Go to project `cd resume-template`
2. Install dependencies `npm install`
3. Run `nx serve resume-template`
4. Open browser `http://localhost:4200`

## Delete default files

1. Delete `nx-welcome` file
2  Remove `nx-welcome` component in App.

## Install Mui package and setup for mui theme

1. Install mui `npm install @mui/material @emotion/react @emotion/styled`
2. Install mui icons `npm install @mui/icons-material`
3. Edit `resume-template/apps/resume-template/src/app/app.tsx` to be like this:

```javascript
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export function App() {
  // Use default theme`
  // Add <CssBaseline /> to reset all browser to a standard style
  // Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      This is resume template page
    </ThemeProvider>
  );
}

export default App;

```

## Create folder strucutre

1. `resume-template/apps/resume-template/src/app/components` : Will stored all shared component
2. `resume-template/apps/resume-template/src/app/hooks` : Will stored all shared custom hooks
3. `resume-template/apps/resume-template/src/app/pages` : Will stored all pages
4. `resume-template/apps/resume-template/src/app/services` : Will stored all services (APIs calls)
5. `resume-template/apps/resume-template/src/app/utils` : Will stored all utils (functions, constants, ...)


## Create Page Layout

1. Create `resume-template/apps/resume-template/src/app/components/page-layout`
2. Create a `Container` component to cover whole screen with `width: 100vh` , `height: 100vh` and `background is a grandient color`
3. Create a component inside the layout to cover whole app. It will decide position of the app (in the middle of the screen).
This will be another container which will have smaller maxSize: `maxSize: md` (max size medium)

## Creating a Background with Square Boxes Floating from Bottom to Top

- install `framer-motion` package
- create folder for component `resume-template/apps/resume-template/src/app/components/animated-backgroud`
- Create SquareBox with size attribute

```typescript
  const SquareBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'size',
  })<{ size: number }>(({ theme, size }) => ({
    width: `${size}px`,
    height: `${size}px`,
    background: 'red',
    marginBottom: '10px',
  }));
```

- Add animation for `SquareBox` dùng motion div:

  - Import farmer motion : `import { motion } from 'framer-motion';`
  - Styled `motion.div`:

  ```typescript
    const SquareBoxContainer = styled(motion.div)<{x: number}>(({ theme, x }) => ({
      position: 'absolute',
      display: 'inline-block',
      top: 0,
      left: x, //left attributes are different to see multiple boxes
    }));
  ```

  - Add `SquareBoxContainert` to cover `SquareBox`

  ```typescript
      <SquareBoxContainer x={i * 100}
          animate={{ y: [1000, 0], rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          <SquareBox key={i} size={(i + 1) * 100} />
        </SquareBoxContainer>
  ```

  - Based on analysis, create a Box interface encapsulating the following attributes, which differentiate individual boxes: `size`, `x position`, and `speed`.

  ```typescript
    interface Box{
      x: string // percentage x-axis on screen
      size: number
      duration: number // Duration to move from bottom to top
    }
  ```

  - Create Box instants and apply them to the background.

  ```typescript
  const Boxes: Box[] = [
      { x: '10%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '25%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '30%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '40%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '50%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '60%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '70%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '80%', size: RandomSizeBox(), duration: RandomDuration() },
      { x: '90%', size: RandomSizeBox(), duration: RandomDuration() },
  ];
  ```

  ```typescript
    <BackgroundContainer maxWidth="xl">
      {Boxes.map((box, i) => (
        <SquareBoxContainer
          key={i}
          size={box.size}
          x={box.x}
          animate={{ y: [1000, 0 - box.size], rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: box.duration,
            ease: 'linear',
          }}
        />
      ))}
    </BackgroundContainer>
  ```

## Create Resume Content

- Install fonts packages

  ```shell
    npm i @fontsource/poppins @fontsource/satisfy
  ```

- Install `react-feather` [Feather Icon](https://feathericons.com/) package `npm i react-feather`
- Install `react-router-dom` package: `npm i react-router-dom`

### Add and style `Experience` page:

- Create file `pages/experience/expereince.tsx`
- Add following content:

```typescript
import { Box, Chip, List, ListItem, Typography, styled } from '@mui/material';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import { Briefcase } from 'react-feather';

const PositionInfo = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(1, 0),
}));

const ExpirienceInfo = styled(List)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const StyledCompanyName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(1, 0),
}));

const StyledJobTitle = styled(Typography)(({ theme }) => ({ theme }) => ({
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(1, 0),
}));

const DurationLocationWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const WorkingDuration = styled(Chip)(({ theme }) => ({
  paddingBottom: theme.spacing(1, 0),
}));

const Experience = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<Briefcase size={35} />} title="Experience" />
        <SectionRow>
          <SectionCol>
            <PositionInfo>
              <StyledCompanyName variant="body1">Company name</StyledCompanyName>

              <StyledJobTitle variant="body1">
                Senior Front-End Software Engineer
              </StyledJobTitle>
              <DurationLocationWrapper>
                <WorkingDuration label="April 2021 - Present" color="primary" />

                <Chip label="Canada" />
              </DurationLocationWrapper>
            </PositionInfo>
            <ExpirienceInfo>
              <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque ipsa, dolore eaque veniam cum perspiciatis voluptas perferendis repellendus praesentium eum repudiandae ipsum quasi accusamus recusandae nobis omnis vel magni.</ListItem>

            </ExpirienceInfo>
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
    </PageCover>
  );
};

export default Experience;
```

## Refactor