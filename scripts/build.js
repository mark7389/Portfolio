require("child_process").spawn("npm",
  ["run build"],
  {
    stdio:"inherit",
    cwd:"portfolio",
    shell:true
  }
)