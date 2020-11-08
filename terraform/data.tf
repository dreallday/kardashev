data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "cm-terraform-pbt75goeihsjvmd"
    key    = "kardashevscale-state/terraform.tfstate"
    region = "us-east-1"
  }
}
