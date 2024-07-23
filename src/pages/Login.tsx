
import {
  makeStyles,
  Body1,
  Button,
  Label,
  useId,
  Input,
  Switch
} from "@fluentui/react-components";
import { ArrowRightRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
    marginTop: "50px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "400px",
    padding: "20px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  }
});

export const Login = (props: SwitchProps) => {
  const emailId = useId("input-email");
  const passwordId = useId("input-password");

  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <Body1>
            <b>SimplePos</b> Login
          </Body1>
        }
      />

      <CardPreview>
        <form className={styles.form}>
            <div>
                <Label htmlFor={emailId}>Email</Label>
                <Input type="email" id={emailId} />
            </div>
            <div>
                <Label htmlFor={passwordId}>Password</Label>
                <Input type="password" defaultValue="password" id={passwordId} />
            </div>
        </form>
      </CardPreview>

      <CardFooter className="flex justify-end">
        <Switch label="Dark theme" {...props} />
        <Button icon={<ArrowRightRegular fontSize={16} />}>Login</Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
