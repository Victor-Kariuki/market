node('master') {
    stage('PULLING CHANGES') {
        checkout([$class: 'GitSCM',
        branches: [[name: '*/staging']],
        doGenerateSubmoduleConfigurations: false,
        extensions: [],
        submoduleCfg: [],
        userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/kisokolab/kisoko-market.git']]])
    }

    stage('INSTALLING DEPENDENCIES THE APP') {
        sh '''
            echo "INSTALLING"
            sudo yarn
        '''
    }

    stage('BUILDING THE APP') {
        sh '''
            echo "BUILDING THE APP"
            sudo yarn build
        '''
    }

    stage('SERVE THE APPLICATION') {
        sh '''
            echo "SERVE THE APPLICATION"
        '''
    }
}
