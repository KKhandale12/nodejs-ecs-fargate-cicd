# Node.js Hello World App with AWS Fargate CI/CD

## 🛠️ Tech Stack
- **Node.js**
- **Docker**
- **Amazon ECR** – Container image registry
- **Amazon ECS (Fargate)** – Serverless container orchestration
- **AWS CodeBuild** – Continuous integration & deployment

## 🔄 CI/CD Pipeline Flow
1. Code is pushed to the GitHub repository.
2. AWS CodeBuild is triggered:
   - Builds the Docker image.
   - Tags the image with a short Git commit hash.
   - Pushes the image to **Amazon ECR**.
   - Generates `imagedefinitions.json`.
3. ECS Fargate service picks up the updated image and deploys it automatically.

## 💡 Change Tracking (Demo)
To demonstrate CI/CD, modify the font color or text in the `index.js` or frontend HTML.
Push the change to GitHub → The pipeline will auto-deploy the update to ECS.

## 📦 ECS Task Definition (Resource Configuration)
- **CPU**: `1 vCPU`
- **Memory**: `3 GB`
- **Container Port**: `3000`
- **Container Name**: `nodejs-container`
- **Execution Role**: `ecsTaskExecutionRole`

---
