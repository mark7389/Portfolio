require("child_process").spawn("npm",
  ["start"],
  {
    stdio:"inherit",
    cwd:"portfolio",
    shell:true
  }
)