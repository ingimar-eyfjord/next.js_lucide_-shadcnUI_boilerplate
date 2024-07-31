import Icon from '../components/Icon';
import { Button } from '../components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to My SaaS App</h1>
      <Icon name="Home" size={24} />
      <Button>Click Me</Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <p>This is a dialog</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
