# Introduction to LLMs: [ollama](https://github.com/ollama/ollama)

Running LLMs locally, powerful computational hardware required!

## Minimum resources required!
- RAM: 16GB
- CPU: 8-16 Cores ( 16, if you don't have a GPU )
- GPU: Only Nvidia GPUs are supported at this moment! ( Sorry AMD GPUs );
- A good internet connection would be helpful while pulling the models!

## Install: ( Linux/WSL)
```shell
curl https://ollama.ai/install.sh | sh
```

## List available models
```shell
ollama list
```

## Run a model
```shell
ollama run llama2-uncensored
```

## Exit/Stop the model
```shell
/bye
```

## Update/Pull a model
```shell
ollama pull llama2-uncensored
```

## Remove a model
```shell
ollama rm llama2-uncensored
```

## List of some of the available models

### Under `7B` Parameters
```shell
ollama run dolphin-phi
```
```shell
ollama run phi
```
```shell
ollama run orca-mini
```
```shell
ollama run mistral
```
```shell
ollama run neural-chat
```
```shell
ollama run starling-lm
```
```shell
ollama run vicuna
```
```shell
ollama run llava
```
```shell
ollama run llama2
```
```shell
ollama run codellama
```
```shell
ollama run llama2-uncensored
```

### Parameter: `13B`
```shell
ollama run llama2:13b
```

### Parameter: `70B`!
```shell
ollama run llama2:70b
```


## Until next time...

# ;)
