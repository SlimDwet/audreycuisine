<?php

namespace AudreyCuisineBundle\DependencyInjection;

use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\Config\FileLocator;

class AudreyCuisineExtension extends Extension {

    public function load(array $configs, ContainerBuilder $container)
    {
        // Chargement du parameters.yml propre au bundle
        $loader = new YamlFileLoader(
            $container,
            new FileLocator(__DIR__.'/../Resources/config')
        );
        $loader->load('parameters.yml');
    }

}
