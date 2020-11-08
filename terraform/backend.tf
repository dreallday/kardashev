terraform {
  backend "s3" {
    bucket  = "cm-terraform-pbt75goeihsjvmd"
    key     = "kardashevscale-state/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
    # dynamodb_table = "terraform-lock"
  }
}
