import {createId} from "../utils/utils";

export class ServersService {
  serverElements : { id: string, type: string, name: string, content: string }[] = [];

  serverAdded(name: string, content: string) {
    this.serverElements.push({ id: createId(), type: 'server', name: name, content: content });
  }

  blueprintAdded(name: string, content: string) {
    this.serverElements.push({ id: createId(), type: 'blueprint', name: name, content: content });
  }
  serverUpdated(newName: string, newContent: string) {}
}
