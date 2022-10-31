import { useForm } from "./useForm";

export function HookForm() {
    const {username, password, onInput} = useForm()

    return <>
        <input name="username" value={username} onChange={onInput} />
        <input name="password" type="password" value={password} onChange={onInput} />
    </>
}